import React from 'react';
import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';
import { cn } from '@/lib/utils';
import './globals.css';
import DepthShadowBackground from '@/src/components/landing/DepthShadowBackground';

const figtree = Figtree({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-figtree',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'QuickFlow | Effortless AI Automation for Agencies',
  description: 'QuickFlow empowers marketing agencies to scale with bespoke AI automation solutions. Effortless expertise, reliable results.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn('scroll-smooth', figtree.variable)} suppressHydrationWarning>
      <body 
        className={cn(
          'min-h-screen font-primary antialiased'
          // Body will use var(--color-background) from globals.css
        )}
      >
        {/* Mimicking demo structure: A parent div with relative positioning and overflow-hidden */}
        <div className="relative min-h-screen overflow-hidden">
          <DepthShadowBackground 
            className="absolute inset-0 z-0" // Component is designed to be absolute within a relative parent
            primaryColor="#f6f1f3"
            secondaryColor="#f6f1f3"
            tertiaryColor="#f6f1f3"
            intensity="subtle"
            pattern="corners"
          />
          
          {/* Content wrapper: relative, z-1, and scrolls independently */}
          <div className="relative z-[1] flex flex-col min-h-screen h-screen overflow-y-auto">
            {/* 
              Flex-grow might be needed on a main content area *within* children 
              if there's a fixed header/footer also within this scrolling div.
              For now, this div itself is the main scrolling container for the page content.
            */}
            {children}
          </div>
        </div>
      </body>
    </html>
  );
} 