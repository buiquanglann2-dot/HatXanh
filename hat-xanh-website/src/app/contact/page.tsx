import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Liên Hệ - Hạt Xanh',
    description: 'Liên hệ với Hạt Xanh để được tư vấn và đặt hàng hạt dinh dưỡng cao cấp. Giao hàng toàn quốc, hỗ trợ 24/7.',
    alternates: {
        canonical: 'https://hatxanh.vn/contact',
    },
};
import ContactInfo from '@/components/contact/ContactInfo';
import ContactForm from '@/components/contact/ContactForm';
import FAQ from '@/components/contact/FAQ';

export default function ContactPage() {
    return (
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-12">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-16">
                <h1 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-4">Liên hệ Hạt Xanh</h1>
                <p className="text-lg text-slate-600 dark:text-slate-400">
                    Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn. Đừng ngần ngại kết nối với chúng tôi.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                <ContactInfo />
                <ContactForm />
            </div>

            <FAQ />

            {/* Map Placeholder */}
            <div className="mt-20 h-[400px] w-full bg-slate-100 dark:bg-slate-800 rounded-[2rem] overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.14324505324!2d106.7351683!3d10.8003183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752763f23c2c07%3A0x67399589d38c642a!2zMTIzIMSQxrDhu51uZyBT4buRIDcsIFRo4bqjbyDEkGnhu4WlLCBRdeG6rW4gMiwgVGjDoG5oIHBo4buRIHjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1626081234567!5m2!1svi!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
}
