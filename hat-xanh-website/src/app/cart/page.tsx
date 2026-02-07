"use client";
import Link from 'next/link';
import React from 'react';
import CartItem from '@/components/cart/CartItem';
import CartSummary from '@/components/cart/CartSummary';
import EmptyCart from '@/components/cart/EmptyCart';
import CrossSell from '@/components/cart/CrossSell';
import { useCart } from '@/context/CartContext';

// export const metadata = { ... } // Metadata cannot be exported from client component

export default function CartPage() {
    const { items: cartItems, totalPrice: subtotal } = useCart();

    if (cartItems.length === 0) {
        return (
            <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
                <EmptyCart />
                <CrossSell />
            </div>
        );
    }

    return (
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-12">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-sm text-slate-500 mb-8">
                <Link href="/" className="hover:text-[#276515] transition-colors">Trang chủ</Link>
                <span className="material-symbols-outlined text-xs">chevron_right</span>
                <span className="text-[#276515] font-semibold">Giỏ hàng</span>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 relative">
                {/* Left: Cart List */}
                <div className="flex-1">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-2xl lg:text-3xl font-black text-slate-900 dark:text-white">Giỏ hàng của bạn</h1>
                        <span className="text-slate-500 font-bold">{cartItems.length} sản phẩm</span>
                    </div>

                    <div className="space-y-4">
                        {cartItems.map((item) => (
                            <CartItem key={item.id} item={item} />
                        ))}
                    </div>

                    <CrossSell />
                </div>

                {/* Right: Summary */}
                <div className="w-full lg:w-[380px] shrink-0">
                    <CartSummary subtotal={subtotal} />
                </div>
            </div>
        </div>
    );
}
