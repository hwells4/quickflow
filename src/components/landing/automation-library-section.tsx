import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/src/components/Button';
import { cn } from '@/src/lib/utils';

const templates = [
  {
    id: 'brand-voice',
    iconPlaceholderQuery: 'stylized_icon_representing_brand_voice_ai_audio_wave_lines_teal_accent_minimalist',
    title: 'Brand Voice Trainer',
    description: 'Transform generic AI content into your exact brand voice with perfect tone matching.'
  },
  {
    id: 'client-reporting',
    iconPlaceholderQuery: 'icon_client_reporting_automation_charts_graphs_blue_accent_clean',
    title: 'Client Reporting Automator',
    description: 'Auto-generate client-ready reports with insights and recommendations.'
  },
  {
    id: 'content-generator',
    iconPlaceholderQuery: 'icon_multi_platform_content_generation_connected_nodes_green_accent_modern',
    title: 'Multi-Platform Content Generator',
    description: 'Create 1 piece of content and automatically adapt it for 5 different channels.'
  },
  {
    id: 'workflow-health',
    iconPlaceholderQuery: 'icon_workflow_health_monitor_heartbeat_pulse_system_status_teal_accent',
    title: 'Workflow Health Monitor',
    description: 'Get 24/7 monitoring of all your marketing automations with instant alerts.'
  },
  {
    id: 'lead-qualification',
    iconPlaceholderQuery: 'icon_lead_qualification_routing_funnel_arrows_decision_tree_blue_accent',
    title: 'Lead Qualification & Routing',
    description: 'Automatically score, tag, and route leads to the right team member.'
  },
  {
    id: 'seo-optimizer',
    iconPlaceholderQuery: 'icon_seo_content_optimization_magnifying_glass_search_graph_green_accent',
    title: 'SEO Content Optimizer',
    description: 'Transform basic content into fully optimized blog posts with proper SEO structure.'
  }
];

export const AutomationLibrarySection = () => {
  return (
    <section className="section-spacing relative overflow-hidden bg-transparent dark:bg-transparent">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl mb-4 md:mb-6">
            Ready-To-Use <span className="italic-highlight text-[color:var(--accent)]">Automation Library</span>
          </h2>
          <p className="text-lg text-muted-foreground md:text-xl">
            These templates show exactly what we can build for your business. Each solves a specific marketing challenge.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {templates.map((template, index) => (
            <div 
              key={template.id}
              className={cn(
                'group relative rounded-xl border border-border/70 bg-card p-6 shadow-sm transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1.5 flex flex-col dark:border-slate-700/80 dark:bg-slate-800/50 dark:hover:bg-slate-800/80'
              )}
              // style={{ animationDelay: `${index * 150}ms` }} // Re-enable if animation is globally set up
            >
              <div className="mb-5 flex items-center justify-center h-16 w-16 rounded-lg bg-muted dark:bg-slate-700/50 overflow-hidden shadow-inner">
                <Image 
                  src={`/placeholder.svg?width=64&height=64&query=${template.iconPlaceholderQuery}`}
                  alt={`${template.title} icon`}
                  width={48} // Slightly smaller than container for padding effect
                  height={48}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3">
                {template.title}
              </h3>
              <p className="text-base text-muted-foreground flex-grow mb-6 leading-relaxed">
                {template.description}
              </p>
              <Button variant="outline" size="default" asChild className="mt-auto w-full group/button hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] transition-colors duration-300 dark:hover:border-[color:var(--accent-light)] dark:hover:text-[color:var(--accent-light)]">
                <Link href="#" className="flex items-center justify-center">
                  Try it now 
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 