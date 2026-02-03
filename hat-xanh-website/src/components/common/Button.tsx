import { cn } from '@/lib/utils';
import React from 'react';
import { Slot } from '@radix-ui/react-slot';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass' | 'gradient';
    size?: 'sm' | 'md' | 'lg';
    asChild?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
    className,
    variant = 'primary',
    size = 'md',
    asChild = false,
    ...props
}) => {
    const Comp = asChild ? Slot : "button"
    return (
        <Comp
            className={cn(
                'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer',
                {
                    'bg-primary-600 text-white hover:bg-primary-700 active:scale-95': variant === 'primary',
                    'bg-secondary-500 text-white hover:bg-secondary-600 active:scale-95': variant === 'secondary',
                    'border border-gray-300 bg-transparent hover:bg-gray-50 hover:border-primary-500': variant === 'outline',
                    'hover:bg-gray-100 dark:hover:bg-gray-800': variant === 'ghost',
                    'glass text-neutral-900 hover:bg-white/80 hover:shadow-glass-lg': variant === 'glass',
                    'bg-gradient-to-r from-primary-600 to-primary-500 text-white hover:shadow-glow-md active:scale-95': variant === 'gradient',
                    'h-9 px-3 text-sm': size === 'sm',
                    'h-11 px-5 py-2.5': size === 'md',
                    'h-13 px-7 text-lg': size === 'lg',
                },
                className
            )}
            {...props}
        />
    );
};
