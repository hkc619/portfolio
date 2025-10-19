"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "AI Chat Bot",
    description: "Built an end-to-end AI chatbot",
  },
  {
    title: "Next.js Calendar App",
    description:
      "Integrated Google Calendar API with full-stack Next.js + Tailwind + OAuth.",
  },
  {
    title: "OCR ID Masking Tool",
    description:
      "Python + OpenCV + Tesseract pipeline for document privacy automation.",
  },

  {
    title: "OCR ID Masking Tool",
    description:
      "Python + OpenCV + Tesseract pipeline for document privacy automation.",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col justify-center items-center text-center h-screen bg-white dark:bg-gray-100 transition-colors duration-500"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-10"
      >
        Projects
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
        {projects.map((p, idx) => (
          <div
            key={idx}
            className="bg-white shadow-lg rounded-xl p-6 hover:-translate-y-2 transition"
          >
            <h3 className="text-2xl font-semibold mb-3 text-primary">
              {p.title}
            </h3>

            <p className="text-gray-600">{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
