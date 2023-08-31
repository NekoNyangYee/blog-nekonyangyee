import { Inter } from 'next/font/google'
import ThemeProvider from '../theme/theme';
import GotoTop from '@/Components/GotoTop';
import Footer from '@/Components/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "NekoNyangYee Blog",
  description: "새로운 것을 즐기고, 변화를 만들고",
  openGraph: {
    type: "website",
    url: "https://blog-nekonyangyee.vercel.app",
    title: "NekoNyangYee Blog",
    description: "나만의 작은 일기",
    siteName: "NekoNyangYee Blog",
    images: [{
      url: "/opengraph.png",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://blog-nekonyangyee.vercel.app",
    title: "NekoNyangYee Blog",
    description: "나만의 작은 일기",
    images: [{
      url: "/opengraph.png",
    }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <ThemeProvider>
        <body className={inter.className}>
          {children}
          <GotoTop />
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  )
}