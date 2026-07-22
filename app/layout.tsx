import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
})

const siteUrl = 'https://santhosh-r.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Santhosh R | Full Stack Developer Portfolio',
  description:
    'Computer Science Engineering student specializing in Full Stack Development, Java, Backend Development, and AI Applications.',
  keywords: [
    'Santhosh R',
    'Full Stack Developer',
    'Java Developer',
    'AI Application Developer',
    'Backend Developer',
    'Portfolio',
    'React',
    'Node.js',
  ],
  authors: [{ name: 'Santhosh R' }],
  creator: 'Santhosh R',
  generator: 'v0.app',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: 'Santhosh R | Full Stack Developer Portfolio',
    description:
      'Computer Science Engineering student specializing in Full Stack Development, Java, Backend Development, and AI Applications.',
    siteName: 'Santhosh R Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Santhosh R | Full Stack Developer Portfolio',
    description:
      'Computer Science Engineering student specializing in Full Stack Development, Java, Backend Development, and AI Applications.',
    creator: '@santhoshr',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#FAFAFA',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
