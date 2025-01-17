import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import ReactQueryProvider from '@/app/lib/reactQueryProvider';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SnipSnip',
  description: 'Control your all bookmarks easily!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <ReactQueryProvider>
          <AntdRegistry>{children}</AntdRegistry>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
