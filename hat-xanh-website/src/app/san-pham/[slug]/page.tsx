import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { Badge } from '@/components/common/Badge';
import { products } from '@/data/products';
import { formatCurrency } from '@/lib/utils';
import { Metadata } from 'next';
import { HiHome, HiChevronRight, HiCheck, HiShieldCheck, HiTruck, HiRefresh } from 'react-icons/hi';

interface ProductDetailProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProductDetailProps): Promise<Metadata> {
    const { slug } = await params;
    const product = products.find((p) => p.slug === slug);

    if (!product) {
        return {
            title: 'Sản phẩm không tìm thấy',
        };
    }

    return {
        title: product.seo.title,
        description: product.seo.description,
        keywords: product.seo.keywords,
    };
}

export default async function ProductDetailPage({ params }: ProductDetailProps) {
    const { slug } = await params;
    const product = products.find((p) => p.slug === slug);

    if (!product) {
        notFound();
    }

    // Determine badge variant based on certifications
    const isOrganic = product.certifications.includes('organic');

    return (
        <div className="bg-white pb-20 pt-8">
            <Container>
                {/* Breadcrumbs */}
                <nav className="flex items-center text-sm text-neutral-500 mb-8 overflow-x-auto whitespace-nowrap pb-2">
                    <Link href="/" className="hover:text-primary-600 transition-colors flex items-center">
                        <HiHome className="mr-1 h-4 w-4" /> Trang chủ
                    </Link>
                    <HiChevronRight className="mx-2 h-4 w-4 flex-shrink-0" />
                    <Link href="/san-pham" className="hover:text-primary-600 transition-colors">
                        Sản phẩm
                    </Link>
                    <HiChevronRight className="mx-2 h-4 w-4 flex-shrink-0" />
                    <span className="text-neutral-900 font-medium">{product.name}</span>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20">
                    {/* Left: Image Gallery (Simple Stack for now, can be slider later) */}
                    <div className="space-y-6">
                        <div className="relative aspect-square overflow-hidden rounded-3xl bg-neutral-50 border border-neutral-100 shadow-soft">
                            <Image
                                src={product.images.main}
                                alt={product.name}
                                fill
                                className="object-cover transition-transform duration-700 hover:scale-105"
                                priority
                            />
                            {isOrganic && (
                                <div className="absolute top-4 left-4">
                                    <Badge variant="success" className="text-sm px-3 py-1">Hữu cơ 100%</Badge>
                                </div>
                            )}
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                            {product.images.gallery.map((img, idx) => (
                                <div key={idx} className="relative aspect-square overflow-hidden rounded-xl bg-neutral-50 border border-neutral-100 cursor-pointer hover:ring-2 hover:ring-primary-500 transition-all">
                                    <Image
                                        src={img}
                                        alt={`${product.name} ${idx + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Trust Badges */}
                        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-neutral-100">
                            <div className="text-center p-3">
                                <div className="mx-auto w-10 h-10 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center mb-2">
                                    <HiShieldCheck className="h-6 w-6" />
                                </div>
                                <span className="text-xs font-medium text-neutral-600 block">Cam kết chính hãng</span>
                            </div>
                            <div className="text-center p-3">
                                <div className="mx-auto w-10 h-10 rounded-full bg-secondary-50 text-secondary-600 flex items-center justify-center mb-2">
                                    <HiTruck className="h-6 w-6" />
                                </div>
                                <span className="text-xs font-medium text-neutral-600 block">Giao hàng toàn quốc</span>
                            </div>
                            <div className="text-center p-3">
                                <div className="mx-auto w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-2">
                                    <HiRefresh className="h-6 w-6" />
                                </div>
                                <span className="text-xs font-medium text-neutral-600 block">Đổi trả 7 ngày</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Info (Sticky) */}
                    <div className="lg:sticky lg:top-28 h-fit space-y-8">
                        <div>
                            <h1 className="font-display text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl leading-tight">
                                {product.name}
                            </h1>
                            <div className="flex items-center gap-4 mt-4">
                                <div className="flex items-baseline gap-2">
                                    <span className="font-display text-4xl font-bold text-primary-700">
                                        {formatCurrency(product.price)}
                                    </span>
                                    <span className="text-lg text-neutral-500 font-medium">
                                        /{(product.unit)}
                                    </span>
                                </div>
                                {product.originalPrice && product.originalPrice > product.price && (
                                    <div className="flex flex-col">
                                        <span className="text-sm text-neutral-400 line-through">
                                            {formatCurrency(product.originalPrice)}
                                        </span>
                                        <Badge variant="warning" className="text-xs">-{(Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100))}%</Badge>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Product Story */}
                        <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100">
                            <h3 className="font-display text-lg font-bold text-neutral-900 mb-2">Câu chuyện sản phẩm</h3>
                            <p className="font-serif text-neutral-600 text-base leading-relaxed italic">
                                &quot;{product.description}&quot;
                            </p>
                        </div>

                        {/* Description & Benefits */}
                        <div className="space-y-6">
                            <div className="prose prose-neutral text-neutral-600">
                                <p className="leading-relaxed">{product.fullDescription}</p>
                            </div>

                            <div>
                                <h3 className="font-bold text-neutral-900 mb-3 text-sm uppercase tracking-wide">Đặc điểm nổi bật</h3>
                                <ul className="space-y-2">
                                    {product.benefits.map((benefit, idx) => (
                                        <li key={idx} className="flex items-start text-neutral-700">
                                            <HiCheck className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                                            <span>{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Metadata grid */}
                        <div className="grid grid-cols-2 gap-y-4 py-6 border-y border-neutral-100">
                            <div>
                                <dt className="text-sm text-neutral-500">Xuất xứ</dt>
                                <dd className="font-medium text-neutral-900 mt-1">{product.origin}</dd>
                            </div>
                            <div>
                                <dt className="text-sm text-neutral-500">Trọng lượng</dt>
                                <dd className="font-medium text-neutral-900 mt-1">{product.weight}</dd>
                            </div>
                            <div>
                                <dt className="text-sm text-neutral-500">Bảo quản</dt>
                                <dd className="font-medium text-neutral-900 mt-1">{product.storage}</dd>
                            </div>
                            <div>
                                <dt className="text-sm text-neutral-500">Hạn sử dụng</dt>
                                <dd className="font-medium text-neutral-900 mt-1">12 tháng</dd>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-2">
                            <Button size="lg" variant="gradient" className="flex-1 text-lg shadow-glow-md hover:shadow-glow-lg transform transition-transform active:scale-95">
                                Mua ngay
                            </Button>
                            <Button size="lg" variant="secondary" className="flex-1 text-lg transform transition-transform active:scale-95">
                                Thêm vào giỏ
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
