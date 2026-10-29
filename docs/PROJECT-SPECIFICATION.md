# Islamic Tech Guide — Canonical Project Specification

**Project version:** v0.1  
**Specification status:** Canonical working specification  
**Versioning rule:** The project remains **v0.1** until the project owner explicitly decides that a change warrants a version number update. Internal edits, added resources, documentation improvements, UI changes, or schema refinements do **not** automatically change the version number.

---

## 1. Purpose of this document

This is the canonical record of the project decisions made so far. It documents the project's vision, scope, information model, editorial methodology, evidence rules, gap methodology, taxonomy direction, deployment architecture, frontend behavior, language direction, future expansion points, rejected approaches, and unresolved decisions.

The goal is to avoid losing decisions across conversations and to make future implementation changes traceable to an agreed project model.

This document distinguishes between:

- **Current / required:** decisions that should shape v0.1 now.
- **Future-ready:** intentionally supported by the design but not required to be implemented or populated now.
- **Deferred / open:** explicitly not decided yet.
- **Rejected:** approaches we do not want to adopt unless the decision is revisited explicitly.

---

# 2. Vision

The project is an **open-source archive and decision-support guide for the Islamic technology ecosystem**.

Its primary purpose is not merely to collect links. It should:

1. **Archive what already exists** across Islamic technology.
2. **Make existing resources easier to discover and compare.**
3. **Evaluate resources at a useful editorial level**, because existence does not imply quality.
4. **Reveal imbalances and gaps in community effort.**
5. **Help developers, contributors, and builders direct effort toward areas that are underserved rather than repeatedly rebuilding already saturated categories.**
6. Secondarily, help end users discover useful tools and services more efficiently.

A motivating example is the imbalance between categories: the ecosystem may contain hundreds of Quran mobile applications while mature desktop alternatives may be scarce. Similar imbalance can exist in developer tooling, Arabic libraries, APIs, documentation, maintenance quality, platform coverage, integrations, and other dimensions.

The project therefore has two complementary functions:

- **Archive / Index layer:** What exists?
- **Gap / Direction layer:** Where is effort missing, weak, duplicated, inaccessible, poorly maintained, or otherwise imbalanced?

These are both first-class goals. A category does **not** have to be a gap to be archived. Saturated categories are useful evidence of ecosystem distribution.

---

# 3. What the project is not

The project is **not** intended to be:

- A development platform where users build software inside the site.
- A generic Islamic website directory with no technical relevance.
- A generic Islamic book or PDF library.
- A catalog of every useful Islamic text merely because a developer might cite or use it.
- A dataset catalog in the current phase.
- An "awesome-list of awesome-lists" that simply republishes aggregator repositories as resources.
- A system where every resource must receive an exhaustive professional review before it can be indexed.
- A numeric ranking site pretending subjective judgments are objective scores.

Datasets may become a supported resource type later, but collecting datasets is **not a current priority**.

---

# 4. Target audiences

## 4.1 Primary audience

The highest-priority users are:

- Developers
- Open-source contributors
- Builders / product creators
- Technical decision-makers
- People considering where to contribute effort in the Islamic technology ecosystem

The guide should help them answer questions such as:

- What already exists in this area?
- Which platforms are already covered?
- Which technologies or languages are represented?
- Is the existing solution actively maintained?
- Is there an API/library/integration layer or only consumer-facing products?
- Where are the meaningful gaps?
- Is a new project actually needed?
- Would improving an existing resource be more useful than creating another one?

## 4.2 Secondary audience

End users are a secondary but still valuable audience, especially Arabic-speaking users.

The guide may help them find:

- Applications
- Websites
- Web services
- Platforms
- Search tools
- Useful digital services

The project should not compromise the developer/gap-analysis mission merely to become a consumer app directory, but consumer-facing resources are legitimate parts of the ecosystem and can also reveal developer opportunities.

---

# 5. Scope philosophy

The project intentionally begins with a relatively broad scope.

We do **not** want to aggressively define exclusions before seeing the real ecosystem data. Scope can be refined later based on what creates useful discovery, comparison, or gap analysis.

Current scope principles:

- Developer resources may be in any language; they do not need to be Arabic.
- Consumer-facing content has a stronger relevance to Arabic-speaking users, but the archive itself remains broader.
- Existing and saturated categories are still archived.
- A resource can be useful to the guide even if it is not open source.
- A resource does not need to be a GitHub repository.

---

# 6. Inclusion rule: what counts as a Resource?

The canonical archival unit is a general entity called a **Resource**.

