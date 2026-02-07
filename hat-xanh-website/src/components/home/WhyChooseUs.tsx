import React from 'react';

export default function WhyChooseUs() {
    const reasons = [
        { icon: 'nature', title: '100% Tự nhiên', desc: 'Sản phẩm hoàn toàn từ thiên nhiên, không biến đổi gen (Non-GMO).' },
        { icon: 'health_and_safety', title: 'Không chất bảo quản', desc: 'Quy trình sản xuất sạch, cam kết không dùng hóa chất bảo quản.' },
        { icon: 'package_2', title: 'Đóng gói chuẩn sạch', desc: 'Bao bì cao cấp giúp bảo quản hạt luôn giòn ngon và an toàn.' },
        { icon: 'local_shipping', title: 'Giao hàng thần tốc', desc: 'Hệ thống logictics tối ưu, đảm bảo giao nhanh trong 2-3 ngày.' },
    ];

    return (
        <section className="px-6 lg:px-12 py-20">
            <h3 className="text-3xl font-black text-center mb-16 dark:text-white">Tại sao chọn Hạt Xanh?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {reasons.map((item, index) => (
                    <div key={index} className="bg-white dark:bg-slate-800 p-8 rounded-2xl flex flex-col items-center text-center gap-4 shadow-sm border border-[#276515]/5 hover:shadow-lg transition-shadow">
                        <div className="w-14 h-14 rounded-full bg-[#276515]/10 flex items-center justify-center text-[#276515]">
                            <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                        </div>
                        <h5 className="text-lg font-bold dark:text-white">{item.title}</h5>
                        <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
