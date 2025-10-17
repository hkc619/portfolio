"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex flex-col justify-center items-center text-center h-screen bg-gradient-to-br from-purple-100 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold mb-4 text-primary"
      >
        Hi, I’m Kyle 👋
      </motion.h1>
      <p className="text-lg text-primary max-w-xl">
        I’m a Software Engineer. Currently pursuing my MCS at NC State
        University.
      </p>
      <div className="mt-6 space-x-4">
        <a
          href="#projects"
          className="mt-8 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition"
        >
          View Projects
        </a>
        <a
          href="/about"
          className="mt-8 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition"
        >
          About Me
        </a>
      </div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.2)_0%,transparent_60%)]"></div>
    </section>
  );
}
