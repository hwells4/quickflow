"use client";

import { Clock, Send, FileCheck } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import React, { useEffect, useRef } from 'react';

// Animation keywords for the Request card
const requestKeywords = [
  "Mobile apps", "Email", "Logos", "Landing pages", "User interface",
  "Branding", "Display ads", "Website design", "Presentations", 
  "Package design", "Wireframes", "Social media", "Banners", 
  "UX/UI", "Icons", "Product design", "Mockups", "Dashboards"
];

// Animation component for the middle card
const AnimatedKeywords = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    // Create animated elements
    requestKeywords.forEach((keyword, index) => {
      const element = document.createElement('div');
      element.className = 'absolute whitespace-nowrap px-3 py-1.5 rounded-full text-white bg-white/20 backdrop-blur-sm';
      element.textContent = keyword;
      
      // Random positions and speeds
      const top = Math.random() * 100;
      const size = Math.random() * 0.4 + 0.8; // 0.8 to 1.2
      const duration = Math.random() * 10000 + 15000; // 15-25s
      const delay = Math.random() * 10000; // 0-10s delay
      
      element.style.top = `${top}%`;
      element.style.right = `-${Math.random() * 100 + 100}px`;
      element.style.transform = `scale(${size})`;
      element.style.opacity = `${Math.random() * 0.5 + 0.5}`; // 0.5-1.0
      element.style.animation = `moveLeft ${duration}ms linear ${delay}ms infinite`;
      
      container.appendChild(element);
    });
    
    // Cleanup
    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);
  
  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 overflow-hidden pointer-events-none"
    />
  );
};

const steps = [
  {
    icon: <Clock className="h-7 w-7 text-white" />,
    bgColor: 'bg-gradient-to-br from-amber-500 to-orange-600',
    title: 'Subscribe',
    description: "Subscribe to a plan & request as many designs as you'd like."
  },
  {
    icon: <Send className="h-7 w-7 text-white" />,
    bgColor: 'bg-gradient-to-br from-blue-500 to-indigo-600',
    title: 'Request',
    description: "Request whatever you'd like, from mobile apps to logos.",
    hasAnimation: true
  },
  {
    icon: <FileCheck className="h-7 w-7 text-white" />,
    bgColor: 'bg-gradient-to-br from-emerald-500 to-green-600',
    title: 'Receive',
    description: "Receive your design within two business days on average."
  }
];

export const HowItWorksSection = () => {
  return (
    <section className="py-16 md:py-24 bg-transparent">
      <style jsx global>{`
        @keyframes moveLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-150vw);
          }
        }
      `}</style>
      
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl mb-4 md:mb-6">
            The way design <span className="italic text-[color:var(--accent)]">should&apos;ve</span> been done in the first place
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <div 
              key={step.title} 
              className="relative overflow-hidden rounded-xl bg-card shadow-md hover:shadow-xl transition-all duration-500 p-8 md:p-10 flex flex-col items-center text-center group"
            >
              {/* Card background with potential animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-background/50 to-background opacity-90"></div>
              
              {/* Animated keywords in the background (only for the Request card) */}
              {step.hasAnimation && <AnimatedKeywords />}
              
              {/* Icon with glowing effect */}
              <div className="relative z-10 mb-6">
                <div className={cn(
                  'p-5 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ease-in-out group-hover:scale-110',
                  step.bgColor
                )}>
                  {step.icon}
                  <div className="absolute inset-0 rounded-full bg-white/10 blur-md transform scale-110 opacity-70"></div>
                </div>
              </div>
              
              {/* Content */}
              <h3 className="relative z-10 text-2xl font-bold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="relative z-10 text-base text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 