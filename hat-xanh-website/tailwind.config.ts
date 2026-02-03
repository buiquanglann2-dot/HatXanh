import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Hybrid "Honest Freshness" Palette
                primary: {
                    50: '#f0fdf4',
                    100: '#dcfce7',
                    200: '#bbf7d0',
                    300: '#86efac',
                    400: '#4ade80',
                    500: '#22c55e',  // FRESH GREEN - Tươi mới, Sức sống
                    600: '#16a34a',
                    700: '#15803d',  // DEEP FOREST - Nhấn mạnh
                    800: '#166534',
                    900: '#14532d',
                    950: '#052e16',
                },
                secondary: { // TERRACOTTA / EARTH
                    50: '#fff7ed',
                    100: '#ffedd5',
                    200: '#fed7aa',
                    300: '#fdba74',
                    400: '#fb923c',
                    500: '#f97316',  // CORAL/EARTH - Đất nung, Ấm áp
                    600: '#ea580c',
                    700: '#c2410c',
                    800: '#9a3412',
                    900: '#7c2d12',
                    950: '#431407',
                },
                neutral: { // WARM GRAY / STONE
                    50: '#fafaf9',   // OFF-WHITE Background
                    100: '#f5f5f4',
                    200: '#e7e5e4',
                    300: '#d6d3d1',
                    400: '#a8a29e',
                    500: '#78716c',
                    600: '#57534e',
                    700: '#44403c',
                    800: '#292524',
                    900: '#1c1917',  // CHARCOAL Text
                    950: '#0c0a09',
                },
                accent: {
                    cream: '#fef3c7',     // Nền ấm
                    lime: '#84cc16',      // Điểm nhấn năng lượng
                    soil: '#78350f',      // Màu đất đậm
                }
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'system-ui', 'sans-serif'], // Body text
                display: ['var(--font-playfair)', 'Georgia', 'serif'],  // Headings (Luxury)
                serif: ['Merriweather', 'serif'],                       // Storytelling (Warmth)
            },
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
                '128': '32rem',
            },
            maxWidth: {
                '8xl': '88rem',
                '9xl': '96rem',
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-out forwards',
                'slide-up': 'slideUp 0.6s ease-out forwards',
                'scale-up': 'scaleUp 0.4s ease-out forwards',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                scaleUp: { // Subtle scale, no layout shift (using transform)
                    '0%': { transform: 'scale(0.98)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
            },
            boxShadow: {
                'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)', // Clean, modern shadow
                'hover': '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)', // Lift effect
                'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)', // Subtle glass
                'glow': '0 0 20px rgba(34, 197, 94, 0.2)', // Green glow
            },
            backdropBlur: {
                xs: '2px',
                md: '8px', // Glass blur
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'noise': "url('/texture/noise.png')", // Texture overlay support
            },
        },
    },
    plugins: [],
};

export default config;
