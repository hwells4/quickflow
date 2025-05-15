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
import { WorkflowFeatureSection } from '@/src/components/WorkflowFeatureSection';
import AutomationShowcase from '@/src/components/AutomationShowcase';
import { AutomationLibrary } from '@/src/components/AutomationLibrary';

// Define features for BentoGrid directly here
const bentoFeatures = [
  {
    Icon: SearchCode,
    name: "AI Search Optimized (AEO/LEO)",
    description: "Get \"LLM-ready\" content. Dominate AI search. Future-proof your visibility.",
    href: "/",
    cta: "See Pricing",
    background: (
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 -top-20 w-[400px] h-[400px]">
          <div className="w-full h-full bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute right-8 top-8 flex items-center justify-center">
          <div className="text-8xl opacity-10 font-bold text-indigo-600">#1</div>
        </div>
      </div>
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: MessageSquare,
    name: "Custom Brand Voice AI",
    description: "AI learns your brand's unique tone. Always on-brand content. Effortlessly.",
    href: "/",
    cta: "See Pricing",
    background: (
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 -top-20 w-[400px] h-[400px]">
          <div className="w-full h-full bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute right-10 top-10 w-32 h-32 opacity-10">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2"/>
            <path d="M3 15C4.65685 15 6 13.6569 6 12C6 10.3431 4.65685 9 3 9C1.34315 9 0 10.3431 0 12C0 13.6569 1.34315 15 3 15Z" stroke="currentColor" strokeWidth="2"/>
            <path d="M21 15C22.6569 15 24 13.6569 24 12C24 10.3431 22.6569 9 21 9C19.3431 9 18 10.3431 18 12C18 13.6569 19.3431 15 21 15Z" stroke="currentColor" strokeWidth="2"/>
            <path d="M9 12H15" stroke="currentColor" strokeWidth="2"/>
            <path d="M0 12H6" stroke="currentColor" strokeWidth="2"/>
            <path d="M18 12H24" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>
      </div>
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: BarChart3,
    name: "AI-Powered Audience Insights",
    description: "Uncover market trends. Understand customers. AI automates your research.",
    href: "/",
    cta: "See Pricing",
    background: (
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 -top-20 w-[400px] h-[400px]">
          <div className="w-full h-full bg-gradient-to-br from-emerald-600/30 to-blue-600/30 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute right-8 top-8 opacity-10">
          <div className="flex space-x-2">
            <div className="w-16 h-32 bg-emerald-600 rounded-t-lg"></div>
            <div className="w-16 h-24 bg-blue-600 rounded-t-lg"></div>
            <div className="w-16 h-40 bg-emerald-600 rounded-t-lg"></div>
          </div>
        </div>
      </div>
    ),
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: FileText,
    name: "Automated Content Multiplier",
    description: "One asset, many formats. Distribute content everywhere. Automatically save hours.",
    href: "/",
    cta: "See Pricing",
    background: (
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 -top-20 w-[400px] h-[400px]">
          <div className="w-full h-full bg-gradient-to-br from-amber-600/30 to-rose-600/30 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute right-10 top-10 opacity-10">
          <div className="grid grid-cols-2 gap-2">
            <div className="w-14 h-14 border-2 border-amber-600 rounded-lg"></div>
            <div className="w-14 h-14 border-2 border-rose-600 rounded-lg"></div>
            <div className="w-14 h-14 border-2 border-amber-600 rounded-lg"></div>
            <div className="w-14 h-14 border-2 border-rose-600 rounded-lg"></div>
          </div>
        </div>
      </div>
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: Bell,
    name: "Intelligent Lead Automation",
    description: "Capture, qualify, nurture leads 24/7. Personalized sequences that convert.",
    href: "/",
    cta: "See Pricing",
    background: (
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 -top-20 w-[400px] h-[400px]">
          <div className="w-full h-full bg-gradient-to-br from-indigo-600/30 to-cyan-600/30 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute right-8 top-8 opacity-10">
          <div className="flex flex-col items-end">
            <div className="w-40 h-8 border-2 border-indigo-600 rounded-full mb-2"></div>
            <div className="w-32 h-8 border-2 border-cyan-600 rounded-full mb-2"></div>
            <div className="w-24 h-8 border-2 border-indigo-600 rounded-full"></div>
          </div>
        </div>
      </div>
    ),
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
        <WorkflowFeatureSection />
        <AutomationShowcase />
 
        {/* Pricing Section */}
        <PricingSection />

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