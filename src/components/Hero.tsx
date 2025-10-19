"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-col justify-center items-center text-center h-screen bg-white dark:bg-gray-100 transition-colors duration-500">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold text-primary dark:text-primary-dark mb-4"
      >
        Hi, I’m Kyle 👋
      </motion.h1>
      <p className="text-primary dark:text-primary-dark max-w-xl">
        A Software Engineer. Currently pursuing my MCS at NC State University.
      </p>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.2)_0%,transparent_60%)]"></div>
    </section>
  );
}
