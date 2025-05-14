'use client';

import React from 'react';
import DepthCard from '@/src/components/ui/DepthCard';
import DesignJoyShadow from '@/src/components/ui/DesignJoyShadow';

const CardShadowsDemo = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Card Shadow Effects</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Exploring different card shadow techniques to create depth and elevation, 
            including DesignJoy-inspired shadow effects that add dimension to your UI.
          </p>
        </div>

        {/* Standard Card Shadows */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Standard Card Shadows</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <DepthCard elevation="low" className="hover:shadow-xl hover:-translate-y-1">
              <h3 className="text-lg font-semibold mb-2">Low Elevation</h3>
              <p className="text-gray-600">Simple, subtle shadow for minimal elevation</p>
            </DepthCard>

            <DepthCard elevation="medium" className="hover:shadow-xl hover:-translate-y-1">
              <h3 className="text-lg font-semibold mb-2">Medium Elevation</h3>
              <p className="text-gray-600">Standard shadow for most card interfaces</p>
            </DepthCard>

            <DepthCard elevation="high" className="hover:shadow-xl hover:-translate-y-1">
              <h3 className="text-lg font-semibold mb-2">High Elevation</h3>
              <p className="text-gray-600">Pronounced shadow for important elements</p>
            </DepthCard>

            <DepthCard elevation="floating" className="hover:shadow-xl hover:-translate-y-1">
              <h3 className="text-lg font-semibold mb-2">Floating Card</h3>
              <p className="text-gray-600">Dramatic elevation for floating elements</p>
            </DepthCard>
          </div>
        </div>

        {/* DesignJoy Style Shadows */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">DesignJoy-Inspired Shadows</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <DesignJoyShadow variant="subtle" className="hover:-translate-y-1 transition-transform">
              <h3 className="text-lg font-semibold mb-2">Subtle Depth</h3>
              <p className="text-gray-600">Minimalist shadow with delicate layering</p>
            </DesignJoyShadow>

            <DesignJoyShadow variant="medium" className="hover:-translate-y-1 transition-transform">
              <h3 className="text-lg font-semibold mb-2">Medium Depth</h3>
              <p className="text-gray-600">Balanced shadow for common UI elements</p>
            </DesignJoyShadow>

            <DesignJoyShadow variant="elevated" className="hover:-translate-y-1 transition-transform">
              <h3 className="text-lg font-semibold mb-2">Elevated Depth</h3>
              <p className="text-gray-600">Prominent layered shadow effect</p>
            </DesignJoyShadow>

            <DesignJoyShadow variant="floating" className="hover:-translate-y-1 transition-transform">
              <h3 className="text-lg font-semibold mb-2">Floating Effect</h3>
              <p className="text-gray-600">Maximum depth with sophisticated layering</p>
            </DesignJoyShadow>
          </div>
        </div>

        {/* Different Card Variants */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Extended DesignJoy Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Feature card with icon */}
            <DesignJoyShadow variant="elevated" className="flex items-start gap-4">
              <div className="bg-indigo-100 p-3 rounded-lg">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Feature Highlight</h3>
                <p className="text-gray-600">A feature card with icon and DesignJoy-style shadow depth</p>
              </div>
            </DesignJoyShadow>

            {/* Content card with image */}
            <DesignJoyShadow variant="elevated" className="overflow-hidden p-0">
              <div className="h-48 bg-gradient-to-r from-blue-400 to-indigo-500"></div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">Content Card</h3>
                <p className="text-gray-600">A content card with image and sophisticated shadow depth</p>
              </div>
            </DesignJoyShadow>
          </div>
        </div>

        {/* Large Featured Card */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Hero Card with DesignJoy Shadow</h2>
          
          <DesignJoyShadow variant="floating" className="max-w-3xl mx-auto p-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">Premium Experience</h3>
                <p className="text-gray-600 mb-6">
                  The multi-layered shadow technique used by DesignJoy creates a refined depth effect
                  that makes UI elements appear more dimensional and premium.
                </p>
                <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                  Get Started
                </button>
              </div>
              <div className="flex-1">
                <div className="aspect-video bg-gradient-to-br from-violet-500 to-purple-500 rounded-lg"></div>
              </div>
            </div>
          </DesignJoyShadow>
        </div>

        {/* Implementation Guide */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Implementation Guide</h2>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <p className="mb-4">To use these shadows in your project:</p>
            
            <div className="mb-6 overflow-x-auto">
              <pre className="bg-gray-100 p-4 rounded text-sm">
                {`// Import the component
import DesignJoyShadow from '@/src/components/ui/DesignJoyShadow';

// Use in your component
<DesignJoyShadow variant="elevated">
  <h3>Your Card Title</h3>
  <p>Card content goes here</p>
</DesignJoyShadow>`}
              </pre>
            </div>
            
            <p className="font-medium">Available variants:</p>
            <ul className="list-disc list-inside mb-6 ml-4 text-gray-700">
              <li><code className="text-sm bg-gray-100 px-1 py-0.5 rounded">subtle</code> - Minimal elevation</li>
              <li><code className="text-sm bg-gray-100 px-1 py-0.5 rounded">medium</code> - Standard elevation</li>
              <li><code className="text-sm bg-gray-100 px-1 py-0.5 rounded">elevated</code> - Prominent elevation</li>
              <li><code className="text-sm bg-gray-100 px-1 py-0.5 rounded">floating</code> - Maximum elevation</li>
            </ul>
            
            <p>The shadow implementation uses multiple layered box-shadows with carefully calibrated values for offset, blur radius, and color opacity to achieve the sophisticated depth effect seen on DesignJoy.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardShadowsDemo; 