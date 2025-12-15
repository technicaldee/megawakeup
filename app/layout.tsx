import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

const logoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-fxsuM1giKTqf5k7NM2nQAWoZZvKAy6.png'
const siteUrl = 'https://megawakeupinternational.ng'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Mega Wake Up International - Reaching Out, Making a Difference',
    template: '%s | Mega Wake Up International',
  },
  description: 'Mega Wake Up International (MEWI) is a registered NGO providing emergency relief, empowerment programs, and poverty alleviation to communities across Nigeria. Join us in making a difference.',
  keywords: [
    'NGO Nigeria',
    'humanitarian aid',
    'poverty alleviation',
    'emergency relief',
    'community empowerment',
    'Nigeria charity',
    'MEWI',
    'TELEPECON',
    'skills acquisition',
    'vocational training',
    'medical assistance',
    'women empowerment',
    'youth development',
    'non-profit organization',
  ],
  authors: [{ name: 'Mega Wake Up International', url: siteUrl }],
  creator: 'Mega Wake Up International',
  publisher: 'Mega Wake Up International',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: siteUrl,
    siteName: 'Mega Wake Up International',
    title: 'Mega Wake Up International - Reaching Out, Making a Difference',
    description: 'Providing emergency relief and empowerment programs to communities in need across Nigeria',
    images: [
      {
        url: logoUrl,
        width: 1200,
        height: 630,
        alt: 'Mega Wake Up International Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@megawake_up',
    creator: '@megawake_up',
    title: 'Mega Wake Up International - Reaching Out, Making a Difference',
    description: 'Providing emergency relief and empowerment programs to communities in need across Nigeria',
    images: [logoUrl],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: logoUrl,
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: logoUrl,
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    shortcut: logoUrl,
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    // Add Google Search Console verification when available
    // google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-NG">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