A Resource is a digital product, service, platform, technical component, or other digital surface that performs a meaningful function and can be:

- used,
- integrated,
- improved,
- compared,
- contributed to,
- evaluated,
- or studied as part of the Islamic technology ecosystem.

Examples that can qualify:

- Mobile application
- Desktop application
- Web application
- Website
- Web service
- Platform
- API
- Library
- SDK
- Framework
- CLI tool
- Plugin / browser extension
- Repository representing a real technical project
- Search engine
- Directory
- Community platform
- Content platform
- Learning platform
- Infrastructure component
- Standard / specification
- Other meaningful digital tool

A website can absolutely qualify even if it is not open source and is not itself a developer tool. For example, a useful Islamic search, fatwa, knowledge, or service website can:

- solve an end-user problem directly,
- show that a product category already exists,
- expose a mobile/desktop/API/integration gap,
- provide something that could potentially be integrated into another product,
- reveal a missing developer-facing equivalent.

## 6.1 Explicit non-resource example

A PDF or book does **not** enter the archive merely because a developer could use it as reference material. The goal is not to build a general reference library.

## 6.2 Educational resources

Educational resources are a possible future category, but the inclusion boundary is intentionally deferred. A course specifically about building Islamic applications might eventually qualify; a general Islamic book library does not.

---

# 7. Resource versus Discovery Source

This distinction is fundamental.

## 7.1 Aggregated repositories and link collections

A repository or website that is primarily an unstructured or semi-structured collection of links is **not automatically a Resource**.

Examples include:

- Awesome lists
- "Islamic developer resources" repositories
- Generic curated link lists
- Aggregated directories whose primary value is pointing elsewhere

These are treated as **Discovery Sources**.

Their contents are extracted and independently reviewed. Individual candidates may then become Resources.

The aggregator itself is stored in a separate **Source Registry** so we know:

- what source we inspected,
- whether it has been processed,
- when it was checked,
- which sections were processed,
- whether processing is complete,
- how many candidates were found,
- how many were accepted/deferred/dead/duplicate/rejected,
- whether it needs rechecking later.

Possible source-processing states:

- `unprocessed`
- `processing`
- `partially_processed`
- `processed`
- `needs_recheck`

## 7.2 Discovery provenance versus evidence

These must remain separate concepts.

**Discovery provenance** answers:

> Where did we first discover this Resource?

For example:

```yaml
discovered_via:
  - islamic-developer-resources
```

**Evidence** answers:

> What source supports the facts or editorial assessment recorded about this Resource?

The aggregator may help us discover a project, but the resource's current metadata should preferably be verified from:

- official website,
- official documentation,
- primary repository,
- store listing,
- direct testing,
- reputable independent review,
- community feedback,
- or another appropriate source.

An aggregator is therefore **discovery evidence**, not automatically authoritative product evidence.

---

# 8. Core conceptual entities

The conceptual model currently includes:

1. **Resource** — the thing being archived.
2. **Gap** — an observed missing, weak, imbalanced, underserved, or otherwise problematic area.
3. **Evidence** — sources supporting factual metadata or assessment.
4. **Organization** — optional person/team/organization responsible for a resource.
5. **Discovery Source** — aggregator/list/directory used to find candidates.
6. **Review / Assessment** — editorial evaluation associated with a resource.
7. **Intake record** — processing state of a candidate before/while it becomes a Resource.

These are conceptual entities. They do not all need to become separate database tables or backend services.

---

# 9. Single source of truth principle

This is a hard project constraint:

> **One Resource → one canonical content record → any number of presentation views.**

We do **not** maintain separate resource copies for table view, card view, detail view, mobile view, or any other frontend layout.

For example, one canonical Resource record can power:

- a compact table row,
- a card,
- a search result,
- a detailed resource page,
- a gap relationship list,
- a future API response,
- a future visualization.

The content model must remain stable while presentation is flexible.

Rejected model:

- separate table resource data,
- separate card resource data,
- separate detailed resource data.

That creates duplication and is not acceptable.

---

# 10. Resource detail pages

Every Resource should be capable of having its own page, for example:

```text
/resources/adhan/
/resources/alfanous/
```

This does **not** require a new backend or separate system.

The same canonical Resource record is used for both browse views and detail pages.

A detailed page may eventually contain:

- Summary
- Description
- Platforms
- Audience
- Role
- Domains
- Technologies
- Programming ecosystem
- Languages
- Pricing / access model
- Openness / licensing
- Current maintenance state
- Strengths
- Weaknesses
- Best use cases
- Limitations
- Recommendation
- Evidence
- Community feedback
- Alternatives
- Integrations
- Capabilities / features
- Related gaps
- Related resources
- Screenshots or visual material where appropriate
- Long-form deep review

