'use client';

import React, { useState } from 'react';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { HiMail, HiCheckCircle } from 'react-icons/hi';

export const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            setEmail('');
            setTimeout(() => setStatus('idle'), 3000);
        }, 1000);
    };

    return (
        <section className="py-16 md:py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-500 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
            </div>

            <Container className="relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <HiMail className="w-8 h-8 text-white" />
                    </div>

                    {/* Heading */}
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                        Nhận Ưu Đãi Đặc Biệt
                    </h2>
                    <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
                        Đăng ký nhận bản tin để cập nhật sản phẩm mới, công thức chế biến và ưu đãi độc quyền từ Hạt Xanh
                    </p>

                    {/* Form */}
                    {status === 'success' ? (
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 animate-scale-in">
                            <HiCheckCircle className="w-12 h-12 text-green-400 mx-auto mb-3" />
                            <p className="text-white font-medium">
                                Cảm ơn bạn đã đăng ký! Kiểm tra email để xác nhận.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Nhập email của bạn..."
                                required
                                className="flex-1 px-6 py-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                            />
                            <Button
                                type="submit"
                                size="lg"
                                variant="secondary"
                                disabled={status === 'loading'}
                                className="shadow-glow-md hover:shadow-glow-lg whitespace-nowrap"
                            >
                                {status === 'loading' ? 'Đang gửi...' : 'Đăng ký ngay'}
                            </Button>
                        </form>
                    )}

                    {/* Privacy Note */}
                    <p className="text-primary-200 text-sm mt-4">
                        Chúng tôi tôn trọng quyền riêng tư của bạn. Hủy đăng ký bất cứ lúc nào.
                    </p>
                </div>
            </Container>
        </section>
    );
};
