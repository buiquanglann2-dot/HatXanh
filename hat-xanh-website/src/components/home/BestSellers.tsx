import Link from 'next/link';
import React from 'react';
import { products } from '@/data/products';

export default function BestSellers() {
    return (
        <section className="px-6 lg:px-12 py-20 bg-white/50 dark:bg-slate-900/30 rounded-[2rem] my-10 border border-white dark:border-slate-800">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div>
                    <h3 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mb-2">Sản phẩm bán chạy</h3>
                    <p className="text-slate-600 dark:text-slate-400">Những lựa chọn được khách hàng yêu thích nhất tại Hạt Xanh</p>
                </div>
                <Link href="/products" className="text-[#276515] font-bold flex items-center gap-2 hover:underline decoration-2 underline-offset-4">
                    Tất cả sản phẩm <span className="material-symbols-outlined">keyboard_double_arrow_right</span>
                </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700 hover:-translate-y-1">
                        <div className="relative aspect-square overflow-hidden">
                            <div className="w-full h-full bg-center bg-cover group-hover:scale-110 transition-transform duration-500" style={{ backgroundImage: `url('${product.image}')` }}></div>
                            {product.salePercentage && (
                                <span className="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded">-{product.salePercentage}%</span>
                            )}
                        </div>
                        <div className="p-5 flex flex-col gap-3">
                            <h4 className="font-bold text-slate-800 dark:text-white text-lg line-clamp-2 min-h-[56px]">{product.name}</h4>
                            <div className="flex items-center gap-3">
                                <span className="text-[#276515] text-xl font-black">{product.price.toLocaleString('vi-VN')}đ</span>
                                {product.originalPrice && (
                                    <span className="text-slate-400 text-sm line-through">{product.originalPrice.toLocaleString('vi-VN')}đ</span>
                                )}
                            </div>
                            <button className="w-full mt-2 py-2.5 rounded-lg border border-[#276515]/20 text-[#276515] font-bold text-sm group-hover:bg-[#276515] group-hover:text-white transition-all">
                                Xem chi tiết
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
