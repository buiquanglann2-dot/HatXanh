import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/common/Container';
import { HiSparkles, HiBeaker, HiCake } from 'react-icons/hi';

const categories = [
    {
        id: 'hat-dieu',
        name: 'Hạt Điều',
        description: 'Rang củi truyền thống, giòn tan, thơm bùi',
        icon: HiSparkles,
        color: 'from-primary-500 to-primary-600',
        bgColor: 'bg-primary-50',
        textColor: 'text-primary-700',
        count: 5,
    },
    {
        id: 'trai-cay-say',
        name: 'Trái Cây Sấy',
        description: 'Sấy dẻo tự nhiên, giữ nguyên dinh dưỡng',
        icon: HiCake,
        color: 'from-secondary-500 to-secondary-600',
        bgColor: 'bg-secondary-50',
        textColor: 'text-secondary-700',
        count: 8,
    },
    {
        id: 'ca-phe',
        name: 'Cà Phê',
        description: 'Nguyên chất Buôn Ma Thuột, hương vị đậm đà',
        icon: HiBeaker,
        color: 'from-amber-600 to-amber-700',
        bgColor: 'bg-amber-50',
        textColor: 'text-amber-800',
        count: 3,
    },
];

export const CategoryGrid = () => {
    return (
        <section className="py-16 md:py-24 bg-neutral-50">
            <Container>
                <div className="text-center mb-12">
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                        Khám Phá Danh Mục
                    </h2>
                    <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
                        Từ vùng đất đỏ bazan Tây Nguyên, chúng tôi mang đến những sản phẩm tự nhiên nhất
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {categories.map((category) => {
                        const Icon = category.icon;
                        return (
                            <Link
                                key={category.id}
                                href={`/san-pham?category=${category.id}`}
                                className="group relative overflow-hidden rounded-2xl bg-white border border-neutral-100 shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="p-8">
                                    {/* Icon */}
                                    <div className={`w-16 h-16 rounded-2xl ${category.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <Icon className={`w-8 h-8 ${category.textColor}`} />
                                    </div>

                                    {/* Content */}
                                    <h3 className="font-display text-2xl font-bold text-neutral-900 mb-2 group-hover:text-primary-700 transition-colors">
                                        {category.name}
                                    </h3>
                                    <p className="text-neutral-600 mb-4 leading-relaxed">
                                        {category.description}
                                    </p>

                                    {/* Product Count */}
                                    <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                                        <span className="text-sm text-neutral-500">
                                            {category.count} sản phẩm
                                        </span>
                                        <span className="text-primary-600 font-medium text-sm group-hover:translate-x-1 transition-transform inline-flex items-center">
                                            Xem thêm →
                                        </span>
                                    </div>
                                </div>

                                {/* Gradient Overlay on Hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
                            </Link>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
};
