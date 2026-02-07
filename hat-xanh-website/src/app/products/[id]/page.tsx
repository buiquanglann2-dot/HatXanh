import React from 'react';
import ProductGallery from '@/components/product-detail/ProductGallery';
import ProductInfo from '@/components/product-detail/ProductInfo';
import ProductTabs from '@/components/product-detail/ProductTabs';
import RelatedProducts from '@/components/product-detail/RelatedProducts';
import { products } from '@/data/products';

export async function generateMetadata({ params }: { params: { id: string } }) {
    const product = products.find(p => p.id === params.id) || products[0];
    return {
        title: `${product.name}`,
        description: `Mua ${product.name} chất lượng cao, giá tốt tại Hạt Xanh. ${product.category}. Giao hàng toàn quốc.`,
        openGraph: {
            title: `${product.name} | Hạt Xanh`,
            description: `Mua ${product.name} chất lượng cao, giá tốt`,
            url: `https://hatxanh.vn/products/${product.id}`,
            images: [
                {
                    url: product.image,
                    width: 800,
                    height: 600,
                    alt: product.name,
                },
            ],
        },
        alternates: {
            canonical: `https://hatxanh.vn/products/${product.id}`,
        },
    };
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
    // In a real app, fetch data based on params.id
    const product = products.find(p => p.id === params.id) || products[0];

    return (
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-12">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Product',
                        name: product.name,
                        image: product.image,
                        description: `${product.name} - ${product.category}`,
                        brand: {
                            '@type': 'Brand',
                            name: 'Hạt Xanh',
                        },
                        offers: {
                            '@type': 'Offer',
                            url: `https://hatxanh.vn/products/${product.id}`,
                            priceCurrency: 'VND',
                            price: product.price,
                            availability: 'https://schema.org/InStock',
                            seller: {
                                '@type': 'Organization',
                                name: 'Hạt Xanh',
                            },
                        },
                        aggregateRating: {
                            '@type': 'AggregateRating',
                            ratingValue: '4.8',
                            reviewCount: product.reviews,
                        },
                    }),
                }}
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                <ProductGallery product={product} />
                <ProductInfo product={product} />
            </div>
            <ProductTabs />
            <RelatedProducts />
        </div>
    );
}
