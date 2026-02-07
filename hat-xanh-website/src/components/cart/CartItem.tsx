import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';

interface CartItemProps {
    item: Product & { quantity: number };
}

export default function CartItem({ item }: CartItemProps) {
    const { updateQuantity, removeItem } = useCart();

    return (
        <div className="flex flex-col sm:flex-row items-center gap-6 p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
            {/* Image */}
            <div className="w-24 h-24 shrink-0 rounded-lg overflow-hidden bg-slate-50 border border-slate-100 relative">
                <Image src={item.image} alt={item.name} fill className="object-cover" />
            </div>

            {/* Info */}
            <div className="flex-1 text-center sm:text-left">
                <h4 className="font-bold text-slate-900 dark:text-white mb-1 line-clamp-1">
                    <Link href={`/products/${item.id}`} className="hover:text-[#276515] transition-colors">{item.name}</Link>
                </h4>
                <p className="text-xs text-slate-500 mb-2">{item.category}</p>
                <span className="font-bold text-[#276515] sm:hidden">{item.price.toLocaleString('vi-VN')}đ</span>
            </div>

            {/* Quantity */}
            <div className="flex items-center border border-slate-200 dark:border-slate-600 rounded-lg overflow-hidden shrink-0">
                <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="w-8 h-8 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                >-</button>
                <input type="text" value={item.quantity} readOnly className="w-10 h-8 text-center text-sm font-bold bg-transparent border-none focus:ring-0 p-0" />
                <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-8 h-8 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                >+</button>
            </div>

            {/* Subtotal & Actions */}
            <div className="flex flex-col items-end gap-2 shrink-0 w-full sm:w-auto">
                <span className="font-bold text-[#276515] text-lg hidden sm:block">{(item.price * item.quantity).toLocaleString('vi-VN')}đ</span>
                <button
                    onClick={() => removeItem(item.id)}
                    className="text-slate-400 hover:text-red-500 transition-colors flex items-center gap-1 text-sm bg-slate-50 dark:bg-slate-700 px-3 py-1 rounded-full group"
                >
                    <span className="material-symbols-outlined text-base">delete</span> Xóa
                </button>
            </div>
        </div>
    );
}
