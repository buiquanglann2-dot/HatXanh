import React from 'react';
import { Container } from '@/components/common/Container';
import { HiStar } from 'react-icons/hi';

const testimonials = [
    {
        id: 1,
        name: 'Nguyễn Thị Lan',
        role: 'Khách hàng thân thiết',
        avatar: '👩‍💼',
        rating: 5,
        content: 'Hạt điều của Hạt Xanh thật sự khác biệt! Vị rang củi truyền thống, giòn tan và thơm bùi. Gia đình tôi rất thích.',
        location: 'Hà Nội',
    },
    {
        id: 2,
        name: 'Trần Văn Minh',
        role: 'Chủ quán cafe',
        avatar: '👨‍💼',
        rating: 5,
        content: 'Cà phê Buôn Ma Thuột từ Hạt Xanh có hương vị đậm đà, nguyên chất. Khách hàng quán tôi đều khen ngợi.',
        location: 'TP. Hồ Chí Minh',
    },
    {
        id: 3,
        name: 'Lê Thị Hương',
        role: 'Mẹ bỉm sữa',
        avatar: '👩‍🍼',
        rating: 5,
        content: 'Trái cây sấy dẻo rất tiện cho bé ăn vặt. Không chất bảo quản, tự nhiên 100%. Tôi rất yên tâm.',
        location: 'Đà Nẵng',
    },
];

export const Testimonials = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <Container>
                <div className="text-center mb-12">
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                        Khách Hàng Nói Gì Về Chúng Tôi
                    </h2>
                    <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
                        Niềm tin của khách hàng là động lực lớn nhất để Hạt Xanh không ngừng cải thiện chất lượng
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="bg-neutral-50 rounded-2xl p-8 border border-neutral-100 hover:shadow-soft transition-all duration-300 hover:-translate-y-1"
                        >
                            {/* Rating Stars */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <HiStar key={i} className="w-5 h-5 text-secondary-500 fill-current" />
                                ))}
                            </div>

                            {/* Content */}
                            <p className="text-neutral-700 leading-relaxed mb-6 font-serif italic">
                                &quot;{testimonial.content}&quot;
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4 pt-4 border-t border-neutral-200">
                                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-2xl">
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <p className="font-bold text-neutral-900">{testimonial.name}</p>
                                    <p className="text-sm text-neutral-500">{testimonial.role} • {testimonial.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Trust Badge */}
                <div className="mt-12 text-center">
                    <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 px-6 py-3 rounded-full border border-primary-200">
                        <HiStar className="w-5 h-5 fill-current" />
                        <span className="font-bold">4.9/5</span>
                        <span className="text-neutral-600">từ 500+ đánh giá</span>
                    </div>
                </div>
            </Container>
        </section>
    );
};
