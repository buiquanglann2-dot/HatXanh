import React from 'react';
import { Container } from '@/components/common/Container';
import { ProductCard } from '@/components/products/ProductCard';
import { products } from '@/data/products';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Sản phẩm | Hạt Xanh',
    description: 'Danh sách sản phẩm nông sản sạch Tây Nguyên tại Hạt Xanh',
};

export default function ProductsPage() {
    return (
        <div className="py-12">
            <Container>
                <div className="mb-8">
                    <h1 className="font-display text-4xl font-bold text-gray-900">Sản phẩm của chúng tôi</h1>
                    <p className="mt-2 text-lg text-gray-600">
                        Tất cả sản phẩm đều được tuyển chọn kỹ lưỡng, đảm bảo chất lượng và an toàn.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </Container>
        </div>
    );
}
