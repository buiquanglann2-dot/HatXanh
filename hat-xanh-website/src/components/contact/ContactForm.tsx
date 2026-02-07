import React from 'react';

export default function ContactForm() {
    return (
        <div className="bg-white dark:bg-slate-800 p-8 lg:p-12 rounded-[2rem] shadow-xl shadow-[#276515]/5 border border-[#276515]/5 h-full relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#276515]/5 rounded-bl-full -z-10"></div>

            <h2 className="text-2xl lg:text-3xl font-black text-slate-900 dark:text-white mb-2">Gửi tin nhắn</h2>
            <p className="text-slate-500 mb-8">Để lại thông tin, chúng tôi sẽ liên hệ lại ngay.</p>

            <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Họ và tên</label>
                        <input type="text" placeholder="Nguyễn Văn A" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#276515] outline-none transition-all" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Email</label>
                        <input type="email" placeholder="example@gmail.com" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#276515] outline-none transition-all" />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Số điện thoại</label>
                    <input type="tel" placeholder="09xxxxxxxxx" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#276515] outline-none transition-all" />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Nội dung</label>
                    <textarea rows={4} placeholder="Nhập nội dung cần hỗ trợ..." className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#276515] outline-none transition-all resize-none"></textarea>
                </div>

                <button type="button" className="w-full py-4 bg-[#166534] text-white rounded-xl font-bold text-lg hover:bg-[#276515] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined">send</span> Gửi ngay
                </button>
            </form>
        </div>
    );
}
