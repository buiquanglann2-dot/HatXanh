import React from 'react';

export default function CoreValues() {
    const values = [
        {
            title: 'Chất lượng',
            icon: 'verified',
            desc: 'Cam kết 100% sản phẩm đạt chuẩn cao cấp, không pha trộn.'
        },
        {
            title: 'Sức khỏe',
            icon: 'monitor_heart',
            desc: 'Hoàn toàn tự nhiên, không chất bảo quản, tốt cho tim mạch.'
        },
        {
            title: 'Cộng đồng',
            icon: 'groups',
            desc: 'Đồng hành cùng nông dân Việt Nam, xây dựng nền nông nghiệp bền vững.'
        }
    ];

    return (
        <section className="px-6 lg:px-12 py-20 bg-white/50 dark:bg-slate-900/30">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mb-4">Giá Trị Cốt Lõi</h2>
                <p className="text-slate-600 dark:text-slate-400">Những nguyên tắc vàng giúp Hạt Xanh luôn giữ trọn niềm tin nơi khách hàng.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {values.map((item) => (
                    <div key={item.title} className="bg-white dark:bg-slate-800 p-10 rounded-2xl shadow-sm border border-[#276515]/5 hover:border-[#276515] transition-all hover:-translate-y-2 group">
                        <div className="w-16 h-16 bg-[#276515] rounded-2xl flex items-center justify-center text-white mb-6 transform group-hover:rotate-12 transition-transform">
                            <span className="material-symbols-outlined text-4xl">{item.icon}</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3 dark:text-white">{item.title}</h3>
                        <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
