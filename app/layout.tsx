import type { Metadata } from "next";
import { Playfair_Display as PlayfairDisplay, Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ScrollToTop from "@/components/common/ScrollToTop";

const playfair = PlayfairDisplay({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Hidden India",
  description: "Explore the world through our travel experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4009037401426830" crossOrigin="anonymous"></script>
      </head>
      <body className={`${playfair.variable} ${montserrat.variable}`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
