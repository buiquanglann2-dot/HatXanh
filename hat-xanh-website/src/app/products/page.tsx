import Link from 'next/link';
import React from 'react';
import ProductFilters from '@/components/products/ProductFilters';
import ProductGrid from '@/components/products/ProductGrid';

export const metadata = {
    title: 'Sản Phẩm Hạt Dinh Dưỡng Cao Cấp',
    description: 'Khám phá bộ sưu tập hạt dinh dưỡng cao cấp: Macca Úc, Hạt Điều rang muối, Hạnh Nhân Mỹ. Giá tốt, chất lượng đảm bảo, giao hàng toàn quốc.',
    openGraph: {
        title: 'Sản Phẩm Hạt Dinh Dưỡng Cao Cấp | Hạt Xanh',
        description: 'Khám phá bộ sưu tập hạt dinh dưỡng cao cấp từ Hạt Xanh',
        url: 'https://hatxanh.vn/products',
    },
    alternates: {
        canonical: 'https://hatxanh.vn/products',
    },
};

export default function ProductsPage() {
    return (
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-8">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-sm text-slate-500 mb-8">
                <Link href="/" className="hover:text-[#276515] transition-colors">Trang chủ</Link>
                <span className="material-symbols-outlined text-xs">chevron_right</span>
                <span className="text-[#276515] font-semibold">Tất cả sản phẩm</span>
            </div>

            {/* Page Title */}
            <div className="mb-12 text-center md:text-left">
                <h1 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mb-4">Tất cả sản phẩm</h1>
                <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
                    Tuyển chọn những hạt dinh dưỡng tốt nhất từ các nông trại chuẩn Organic.
                    Đảm bảo độ tươi ngon và giá trị dinh dưỡng cao nhất.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-12">
                <ProductFilters />
                <ProductGrid />
            </div>

            {/* SEO Content Box */}
            <div className="mt-20 p-8 bg-[#F0FDF4] dark:bg-[#152012] rounded-2xl border border-[#276515]/10">
                <h2 className="text-xl font-bold text-[#276515] mb-4">Tại sao nên mua hạt dinh dưỡng tại Hạt Xanh?</h2>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                    Hạt Xanh cam kết cung cấp các sản phẩm hạt dinh dưỡng (Macca, Điều, Hạnh nhân, Óc chó...) có nguồn gốc rõ ràng, quy trình chế biến hiện đại giữ trọn vẹn hương vị và dưỡng chất. Chúng tôi nói không với hạt kém chất lượng, hạt mốc hay sử dụng chất bảo quản độc hại.
                </p>
                <div className="flex gap-4">
                    <span className="text-xs font-bold bg-white dark:bg-slate-800 px-3 py-1 rounded-full border border-slate-200">#MaccaUc</span>
                    <span className="text-xs font-bold bg-white dark:bg-slate-800 px-3 py-1 rounded-full border border-slate-200">#HatDieuBinhPhuoc</span>
                    <span className="text-xs font-bold bg-white dark:bg-slate-800 px-3 py-1 rounded-full border border-slate-200">#HealthyFood</span>
                </div>
            </div>
        </div>
    );
}
