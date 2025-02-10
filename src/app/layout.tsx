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
  title: "Juan Guerrero",
  description: "A personal porfolio website for Juan Guerrero.",
};

import { Inter } from 'next/font/google';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="container mx-auto px-4">
          {children}
        </main>
      </body>
    </html>
  )
}
