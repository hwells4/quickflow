'use client';

import React from 'react';
import Link from 'next/link';
import DesignJoyShadow from '@/src/components/ui/DesignJoyShadow';
import DepthCard from '@/src/components/ui/DepthCard';
import BackgroundShadowEffect from '@/src/components/landing/BackgroundShadowEffect';
import DepthShadowBackground from '@/src/components/landing/DepthShadowBackground';

const GradientCardsDemo = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Gradient Cards Demo</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            Demonstrating how to use gradient effects within cards for enhanced depth and visual interest.
          </p>
          
          <div className="flex justify-center gap-4 mb-8">
            <Link 
              href="/demo/card-shadows"
              className="px-4 py-2 bg-white rounded-lg text-gray-800 shadow-md hover:shadow-lg transition-shadow"
            >
              Card Shadows
            </Link>
            <Link 
              href="/demo/background-effects"
              className="px-4 py-2 bg-white rounded-lg text-gray-800 shadow-md hover:shadow-lg transition-shadow"
            >
              Background Effects
            </Link>
            <Link 
              href="/demo/combined-effects"
              className="px-4 py-2 bg-white rounded-lg text-gray-800 shadow-md hover:shadow-lg transition-shadow"
            >
              Combined Effects
            </Link>
          </div>
          
          <div className="bg-blue-50 text-blue-800 p-4 rounded-lg inline-block">
            <p>See complete documentation at <code className="bg-blue-100 px-1.5 py-0.5 rounded">/docs/design-effects-guide.mdx</code></p>
          </div>
        </div>

        {/* Full Background Within Card */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Full Gradient Background Within Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card with Blue Gradient Background */}
            <DesignJoyShadow variant="elevated" className="overflow-hidden p-0">
              <div className="relative min-h-[220px]">
                {/* Internal gradient background */}
                <div className="absolute inset-0">
                  <BackgroundShadowEffect 
                    colorAccent="blue" 
                    opacity="low"
                    position="top-right" 
                  />
                </div>
                
                {/* Card content above the gradient */}
                <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Blue Gradient Card</h3>
                    <p className="text-gray-700">
                      This card has a subtle blue gradient background with the shadow effect on the outside.
                    </p>
                  </div>
                  <button className="mt-4 px-4 py-2 bg-white rounded-lg text-blue-600 shadow-sm hover:shadow-md transition-all self-start">
                    Learn More
                  </button>
                </div>
              </div>
            </DesignJoyShadow>
            
            {/* Card with Pink Gradient Background */}
            <DesignJoyShadow variant="elevated" className="overflow-hidden p-0">
              <div className="relative min-h-[220px]">
                {/* Internal gradient background */}
                <div className="absolute inset-0">
                  <BackgroundShadowEffect 
                    colorAccent="pink" 
                    opacity="low"
                    position="bottom-left" 
                  />
                </div>
                
                {/* Card content above the gradient */}
                <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Pink Gradient Card</h3>
                    <p className="text-gray-700">
                      This card features a soft pink gradient emanating from the bottom left corner.
                    </p>
                  </div>
                  <button className="mt-4 px-4 py-2 bg-white rounded-lg text-pink-600 shadow-sm hover:shadow-md transition-all self-start">
                    Learn More
                  </button>
                </div>
              </div>
            </DesignJoyShadow>
          </div>
        </section>
        
        {/* Partial Gradient Accent */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Gradient Accent Elements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card with Gradient Corner Accent */}
            <DesignJoyShadow variant="medium" className="relative overflow-hidden">
              {/* Small accent gradient in corner */}
              <div className="absolute -top-20 -right-20 w-40 h-40 opacity-10">
                <div className="w-full h-full rounded-full bg-purple-500 filter blur-2xl"></div>
              </div>
              
              {/* Card content */}
              <div className="relative z-10">
                <h3 className="text-lg font-semibold mb-2">Corner Accent</h3>
                <p className="text-gray-600">Subtle gradient accent in the top-right corner creates visual interest.</p>
              </div>
            </DesignJoyShadow>
            
            {/* Card with Bottom Gradient Accent */}
            <DesignJoyShadow variant="medium" className="relative overflow-hidden">
              {/* Bottom accent gradient */}
              <div className="absolute -bottom-24 left-0 right-0 h-32 opacity-10">
                <div className="w-full h-full bg-gradient-to-r from-blue-500 to-emerald-500 filter blur-2xl"></div>
              </div>
              
              {/* Card content */}
              <div className="relative z-10">
                <h3 className="text-lg font-semibold mb-2">Bottom Accent</h3>
                <p className="text-gray-600">A horizontal gradient accent along the bottom edge of the card.</p>
              </div>
            </DesignJoyShadow>
            
            {/* Card with Two-tone Accent */}
            <DesignJoyShadow variant="medium" className="relative overflow-hidden">
              {/* Two accent gradients */}
              <div className="absolute -top-20 -left-20 w-40 h-40 opacity-10">
                <div className="w-full h-full rounded-full bg-pink-500 filter blur-2xl"></div>
              </div>
              <div className="absolute -bottom-20 -right-20 w-40 h-40 opacity-10">
                <div className="w-full h-full rounded-full bg-indigo-500 filter blur-2xl"></div>
              </div>
              
              {/* Card content */}
              <div className="relative z-10">
                <h3 className="text-lg font-semibold mb-2">Dual Accent</h3>
                <p className="text-gray-600">Opposing gradient accents create a subtle two-tone effect.</p>
              </div>
            </DesignJoyShadow>
          </div>
        </section>
        
        {/* Gradient Headers & Sections */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Gradient Headers & Sections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card with Gradient Header */}
            <DesignJoyShadow variant="elevated" className="p-0 overflow-hidden">
              {/* Gradient header */}
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-white">
                <h3 className="font-bold text-lg">Gradient Header</h3>
                <p className="text-indigo-100">With white text content</p>
              </div>
              
              {/* Card content */}
              <div className="p-6 bg-white">
                <p className="text-gray-700">The main content area has a simple white background for contrast with the vibrant header.</p>
                <button className="mt-4 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition-colors">
                  Action Button
                </button>
              </div>
            </DesignJoyShadow>
            
            {/* Card with Gradient Footer */}
            <DesignJoyShadow variant="elevated" className="p-0 overflow-hidden">
              {/* Main content */}
              <div className="p-6 bg-white">
                <h3 className="font-bold text-lg mb-2">Content First</h3>
                <p className="text-gray-700">This card places the main content at the top with a gradient footer below for visual interest.</p>
              </div>
              
              {/* Gradient footer */}
              <div className="bg-gradient-to-r from-emerald-500 to-blue-500 p-4 text-white">
                <div className="flex justify-between items-center">
                  <p className="text-sm text-emerald-100">Updated 2 days ago</p>
                  <button className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded text-white hover:bg-white/30 transition-colors">
                    Details
                  </button>
                </div>
              </div>
            </DesignJoyShadow>
          </div>
        </section>
        
        {/* Advanced Examples */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Advanced Gradient + Shadow Combinations</h2>
          
          {/* Premium Card with Multiple Effects */}
          <DesignJoyShadow variant="floating" className="overflow-hidden p-0 max-w-3xl mx-auto mb-12">
            {/* Card content with internal gradient */}
            <div className="relative min-h-[300px]">
              {/* Internal subtle gradient */}
              <div className="absolute inset-0">
                <BackgroundShadowEffect 
                  colorAccent="purple" 
                  opacity="low"
                  blurAmount="large"
                  position="top-right" 
                />
              </div>
              
              {/* Content area with semi-transparent background */}
              <div className="relative z-10 p-8 h-full">
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg h-full">
                  <h3 className="text-xl font-bold mb-4">Premium Content Card</h3>
                  <p className="text-gray-700 mb-4">
                    This card combines a multi-layered shadow with an internal gradient
                    background for maximum depth and visual interest. The content sits
                    in a semi-transparent container with backdrop blur.
                  </p>
                  <div className="flex gap-3">
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                      Primary Action
                    </button>
                    <button className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                      Secondary
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </DesignJoyShadow>
          
          {/* Multi-section Card with Gradients */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Card with Gradient Image Section */}
            <DesignJoyShadow variant="elevated" className="p-0 overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-pink-400 to-purple-600 flex items-center justify-center">
                {/* Decorative elements */}
                <div className="absolute -top-12 -right-12 w-40 h-40 bg-white opacity-10 rounded-full"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white opacity-10 rounded-full"></div>
                
                {/* Product visualization */}
                <div className="h-32 w-32 bg-white/20 backdrop-blur-md rounded-xl shadow-lg transform rotate-12"></div>
              </div>
              
              <div className="p-6 bg-white">
                <h3 className="font-bold text-lg mb-2">Product Feature</h3>
                <p className="text-gray-600 mb-4">Product card with a visually rich gradient header section featuring decorative elements.</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg">$49.99</span>
                  <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </DesignJoyShadow>
            
            {/* Feature Card with Multi-colored Gradient */}
            <DesignJoyShadow variant="elevated" className="overflow-hidden p-0">
              <div className="relative">
                {/* Complex gradient background */}
                <div className="absolute inset-0">
                  <div className="absolute inset-0">
                    <DepthShadowBackground 
                      primaryColor="#8b5cf6" 
                      secondaryColor="#ec4899"
                      tertiaryColor="#3b82f6"
                      intensity="subtle"
                      pattern="center"
                    />
                  </div>
                </div>
                
                {/* Content with glass effect */}
                <div className="relative z-10 p-8">
                  <div className="bg-white/70 backdrop-blur-md p-6 rounded-xl">
                    <h3 className="text-xl font-bold mb-3 text-gray-800">Advanced UI Component</h3>
                    <p className="text-gray-700 mb-4">
                      This card uses the full DepthShadowBackground component internally for a
                      rich, multi-layered gradient effect with a frosted glass content panel.
                    </p>
                    <div className="rounded-lg bg-indigo-50 p-3 text-indigo-700 text-sm">
                      Perfect for premium features and highlights
                    </div>
                  </div>
                </div>
              </div>
            </DesignJoyShadow>
          </div>
        </section>
        
        {/* Implementation Guide */}
        <section className="max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Implementation Examples</h2>
          <DesignJoyShadow variant="medium" className="bg-white">
            <h3 className="text-lg font-semibold mb-4">How to Implement Gradient Cards</h3>
            
            <div className="mb-6 overflow-x-auto">
              <pre className="bg-gray-100 p-4 rounded text-sm">
{`// Full Background Within Card Example
<DesignJoyShadow variant="elevated" className="overflow-hidden p-0">
  <div className="relative min-h-[220px]">
    {/* Internal gradient background */}
    <div className="absolute inset-0">
      <BackgroundShadowEffect 
        colorAccent="blue" 
        opacity="low"
        position="top-right" 
      />
    </div>
    
    {/* Card content above the gradient */}
    <div className="relative z-10 p-6">
      <h3 className="text-lg font-semibold">Card with Gradient</h3>
      <p>Content above the gradient background</p>
    </div>
  </div>
</DesignJoyShadow>`}
              </pre>
            </div>
            
            <div className="mb-6 overflow-x-auto">
              <pre className="bg-gray-100 p-4 rounded text-sm">
{`// Simple Gradient Accent Example
<DesignJoyShadow variant="medium" className="relative overflow-hidden">
  {/* Accent gradient in corner */}
  <div className="absolute -top-20 -right-20 w-40 h-40 opacity-10">
    <div className="w-full h-full rounded-full bg-purple-500 filter blur-2xl"></div>
  </div>
  
  {/* Card content */}
  <div className="relative z-10">
    <h3 className="text-lg font-semibold">Card Title</h3>
    <p>Card content with accent gradient</p>
  </div>
</DesignJoyShadow>`}
              </pre>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-900 mb-2">Key Tips:</h4>
              <ul className="list-disc list-inside text-blue-800 space-y-2">
                <li>Always add <code className="bg-blue-100 px-1 py-0.5 rounded">overflow-hidden</code> to contain gradient effects</li>
                <li>For gradient backgrounds, use <code className="bg-blue-100 px-1 py-0.5 rounded">relative</code> and <code className="bg-blue-100 px-1 py-0.5 rounded">min-h-[SIZE]</code> for proper container sizing</li>
                <li>Content should have <code className="bg-blue-100 px-1 py-0.5 rounded">relative z-10</code> to appear above the gradient</li>
                <li>For subtle effects, use <code className="bg-blue-100 px-1 py-0.5 rounded">opacity-10</code> or similar low values</li>
              </ul>
            </div>
          </DesignJoyShadow>
        </section>
        
        {/* Documentation Link */}
        <div className="text-center">
          <p className="mb-4">For complete documentation and more examples, see:</p>
          <Link 
            href="/docs/design-effects-guide.mdx"
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:shadow-lg hover:bg-indigo-700 transition-all inline-block"
          >
            View Full Documentation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GradientCardsDemo; 