import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/src/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:text-destructive-foreground",
        outline:
          "border-2 border-input bg-background text-foreground hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:text-secondary-foreground",
        ghost: "text-foreground hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline hover:text-accent",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    // Create style with color override for specific variants
    const style = {
      ...props.style,
      // Force white text on colored backgrounds
      color: variant === 'default' || variant === 'destructive' || variant === 'secondary' 
        ? 'white' 
        : variant === 'outline' || variant === 'ghost' || variant === 'link'
          ? 'var(--color-primary)'
          : undefined,
    };
    
    // Add a forced text color class based on the variant
    const forcedColorClass = 
      variant === 'default' || variant === 'destructive' || variant === 'secondary' 
        ? 'text-white' 
        : variant === 'outline' || variant === 'ghost' || variant === 'link'
          ? 'text-primary'
          : '';
    
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }), forcedColorClass)}
        ref={ref}
        {...props}
        style={style}
      />
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants } 