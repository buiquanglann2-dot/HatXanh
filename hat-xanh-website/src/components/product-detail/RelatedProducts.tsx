import React from 'react';
import { products } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';

export default function RelatedProducts() {
    const related = products.slice(0, 4);

    return (
        <section className="mt-20">
            <h3 className="text-2xl lg:text-3xl font-black text-slate-900 dark:text-white mb-8">Sản phẩm liên quan</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {related.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
}
