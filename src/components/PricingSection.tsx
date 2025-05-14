import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Zap, 
  LineChart, 
  Shield,
  Repeat,
  RefreshCw,
  BotIcon,
  Layers,
  Server
} from 'lucide-react';
import { Button } from './Button';

export const PricingSection = () => {
  return (
    <section id="pricing" className="section-spacing bg-gradient-to-b from-[#f8f9fa] to-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="text-center mb-[calc(var(--spacing-element)_*_2)] animate-slide-up">
          <h2 className="text-h2-mobile md:text-h2-desktop mb-element">
            One subscription, <span className="italic font-normal text-[#4D61FC]">endless possibilities</span>
          </h2>
        </div>
        
        <div className="max-w-5xl mx-auto grid md:grid-cols-12 gap-8">
          {/* Colorful Card - Left Side */}
          <div className="md:col-span-5 bg-gradient-to-br from-pink-400 via-orange-400 to-[#4D61FC] p-6 rounded-3xl relative overflow-hidden animate-float shadow-xl">
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-yellow-400 rounded-full opacity-70"></div>
            <div className="absolute top-12 left-12 w-16 h-16 bg-[#4D61FC] rounded-full opacity-70"></div>
            
            <div className="relative z-10 h-full flex flex-col">
              <div className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full w-fit mb-auto">
                MOST POPULAR
              </div>
              
              <div className="mt-auto">
                <div className="bg-black/10 backdrop-blur-sm p-4 rounded-xl">
                  <Button variant="default" size="lg" className="w-full bg-white hover:bg-white/90 text-black font-bold" asChild>
                    <Link href="#book-call" className="flex items-center justify-center gap-2">
                      Start today <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Pricing Card - Right Side */}
          <div className="md:col-span-7 bg-black text-white p-8 rounded-3xl shadow-xl">
            <div className="flex justify-between items-start mb-12">
              <h3 className="text-3xl font-bold">Monthly Club</h3>
              <span className="text-xs text-white/70 px-3 py-1 border border-white/30 rounded-full">PAUSE OR CANCEL ANYTIME</span>
            </div>
            
            <div className="border-t border-white/20 my-8"></div>
            
            <div className="flex items-baseline mb-12">
              <span className="text-7xl font-bold">$3,999</span>
              <span className="text-xl text-white/70 ml-2">/month</span>
            </div>
            
            <div className="bg-white/10 rounded-xl p-6 mb-8">
              <div className="uppercase text-xs tracking-wide mb-4 text-white/70">INCLUDED</div>
              
              <div className="grid md:grid-cols-2 gap-y-4 gap-x-6">
                {[
                  'Unlimited custom workflow requests',
                  'Unlimited AI usage and processing',
                  '72-hour delivery on standard workflows',
                  'Complete hosting with all costs included',
                  'Unlimited executions of your workflows',
                  'Unlimited integrations with your tech stack',
                  '24-hour expedited delivery available',
                  'Full maintenance, monitoring, and updates'
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="h-5 w-5 rounded-full bg-[#4D61FC] flex items-center justify-center mt-0.5 flex-shrink-0">
                      <CheckCircle2 className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <Button variant="accent" size="lg" className="w-full h-14 bg-[#F47B54] hover:bg-[#F47B54]/90 flex gap-3 items-center justify-center" asChild>
              <Link href="#book-call">
                <div className="bg-white p-2 rounded">
                  <Zap className="h-5 w-5 text-[#F47B54]" />
                </div>
                <span className="font-bold">Join today</span>
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Value Proposition - Separate Card */}
        <div className="max-w-3xl mx-auto mt-16 bg-white rounded-2xl shadow-md p-8">
          <h4 className="text-2xl font-semibold mb-6 flex items-center">
            <LineChart className="h-7 w-7 text-[var(--color-secondary-accent)] mr-3" />
            Predictable Cost, Exceptional Value
          </h4>
          <p className="text-lg mb-6">
            Unlike other AI services with unpredictable usage-based billing, our flat-rate subscription means your costs never fluctuate regardless of how much you use our service.
          </p>
          <div className="bg-gradient-to-r from-[#4D61FC]/10 to-[#6C47ED]/10 p-5 rounded-xl mb-6">
            <p className="text-lg font-medium text-center">
              The average agency spends <span className="text-[var(--color-secondary-accent)] font-bold">$7,500+/month</span> on separate AI tools, technical talent, and automation platforms. Consolidate everything into one subscription and save.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection; 