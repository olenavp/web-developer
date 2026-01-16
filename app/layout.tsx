import type React from 'react';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import { Footer } from '@/components/footer';
import Header from '@/components/header/Header';
import { GoogleAnalytics } from '@/components/GoogleAnalytics';
import { CookieBanner } from '@/components/CookieBanner';

export const metadata: Metadata = {
  title: 'Професійна веб-розробка',
  description:
    'Проєктування та розробка високоефективних сайтів на чистому коді. Від концепції до запуску.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body className={`font-sans antialiased`}>
        <GoogleAnalytics />
        <Header />
        {children}
        <Footer />
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}
