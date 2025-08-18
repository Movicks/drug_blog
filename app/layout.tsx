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
  title: "Felo.ng",
  description: "Premium Health Products at cheap prices",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://felo.ng",
    title: "Felo.ng",
    description: "Premium Health Products at cheap prices",
    images: [
      {
        url: "https://felo.ng/og-image.png",
        width: 1200,
        height: 630,
        alt: "Felo.ng",
      },
    ],
    siteName: "Felo.ng", // ✅ Correct property
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
