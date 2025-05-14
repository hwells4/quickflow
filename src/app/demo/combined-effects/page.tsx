'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { cn } from '@/src/lib/utils';
import DepthShadowBackground from '@/src/components/landing/DepthShadowBackground';
import BackgroundShadowEffect from '@/src/components/landing/BackgroundShadowEffect';
import DesignJoyShadow from '@/src/components/ui/DesignJoyShadow';
import DepthCard from '@/src/components/ui/DepthCard';

const CombinedEffectsDemo = () => {
  // State for background settings
  const [background, setBackground] = useState({
    type: 'depth', // 'depth' or 'simple'
    primaryColor: '#8b5cf6', // violet
    secondaryColor: '#ec4899', // pink
    tertiaryColor: '#3b82f6', // blue
    intensity: 'medium' as 'subtle' | 'medium' | 'strong',
    pattern: 'corners' as 'corners' | 'sides' | 'top' | 'center',
  });

  // Toggle between background types
  const toggleBackgroundType = () => {
    setBackground(prev => ({
      ...prev,
      type: prev.type === 'depth' ? 'simple' : 'depth'
    }));
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Effect */}
      {background.type === 'depth' ? (
        <DepthShadowBackground
          primaryColor={background.primaryColor}
          secondaryColor={background.secondaryColor}
          tertiaryColor={background.tertiaryColor}
          intensity={background.intensity}
          pattern={background.pattern}
        />
      ) : (
        <BackgroundShadowEffect
          colorAccent="purple"
          opacity="medium"
          blurAmount="large"
          position="top-right"
        />
      )}
      
      {/* Main Content */}
      <div className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Combined Design Effects</h1>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              This demo showcases how DesignJoy-inspired background gradients and card shadows 
              work together to create depth and visual interest.
            </p>
            
            <div className="flex justify-center gap-4 mb-8">
              <Link 
                href="/demo/background-effects"
                className="px-4 py-2 bg-white rounded-lg text-gray-800 shadow-md hover:shadow-lg transition-shadow"
              >
                View Background Effects
              </Link>
              <Link 
                href="/demo/card-shadows"
                className="px-4 py-2 bg-white rounded-lg text-gray-800 shadow-md hover:shadow-lg transition-shadow"
              >
                View Card Shadows
              </Link>
            </div>
            
            <button 
              onClick={toggleBackgroundType}
              className="px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              Toggle Background: {background.type === 'depth' ? 'Multi-Layer' : 'Simple'}
            </button>
          </header>
          
          {/* Feature Section */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-center">Featured Content</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 - Elevated with shadow */}
              <DesignJoyShadow variant="elevated" className="bg-white/95 backdrop-blur-sm">
                <h3 className="text-lg font-semibold mb-3">Premium Design</h3>
                <p className="text-gray-600 mb-4">
                  The multi-layered shadows create depth and visual hierarchy without being distracting.
                </p>
                <div className="bg-indigo-100 text-indigo-600 p-3 rounded-lg inline-block">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </DesignJoyShadow>
              
              {/* Card 2 - Medium shadow */}
              <DesignJoyShadow variant="medium" className="bg-white/95 backdrop-blur-sm">
                <h3 className="text-lg font-semibold mb-3">Visual Depth</h3>
                <p className="text-gray-600 mb-4">
                  The interplay between background gradients and card shadows creates a sophisticated layered effect.
                </p>
                <div className="bg-pink-100 text-pink-600 p-3 rounded-lg inline-block">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </DesignJoyShadow>
              
              {/* Card 3 - Floating shadow */}
              <DesignJoyShadow variant="floating" className="bg-white/95 backdrop-blur-sm">
                <h3 className="text-lg font-semibold mb-3">Floating Elements</h3>
                <p className="text-gray-600 mb-4">
                  The strongest shadow variation creates a dramatic floating effect for important UI elements.
                </p>
                <div className="bg-blue-100 text-blue-600 p-3 rounded-lg inline-block">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </div>
              </DesignJoyShadow>
            </div>
          </section>
          
          {/* Hero Section */}
          <section className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Sophisticated UI Effects</h2>
                <p className="text-lg text-gray-700 mb-6">
                  The combination of subtle background gradients and multi-layered card
                  shadows creates a premium design aesthetic that feels modern and sophisticated.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  This approach allows your UI to have depth without relying on heavy drop shadows
                  or extreme color contrasts.
                </p>
                <div className="flex gap-4">
                  <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:shadow-lg hover:bg-indigo-700 transition-all duration-200">
                    Learn More
                  </button>
                  <button className="px-6 py-3 bg-white border border-gray-200 text-gray-700 rounded-lg shadow-sm hover:shadow-md transition-all duration-200">
                    View Examples
                  </button>
                </div>
              </div>
              
              <div>
                <DesignJoyShadow variant="floating" className="overflow-hidden p-0">
                  <img 
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2264&auto=format&fit=crop" 
                    alt="Gradient abstract" 
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2">Premium Visual Experience</h3>
                    <p className="text-gray-600">
                      DesignJoy's approach to shadows creates a sense of physical space and dimension
                      that elevates the entire interface.
                    </p>
                  </div>
                </DesignJoyShadow>
              </div>
            </div>
          </section>
          
          {/* Showcase with Different Card Styles */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Card Shadow Variations</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Simple Card with Regular Shadow */}
              <DepthCard elevation="medium" className="bg-white/95 backdrop-blur-sm hover:-translate-y-1 transition-transform">
                <h3 className="text-lg font-semibold mb-2">Standard Card</h3>
                <p className="text-gray-600">Basic shadow with single layer</p>
              </DepthCard>
              
              {/* Medium DesignJoy Shadow */}
              <DesignJoyShadow variant="medium" className="bg-white/95 backdrop-blur-sm hover:-translate-y-1 transition-transform">
                <h3 className="text-lg font-semibold mb-2">Multi-Layer Card</h3>
                <p className="text-gray-600">DesignJoy-style shadow with multiple layers</p>
              </DesignJoyShadow>
              
              {/* Custom Shadow - Extract just the shadow class */}
              <div className="rounded-lg p-6 bg-white/95 backdrop-blur-sm shadow-[0_16px_50px_rgba(15,23,42,0.12),0_24px_60px_rgba(15,23,42,0.06),0_2px_8px_rgba(15,23,42,0.04)] hover:-translate-y-1 transition-transform">
                <h3 className="text-lg font-semibold mb-2">Custom Element</h3>
                <p className="text-gray-600">Shadow applied directly to a div</p>
                <p className="text-sm mt-4 text-gray-500">No component wrapper needed!</p>
              </div>
            </div>
          </section>
          
          {/* Implementation Guide */}
          <section className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Combining Effects</h2>
            <DesignJoyShadow variant="medium" className="bg-white/95 backdrop-blur-sm">
              <h3 className="text-lg font-semibold mb-4">How to Implement</h3>
              
              <div className="mb-6 overflow-x-auto">
                <pre className="bg-gray-100 p-4 rounded text-sm">
{`// Combined Background + Card Example
'use client';

import DepthShadowBackground from '@/src/components/landing/DepthShadowBackground';
import DesignJoyShadow from '@/src/components/ui/DesignJoyShadow';

export default function MyPage() {
  return (
    <div className="relative min-h-screen">
      {/* Background gradient effect */}
      <DepthShadowBackground 
        primaryColor="#8b5cf6"
        secondaryColor="#ec4899"
        pattern="corners"
      />
      
      {/* Content with elevated cards */}
      <div className="relative z-10 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <DesignJoyShadow variant="elevated" className="bg-white/95 backdrop-blur-sm">
            Your card content here
          </DesignJoyShadow>
        </div>
      </div>
    </div>
  );
}`}
                </pre>
              </div>
              
              <div className="bg-indigo-50 p-4 rounded-lg">
                <h4 className="font-medium text-indigo-900 mb-2">Pro Tips:</h4>
                <ul className="list-disc list-inside text-indigo-800 space-y-2">
                  <li>Use <code className="bg-indigo-100 px-1 py-0.5 rounded">bg-white/95</code> with <code className="bg-indigo-100 px-1 py-0.5 rounded">backdrop-blur-sm</code> on cards to make them slightly translucent</li>
                  <li>Add <code className="bg-indigo-100 px-1 py-0.5 rounded">z-10</code> to content containers to ensure they appear above the background</li>
                  <li>Add hover effects like <code className="bg-indigo-100 px-1 py-0.5 rounded">hover:-translate-y-1</code> to enhance interactivity</li>
                </ul>
              </div>
            </DesignJoyShadow>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CombinedEffectsDemo; 