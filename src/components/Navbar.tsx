"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import UseMounted from "@/components/UseMounted";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full bg-white/80 dark:bg-primary-dark backdrop-blur-md shadow-sm z-50"
    >
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        <h1
          onClick={() => scrollToSection("hero")}
          className="text-2xl font-bold text-primary cursor-pointer"
        >
          hkc619 | Kyle C.
        </h1>

        <div className="hidden md:flex space-x-6 font-medium">
          <button
            onClick={() => scrollToSection("about")}
            className="cursor-pointer hover:text-primary transition-colors duration-200"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className="cursor-pointer hover:text-primary transition-colors duration-200"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="cursor-pointer hover:text-primary transition-colors duration-200"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="cursor-pointer hover:text-primary transition-colors duration-200"
          >
            Contact
          </button>

          {/* 只在 mounted 後才渲染主題切換，避免 SSR/CSR 不一致 */}
          <UseMounted>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="ml-4 px-3 py-1 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
          </UseMounted>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 border rounded"
        >
          ☰
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 border-t text-center py-2 space-y-2">
          <button onClick={() => scrollToSection("about")}>About</button>
          <button onClick={() => scrollToSection("projects")}>Projects</button>
          <button onClick={() => scrollToSection("contact")}>Contact</button>
          <UseMounted>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="block mx-auto mt-2 px-3 py-1 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition"
            >
              Toggle Theme
            </button>
          </UseMounted>
        </div>
      )}
    </motion.nav>
  );
}
