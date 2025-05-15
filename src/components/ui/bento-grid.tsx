import { ReactNode } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import { cn } from "@/src/lib/utils";
import { Button } from "@/src/components/ui/button";
import DesignJoyShadow from '@/src/components/ui/DesignJoyShadow';

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[10rem] grid-cols-3 gap-4",
        className,
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
}: {
  name: string;
  className: string;
  background: ReactNode;
  Icon: any;
  description: string;
  href: string;
  cta: string;
}) => {
  // Generate a unique gradient based on the feature name (for visual variety)
  const getGradientClass = (name: string) => {
    const hash = name.split('').reduce((acc, char) => char.charCodeAt(0) + acc, 0);
    const gradients = [
      "from-blue-600 via-indigo-500 to-purple-600", // Blue to purple
      "from-emerald-500 via-teal-500 to-cyan-600", // Green to cyan
      "from-rose-500 via-pink-500 to-purple-600", // Rose to purple
      "from-amber-500 via-orange-500 to-rose-600", // Amber to rose
      "from-blue-500 via-cyan-500 to-emerald-600", // Blue to emerald
    ];
    return gradients[hash % gradients.length];
  };

  return (
    <DesignJoyShadow
      variant="medium"
      className={cn(
        "group relative col-span-3 flex flex-col overflow-hidden rounded-xl h-full",
        "bg-gradient-to-br from-white to-gray-50 dark:from-slate-900 dark:to-black",
        "border border-gray-200 dark:border-gray-800",
        "transition-all duration-500 hover:shadow-xl",
        className,
      )}
    >
      {/* Floating card accent border/glow */}
      <div className={cn(
        "absolute inset-0 bg-gradient-to-br opacity-30 dark:opacity-40 z-0",
        getGradientClass(name)
      )} />
      
      <div className="relative z-10 flex flex-col justify-between h-full p-6">
        {/* Enhanced icon display */}
        <div className="mb-3">
          <div className={cn(
            "w-12 h-12 rounded-xl flex items-center justify-center",
            "bg-white/80 dark:bg-black/60 backdrop-blur-sm",
            "shadow-lg border border-gray-200/80 dark:border-gray-700/50",
            "transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
          )}>
            <Icon className="h-6 w-6 text-[color:var(--accent)] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-br from-[color:var(--accent)] to-purple-600 drop-shadow-sm transition-all duration-300 group-hover:scale-110" />
          </div>
        </div>
        
        {/* Content group */}
        <div className="flex-grow">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-[color:var(--accent)] to-purple-600">
            {name}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 transition-all duration-300">{description}</p>
        </div>
        
        {/* Background visual element - more subtle than before */}
        <div className="absolute right-0 top-0 -z-[1] opacity-10 transition-opacity duration-300 group-hover:opacity-20 overflow-hidden">
          {background}
        </div>
        
        {/* Animated CTA button */}
        <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-800 transition-all duration-300 group-hover:border-transparent">
          <Button variant="ghost" asChild size="sm" 
            className="group/btn bg-white/80 dark:bg-black/50 backdrop-blur-sm hover:bg-gradient-to-r hover:from-[color:var(--accent)] hover:to-purple-600 hover:text-white transition-all duration-300">
            <a href={href} className="flex items-center">
              {cta}
              <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </a>
          </Button>
        </div>
        
        {/* Subtle corner decoration */}
        <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl opacity-30 dark:opacity-20 rounded-tl-full -z-[5] transition-all duration-500 group-hover:opacity-40 group-hover:w-20 group-hover:h-20"></div>
      </div>
    </DesignJoyShadow>
  );
};

export { BentoCard, BentoGrid }; 