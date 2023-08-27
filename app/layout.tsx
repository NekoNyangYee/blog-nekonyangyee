import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ThemeProvider from '../theme/theme';
import GotoTop from '@/Components/GotoTop';
import Footer from '@/Components/Footer';
import Header from '@/Components/Header';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NekoNyangYee\'s Blog',
  description: '나만의 작은 일기',
  icons: {
    icon: '/apple-touch-icon.png'
  }
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
          <Header />
          <GotoTop />
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  )
}