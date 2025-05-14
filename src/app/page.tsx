import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Clock, 
  FileCheck, 
  Send, 
  BarChart, 
  LineChart, 
  Code,
  UserCheck,
  Server,
  DollarSign,
  BarChart3,
  Ban,
  Wallet,
  Sparkles,
  Star,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Bell,
  CalendarDays,
  FileText,
  Globe,
  SearchCode,
  MessageSquare
} from 'lucide-react';
import { Button, buttonVariants } from '@/src/components/Button';
import PricingSection from '@/src/components/PricingSection';
import { AnimatedTestimonialsBasic } from "@/src/components/animated-testimonials-demo";
import FAQ from '@/src/components/FAQ';
import { cn } from '@/src/lib/utils';
import { Card } from '@/src/components/ui/card';
import { Navbar } from '@/src/components/landing/navbar';
import { HeroSection } from '@/src/components/landing/hero-section';
import { OneSubscriptionSection } from '@/src/components/landing/one-subscription-section';
import { AutomationLibrarySection } from '@/src/components/landing/automation-library-section';
import { HowItWorksSection } from '@/src/components/landing/how-it-works-section';
import { FinalCtaSection } from '@/src/components/landing/final-cta-section';
import { BentoCard, BentoGrid } from "@/src/components/ui/bento-grid";

