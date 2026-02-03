import { Product } from '@/types/product';

export const products: Product[] = [
    {
        id: 'mac-ca-01',
        slug: 'hat-mac-ca-rang-muoi',
        name: 'Hạt Mắc Ca Rang Muối',
        shortName: 'Mắc Ca',
        description: 'Hạt mắc ca Tây Nguyên rang giòn, thơm bùi, giàu dinh dưỡng',
        fullDescription: `Hạt Mắc Ca (Macadamia) là loại hạt cao cấp được trồng tại vùng đất đỏ bazan Tây Nguyên. 
    Với hàm lượng dinh dưỡng cao, giàu omega-3, omega-6, vitamin E và khoáng chất, 
    hạt mắc ca là lựa chọn hoàn hảo cho sức khỏe tim mạch và làn da.
    
    Sản phẩm được rang cẩn thận theo công thức truyền thống, giữ nguyên hương vị béo ngậy, 
    thơm bùi đặc trưng. Không chất bảo quản, không hương liệu tổng hợp.`,
        price: 450000,
        originalPrice: 500000,
        unit: 'hộp',
        weight: '500g',
        category: 'hat-dieu',
        images: {
            main: '/images/products/mac-ca.jpg',
            thumbnail: '/images/products/mac-ca-thumbnail.jpg',
            gallery: [
                '/images/products/mac-ca.jpg',
                '/images/products/mac-ca-2.jpg',
                '/images/products/mac-ca-3.jpg',
            ],
        },
        benefits: [
            'Giàu omega-3, tốt cho tim mạch',
            'Chứa vitamin E, chống lão hóa',
            'Cung cấp năng lượng dồi dào',
            'Hỗ trợ giảm cholesterol xấu',
            'Tăng cường trí nhớ',
        ],
        origin: 'Đắk Lắk, Tây Nguyên, Việt Nam',
        storage: 'Bảo quản nơi khô ráo, thoáng mát. Sau khi mở hộp nên dùng trong 30 ngày.',
        certifications: ['VietGAP', 'HACCP', 'ISO 22000'],
        inStock: true,
        featured: true,
        seo: {
            title: 'Hạt Mắc Ca Rang Muối Tây Nguyên - 500g | Hạt Xanh',
            description: 'Hạt mắc ca rang muối thơm bùi, giàu omega-3. Nguồn gốc Tây Nguyên, đảm bảo chất lượng. Giá 450.000đ/hộp 500g.',
            keywords: ['hạt mắc ca', 'macadamia', 'hạt dinh dưỡng', 'nông sản tây nguyên', 'hạt xanh'],
        },
    },
    {
        id: 'khoai-lang-02',
        slug: 'khoai-lang-say-deo',
        name: 'Khoai Lang Sấy Dẻo',
        shortName: 'Khoai Lang Sấy',
        description: 'Khoai lang tím sấy dẻo tự nhiên, không đường, không chất bảo quản',
        fullDescription: `Khoai Lang Sấy Dẻo được làm từ 100% khoai lang tím tươi ngon, 
    trồng trên vùng đất màu mỡ Tây Nguyên. Sản phẩm được sấy khô bằng công nghệ hiện đại, 
    giữ nguyên màu sắc tự nhiên, hương vị ngọt thanh và giá trị dinh dưỡng.
    
    Khoai lang tím giàu anthocyanin - chất chống oxy hóa mạnh, vitamin A, vitamin C, 
    chất xơ tốt cho hệ tiêu hóa. Đây là món snack healthy hoàn hảo cho cả gia đình.`,
        price: 120000,
        unit: 'túi',
        weight: '300g',
        category: 'trai-cay-say',
        images: {
            main: '/images/products/khoai-lang.jpg',
            thumbnail: '/images/products/khoai-lang-thumbnail.jpg',
            gallery: [
                '/images/products/khoai-lang.jpg',
                '/images/products/khoai-lang-2.jpg',
            ],
        },
        benefits: [
            'Giàu chất xơ, tốt cho tiêu hóa',
            'Chứa anthocyanin chống oxy hóa',
            'Ít calo, phù hợp ăn kiêng',
            'Tăng cường miễn dịch',
            'Không đường, không chất bảo quản',
        ],
        origin: 'Lâm Đồng, Tây Nguyên, Việt Nam',
        storage: 'Bảo quản nơi khô ráo, tránh ánh nắng trực tiếp. HSD: 6 tháng kể từ ngày sản xuất.',
        certifications: ['ATTP', 'VietGAP'],
        inStock: true,
        featured: true,
        seo: {
            title: 'Khoai Lang Tím Sấy Dẻo 300g - Không Đường | Hạt Xanh',
            description: 'Khoai lang tím sấy dẻo tự nhiên, giàu chất xơ, không đường. Snack healthy cho mọi lứa tuổi. Giá 120.000đ/túi.',
            keywords: ['khoai lang sấy', 'khoai lang tím', 'snack healthy', 'đồ ăn vặt', 'tây nguyên'],
        },
    },
    {
        id: 'xoai-say-03',
        slug: 'xoai-say-deo-cat-chu',
        name: 'Xoài Sấy Dẻo Cát Chu',
        shortName: 'Xoài Sấy',
        description: 'Xoài cát chu sấy dẻo, ngọt tự nhiên, giữ nguyên vị xoài tươi',
        fullDescription: `Xoài Sấy Dẻo Cát Chu là đặc sản từ giống xoài nổi tiếng của Tây Nguyên. 
    Xoài được chọn lọc kỹ càng, sấy khô ở nhiệt độ thấp để giữ nguyên hương vị thơm ngọt, 
    màu sắc vàng tự nhiên và các vitamin quý giá.
    
    Sản phẩm không sử dụng đường bổ sung, không phẩm màu, chất bảo quản. 
    Mỗi miếng xoài sấy mang lại vị ngọt thanh mát, thơm phức của xoài tươi chín cây.`,
        price: 135000,
        unit: 'túi',
        weight: '250g',
        category: 'trai-cay-say',
        images: {
            main: '/images/products/xoai-say.jpg',
            thumbnail: '/images/products/xoai-say-thumbnail.jpg',
            gallery: [
                '/images/products/xoai-say.jpg',
                '/images/products/xoai-say-2.jpg',
            ],
        },
        benefits: [
            'Giàu vitamin A, tốt cho mắt',
            'Chứa vitamin C tăng đề kháng',
            'Ngọt tự nhiên, không đường bổ sung',
            'Tiện lợi, dễ bảo quản',
            'Thích hợp làm quà tặng',
        ],
        origin: 'Đắk Nông, Tây Nguyên, Việt Nam',
        storage: 'Bảo quản nơi khô mát. Sau khi mở túi nên dùng trong 2 tuần.',
        certifications: ['ATTP', 'VietGAP'],
        inStock: true,
        featured: false,
        seo: {
            title: 'Xoài Cát Chu Sấy Dẻo 250g - Ngọt Tự Nhiên | Hạt Xanh',
            description: 'Xoài sấy dẻo giữ nguyên vị ngọt tự nhiên, giàu vitamin A và C. Đặc sản Tây Nguyên. Giá 135.000đ/túi.',
            keywords: ['xoài sấy', 'xoài cát chu', 'trái cây sấy', 'nông sản', 'hạt xanh'],
        },
    },
    {
        id: 'oc-cho-04',
        slug: 'hat-oc-cho-nguyen-chat',
        name: 'Hạt Óc Chó Nguyên Chất',
        shortName: 'Óc Chó',
        description: 'Hạt óc chó Tây Nguyên, giàu omega-3, tốt cho não bộ',
        fullDescription: `Hạt Óc Chó (Walnut) từ Tây Nguyên là nguồn dinh dưỡng quý giá, 
    được mệnh danh là "siêu thực phẩm cho não bộ". Hạt óc chó giàu omega-3 DHA, 
    omega-6, protein thực vật, vitamin E, magiê và các chất chống oxy hóa.
    
    Sản phẩm được thu hoạch từ vườn trồng hữu cơ, chế biến tối thiểu để giữ nguyên 
    dưỡng chất và độ tươi ngon. Có thể dùng trực tiếp, làm sữa hạt, hoặc chế biến món ăn.`,
        price: 320000,
        unit: 'kg',
        weight: '500g',
        category: 'hat-dieu',
        images: {
            main: '/images/products/oc-cho.jpg',
            thumbnail: '/images/products/oc-cho-thumbnail.jpg',
            gallery: [
                '/images/products/oc-cho.jpg',
                '/images/products/oc-cho-2.jpg',
            ],
        },
        benefits: [
            'Tốt cho sự phát triển não bộ',
            'Giàu chất chống oxy hóa',
            'Hỗ trợ kiểm soát cân nặng',
            'Tốt cho sức khỏe đường ruột',
            'Cải thiện giấc ngủ',
        ],
        origin: 'Lâm Đồng, Tây Nguyên, Việt Nam',
        storage: 'Bảo quản trong hũ kín, nơi thoáng mát, tránh ẩm mốc.',
        certifications: ['Organic', 'VietGAP'],
        inStock: true,
        featured: true,
        seo: {
            title: 'Hạt Óc Chó Nguyên Chất Tây Nguyên - 500g | Hạt Xanh',
            description: 'Hạt óc chó giàu dinh dưỡng, tốt cho bà bầu và trẻ nhỏ. Nông sản sạch Tây Nguyên. Giá 320.000đ/500g.',
            keywords: ['hạt óc chó', 'walnut', 'hạt dinh dưỡng', 'bà bầu', 'hạt xanh'],
        },
    },
    {
        id: 'ca-phe-05',
        slug: 'ca-phe-robusta-moc',
        name: 'Cà Phê Robusta Mộc',
        shortName: 'Cà Phê Mộc',
        description: 'Cà phê Robusta nguyên chất, rang mộc, đậm đà hương vị Tây Nguyên',
        fullDescription: `Cà Phê Robusta Mộc được tuyển chọn từ những hạt cà phê chín đỏ 
    tại thủ phủ cà phê Buôn Ma Thuột. Hạt cà phê được sơ chế ướt, phơi trong nhà kính, 
    và rang mộc 100% không tẩm ướp bất kỳ hương liệu nào.
    
    Hương vị: Đậm đà, đắng dịu, hậu ngọt sâu, hương thơm nồng nàn quyến rũ. 
    Phù hợp cho cả pha phin truyền thống và pha máy hiện đại.`,
        price: 220000,
        unit: 'túi',
        weight: '500g',
        category: 'ca-phe',
        images: {
            main: '/images/products/ca-phe.jpg',
            thumbnail: '/images/products/ca-phe-thumbnail.jpg',
            gallery: [
                '/images/products/ca-phe.jpg',
                '/images/products/ca-phe-2.jpg',
            ],
        },
        benefits: [
            'Giúp tỉnh táo, tập trung',
            'Chứa chất chống oxy hóa',
            'Hỗ trợ tăng cường trao đổi chất',
            'Giảm nguy cơ mắc bệnh tiểu đường',
            'Hương vị nguyên bản, an toàn',
        ],
        origin: 'Buôn Ma Thuột, Đắk Lắk, Việt Nam',
        storage: 'Bảo quản trong túi zip hoặc hũ kín, tránh không khí và độ ẩm.',
        certifications: ['UTZ Certified', 'VietGAP'],
        inStock: true,
        featured: false,
        seo: {
            title: 'Cà Phê Robusta Mộc 500g - Đậm Đà | Hạt Xanh',
            description: 'Cà phê Robusta rang mộc 100%, không tẩm ướp. Hương vị đậm đà chuẩn Tây Nguyên. Giá 220.000đ/túi 500g.',
            keywords: ['cà phê', 'coffee', 'robusta', 'cà phê mộc', 'tây nguyên'],
        },
    },
];
