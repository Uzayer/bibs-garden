import { defineConfig, s } from 'velite'

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
      description: s.string().optional(),
      publish: s.boolean().default(true),
      tags: s.array(s.string()).default([]),
      created: s.string().optional(),
      status: s.string().optional(),
      content: s.markdown(),
    })
    .transform((data, { meta }) => ({
      ...data,
      slug: slugify(meta.path),
    })),
}

const libraryItems = {
  name: 'LibraryItem',
  pattern: 'library/**/*.md',
  schema: s
    .object({
      title: s.string(),
      description: s.string().optional(),
      publish: s.boolean().default(true),
      tags: s.array(s.string()).default([]),
      cover: s.string().optional(),
      rating: s.number().min(1).max(10).optional(),
      status: s.string().optional(),
      author: s.string().optional(),
      year: s.number().optional(),
      content: s.markdown(),
    })
    .transform((data, { meta }) => ({
      ...data,
      slug: slugify(meta.path),
    })),
}

const refs = {
  name: 'Ref',
  pattern: 'refs/**/*.md',
  schema: s
    .object({
      title: s.string(),
      description: s.string().optional(),
      publish: s.boolean().default(true),
      tags: s.array(s.string()).default([]),
      source: s.string().optional(),
      author: s.string().optional(),
      created: s.string().optional(),
      content: s.markdown(),
    })
    .transform((data, { meta }) => ({
      ...data,
      slug: slugify(meta.path),
    })),
}

const antiLibrary = {
  name: 'AntiLibraryItem',
  pattern: 'anti-library/**/*.md',
  schema: s
    .object({
      title: s.string(),
      description: s.string().optional(),
      publish: s.boolean().default(true),
      tags: s.array(s.string()).default([]),
      cover: s.string().optional(),
      author: s.string().optional(),
      year: s.number().optional(),
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
  collections: { gardenNotes, libraryItems, refs, antiLibrary },
})
