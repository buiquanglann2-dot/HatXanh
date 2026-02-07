import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { products } from '@/data/products';

export default function CrossSell() {
    const suggestedProducts = products.slice(0, 4); // Take first 4

    return (
        <section className="mt-20">
            <div className="flex justify-between items-end mb-8">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Có thể bạn sẽ thích</h3>
                <Link href="/products" className="text-[#276515] font-bold text-sm hover:underline">Xem tất cả</Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {suggestedProducts.map((item) => (
                    <div key={item.id} className="bg-white dark:bg-slate-800 rounded-xl p-3 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-all group">
                        <div className="aspect-square rounded-lg bg-slate-50 overflow-hidden mb-3 relative">
                            <Image src={item.image} alt={item.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <h5 className="font-bold text-sm text-slate-900 dark:text-white line-clamp-2 mb-1 min-h-[40px]">{item.name}</h5>
                        <div className="flex justify-between items-center">
                            <span className="text-[#276515] font-bold text-sm">{item.price.toLocaleString('vi-VN')}đ</span>
                            <button className="w-8 h-8 rounded-full bg-[#276515]/10 text-[#276515] flex items-center justify-center hover:bg-[#276515] hover:text-white transition-all">
                                <span className="material-symbols-outlined text-sm">add</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
