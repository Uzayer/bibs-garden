# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Warning: Next.js 16

This project uses Next.js 16, which has breaking changes from earlier versions. APIs, conventions, and file structure may differ from training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Turbopack is the default bundler — do not use webpack plugins.

## Documentation before code changes

Before editing behavior, configuration, or APIs that depend on an external library, pull current docs with Context7 (preferred IDs below). Do not rely on training data for signatures, config options, or version-specific behavior.

1. Resolve or confirm the library ID: `npx ctx7@latest library <name> "<what you need>"`
2. Fetch: `npx ctx7@latest docs <libraryId> "<specific question>"`

Use a **versioned** ID from the `library` output when the installed package version must match (e.g. Next.js). If a command fails with a quota error, use `npx ctx7@latest login` or set `CONTEXT7_API_KEY`.

### Context7 library IDs (this stack)

| Topic | Context7 ID | Notes |
| --- | --- | --- |
| Next.js (match ~16.2.x) | `/vercel/next.js/v16.2.2` | Bump segment if project `next` version diverges |
| React | `/reactjs/react.dev` | Official docs; `/facebook/react/v19_2_0` for version-tied API |
| Velite | `/zce/velite` | Content pipeline, schemas, build |
| Tailwind CSS | `/tailwindlabs/tailwindcss.com` | v4 utilities, `@tailwindcss/postcss` |
| TypeScript | `/microsoft/typescript` | Prefer `/v5.9.3` (or nearest) when version-specific |
| Base UI (`@base-ui/react`) | `/mui/base-ui` | Headless primitives used with shadcn-style setup |
| shadcn/ui & CLI | `/shadcn-ui/ui` | Components, CLI, registries |
| ESLint | `/eslint/eslint` | Flat config, rule sets |

## Git commits

- **Conventional Commits**: enforced by Commitlint ([Conventional Commits](https://www.conventionalcommits.org/) + `@commitlint/config-conventional`). Examples: `feat:`, `fix:`, `chore:`, `docs:`, optional scope `feat(api): ...`.
- **No `Co-authored-by:` trailers**: Do not add `Co-authored-by:` lines for AI tools or assistants; the human author owns the commits. Husky `commit-msg` strips any such lines before Commitlint runs, but you should still omit them.

To skip hooks in an emergency (e.g. CI or recover): `HUSKY=0 git commit ...` (use sparingly).

## Commands

```bash
pnpm dev          # velite dev + next dev in parallel (watch mode)
pnpm build        # velite build --clean, then next build (sequential)
pnpm lint         # eslint
```

Always use `pnpm`. Never `npm` or `yarn`.

## Architecture

### Content pipeline

**Velite** (`velite.config.ts`) is the content layer. It reads `.md` files from `content/`, validates frontmatter via Zod schemas, and outputs typed TypeScript to `.velite/`. Velite runs as a standalone CLI process — it is **not** a webpack plugin and must not be wired into Next.js config.

Pages import content via the `#content` path alias:
```ts
import { allGardenNotes, allLibraryItems } from '#content'
```

The `.velite/` directory is gitignored and generated at build time.

### Collections

| velite.config key | Source pattern | Key fields |
|---|---|---|
| `gardenNotes` | `content/garden/**/*.md` | title, tags, status, source, author, created, content |
| `libraryItems` | `content/library/**/*.md` | title, type, status, tags, cover, rating, author, year, content |
| `refs` | `content/ref/**/*.md` | title, tags, source, author, published, created, content |

All collections share: `publish: boolean` (default true), `slug` (computed from filename), `content` (rendered HTML).

Import via the `#content` alias:
```ts
import { gardenNotes, libraryItems, refs } from '#content'
```

### Null-safe schema helpers

The vault publisher (MkDocs Publisher plugin) writes empty YAML keys as `null`, not `undefined`. Plain `.optional()` rejects null values. Use the helpers defined at the top of `velite.config.ts` for all optional fields:

- `yamlOptionalString()` — coerces `null | '' | undefined` → `undefined`, then validates as `string | undefined`
- `yamlOptionalNumber()` — same for numbers
- `vaultAuthor()` — accepts `string | string[] | null`, strips `[[wikilinks]]`, joins arrays with `, `

Never use `s.string().optional()` directly for frontmatter fields that come from the vault.

### Content source

`content/` is populated by the **MkDocs Publisher** Obsidian plugin (`obsidian-mkdocs-publisher`). Config in the vault at `.obsidian/plugins/obsidian-mkdocs-publisher/data.json`: repo `Uzayer/bibs-garden`, branch `main`, upload root `content/`, share key `publish`. The vault is the source of truth for file paths and frontmatter shape; Velite must accept whatever the plugin writes.

### Path aliases

- `@/*` → `src/*`
- `#content` → `.velite`

### UI

shadcn/ui with `base-nova` style, neutral base color, CSS variables enabled. Add components with `pnpm dlx shadcn add <component>`. Component files land in `src/components/ui/`.
