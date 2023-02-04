import { Inter } from '@next/font/google';
import Head from 'next/head';
import { ReactElement } from 'react';

const interFont = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function MainLayout({ children }: { children: ReactElement }) {
  return (
    <div className={`${interFont.variable} font-sans min-h-screen`}>
      <Head>
        <title>Personally - Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </div>
  );
}
