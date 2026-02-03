export const siteConfig = {
    name: process.env.NEXT_PUBLIC_SITE_NAME || 'Hạt Xanh',
    description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION || 'Nông sản sạch Tây Nguyên',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    ogImage: 'https://hatxanh.vn/og-image.jpg',
    links: {
        facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || '',
        zalo: process.env.NEXT_PUBLIC_ZALO_URL || '',
        instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || '',
    },
    contact: {
        phone: process.env.NEXT_PUBLIC_PHONE || '+84 123 456 789',
        email: process.env.NEXT_PUBLIC_EMAIL || 'lienhe@hatxanh.vn',
        address: process.env.NEXT_PUBLIC_ADDRESS || 'Gia Nghĩa, Lâm Đồng',
    },
};

// mainNav removed, use src/data/navigation.ts instead