The current schema does not need every field populated immediately.

## 10.1 Long-form content future

If YAML becomes awkward for long editorial writing, the architecture can evolve to:

- Markdown/MDX resource files with structured frontmatter, or
- YAML metadata linked to a separate Markdown/MDX detailed review.

This should remain an implementation evolution, not a duplication of the resource itself.

---

# 11. Progressive review depth

Not every Resource should require the same amount of work.

Three review levels are currently preferred:

## 11.1 `indexed`

Basic identity and metadata have been verified.

Typical content:

- name
- URL
- type
- domains
- audience
- platforms where known
- basic status
- evidence

## 11.2 `reviewed`

Adds a lightweight editorial assessment, such as:

- strengths
- weaknesses
- maintenance observations
- documentation quality
- suitability
- key limitations

## 11.3 `deep_review`

Used selectively for resources that justify deeper analysis:

- direct testing
- alternatives
- comparison
- community feedback
- code/repository inspection
- detailed limitations
- integration quality
- gap relationship
- stronger recommendation

The system is intentionally designed for **progressive enrichment**. A Resource can enter quickly as indexed and be expanded later.

---

# 12. Resource metadata model

## 12.1 Core MVP fields

Preferred required fields:

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

## 12.2 Strongly recommended fields

- `platforms`
- `languages`
- `status`
- `evidence`

## 12.3 Progressive / optional fields

- `repository`
- `organization_id`
- `technologies`
- `programming_languages` if useful
- `license`
- `pricing`
- `access_model`
- `openness`
- `capabilities`
- `assessment`
- `recommendation`
- `related_gaps`
- `discovered_via`
- `notes`

The exact schema may evolve while remaining backward-friendly.

---

# 13. Dates and maintenance metadata

The project owner explicitly prefers a simple date model.

Every Resource should visibly store:

```yaml
added_at: YYYY-MM-DD
last_reviewed_at: YYYY-MM-DD
```

These fields are useful when scanning records and do not rely on Git history.

`last_reviewed_at` means the last time someone intentionally checked/reviewed the resource, not merely the last Git commit touching the file.

Currently **not required**:

- `next_review_due`
- complex review scheduling
- detailed historical snapshots

Git can still preserve revision history as an implementation property, but Git history is not the editorial date model.

---

# 14. Status and maintenance state

Possible lifecycle/status values include:

- `active`
- `maintained`
- `stable`
- `low_activity`
- `experimental`
- `beta`
- `legacy`
- `unmaintained`
- `archived`
- `discontinued`
- `unknown`

Where appropriate, status should include confidence:

```yaml
status:
  value: low_activity
  confidence: medium
```

The guide should avoid declaring something "unmaintained" casually. Lack of recent commits alone does not always prove abandonment.

---

# 15. Editorial assessment and recommendation

The project should evaluate Resources because the archive is not meant to imply that everything listed is good.

Possible assessment structure:

```yaml
assessment:
  strengths:
    - ...
  weaknesses:
    - ...
  best_for:
    - ...
  limitations:
    - ...
```

Recommendations are intentionally qualitative rather than numeric.

Possible states:

- `recommended`
- `recommended_with_caveats`
- `neutral`
- `not_recommended`
- `insufficient_evidence`

Recommendation should include confidence and optional reasoning.

We explicitly avoid arbitrary scores such as `8.2/10` unless a future rigorous scoring methodology is created.

---

# 16. Fact versus opinion

This idea is accepted as a **future-ready capability**, but it is **not required for the MVP** because forcing every sentence into a claim system would create too much editorial overhead.

The design should leave room for something like:

```yaml
claims:
  - text: Supports Windows and Linux.
    type: fact
    evidence_refs:
      - official-source

  - text: The desktop experience feels less polished than mobile.
    type: editorial_judgment
```

Possible future types may include:

- `fact`
- `editorial_judgment`
- `recommendation`
- `community_feedback`
- `scholarly_position`
- `open_question`

Current simpler convention:

- structured metadata is treated as factual and should be evidenced,
- strengths/weaknesses are editorial assessment,
- recommendation is explicitly opinion,
- community feedback should be labelled as such.

The project should never blur verified fact, editorial opinion, community sentiment, and scholarly/religious positions.

---

# 17. Evidence model and trust

Trust is a central requirement.

Important claims should be traceable to sources. Evidence may include:

