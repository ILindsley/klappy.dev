#!/usr/bin/env node
/**
 * CI check: instruction registry coverage + protocol refs + allowed owners + duplicates.
 * Run: node scripts/check-registry.js
 * Exit 0 = pass, Exit 1 = fail with actionable output.
 */

import { readFileSync, existsSync } from "fs";
import fg from "fast-glob";

const REGISTRY_PATH = "canon/instructions/REGISTRY.json";
const INSTRUCTION_PATTERNS = ["canon/instructions/*.md", "canon/agents/*.md"];

const ALLOWED_OWNERS = ["klappy.dev", "oddkit"];
const PROTOCOL_PATTERN = /^(klappy|oddkit):\/\/.+$/; // require non-empty path

async function main() {
  const errors = [];

  if (!existsSync(REGISTRY_PATH)) {
    console.error(`ERROR: Registry not found at ${REGISTRY_PATH}`);
    process.exit(1);
  }

  let registry;
  try {
    registry = JSON.parse(readFileSync(REGISTRY_PATH, "utf-8"));
  } catch (e) {
    console.error(`ERROR: Registry is not valid JSON: ${e.message}`);
    process.exit(1);
  }

  // Basic shape validation
  if (!registry || typeof registry !== "object") errors.push("Registry must be a JSON object");
  if (!registry.version || typeof registry.version !== "string")
    errors.push("Registry missing required 'version' string");
  if (!Array.isArray(registry.instructions))
    errors.push("Registry missing required 'instructions' array");

  // Instruction validation + duplicates
  const seenIds = new Set();
  const seenPaths = new Set();

  for (const instruction of registry.instructions || []) {
    const { id, path, owner, uri, depends_on } = instruction || {};

    if (!id || typeof id !== "string") {
      errors.push(`Instruction missing valid id: ${JSON.stringify(instruction)}`);
      continue;
    }

    if (seenIds.has(id)) errors.push(`Duplicate instruction id: "${id}"`);
    seenIds.add(id);

    if (!path || typeof path !== "string") {
      errors.push(`Instruction "${id}" missing valid path`);
    } else {
      if (seenPaths.has(path)) errors.push(`Duplicate instruction path: "${path}"`);
      seenPaths.add(path);
    }

    if (!ALLOWED_OWNERS.includes(owner)) {
      errors.push(
        `Instruction "${id}": unknown owner "${owner}". Allowed: ${ALLOWED_OWNERS.join(", ")}`,
      );
    }

    if (uri && !PROTOCOL_PATTERN.test(uri)) {
      errors.push(
        `Instruction "${id}": uri "${uri}" missing required protocol (klappy:// or oddkit://)`,
      );
    }

    for (const dep of depends_on || []) {
      if (!dep?.ref || !PROTOCOL_PATTERN.test(dep.ref)) {
        errors.push(`Instruction "${id}": depends_on ref "${dep?.ref}" missing required protocol`);
      }
      if (
        !dep?.type ||
        !["tool_schema", "charter", "canon_doc", "instruction"].includes(dep.type)
      ) {
        errors.push(
          `Instruction "${id}": depends_on type "${dep?.type}" invalid (tool_schema|charter|canon_doc|instruction)`,
        );
      }
    }
  }

  // Coverage checks
  const registeredPaths = new Set([...seenPaths]);
  const actualFiles = await fg(INSTRUCTION_PATTERNS);

  const unregistered = actualFiles.filter((f) => !registeredPaths.has(f));
  const missing = [...registeredPaths].filter((p) => !existsSync(p));

  if (unregistered.length > 0) {
    errors.push(
      `Files not registered in REGISTRY.json:\n${unregistered.map((f) => `  - ${f}`).join("\n")}`,
    );
  }
  if (missing.length > 0) {
    errors.push(`Registered files that don't exist:\n${missing.map((f) => `  - ${f}`).join("\n")}`);
  }

  if (errors.length === 0) {
    console.log("Registry check passed.");
    console.log(`  - ${registry.instructions.length} instructions registered`);
    console.log("  - No duplicates found");
    console.log("  - All refs have valid protocols");
    console.log("  - All owners are allowed");
    process.exit(0);
  }

  console.error("Registry check FAILED:\n");
  for (const e of errors) console.error(`ERROR: ${e}\n`);
  process.exit(1);
}

main();
