import { MetadataRoute } from 'next';
import { products } from '@/data/products';
import { siteConfig } from '@/data/site-config';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = siteConfig.url;

    // Static pages with priorities
    const staticPages = [
        { route: '', priority: 1.0, changeFrequency: 'daily' as const },
        { route: '/products', priority: 0.9, changeFrequency: 'daily' as const },
        { route: '/san-pham', priority: 0.9, changeFrequency: 'daily' as const },
        { route: '/about', priority: 0.7, changeFrequency: 'monthly' as const },
        { route: '/gioi-thieu', priority: 0.7, changeFrequency: 'monthly' as const },
        { route: '/contact', priority: 0.6, changeFrequency: 'monthly' as const },
        { route: '/lien-he', priority: 0.6, changeFrequency: 'monthly' as const },
        { route: '/cart', priority: 0.3, changeFrequency: 'never' as const },
    ].map(({ route, priority, changeFrequency }) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency,
        priority,
    }));

    // Dynamic product pages (both /products/[id] and /san-pham/[slug])
    const productPages = products.flatMap((product) => [
        {
            url: `${baseUrl}/products/${product.id}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/san-pham/${product.id}`, // Using id as slug
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        },
    ]);

    return [...staticPages, ...productPages];
}
