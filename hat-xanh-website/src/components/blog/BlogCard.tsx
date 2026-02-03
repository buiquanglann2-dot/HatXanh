import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/types/blog';
import { formatDate } from '@/lib/utils';

interface BlogCardProps {
    post: BlogPost;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
    return (
        <div className="group flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white transition-all hover:shadow-lg">
            <Link href={`/blog/${post.slug}`} className="relative aspect-video overflow-hidden bg-gray-100">
                <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-primary-700 backdrop-blur-sm">
                    {post.category.name}
                </div>
            </Link>

            <div className="flex flex-1 flex-col p-6">
                <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
                    <span>{formatDate(post.date)}</span>
                    <span>•</span>
                    <span>{post.readTime} phút đọc</span>
                </div>

                <h3 className="mb-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-primary-600">
                    <Link href={`/blog/${post.slug}`}>
                        <span className="absolute inset-0" aria-hidden="true" />
                        {post.title}
                    </Link>
                </h3>

                <p className="line-clamp-3 text-base text-gray-600">{post.excerpt}</p>

                <div className="mt-6 flex items-center pt-4 border-t border-gray-100">
                    <span className="text-sm font-medium text-gray-900">{post.author.name}</span>
                </div>
            </div>
        </div>
    );
};
