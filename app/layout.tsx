import type React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Suspense } from 'react';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Curie AI - AI Workforce for Healthcare',
  description:
    'Transforming healthcare with AI-powered workforce solutions that deliver measurable outcomes for practices of all sizes.',
  generator: 'Mr Afaq',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`font-sans ${inter.variable} overflow-x-`}>
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <main className='bg-[#07090D] overflow-x-'>{children}</main>
          <Footer />
        </Suspense>
        <Analytics />
      </body>
    </html>
  );
}
