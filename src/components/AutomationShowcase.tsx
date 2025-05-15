'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  Calendar, 
  BarChart3, 
  Users, 
  Database, 
  Mail, 
  FileText, 
  MessageSquare,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { Button } from './Button';

// Define automation workflow data type
interface WorkflowData {
  id: string;
  title: string;
  description: string;
  benefit: string;
  icon: React.ElementType;
}

// Define automation workflow data
const automationWorkflows: WorkflowData[] = [
  {
    id: 'content',
    title: 'Content Calendar Automation',
    description: 'Auto-generate social posts, schedule content, and track engagement across platforms.',
    benefit: 'Save 15+ hours weekly',
    icon: Calendar,
  },
  {
    id: 'reporting',
    title: 'Automated Performance Reports',
    description: 'Generate comprehensive client reports with KPIs, visualizations, and insights.',
    benefit: 'Reduce reporting time by 80%',
    icon: BarChart3,
  },
  {
    id: 'client',
    title: 'Client Onboarding Workflow',
    description: 'Streamline client intake with automated forms, document collection, and project setup.',
    benefit: 'Consistent experience with faster kickoffs',
    icon: Users,
  },
  {
    id: 'data',
    title: 'Cross-Platform Data Sync',
    description: 'Keep CRM, project management, and accounting systems in perfect sync automatically.',
    benefit: 'Eliminate manual entry',
    icon: Database,
  },
  {
    id: 'email',
    title: 'Smart Client Follow-ups',
    description: 'AI-powered email sequences that adapt based on client engagement and project status.',
    benefit: 'Personalized at scale',
    icon: Mail,
  },
  {
    id: 'proposals',
    title: 'Proposal Generator',
    description: 'Create customized client proposals with dynamic pricing and service recommendations.',
    benefit: '10x faster creation',
    icon: FileText,
  },
  {
    id: 'chat',
    title: 'Client Support Automation',
    description: 'AI chatbot and ticket routing system that handles common questions and escalates when needed.',
    benefit: '24/7 availability',
    icon: MessageSquare,
  }
];

export const AutomationShowcase = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  
  return (
    <section className="py-20 bg-background-muted/30">
      <div className="container-custom max-w-7xl">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Automation Library <span className="text-primary">That Delivers Value</span>
          </h2>
          <p className="text-base text-muted-foreground md:text-lg">
            Custom workflows built for agencies that save time, reduce errors, and delight clients.
            Each automation is fully customizable to your specific needs.
          </p>
        </div>
        
        {/* Featured workflow */}
        <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 mb-10">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-16">
              <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
            </div>
            
            <div className="flex-1">
              <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
                <h3 className="text-xl font-semibold">
                  {automationWorkflows[0].title}
                </h3>
                
                <span className="inline-flex bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full mt-1 md:mt-0">
                  {automationWorkflows[0].benefit}
                </span>
              </div>
              
              <p className="text-muted-foreground mb-4">
                {automationWorkflows[0].description}
              </p>
              
              <Link 
                href={`#${automationWorkflows[0].id}`}
                className="text-primary hover:text-primary/80 inline-flex items-center text-sm font-medium"
              >
                Learn more <ChevronRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
        
        {/* Workflows grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {automationWorkflows.slice(1).map((workflow) => (
            <div 
              key={workflow.id} 
              className={cn(
                "bg-white rounded-xl shadow-md border border-gray-100 p-6 transition-all duration-300 hover:shadow-lg",
                hoveredId === workflow.id ? "border-primary/30" : "border-gray-100"
              )}
              onMouseEnter={() => setHoveredId(workflow.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center transition-colors",
                    "bg-primary/10"
                  )}>
                    <workflow.icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-base">
                      {workflow.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-3">
                    {workflow.description}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                      {workflow.benefit}
                    </span>
                    
                    <Link 
                      href={`#${workflow.id}`}
                      className="text-primary hover:text-primary/80 inline-flex items-center text-xs font-medium"
                    >
                      Details <ChevronRight className="ml-0.5 w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA button */}
        <div className="mt-12 text-center">
          <Button 
            variant="default" 
            size="lg" 
            asChild
          >
            <Link href="#pricing" className="flex items-center">
              Get Access to All Workflows <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AutomationShowcase; 