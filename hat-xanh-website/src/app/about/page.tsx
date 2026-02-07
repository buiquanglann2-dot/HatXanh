import Link from 'next/link';
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Về Hạt Xanh - Câu Chuyện Thương Hiệu',
    description: 'Hạt Xanh - Hành trình mang đến những sản phẩm hạt dinh dưỡng chất lượng cao nhất cho người Việt. Nguồn gốc rõ ràng, cam kết chất lượng.',
    alternates: {
        canonical: 'https://hatxanh.vn/about',
    },
};
import AboutHero from '@/components/about/AboutHero';
import MissionSection from '@/components/about/MissionSection';
import CoreValues from '@/components/about/CoreValues';
import Timeline from '@/components/about/Timeline';

export default function AboutPage() {
    return (
        <div className="max-w-[1440px] mx-auto overflow-hidden">
            <AboutHero />
            <MissionSection />
            <CoreValues />
            <Timeline />

            {/* CTA Section */}
            <section className="px-6 lg:px-12 py-20 text-center">
                <div className="bg-[#166534] rounded-[2rem] p-12 lg:p-20 text-white shadow-2xl relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-3xl lg:text-5xl font-black mb-6">Bạn đã sẵn sàng sống khỏe chưa?</h2>
                        <p className="text-lg lg:text-xl text-green-100 max-w-2xl mx-auto mb-8">
                            Ghé thăm cửa hàng của chúng tôi ngay hôm nay để chọn những sản phẩm tốt nhất cho gia đình bạn.
                        </p>
                        <Link href="/products" className="inline-block px-10 py-4 bg-white text-[#166534] rounded-xl font-bold text-lg hover:bg-green-50 transition-all transform hover:scale-105 shadow-lg">
                            Xem sản phẩm
                        </Link>
                    </div>
                    <div className="absolute -top-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                </div>
            </section>
        </div>
    );
}
