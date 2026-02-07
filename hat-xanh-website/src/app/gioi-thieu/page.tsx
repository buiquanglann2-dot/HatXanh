import React from 'react';
import { Container } from '@/components/common/Container';
import { Metadata } from 'next';

import { Button } from '@/components/common/Button';
import { HiArrowRight } from 'react-icons/hi';

export const metadata: Metadata = {
    title: 'Câu chuyện Hạt Xanh | Từ Đất Đỏ Đến Trái Tim',
    description: 'Hành trình mang hương vị Tây Nguyên nguyên bản đến gia đình bạn. Chúng tôi kể câu chuyện về người nông dân, về đất đỏ bazan và những hạt mầm hạnh phúc.',
};

export default function AboutPage() {
    return (
        <div className="bg-neutral-50 pb-20">
            {/* 1. Hero Story */}
            <section className="relative overflow-hidden pt-16 pb-24 md:pt-24 md:pb-32">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 h-96 w-96 translate-x-1/3 -translate-y-1/2 rounded-full bg-secondary-100 blur-3xl opacity-50" />
                    <div className="absolute bottom-0 left-0 h-96 w-96 -translate-x-1/3 translate-y-1/2 rounded-full bg-primary-100 blur-3xl opacity-50" />
                </div>

                <Container className="relative text-center">
                    <span className="font-serif text-secondary-600 italic text-lg md:text-xl mb-4 block animate-fade-in">
                        Hành trình từ 2018
                    </span>
                    <h1 className="font-display text-5xl md:text-7xl font-bold text-neutral-900 mb-6 leading-tight animate-slide-up">
                        Từ Vùng Đất Đỏ <br />
                        <span className="text-secondary-500">Đến Trái Tim Bạn</span>
                    </h1>
                    <p className="max-w-2xl mx-auto font-serif text-lg md:text-xl text-neutral-600 leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
                        Chúng tôi không chỉ bán nông sản. Chúng tôi gói ghém nắng gió Tây Nguyên và sự tận tụy của người nông dân vào từng sản phẩm.
                    </p>
                </Container>
            </section>

            {/* 2. Origin Story (Image + Text Split) */}
            <section className="py-16 md:py-24">
                <Container>
                    <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
                        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-200">
                            {/* Placeholder for authentic farmer/farm image */}
                            <div className="absolute inset-0 bg-neutral-300 flex items-center justify-center text-neutral-500">
                                [Ảnh Nông Trại Tây Nguyên]
                            </div>
                        </div>
                        <div className="space-y-8">
                            <h2 className="font-display text-4xl font-bold text-primary-800">
                                Bắt đầu từ những hạt mầm
                            </h2>
                            <div className="font-serif text-lg text-neutral-700 space-y-6 leading-loose">
                                <p>
                                    Câu chuyện của Hạt Xanh bắt đầu từ những chuyến đi về Buôn Ma Thuột, nơi chúng tôi bị quyến rũ bởi mùi hương cafe ngào ngạt và màu đất đỏ bazan trù phú.
                                </p>
                                <p>
                                    Nhưng chúng tôi cũng trăn trở khi thấy nông sản Việt, dù chất lượng tuyệt hảo, vẫn chưa tìm được vị thế xứng đáng. Những người nông dân vẫn loay hoay với bài toán được mùa mất giá.
                                </p>
                                <p>
                                    Hạt Xanh ra đời với ước mơ giản dị: <strong>Kết nối trực tiếp nông sản sạch từ vườn đến bàn ăn</strong>, cắt giảm trung gian để nông dân có thu nhập tốt hơn và người dùng được thưởng thức hương vị nguyên bản nhất.
                                </p>
                            </div>
                            <Button variant="outline" size="lg" className="border-secondary-500 text-secondary-600 hover:bg-secondary-50 mt-4">
                                Xem các nông trại của chúng tôi
                            </Button>
                        </div>
                    </div>
                </Container>
            </section>

            {/* 3. Core Values (Clean Grid) */}
            <section className="py-20 bg-white border-y border-neutral-100">
                <Container>
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                            Giá Trị Của Chúng Tôi
                        </h2>
                        <p className="text-neutral-600">Những nguyên tắc bất di bất dịch tại Hạt Xanh</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Thuần Tự Nhiên",
                                desc: "Không hóa chất bảo quản, không hương liệu nhân tạo. Chỉ có hương vị thật.",
                                icon: "🌱",
                                color: "bg-primary-50 text-primary-700"
                            },
                            {
                                title: "Minh Bạch",
                                desc: "Rõ ràng về nguồn gốc, quy trình và giá cả. Bạn biết chính xác mình đang ăn gì.",
                                icon: "🔍",
                                color: "bg-secondary-50 text-secondary-700"
                            },
                            {
                                title: "Cộng Đồng",
                                desc: "Cam kết trích 5% lợi nhuận để hỗ trợ con em nông dân nghèo hiếu học.",
                                icon: "🤝",
                                color: "bg-neutral-100 text-neutral-700"
                            }
                        ].map((val, idx) => (
                            <div key={idx} className="p-8 rounded-2xl bg-neutral-50 border border-neutral-100 hover:shadow-soft transition-all duration-300">
                                <div className={`w-12 h-12 rounded-full ${val.color} flex items-center justify-center text-2xl mb-6`}>
                                    {val.icon}
                                </div>
                                <h3 className="font-display text-xl font-bold text-neutral-900 mb-3">{val.title}</h3>
                                <p className="text-neutral-600 leading-relaxed font-serif">{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* 4. Contact / Join Us CTAs */}
            <section className="py-24 text-center">
                <Container className="max-w-3xl">
                    <h2 className="font-display text-4xl font-bold text-neutral-900 mb-6">
                        Cùng Viết Tiếp Câu Chuyện Xanh
                    </h2>
                    <p className="text-lg text-neutral-600 mb-10">
                        Mỗi sản phẩm bạn mua là một sự ủng hộ cho nền nông nghiệp tử tế. Hãy cùng Hạt Xanh lan tỏa những điều tốt đẹp.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" variant="primary" className="shadow-glow-md">
                            Khám phá sản phẩm
                            <HiArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button size="lg" variant="outline">
                            Liên hệ hợp tác
                        </Button>
                    </div>
                </Container>
            </section>
        </div>
    );
}
