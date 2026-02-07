import React from 'react';
import { products } from '@/data/products';
import ProductCard from './ProductCard';

export default function ProductGrid() {
    return (
        <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                <p className="text-slate-500 text-sm">Hiển thị <span className="font-bold text-slate-900 dark:text-white">{products.length}</span> sản phẩm</p>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-slate-500">Sắp xếp:</span>
                        <select className="text-sm border-none bg-transparent font-bold text-slate-900 focus:ring-0 cursor-pointer">
                            <option>Mới nhất</option>
                            <option>Giá tăng dần</option>
                            <option>Giá giảm dần</option>
                            <option>Bán chạy</option>
                        </select>
                    </div>
                    <div className="flex items-center gap-1 border-l border-slate-200 pl-4">
                        <button className="p-1.5 bg-[#276515]/10 text-[#276515] rounded">
                            <span className="material-symbols-outlined text-xl">grid_view</span>
                        </button>
                        <button className="p-1.5 text-slate-400 hover:text-[#276515] rounded">
                            <span className="material-symbols-outlined text-xl">view_list</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
                {/* Duplicate for demo filling */}
                {products.map((product) => (
                    <ProductCard key={`${product.id}-copy`} product={{ ...product, id: `${product.id}-copy` }} />
                ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12 gap-2">
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:border-[#276515] hover:text-[#276515] transition-all">
                    <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#276515] text-white font-bold shadow-lg shadow-[#276515]/20">1</button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:border-[#276515] hover:text-[#276515] transition-all">2</button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:border-[#276515] hover:text-[#276515] transition-all">3</button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:border-[#276515] hover:text-[#276515] transition-all">
                    <span className="material-symbols-outlined">chevron_right</span>
                </button>
            </div>
        </div>
    );
}
