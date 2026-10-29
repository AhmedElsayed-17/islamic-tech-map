# Schema v0.1

The project is designed around a general `Resource` entity, with supporting `Gap`, `Evidence`, `Organization`, `Source`, and intake records.

## Resource fields

### Core for MVP
- `id`
- `name`
- `resource_type`
- `roles`
- `audience`
- `domains`
- `url`
- `review_level`
- `added_at`
- `last_reviewed_at`

### Strongly recommended
- `platforms`
- `languages`
- `status`
- `evidence`

### Optional / progressive enrichment
- `repository`
- `organization_id`
- `technologies`
- `access_model`
- `openness`
- `license`
- `assessment`
- `recommendation`
- `related_gaps`
- `notes`

## Progressive review levels
- `indexed`: identity and core metadata verified.
- `reviewed`: lightweight editorial assessment added.
- `deep_review`: deeper comparison, testing, alternatives, and broader evidence.

## Facts vs opinion
Not required in the MVP. The `examples/dummy-maximal-resource.yaml` file reserves a `_future.claims` shape so the project can later distinguish `fact` from `editorial_judgment` without redesigning all records.

## Dates
Only two dates are intentionally required:
- `added_at`
- `last_reviewed_at`

Git history is not part of the editorial data model.
