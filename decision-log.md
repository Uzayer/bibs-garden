# Decision log

Architectural and product decisions for this repo, with dates. Newest first.

---

## 2026-05-13 — Wikilinks in published HTML (Velite, not the publisher)

**Context:** The site is a digital garden. Obsidian publishes into this repo’s `content/` directory (via the vault’s MkDocs Publisher / Git sync workflow — see `CLAUDE.md`). [Velite](https://github.com/zce/velite) reads `content/` and emits typed data to `.velite/`.

Raw Obsidian wikilinks (`[[Page]]`, `[[Page|Alias]]`, headings in the target, etc.) were landing in `content/` because **the current publisher path does not rewrite them** to Markdown links. That differs from [Enveloppe](https://enveloppe.ovh/), which can optionally convert wikilinks and internal paths **only in the copy it uploads** ([Content’s conversion — Links](https://enveloppe.ovh/Settings/Content/)); this project is not using that pipeline today.

**Decision:**

1. **Frontmatter `author`** — Continue normalizing in `velite.config.ts` via `vaultAuthor()` and shared `wikilinkToPlain()` so YAML strings and string arrays from the vault do not leak `[[...]]` into the data layer.

2. **Note bodies** — Register a Remark plugin (`remarkStripWikilinks`) under `defineConfig({ markdown: { remarkPlugins: [...] } })` so every `s.markdown()` field is processed consistently. The plugin visits mdast `text` nodes only (wikilinks inside fenced or inline code are left alone).

3. **Display rules** — `displayFromWikilinkInner()` resolves the visible string: pipe form uses the alias; otherwise strip `#heading` from the target for display; no `href` is emitted (avoids broken links).

**Rejected for now:** Converting wikilinks to internal routes like `/garden/[slug]` at build time — needs a reliable slug graph and URL scheme; stripping is the safe baseline.

**Follow-up (not implemented):** Backlink lists (“who links here”) are not provided by Velite or by file upload alone; they would be a separate build-time graph over collections or app logic.

**Dependencies added (dev):** `unist-util-visit`, `unified`, `@types/mdast` — used only for the config-local Remark plugin and types.

---

## 2026-05-13 — Why Velite uses YAML null helpers

**Context:** The Obsidian publisher writes empty frontmatter keys as YAML `null`, not omitted keys. Zod’s `.optional()` does not accept `null`.

**Decision:** Use `yamlOptionalString()`, `yamlOptionalNumber()`, and related preprocessors in `velite.config.ts` for optional vault-sourced fields so the schema matches what the plugin actually writes.

---

## Baseline — Content layout and imports

**Collections (Velite):** `gardenNotes` → `content/garden/**/*.md`, `libraryItems` → `content/library/**/*.md`, `refs` → `content/ref/**/*.md`. Shared computed `slug` from the file path; `publish` defaults to true; body HTML from `s.markdown()`.

**Imports:** Application code consumes generated modules via the `#content` alias (see `CLAUDE.md`).

**Constraint:** Velite runs as its own CLI (`pnpm build:content` / `pnpm dev:content`), not as a Next.js webpack plugin.

---

*When you change publishing tools (e.g. move to Enveloppe link conversion), revisit the wikilink entry above so the log stays accurate.*
