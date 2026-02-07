import React from 'react';

export default function MissionSection() {
    return (
        <section className="px-6 lg:px-12 py-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 w-full relative">
                <div className="absolute top-4 left-4 w-full h-full border-2 border-[#276515] rounded-[2rem] -z-10"></div>
                <div
                    className="w-full aspect-[4/3] rounded-[2rem] bg-center bg-cover shadow-2xl"
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCLr_vvri8wp6CHqwwQDkS9KitG2fEkOvJrnhhogiobvb7-6aTGxI5G0xAqLtW2nVM_2pbT1EEhY5cq72kb-WN-UuzpOtJI4otg7V0MtmuOMhzfwP-5fMWPQg_80XA019ybSdAicTzxJ3AQaIhzr_OCe6cmF6QgoJyt443FqMPHwZELPfJpzyXWdcvFJ2arOzTEYTSg2XjmXQGHGWJT7mBpgI0GWijZiMoBZ94aj1JcXzuuBvGd5rfIkCZvUm0vhZudbb-QAPZaRJw')" }}
                ></div>
            </div>
            <div className="flex-1 space-y-6">
                <span className="text-[#276515] font-bold text-sm bg-[#276515]/10 px-4 py-1.5 rounded-full uppercase tracking-widest">Sứ mệnh của chúng tôi</span>
                <h2 className="text-3xl lg:text-5xl font-black text-slate-900 dark:text-white leading-tight">
                    Sạch - Tự Nhiên - <br className="hidden lg:block" /> Tận Tâm
                </h2>
                <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                    Tại Hạt Xanh, chúng tôi tin rằng sức khỏe bắt nguồn từ những điều thuần khiết nhất. Mỗi hạt giống được gieo trồng đều mang theo tâm huyết của người nông dân và cam kết về một lối sống lành mạnh.
                </p>
                <ul className="space-y-4 pt-4">
                    {[
                        'Tuyển chọn 100% nguyên liệu từ nông trại Organic.',
                        'Quy trình chế biến giữ trọn dưỡng chất tự nhiên.',
                        'Lan tỏa giá trị nông sản Việt ra thế giới.'
                    ].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-slate-700 dark:text-slate-200 font-medium">
                            <span className="bg-[#276515] text-white rounded-full p-1 flex items-center justify-center w-6 h-6">
                                <span className="material-symbols-outlined text-sm">check</span>
                            </span>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
