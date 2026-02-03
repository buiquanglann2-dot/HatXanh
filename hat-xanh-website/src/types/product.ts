export type ProductCategory =
    | 'hat-dieu'
    | 'trai-cay-say'
    | 'ca-phe'
    | 'nong-san-khac';

export interface ProductCategoryInfo {
    id: string;
    name: string;
    slug: string;
    description: string;
}

export interface Product {
    id: string;
    slug: string;
    name: string;
    shortName: string;
    description: string;
    fullDescription: string;
    price: number;
    originalPrice?: number;
    unit: string;
    weight: string;
    category: ProductCategory;
    images: {
        main: string;
        thumbnail: string;
        gallery: string[];
    };
    benefits: string[];
    origin: string;
    storage: string;
    certifications: string[];
    inStock: boolean;
    featured: boolean;
    seo: {
        title: string;
        description: string;
        keywords: string[];
    };
}