- `official`
- `documentation`
- `repository`
- `store_listing`
- `direct_testing`
- `community_feedback`
- `independent_review`
- `source_list`
- `other`

Preferred evidence hierarchy is context-dependent, but generally:

1. Official source
2. Official documentation
3. Primary repository
4. Store/platform listing
5. Direct testing
6. Reputable independent review
7. Community feedback

Community feedback is useful but should not be presented as objective fact.

The guide may eventually include evidence-specific confidence or claim-level evidence, but this is not mandatory now.

---

# 18. Gap concept

A Gap is **not merely "nothing exists."**

A gap can represent:

- complete absence,
- weak quality,
- poor maintenance,
- poor documentation,
- missing language support,
- missing Arabic support,
- missing developer tooling,
- missing consumer product,
- platform imbalance,
- ecosystem concentration on one platform,
- lack of API/integration,
- lack of open-source alternatives,
- poor discoverability,
- lack of standards,
- lack of benchmarks,
- lack of reference implementations,
- lack of trusted comparison,
- fragmented duplicated solutions,
- accessibility weakness,
- privacy/security concerns,
- or another meaningful ecosystem deficiency.

Examples:

- Hundreds of mobile Quran apps but very few mature desktop products.
- Many prayer-time libraries but no trusted comparison/benchmark.
- Strong consumer websites but no usable public API.
- Libraries exist but are abandoned or poorly documented.

Thus:

> low quantity does not automatically mean a gap, and high quantity does not automatically mean the ecosystem is healthy.

---

# 19. Gap model

The current Gap model should combine the strongest ideas from both project drafts.

Recommended fields include:

- `id`
- `title`
- `problem`
- `summary`
- `domains`
- `audience`
- `affected_platforms`
- `existing_solutions`
- `what_is_missing`
- `reasoning`
- `impact`
- `difficulty`
- `volunteer_fit`
- `status`
- `determination`
- `confidence`
- `evidence`
- `related_resources`
- `added_at`
- `last_reviewed_at`

Possible statuses:

- `candidate`
- `observed`
- `confirmed`
- `monitoring`
- `resolved`

Current determination method:

```yaml
determination: editorial
```

A future system may support:

```yaml
determination: scoring
```

without redesigning the entire model.

---

# 20. Gap scoring and prioritization

A scoring framework was discussed and is considered valuable, but numeric scoring is **deferred** because meaningful scores are difficult to define reliably at this stage.

Candidate dimensions discussed include:

- Impact
- Severity
- Existing coverage
- Gap strength
- Islamic specificity
- Actionability
- Confidence
- Maintenance cost
- Difficulty
- Volunteer fit

A possible future priority model could use these dimensions, but **current Gap declarations are editorial judgments** supported by reasoning, confidence, and evidence.

This means scoring is future-ready, not a blocker for v0.1.

---

# 21. Relationship between Resources and Gaps

A Resource may relate to one or more Gaps without itself being a Gap.

Possible relationships:

- `addresses`
- `partially_addresses`
- `demonstrates`
- `affected_by`
- `alternative_to`

Example:

```yaml
related_gaps:
  - id: quran-desktop-shortage
    relation: partially_addresses
```

A Gap page can therefore show:

- existing solutions,
- resources partially addressing it,
- what remains missing,
- evidence,
- and potential contribution direction.

---

# 22. Taxonomy philosophy

The project should **not** force every resource into a single rigid hierarchy.

Instead it uses several independent classification dimensions so the same Resource can be understood from different angles.

The initial taxonomy should be intentionally broader than necessary. It is easier to merge/prune categories after testing real data than to discover later that overly broad fields mixed fundamentally different concepts.

A classification should generally justify itself by helping at least one of:

1. Discovery
2. Comparison
3. Gap detection

If a field does none of those, it may not deserve to be core metadata.

---

# 23. Taxonomy dimensions

## 23.1 Resource Type — what is it?

Candidate types:

- application
- mobile_app
- desktop_app
- web_app
- website
- web_service
- platform
- repository
- library
- framework
- sdk
- api
- cli
- plugin
- browser_extension
- bot
- automation
- integration
- developer_tool
- search_engine
- directory
- community_platform
- content_platform
- learning_platform
- infrastructure
- standard
- specification
- other

Some overlapping types may later be merged after real-world testing.

## 23.2 Role — what role does it play?

Candidate roles:

- consumer_facing
- developer_facing
- infrastructure
- knowledge
- reference
- discovery
- communication
- productivity
- content_delivery
- content_creation
- integration
- data_access
- community
- education
- research
- administration

A Resource may have multiple roles.

