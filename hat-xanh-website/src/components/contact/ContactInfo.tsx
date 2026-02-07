import React from 'react';

export default function ContactInfo() {
    return (
        <div className="bg-white dark:bg-slate-800 p-8 lg:p-12 rounded-[2rem] shadow-sm border border-[#276515]/5 h-full">
            <h2 className="text-2xl lg:text-3xl font-black text-slate-900 dark:text-white mb-2">Thông tin liên hệ</h2>
            <p className="text-slate-500 mb-8">Chúng tôi luôn sẵn sàng hỗ trợ bạn mọi lúc.</p>

            <div className="space-y-8">
                <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-[#276515]/10 flex items-center justify-center text-[#276515] group-hover:bg-[#276515] group-hover:text-white transition-all shrink-0">
                        <span className="material-symbols-outlined text-2xl">location_on</span>
                    </div>
                    <div>
                        <h6 className="font-bold text-slate-900 dark:text-white mb-1">Địa chỉ</h6>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            123 Đường Số 7, Phường Thảo Điền,<br />Quận 2, TP. Hồ Chí Minh
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-[#276515]/10 flex items-center justify-center text-[#276515] group-hover:bg-[#276515] group-hover:text-white transition-all shrink-0">
                        <span className="material-symbols-outlined text-2xl">call</span>
                    </div>
                    <div>
                        <h6 className="font-bold text-slate-900 dark:text-white mb-1">Hotline</h6>
                        <p className="text-slate-500 text-sm">0987.654.321</p>
                        <p className="text-slate-400 text-xs mt-1">Thứ 2 - CN: 8:00 - 21:00</p>
                    </div>
                </div>

                <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-[#276515]/10 flex items-center justify-center text-[#276515] group-hover:bg-[#276515] group-hover:text-white transition-all shrink-0">
                        <span className="material-symbols-outlined text-2xl">mail</span>
                    </div>
                    <div>
                        <h6 className="font-bold text-slate-900 dark:text-white mb-1">Email</h6>
                        <p className="text-slate-500 text-sm">hello@hatxanh.com</p>
                        <p className="text-slate-500 text-sm">support@hatxanh.com</p>
                    </div>
                </div>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-700">
                <h6 className="font-bold text-slate-900 dark:text-white mb-4 text-sm uppercase tracking-wider">Mạng xã hội</h6>
                <div className="flex gap-4">
                    {['box', 'eco', 'spa', 'public'].map((icon, idx) => (
                        <a key={idx} href="#" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-[#276515] hover:text-white transition-all transform hover:scale-110">
                            <span className="material-symbols-outlined text-xl">{icon}</span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
