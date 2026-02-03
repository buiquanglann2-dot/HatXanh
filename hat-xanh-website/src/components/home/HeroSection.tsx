import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/common/Button';
import { GlassCard } from '@/components/common/GlassCard';
import { HiArrowRight, HiChevronDown } from 'react-icons/hi';

export const HeroSection = () => {
    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                {/* Placeholder background - replace with actual Tây Nguyên landscape image */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-500 to-secondary-500" />

                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40" />

                {/* Animated gradient orbs */}
                <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary-400/30 blur-3xl animate-float" />
                <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-secondary-400/30 blur-3xl animate-float animation-delay-200" />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <GlassCard
                        variant="subtle"
                        className="mx-auto max-w-4xl p-8 sm:p-12 lg:p-16 text-center"
                    >
                        {/* Main Heading */}
                        <h1 className="font-display text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl animate-fade-in">
                            Nông Sản Sạch
                            <br />
                            <span className="bg-gradient-to-r from-primary-200 to-secondary-200 bg-clip-text text-transparent">
                                Từ Tây Nguyên
                            </span>
                        </h1>

                        {/* Subtitle */}
                        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90 sm:text-xl lg:text-2xl animate-slide-up animation-delay-100">
                            Mang hương vị tự nhiên, tinh túy của đại ngàn đến từng gia đình Việt.
                            <br className="hidden sm:block" />
                            Cam kết chất lượng, 100% tự nhiên, không chất bảo quản.
                        </p>

                        {/* CTA Buttons */}
                        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row animate-scale-in animation-delay-200">
                            <Button
                                variant="gradient"
                                size="lg"
                                asChild
                                className="group shadow-glow-lg"
                            >
                                <Link href="/san-pham" className="flex items-center">
                                    Khám phá ngay
                                    <HiArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </Button>
                            <Button
                                variant="glass"
                                size="lg"
                                asChild
                                className="text-white hover:text-neutral-900"
                            >
                                <Link href="/gioi-thieu">
                                    Về chúng tôi
                                </Link>
                            </Button>
                        </div>

                        {/* Trust Indicators */}
                        <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/80 animate-fade-in animation-delay-300">
                            <div className="flex flex-col items-center">
                                <span className="font-display text-3xl font-bold text-white">100%</span>
                                <span className="text-sm">Tự nhiên</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="font-display text-3xl font-bold text-white">5+</span>
                                <span className="text-sm">Năm kinh nghiệm</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="font-display text-3xl font-bold text-white">1000+</span>
                                <span className="text-sm">Khách hàng</span>
                            </div>
                        </div>
                    </GlassCard>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <HiChevronDown className="h-8 w-8 text-white/60" />
            </div>
        </section>
    );
};
