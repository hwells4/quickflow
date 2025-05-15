import React from 'react';
import { CalendarDays, BarChart3, Users, RefreshCw, FileText, MessagesSquare } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export const AutomationLibrary = () => {
  const automations = [
    {
      name: "Content Calendar Automation",
      description: "Auto-generate social posts, schedule content, and track engagement across platforms.",
      icon: CalendarDays,
      badge: "Save 10+ hours weekly",
      className: "md:col-span-1 col-span-3",
    },
    {
      name: "Automated Performance Reports",
      description: "Generate comprehensive client reports with KPIs, visualizations, and insights.",
      icon: BarChart3,
      badge: "Reduce reporting time by 80%",
      className: "md:col-span-1 col-span-3",
    },
    {
      name: "Client Onboarding Workflow",
      description: "Streamline client intake with automated forms, document collection, and project setup.",
      icon: Users,
      badge: "Consistent experience with faster kickoffs",
      className: "md:col-span-1 col-span-3",
    },
    {
      name: "Cross-Platform Data Sync",
      description: "Keep CRM, project management, and accounting systems in perfect sync automatically.",
      icon: RefreshCw,
      badge: "Eliminate manual entry",
      className: "md:col-span-3 lg:col-span-2 col-span-3",
    },
    {
      name: "Proposal Generator",
      description: "Create customized client proposals with dynamic pricing and service recommendations.",
      icon: FileText,
      badge: "10x faster creation",
      className: "md:col-span-1 lg:col-span-1 col-span-3",
    },
    {
      name: "Client Support Automation",
      description: "AI chatbot and ticket routing system that handles common questions and escalates when needed.",
      icon: MessagesSquare,
      badge: "24/7 availability",
      className: "md:col-span-2 lg:col-span-3 col-span-3",
    }
  ];

  return (
    <section className="section-spacing py-20 relative overflow-hidden">
      {/* Background pattern for contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50/30 dark:to-slate-900/30"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Automation Library <span className="italic-highlight">That Delivers Value</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Custom workflows built for agencies that save time, reduce errors, and delight clients. 
            Each automation is fully customizable to your specific needs.
          </p>
          <div className="flex items-center justify-center mt-6">
            <span className="inline-flex items-center text-sm font-medium px-3 py-1 bg-[color:var(--accent)]/10 text-[color:var(--accent)] rounded-full">
              <span className="mr-2 w-3 h-3 bg-[color:var(--accent)] rounded-full animate-pulse"></span>
              Updated weekly with new workflows
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6">
          {automations.map((automation, index) => (
            <div 
              key={index}
              className={cn(
                "group relative overflow-hidden rounded-xl transition-all duration-300",
                "bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700",
                "shadow-[0_8px_30px_rgb(0,0,0,0.07)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]",
                "transform hover:-translate-y-1",
                automation.className
              )}
            >
              {/* Accent border top */}
              <div className="h-1.5 w-full bg-gradient-to-r from-[color:var(--accent)] to-purple-600"></div>
              
              <div className="p-6 md:p-8">
                {/* Badge */}
                <div className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 mb-4">
                  {automation.badge}
                </div>
                
                {/* Icon with enhanced visibility */}
                <div className="mb-5 relative">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[color:var(--accent)]/10 text-[color:var(--accent)]">
                    <automation.icon className="w-6 h-6" />
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[color:var(--accent)] transition-colors">
                  {automation.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {automation.description}
                </p>
                
                {/* CTA Button */}
                <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                  <a 
                    href={`/demo/${automation.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center text-sm font-medium text-[color:var(--accent)] hover:text-[color:var(--accent)]/80"
                  >
                    Learn more
                    <svg className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutomationLibrary; 