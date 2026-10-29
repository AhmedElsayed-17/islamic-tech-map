# Architecture decision v0.1

## Current direction
- Open-source repository as the source of truth.
- Static-first website.
- GitHub Pages for the initial deployment.
- Keep the generated site platform-agnostic so migration to Cloudflare Pages remains easy.
- No backend database required for the MVP.
- Avoid platform-specific APIs in the core data layer.

## Data layout
- `data/resources/` — real archived resources
- `data/gaps/` — gap records
- `data/organizations/` — optional owning organizations
- `data/sources/` — seed/discovery sources
- `data/intake/` — candidate processing logs
- `examples/` — dummy/example records, never production data
- `docs/` — schema and editorial rules

## Future-safe constraints
- static output
- no required database
- no required authentication
- resources remain portable YAML/Markdown data
