import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  CheckCircle2, 
  Shield,
  Clock,
  LineChart,
  Zap,
  Star,
  Repeat,
  CheckCheck
} from 'lucide-react';
import { Button } from './Button';
import { cn } from '@/src/lib/utils';
import { Card } from '@/src/components/ui/card';

export const PricingSection = () => {
  return (
    <section 
      id="pricing" 
      className="relative w-full overflow-hidden section-spacing"
    >
      {/* Background decorative elements inspired by hero section */}
      <div className="container-custom relative z-10">
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            One Subscription 
            <span className="text-[color:var(--accent)]"> To Replace Them All</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl">
            Transparent pricing with unlimited AI power, expert implementation, and no hidden fees.
          </p>
        </div>
        
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Pricing Content Column */}
          <div className="text-center lg:text-left space-y-6 md:space-y-8 bg-white rounded-xl border border-gray-200 shadow-lg p-8">
            <div className="flex items-baseline mb-2 justify-center lg:justify-start">
              <span className="line-through text-muted-foreground text-xl mr-2">$4,995</span>
              <span className="text-5xl md:text-6xl font-bold tracking-tight text-foreground">$2,995</span>
              <span className="text-xl text-muted-foreground ml-2">/month</span>
            </div>
            <div className="inline-block bg-[color:var(--accent)]/10 text-[color:var(--accent)] px-4 py-2 rounded-full text-sm font-medium">
              For Your First 3 Months (First 3 Clients Only)
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Everything You Need:</h3>
              <ul className="space-y-3">
                {[
                  'Unlimited Custom Workflows',
                  'All Necessary Software Included',
                  'Expert Implementation & Management',
                  'White-Label Service',
                  'Monthly Performance Reports',
                  'Unlimited AI Credits & Executions',
                  '24/7 Priority Support'
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[color:var(--accent)] shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex justify-center lg:justify-start">
              <Button variant="default" size="lg" asChild className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-[color:var(--accent)] hover:bg-[color:var(--accent-light)]">
                <Link href="#book-call" className="flex items-center">
                  Claim Offer & Get Started <ArrowRight className="ml-2.5 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Visual Content Column - Card inspired by hero section */}
          <div className="relative flex items-center justify-center">
            <Card className="w-full max-w-md shadow-xl bg-white border border-gray-200 rounded-xl overflow-hidden">
              {/* Adding a subtle top accent bar */}
              <div className="h-1.5 bg-gradient-to-r from-[color:var(--accent)] to-[color:var(--accent-light)]"></div>
              <div className="p-6 md:p-8 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-semibold text-card-foreground">
                    All-Inclusive Value
                  </h3>
                  <div className="relative flex items-center justify-center">
                    <span className="text-sm font-medium bg-[color:var(--accent)] text-white px-3 py-1 rounded-full">
                      CANCEL ANYTIME
                    </span>
                  </div>
                </div> 
                <p className="text-muted-foreground">
                  The average agency spends <span className="font-semibold">$7,500+/month</span> on separate AI tools, technical talent, and automation platforms.
                </p>
                
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="bg-[color:var(--accent)]/5 p-4 rounded-lg border border-[color:var(--accent)]/20">
                    <Repeat className="h-8 w-8 text-[color:var(--accent)] mb-2" />
                    <h4 className="font-medium">Unlimited</h4>
                    <p className="text-sm text-muted-foreground">AI credits & executions</p>
                  </div>
                  <div className="bg-[color:var(--accent)]/5 p-4 rounded-lg border border-[color:var(--accent)]/20">
                    <CheckCheck className="h-8 w-8 text-[color:var(--accent)] mb-2" />
                    <h4 className="font-medium">Done-For-You</h4>
                    <p className="text-sm text-muted-foreground">Expert implementation</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-[color:var(--accent)]/10 to-[color:var(--accent)]/5 p-4 rounded-lg">
                  <h4 className="text-lg font-medium flex items-center text-[color:var(--accent)]">
                    <Star className="h-5 w-5 mr-2" /> Our Promise
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    From setup to ongoing support, we handle everything so you can focus on growing your agency.
                  </p>
                </div>
                
                <Button variant="default" className="w-full mt-2 bg-[color:var(--accent)] hover:bg-[color:var(--accent-light)] transition-colors duration-300">
                  View Success Stories
                </Button>
              </div>
            </Card>
            
            {/* Subtle background glow elements */}
            <div aria-hidden="true" className="absolute -bottom-12 -right-12 w-48 h-48 bg-gradient-to-tr from-[color:var(--accent)]/15 via-transparent to-transparent rounded-full opacity-50 blur-2xl -z-10"></div>
            <div aria-hidden="true" className="absolute -top-12 -left-12 w-40 h-40 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent rounded-full opacity-40 blur-xl -z-10"></div>
          </div>
        </div>
        
        {/* Value Props - Inspired by hero section styling */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <Clock className="h-6 w-6 text-[color:var(--accent)]" />,
              title: 'No Long-Term Contracts',
              description: 'Pay month-to-month. Flexibility to suit your agency\'s needs.'
            },
            {
              icon: <Shield className="h-6 w-6 text-[color:var(--accent)]" />,
              title: 'Predictable Pricing',
              description: 'Unlike usage-based AI services, our flat-rate subscription means your costs never fluctuate.'
            },
            {
              icon: <LineChart className="h-6 w-6 text-[color:var(--accent)]" />,
              title: 'Exceptional Value',
              description: 'Consolidate everything into one subscription with expert implementation included.'
            }
          ].map((feature, index) => (
            <div key={index} className="rounded-xl overflow-hidden bg-white border border-gray-200 shadow-md p-6 transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px]">
              <div className="mb-4 bg-[color:var(--accent)]/10 w-12 h-12 rounded-full flex items-center justify-center">
                {feature.icon}
              </div>
              <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative shapes/gradients for background enhancement */}
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background-muted/50 to-transparent -z-10"></div>
      <div aria-hidden="true" className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-[color:var(--accent)]/5 to-transparent rounded-bl-full -z-10"></div>
      <div aria-hidden="true" className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-[color:var(--accent)]/5 to-transparent rounded-tr-full -z-10"></div>
    </section>
  );
};

export default PricingSection; 