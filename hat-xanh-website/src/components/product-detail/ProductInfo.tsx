"use client";
import React, { useState } from 'react';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';

interface ProductInfoProps {
    product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
    const [quantity, setQuantity] = useState(1);
    const [weight, setWeight] = useState('500g');
    const { addItem } = useCart();

    const handleAddToCart = () => {
        addItem(product, quantity);
        alert(`Đã thêm ${quantity} sản phẩm vào giỏ hàng!`);
    };

    return (
        <div className="space-y-6">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-sm text-slate-500">
                <span>Trang chủ</span>
                <span className="material-symbols-outlined text-xs">chevron_right</span>
                <span>Sản phẩm</span>
                <span className="material-symbols-outlined text-xs">chevron_right</span>
                <span className="text-[#276515] font-semibold">{product.name}</span>
            </div>

            <h1 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white leading-tight">{product.name}</h1>

            <div className="flex items-center gap-4">
                <div className="flex items-center text-yellow-400 gap-1">
                    {[...Array(5)].map((_, i) => (
                        <span key={i} className="material-symbols-outlined fill-current text-lg">star</span>
                    ))}
                </div>
                <span className="text-slate-500 text-sm">({product.reviews} đánh giá)</span>
                <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                <span className="text-green-600 text-sm font-bold flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">check_circle</span> Còn hàng
                </span>
            </div>

            <div className="flex items-end gap-3 pb-6 border-b border-slate-100 dark:border-slate-700">
                <span className="text-4xl font-black text-[#276515]">{product.price.toLocaleString('vi-VN')}đ</span>
                {product.originalPrice && (
                    <span className="text-xl text-slate-400 line-through mb-1">{product.originalPrice.toLocaleString('vi-VN')}đ</span>
                )}
                <span className="bg-red-50 text-red-500 text-xs font-bold px-2 py-1 rounded mb-2">Tiết kiệm {product.salePercentage}%</span>
            </div>

            <div className="space-y-4">
                <div className="flex items-start gap-2 text-slate-600 dark:text-slate-300 text-sm">
                    <span className="material-symbols-outlined text-[#276515] text-lg">check</span>
                    <span>Hạt to đều, giòn tan, không hôi dầu.</span>
                </div>
                <div className="flex items-start gap-2 text-slate-600 dark:text-slate-300 text-sm">
                    <span className="material-symbols-outlined text-[#276515] text-lg">check</span>
                    <span>Nguồn gốc xuất xứ rõ ràng, đảm bảo VSATTP.</span>
                </div>
                <div className="flex items-start gap-2 text-slate-600 dark:text-slate-300 text-sm">
                    <span className="material-symbols-outlined text-[#276515] text-lg">check</span>
                    <span>Đổi trả miễn phí trong vòng 7 ngày nếu lỗi.</span>
                </div>
            </div>

            <div className="space-y-4 pt-4">
                <div>
                    <span className="block text-sm font-bold text-slate-900 dark:text-white mb-2">Trọng lượng:</span>
                    <div className="flex gap-3">
                        {['250g', '500g', '1kg'].map((w) => (
                            <button
                                key={w}
                                onClick={() => setWeight(w)}
                                className={`px-4 py-2 rounded-lg border-2 font-bold text-sm transition-all ${weight === w ? 'border-[#276515] text-[#276515] bg-[#276515]/5' : 'border-slate-200 text-slate-500 hover:border-[#276515]/50'}`}
                            >
                                {w}
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <span className="block text-sm font-bold text-slate-900 dark:text-white mb-2">Số lượng:</span>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center border border-slate-200 dark:border-slate-600 rounded-lg h-12 w-fit">
                            <button
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                className="w-12 h-full flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                            >-</button>
                            <input type="text" value={quantity} readOnly className="w-12 text-center font-bold bg-transparent border-none focus:ring-0 p-0" />
                            <button
                                onClick={() => setQuantity(quantity + 1)}
                                className="w-12 h-full flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                            >+</button>
                        </div>
                        <span className="text-xs text-slate-400">1,234 sản phẩm có sẵn</span>
                    </div>
                </div>
            </div>

            <div className="flex gap-4 pt-4">
                <button
                    onClick={handleAddToCart}
                    className="flex-1 py-4 border-2 border-[#276515] text-[#276515] rounded-xl font-bold text-lg hover:bg-[#276515] hover:text-white transition-all flex items-center justify-center gap-2"
                >
                    <span className="material-symbols-outlined">add_shopping_cart</span> Thêm vào giỏ
                </button>
                <button className="flex-1 py-4 bg-[#166534] text-white rounded-xl font-bold text-lg hover:bg-[#276515] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                    Mua ngay
                </button>
            </div>

            <div className="flex gap-6 pt-4 border-t border-slate-100 dark:border-slate-700">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-600 dark:text-slate-300">
                    <span className="material-symbols-outlined text-[#276515]">local_shipping</span> Miễn phí vận chuyển
                </div>
                <div className="flex items-center gap-2 text-sm font-bold text-slate-600 dark:text-slate-300">
                    <span className="material-symbols-outlined text-[#276515]">verified_user</span> Bảo hành uy tín
                </div>
            </div>
        </div>
    );
}
