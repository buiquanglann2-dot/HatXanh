"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Product } from '@/data/products';

interface ProductGalleryProps {
    product: Product;
}

export default function ProductGallery({ product }: ProductGalleryProps) {
    const [activeImage, setActiveImage] = useState(product.image);

    // Mock thumbnails based on main image
    const images = [product.image, product.image, product.image, product.image];

    return (
        <div className="flex flex-col gap-4">
            <div className="aspect-square bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-700 relative">
                <Image src={activeImage} alt={product.name} fill className="object-cover" />
                <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    -{product.salePercentage}%
                </div>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-2 hide-scrollbar">
                {images.map((img, idx) => (
                    <div
                        key={idx}
                        className={`w-20 h-20 shrink-0 rounded-lg overflow-hidden cursor-pointer border-2 transition-all relative ${activeImage === img && idx === 0 ? 'border-[#276515]' : 'border-transparent hover:border-[#276515]/50'}`}
                        onClick={() => setActiveImage(img)}
                    >
                        <Image src={img} alt={`Thumbnail ${idx}`} fill className="object-cover" />
                    </div>
                ))}
            </div>
        </div>
    );
}