// Define features for BentoGrid directly here
const bentoFeatures = [
  {
    Icon: SearchCode,
    name: "AI Search Optimized (AEO/LEO)",
    description: "Get \"LLM-ready\" content. Dominate AI search. Future-proof your visibility.",
    href: "/",
    cta: "See Pricing",
    background: <img src="https://source.unsplash.com/random/800x600?technology&query=search" alt="AI Search Optimization background" className="absolute -right-20 -top-20 opacity-60 w-[400px] h-[400px] object-cover" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: MessageSquare,
    name: "Custom Brand Voice AI",
    description: "AI learns your brand's unique tone. Always on-brand content. Effortlessly.",
    href: "/",
    cta: "See Pricing",
    background: <img src="https://source.unsplash.com/random/800x600?world&query=languages" alt="Brand Voice AI background" className="absolute -right-20 -top-20 opacity-60 w-[400px] h-[400px] object-cover" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: BarChart3,
    name: "AI-Powered Audience Insights",
    description: "Uncover market trends. Understand customers. AI automates your research.",
    href: "/",
    cta: "See Pricing",
    background: <img src="https://source.unsplash.com/random/800x600?abstract&query=files" alt="AI Audience Insights background" className="absolute -right-20 -top-20 opacity-60 w-[400px] h-[400px] object-cover" />,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: FileText,
    name: "Automated Content Multiplier",
    description: "One asset, many formats. Distribute content everywhere. Automatically save hours.",
    href: "/",
    cta: "See Pricing",
    background: <img src="https://source.unsplash.com/random/800x600?time&query=calendar" alt="Content Multiplier background" className="absolute -right-20 -top-20 opacity-60 w-[400px] h-[400px] object-cover" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: Bell,
    name: "Intelligent Lead Automation",
    description: "Capture, qualify, nurture leads 24/7. Personalized sequences that convert.",
    href: "/",
    cta: "See Pricing",
    background: <img src="https://source.unsplash.com/random/800x600?communication&query=notifications" alt="Lead Automation background" className="absolute -right-20 -top-20 opacity-60 w-[400px] h-[400px] object-cover" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

const Footer = () => (
  <footer className="border-t bg-background">
    <div className="container mx-auto grid grid-cols-1 gap-8 px-4 py-12 md:grid-cols-3 md:px-6">
      <div>
        <h3 className="text-xl font-bold text-foreground">QuickFlow</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Effortless Expertise, Reliable Results.
        </p>
      </div>
      <div>
        <h4 className="font-semibold text-foreground">Quick Links</h4>
        <ul className="mt-2 space-y-1 text-sm">
          <li><Link href="#features" className="text-muted-foreground hover:text-primary">Features</Link></li>
          <li><Link href="#pricing" className="text-muted-foreground hover:text-primary">Pricing</Link></li>
          <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
          <li><Link href="/terms" className="text-muted-foreground hover:text-primary">Terms of Service</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-foreground">Connect</h4>
        <div className="mt-2 flex space-x-4">
          <Link href="#" className="text-muted-foreground hover:text-primary"><Facebook className="h-5 w-5" /></Link>
          <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter className="h-5 w-5" /></Link>
          <Link href="#" className="text-muted-foreground hover:text-primary"><Instagram className="h-5 w-5" /></Link>
          <Link href="#" className="text-muted-foreground hover:text-primary"><Linkedin className="h-5 w-5" /></Link>
        </div>
      </div>
    </div>
    <div className="border-t">
      <div className="container mx-auto flex flex-col items-center justify-between px-4 py-6 text-sm text-muted-foreground md:flex-row md:px-6">
        <p>&copy; {new Date().getFullYear()} QuickFlow. All rights reserved.</p>
        <p>Powered by Innovation.</p>
      </div>
    </div>
  </footer>
);

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen bg-background">
      {/* <AuroraBackground /> */}
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <OneSubscriptionSection />
        <AutomationLibrarySection />

        {/* Bento Grid Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl mb-4 md:mb-6">
            Ready-To-Use <span className="italic-highlight text-[color:var(--accent)]">Automation Library</span>
          </h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
              Explore powerful automations we design, implement, and fully manage for your marketing success.
            </p>
            {/* Use BentoGrid directly */}
            <BentoGrid className="lg:grid-rows-3 max-w-6xl mx-auto">
              {bentoFeatures.map((feature) => (
                <BentoCard key={feature.name} {...feature} />
              ))}
            </BentoGrid>
          </div>
        </section>

        {/* Pricing Section */}
        <PricingSection />

        {/* How It Works Section - Modernized with cleaner steps */}
        <HowItWorksSection />

        {/* Animated Testimonials Section */}
        <AnimatedTestimonialsBasic />

        {/* FAQ Section using the new component */}
        <FAQ 
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about our AI marketing automation service."
          faqs={[
            {
              id: "faq-1",
              question: "How fast will I receive my designs?",
              answer: "Design requests are typically delivered within 1-2 business days. More complex projects may take 3-5 days depending on the scope."
            },
            {
              id: "faq-2",
              question: "How does onboarding work?",
              answer: "Our onboarding process is simple. After signing up, you'll receive access to our dashboard where you can submit your first design request. We'll schedule a kickoff call to understand your brand and requirements."
            },
            {
              id: "faq-3",
              question: "Who are the designers?",
              answer: "Our designers are experienced professionals with backgrounds working at top agencies and tech companies. Each designer is carefully vetted and trained to ensure high-quality work."
            },
            {
              id: "faq-4",
              question: "Is there a limit to how many requests I can make?",
              answer: "Depending on your plan, you can make unlimited requests that are worked on one at a time. Enterprise plans allow for multiple concurrent requests."
            },
            {
              id: "faq-5",
              question: "How does the pause feature work?",
              answer: "You can pause your subscription at any time from your account settings. When paused, your billing will be suspended and you won't be able to make new requests until you resume."
            },
            {
              id: "faq-6",
              question: "How do you handle larger requests?",
              answer: "For larger projects, we assign a dedicated team and break the work into manageable milestones with regular check-ins to ensure alignment with your vision."
            },
            {
              id: "faq-7", 
              question: "What programs do you design in?",
              answer: "Our designers work with industry-standard tools including Figma, Adobe Creative Suite, Sketch, and other specialized design software based on project requirements."
            },
            {
              id: "faq-8",
              question: "How does Webflow development work?",
              answer: "We handle the entire Webflow development process from design to deployment, including responsive layouts, animations, and CMS integration."
            },
            {
              id: "faq-9",
              question: "How will I request designs?",
              answer: "After onboarding, you'll have access to our client portal where you can submit new design requests, track progress, and communicate with your design team."
            },
            {
              id: "faq-10",
              question: "What if I don't like the design?",
              answer: "We offer unlimited revisions until you're completely satisfied with the design. Your feedback is crucial to delivering the perfect result."
            },
            {
              id: "faq-11",
              question: "Are there any requests you don't support?",
              answer: "While we handle most design needs, we don't currently support 3D modeling, complex video production, or print production management."
            },
            {
              id: "faq-12",
              question: "What if I only have a single request?",
              answer: "We offer single-request packages for clients with limited needs. Contact us for custom pricing on individual projects."
            },
            {
              id: "faq-13",
              question: "Are there any refunds?",
              answer: "We offer a satisfaction guarantee. If you're not happy with our service in the first 14 days, we'll provide a full refund."
            }
          ]} 
          ctaTitle="Ready to get started?"
          ctaDescription="Book a call with our team to learn more about how we can help you automate your marketing workflows."
          ctaButtonText="Book a 15-min intro call"
          ctaButtonLink="#book-call"
        />

        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
} 