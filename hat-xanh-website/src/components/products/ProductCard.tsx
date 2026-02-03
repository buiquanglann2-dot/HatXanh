"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types/product';
import { formatCurrency } from '@/lib/utils';
import { Button } from '@/components/common/Button';
import { Badge } from '@/components/common/Badge';
import { HiShoppingCart } from 'react-icons/hi';

interface ProductCardProps {
    product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
    const [isHovered, setIsHovered] = useState(false);

    // Calculate discount percentage if original price exists
    const discount = product.originalPrice && product.originalPrice > product.price
        ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
        : 0;

    return (
        <div
            className="group relative flex flex-col overflow-hidden rounded-2xl bg-white border border-neutral-100 shadow-soft transition-all duration-300 hover:shadow-hover hover:-translate-y-1"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Image Section */}
            <Link href={`/san-pham/${product.slug}`} className="relative aspect-[4/3] overflow-hidden bg-neutral-50">
                <Image
                    src={product.images.thumbnail}
                    alt={`${product.name} - Nông sản hữu cơ Hạt Xanh`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Gradient Overlay for Text Contrast (Bottom only) */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Badges */}
                <div className="absolute left-3 top-3 flex flex-col gap-2">
                    {product.certifications?.includes('organic') && (
                        <Badge variant="success" animated>Hữu cơ</Badge>
                    )}
                    {discount > 0 && (
                        <Badge variant="warning" animated>-{discount}%</Badge>
                    )}
                </div>
            </Link>

            {/* Content Section */}
            <div className="relative flex flex-1 flex-col p-5">
                <Link href={`/san-pham/${product.slug}`} className="group-hover:text-primary-600 transition-colors">
                    <h3 className="font-display text-lg font-bold text-neutral-900 line-clamp-2 mb-1">
                        {product.name}
                    </h3>
                </Link>

                {/* Rating / Category Placeholder */}
                <div className="text-sm text-neutral-500 mb-3">{product.category}</div>

                {/* Price Section */}
                <div className="mt-auto flex items-baseline gap-2">
                    <span className="text-xl font-bold text-primary-700">
                        {formatCurrency(product.price)}
                    </span>
                    {product.originalPrice && product.originalPrice > product.price && (
                        <span className="text-sm text-neutral-400 line-through">
                            {formatCurrency(product.originalPrice)}
                        </span>
                    )}
                    <span className="text-sm text-neutral-500">/{product.unit}</span>
                </div>

                {/* Floating Add to Cart Button */}
                <div className={`
                    absolute bottom-4 right-4 z-10 
                    transform transition-all duration-300 ease-out
                    ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none md:translate-y-2'}
                `}>
                    <Button
                        size="sm"
                        variant="primary"
                        className="shadow-glow-sm hover:shadow-glow-md rounded-full px-4"
                        onClick={(e) => {
                            e.preventDefault();
                            console.log('Added to cart:', product.name);
                        }}
                    >
                        <HiShoppingCart className="mr-2 h-4 w-4" />
                        Thêm vào giỏ
                    </Button>
                </div>
            </div>
        </div>
    );
};
