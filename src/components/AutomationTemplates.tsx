'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { 
  ArrowRight, 
  Clock, 
  Mail, 
  FileText, 
  MessageSquare, 
  Database, 
  Zap,
  Bot,
  Star
} from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Separator } from './ui/separator';

// Custom Workflow icon since it's not in lucide-react
const Workflow = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="3" y="3" width="6" height="6" rx="1" />
    <rect x="15" y="3" width="6" height="6" rx="1" />
    <rect x="9" y="15" width="6" height="6" rx="1" />
    <path d="M6 9v3a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V9" />
  </svg>
);

interface AutomationTemplate {
  id: string;
  category: string;
  title: string;
  description: string;
  imageUrl: string;
  icon: React.ReactNode;
}

// Simplified template data without span property
const automationTemplates: AutomationTemplate[] = [
  {
    id: 'brand-voice-trainer',
    category: 'Content Quality',
    title: 'Brand Voice Trainer',
    description: 'Transform generic AI content into your exact brand voice. Upload examples of your best content and get perfectly matched outputs every time.',
    imageUrl: '/images/automation-brand-voice.svg',
    icon: <FileText className="h-6 w-6" />,
  },
  {
    id: 'client-reporting',
    category: 'Time Saver',
    title: 'Client Reporting Automator',
    description: 'Connect your analytics accounts and automatically generate client-ready reports with insights and recommendations, saving 8+ hours per month.',
    imageUrl: '/images/automation-client-reporting.svg',
    icon: <Clock className="h-6 w-6" />,
  },
  {
    id: 'marketing-stack',
    category: 'Integration',
    title: 'Marketing Stack Connector',
    description: 'Connect your favorite marketing tools (HubSpot, Google Analytics, social platforms) to eliminate data silos and create seamless workflows.',
    imageUrl: '/images/automation-marketing-stack.svg',
    icon: <Database className="h-6 w-6" />,
  },
  {
    id: 'workflow-monitor',
    category: 'Reliability',
    title: 'Workflow Health Monitor',
    description: 'Get 24/7 monitoring of all your marketing automations with instant alerts when something breaks or performs below expectations.',
    imageUrl: '/images/automation-workflow-health.svg',
    icon: <Workflow className="h-6 w-6" />,
  },
  {
    id: 'content-generator',
    category: 'Content Creation',
    title: 'Multi-Platform Content Generator',
    description: 'Create 1 piece of content and automatically adapt it for 5 different channels (blog, LinkedIn, Twitter, email, and Instagram).',
    imageUrl: '/images/automation-content-generator.svg',
    icon: <FileText className="h-6 w-6" />,
  },
  {
    id: 'lead-qualification',
    category: 'Lead Generation',
    title: 'Lead Qualification & Routing',
    description: 'Automatically score, tag, and route leads to the right team member based on custom qualification criteria.',
    imageUrl: '/images/automation-lead-qualification.svg',
    icon: <Mail className="h-6 w-6" />,
  },
  {
    id: 'llm-engine',
    category: 'AI-First',
    title: 'LLM Engine Optimization (LEO) System',
    description: 'Optimize your content for AI discovery with our advanced LEO system. Ensure your content ranks in AI-powered search engines.',
    imageUrl: '/images/automation-llm-engine.svg',
    icon: <Bot className="h-6 w-6" />,
  },
  {
    id: 'seo-optimizer',
    category: 'SEO',
    title: 'SEO Content Optimizer',
    description: 'Transform basic content into fully optimized blog posts with proper keyword density, internal links, headers, and meta descriptions.',
    imageUrl: '/images/automation-seo-optimizer.svg',
    icon: <Zap className="h-6 w-6" />,
  },
];

// Get badge background color based on category
const getCategoryBgColor = (category: string) => {
  const colors = {
    'Content Quality': 'bg-[#E9EDFF] text-[#476FFF]',
    'Content Creation': 'bg-[#FFF4E5] text-[#FF8A00]',
    'Time Saver': 'bg-[#E6F7F1] text-[#00BA88]',
    'Integration': 'bg-[#F2EBFF] text-[#8662D5]',
    'Reliability': 'bg-[#E6F7FB] text-[#00B8D9]',
    'Lead Generation': 'bg-[#FEEFEF] text-[#F56565]',
    'AI-First': 'bg-[#EBF0FF] text-[#3E63DD]',
    'SEO': 'bg-[#E0FCFF] text-[#00A3BF]',
  };
  return colors[category] || 'bg-[#E9EDFF] text-[#476FFF]';
};

