import Link from 'next/link';
import React from 'react';
import { Product } from '@/data/products';

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700 hover:-translate-y-1 flex flex-col h-full">
            <div className="relative aspect-square overflow-hidden bg-gray-100">
                <div
                    className="w-full h-full bg-center bg-cover group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundImage: `url('${product.image}')` }}
                />
                {product.salePercentage && (
                    <span className="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded">
                        -{product.salePercentage}%
                    </span>
                )}
                {product.isHot && (
                    <span className="absolute top-3 right-3 bg-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded">
                        HOT
                    </span>
                )}
                <button className="absolute bottom-3 right-3 bg-[#276515] text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all shadow-lg hover:bg-[#166534]">
                    <span className="material-symbols-outlined text-sm">add_shopping_cart</span>
                </button>
            </div>
            <div className="p-4 flex flex-col gap-2 flex-1">
                <div className="flex-1">
                    <p className="text-xs text-[#276515] font-semibold mb-1 uppercase tracking-wider">{product.category}</p>
                    <h4 className="font-bold text-slate-800 dark:text-white text-base line-clamp-2 hover:text-[#276515] transition-colors cursor-pointer">
                        <Link href={`/products/${product.id}`}>{product.name}</Link>
                    </h4>
                </div>

                <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                        <span key={i} className={`material-symbols-outlined text-[14px] ${i < Math.round(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}>star</span>
                    ))}
                    <span className="text-xs text-slate-400 ml-1">({product.reviews})</span>
                </div>

                <div className="flex items-center justify-between mt-auto pt-2 border-t border-slate-100 dark:border-slate-700">
                    <div className="flex flex-col">
                        <span className="text-[#276515] text-lg font-black">{product.price.toLocaleString('vi-VN')}đ</span>
                        {product.originalPrice && (
                            <span className="text-slate-400 text-xs line-through">{product.originalPrice.toLocaleString('vi-VN')}đ</span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