## 23.3 Audience — who is it for?

Candidate audiences:

- general_user
- arabic_speaking_user
- developer
- open_source_contributor
- designer
- researcher
- student
- teacher
- scholar
- imam
- mosque_admin
- organization
- nonprofit
- business
- content_creator
- parent
- child

These are deliberately broad candidates and do not all need to be used immediately.

## 23.4 Domain — what Islamic/functional area does it serve?

Candidate domains include:

- quran
- tafsir
- hadith
- fiqh
- fatwa
- aqidah
- seerah
- islamic_history
- dua
- dhikr
- prayer
- adhan
- qibla
- mosques
- hijri_calendar
- ramadan
- hajj
- umrah
- zakat
- sadaqah
- waqf
- islamic_finance
- halal
- education
- arabic_language
- memorization
- recitation
- tajweed
- translation
- research
- scholarship
- community
- family
- marriage
- children
- mental_wellbeing
- productivity
- charity
- dawah
- media
- publishing
- accessibility
- privacy
- identity
- moderation
- search
- ai
- data
- open_source
- natural_language_processing

A later version may split `islamic_domain` and `functional_domain` if real data proves the distinction useful.

## 23.5 Platform

Candidate platforms:

- web
- android
- ios
- windows
- macos
- linux
- chromeos
- browser_extension
- terminal
- server
- cloud
- self_hosted
- docker
- wordpress
- discord
- telegram
- whatsapp
- cross_platform

Platform metadata is especially important for detecting ecosystem imbalance.

## 23.6 Technical ecosystem / technology

Developer Resources may record technologies such as:

- javascript
- typescript
- python
- java
- kotlin
- swift
- dart
- flutter
- react
- react_native
- vue
- svelte
- astro
- nextjs
- nodejs
- php
- laravel
- ruby
- go
- rust
- c
- cpp
- dotnet
- wordpress
- docker
- graphql
- rest

The generic field `technologies` is preferred over incorrectly calling frameworks/tools programming languages. A separate `programming_languages` field may exist when useful.

## 23.7 Language support

Content/UI languages are separate from programming technologies.

Example:

```yaml
languages:
  - ar
  - en
  - fr
```

Future richer form if needed:

```yaml
language_support:
  arabic:
    ui: true
    content: true
    rtl: true
```

This richer model is not required now.

## 23.8 Pricing and access

Pricing and access should be treated as related but distinct ideas.

Candidate pricing models:

- free
- freemium
- paid
- subscription
- donation_supported

Candidate access characteristics:

- account_required
- no_account_required
- hosted_only
- self_hostable

The old draft's explicit pricing concept should be retained rather than collapsing all access information into one field.

## 23.9 Openness

Candidate openness labels:

- open_source
- source_available
- closed_source
- open_data
- open_api
- self_hostable
- community_governed
- commercial
- nonprofit
- individual_project
- unknown

## 23.10 Quality dimensions — future review axes

Potential future review dimensions:

- documentation
- usability
- accessibility
- arabic_support
- rtl_support
- performance
- privacy
- security
- maintenance
- code_quality
- api_quality
- developer_experience
- design
- content_quality
- reliability
- offline_support
- localization

These are not necessarily tags; they may become structured review dimensions.

## 23.11 Islamic-specific capabilities

Potential capabilities:

- arabic_ui
- rtl
- quran_text
- quran_audio
- tafsir
- translations
- hadith_content
- prayer_times
- adhan
- qibla
- hijri_calendar
- zakat_calculation
- mosque_discovery
- halal_discovery
- dua_content
- memorization
- tajweed
- islamic_search
- scholarly_references
- citations

Capabilities help answer not only "what domain is this?" but "what does it actually do?"

## 23.12 Data / integration capabilities

Potential integration capabilities:

- public_api
- private_api
- sdk
- webhooks
- export
- import
- rss
- json
- xml
- csv
- graphql
- oauth
- embeddable
- deep_links
- offline_data

These can reveal developer-facing gaps even where consumer products already exist.

---

# 24. Intake workflow

The preferred candidate-processing workflow is:

1. Discover a candidate.
2. Record where it was discovered.
3. Locate its primary/official source.
4. Verify that the resource exists and is currently reachable.
5. Decide intake disposition.
6. If accepted, create/update the canonical Resource record.
7. Assign a review level.
8. Add evidence.
9. Add lightweight assessment only when justified.
10. Link to a Gap only when the relationship is meaningful.
11. Set `added_at` and `last_reviewed_at`.
12. Enrich later instead of blocking ingestion on exhaustive review.

Candidate intake states:

