import { Container } from '@/components/common/Container';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Chính sách | Hạt Xanh',
    description: 'Các chính sách vận chuyển, đổi trả và bảo mật của Hạt Xanh.',
};

export default function PolicyPage() {
    return (
        <div className="py-20 bg-neutral-50 min-h-screen">
            <Container className="max-w-3xl">
                <h1 className="font-display text-4xl font-bold text-neutral-900 mb-8">Chính sách Hạt Xanh</h1>

                <div className="space-y-8 bg-white p-8 rounded-2xl shadow-soft">
                    <section>
                        <h2 className="text-2xl font-bold text-primary-800 mb-4">1. Chính sách vận chuyển</h2>
                        <div className="prose prose-neutral text-neutral-600">
                            <p>Chúng tôi giao hàng toàn quốc với các đối tác vận chuyển uy tín (GHTK, Viettel Post).</p>
                            <ul>
                                <li><strong>Nội thành:</strong> 1-2 ngày làm việc.</li>
                                <li><strong>Tỉnh / Thành khác:</strong> 3-5 ngày làm việc.</li>
                                <li><strong>Phí ship:</strong> Đồng giá 30k. Miễn phí cho đơn từ 500k.</li>
                            </ul>
                        </div>
                    </section>

                    <hr className="border-neutral-100" />

                    <section>
                        <h2 className="text-2xl font-bold text-primary-800 mb-4">2. Chính sách đổi trả</h2>
                        <div className="prose prose-neutral text-neutral-600">
                            <p>Hạt Xanh cam kết đổi trả 1-1 trong vòng <strong>7 ngày</strong> nếu:</p>
                            <ul>
                                <li>Sản phẩm bị lỗi, hư hỏng trong quá trình vận chuyển.</li>
                                <li>Sản phẩm không đúng như mô tả.</li>
                                <li>Hết hạn sử dụng.</li>
                            </ul>
                        </div>
                    </section>
                </div>
            </Container>
        </div>
    );
}
