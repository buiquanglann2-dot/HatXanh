import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/data/site-config';
import { Container } from '@/components/common/Container';
import { HiLocationMarker, HiPhone, HiMail } from 'react-icons/hi';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'; // Assuming react-icons/fa is available or use Hi

export const Footer = () => {
    return (
        <footer className="bg-neutral-900 text-neutral-300 pt-16 pb-8 border-t border-neutral-800">
            <Container>
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-8">
                    {/* Brand & Newsletter */}
                    <div className="lg:col-span-1 space-y-6">
                        <div>
                            <h3 className="text-2xl font-display font-bold text-white mb-2">{siteConfig.name}</h3>
                            <p className="text-sm text-neutral-400 leading-relaxed">
                                {siteConfig.description} Mang hương vị Tây Nguyên nguyên bản đến mọi nhà.
                            </p>
                        </div>

                        <div className="pt-4">
                            <h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-3">Đăng ký nhận tin</h4>
                            <form className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="Email của bạn..."
                                    className="bg-neutral-800 border-none rounded-lg px-3 py-2 text-sm text-white focus:ring-1 focus:ring-primary-500 w-full placeholder:text-neutral-500"
                                />
                                <button className="bg-primary-600 hover:bg-primary-700 text-white rounded-lg px-4 py-2 text-sm transition-colors">
                                    →
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Products Links */}
                    <div className="lg:col-span-1 lg:pl-8">
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Sản phẩm</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/san-pham" className="hover:text-primary-400 transition-colors block py-0.5">Tất cả sản phẩm</Link></li>
                            <li><Link href="/san-pham?category=hat-dieu" className="hover:text-primary-400 transition-colors block py-0.5">Hạt điều rang củi</Link></li>
                            <li><Link href="/san-pham?category=trai-cay-say" className="hover:text-primary-400 transition-colors block py-0.5">Trái cây sấy dẻo</Link></li>
                            <li><Link href="/san-pham?category=ca-phe" className="hover:text-primary-400 transition-colors block py-0.5">Cà phê nguyên chất</Link></li>
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div className="lg:col-span-1">
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Hỗ trợ khách hàng</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/chinh-sach" className="hover:text-primary-400 transition-colors block py-0.5">Chính sách vận chuyển</Link></li>
                            <li><Link href="/chinh-sach" className="hover:text-primary-400 transition-colors block py-0.5">Chính sách đổi trả 7 ngày</Link></li>
                            <li><Link href="/lien-he" className="hover:text-primary-400 transition-colors block py-0.5">Liên hệ hợp tác</Link></li>
                            <li><Link href="/chinh-sach" className="hover:text-primary-400 transition-colors block py-0.5">Bảo mật thông tin</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="lg:col-span-1">
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Liên hệ</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start">
                                <HiLocationMarker className="mr-3 h-5 w-5 text-primary-500 flex-shrink-0 mt-0.5" />
                                <span>{siteConfig.contact.address}</span>
                            </li>
                            <li className="flex items-center">
                                <HiPhone className="mr-3 h-5 w-5 text-primary-500 flex-shrink-0" />
                                <span>{siteConfig.contact.phone}</span>
                            </li>
                            <li className="flex items-center">
                                <HiMail className="mr-3 h-5 w-5 text-primary-500 flex-shrink-0" />
                                <span>{siteConfig.contact.email}</span>
                            </li>
                        </ul>

                        <div className="mt-8 flex gap-4">
                            {/* Social Placeholders */}
                            <a href="#" className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-primary-600 transition-colors text-white">F</a>
                            <a href="#" className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-primary-600 transition-colors text-white">Y</a>
                            <a href="#" className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-primary-600 transition-colors text-white">I</a>
                        </div>
                    </div>
                </div>

                <div className="mt-16 border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
                    <p>© {new Date().getFullYear()} {siteConfig.name}. Designed with passion.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white transition-colors">Điều khoản</Link>
                        <Link href="#" className="hover:text-white transition-colors">Bảo mật</Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
};
