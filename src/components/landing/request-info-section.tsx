import { CheckCircle2 } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const requestCategories = [
  {
    id: 'content-creation',
    title: 'Content Creation',
    items: [
      'SEO-optimized blog generators with human quality',
      'Social media content engines that match your brand voice',
      'Email nurture sequence generators',
      'Landing page copy optimizers'
    ]
  },
  {
    id: 'research-insights',
    title: 'Research & Insights',
    items: [
      'Reddit and Quora market research scraper',
      'Customer feedback analysis engines',
      'Competitive monitoring systems',
      'Trend detection and content opportunity finders'
    ]
  },
  {
    id: 'campaign-optimization',
    title: 'Campaign Optimization',
    items: [
      'Automated Google Analytics insights',
      'Internal linking optimization for SEO',
      'Ad performance analyzers',
      'A/B testing automation'
    ]
  },
  {
    id: 'lead-generation',
    title: 'Lead Generation',
    items: [
      'Lead qualification and routing systems',
      'Multi-channel campaign orchestration',
      'Personalized outreach sequencers',
      'Prospect research automations'
    ]
  }
];

export const RequestInfoSection = () => {
  return (
    <section className="section-spacing bg-transparent dark:bg-transparent">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl mb-4 md:mb-6">
            What You Can Request
          </h2>
          <p className="text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto">
            From content creation to analytics, our platform can automate your entire marketing workflow.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {requestCategories.map((category, index) => (
            <div 
              key={category.id}
              className={cn(
                'rounded-xl border border-border/70 bg-card p-6 md:p-8 shadow-sm transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 flex flex-col dark:border-slate-700/80 dark:bg-slate-800/50 dark:hover:bg-slate-800/80'
              )}
              // style={{ animationDelay: `${index * 150}ms` }} // Re-enable animation if desired
            >
              <h3 className="text-2xl font-semibold text-card-foreground mb-6 pb-4 border-b border-border/70 dark:border-slate-700/80">
                {category.title}
              </h3>
              <ul className="space-y-4 flex-grow">
                {category.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 
                      className="h-5 w-5 text-[color:var(--accent)] shrink-0 mt-1 group-hover:text-[color:var(--accent-light)] transition-colors duration-300" 
                    />
                    <span className="text-base text-muted-foreground leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 md:mt-16">
          <p className="text-lg italic text-muted-foreground/80 dark:text-slate-400/80">
            ...and anything else you can imagine
          </p>
        </div>
      </div>
    </section>
  );
}; 