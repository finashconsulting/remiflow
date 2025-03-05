'use client'
import { Noto_Sans, Outfit, Poppins } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";  // Import dynamic for disabling SSR
import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import './globals.css'; // Import your global styles if needed
import { metadata } from './metadata'; // Import metadata


// Dynamic import with SSR disabled
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
        {/* Favicon (using favicon.png) */}
        <link rel="icon" href="/favicon.png" />

        {/* Apple Touch Icon (using the same favicon.png) */}
        <link rel="apple-touch-icon" href="/favicon.png" />

        {/* PWA Metadata (optional) */}
        <meta name="theme-color" content="#2B95FA" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body>{children}</body>
    </html>
  );
}
