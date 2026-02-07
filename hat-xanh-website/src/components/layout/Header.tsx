import Link from 'next/link';
import React from 'react';
import { useCart } from '@/context/CartContext';

export default function Header() {
    const { totalItems } = useCart();
    return (
        <header className="sticky top-0 z-50 w-full bg-white/90 dark:bg-[#152012]/90 backdrop-blur-md border-b border-[#276515]/10">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-12 flex h-20 items-center justify-between">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="bg-[#276515] p-1.5 rounded-lg group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-white text-2xl">eco</span>
                    </div>
                    <h1 className="text-[#276515] text-2xl font-black tracking-tight">Hạt Xanh</h1>
                </Link>
                <nav className="hidden md:flex items-center gap-8">
                    {[
                        ['Sản phẩm', '/products'],
                        ['Combo', '/products?category=combo'],
                        ['Về Hạt Xanh', '/about'],
                        ['Blog', '/blog'],
                        ['Liên hệ', '/contact'],
                    ].map(([title, url]) => (
                        <Link
                            key={title}
                            href={url}
                            className="text-slate-700 dark:text-slate-200 text-sm font-semibold hover:text-[#276515] transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-[#276515] after:transition-all hover:after:w-full"
                        >
                            {title}
                        </Link>
                    ))}
                </nav>
                <div className="flex items-center gap-4">
                    <button className="p-2 text-slate-600 dark:text-slate-300 hover:bg-[#276515]/10 rounded-full transition-all">
                        <span className="material-symbols-outlined">search</span>
                    </button>
                    <Link href="/cart" className="p-2 text-slate-600 dark:text-slate-300 hover:bg-[#276515]/10 rounded-full transition-all relative">
                        <span className="material-symbols-outlined">shopping_cart</span>
                        {totalItems > 0 && (
                            <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white animate-pulse">
                                {totalItems}
                            </span>
                        )}
                    </Link>
                    <Link href="/products" className="hidden lg:flex min-w-[120px] items-center justify-center rounded-lg h-11 px-6 bg-[#166534] text-white text-sm font-bold tracking-wide hover:bg-[#276515] transition-all shadow-lg shadow-[#276515]/20 hover:scale-105 transform">
                        Mua ngay
                    </Link>
                </div>
            </div>
        </header>
    );
}
