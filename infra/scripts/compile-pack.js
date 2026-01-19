#!/usr/bin/env node
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { createHash } from "node:crypto";
import { execSync } from "node:child_process";

const ROOT = process.cwd();

function fail(msg) {
  console.error(msg);
  process.exit(1);
}

function sha256(content) {
  return createHash("sha256").update(content).digest("hex");
}

function readJson(path) {
  return JSON.parse(readFileSync(path, "utf8"));
}

function getGitCommit() {
  try {
    return execSync("git rev-parse HEAD", { cwd: ROOT, stdio: ["ignore", "pipe", "ignore"] })
      .toString()
      .trim();
  } catch {
    return "UNKNOWN";
  }
}

function parseArgs(argv) {
  const args = { lane: null, pack: null };
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === "--lane") args.lane = argv[i + 1];
    if (argv[i] === "--pack") args.pack = argv[i + 1];
  }
  if (!args.lane) fail("Missing --lane <lane>");
  if (!args.pack) fail("Missing --pack <pack>");
  return args;
}

function planPath(lane, pack) {
  return join(ROOT, "infra", "compile", "plans", lane, `${pack}.json`);
}

function resolvePath(rel) {
  return join(ROOT, rel);
}

function ensureDir(path) {
  mkdirSync(path, { recursive: true });
}

function writeLaneIndex(lane) {
  const plansDir = join(ROOT, "infra", "compile", "plans", lane);
  const laneOutDir = join(ROOT, "public", "_compiled", lane);
  const laneMetaDir = join(laneOutDir, "_meta");

  const planFiles = existsSync(plansDir)
    ? readdirSync(plansDir).filter(f => f.endsWith(".json"))
    : [];

  const packs = planFiles.map(file => {
    const pPath = join(plansDir, file);
    const plan = readJson(pPath);

    // output can be relative (just filename) or full path
    const outFile = plan.output.includes("/")
      ? plan.output.split("/").pop()
      : plan.output;
    const outPath = `public/_compiled/${lane}/${outFile}`;
    const metaPath = `public/_compiled/${lane}/_meta/${plan.pack}-COMPILE_META.json`;

    return {
      pack: plan.pack,
      plan: `infra/compile/plans/${lane}/${file}`,
      output: outPath,
      meta: metaPath,
      exists: existsSync(join(ROOT, outPath))
    };
  });

  const index = {
    lane,
    generated_at: new Date().toISOString(),
    packs
  };

  ensureDir(laneOutDir);
  writeFileSync(join(laneOutDir, "index.json"), JSON.stringify(index, null, 2) + "\n");
}

function main() {
  const { lane, pack } = parseArgs(process.argv.slice(2));
  const pPath = planPath(lane, pack);
  if (!existsSync(pPath)) fail(`Compile plan not found: ${pPath}`);

  const plan = readJson(pPath);
  if (plan.lane !== lane) fail(`Plan lane mismatch: expected ${lane}, got ${plan.lane}`);
  if (plan.pack !== pack) fail(`Plan pack mismatch: expected ${pack}, got ${plan.pack}`);

  if (plan.mode !== "concat") fail(`Unsupported mode (for now): ${plan.mode}`);

  const git_commit = getGitCommit();
  const built_at = new Date().toISOString();

  const sources = plan.sources;
  const source_hashes = {};
  const parts = [];

  for (const rel of sources) {
    const abs = resolvePath(rel);
    if (!existsSync(abs)) fail(`Source missing: ${rel}`);
    const content = readFileSync(abs, "utf8");
    source_hashes[rel] = sha256(content);

    parts.push(`\n\n---\n\n## Source: \`${rel}\`\n\n`);
    parts.push(content);
  }

  const header = [
    "---",
    `lane: ${lane}`,
    `pack: ${pack}`,
    `built_at: ${built_at}`,
    `git_commit: ${git_commit}`,
    "sources:",
    ...sources.map(s => `  - ${s}`),
    "source_hashes:",
    ...Object.entries(source_hashes).map(([k, v]) => `  ${k}: ${v}`),
    "---",
    ""
  ].join("\n");

  // Determine output path - handle both relative and full paths in plan
  const outFile = plan.output.includes("/")
    ? plan.output.split("/").pop()
    : plan.output;
  const outRel = `public/_compiled/${lane}/${outFile}`;
  const outAbs = resolvePath(outRel);

  ensureDir(dirname(outAbs));
  writeFileSync(outAbs, header + parts.join(""), "utf8");

  // Write pack-specific meta for verification tooling
  const metaDir = join(ROOT, "public", "_compiled", lane, "_meta");
  ensureDir(metaDir);
  writeFileSync(
    join(metaDir, `${pack}-COMPILE_META.json`),
    JSON.stringify(
      {
        lane,
        pack,
        built_at,
        git_commit,
        sources,
        source_hashes,
        output: outRel,
        plan: `infra/compile/plans/${lane}/${pack}.json`
      },
      null,
      2
    ),
    "utf8"
  );

  // Generate lane index
  writeLaneIndex(lane);

  console.log(`✅ Compiled pack written: ${outRel}`);
}

main();