- `accepted`
- `needs_review`
- `deferred`
- `dead`
- `duplicate`
- `rejected`

A dead or uncertain link should not be silently promoted into the production archive.

---

# 25. Seed repositories

Existing aggregated repositories can be useful as **seed datasets**, not authoritative data sources.

The project has already used `Islamic-Developer-Resources` as an experimental seed source.

The correct pattern is:

```text
Seed list
   ↓
Candidate extraction
   ↓
Primary-source verification
   ↓
Classification
   ↓
Review level
   ↓
Resource archive
```

This process should be reused for other link collections.

---

# 26. Frontend information architecture

The current high-level site structure should support at least:

- Home
- Resources
- Gaps
- Methodology
- About

Discovery Sources may eventually have their own visible page, for example `/sources`, but **whether and how Sources appear in primary navigation is still open**.

## 26.1 Resources header item

`Resources` is intended to be a real browse page, not a decorative header item.

It should provide search, filtering, and browsing across the canonical Resource dataset.

## 26.2 Gaps header item

`Gaps` is intended to be a separate browse page for Gap entities.

A Gap is analytically different from a Resource and should have its own browsing and detail experience.

---

# 27. Browse view versus detail view

The preferred frontend model is hybrid:

## Browse view

Optimized for speed and scanning.

Possible presentations:

- compact table
- cards
- list

The old draft's dense table experience is considered valuable for this use case.

## Detail view

Optimized for deeper analysis of one Resource or one Gap.

The two views consume the **same canonical data**.

A possible Resources page may allow the user to switch between:

```text
[ Cards ] [ Table ]
```

without changing the underlying records.

There is no requirement to create separate routes such as `/resources-table` and `/resources-cards`; presentation can be a view mode of the same page.

---

# 28. Frontend flexibility rule

The content model must not depend on the visual design.

The site may later change from cards to tables, tables to lists, add dashboards, create mobile-specific layouts, expose an API, or produce visual maps while continuing to read the same canonical content.

Canonical principle:

> **Content model fixed; presentation layer flexible.**

---

# 29. Language and direction strategy

The project is currently **English-first and LTR-first**.

This is intentional because much of the technical ecosystem, technology naming, code terminology, and developer content is naturally English-first.

The main UI/navigation should therefore use English labels such as:

- Resources
- Gaps
- Sources
- Methodology
- About
- Platform
- Audience
- Status
- Review level

The project is **not currently an RTL-first website**.

## 29.1 Arabic content

Arabic is still supported as optional secondary content.

For fields that genuinely benefit from translation, use structured localized values rather than ad-hoc fields such as `arabic_description`.

Preferred future-compatible model:

```yaml
description:
  en: Open archive for Islamic technology projects, tools, and services.
  ar: أرشيف مفتوح للمشاريع والأدوات والخدمات التقنية المرتبطة بالمجتمع المسلم.
```

English-only is valid:

```yaml
description:
  en: ...
```

Potentially localizable fields include:

- title
- description
- summary
- notes

Canonical technical values remain English, for example:

```yaml
resource_type: library
platforms:
  - linux
  - web
status: active
```

## 29.2 Mixed direction rendering

The page remains LTR globally, while Arabic content blocks can render with RTL direction locally.

This allows English and Arabic to coexist cleanly on the same Resource page.

## 29.3 Future localization

The data model should make a full Arabic localization possible later without forcing it now.

---

# 30. Data storage format

The newer architecture uses structured YAML files rather than treating a single CSV spreadsheet as the canonical database.

Why YAML is preferred for the canonical Resource model:

- nested structures
- multiple evidence records
- multiple relationships
- progressive assessments
- multilingual fields
- future long-form extensions
- cleaner per-resource diffs
- easier detail pages

The older CSV draft was useful for compact browsing, but a flat CSV becomes increasingly difficult when Resources gain nested evidence, relationships, localized fields, recommendations, and richer review data.

**Important:** rejecting CSV as the canonical content model does **not** mean rejecting tables as a frontend presentation.

A table view can still be generated from YAML.

---

# 31. Deployment architecture

The project should remain **static-first, open-source, and Git-based**.

Current architecture direction:

```text
Canonical files (YAML / Markdown)
          ↓
       Astro
          ↓
Static HTML / CSS / JS
          ↓
     GitHub Pages
```

## 31.1 GitHub Pages

GitHub Pages is the intended initial hosting platform.

Reasons:

- free hosting for the intended public repository model,
- simple open-source contribution flow,
- content and site code can live together,
- Git provides revision history,
- no database administration,
- easy portability.

