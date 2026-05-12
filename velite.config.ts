import { defineConfig, s, z } from 'velite'

/**
 * Obsidian / MkDocs Publisher often serializes empty frontmatter keys as YAML `null`.
 * Zod's `.optional()` only treats `undefined` as absent, not `null`.
 */
const yamlOptionalString = () =>
  z.preprocess(
    (v) => (v === null || v === undefined || v === '' ? undefined : v),
    z.string().optional(),
  )

const yamlOptionalNumber = () =>
  z.preprocess(
    (v) => (v === null || v === undefined ? undefined : v),
    z.number().optional(),
  )

const wikilinkToPlain = (value: string) =>
  value.replace(/\[\[([^\]]+)\]\]/g, '$1')

/** String, wikilink list, or YAML null — as emitted from the vault. */
const vaultAuthor = () =>
  z.preprocess((v) => {
    if (v === null || v === undefined || v === '') return undefined
    if (typeof v === 'string') return wikilinkToPlain(v)
    if (Array.isArray(v))
      return v
        .map((a) => wikilinkToPlain(String(a)))
        .filter(Boolean)
        .join(', ')
    return undefined
  }, z.string().optional())

const slugify = (path: string) =>
  path
    .split('/')
    .pop()!
    .replace(/\.mdx?$/, '')
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')

const gardenNotes = {
  name: 'GardenNote',
  pattern: 'garden/**/*.md',
  schema: s
    .object({
      title: s.string(),
      description: yamlOptionalString(),
      publish: s.boolean().default(true),
      tags: s.array(s.string()).default([]),
      source: yamlOptionalString(),
      author: vaultAuthor(),
      published: yamlOptionalString(),
      created: yamlOptionalString(),
      status: yamlOptionalString(),
      content: s.markdown(),
    })
    .transform((data, { meta }) => ({
      ...data,
      slug: slugify(meta.path),
    })),
}

const libraryType = z.enum(['book', 'film', 'anime', 'tv'])
const libraryStatus = z.enum([
  'want',
  'reading',
  'watching',
  'completed',
  'dropped',
])

const libraryItems = {
  name: 'LibraryItem',
  pattern: 'library/**/*.md',
  schema: s
    .object({
      title: s.string(),
      description: yamlOptionalString(),
      publish: s.boolean().default(true),
      tags: s.array(s.string()).default([]),
      type: z.preprocess(
        (v) =>
          v === null || v === undefined || v === '' ? undefined : v,
        libraryType.optional().default('book'),
      ),
      status: z.preprocess(
        (v) => (v === null || v === undefined || v === '' ? undefined : v),
        libraryStatus.optional(),
      ),
      cover: yamlOptionalString(),
      rating: yamlOptionalNumber(),
      author: yamlOptionalString(),
      year: yamlOptionalNumber(),
      content: s.markdown(),
    })
    .transform((data, { meta }) => ({
      ...data,
      slug: slugify(meta.path),
    })),
}

const refs = {
  name: 'Ref',
  pattern: 'ref/**/*.md',
  schema: s
    .object({
      title: s.string(),
      description: yamlOptionalString(),
      publish: s.boolean().default(true),
      tags: s.array(s.string()).default([]),
      source: yamlOptionalString(),
      author: vaultAuthor(),
      published: yamlOptionalString(),
      created: yamlOptionalString(),
      content: s.markdown(),
    })
    .transform((data, { meta }) => ({
      ...data,
      slug: slugify(meta.path),
    })),
}

export default defineConfig({
  root: 'content',
  output: {
    data: '.velite',
    assets: 'public/static',
    base: '/static/',
    name: '[name]-[hash:8][ext]',
    clean: true,
  },
  collections: { gardenNotes, libraryItems, refs },
})
