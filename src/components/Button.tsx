import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';
import React from 'react';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap font-medium text-button rounded-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default: 'bg-[var(--color-primary-accent)] text-white hover:opacity-90',
        outline: 'border border-[var(--color-primary-accent)] bg-white text-[var(--color-primary-accent)] hover:bg-brand-lightGray',
        accent: 'bg-[var(--color-secondary-accent)] text-white hover:opacity-90',
        ghost: 'hover:bg-brand-lightGray hover:text-[var(--color-primary-accent)] text-brand-black',
        link: 'text-[var(--color-primary-accent)] font-semibold underline-offset-4 hover:underline',
      },
      size: {
        default: 'py-[var(--padding-button-y)] px-[var(--padding-button-x)]',
        sm: 'py-[calc(var(--padding-button-y)-2px)] px-[calc(var(--padding-button-x)-4px)] text-sm',
        lg: 'py-[calc(var(--padding-button-y)+2px)] px-[calc(var(--padding-button-x)+4px)] text-lg',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants }; 