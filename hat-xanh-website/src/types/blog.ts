export interface Author {
    name: string;
    avatar: string;
}

export interface BlogCategory {
    id: string;
    name: string;
    slug: string;
}

export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string; // HTML or Markdown content
    coverImage: string;
    date: string;
    author: Author;
    category: BlogCategory;
    readTime: number; // in minutes
    featured?: boolean;
    seo?: {
        title?: string;
        description?: string;
        keywords?: string[];
    };
}
