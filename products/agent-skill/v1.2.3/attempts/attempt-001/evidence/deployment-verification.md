# Deployment Verification Evidence

## Preview Deployment

| Field | Value |
|-------|-------|
| **Provider** | Cloudflare Pages |
| **Project** | klappy-dev-agent-skill |
| **Deployment ID** | 20426ceb-5d24-46f4-8b63-3213e933feaf |
| **Verified At** | 2026-01-21T03:36:14Z |

## URL Verification

### v1.2.3 Pack
```
$ curl -sI "https://20426ceb.klappy-dev-agent-skill.pages.dev/v1.2.3/prd-guide-pack.md"
HTTP/2 200 
date: Wed, 21 Jan 2026 03:36:09 GMT
content-type: text/markdown; charset=utf-8
access-control-allow-origin: *
cache-control: public, max-age=0, must-revalidate
```

### Latest Pack
```
$ curl -sI "https://20426ceb.klappy-dev-agent-skill.pages.dev/latest/prd-guide-pack.md"
HTTP/2 200 
date: Wed, 21 Jan 2026 03:36:13 GMT
content-type: text/markdown; charset=utf-8
access-control-allow-origin: *
cache-control: public, max-age=0, must-revalidate
```

### v1.2.3 README
```
$ curl -sI "https://20426ceb.klappy-dev-agent-skill.pages.dev/v1.2.3/README.md"
HTTP/2 200 
date: Wed, 21 Jan 2026 03:36:14 GMT
content-type: text/markdown; charset=utf-8
access-control-allow-origin: *
cache-control: public, max-age=0, must-revalidate
```

## Content Verification

Pack header confirms correct build:

```yaml
---
lane: agent-skill
pack: prd-guide
built_at: 2026-01-21T03:22:39.000Z
git_commit: 333a60abece7495f2f77886f4405221d815745f2
sources:
  - canon/README.md
  - canon/odd/README.md
  - canon/odd/manifesto.md
  - canon/odd/appendices/README.md
  - canon/odd/decisions/README.md
  - canon/constraints.md
  - canon/decision-rules.md
  - canon/definition-of-done.md
  - canon/self-audit.md
  - docs/PRD/PRD_TEMPLATE.md
  - products/agent-skill/v1.2.3/attempts/attempt-001/INSTRUCTIONS.md
```

## Verification Checklist

- [x] v1.2.3/prd-guide-pack.md returns HTTP 200
- [x] latest/prd-guide-pack.md returns HTTP 200
- [x] v1.2.3/README.md returns HTTP 200
- [x] Pack content includes canon v0.5.4 sources (README index pattern)
- [x] Pack content shows correct git commit
- [x] Pack content shows correct timestamp
- [x] INSTRUCTIONS.md sourced from attempt folder (ephemeral)
