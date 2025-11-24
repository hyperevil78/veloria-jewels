import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { WishlistProvider } from "./context/wishlistContext";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Veloria Jewels",
  description: "Veloria offers premium modern jewelry crafted with refined design and timeless elegance. Explore fine necklaces, rings, earrings and bracelets made for confident, contemporary women who want luxury that feels effortless.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <WishlistProvider>
          <Navbar />
          {children}
          <Footer />
        </WishlistProvider>
      </body>
    </html>
  );
}
