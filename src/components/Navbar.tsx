"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import UseMounted from "@/components/UseMounted";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  const isDark = (theme === "system" ? resolvedTheme : theme) === "dark";

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  const navItemClass =
    "relative cursor-pointer text-gray-700 dark:text-gray-200 hover:text-primary transition-colors duration-200 " +
    "after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary " +
    "after:transition-all after:duration-300 hover:after:w-full";

  return (
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-gray-900/70 backdrop-blur-md border-b border-gray-200 dark:border-gray-700"
    >
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        <button
          type="button"
          onClick={() => scrollToSection("hero")}
          className="text-left text-2xl font-bold text-primary"
          aria-label="Go to top"
        >
          hkc619 <span className="text-gray-500 dark:text-gray-400">|</span>{" "}
          <span className="text-gray-800 dark:text-gray-100">Kyle C.</span>
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center space-x-6 font-medium">
          <button
            type="button"
            onClick={() => scrollToSection("about")}
            className={navItemClass}
          >
            About
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("experience")}
            className={navItemClass}
          >
            Experience
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("projects")}
            className={navItemClass}
          >
            Projects
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className={navItemClass}
          >
            Contact
          </button>

          <UseMounted>
            <button
              type="button"
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className="ml-2 px-3 py-1 rounded-lg border border-primary text-primary hover:bg-primary hover:text-white transition"
              aria-label="Toggle theme"
            >
              {isDark ? "☀️" : "🌙"}
            </button>
          </UseMounted>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          className="md:hidden px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200"
          aria-label="Open menu"
          aria-expanded={isOpen}
        >
          ☰
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 pt-2 bg-white/95 dark:bg-gray-900/95 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col gap-2 text-center font-medium">
            <button
              type="button"
              onClick={() => scrollToSection("about")}
              className="py-2 rounded-lg text-gray-700 dark:text-gray-200 hover:text-primary transition"
            >
              About
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("experience")}
              className="py-2 rounded-lg text-gray-700 dark:text-gray-200 hover:text-primary transition"
            >
              Experience
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("projects")}
              className="py-2 rounded-lg text-gray-700 dark:text-gray-200 hover:text-primary transition"
            >
              Projects
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="py-2 rounded-lg text-gray-700 dark:text-gray-200 hover:text-primary transition"
            >
              Contact
            </button>

            <UseMounted>
              <button
                type="button"
                onClick={() => setTheme(isDark ? "light" : "dark")}
                className="mt-2 mx-auto w-fit px-4 py-2 rounded-lg border border-primary text-primary hover:bg-primary hover:text-white transition"
              >
                {isDark ? "Light mode ☀️" : "Dark mode 🌙"}
              </button>
            </UseMounted>
          </div>
        </div>
      )}
    </motion.nav>
  );
}
