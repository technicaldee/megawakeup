import { MetadataRoute } from 'next'
import { getAllTeamMembers } from '@/lib/team-data'

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

  const staticEntries: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))

  const teamEntries: MetadataRoute.Sitemap = getAllTeamMembers().map((member) => ({
    url: `${siteUrl}/team/${member.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticEntries, ...teamEntries]
}