export const AutomationTemplates = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Refs for scroll animations
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const controls = useAnimation();

  // Auto rotate templates
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % automationTemplates.length);
    }, 6000); // 6 seconds interval

    return () => clearInterval(interval);
  }, []);

  // Animation variants - similar to testimonials component
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Trigger animations when section comes into view
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Show 3 templates that we most want to highlight
  const featuredTemplates = [
    automationTemplates[0], 
    automationTemplates[4], 
    automationTemplates[7]
  ];

  return (
    <section 
      ref={sectionRef} 
      id="automation-templates" 
      className="py-[var(--spacing-section-mobile)] md:py-[var(--spacing-section-desktop)] bg-muted/30 overflow-hidden"
    >
      <div className="container mx-auto px-[var(--padding-container-mobile)] md:px-[var(--padding-container-desktop)]">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 gap-[var(--spacing-element)] w-full md:grid-cols-2 lg:gap-[calc(var(--spacing-element)*1.5)]"
        >
          {/* Left side: Heading and navigation */}
          <motion.div variants={itemVariants} className="flex flex-col justify-center">
            <div className="space-y-[var(--spacing-paragraph)]">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                <Star className="mr-1 h-3.5 w-3.5 fill-primary" />
                <span>Automation Library</span>
              </div>

              <h2 className="text-h2-mobile md:text-h2-desktop">
                Ready-to-Use Automation Templates
              </h2>

              <p className="max-w-[600px] text-body-mobile md:text-body-desktop text-muted-foreground">
                Try these templates now to see exactly what we can build for your business. Each template solves a specific marketing challenge our clients face daily.
              </p>

              <div className="flex items-center gap-3 pt-[var(--spacing-paragraph)]">
                {automationTemplates.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`transition-all duration-300 border ${
                      activeIndex === index 
                        ? "h-3 w-[122px] rounded-full bg-[var(--color-primary-accent)] border-[var(--color-primary-accent)]" 
                        : "h-3 w-3 rounded-full bg-white border-[var(--color-light-gray)] hover:border-[var(--color-primary-accent)]"
                    }`}
                    aria-label={`View template ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right side: Template cards with animation */}
          <motion.div variants={itemVariants} className="relative h-full mr-0 md:mr-[var(--spacing-element)] min-h-[300px] md:min-h-[400px]">
            {automationTemplates.map((template, index) => (
              <motion.div
                key={template.id}
                className="absolute inset-0"
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  x: activeIndex === index ? 0 : 100,
                  scale: activeIndex === index ? 1 : 0.9,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{ zIndex: activeIndex === index ? 10 : 0 }}
              >
                <div className="bg-card border shadow-lg rounded-[var(--rounded-corners-medium)] p-[var(--padding-card)] h-full flex flex-col">
                  <div className="mb-[var(--spacing-paragraph)]">
                    <Badge className={`${getCategoryBgColor(template.category)} border-0 text-xs px-3 py-1 font-medium rounded-full`}>
                      {template.category}
                    </Badge>
                  </div>

                  <div className="mb-[var(--spacing-paragraph)]">
                    {template.icon}
                  </div>

                  <div className="relative mb-[var(--spacing-paragraph)] flex-1">
                    <h3 className="text-subheading font-medium mb-3">{template.title}</h3>
                    <p className="text-body-mobile md:text-body-desktop text-muted-foreground">{template.description}</p>
                  </div>

                  <Separator className="my-[var(--spacing-paragraph)]" />

                  <Button className="w-full bg-[var(--color-primary-accent)] hover:opacity-90">
                    Try it now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            ))}

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-[var(--rounded-corners-medium)] bg-primary/5"></div>
            <div className="absolute -top-6 -right-6 h-24 w-24 rounded-[var(--rounded-corners-medium)] bg-primary/5"></div>
          </motion.div>
        </motion.div>

        {/* Featured templates grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mt-[calc(var(--spacing-section-mobile)*0.6)] md:mt-[calc(var(--spacing-section-desktop)*0.6)]"
        >
          <h3 className="text-subheading font-medium mb-[var(--spacing-element)] text-center">Featured Templates</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--spacing-element)]">
            {featuredTemplates.map((template) => (
              <motion.div
                key={template.id}
                variants={itemVariants}
                className="bg-card border rounded-[var(--rounded-corners-medium)] p-[calc(var(--padding-card)*0.75)] shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="mb-[var(--spacing-paragraph)]">
                  <Badge className={`${getCategoryBgColor(template.category)} border-0 text-xs px-3 py-1 font-medium rounded-full`}>
                    {template.category}
                  </Badge>
                </div>
                
                <div className="mb-[calc(var(--spacing-paragraph)*0.75)]">
                  {template.icon}
                </div>
                
                <h4 className="text-lg font-medium mb-[calc(var(--spacing-paragraph)*0.5)]">{template.title}</h4>
                <p className="text-body-mobile md:text-body-desktop text-muted-foreground mb-[var(--spacing-element)]">{template.description}</p>
                
                <Button 
                  variant="link" 
                  size="sm" 
                  className="px-0 text-[var(--color-primary-accent)] font-medium hover:opacity-90 justify-start"
                >
                  View details
                  <ArrowRight className="ml-2 h-3 w-3" />
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AutomationTemplates;