import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {


  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/vendor-search`,
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 0.9,
    }

  ]
}