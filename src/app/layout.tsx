import React from 'react';
import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';
import './globals.css';

const figtree = Figtree({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-figtree',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'MarketFlow.VIP | AI Marketing Automation',
  description: 'We build, host, and manage all your AI marketing workflows for one flat monthly fee.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={figtree.variable}>
      <body className="min-h-screen bg-brand-white text-brand-black">
        {/* 
          Consider adding a <main> element here with a class like "container-custom" 
          if you want a consistent max-width and padding for all pages by default.
          e.g., <main className="container-custom">{children}</main>
          Alternatively, each page can manage its own container.
        */}
        {children}
      </body>
    </html>
  );
} 