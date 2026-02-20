import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat, Josefin_Sans } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
});

const josefinSans = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "Nexium Trio - Digital Solutions That Drive Business",
  description: "Melbourne-based full-stack developers specializing in Shopify, WordPress, Laravel, and React.js. Custom platforms that scale with your business.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${josefinSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
