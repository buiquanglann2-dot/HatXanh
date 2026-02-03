export const APP_NAME = 'Hạt Xanh';
export const APP_DESCRIPTION = 'Nông Sản Tây Nguyên Sạch, Chất Lượng';

// Breakpoints (phù hợp với Tailwind)
export const BREAKPOINTS = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
} as const;

// Animation durations (ms)
export const ANIMATION_DURATION = {
    fast: 150,
    normal: 300,
    slow: 500,
} as const;

// Product categories
export const PRODUCT_CATEGORIES = {
    'hat-dieu': 'Hạt Dinh Dưỡng',
    'trai-cay-say': 'Trái Cây Sấy',
    'ca-phe': 'Cà Phê',
    'nong-san-khac': 'Nông Sản Khác',
} as const;

// Image sizes
export const IMAGE_SIZES = {
    thumbnail: { width: 400, height: 400 },
    small: { width: 640, height: 640 },
    medium: { width: 1024, height: 1024 },
    large: { width: 1920, height: 1080 },
    hero: { width: 1920, height: 800 },
} as const;

// SEO
export const MAX_DESCRIPTION_LENGTH = 160;
export const MAX_TITLE_LENGTH = 60;

// Regex patterns
export const REGEX_PATTERNS = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^(\+84|0)[0-9]{9,10}$/,
    slug: /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
} as const;
