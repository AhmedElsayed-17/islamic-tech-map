# UX / Presentation model — v0.1

## Core rule
There is exactly one content record per Resource and one per Gap.

The frontend may render the same record as:
- card
- table row
- detail page
- future dashboard or visualization

These are presentation views, not separate content stores.

## Current Resource UX
`/resources/` provides search, filters and a Cards/Table toggle over the same records.
`/resources/[id]/` is a deeper rendering of the same record with assessment, recommendation, capabilities, evidence, related gaps, provenance and timestamps.

## Current Gap UX
`/gaps/` provides Cards/Table browsing.
`/gaps/[id]/` renders problem, existing solutions, what is missing, reasoning, evidence, related resources and metadata.

## Synthetic data policy
Synthetic records may live in the same production-shaped data directories and schema for end-to-end testing.
They must be clearly marked:
- `demo: true`
- `data_quality: synthetic`

This tests ingestion, filters, links, detail pages and relationships — not just presentation.
