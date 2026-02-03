import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/common/Container';
import { ProductCard } from '@/components/products/ProductCard';
import { Button } from '@/components/common/Button';
import { products } from '@/data/products';

export const FeaturedProducts = () => {
    // Filter featured products
    const featuredProducts = products.filter(p => p.featured).slice(0, 4);

    return (
        <section className="py-16 sm:py-24">
            <Container>
                <div className="mb-12 flex items-center justify-between">
                    <div className="space-y-1">
                        <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Sản phẩm nổi bật
                        </h2>
                        <p className="text-gray-500">
                            Những sản phẩm được yêu thích nhất tại Hạt Xanh
                        </p>
                    </div>
                    <Button variant="ghost" asChild className="hidden sm:inline-flex">
                        <Link href="/san-pham">Xem tất cả &rarr;</Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {featuredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                <div className="mt-12 text-center sm:hidden">
                    <Button variant="outline" asChild>
                        <Link href="/san-pham">Xem tất cả sản phẩm &rarr;</Link>
                    </Button>
                </div>
            </Container>
        </section>
    );
};
