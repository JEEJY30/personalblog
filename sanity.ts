import { createClient } from "next-sanity";
import createImageUrlBuilder from '@sanity/image-url'

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: 'j8g1o17j',
  apiVersion: '2023-01-01',
  useCd: process.env.NODE_ENV === 'production'
}

export const sanityClient = createClient(config)

export const urlFor = (source: any) => createImageUrlBuilder(config).image(source)