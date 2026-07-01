import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://mariyan-marinov.github.io/mariyan-marinov-cv'),
  title: {
    default: 'Mariyan Marinov — Senior Software Engineer | Tech Lead | AI Engineer',
    template: '%s | Mariyan Marinov',
  },
  description:
    'Senior Software Engineer and Technical Lead with 14+ years building enterprise software, cloud platforms on Azure & AWS, distributed systems, and AI-assisted engineering solutions.',
  keywords: [
    'Senior Software Engineer',
    'Tech Lead',
    'AI Engineer',
    'Technical Lead',
    'C#',
    'ASP.NET Core',
    'Azure',
    'AWS',
    'React',
    'TypeScript',
    'Microservices',
    'Cloud Architect',
    'Bulgaria',
    'Software Architect',
    'AI Engineering',
  ],
  authors: [{ name: 'Mariyan Marinov', url: 'https://www.linkedin.com/in/mariyanmarinov' }],
  creator: 'Mariyan Marinov',
  openGraph: {
    type: 'profile',
    firstName: 'Mariyan',
    lastName: 'Marinov',
    username: 'mariyanmarinov',
    title: 'Mariyan Marinov — Senior .NET Full Stack Engineer & Technical Lead',
    description:
      '14+ years building enterprise software, cloud platforms, distributed systems, and AI-assisted engineering solutions at scale.',
    url: 'https://mariyan-marinov.github.io/mariyan-marinov-cv/',
    siteName: 'Mariyan Marinov',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mariyan Marinov — Senior .NET Full Stack Engineer & Technical Lead',
    description:
      '14+ years building enterprise software, cloud platforms, and AI-assisted engineering solutions at scale.',
    creator: '@mariyanmarinov',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
    },
  },
  alternates: {
    canonical: 'https://mariyan-marinov.github.io/mariyan-marinov-cv/',
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Mariyan Marinov',
  jobTitle: 'Senior Software Engineer | Tech Lead | AI Engineer',
  description:
    'Senior .NET Full Stack Engineer and Technical Lead with 14+ years of experience in enterprise software, cloud platforms, and AI-assisted engineering.',
  url: 'https://mariyan-marinov.github.io/mariyan-marinov-cv/',
  email: 'mariyan87@gmail.com',
  sameAs: [
    'https://www.linkedin.com/in/mariyanmarinov',
    'https://github.com/mariyan-marinov',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Sofia',
    addressCountry: 'BG',
  },
  knowsAbout: [
    '.NET', 'C#', 'ASP.NET Core', 'React', 'TypeScript', 'Azure', 'AWS',
    'Microservices', 'Technical Leadership', 'AI Engineering',
  ],
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Technical University of Sofia',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] btn-primary text-sm"
          >
            Skip to main content
          </a>
          <Header />
          <main id="main-content">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
