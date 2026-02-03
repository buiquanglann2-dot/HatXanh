export interface NavItem {
    label: string;
    href: string;
    description?: string;
}

export const mainNav: NavItem[] = [
    {
        label: 'Trang Chủ',
        href: '/',
    },
    {
        label: 'Sản Phẩm',
        href: '/san-pham',
        description: 'Khám phá nông sản Tây Nguyên',
    },
    {
        label: 'Blog',
        href: '/blog',
        description: 'Kiến thức & Tin tức',
    },
    {
        label: 'Giới Thiệu',
        href: '/gioi-thieu',
        description: 'Về Hạt Xanh và Tây Nguyên',
    },
    {
        label: 'Liên Hệ',
        href: '/lien-he',
        description: 'Đặt hàng và tư vấn',
    },
];

export const footerNav = {
    company: [
        { label: 'Về Hạt Xanh', href: '/gioi-thieu' },
        { label: 'Tầm nhìn & Sứ mệnh', href: '/gioi-thieu#vision' },
    ],
    products: [
        { label: 'Hạt dinh dưỡng', href: '/san-pham?category=hat-dieu' },
        { label: 'Trái cây sấy', href: '/san-pham?category=trai-cay-say' },
        { label: 'Cà phê', href: '/san-pham?category=ca-phe' },
    ],
    support: [
        { label: 'Chính sách đổi trả', href: '/chinh-sach-doi-tra' },
        { label: 'Chính sách bảo mật', href: '/chinh-sach-bao-mat' },
        { label: 'Hướng dẫn đặt hàng', href: '/huong-dan-dat-hang' },
    ],
};
