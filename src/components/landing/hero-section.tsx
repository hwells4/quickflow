import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronRight, Clock, Smile } from 'lucide-react';
import { Button } from '@/src/components/Button';
import { cn } from '@/src/lib/utils';
import { Card } from '@/src/components/ui/card';

export const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* The global DepthShadowBackground from layout.tsx will be visible */}
      <div className="container-custom section-spacing">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text Content Column */}
          <div className="text-center lg:text-left space-y-6 md:space-y-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-sm">
              Unlimited AI Automation. <br />
              <span className="text-primary font-black">
                Fully Managed. One Flat Fee.
              </span>
            </h1>
            <p className="max-w-xl mx-auto lg:mx-0 text-lg font-medium text-foreground md:text-xl">
              Stop buying separate tools. Stop hiring experts. Stop wasting time. We build, run, and cover <em className="text-primary not-italic font-bold">everything</em> for your AI implementations and marketing automations. This is the promise of AI, delivered.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
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

          {/* Visual Content Column - Modern Subscription Card */}
          <div className="relative group perspective flex items-center justify-center">
            <div className="w-full max-w-md rounded-2xl overflow-hidden bg-gradient-to-br from-purple-600 via-blue-500 to-indigo-600 shadow-[0_0_30px_rgba(0,0,0,0.2)] transform-gpu transition-all duration-700 ease-out-cubic hover:shadow-2xl hover:scale-[1.02] border-2 border-white/20">
              <div className="p-8 space-y-6">
                {/* Top badge */}
                <div className="bg-black/30 backdrop-blur-md rounded-full px-4 py-1.5 w-fit border border-white/20 shadow-sm">
                  <span className="text-white text-sm font-bold drop-shadow-sm">Start today</span>
                </div>
                
                {/* Title section */}
                <h3 className="text-4xl font-black text-white mt-4 drop-shadow-md">
                  Join<br />
                  QuickFlow
                </h3>
                <p className="text-white text-lg font-semibold drop-shadow-sm">
                  One subscription to rule them all.
                </p>
                
                {/* Card with smiley faces */}
                <div className="bg-white/15 backdrop-blur-md p-4 rounded-xl mt-4 rotate-3 hover:rotate-0 transition-transform duration-300 border border-white/30 shadow-lg">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-red-400 rounded-lg p-3 flex items-center justify-center border border-white/20 shadow-md">
                      <Smile className="h-8 w-8 text-white drop-shadow-sm" />
                    </div>
                    <div className="bg-yellow-400 rounded-lg p-3 flex items-center justify-center border border-white/20 shadow-md">
                      <Smile className="h-8 w-8 text-white drop-shadow-sm" />
                    </div>
                    <div className="bg-green-400 rounded-lg p-3 flex items-center justify-center border border-white/20 shadow-md">
                      <Smile className="h-8 w-8 text-white drop-shadow-sm" />
                    </div>
                    <div className="bg-blue-400 rounded-lg p-3 flex items-center justify-center border border-white/20 shadow-md">
                      <Smile className="h-8 w-8 text-white drop-shadow-sm" />
                    </div>
                  </div>
                </div>
                
                {/* CTA Buttons */}
                <div className="space-y-4 mt-6">
                  <Button 
                    variant="default" 
                    className="w-full bg-white hover:bg-white/90 text-black font-extrabold text-lg py-6 rounded-xl transition-all duration-300 shadow-md border-2 border-white/50"
                  >
                    See pricing
                  </Button>
                  
                  <div className="flex items-center bg-black/30 backdrop-blur-md rounded-xl p-4 gap-3 border border-white/20 shadow-md">
                    <div className="bg-yellow-400 rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0 border-2 border-white/40 shadow-sm">
                      <Smile className="h-6 w-6 text-white drop-shadow-sm" />
                    </div>
                    <div className="flex-grow">
                      <p className="text-white text-sm font-bold drop-shadow-sm">Book a 15-min intro call</p>
                      <p className="text-white/90 text-xs font-medium">Schedule now</p>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="bg-white rounded-full h-8 w-8 flex items-center justify-center shadow-md border border-white/60">
                        <ArrowRight className="h-4 w-4 text-black" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Subtle background glow elements */}
            <div aria-hidden="true" className="absolute -bottom-12 -right-12 w-64 h-64 bg-primary/30 rounded-full opacity-70 blur-2xl -z-10"></div>
            <div aria-hidden="true" className="absolute -top-12 -left-12 w-64 h-64 bg-blue-500/30 rounded-full opacity-60 blur-2xl -z-10"></div>
          </div>
        </div>
      </div>
      
      {/* Decorative shapes/gradients for background enhancement */}
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background-muted/50 to-transparent -z-10"></div>
    </section>
  );
}; 