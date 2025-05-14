import { Shield, Users, BarChart3, Zap } from 'lucide-react'; // Using BarChart3 for a slightly different visual
import { cn } from '@/src/lib/utils';
import DesignJoyShadow from '@/src/components/ui/DesignJoyShadow'; // Added import

const benefits = [
  {
    id: 'technical-implementation',
    icon: <Shield className="h-7 w-7 text-white" />,
    bgColorClass: 'bg-gradient-to-br from-blue-500 to-sky-600 dark:from-blue-600 dark:to-sky-700',
    title: '"We Handle It All" Technical Implementation',
    description: 'No technical expertise required. We build every automation in your specific tech stack, so everything works seamlessly with your existing tools.'
  },
  {
    id: 'quality-assurance',
    icon: <Users className="h-7 w-7 text-white" />,
    bgColorClass: 'bg-gradient-to-br from-green-500 to-emerald-600 dark:from-green-600 dark:to-emerald-700',
    title: 'Human Quality Assurance',
    description: 'Our built-in quality control ensures all automated outputs maintain your standards and brand identity.'
  },
  {
    id: 'roi-time',
    icon: <BarChart3 className="h-7 w-7 text-white" />,
    bgColorClass: 'bg-gradient-to-br from-amber-500 to-orange-600 dark:from-amber-600 dark:to-orange-700',
    title: 'Real ROI Through Time Reclamation',
    description: 'Our average client saves 15+ hours per week on repetitive tasks. What could your team accomplish with that time back?'
  },
  {
    id: 'reliability',
    icon: <Zap className="h-7 w-7 text-white" />,
    bgColorClass: 'bg-gradient-to-br from-purple-500 to-indigo-600 dark:from-purple-600 dark:to-indigo-700',
    title: 'Reliability Guaranteed',
    description: 'Our monitoring systems ensure 99.9% uptime with proactive maintenance and instant issue resolution.'
  }
];

export const WhyChooseUsSection = () => {
  return (
    <section className="section-spacing bg-background/80 backdrop-blur-md dark:bg-slate-900/80">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl mb-4 md:mb-6">
            Why Marketing Teams Choose QuickFlow
          </h2>
          <p className="text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto">
            We handle the technical side so you can focus on growing your business.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <DesignJoyShadow 
              key={benefit.id} 
              variant="medium" 
              className="rounded-xl bg-card/90 backdrop-blur-sm overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-1 dark:bg-slate-800/70 dark:hover:bg-slate-800/90"
              borderVisible={false} // The shadow itself provides definition
            >
              <div className='flex overflow-hidden h-full'> {/* Ensure flex container takes full height of shadow wrapper*/}
                <div className={cn(
                  'p-6 flex items-center justify-center w-24 shrink-0',
                  benefit.bgColorClass
                )}>
                  <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                    {benefit.icon}
                  </div>
                </div>
                <div className="p-6 flex-1">
                  <h3 className="text-xl font-semibold text-card-foreground mb-2.5">
                    {benefit.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </DesignJoyShadow>
          ))}
        </div>
      </div>
    </section>
  );
}; 