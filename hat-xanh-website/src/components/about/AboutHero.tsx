import React from 'react';

export default function AboutHero() {
    return (
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden rounded-[2rem] mx-6 lg:mx-12 mt-8">
            <div
                className="absolute inset-0 bg-center bg-cover"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBxUhJYP_TBdQSRJNavf4uEPfrqb-9dwQMQX7oBBK8DF4q0gUllk6aALikgv8zvk-bwwacanl8qPT5NmgX0i7S-yl_BoyYqmKwm1upd55h0nUapDA59R_vxfCI442xlubeedkIA9W4NJBcvTx0G4eGcOl2lHRZBC4oE_u9MrgrivJCjJs9VD7g5zhw6J2R-joiB-jZAAAeIV8yRlKGKw0P5Inj-1HpF5X1d_yG7j7D2JPaR4yoUOttyxllGAZiUFIGgG6V8J7DjPN8')" }}
            ></div>
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative z-10 text-center text-white px-4 max-w-4xl">
                <h1 className="text-4xl lg:text-6xl font-black mb-6 tracking-tight">Câu Chuyện Của Hạt Xanh</h1>
                <p className="text-xl lg:text-2xl font-medium text-slate-100 max-w-2xl mx-auto">
                    Nơi bắt đầu của những hạt mầm sức khỏe. Hành trình mang nông sản sạch từ nông trại đến bàn ăn của bạn.
                </p>
            </div>
        </section>
    );
}
