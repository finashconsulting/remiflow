'use client'
import { Noto_Sans, Outfit, Poppins } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";  // Import dynamic for disabling SSR
import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

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
  useEffect(() => { 
    Aos.init(); 
  }, []);

  return (
    <html lang="en">
      <head>

      {/* <link rel="icon" href="/favicon.svg" type="image/svg+xml"/> */}
      <link rel="icon" href="/favicon.svg?v=2" type="image/svg+xml"/>


        <title>Remiflow</title>
      </head>
      <body
        className={`${notoSans.variable} ${outfit.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
