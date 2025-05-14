import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  Shield,
  RefreshCw,
  BotIcon,
  Layers,
  Clock,
  LineChart,
  Server
} from 'lucide-react';
import { Button } from './Button';
import DesignJoyShadow from '@/src/components/ui/DesignJoyShadow';
import { cn } from '@/src/lib/utils';

export const PricingSection = () => {
  return (
    <section 
      id="pricing" 
      className="section-spacing bg-white/80 backdrop-blur-md relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-brand-softBlue/20 to-transparent rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-brand-softBlue/20 to-transparent rounded-tr-full"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-[calc(var(--spacing-element)_*_2)] animate-slide-up">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-softBlue rounded-full text-sm font-medium text-[var(--color-primary-accent)] mb-4">
            <Zap className="h-4 w-4" />
            <span>Simple Pricing</span>
          </span>
          <h2 className="text-h2-mobile md:text-h2-desktop mb-4">
            One subscription, <span className="italic-highlight">endless possibilities</span>
          </h2>
          <p className="text-body-mobile md:text-body-desktop text-brand-black/80 max-w-2xl mx-auto">
            A transparent, all-inclusive plan with no hidden fees or usage limits.
          </p>
        </div>
        
        <DesignJoyShadow 
          variant="elevated" 
          className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden transition-colors duration-300"
          borderVisible={false}
        >
          <div className="grid md:grid-cols-2">
            {/* Plan details */}
            <div className="p-8 md:p-10 flex flex-col">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--color-primary-accent)]/10 rounded-full text-xs font-semibold text-[var(--color-primary-accent)] uppercase tracking-wide mb-4">
                  Most Popular
                </div>
                <h3 className="text-3xl font-bold mb-2">Monthly Club</h3>
                <p className="text-brand-black/70">All-inclusive AI marketing automation</p>
              </div>
              
              <div className="flex items-baseline mb-8">
                <span className="text-5xl md:text-6xl font-bold">$3,999</span>
                <span className="text-xl text-brand-black/70 ml-2">/month</span>
              </div>
              
              <Button variant="default" size="lg" className="w-full mb-6 h-14 group" asChild>
                <Link href="#book-call" className="flex items-center justify-center gap-2 text-white font-semibold">
                  <span className="font-semibold">GET STARTED</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <p className="text-sm text-brand-black/60 text-center">
                Pause or cancel anytime • No long-term commitment
              </p>
            </div>
            
            {/* Features */}
            <div className="bg-gradient-to-br from-[var(--color-primary-accent)] to-[var(--color-secondary-accent)] p-8 md:p-10 text-white">
              <h4 className="font-semibold uppercase tracking-wider text-white/90 text-sm mb-6">Everything included:</h4>
              
              <ul className="space-y-4">
                {[
                  'Unlimited custom workflow requests',
                  'Unlimited AI usage and processing',
                  '72-hour delivery on standard workflows',
                  'Complete hosting with all costs included',
                  'Unlimited executions of workflows',
                  'Unlimited integrations with your tech stack',
                  '24-hour expedited delivery available',
                  'Full maintenance, monitoring, and updates'
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-white shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </DesignJoyShadow>
        
        {/* Value Proposition */}
        <div className="max-w-3xl mx-auto mt-16 grid md:grid-cols-2 gap-6">
          <DesignJoyShadow 
            variant="medium" 
            className="bg-white/90 backdrop-blur-sm rounded-xl p-6 transition-colors"
            borderVisible={false}
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="h-10 w-10 rounded-full bg-[var(--color-primary-accent)]/10 flex items-center justify-center shrink-0">
                <Shield className="h-5 w-5 text-[var(--color-primary-accent)]" />
              </div>
              <h4 className="text-xl font-semibold">Predictable Pricing</h4>
            </div>
            <p className="text-brand-black/80">
              Unlike AI services with unpredictable usage-based billing, our flat-rate subscription means your costs never fluctuate regardless of how much you use our service.
            </p>
          </DesignJoyShadow>
          
          <DesignJoyShadow 
            variant="medium" 
            className="bg-white/90 backdrop-blur-sm rounded-xl p-6 transition-colors"
            borderVisible={false}
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="h-10 w-10 rounded-full bg-[var(--color-primary-accent)]/10 flex items-center justify-center shrink-0">
                <LineChart className="h-5 w-5 text-[var(--color-primary-accent)]" />
              </div>
              <h4 className="text-xl font-semibold">Exceptional Value</h4>
            </div>
            <p className="text-brand-black/80">
              The average agency spends <span className="font-semibold">$7,500+/month</span> on separate AI tools, technical talent, and automation platforms. Consolidate everything into one subscription.
            </p>
          </DesignJoyShadow>
        </div>
      </div>
    </section>
  );
};

export default PricingSection; 