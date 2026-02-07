import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-[#152012] border-t border-[#276515]/10 pt-20 pb-10">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Column 1 */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="bg-[#276515] p-1 rounded-lg">
                                <span className="material-symbols-outlined text-white text-xl">eco</span>
                            </div>
                            <h4 className="text-[#276515] text-xl font-black tracking-tight">Hạt Xanh</h4>
                        </div>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            Hạt Xanh tự hào là đơn vị cung cấp các dòng hạt dinh dưỡng cao cấp nhất, mang lại giá trị sức khỏe bền vững cho cộng đồng.
                        </p>
                        <div className="flex gap-4">
                            {['social_leaderboard', 'share', 'video_library'].map((icon) => (
                                <a key={icon} href="#" className="w-10 h-10 rounded-full border border-[#276515]/20 flex items-center justify-center text-[#276515] hover:bg-[#276515] hover:text-white transition-all transform hover:scale-110">
                                    <span className="material-symbols-outlined text-xl">{icon}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                    {/* Column 2 */}
                    <div className="space-y-6">
                        <h5 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs">Liên hệ</h5>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-sm text-slate-500">
                                <span className="material-symbols-outlined text-[#276515] text-sm mt-0.5">location_on</span>
                                <span>123 Đường Số 7, P. Thảo Điền, Quận 2, TP. Hồ Chí Minh</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-slate-500">
                                <span className="material-symbols-outlined text-[#276515] text-sm">call</span>
                                <span>Hotline: 0987.654.321</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-slate-500">
                                <span className="material-symbols-outlined text-[#276515] text-sm">mail</span>
                                <span>hello@hatxanh.com</span>
                            </li>
                        </ul>
                    </div>
                    {/* Column 3 */}
                    <div className="space-y-6">
                        <h5 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs">Chính sách</h5>
                        <ul className="space-y-3">
                            {['Hướng dẫn mua hàng', 'Chính sách vận chuyển', 'Chính sách bảo mật', 'Chính sách đổi trả'].map((item) => (
                                <li key={item}><a href="#" className="text-sm text-slate-500 hover:text-[#276515] transition-colors hover:translate-x-1 inline-block">{item}</a></li>
                            ))}
                        </ul>
                    </div>
                    {/* Column 4 */}
                    <div className="space-y-6">
                        <h5 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs">Đăng ký nhận tin</h5>
                        <p className="text-sm text-slate-500">Nhận ưu đãi 10% cho đơn hàng đầu tiên.</p>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Email của bạn"
                                className="w-full h-12 rounded-lg border-[#276515]/10 bg-slate-50 dark:bg-slate-800 px-4 text-sm focus:ring-[#276515] focus:border-[#276515] transition-all"
                            />
                            <button className="absolute right-1 top-1 h-10 w-10 flex items-center justify-center bg-[#276515] text-white rounded-md hover:bg-[#166534] transition-colors">
                                <span className="material-symbols-outlined">send</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="border-t border-[#276515]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
                    <p>© 2024 Hạt Xanh. Bảo lưu mọi quyền.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-[#276515]">Điều khoản dịch vụ</a>
                        <a href="#" className="hover:text-[#276515]">Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
