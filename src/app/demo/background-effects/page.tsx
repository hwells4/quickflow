'use client';

import React, { useState } from 'react';
import BackgroundShadowEffect from '@/src/components/landing/BackgroundShadowEffect';
import DepthShadowBackground from '@/src/components/landing/DepthShadowBackground';

const BackgroundEffectsDemo = () => {
  const [simpleConfig, setSimpleConfig] = useState({
    colorAccent: 'purple',
    opacity: 'medium',
    blurAmount: 'medium',
    position: 'top-right',
  });
  
  const [complexConfig, setComplexConfig] = useState({
    primaryColor: '#8b5cf6',
    secondaryColor: '#ec4899',
    tertiaryColor: '#3b82f6',
    intensity: 'medium',
    pattern: 'corners',
  });

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-8">Background Shadow Effects</h1>
        <p className="text-lg mb-8">
          Inspired by DesignJoy's shadow and depth effects, these components add depth and dimension to your layout.
        </p>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Simple Shadow Effect</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Simple Configuration Panel */}
            <div className="p-6 border rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Configuration</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block mb-2 font-medium">Color Accent</label>
                  <select 
                    className="w-full p-2 border rounded-md"
                    value={simpleConfig.colorAccent}
                    onChange={(e) => setSimpleConfig({...simpleConfig, colorAccent: e.target.value})}
                  >
                    <option value="purple">Purple</option>
                    <option value="blue">Blue</option>
                    <option value="pink">Pink</option>
                    <option value="orange">Orange</option>
                    <option value="green">Green</option>
                  </select>
                </div>
                
                <div>
                  <label className="block mb-2 font-medium">Opacity</label>
                  <select 
                    className="w-full p-2 border rounded-md"
                    value={simpleConfig.opacity}
                    onChange={(e) => setSimpleConfig({...simpleConfig, opacity: e.target.value})}
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>
                
                <div>
                  <label className="block mb-2 font-medium">Blur Amount</label>
                  <select 
                    className="w-full p-2 border rounded-md"
                    value={simpleConfig.blurAmount}
                    onChange={(e) => setSimpleConfig({...simpleConfig, blurAmount: e.target.value})}
                  >
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                  </select>
                </div>
                
                <div>
                  <label className="block mb-2 font-medium">Position</label>
                  <select 
                    className="w-full p-2 border rounded-md"
                    value={simpleConfig.position}
                    onChange={(e) => setSimpleConfig({...simpleConfig, position: e.target.value})}
                  >
                    <option value="top-right">Top Right</option>
                    <option value="top-left">Top Left</option>
                    <option value="bottom-right">Bottom Right</option>
                    <option value="bottom-left">Bottom Left</option>
                  </select>
                </div>
              </div>
            </div>
            
            {/* Simple Preview */}
            <div className="relative h-80 rounded-lg overflow-hidden border">
              <BackgroundShadowEffect 
                colorAccent={simpleConfig.colorAccent}
                opacity={simpleConfig.opacity}
                blurAmount={simpleConfig.blurAmount}
                position={simpleConfig.position}
              />
              <div className="relative h-full flex items-center justify-center">
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold">Simple Shadow Effect</h3>
                  <p>A lightweight shadow background with configurable options</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Premium Depth Effect</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Complex Configuration Panel */}
            <div className="p-6 border rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Configuration</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block mb-2 font-medium">Primary Color</label>
                  <input 
                    type="color" 
                    className="w-full p-1 border rounded-md h-10"
                    value={complexConfig.primaryColor}
                    onChange={(e) => setComplexConfig({...complexConfig, primaryColor: e.target.value})}
                  />
                </div>
                
                <div>
                  <label className="block mb-2 font-medium">Secondary Color</label>
                  <input 
                    type="color" 
                    className="w-full p-1 border rounded-md h-10"
                    value={complexConfig.secondaryColor}
                    onChange={(e) => setComplexConfig({...complexConfig, secondaryColor: e.target.value})}
                  />
                </div>
                
                <div>
                  <label className="block mb-2 font-medium">Tertiary Color</label>
                  <input 
                    type="color" 
                    className="w-full p-1 border rounded-md h-10"
                    value={complexConfig.tertiaryColor}
                    onChange={(e) => setComplexConfig({...complexConfig, tertiaryColor: e.target.value})}
                  />
                </div>
                
                <div>
                  <label className="block mb-2 font-medium">Intensity</label>
                  <select 
                    className="w-full p-2 border rounded-md"
                    value={complexConfig.intensity}
                    onChange={(e) => setComplexConfig({...complexConfig, intensity: e.target.value})}
                  >
                    <option value="subtle">Subtle</option>
                    <option value="medium">Medium</option>
                    <option value="strong">Strong</option>
                  </select>
                </div>
                
                <div>
                  <label className="block mb-2 font-medium">Pattern</label>
                  <select 
                    className="w-full p-2 border rounded-md"
                    value={complexConfig.pattern}
                    onChange={(e) => setComplexConfig({...complexConfig, pattern: e.target.value})}
                  >
                    <option value="corners">Corners</option>
                    <option value="sides">Sides</option>
                    <option value="top">Top</option>
                    <option value="center">Center</option>
                  </select>
                </div>
              </div>
            </div>
            
            {/* Complex Preview */}
            <div className="relative h-80 rounded-lg overflow-hidden border">
              <DepthShadowBackground 
                primaryColor={complexConfig.primaryColor}
                secondaryColor={complexConfig.secondaryColor}
                tertiaryColor={complexConfig.tertiaryColor}
                intensity={complexConfig.intensity}
                pattern={complexConfig.pattern}
              />
              <div className="relative h-full flex items-center justify-center">
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold">Premium Depth Effect</h3>
                  <p>A sophisticated multi-layer shadow effect with advanced options</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Examples Gallery */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Inspiration Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Example 1 - DesignJoy Purple */}
            <div className="relative h-64 rounded-lg overflow-hidden border">
              <DepthShadowBackground 
                primaryColor="#8b5cf6" 
                secondaryColor="#ec4899"
                tertiaryColor="#3b82f6"
                intensity="medium"
                pattern="corners"
              />
              <div className="relative h-full flex items-center justify-center">
                <div className="text-center">
                  <h3 className="font-bold">DesignJoy Purple</h3>
                </div>
              </div>
            </div>
            
            {/* Example 2 - Top Gradient */}
            <div className="relative h-64 rounded-lg overflow-hidden border">
              <DepthShadowBackground 
                primaryColor="#f97316" 
                secondaryColor="#ec4899"
                tertiaryColor="#8b5cf6"
                intensity="medium"
                pattern="top"
              />
              <div className="relative h-full flex items-center justify-center">
                <div className="text-center">
                  <h3 className="font-bold">Top Gradient</h3>
                </div>
              </div>
            </div>
            
            {/* Example 3 - Centered Glow */}
            <div className="relative h-64 rounded-lg overflow-hidden border">
              <DepthShadowBackground 
                primaryColor="#3b82f6" 
                secondaryColor="#10b981"
                tertiaryColor="#8b5cf6"
                intensity="strong"
                pattern="center"
              />
              <div className="relative h-full flex items-center justify-center">
                <div className="text-center">
                  <h3 className="font-bold">Centered Glow</h3>
                </div>
              </div>
            </div>
            
            {/* Example 4 - Subtle Edge */}
            <div className="relative h-64 rounded-lg overflow-hidden border">
              <DepthShadowBackground 
                primaryColor="#8b5cf6" 
                secondaryColor="#ec4899"
                tertiaryColor="#3b82f6"
                intensity="subtle"
                pattern="sides"
              />
              <div className="relative h-full flex items-center justify-center">
                <div className="text-center">
                  <h3 className="font-bold">Subtle Edge</h3>
                </div>
              </div>
            </div>
            
            {/* Example 5 - Simple Pink */}
            <div className="relative h-64 rounded-lg overflow-hidden border">
              <BackgroundShadowEffect 
                colorAccent="pink"
                opacity="medium"
                blurAmount="large"
                position="top-right"
              />
              <div className="relative h-full flex items-center justify-center">
                <div className="text-center">
                  <h3 className="font-bold">Simple Pink</h3>
                </div>
              </div>
            </div>
            
            {/* Example 6 - Simple Green */}
            <div className="relative h-64 rounded-lg overflow-hidden border">
              <BackgroundShadowEffect 
                colorAccent="green"
                opacity="high"
                blurAmount="small"
                position="bottom-left"
              />
              <div className="relative h-full flex items-center justify-center">
                <div className="text-center">
                  <h3 className="font-bold">Simple Green</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Implementation Code */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">How to Implement</h2>
          <div className="bg-gray-100 p-6 rounded-lg overflow-auto">
            <pre className="text-sm">
              {`// Simple implementation
import BackgroundShadowEffect from '@/src/components/landing/BackgroundShadowEffect';

<div className="relative">
  <BackgroundShadowEffect 
    colorAccent="purple"
    opacity="medium"
    blurAmount="medium"
    position="top-right"
  />
  <div className="relative z-10">
    Your content here
  </div>
</div>

// Premium implementation
import DepthShadowBackground from '@/src/components/landing/DepthShadowBackground';

<div className="relative">
  <DepthShadowBackground 
    primaryColor="#8b5cf6"
    secondaryColor="#ec4899"
    tertiaryColor="#3b82f6"
    intensity="medium"
    pattern="corners"
  />
  <div className="relative z-10">
    Your content here
  </div>
</div>`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundEffectsDemo; 