export interface MetaTags {
    title: string;
    description: string;
    image?: string;
    url?: string;
    type?: string;
}

export interface BreadcrumbItem {
    label: string;
    href: string;
    active?: boolean;
}
