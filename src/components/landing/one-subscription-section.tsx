import { Repeat, RefreshCw, BotIcon, Layers, Bell, Shield } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import DesignJoyShadow from '@/src/components/ui/DesignJoyShadow';

const features = [
  {
    icon: <Repeat className="h-7 w-7 text-[color:var(--accent)]" />,
    title: 'Unlimited custom workflows',
    description: 'Built specifically for your business',
    bgColorClass: 'bg-green-500/10 dark:bg-green-500/20',
    borderColorClass: 'border-green-500/30',
    accentClass: 'from-green-400 to-green-600'
  },
  {
    icon: <RefreshCw className="h-7 w-7 text-[color:var(--accent)]" />,
    title: 'Unlimited executions',
    description: 'Run your automations as often as needed',
    bgColorClass: 'bg-blue-500/10 dark:bg-blue-500/20',
    borderColorClass: 'border-blue-500/30',
    accentClass: 'from-blue-400 to-blue-600'
  },
  {
    icon: <BotIcon className="h-7 w-7 text-[color:var(--accent)]" />,
    title: 'Unlimited AI usage',
    description: 'All credits included in your subscription',
    bgColorClass: 'bg-purple-500/10 dark:bg-purple-500/20',
    borderColorClass: 'border-purple-500/30',
    accentClass: 'from-purple-400 to-purple-600'
  },
  {
    icon: <Layers className="h-7 w-7 text-[color:var(--accent)]" />,
    title: 'Unlimited integrations',
    description: 'With your existing marketing stack',
    bgColorClass: 'bg-sky-500/10 dark:bg-sky-500/20',
    borderColorClass: 'border-sky-500/30',
    accentClass: 'from-sky-400 to-sky-600'
  },
  {
    icon: <Bell className="h-7 w-7 text-[color:var(--accent)]" />,
    title: '24/7 monitoring',
    description: 'For complete peace of mind',
    bgColorClass: 'bg-yellow-500/10 dark:bg-yellow-500/20',
    borderColorClass: 'border-yellow-500/30',
    accentClass: 'from-yellow-400 to-yellow-600'
  },
  {
    icon: <Shield className="h-7 w-7 text-[color:var(--accent)]" />,
    title: 'Technical maintenance',
    description: 'No coding or server management',
    bgColorClass: 'bg-rose-500/10 dark:bg-rose-500/20',
    borderColorClass: 'border-rose-500/30',
    accentClass: 'from-rose-400 to-rose-600'
  }
];

export const OneSubscriptionSection = () => {
  return (
    <section className="section-spacing bg-transparent dark:bg-slate-900/50 overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span className="inline-flex items-center justify-center px-4 py-1.5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-medium rounded-full mb-6">
            All-Inclusive
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl mb-4 md:mb-6">
            One Subscription To Replace Them All
          </h2>
          <p className="text-lg text-muted-foreground md:text-xl">
            MarketFlow is the last AI marketing subscription you'll ever need:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <DesignJoyShadow
              key={index}
              variant="medium"
              className={cn(
                'group overflow-hidden backdrop-blur-sm bg-white/95 dark:bg-slate-800/90 p-0 hover:-translate-y-2 transition-all duration-300',
                feature.borderColorClass
              )}
            >
              {/* Accent color top border */}
              <div className={cn(
                'h-1.5 w-full bg-gradient-to-r', 
                feature.accentClass
              )}></div>
              
              <div className="p-6">
                <div className="flex flex-col items-center text-center">
                  {/* Icon container with pulsing animation on hover */}
                  <div className={cn(
                    'h-18 w-18 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110',
                    feature.bgColorClass,
                    'relative before:absolute before:inset-0 before:rounded-xl before:opacity-0 before:transition-opacity group-hover:before:opacity-100 before:bg-gradient-to-r',
                    feature.accentClass,
                    'before:blur-xl before:-z-10'
                  )}>
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-card-foreground mb-2.5 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r transition-all duration-300"
                    style={{
                      backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
                    }}
                  >
                    <span className={cn(
                      'group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300',
                      feature.accentClass
                    )}>
                      {feature.title}
                    </span>
                  </h3>
                  
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </DesignJoyShadow>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <p className="text-lg md:text-xl font-medium text-foreground bg-white/80 dark:bg-slate-800/80 py-4 px-8 rounded-full inline-block shadow-lg border border-gray-100 dark:border-slate-700 backdrop-blur-sm">
            No hidden fees. No usage limits. No technical expertise required.
          </p>
        </div>
      </div>
    </section>
  );
}; 