import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap:
      'https://santhosh-r-portfolio-three.vercel.app/sitemap.xml',
  }
}