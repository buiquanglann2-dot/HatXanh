import React from 'react';

interface CartSummaryProps {
    subtotal: number;
}

export default function CartSummary({ subtotal }: CartSummaryProps) {
    return (
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-[#276515]/10 h-fit sticky top-24">
            <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-6 pb-4 border-b border-slate-100 dark:border-slate-700">Tóm tắt đơn hàng</h3>

            <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500">Tạm tính</span>
                    <span className="font-bold text-slate-900 dark:text-white">{subtotal.toLocaleString('vi-VN')}đ</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500">Phí vận chuyển</span>
                    <span className="text-slate-500 italic">Tính khi thanh toán</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500">Mã giảm giá</span>
                    <span className="text-[#276515] font-bold cursor-pointer hover:underline">Chọn mã</span>
                </div>
            </div>

            <div className="border-t border-slate-100 dark:border-slate-700 pt-4 mb-6">
                <div className="flex justify-between items-center">
                    <span className="font-bold text-lg text-slate-900 dark:text-white">Tổng cộng</span>
                    <span className="font-black text-xl text-[#276515]">{subtotal.toLocaleString('vi-VN')}đ</span>
                </div>
                <p className="text-xs text-slate-400 mt-2 text-right">(Đã bao gồm VAT nếu có)</p>
            </div>

            <button className="w-full py-4 bg-[#166534] text-white rounded-xl font-bold text-lg hover:bg-[#276515] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 mb-4">
                Tiến hành thanh toán
            </button>

            <div className="flex justify-center gap-3 opacity-60 grayscale hover:grayscale-0 transition-all">
                {/* Placeholder for payment icons */}
                <div className="w-10 h-6 bg-slate-200 rounded"></div>
                <div className="w-10 h-6 bg-slate-200 rounded"></div>
                <div className="w-10 h-6 bg-slate-200 rounded"></div>
                <div className="w-10 h-6 bg-slate-200 rounded"></div>
            </div>
        </div>
    );
}