## 31.2 Backend

A conventional backend is **not required for the MVP**.

We currently do not need:

- user accounts,
- database server,
- authentication,
- migrations,
- transactional APIs,
- server-side admin panel.

Adding those now would be unnecessary complexity.

## 31.3 Cloudflare Pages later

The project should be built to remain platform-agnostic enough that migration from GitHub Pages to Cloudflare Pages is easy later.

This should be a deployment change, not a rewrite.

Cloudflare Pages is considered a future option if the project benefits from stronger preview deployments, edge functions, or additional hosting capabilities.

## 31.4 Platform-agnostic constraints

Prefer:

- static output
- no required database
- no required authentication
- no essential platform-specific API
- portable Resource data

Attention should be paid to deployment base paths so a GitHub project site under `/repo-name/` does not hard-code assumptions that make later root-domain deployment difficult.

---

# 32. Why Astro

Astro is currently the preferred frontend/static-site framework because the project is content-heavy, static-first, and does not require a backend.

Astro is an implementation choice, **not** a restriction on visual design.

The site can still display:

- dense tables,
- cards,
- detail pages,
- filters,
- search,
- dashboards,
- or other static/client-side experiences.

Changing the frontend presentation does not require changing the Resource model.

---

# 33. Old draft versus current architecture

The older project draft used:

- `resources.csv`
- `gaps.csv`
- `sources.csv`
- direct static HTML/JS
- a dense table/filter interface

It had several useful ideas, but its data model was flatter and treated some aggregator lists as resources.

## 33.1 What we keep from the old draft

Useful concepts retained or planned to retain:

- compact/dense browse table
- filtering-first browsing
- Gap fields such as:
  - `problem`
  - `existing_solutions`
  - `what_is_missing`
  - `impact`
  - `difficulty`
  - `volunteer_fit`
- explicit pricing information
- a strong emphasis on fast scanning

## 33.2 What we keep from the newer architecture

- Resource as a general entity
- YAML structured records
- per-resource detail pages
- Evidence model
- review levels
- editorial assessment
- recommendation
- independent Gap entities
- Discovery Source Registry
- separation of discovery provenance from evidence
- multi-axis taxonomy
- future localized fields
- static Astro architecture

## 33.3 What we explicitly do not carry forward from the old draft

- Aggregators as ordinary Resources merely because they contain links
- Flat CSV as the only canonical data model
- A frontend limited to a single giant table
- RTL-first direction as a current requirement

The desired result is a **hybrid of the best information architecture from the newer model and the browsing efficiency of the old frontend**.

---

# 34. Quality and editorial workload philosophy

The guide should be useful before it is exhaustive.

A major design constraint is that one curator may initially maintain it alone. Therefore:

- indexing must be lightweight enough to scale,
- deeper analysis should be selective,
- fields can be progressively enriched,
- unknown values are acceptable when honestly marked,
- not every Resource needs immediate Deep Review,
- the schema should leave room for later contributors and trusted reviewers.

The project may later add trusted maintainers/reviewers, but initially the project owner is the primary editor.

---

# 35. Future governance

Future possibilities include:

- trusted reviewers
- contributor guidelines
- review ownership
- editorial roles
- stronger evidence policies
- automated stale-resource checks
- scoring methodology
- review queues
- moderation of community submissions

None of these require a backend today.

---

# 36. Suggested MVP concept

The MVP does not need to be a massive encyclopedia.

A healthy test milestone is approximately:

- 20–30 diverse Resources
- 5–10 meaningful domains/categories
- several evidence-backed Gaps
- usable search/filtering
- resource detail pages
- Gap detail pages
- documented methodology
- Source Registry for seed lists

Before scaling to hundreds of Resources, test the schema with deliberately diverse examples, such as:

- Quran application
- Fatwa/knowledge website
- Quran API
- Arabic library
- Prayer-time library
- Islamic finance tool
- Linux/desktop application
- GitHub technical project
- Web platform
- abandoned/weak resource

If the schema represents these cleanly without hacks, it is a much stronger basis for expansion.

---

# 37. Current seed data strategy

`Islamic-Developer-Resources` has been used as an initial experimental source.

The current process demonstrates that seed collections often contain:

- valid active projects,
- stale descriptions,
- dead links,
- uncertain projects,
- duplicates,
- resources that have evolved significantly since the aggregator was written.

Therefore every candidate should be independently verified before being treated as production archive data.

The first experimental set included resources such as:

- Tanzil
- Al Quran Cloud
- Alfanous
- Adhan
- PrayTimes
- Tashaphyne
- Mishkal

