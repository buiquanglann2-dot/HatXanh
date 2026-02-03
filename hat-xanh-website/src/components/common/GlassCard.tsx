import React from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
    variant?: 'subtle' | 'prominent' | 'colored';
    hover?: boolean;
    as?: 'div' | 'article' | 'section';
}

export const GlassCard: React.FC<GlassCardProps> = ({
    children,
    className,
    variant = 'subtle',
    hover = false,
    as: Component = 'div',
}) => {
    const variants = {
        subtle: 'bg-white/70 border-white/30',
        prominent: 'bg-white/80 border-white/40 shadow-glass-lg',
        colored: 'bg-gradient-to-br from-primary-50/80 to-white/70 border-primary-100/40',
    };

    return (
        <Component
            className={cn(
                'glass rounded-xl backdrop-blur-md transition-all duration-300',
                variants[variant],
                hover && 'hover:scale-[1.02] hover:shadow-glass-lg cursor-pointer',
                className
            )}
        >
            {children}
        </Component>
    );
};
