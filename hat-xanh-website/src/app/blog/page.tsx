import React from 'react';
import { Metadata } from 'next';
import { Container } from '@/components/common/Container';
import { BlogCard } from '@/components/blog/BlogCard';
import { blogPosts, blogCategories } from '@/data/posts';

export const metadata: Metadata = {
    title: 'Blog Kiến Thức & Tin Tức | Hạt Xanh',
    description: 'Cập nhật kiến thức về nông sản sạch, sức khỏe và ẩm thực Tây Nguyên.',
};

export default function BlogPage() {
    // Get featured post (the first one marked as featured)
    const featuredPost = blogPosts.find(p => p.featured) || blogPosts[0];
    const otherPosts = blogPosts.filter(p => p.id !== featuredPost.id);

    return (
        <div className="py-12 lg:py-16">
            <Container>
                <div className="mb-12 text-center">
                    <h1 className="font-display text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        Góc Chia Sẻ
                    </h1>
                    <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
                        Khám phá những câu chuyện thú vị về nông sản sạch và văn hóa Tây Nguyên.
                    </p>
                </div>

                {/* Categories */}
                <div className="mb-12 flex flex-wrap justify-center gap-4">
                    <button className="rounded-full bg-primary-600 px-6 py-2 text-sm font-medium text-white shadow-sm">
                        Tất cả
                    </button>
                    {blogCategories.map(cat => (
                        <button key={cat.id} className="rounded-full bg-white px-6 py-2 text-sm font-medium text-gray-700 shadow-sm border border-gray-200 hover:border-primary-500 hover:text-primary-600 transition-colors">
                            {cat.name}
                        </button>
                    ))}
                </div>

                {/* Featured Post */}
                {featuredPost && (
                    <div className="mb-16">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Bài viết nổi bật</h2>
                        <BlogCard post={featuredPost} />
                        {/* Note: Ideally Featured Post has a different, larger layout, but reused Card for MVP */}
                    </div>
                )}

                {/* Post Grid */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {otherPosts.map((post) => (
                        <BlogCard key={post.id} post={post} />
                    ))}
                </div>
            </Container>
        </div>
    );
}
