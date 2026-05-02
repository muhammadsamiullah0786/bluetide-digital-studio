import type { Metadata } from 'next';
import './globals.css';
import { siteData } from '@/data/site';

export const metadata: Metadata = {
  metadataBase: new URL(siteData.metadata.url),
  title: siteData.metadata.title,
  description: siteData.metadata.description,
  authors: [{ name: siteData.metadata.author }],
  keywords: [
    'Muhammad Sami Ullah',
    'Full Stack Developer',
    'App Developer',
    'Digital Product Builder',
    'Web Application Developer',
    'SaaS Developer',
    'Mobile App Developer',
    'React Developer',
    'Next.js Developer',
    'Node.js Developer',
    'Dashboard Developer',
    'Frontend Developer',
    'Backend Developer',
    'Pakistan Developer',
  ],
  openGraph: {
    title: siteData.metadata.title,
    description: siteData.metadata.description,
    type: 'website',
    url: siteData.metadata.url,
    siteName: 'Muhammad Sami Ullah Portfolio',
    images: [
      {
        url: siteData.metadata.ogImage,
        width: 1200,
        height: 630,
        alt: 'Muhammad Sami Ullah - Full Stack Developer & Digital Product Builder',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteData.metadata.title,
    description: siteData.metadata.description,
    images: [siteData.metadata.ogImage],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteData.profile.name,
    url: siteData.metadata.url,
    jobTitle: siteData.profile.role,
    description: siteData.metadata.description,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Pakistan',
      addressCountry: 'Pakistan',
    },
    sameAs: siteData.socials.map((social) => social.href),
    knowsAbout: [
      'Full Stack Development',
      'Web Application Development',
      'Mobile App Development',
      'SaaS Product Development',
      'Dashboard & Admin Panel Development',
      'API & Backend Integration',
      'Frontend Development',
      'Backend Development',
      'React',
      'Next.js',
      'Node.js',
      'TypeScript',
      'Tailwind CSS',
      'MongoDB',
      'PostgreSQL',
    ],
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0A0820" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-white antialiased">
        {children}
      </body>
    </html>
  );
}
