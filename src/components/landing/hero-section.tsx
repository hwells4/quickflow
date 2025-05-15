import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  ChevronRight, 
  Clock, 
  Infinity as InfinityIcon, 
  Brain, 
  Shield, 
  HandHelping,
  DollarSign
} from 'lucide-react';
import { Button } from '@/src/components/Button';
import { cn } from '@/src/lib/utils';
import { Card } from '@/src/components/ui/card';

export const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
      {/* The global DepthShadowBackground from layout.tsx will be visible */}
      <div className="container-custom max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Text Content Column */}
          <div className="text-center lg:text-left space-y-10">
            <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-sm">
              Unlimited AI Automation. <br />
              <span className="text-primary font-black">
                Fully Managed. One Flat Fee.
              </span>
            </h1>
            <p className="max-w-2xl mx-auto lg:mx-0 text-base font-medium text-foreground md:text-lg">
            Stop wasting time on technical implementation. We build and manage your custom AI marketing automations for one flat monthly fee.
            </p>
            <div className="flex flex-col gap-6 sm:flex-row sm:justify-center lg:justify-start pt-4">
              <Button 
                variant="default" 
                size="lg" 
                asChild 
                className="shadow-xl hover:shadow-2xl transition-shadow duration-300 text-white font-bold border-2 border-primary/20"
              >
                <Link href="#pricing" className="flex items-center text-white">
                  Claim This Offer <ArrowRight className="ml-2.5 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                asChild 
                className="text-primary hover:border-primary hover:text-primary/80 transition-colors duration-300 font-bold border-2"
              >
                <Link href="#pricing" className="flex items-center">
                  See Full Pricing <ChevronRight className="ml-2.5 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Visual Content Column - Value Powerhouse Card */}
          <div className="relative group perspective flex items-center justify-center mt-8 lg:mt-0">
            <div className="w-full max-w-md rounded-2xl overflow-hidden bg-gradient-to-br from-purple-600 via-blue-500 to-indigo-600 shadow-[0_0_30px_rgba(0,0,0,0.2)] transform-gpu transition-all duration-700 ease-out-cubic hover:shadow-2xl hover:scale-[1.02] border-2 border-white/20">
              <div className="p-8 md:p-10 space-y-8">
                {/* Top badge */}
                <div className="bg-black/30 backdrop-blur-md rounded-full px-4 py-1.5 w-fit border border-white/20 shadow-sm">
                  <span className="text-white text-sm font-bold drop-shadow-sm">Value Powerhouse</span>
                </div>
                
                {/* Title section - more compact */}
                <h3 className="text-2xl font-black text-white drop-shadow-md">
                  The Last AI Subscription<br />
                  <span className="text-2xl font-bold">You'll Ever Need</span>
                </h3>
                
                {/* 2x2 Grid of icons and text - more compact */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/15 backdrop-blur-md p-4 rounded-xl hover:bg-white/20 transition-all duration-300 flex flex-col items-center justify-center border border-white/30 shadow-lg">
                    <div className="bg-purple-500/30 rounded-full p-2.5 mb-2 flex items-center justify-center border border-white/20">
                      <InfinityIcon className="h-6 w-6 text-white drop-shadow-sm" />
                    </div>
                    <span className="text-white font-medium text-center text-sm">Unlimited Workflows</span>
                  </div>
                  
                  <div className="bg-white/15 backdrop-blur-md p-4 rounded-xl hover:bg-white/20 transition-all duration-300 flex flex-col items-center justify-center border border-white/30 shadow-lg">
                    <div className="bg-blue-500/30 rounded-full p-2.5 mb-2 flex items-center justify-center border border-white/20">
                      <Brain className="h-6 w-6 text-white drop-shadow-sm" />
                    </div>
                    <span className="text-white font-medium text-center text-sm">Unlimited AI Credits</span>
                  </div>
                  
                  <div className="bg-white/15 backdrop-blur-md p-4 rounded-xl hover:bg-white/20 transition-all duration-300 flex flex-col items-center justify-center border border-white/30 shadow-lg">
                    <div className="bg-indigo-500/30 rounded-full p-2.5 mb-2 flex items-center justify-center border border-white/20">
                      <DollarSign className="h-6 w-6 text-white drop-shadow-sm" />
                    </div>
                    <span className="text-white font-medium text-center text-sm">One Flat Cost</span>
                  </div>
                  
                  <div className="bg-white/15 backdrop-blur-md p-4 rounded-xl hover:bg-white/20 transition-all duration-300 flex flex-col items-center justify-center border border-white/30 shadow-lg">
                    <div className="bg-teal-500/30 rounded-full p-2.5 mb-2 flex items-center justify-center border border-white/20">
                      <HandHelping className="h-6 w-6 text-white drop-shadow-sm" />
                    </div>
                    <span className="text-white font-medium text-center text-sm">Fully Managed</span>
                  </div>
                </div>
                
                {/* CTA Button - more compact */}
                <div className="pt-4">
                  <Button 
                    variant="default" 
                    className="w-full bg-white hover:bg-white/90 text-black font-bold text-base py-4 rounded-xl transition-all duration-300 shadow-md border-2 border-white/50"
                    asChild
                  >
                    <Link href="#pricing">
                      Unlock Everything Now
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Subtle background glow elements */}
            <div aria-hidden="true" className="absolute -bottom-12 -right-12 w-64 h-64 bg-primary/20 rounded-full opacity-70 blur-2xl -z-10"></div>
            <div aria-hidden="true" className="absolute -top-12 -left-12 w-64 h-64 bg-blue-500/20 rounded-full opacity-60 blur-2xl -z-10"></div>
          </div>
        </div>
      </div>
      
      {/* Decorative shapes/gradients for background enhancement */}
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background-muted/50 to-transparent -z-10"></div>
    </section>
  );
}; 