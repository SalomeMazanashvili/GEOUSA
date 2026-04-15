import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const projectId = (import.meta.env.VITE_SANITY_PROJECT_ID ?? '').trim()
const dataset = (import.meta.env.VITE_SANITY_DATASET ?? 'production').trim()
const apiVersion = (import.meta.env.VITE_SANITY_API_VERSION ?? '2024-01-01').trim()
const useCdn = `${import.meta.env.VITE_SANITY_USE_CDN ?? 'true'}`.toLowerCase() === 'true'

export const sanityConfigured = Boolean(projectId && dataset)

const fallbackClient = createClient({
  projectId: 'demo1234',
  dataset: 'production',
  apiVersion,
  useCdn: true,
})

export const sanityClient = sanityConfigured
  ? createClient({ projectId, dataset, apiVersion, useCdn })
  : fallbackClient

const builder = imageUrlBuilder(sanityClient)

export const urlFor = (source: unknown) => builder.image(source as never)

export const sanityConfigError = sanityConfigured
  ? null
  : 'Sanity is not configured. Add VITE_SANITY_PROJECT_ID and VITE_SANITY_DATASET in your .env file.'
