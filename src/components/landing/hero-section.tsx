import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronRight, Clock } from 'lucide-react';
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
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Unlimited AI Automation. <br />
              <span className="text-[color:var(--accent)]">
                Fully Managed. One Flat Fee.
              </span>
            </h1>
            <p className="max-w-xl mx-auto lg:mx-0 text-lg text-muted-foreground md:text-xl">
              Stop buying separate tools. Stop hiring experts. Stop wasting time. We build, run, and cover <em className="text-[color:var(--accent)] not-italic font-medium">everything</em> for your AI implementations and marketing automations. This is the promise of AI, delivered.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Button variant="default" size="lg" asChild className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Link href="#pricing" className="flex items-center">
                  Claim This Offer <ArrowRight className="ml-2.5 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="hover:border-[color:var(--accent-light)] hover:text-[color:var(--accent-light)] transition-colors duration-300">
                <Link href="#pricing" className="flex items-center">
                  See Full Pricing <ChevronRight className="ml-2.5 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Visual Content Column - Rotated Card */}
          <div className="relative group perspective flex items-center justify-center">
            <Card className="w-full max-w-md transform-gpu transition-all duration-700 ease-out-cubic rotate-2 group-hover:rotate-0 shadow-xl hover:shadow-2xl bg-card/80 backdrop-blur-md border border-border/30 rounded-xl overflow-hidden">
              {/* Adding a subtle top accent bar */}
              <div className="h-1.5 bg-gradient-to-r from-[color:var(--accent)] to-[color:var(--accent-light)]"></div>
              <div className="p-6 md:p-8 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-semibold text-card-foreground">
                    Limited Offer: First 3 Clients Only
                  </h3>
                  <div className="relative flex items-center justify-center">
                    <div className="absolute inline-flex h-full w-full animate-subtle-pulse rounded-full bg-[color:var(--accent)]/50 opacity-75"></div>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[color:var(--accent)]"></span>
                  </div>
                </div>
                
                <div className="mt-3 mb-4">
                  <div className="flex items-baseline">
                    <span className="line-through text-muted-foreground text-xl mr-2">$4,995</span>
                    <span className="text-5xl font-bold tracking-tight text-foreground">$2,995</span>
                    <span className="text-xl text-muted-foreground ml-2">/mo</span>
                  </div>
                  <p className="text-muted-foreground mt-1">
                    <Clock className="inline-block h-4 w-4 mr-1" /> For Your First 3 Months
                  </p>
                </div>
                
                <div className="relative pt-2">
                  <Image 
                    src="/placeholder.svg?width=400&height=200&query=ai_automation_workflow_diagram_connecting_marketing_tasks_to_results_professional_clean_light_background"
                    alt="AI Automation Workflow"
                    width={400}
                    height={200}
                    className="rounded-lg shadow-md group-hover:opacity-95 transition-opacity duration-300 w-full"
                  />
                </div>
                
                <div className="space-y-3">
                  <Button variant="default" className="w-full bg-[color:var(--accent)] hover:bg-[color:var(--accent-light)] transition-colors duration-300">
                    Claim This Offer
                  </Button>
                  <div className="text-center">
                    <Link href="#contact" className="text-sm text-[color:var(--accent)] hover:text-[color:var(--accent-light)] transition-colors duration-300">
                      Book a 15-min Intro Call
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
            
            {/* Subtle background glow elements */}
            <div aria-hidden="true" className="absolute -bottom-12 -right-12 w-48 h-48 bg-gradient-to-tr from-[color:var(--accent)]/15 via-transparent to-transparent rounded-full opacity-50 blur-2xl group-hover:opacity-70 transition-opacity duration-700 -z-10"></div>
            <div aria-hidden="true" className="absolute -top-12 -left-12 w-40 h-40 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent rounded-full opacity-40 blur-xl group-hover:opacity-60 transition-opacity duration-700 -z-10"></div>
          </div>
        </div>
      </div>
      
      {/* Decorative shapes/gradients for background enhancement */}
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background-muted/50 to-transparent -z-10"></div>
    </section>
  );
}; 