import type { Metadata } from 'next';
import './globals.css';
import { siteData } from '@/data/site';

export const metadata: Metadata = {
  title: 'Muhammad Sami Ullah | App Developer, Web Developer & UI/UX Designer',
  description: 'Portfolio of Muhammad Sami Ullah, app developer, web developer and UI/UX designer from Islamabad, Pakistan. Specializing in React, Next.js, and modern web development.',
  authors: [{ name: siteData.metadata.author }],
  keywords: ['App Developer', 'Web Developer', 'UI/UX Designer', 'React Developer', 'Next.js Developer', 'Islamabad', 'Pakistan', 'Full Stack Developer', 'Frontend Developer', 'Mobile App Developer'],
  openGraph: {
    title: 'Muhammad Sami Ullah | App Developer, Web Developer & UI/UX Designer',
    description: 'Portfolio of Muhammad Sami Ullah, app developer, web developer and UI/UX designer from Islamabad, Pakistan.',
    type: 'website',
    url: 'https://bluetide-studio.com',
    siteName: 'BlueTide Digital Studio',
    images: [
      {
        url: siteData.metadata.ogImage,
        width: 1200,
        height: 630,
        alt: 'Muhammad Sami Ullah - Portfolio',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Sami Ullah | App Developer, Web Developer & UI/UX Designer',
    description: 'Portfolio of Muhammad Sami Ullah, app developer, web developer and UI/UX designer from Islamabad, Pakistan.',
    images: [siteData.metadata.ogImage],
    creator: '@MSami7860',
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
    name: 'Muhammad Sami Ullah',
    url: 'https://bluetide-studio.com',
    jobTitle: 'App Developer, Web Developer & UI/UX Designer',
    description: 'Portfolio of Muhammad Sami Ullah, app developer, web developer and UI/UX designer from Islamabad, Pakistan.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Islamabad',
      addressCountry: 'Pakistan',
    },
    sameAs: [
      'https://www.linkedin.com/in/muhammad-sami-ullah-4b9676282/',
      'https://github.com/muhammadsamiullah7860',
      'https://twitter.com/MSami7860',
    ],
    knowsAbout: ['Web Development', 'Mobile App Development', 'UI/UX Design', 'React', 'Next.js', 'JavaScript', 'TypeScript'],
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#f6f1ea" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-cream">
        {children}
      </body>
    </html>
  );
}
