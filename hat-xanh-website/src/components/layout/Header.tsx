"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/data/site-config';
import { mainNav } from '@/data/navigation';
import { Button } from '@/components/common/Button';
import { HiMenu, HiX, HiShoppingCart } from 'react-icons/hi';
import { cn } from '@/lib/utils';

export const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
                isScrolled
                    ? 'bg-white/90 backdrop-blur-md border-neutral-200 shadow-sm py-3'
                    : 'bg-white border-transparent py-5'
            )}
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2 group z-50 relative">
                        <span className="font-display text-2xl font-bold text-primary-700 transition-all group-hover:scale-105 block">
                            {siteConfig.name}
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {mainNav.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        'text-sm font-medium transition-colors hover:text-primary-600',
                                        isActive ? 'text-primary-700 font-bold' : 'text-neutral-600'
                                    )}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                        {/* Shopping Cart */}
                        <Button
                            variant="ghost"
                            size="sm"
                            className="relative group hover:bg-primary-50 hover:text-primary-700"
                        >
                            <HiShoppingCart className="h-6 w-6" />
                            <span className="sr-only">Giỏ hàng</span>
                            {/* Cart badge */}
                            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-secondary-500 text-[10px] font-bold text-white animate-scale-in">
                                0
                            </span>
                        </Button>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="md:hidden p-2 text-neutral-600 hover:text-primary-600 transition-colors z-50 relative"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={cn(
                    "fixed inset-0 bg-white z-40 flex flex-col pt-24 px-6 md:hidden transition-all duration-300 ease-in-out transform",
                    isMobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
                )}
            >
                <nav className="flex flex-col space-y-6 text-center">
                    {mainNav.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    'text-2xl font-display font-bold transition-colors',
                                    isActive ? 'text-primary-600' : 'text-neutral-800 hover:text-primary-600'
                                )}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                    <div className="pt-8 flex justify-center">
                        <Button
                            variant="primary"
                            size="lg"
                            className="w-full max-w-xs shadow-glow-md"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <HiShoppingCart className="mr-2 h-5 w-5" />
                            Xem giỏ hàng (0)
                        </Button>
                    </div>
                </nav>
            </div>
        </header>
    );
};
