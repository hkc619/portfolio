"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative h-full overflow-hidden">
      {/* Background color */}
      <div className="absolute inset-0 bg-transparent" />

      {/* Glow (different for light/dark) */}
      <div
        aria-hidden
        className="
    pointer-events-none absolute inset-0 z-0
    bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.22)_0%,transparent_60%)]
    dark:bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.15)_0%,transparent_70%)]
  "
      />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-bold text-primary mb-4 dark:text-primary-light"
        >
          Hi, I’m Kyle 👋
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-xl text-lg text-gray-700 dark:text-gray-200"
        >
          Software Engineer. Currently pursuing my MCS at NC State University.
        </motion.p>
      </div>
    </div>
  );
}
