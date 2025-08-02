import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const projectId = process.env.SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.SANITY_DATASET || process.env.NEXT_PUBLIC_SANITY_DATASET
const apiVersion = '2023-05-03'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false for dynamic content
  token: process.env.SANITY_API_TOKEN, // Only add token for write operations
})

const builder = imageUrlBuilder(client)

export const urlFor = (source: any) => builder.image(source)

// Helper function to fetch data by document type
export async function getSanityData(documentType: string) {
  try {
    const query = `*[_type == "${documentType}"][0]`
    const data = await client.fetch(query)
    return data
  } catch (error) {
    console.warn(`Failed to fetch ${documentType} from Sanity:`, error)
    return null
  }
}

// Helper function to fetch multiple documents
export async function getSanityDocuments(documentType: string) {
  try {
    const query = `*[_type == "${documentType}"] | order(_createdAt desc)`
    const data = await client.fetch(query)
    return data
  } catch (error) {
    console.warn(`Failed to fetch ${documentType} documents from Sanity:`, error)
    return []
  }
}