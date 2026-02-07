export interface Testimonial {
    id: string;
    name: string;
    role: string;
    content: string;
    avatar: string;
    rating: number;
}

export const testimonials: Testimonial[] = [
    {
        id: '1',
        name: 'Chị Mai Lan',
        role: 'Khách hàng thân thiết',
        content: '"Hạt macca ở đây rất giòn và thơm. Mình đã mua nhiều nơi nhưng Hạt Xanh vẫn là chất lượng ổn định nhất. Đóng gói rất kỹ lưỡng."',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjeWKY7wHfMoJP95mA13YbQGKDaGA8qr1waptJmtMuL6oDS5cmJf8LJboYP_ZDBlvhwEOaSsmektqZzxdqBXNg4iUu1nFP56FuklcaS83NrbmQd4WAuPy0PFqtRdKa7BbrU07_jv4sgwbqs276KJ9IVOj5bbNQYzWEWSnyZW2z7CKMkUsNbOs3Su6FoNE4IX0LhTedMYH1pctKZ6LReDEYm7DLIB5jM3ARFrr_anvZR-ZVTZ5qHmgQDqXwubxdlUfxxM6ImZ320Hw',
        rating: 5
    },
    {
        id: '2',
        name: 'Anh Minh Tú',
        role: 'Gymer',
        content: '"Giao hàng nhanh, hạt điều rang muối vừa vị, không bị quá mặn. Rất tốt để bổ sung năng lượng sau mỗi buổi tập của mình."',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASPA9uxZmiqzjZeDEywxUK3-KHIYASjVzUInrRWxXnjRzEGo8_b0e_E2j0uyy7s_DuHdhy0Yh73g2h3_YRgAeb-y_jpqyy99JWVHF_IKz-vuAg-tk3hVAZ9GWEoa0z4E1aa5p1W5rjTNitl2l94nin2voVNQBEEXYSaC4uzf4yMvcuEz6vhU4UVS7J_5qiJAOEh5vPKoF_4Vq7tKvye8PCke_6kBQPs7mbTPyeCZHSRva17zhIGH5H7gu-Y9mt50j6AcGwQVaXyio',
        rating: 5
    },
    {
        id: '3',
        name: 'Chị Thu Thủy',
        role: 'Nhân viên văn phòng',
        content: '"Hạt hạnh nhân của shop rất tươi, không bị gắt dầu. Ăn vặt văn phòng vừa ngon vừa tốt cho sức khỏe mà không lo béo."',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBUZVsTOrZ3GWWXPVTNwLHB-pEUEQZJuS---cNYBC0W--ruVmsB9XLR8n0jGVDZOWeT6EDZhkN4M93X44-kisj5iN9uuDtIaYXFKS9zL8NLLA9J0xtrR9EDAUD1IK03rQlop3JFNjwjt6apF9kG7H1P8ngs11qTZjz83dqm8pZ8DAy3zJnpilYPxG_4FOJ49UPzNjowRS366qn08f1990I5lxqH30JH3ohAHIMHadZ8DofohzJ8GN4NaAQXqpdGE8yneEc3MblfXE',
        rating: 4.5
    }
];
