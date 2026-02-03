import { MetadataRoute } from 'next';
import { products } from '@/data/products';
import { siteConfig } from '@/data/site-config';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = siteConfig.url;

    // Static pages
    const staticPages = [
        '',
        '/san-pham',
        '/gioi-thieu',
        '/lien-he',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic product pages
    const productPages = products.map((product) => ({
        url: `${baseUrl}/san-pham/${product.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.6,
    }));

    return [...staticPages, ...productPages];
}
