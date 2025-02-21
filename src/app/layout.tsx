import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

// ✅ Load Inter font for a cleaner look
const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Angelo's Blog",
  description: "Exploring AI, Quant Finance, and Research.",
  openGraph: {
    title: "Angelo's Blog",
    description: "Exploring AI, Quant Finance, and Research.",
    url: "https://yourwebsite.com", // ✅ Make sure this is correct
    siteName: "Angelo's Blog",
    images: [
      {
        url: "https://yourwebsite.com/banner.png", // ✅ Make sure this is a real image
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100`}>
        {children}
      </body>
    </html>
  );
}