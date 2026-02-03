# Images Directory

This directory contains all images for the Hạt Xanh website.

## Structure

```
images/
├── products/       # Product images (thumbnails, detail images)
├── categories/     # Category banner images
└── blog/          # Blog post images
```

## Image Guidelines

### Products
- **Thumbnails**: 800x600px (4:3 ratio)
- **Detail images**: 1200x900px (4:3 ratio)
- **Format**: WebP (with JPG fallback)
- **Naming**: `product-slug-thumbnail.webp`, `product-slug-1.webp`, etc.

### Categories
- **Size**: 1200x400px (3:1 ratio)
- **Format**: WebP
- **Naming**: `category-slug-banner.webp`

### Blog
- **Featured images**: 1200x630px (OG image size)
- **In-content images**: Max 1000px width
- **Format**: WebP
- **Naming**: `blog-slug-featured.webp`, `blog-slug-1.webp`, etc.

## Optimization

All images should be optimized before upload:
- Use WebP format for better compression
- Provide alt text for accessibility
- Use Next.js Image component for automatic optimization
