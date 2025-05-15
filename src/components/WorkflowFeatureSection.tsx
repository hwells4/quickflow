import React from 'react';
import Link from 'next/link';
import { ArrowRight, MessageCircle, Workflow, BarChart3, Check } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { Button } from './Button';

export const WorkflowFeatureSection = () => {
  return (
    <section className="relative w-full overflow-hidden py-20 border-t border-gray-100">
      {/* Simple, subtle background element */}
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-background to-background-muted opacity-50 -z-10"></div>
      
      <div className="container-custom max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            The Ease, Power, and Scale AI Always Promised – 
            <span className="text-primary"> Finally Delivered.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base text-muted-foreground md:text-lg">
            You ask. We build. Your perfect workflows delivered exactly as you imagined them.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg p-6">
            <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-5">
              <MessageCircle className="h-6 w-6 text-primary" />
            </div>
            
            <h3 className="text-xl font-semibold mb-3">1. Just Ask</h3>
            <p className="text-muted-foreground mb-4">
              Simply tell us what you need. No technical jargon required. 
              Describe your ideal workflow in plain language.
            </p>
            
            <div className="space-y-2.5 pt-2">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span className="text-sm">Natural conversation</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span className="text-sm">No technical expertise needed</span>
              </div>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg p-6">
            <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-5">
              <Workflow className="h-6 w-6 text-primary" />
            </div>
            
            <h3 className="text-xl font-semibold mb-3">2. We Build</h3>
            <p className="text-muted-foreground mb-4">
              Our experts craft your custom workflow with precision, integrating all necessary tools 
              and automation.
            </p>
            
            <div className="space-y-2.5 pt-2">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span className="text-sm">Expert implementation</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span className="text-sm">Done-for-you solution</span>
              </div>
            </div>
          </div>
          
          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg p-6">
            <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-5">
              <BarChart3 className="h-6 w-6 text-primary" />
            </div>
            
            <h3 className="text-xl font-semibold mb-3">3. Get Results</h3>
            <p className="text-muted-foreground mb-4">
              Watch your efficiency soar with powerful workflows that deliver 
              the scale and reliability that AI always promised.
            </p>
            
            <div className="space-y-2.5 pt-2">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span className="text-sm">Instant efficiency gains</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span className="text-sm">Reliable, scalable performance</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-12 text-center">
          <Button 
            variant="default" 
            size="lg" 
            asChild
          >
            <Link href="#pricing" className="flex items-center">
              Start Creating Your Workflow <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WorkflowFeatureSection; 