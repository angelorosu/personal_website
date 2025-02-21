"use client";

import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      setScrollProgress((window.scrollY / totalHeight) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      {/* 🔹 Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-blue-600 dark:bg-blue-400"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* 🔹 Navbar with Fade Effect */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-white/60 dark:bg-gray-900/60 shadow-lg px-8 py-4 flex justify-between items-center w-full max-w-5xl mx-auto rounded-xl mt-4 transition-opacity duration-300 ${
          scrollY > 50 ? "opacity-0" : "opacity-100"
        }`}
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Angelo's Blog</h1>
        <div className="space-x-6 flex items-center">
          <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Home</Link>
          <Link href="/blog" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Blog</Link>
          <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">About</Link>
          <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Contact</Link>
          <DarkModeToggle />
        </div>
      </nav>

      {/* 🔹 Page Content */}
      <div className="mt-28 max-w-4xl mx-auto p-6">{children}</div>
    </div>
  );
}
