import Link from 'next/link';
import React from 'react';

export default function EmptyCart() {
    return (
        <div className="flex flex-col items-center justify-center py-20 px-6 text-center">
            <div className="w-40 h-40 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-6xl text-slate-300">shopping_cart_off</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Giỏ hàng của bạn đang trống</h2>
            <p className="text-slate-500 mb-8 max-w-md">Có vẻ như bạn chưa chọn được sản phẩm nào. Hãy dạo một vòng cửa hàng để tìm những món ngon nhé!</p>
            <Link href="/products" className="px-8 py-3 bg-[#166534] text-white rounded-xl font-bold hover:bg-[#276515] transition-all shadow-lg hover:translate-y-[-2px]">
                Tiếp tục mua sắm
            </Link>
        </div>
    );
}
