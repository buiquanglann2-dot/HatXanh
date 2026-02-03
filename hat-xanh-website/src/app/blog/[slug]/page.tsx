import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/common/Container';
import { blogPosts } from '@/data/posts';
import { formatDate } from '@/lib/utils';
import { BlogCard } from '@/components/blog/BlogCard';

interface BlogPostProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return {
            title: 'Bài viết không tìm thấy',
        };
    }

    return {
        title: post.seo?.title || post.title,
        description: post.seo?.description || post.excerpt,
        keywords: post.seo?.keywords,
    };
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: BlogPostProps) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    const relatedPosts = blogPosts
        .filter(p => p.category.id === post.category.id && p.id !== post.id)
        .slice(0, 3);

    return (
        <article className="py-12 lg:py-16">
            <Container className="max-w-4xl">
                <div className="mb-8 text-center">
                    <Link href="/blog" className="text-sm font-medium text-primary-600 hover:underline mb-4 inline-block">
                        &larr; Quay lại Blog
                    </Link>
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-4">
                        <span className="uppercase text-primary-600 font-semibold tracking-wide">{post.category.name}</span>
                        <span>•</span>
                        <span>{formatDate(post.date)}</span>
                        <span>•</span>
                        <span>{post.readTime} phút đọc</span>
                    </div>
                    <h1 className="font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                        {post.title}
                    </h1>
                </div>

                <div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-lg mb-12">
                    <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="prose prose-lg prose-green mx-auto" dangerouslySetInnerHTML={{ __html: post.content }} />

                <div className="mt-12 pt-8 border-t border-gray-200">
                    <div className="flex items-center gap-4">
                        <div className="relative h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                            {/* Placeholder avatar if image fails or is empty, but we implemented mock data */}
                        </div>
                        <div>
                            <p className="font-semibold text-gray-900">{post.author.name}</p>
                            <p className="text-sm text-gray-500">Tác giả</p>
                        </div>
                    </div>
                </div>

            </Container>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
                <div className="bg-gray-50 py-16 mt-16">
                    <Container>
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">Bài viết liên quan</h2>
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                            {relatedPosts.map(p => (
                                <BlogCard key={p.id} post={p} />
                            ))}
                        </div>
                    </Container>
                </div>
            )}
        </article>
    );
}
