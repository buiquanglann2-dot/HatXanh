import React from 'react';
import { Container } from '@/components/common/Container';
import { Metadata } from 'next';
import { siteConfig } from '@/data/site-config';
import { Button } from '@/components/common/Button';
import { GlassCard } from '@/components/common/GlassCard';
import { HiLocationMarker, HiPhone, HiMail } from 'react-icons/hi';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

export const metadata: Metadata = {
    title: 'Liên hệ | Hạt Xanh',
    description: 'Kết nối với Hạt Xanh. Chúng tôi luôn sẵn sàng lắng nghe câu chuyện của bạn.',
};

export default function ContactPage() {
    return (
        <div className="bg-secondary-50 min-h-screen pb-20">
            {/* Header / Intro */}
            <div className="bg-primary-900 text-white py-16 md:py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <Container className="relative z-10 text-center">
                    <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Kết Nối Với Hạt Xanh</h1>
                    <p className="text-primary-100 text-lg max-w-2xl mx-auto font-serif">
                        Dù bạn là khách hàng, đối tác hay chỉ đơn giản là người yêu nông sản sạch, chúng tôi luôn mong muốn được trò chuyện cùng bạn.
                    </p>
                </Container>
            </div>

            <Container className="-mt-10 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    {/* Left: Contact Info (2 cols) */}
                    <div className="lg:col-span-2 space-y-6">
                        <GlassCard className="p-8 space-y-6 bg-white/80 backdrop-blur-md">
                            <h3 className="font-display text-2xl font-bold text-primary-800">Thông Tin Liên Hệ</h3>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0 mt-1">
                                        <HiLocationMarker className="w-5 h-5" />
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-sm font-bold text-neutral-500 uppercase tracking-wide">Địa chỉ</p>
                                        <p className="text-neutral-800 font-medium mt-1">{siteConfig.contact.address}</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-10 h-10 rounded-full bg-secondary-100 text-secondary-600 flex items-center justify-center flex-shrink-0 mt-1">
                                        <HiPhone className="w-5 h-5" />
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-sm font-bold text-neutral-500 uppercase tracking-wide">Hotline</p>
                                        <p className="text-neutral-800 font-medium mt-1">{siteConfig.contact.phone}</p>
                                        <p className="text-xs text-neutral-500 mt-1">Thứ 2 - Thứ 7 (8:00 - 17:30)</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
                                        <HiMail className="w-5 h-5" />
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-sm font-bold text-neutral-500 uppercase tracking-wide">Email</p>
                                        <p className="text-neutral-800 font-medium mt-1">{siteConfig.contact.email}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-neutral-100">
                                <p className="text-sm font-bold text-neutral-500 uppercase tracking-wide mb-3">Mạng xã hội</p>
                                <div className="flex gap-3">
                                    <Button size="sm" variant="ghost" className="bg-neutral-100 hover:bg-primary-100 hover:text-primary-600 rounded-full w-10 h-10 p-0">
                                        <FaFacebook className="w-5 h-5" />
                                    </Button>
                                    <Button size="sm" variant="ghost" className="bg-neutral-100 hover:bg-secondary-100 hover:text-secondary-600 rounded-full w-10 h-10 p-0">
                                        <FaInstagram className="w-5 h-5" />
                                    </Button>
                                    <Button size="sm" variant="ghost" className="bg-neutral-100 hover:bg-red-100 hover:text-red-600 rounded-full w-10 h-10 p-0">
                                        <FaYoutube className="w-5 h-5" />
                                    </Button>
                                </div>
                            </div>
                        </GlassCard>
                    </div>

                    {/* Right: Contact Form (3 cols) */}
                    <div className="lg:col-span-3">
                        <div className="bg-white rounded-2xl shadow-soft p-8 md:p-10 h-full">
                            <h2 className="font-display text-2xl font-bold text-neutral-900 mb-6">Gửi tin nhắn cho chúng tôi</h2>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">Họ và tên</label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="w-full rounded-lg border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 py-3"
                                            placeholder="Nguyễn Văn A"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="w-full rounded-lg border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 py-3"
                                            placeholder="email@example.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="topic" className="block text-sm font-medium text-neutral-700 mb-2">Chủ đề</label>
                                    <select
                                        id="topic"
                                        className="w-full rounded-lg border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 py-3"
                                    >
                                        <option>Tư vấn sản phẩm</option>
                                        <option>Đơn hàng & Vận chuyển</option>
                                        <option>Hợp tác kinh doanh</option>
                                        <option>Khác</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">Nội dung tin nhắn</label>
                                    <textarea
                                        id="message"
                                        rows={5}
                                        className="w-full rounded-lg border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 py-3"
                                        placeholder="Chúng tôi có thể giúp gì cho bạn?"
                                    />
                                </div>

                                <div className="pt-2">
                                    <Button type="submit" size="lg" variant="primary" className="w-full md:w-auto shadow-glow-md px-8">
                                        Gửi tin nhắn
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mt-20 max-w-3xl mx-auto">
                    <h2 className="font-display text-3xl font-bold text-center text-neutral-900 mb-10">Câu hỏi thường gặp</h2>
                    <div className="space-y-4">
                        {[
                            { q: "Hạt Xanh có cửa hàng trực tiếp không?", a: "Hiện tại chúng tôi chủ yếu bán online để đảm bảo giá tốt nhất. Tuy nhiên bạn có thể ghé văn phòng tại Buôn Ma Thuột để trải nghiệm sản phẩm." },
                            { q: "Phí vận chuyển được tính như thế nào?", a: "Miễn phí vận chuyển cho đơn hàng từ 500k. Các đơn nhỏ hơn phí ship đồng giá 30k toàn quốc." },
                            { q: "Sản phẩm có giấy chứng nhận an toàn thực phẩm không?", a: "Tất cả sản phẩm của Hạt Xanh đều có giấy chứng nhận VSATTP và một số dòng đạt chuẩn Organic/VietGAP." }
                        ].map((faq, idx) => (
                            <details key={idx} className="group bg-white rounded-xl border border-neutral-200 open:border-primary-200 open:ring-1 open:ring-primary-200 transition-all">
                                <summary className="flex cursor-pointer items-center justify-between p-6 list-none font-medium text-neutral-900 group-hover:text-primary-700">
                                    {faq.q}
                                    <span className="transition group-open:rotate-180">
                                        <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                    </span>
                                </summary>
                                <div className="border-t border-neutral-100 p-6 pt-0 text-neutral-600 leading-relaxed animate-fade-in">
                                    <p className="mt-4">{faq.a}</p>
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
}
