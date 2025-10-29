import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Josh Giddings - Community Translator | Building Generational Wealth',
  description: '20+ years helping families achieve homeownership. Now partnering with technology to unlock enterprise capabilities for everyone. Co-founder of ClearForge AI.',
  keywords: 'Josh Giddings, mortgage, homeownership, Port St Lucie, ClearForge AI, community connector, Think Mortgage',
  authors: [{ name: 'Josh Giddings' }],
  creator: 'Josh Giddings',
  publisher: 'Josh Giddings',
  robots: 'index, follow',
  openGraph: {
    title: 'Josh Giddings - Community Translator',
    description: '20+ years helping families build generational wealth through homeownership',
    url: 'https://joshgiddings.com',
    siteName: 'Josh Giddings',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Josh Giddings - Community Translator',
    description: '20+ years in mortgages. Co-founder of ClearForge AI.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="smooth-scroll">
      <body>{children}</body>
    </html>
  )
}
