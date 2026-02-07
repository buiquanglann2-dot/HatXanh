"use client";
import React, { useState } from 'react';

export default function ProductTabs() {
    const [activeTab, setActiveTab] = useState('desc');

    return (
        <div className="mt-20">
            <div className="flex border-b border-slate-200 dark:border-slate-700 mb-8">
                {[
                    { id: 'desc', label: 'Mô tả chi tiết' },
                    { id: 'nutrition', label: 'Thành phần dinh dưỡng' },
                    { id: 'reviews', label: 'Đánh giá (120)' }
                ].map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-8 py-4 font-bold text-sm lg:text-base border-b-2 transition-all ${activeTab === tab.id ? 'border-[#276515] text-[#276515]' : 'border-transparent text-slate-500 hover:text-slate-800'}`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className="prose prose-slate dark:prose-invert max-w-none">
                {activeTab === 'desc' && (
                    <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                        <p><strong>Hạt Macca Úc Nứt Vỏ - Nữ hoàng của các loại hạt khô</strong></p>
                        <p>Hạt Macca được mệnh danh là &quot;nữ hoàng của các loại hạt&quot; nhờ hương vị béo ngậy đặc trưng và giá trị dinh dưỡng vượt trội. Sản phẩm được Hạt Xanh tuyển chọn từ những trang trại Macca tốt nhất tại Úc, trải qua quy trình sấy nứt vỏ hiện đại giúp hạt giữ nguyên được độ tươi ngon và dễ dàng tách vỏ.</p>
                        <p>Sản phẩm phù hợp cho mọi lứa tuổi, đặc biệt là phụ nữ mang thai, trẻ em và người lớn tuổi cần bổ sung dinh dưỡng.</p>
                    </div>
                )}
                {activeTab === 'nutrition' && (
                    <div className="space-y-4">
                        <p>Thành phần dinh dưỡng trong 100g hạt Macca:</p>
                        <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-300">
                            <li>Năng lượng: 718 kcal</li>
                            <li>Protein: 8g</li>
                            <li>Chất béo: 76g (Chủ yếu là chất béo không bão hòa đơn tốt cho tim mạch)</li>
                            <li>Carbohydrate: 14g</li>
                            <li>Chất xơ: 9g</li>
                        </ul>
                    </div>
                )}
                {activeTab === 'reviews' && (
                    <div className="space-y-6">
                        <div className="flex items-start gap-4 p-6 bg-slate-50 dark:bg-slate-800 rounded-xl">
                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">T</div>
                            <div>
                                <h5 className="font-bold text-slate-900 dark:text-white">Trần Văn Tú</h5>
                                <div className="flex text-yellow-400 text-xs mb-2">
                                    {[...Array(5)].map((_, i) => <span key={i} className="material-symbols-outlined fill-current">star</span>)}
                                </div>
                                <p className="text-slate-600 dark:text-slate-300 text-sm">Hạt rất ngon, đều hạt, không bị hôi dầu. Giao hàng siêu nhanh luôn. Sẽ ủng hộ shop dài dài.</p>
                            </div>
                        </div>
                        {/* More reviews would go here */}
                    </div>
                )}
            </div>
        </div>
    );
}
