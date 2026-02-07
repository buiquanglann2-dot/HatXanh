import Link from 'next/link';
import React from 'react';
import { categories } from '@/data/categories';

export default function CategoryGrid() {
    return (
        <section className="px-6 lg:px-12 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {categories.map((cat) => (
                    <Link key={cat.id} href={`/products?category=${cat.id}`} className="flex flex-col items-center gap-4 group cursor-pointer">
                        <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-white dark:bg-slate-800 p-1 border-2 border-transparent group-hover:border-[#276515] transition-all duration-300 shadow-md transform group-hover:-translate-y-2">
                            <div className="w-full h-full rounded-full bg-center bg-cover" style={{ backgroundImage: `url('${cat.image}')` }}></div>
                        </div>
                        <span className="text-[#131712] dark:text-white font-bold text-lg group-hover:text-[#276515] transition-colors">{cat.name}</span>
                    </Link>
                ))}
            </div>
        </section>
    );
}
