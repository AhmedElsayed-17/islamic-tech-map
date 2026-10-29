# Islamic Tech Guide — v0.1

> **Canonical project specification:** [`docs/PROJECT-SPECIFICATION.md`](docs/PROJECT-SPECIFICATION.md)
> This records the agreed vision, scope, schema direction, editorial rules, frontend constraints, deployment architecture, future-ready decisions, deferred questions, and rejected approaches.


> Version stays **v0.1** until the project owner explicitly decides a change deserves a new version number.

Static-first Islamic technology directory and gap map. Data is the source of truth; the Astro site renders it.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy to GitHub Pages

1. Push this repository to GitHub with `main` as the default branch.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, choose **GitHub Actions**.
4. Push to `main` (or run the workflow manually).

The Astro config derives the repository name in GitHub Actions, so a normal project site such as `https://USERNAME.github.io/REPOSITORY/` does not require hard-coded path changes.

## Data model

- `data/resources/` — verified resources shown in the catalog.
- `data/gaps/` — real editorial gaps only.
- `data/sources/` — aggregators/discovery sources, **not** normal resources.
- `data/intake/` — optional processing records for candidates.
- `data/organizations/` — optional organization records.
- `examples/` — dummy/future schema examples; not rendered as production data.
- `docs/` — architecture, schema, editorial model, workflow.

## Aggregator rule

Random link collections / awesome lists / aggregation repositories are discovery sources. Their contents are extracted and independently verified. The aggregation repository itself does not enter the resource catalog merely for aggregating links.

## Current state

The current real resource set is a small seed sample used to exercise the system and interface. It is not intended to be comprehensive.

## No-dependency visual preview

Open `preview/index.html` directly in a browser to inspect the visual direction without installing npm packages. The production site remains the Astro app in `src/`.


## Current UX test state

- English-first / LTR-first UI with optional Arabic content blocks.
- Resources: Cards/Table toggle over one shared dataset + individual detail pages.
- Gaps: Cards/Table toggle + individual detail pages.
- Methodology, Sources and About are active.
- Synthetic entries use the same production-shaped schema and directories as real entries, marked `demo: true` / `data_quality: synthetic`.
- Aggregated repositories/lists remain Discovery Sources, not Resources.

See `docs/ux-model.md`.
