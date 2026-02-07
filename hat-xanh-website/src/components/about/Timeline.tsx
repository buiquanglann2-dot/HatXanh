import React from 'react';

export default function Timeline() {
    const years = [
        { year: '2020', title: 'Khởi đầu', desc: 'Hạt Xanh được thành lập với cửa hàng nhỏ tại Đà Lạt.' },
        { year: '2021', title: 'Mở rộng', desc: 'Hợp tác với 10 nông trại lớn tại Lâm Đồng và Bình Phước.' },
        { year: '2022', title: 'Trực tuyến', desc: 'Ra mắt website thương mại điện tử phục vụ khách hàng toàn quốc.' },
        { year: '2023', title: 'Xuất khẩu', desc: 'Lô hàng đầu tiên xuất khẩu sang thị trường Đông Nam Á.' },
    ];

    return (
        <section className="px-6 lg:px-12 py-20">
            <h2 className="text-3xl lg:text-4xl font-black text-center text-slate-900 dark:text-white mb-16">Hành Trình Phát Triển</h2>
            <div className="relative">
                {/* Line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#276515]/20 hidden md:block transform -translate-x-1/2"></div>

                <div className="space-y-12 relative">
                    {years.map((item, index) => (
                        <div key={item.year} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                            <div className={`flex-1 w-full md:text-right ${index % 2 !== 0 ? 'md:text-left' : ''}`}>
                                <h3 className="text-4xl font-black text-[#276515]/20 mb-2">{item.year}</h3>
                                <h4 className="text-xl font-bold dark:text-white">{item.title}</h4>
                                <p className="text-slate-500 text-sm">{item.desc}</p>
                            </div>
                            <div className="w-12 h-12 rounded-full border-4 border-white bg-[#276515] shrink-0 z-10 shadow-lg hidden md:block"></div>
                            <div className="flex-1 w-full hidden md:block"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
