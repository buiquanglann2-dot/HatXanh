import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { CartProvider } from '@/context/CartContext';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL('https://hatxanh.vn'), // TODO: Replace with actual domain
  title: {
    default: 'Hạt Xanh - Hạt Dinh Dưỡng Cao Cấp | Macca, Điều, Hạnh Nhân',
    template: '%s | Hạt Xanh'
  },
  description: 'Chuyên cung cấp hạt dinh dưỡng cao cấp: Macca Úc, Hạt Điều rang muối, Hạnh Nhân Mỹ. Nguồn gốc rõ ràng, chất lượng đảm bảo, giao hàng toàn quốc.',
  keywords: ['hạt macca', 'hạt điều', 'hạt hạnh nhân', 'hạt dinh dưỡng', 'thực phẩm sạch', 'organic', 'hạt cao cấp'],
  authors: [{ name: 'Hạt Xanh' }],
  creator: 'Hạt Xanh',
  publisher: 'Hạt Xanh',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: 'https://hatxanh.vn',
    siteName: 'Hạt Xanh',
    title: 'Hạt Xanh - Hạt Dinh Dưỡng Cao Cấp',
    description: 'Chuyên cung cấp hạt dinh dưỡng cao cấp: Macca, Điều, Hạnh Nhân. Chất lượng đảm bảo, giao hàng toàn quốc.',
    images: [
      {
        url: '/og-image.jpg', // TODO: Create OG image 1200x630
        width: 1200,
        height: 630,
        alt: 'Hạt Xanh - Hạt Dinh Dưỡng Cao Cấp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hạt Xanh - Hạt Dinh Dưỡng Cao Cấp',
    description: 'Chuyên cung cấp hạt dinh dưỡng cao cấp: Macca, Điều, Hạnh Nhân',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // TODO: Add after Google Search Console verification
  // verification: {
  //   google: 'YOUR_GOOGLE_VERIFICATION_CODE',
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${inter.variable} scroll-smooth`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Hạt Xanh',
              url: 'https://hatxanh.vn',
              logo: 'https://hatxanh.vn/logo.png',
              description: 'Chuyên cung cấp hạt dinh dưỡng cao cấp: Macca, Điều, Hạnh Nhân',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'VN',
                addressLocality: 'TP. Hồ Chí Minh',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Customer Service',
                areaServed: 'VN',
                availableLanguage: 'Vietnamese',
              },
            }),
          }}
        />
      </head>
      <body className="bg-[#F0FDF4] dark:bg-[#152012] text-slate-900 dark:text-slate-100 font-sans">
        <CartProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
