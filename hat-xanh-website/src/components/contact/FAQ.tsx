import React from 'react';

export default function FAQ() {
    const faqs = [
        { q: 'Phí vận chuyển được tính như thế nào?', a: 'Hạt Xanh miễn phí vận chuyển cho đơn hàng từ 500k. Với đơn hàng dưới 500k, phí ship đồng giá 30k toàn quốc.' },
        { q: 'Tôi có thể kiểm tra hàng trước khi thanh toán không?', a: 'Có! Bạn hoàn toàn được kiểm tra sản phẩm trước khi nhận hàng và thanh toán cho shipper.' },
        { q: 'Sản phẩm có nguồn gốc từ đâu?', a: 'Các loại hạt của Hạt Xanh được tuyển chọn từ các nông trại Organic tại Lâm Đồng, Bình Phước và nhập khẩu chính ngạch từ Úc, Mỹ.' },
    ];

    return (
        <section className="mt-20 max-w-3xl mx-auto">
            <h3 className="text-2xl font-black text-center text-slate-900 dark:text-white mb-8">Câu hỏi thường gặp</h3>
            <div className="space-y-4">
                {faqs.map((item, idx) => (
                    <div key={idx} className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                        <h4 className="font-bold text-lg text-[#276515] mb-2 flex items-center gap-2">
                            <span className="material-symbols-outlined">help</span> {item.q}
                        </h4>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed pl-8">{item.a}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
