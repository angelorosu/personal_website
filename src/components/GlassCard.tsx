"use client"; // ✅ Forces Next.js to treat this as a client component

import Link from "next/link";
import { motion } from "framer-motion";

// ✅ Ensure this is exported correctly
export default function GlassCard({ title, description, link }: { title: string; description: string; link: string }) {
  return (
    <motion.div
      className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg shadow-lg p-6 rounded-xl border border-white/20 dark:border-gray-700 hover:scale-105 transition-transform"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link href={link}>
        <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 hover:underline">
          {title}
        </h2>
      </Link>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </motion.div>
  );
}
