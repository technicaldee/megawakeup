import { MetadataRoute } from 'next'

const siteUrl = 'https://megawakeupinternational.ng'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/team',
    '/programs',
    '/gallery',
    '/contact',
    '/donate',
  ]

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))
}

