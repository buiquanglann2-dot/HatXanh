import { siteConfig } from '@/data/site-config';

/**
 * Generate canonical URL
 */
export function generateCanonicalUrl(path: string): string {
    const baseUrl = siteConfig.url.replace(/\/$/, '');
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `${baseUrl}${cleanPath}`;
}

/**
 * Generate Open Graph image URL
 */
export function generateOgImageUrl(imagePath?: string): string {
    if (imagePath && imagePath.startsWith('http')) {
        return imagePath;
    }
    const baseUrl = siteConfig.url.replace(/\/$/, '');
    const path = imagePath || siteConfig.ogImage;
    return `${baseUrl}${path}`;
}

/**
 * Generate Breadcrumb structured data
 */
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: generateCanonicalUrl(item.url),
        })),
    };
}

/**
 * Generate Product structured data
 */
export function generateProductSchema(product: {
    name: string;
    description: string;
    image: string;
    price: number;
    currency?: string;
    availability?: string;
    brand?: string;
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: product.name,
        description: product.description,
        image: generateOgImageUrl(product.image),
        brand: {
            '@type': 'Brand',
            name: product.brand || siteConfig.name,
        },
        offers: {
            '@type': 'Offer',
            price: product.price,
            priceCurrency: product.currency || 'VND',
            availability: product.availability || 'https://schema.org/InStock',
            url: siteConfig.url,
        },
    };
}
