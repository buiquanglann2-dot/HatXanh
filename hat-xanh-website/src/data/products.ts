export interface Product {
    id: string;
    name: string;
    price: number;
    originalPrice?: number;
    image: string;
    rating: number;
    reviews: number;
    isHot?: boolean;
    salePercentage?: number;
    category: string;
}

export const products: Product[] = [
    {
        id: '1',
        name: 'Hạt Macca Úc Nứt Vỏ - Size VIP',
        price: 150000,
        originalPrice: 180000,
        salePercentage: 15,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFPX6fklOpzg9U3_4AgFsP5jBsoXdvGsSA8xiNgCKn1TvBd9_HexK6LRZabWUBd8wGqcO9I3rZD523duM73yETj6ug3_0kQyLcusJdECAa8ry1m1P6siooCr7q1WJyewQMIKqOvoG18lvd5UiRavk1WoPbThmZUx4-bl_go4Qod0c2ubUXTw-rADbdA_aFyMfPOiqnnZjsdUHM6TmSNZIM6K0oIWlNlkV5jvpUArdXOQ58ypke0pwVaKtTyHG-3iUWAvgput0tpqE',
        rating: 5,
        reviews: 120,
        category: 'macca'
    },
    {
        id: '2',
        name: 'Hạt Điều Bình Phước Rang Muối - Loại A Cồ',
        price: 120000,
        originalPrice: 150000,
        salePercentage: 20,
        isHot: true,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCo_ihF-VV3KjzyJ8nLRpFJ3XcU8WKFgDuCbMdiOrP6w6kB5y6B5HTWYCIrFjS6PUL9CnGertiuZruciZNWDuXFQsn2rolHb1zH-uJYg_1_je2FIZvR1T2APa8yJxYa9GuX1CCV9T4GjUX62aBCsqpGeh463FndUjoHl8LwYj8HJfWp6nQQ3X0wWSifgzLjayko8wNfP1DK4ZFDx9B6332NwKPG4ZnRyYpF90ixYrSOUE9GZhINX_tRggA4DLApY3YAvknUd5heeGA',
        rating: 4.8,
        reviews: 85,
        category: 'dieu'
    },
    {
        id: '3',
        name: 'Hạnh Nhân Mỹ Rang Bơ - Giòn Thơm',
        price: 140000,
        originalPrice: 170000,
        salePercentage: 18,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZi3tALStbzWMv7TRpNGW3FKJV-qq5peBa529csrmjR-ENrKR5c-j-lDaRooanSU9JegfTFFJus19cMeof9dD7vNVroQDLew7pJooTVpTyJCxXL8bl2W47m0qyvU3AHCIW_EK_0DgtnW-KhikPLdwiB-HLbI_OE2zHPxkRwrWqRkp5JxKQ9x0IhDLsQ-BNw46tc92-N8GJG49VYjdkM-_P1eZN24icfI41ySoCqOW1t6gyyxDb6nLc1K3ZgwKhzb4-6xDPCfTA81I',
        rating: 4.9,
        reviews: 200,
        category: 'hanh-nhan'
    },
    {
        id: '4',
        name: 'Combo Quà Tặng Sức Khỏe - Hộp Gỗ Cao Cấp',
        price: 450000,
        originalPrice: 500000,
        isHot: true,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBdAmRWLhXn9Lq-j0NhQrQvvsahVXzL9pPiL3Ni3I8s4_nhJKNj8XzerZ0R7zKa_REIzHKLaBjoL_CrQYESBl4WMqMvji6swjbteyEAYUge58hISdte0-3q5h5KBbbrjcyzxX1natVzOdg_CCYCP1HX2kVzjwmZUJ8kvlBsJrPrz1DKO2TIFC8mcyLdl0_-pjfHKwiSxqR2ODvhaUsmGp6LsqcXmK6tAxdwnP9hZFbPXVkImG3LVClc1QwiCUEChyrKTBjjvJByK8k',
        rating: 5,
        reviews: 50,
        category: 'combo'
    }
];
