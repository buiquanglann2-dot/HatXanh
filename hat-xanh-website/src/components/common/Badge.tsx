import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
    children: React.ReactNode;
    variant?: 'organic' | 'sale' | 'new' | 'featured' | 'success' | 'warning';
    className?: string;
    animated?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
    children,
    variant = 'organic',
    className,
    animated = true,
}) => {
    const variants = {
        organic: 'bg-primary-500 text-white',
        success: 'bg-primary-500 text-white', // Alias for organic
        sale: 'bg-secondary-500 text-white animate-bounce-subtle',
        warning: 'bg-secondary-500 text-white animate-bounce-subtle', // Alias for sale
        new: 'bg-blue-500 text-white',
        featured: 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-glow-sm',
    };

    return (
        <span
            className={cn(
                'inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide',
                'transition-all duration-200',
                variants[variant],
                animated && 'animate-scale-in',
                className
            )}
        >
            {children}
        </span>
    );
};
