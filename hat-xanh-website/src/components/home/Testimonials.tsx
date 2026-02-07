import React from 'react';
import { testimonials } from '@/data/testimonials';

export default function Testimonials() {
    return (
        <section className="px-6 lg:px-12 py-20 bg-[#166534]/5 rounded-[2rem] mb-20">
            <div className="text-center mb-16">
                <h3 className="text-3xl font-black mb-4 dark:text-white">Khách hàng nói về chúng tôi</h3>
                <div className="flex justify-center gap-1 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                        <span key={i} className="material-symbols-outlined fill-current">star</span>
                    ))}
                </div>
                <p className="mt-2 text-slate-600 dark:text-slate-400 font-medium">4.9/5 dựa trên 2,500+ đánh giá</p>
            </div>
            <div className="flex gap-6 overflow-x-auto hide-scrollbar pb-8 px-4 snap-x">
                {testimonials.map((item) => (
                    <div key={item.id} className="min-w-[320px] md:min-w-[400px] bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm snap-center">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-14 h-14 rounded-full bg-center bg-cover ring-2 ring-[#276515]/20" style={{ backgroundImage: `url('${item.avatar}')` }}></div>
                            <div>
                                <h6 className="font-bold dark:text-white">{item.name}</h6>
                                <p className="text-xs text-slate-400">{item.role}</p>
                            </div>
                        </div>
                        <p className="text-slate-600 dark:text-slate-300 italic">{item.content}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
