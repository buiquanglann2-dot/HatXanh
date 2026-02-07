import React from 'react';
import { categories } from '@/data/categories';

export default function ProductFilters() {
    return (
        <aside className="w-full lg:w-1/4 space-y-8">
            {/* Categories */}
            <div className="space-y-4">
                <h3 className="font-bold text-slate-900 dark:text-white text-lg flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#276515]">category</span> Danh mục
                </h3>
                <div className="flex flex-col gap-2">
                    {categories.map((cat) => (
                        <label key={cat.id} className="flex items-center gap-3 cursor-pointer group">
                            <div className="relative flex items-center">
                                <input type="checkbox" className="peer h-5 w-5 rounded border-gray-300 text-[#276515] focus:ring-[#276515]" />
                            </div>
                            <span className="text-slate-600 dark:text-slate-300 group-hover:text-[#276515] transition-colors">{cat.name}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Price Range */}
            <div className="space-y-4">
                <h3 className="font-bold text-slate-900 dark:text-white text-lg flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#276515]">payments</span> Khoảng giá
                </h3>
                <div className="space-y-3">
                    <label className="flex items-center gap-3 cursor-pointer group">
                        <input type="radio" name="price" className="h-4 w-4 text-[#276515] focus:ring-[#276515]" />
                        <span className="text-slate-600 dark:text-slate-300 group-hover:text-[#276515]">Dưới 100k</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                        <input type="radio" name="price" className="h-4 w-4 text-[#276515] focus:ring-[#276515]" />
                        <span className="text-slate-600 dark:text-slate-300 group-hover:text-[#276515]">100k - 300k</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                        <input type="radio" name="price" className="h-4 w-4 text-[#276515] focus:ring-[#276515]" />
                        <span className="text-slate-600 dark:text-slate-300 group-hover:text-[#276515]">Trên 300k</span>
                    </label>
                </div>
            </div>

            {/* Dietary */}
            <div className="space-y-4">
                <h3 className="font-bold text-slate-900 dark:text-white text-lg flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#276515]">spa</span> Chế độ ăn
                </h3>
                <div className="flex flex-wrap gap-2">
                    {['Organic', 'Keto', 'Vegan', 'Gluten Free'].map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm rounded-full cursor-pointer hover:bg-[#276515] hover:text-white transition-all">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </aside>
    );
}
