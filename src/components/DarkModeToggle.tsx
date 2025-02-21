"use client"; // ✅ Required for interactive components in Next.js

import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.add(storedTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newTheme);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 dark:text-white text-black transition hover:scale-110 shadow-lg"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}
