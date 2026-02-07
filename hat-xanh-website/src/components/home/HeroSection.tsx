import Link from 'next/link';
import React from 'react';

export default function HeroSection() {
    return (
        <section className="flex flex-col lg:flex-row items-center gap-12 px-6 lg:px-12 py-16 lg:py-24 overflow-hidden relative">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F0FDF4] -z-10 rounded-l-[100px] hidden lg:block"></div>

            <div className="flex-1 space-y-8 animate-fade-in-up">
                <div className="space-y-4">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-[#276515]/10 text-[#276515] text-xs font-bold uppercase tracking-widest animate-bounce-slow">Premium Quality Nuts</span>
                    <h2 className="text-[#131712] dark:text-white text-5xl lg:text-[64px] font-black leading-[1.1] tracking-tight">
                        Hạt dinh dưỡng sạch – Tốt cho sức khỏe mỗi ngày
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 text-lg lg:text-xl leading-relaxed max-w-xl">
                        Hạt Xanh cung cấp các loại hạt dinh dưỡng cao cấp, 100% tự nhiên, không chất bảo quản, mang lại nguồn năng lượng sạch cho gia đình bạn.
                    </p>
                </div>
                <div className="flex flex-wrap gap-4">
                    <Link href="/products" className="px-8 py-4 bg-[#166534] text-white rounded-xl font-bold text-lg hover:bg-[#276515] transition-all shadow-xl shadow-[#166534]/20 flex items-center gap-2 hover:translate-x-1">
                        Mua ngay <span className="material-symbols-outlined">arrow_forward</span>
                    </Link>
                    <Link href="/products?category=combo" className="px-8 py-4 bg-white dark:bg-slate-800 border-2 border-[#276515]/20 text-[#276515] dark:text-green-400 rounded-xl font-bold text-lg hover:bg-[#276515]/5 transition-all">
                        Xem combo
                    </Link>
                </div>
            </div>
            <div className="flex-1 relative w-full">
                <div className="absolute inset-0 bg-[#276515]/10 rounded-full blur-3xl -z-10 scale-90 animate-pulse-slow"></div>
                <div className="w-full aspect-square bg-center bg-no-repeat bg-cover rounded-[2rem] overflow-hidden shadow-2xl transform hover:rotate-1 transition-transform duration-500" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBxUhJYP_TBdQSRJNavf4uEPfrqb-9dwQMQX7oBBK8DF4q0gUllk6aALikgv8zvk-bwwacanl8qPT5NmgX0i7S-yl_BoyYqmKwm1upd55h0nUapDA59R_vxfCI442xlubeedkIA9W4NJBcvTx0G4eGcOl2lHRZBC4oE_u9MrgrivJCjJs9VD7g5zhw6J2R-joiB-jZAAAeIV8yRlKGKw0P5Inj-1HpF5X1d_yG7j7D2JPaR4yoUOttyxllGAZiUFIGgG6V8J7DjPN8')" }}>
                </div>
            </div>
        </section>
    );
}
