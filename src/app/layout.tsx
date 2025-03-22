import React from 'react';
import { Kanit } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import './globals.css';

const kanit = Kanit({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-kanit',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Saddam Safi | WordPress Developer Toronto | Web Design & SEO</title>
        <meta name="description" content="Saddam Safi is a WordPress Developer from Toronto specializing in web design, SEO, and e-commerce solutions." />
      </head>
      <body className={kanit.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