The purpose of the seed dataset is to test the model, not to declare the aggregator complete or fully reviewed.

---

# 38. Open decisions / intentionally deferred questions

The following are **not mistakes or omissions**; they are explicitly unresolved:

## 38.1 Educational resources

Whether and how courses/tutorial platforms enter the main Resource archive remains open.

## 38.2 Datasets

The model may eventually support them, but collecting datasets is not a current focus.

## 38.3 Source Registry visibility

Discovery Sources should be stored now, but whether they appear in:

- primary navigation,
- Methodology,
- a dedicated `/sources` page,
- or remain mostly editorial/internal

is still undecided.

## 38.4 Gap scoring thresholds

Editorial judgment is the current method. Numeric scoring/thresholds remain future work.

## 38.5 Full taxonomy cleanup

The candidate taxonomy is deliberately broad. It should be pruned/merged based on real archived data rather than theory alone.

## 38.6 Full bilingual localization

Arabic-ready fields are desired, but a fully bilingual site is not currently required.

## 38.7 Exact long-form storage format

YAML works for structured metadata now. Markdown/MDX may be introduced for longer detailed reviews later.

---

# 39. Rejected or explicitly avoided approaches

Unless explicitly revisited, avoid the following:

1. **Two separate copies of each Resource for different frontend views.**
2. **A card database and a table database.**
3. **Treating aggregators as normal Resources merely because they contain useful links.**
4. **Copying aggregator descriptions without checking primary sources.**
5. **Requiring exhaustive review before a Resource can be indexed.**
6. **Starting with a traditional backend/database when static data is sufficient.**
7. **Making numeric ratings look objective without a defensible scoring methodology.**
8. **Building a general PDF/book archive.**
9. **Making the site RTL-first at the current stage.**
10. **Hard-coding the content model around one frontend design.**
11. **Changing the v0.1 project version automatically whenever files change.**

---

# 40. Canonical project principles

These principles summarize the current direction:

### Principle 1 — Archive before assumptions
Document what exists, including saturated categories, so gaps can be understood in context.

### Principle 2 — Existence is not quality
Resources should be eligible for editorial assessment.

### Principle 3 — Progressive depth
Index quickly; review more deeply where valuable.

### Principle 4 — Evidence over unsupported claims
Important factual metadata and gap reasoning should be traceable.

### Principle 5 — Discovery source is not evidence
Aggregator lists help us find resources; primary sources establish facts.

### Principle 6 — Gaps are multidimensional
A gap may be quantity, quality, platform, language, maintenance, integration, trust, standards, documentation, or another deficiency.

### Principle 7 — Single source of truth
A Resource is authored once and rendered many ways.

### Principle 8 — Content model independent of frontend
Cards, tables, detail pages, dashboards, and future APIs use the same canonical content.

### Principle 9 — English-first, multilingual-ready
Technical UI is English-first while Arabic content can coexist cleanly.

### Principle 10 — Static-first and portable
Avoid infrastructure that the project does not yet need.

### Principle 11 — Taxonomy should serve decisions
Classification exists to improve discovery, comparison, or gap detection—not for metadata collection for its own sake.

### Principle 12 — v0.1 remains v0.1 until explicitly changed
Project version changes are editorial decisions, not automatic consequences of implementation changes.

---

# 41. Current implementation mapping

The intended repository structure is conceptually:

```text
repo/
├── data/
│   ├── resources/        # canonical production Resources
│   ├── gaps/             # canonical production Gaps
│   ├── organizations/    # optional Organizations
│   ├── sources/          # Discovery Source Registry
│   ├── intake/           # candidate processing / intake data
│   └── taxonomy.yaml
│
├── examples/             # clearly marked dummy/schema examples
│
├── docs/
│   ├── PROJECT-SPECIFICATION.md   # this canonical document
│   ├── architecture.md
│   ├── editorial-model.md
│   ├── schema.md
│   └── workflow.md
│
├── src/
│   ├── pages/
│   ├── layouts/
│   ├── components/
│   └── styles/
│
├── .github/workflows/
│   └── deploy.yml
│
├── astro.config.mjs
├── package.json
└── README.md
```

Dummy/example data must never be visually indistinguishable from real production archive records.

---

# 42. Document precedence

If smaller documentation files conflict with this specification, this document should be treated as the current canonical project decision record until the owner explicitly updates the decision.

The preferred maintenance pattern is:

- update this specification when a project-level decision changes,
- update schema/workflow docs when implementation details change,
- do **not** change the project version number unless the owner explicitly decides to do so.

