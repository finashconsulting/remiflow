'use client'
import { Noto_Sans, Outfit, Poppins } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import './globals.css';
import { metadata } from './metadata';

const AOS = dynamic(() => import("aos"), { ssr: false });

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-outfit',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.png" />

        {/* Web App Manifest & Apple Touch Icon */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* PWA Meta Tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Remiflow" />
        <meta name="theme-color" content="#007AFF" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body>{children}</body>
    </html>
  );
}
