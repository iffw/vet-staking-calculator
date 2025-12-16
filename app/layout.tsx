import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VET Staking Calculator 2025 | Calculate VeChain Staking Rewards",
  description: "Calculate your VeChain (VET) staking rewards with real-time data. Compare top VET staking platforms including Binance, Bybit, and VeChainThor Wallet. Free VET staking calculator with APY comparison.",
  keywords: [
    "VET staking calculator",
    "VeChain staking",
    "VET rewards calculator",
    "VeChain APY",
    "VTHO calculator",
    "VET staking rewards",
    "VeChain staking calculator 2025",
    "crypto staking calculator",
    "VET earnings",
    "VeChainThor staking"
  ],
  authors: [{ name: "VET Staking Calculator" }],
  creator: "VET Staking Calculator",
  publisher: "VET Staking Calculator",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://vet-staking-calculator.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'VET Staking Calculator 2025 | Calculate VeChain Staking Rewards',
    description: 'Calculate your VeChain (VET) staking rewards with real-time data. Compare top VET staking platforms and maximize your earnings.',
    url: 'https://vet-staking-calculator.vercel.app',
    siteName: 'VET Staking Calculator',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'VET Staking Calculator - Calculate VeChain Staking Rewards',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VET Staking Calculator 2025 | Calculate VeChain Staking Rewards',
    description: 'Calculate your VeChain (VET) staking rewards with real-time data. Compare top VET staking platforms.',
    images: ['/twitter-image.png'],
    creator: '@vetstaking',
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
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
