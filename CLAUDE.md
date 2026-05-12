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

| Export | Source pattern | Key fields |
|---|---|---|
| `allGardenNotes` | `content/garden/**/*.md` | title, tags, status, created, content |
| `allLibraryItems` | `content/library/**/*.md` | title, tags, cover, rating, author, year |
| `allRefs` | `content/refs/**/*.md` | title, tags, source, author |
| `allAntiLibraryItems` | `content/anti-library/**/*.md` | title, tags, cover, author, year |

All collections share: `publish: boolean` (default true), `slug` (computed from filename), `content` (rendered HTML).

### Content source

`content/` is currently empty. In production it is populated by the **Enveloppe** Obsidian plugin pushing notes from the vault. Locally, symlink the subdirectories to the vault or copy files manually.

### Path aliases

- `@/*` → `src/*`
- `#content` → `.velite`

### UI

shadcn/ui with `base-nova` style, neutral base color, CSS variables enabled. Add components with `pnpm dlx shadcn add <component>`. Component files land in `src/components/ui/`.
