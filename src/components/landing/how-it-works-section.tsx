import { Send, FileCheck, Zap, LineChart } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const steps = [
  {
    icon: <Send className="h-7 w-7 text-white" />,
    bgColor: 'bg-gradient-to-br from-[color:var(--accent)] to-[color:var(--accent-light)] dark:from-[color:var(--accent)] dark:to-blue-600',
    stepNumber: '01',
    title: 'Request',
    description: 'Submit your workflow request through our simple dashboard.'
  },
  {
    icon: <FileCheck className="h-7 w-7 text-white" />,
    bgColor: 'bg-gradient-to-br from-blue-500 to-sky-600 dark:from-blue-500 dark:to-sky-700', // Introducing a distinct blue
    stepNumber: '02',
    title: 'Approve',
    description: "Review our implementation plan within 24 hours."
  },
  {
    icon: <Zap className="h-7 w-7 text-white" />,
    bgColor: 'bg-gradient-to-br from-purple-500 to-pink-600 dark:from-purple-600 dark:to-pink-700', // Another distinct color for variety
    stepNumber: '03',
    title: 'Receive',
    description: 'Get your tested workflow ready to use within 72 hours.'
  },
  {
    icon: <LineChart className="h-7 w-7 text-white" />,
    bgColor: 'bg-gradient-to-br from-orange-500 to-red-600 dark:from-orange-600 dark:to-red-700', // And another
    stepNumber: '04',
    title: 'Run',
    description: 'Execute workflows as often as needed with zero management.'
  }
];

export const HowItWorksSection = () => {
  return (
    <section className="section-spacing bg-transparent dark:bg-slate-900/50">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl mb-4 md:mb-6">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto">
            A simple, four-step process to get your custom AI marketing workflows up and running.
          </p>
        </div>
        
        <div className="relative">
          {/* Decorative connecting line for medium screens and up */}
          <div 
            aria-hidden="true"
            className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 -translate-y-1/2"
          >
            <div className="w-full h-full bg-gradient-to-r from-transparent via-[color:var(--accent)]/50 to-transparent"></div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 md:gap-6 relative">
            {steps.map((step, index) => (
              <div 
                key={step.stepNumber} 
                className="flex flex-col items-center text-center group"
                // style={{ animationDelay: `${index * 200}ms` }} // Re-enable if animation is globally available
              >
                <div className="relative mb-6 md:mb-8">
                  <div className={cn(
                    'p-5 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ease-in-out group-hover:scale-110',
                    step.bgColor
                  )}>
                    {step.icon}
                  </div>
                  <div className={cn(
                    'absolute -top-2.5 -right-2.5 h-7 w-7 text-xs rounded-full bg-card border border-border shadow-md flex items-center justify-center font-bold text-[color:var(--accent)] dark:bg-slate-700 dark:border-slate-600',
                  )}>
                    {step.stepNumber}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-2.5">
                  {step.title}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}; 