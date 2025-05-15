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
  CheckCheck,
  Badge
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
          <div className="text-center lg:text-left space-y-6 md:space-y-8 bg-white rounded-xl border border-gray-200 shadow-lg p-8 relative overflow-hidden">
            {/* Accent corner ribbon */}
            <div className="absolute -top-4 -right-16 w-40 h-16 bg-indigo-600 rotate-45 flex items-end justify-center pb-1 shadow-md">
              <span className="text-white font-medium text-sm">LIMITED OFFER</span>
            </div>
            
            {/* Enhanced price display */}
            <div className="bg-gradient-to-r from-[#f0f9ff] to-[#e0f2fe] p-6 rounded-xl border border-blue-100 mb-4">
              <div className="flex items-baseline justify-center lg:justify-start">
                <span className="line-through text-gray-500 text-xl mr-2">$4,995</span>
                <span className="text-5xl md:text-6xl font-bold tracking-tight text-foreground bg-gradient-to-r from-[color:var(--accent)] to-purple-600 bg-clip-text text-transparent">$2,995</span>
                <span className="text-xl text-gray-600 ml-2">/month</span>
              </div>
              <div className="mt-3 inline-block bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium border border-indigo-200">
                For Your First 3 Months (First 3 Clients Only)
              </div>
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
                  <li key={index} className="flex items-start gap-3 bg-[color:var(--accent)]/5 p-2 rounded-lg transition-all duration-300 hover:translate-x-1">
                    <CheckCircle2 className={`h-5 w-5 ${index % 2 === 0 ? 'text-[color:var(--accent)]' : 'text-emerald-500'} shrink-0`} />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex justify-center lg:justify-start">
              <Button variant="default" size="lg" asChild className="shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-[color:var(--accent)] to-purple-600 hover:from-[color:var(--accent-light)] hover:to-purple-500 border-0">
                <Link href="#book-call" className="flex items-center">
                  Claim Offer & Get Started <ArrowRight className="ml-2.5 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Visual Content Column - Card inspired by hero section */}
          <div className="relative flex items-center justify-center">
            <Card className="w-full max-w-md shadow-xl bg-slate-900 text-white border border-slate-700 rounded-xl overflow-hidden">
              {/* Adding a subtle top accent bar */}
              <div className="h-2 bg-gradient-to-r from-[color:var(--accent)] via-[color:var(--accent-light)] to-purple-500"></div>
              <div className="p-6 md:p-8 space-y-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-semibold text-white">
                    All-Inclusive Value
                  </h3>
                  <div className="relative flex items-center justify-center">
                    <span className="text-sm font-medium bg-[color:var(--accent)] text-white px-3 py-1 rounded-full">
                      CANCEL ANYTIME
                    </span>
                  </div>
                </div> 
                <p className="text-slate-300">
                  The average agency spends <span className="font-semibold text-white">$7,500+/month</span> on separate AI tools, technical talent, and automation platforms.
                </p>
                
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
                    <Repeat className="h-8 w-8 text-[color:var(--accent-light)] mb-2" />
                    <h4 className="font-medium text-white">Unlimited</h4>
                    <p className="text-sm text-slate-300">AI credits & executions</p>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
                    <CheckCheck className="h-8 w-8 text-emerald-400 mb-2" />
                    <h4 className="font-medium text-white">Done-For-You</h4>
                    <p className="text-sm text-slate-300">Expert implementation</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-slate-800 to-slate-800/70 p-4 rounded-lg border border-slate-700">
                  <h4 className="text-lg font-medium flex items-center text-indigo-300">
                    <Star className="h-5 w-5 mr-2" /> Our Promise
                  </h4>
                  <p className="text-sm text-slate-300">
                    From setup to ongoing support, we handle everything so you can focus on growing your agency.
                  </p>
                </div>
                
                <Button variant="default" className="w-full mt-2 bg-[color:var(--accent)] hover:bg-[color:var(--accent-light)] transition-colors duration-300">
                  View Success Stories
                </Button>
              </div>
            </Card>
            
            {/* Enhanced background glow elements */}
            <div aria-hidden="true" className="absolute -bottom-12 -right-12 w-64 h-64 bg-gradient-to-tr from-purple-500/20 via-transparent to-transparent rounded-full opacity-70 blur-2xl -z-10"></div>
            <div aria-hidden="true" className="absolute -top-12 -left-12 w-56 h-56 bg-gradient-to-br from-indigo-500/15 via-transparent to-transparent rounded-full opacity-60 blur-xl -z-10"></div>
          </div>
        </div>
        
        {/* Value Props - Inspired by hero section styling with alternating colors */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <Clock className="h-6 w-6 text-[color:var(--accent)]" />,
              title: 'No Long-Term Contracts',
              description: 'Pay month-to-month. Flexibility to suit your agency\'s needs.',
              bgClass: 'bg-white'
            },
            {
              icon: <Shield className="h-6 w-6 text-white" />,
              title: 'Predictable Pricing',
              description: 'Unlike usage-based AI services, our flat-rate subscription means your costs never fluctuate.',
              bgClass: 'bg-slate-900 text-white'
            },
            {
              icon: <LineChart className="h-6 w-6 text-purple-500" />,
              title: 'Exceptional Value',
              description: 'Consolidate everything into one subscription with expert implementation included.',
              bgClass: 'bg-white'
            }
          ].map((feature, index) => (
            <div key={index} className={`rounded-xl overflow-hidden ${feature.bgClass} border ${index === 1 ? 'border-slate-700' : 'border-gray-200'} shadow-md p-6 transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px]`}>
              <div className={`mb-4 ${index === 1 ? 'bg-slate-800' : index === 0 ? 'bg-blue-100' : 'bg-purple-100'} w-12 h-12 rounded-full flex items-center justify-center`}>
                {feature.icon}
              </div>
              <h4 className={`text-xl font-semibold mb-2 ${index === 1 ? 'text-white' : ''}`}>{feature.title}</h4>
              <p className={index === 1 ? 'text-slate-300' : 'text-muted-foreground'}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Enhanced decorative shapes/gradients for background */}
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background-muted/50 to-transparent -z-10"></div>
      <div aria-hidden="true" className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-purple-500/5 to-transparent rounded-bl-full -z-10"></div>
      <div aria-hidden="true" className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-indigo-500/5 to-transparent rounded-tr-full -z-10"></div>
    </section>
  );
};

export default PricingSection; 