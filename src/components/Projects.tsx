"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProjectModal, { Project } from "@/components/ProjectModal";

const PROJECTS: Project[] = [
   {
    id: "chatbot",
    title: "AI chatbot",
    subtitle: "Privacy automation",
    description:
      "Automated masking of sensitive fields on ID documents using OCR + CV.",
    details: {
      overview:
        "Detects text regions and masks sensitive fields for privacy compliance. Emphasized accuracy, speed, and reliable preprocessing for noisy scans.",
      tech: ["Python", "OpenCV", "Tesseract", "NumPy"],
      highlights: [
        "Built preprocessing to improve OCR accuracy on low-quality images",
        "Implemented masking rules for common sensitive fields",
        "Packaged as a script/tool for batch processing",
      ],
    },
  },
  {
    id: "pettycash",
    title: "Petty cash",
    subtitle: "Privacy automation",
    description:
      "Automated masking of sensitive fields on ID documents using OCR + CV.",
    details: {
      overview:
        "Detects text regions and masks sensitive fields for privacy compliance. Emphasized accuracy, speed, and reliable preprocessing for noisy scans.",
      tech: ["Python", "OpenCV", "Tesseract", "NumPy"],
      highlights: [
        "Built preprocessing to improve OCR accuracy on low-quality images",
        "Implemented masking rules for common sensitive fields",
        "Packaged as a script/tool for batch processing",
      ],
    },
  },
  {
    id: "ocr",
    title: "OCR ID Masking Tool",
    subtitle: "Privacy automation",
    description:
      "Automated masking of sensitive fields on ID documents using OCR + CV.",
    details: {
      overview:
        "Detects text regions and masks sensitive fields for privacy compliance. Emphasized accuracy, speed, and reliable preprocessing for noisy scans.",
      tech: ["Python", "OpenCV", "Tesseract", "NumPy"],
      highlights: [
        "Built preprocessing to improve OCR accuracy on low-quality images",
        "Implemented masking rules for common sensitive fields",
        "Packaged as a script/tool for batch processing",
      ],
    },
  },
];
const C_PROJECTS: Project[] = [
    {
    id: "Hungrywolf",
    title: "Netflix Recommander System",
    subtitle: "Function update",
    description:
      "Add real time tracking system for delievery",
    details: {
      overview:
        "A responsive calendar UI with event management and extensible integrations. Built with a clean component architecture and a focus on maintainability.",
      tech: ["Node.js", "JavaScript", "React", "Tailwind", "Firestore"],
      highlights: [
        "Implemented modular UI components + state management patterns",
        "Built secure server actions / API routes for data operations",
        "Optimized UX with loading states and predictable error handling",
      ],
    },
  },
  {
    id: "Hungrywolf",
    title: "Hungry wolf ",
    subtitle: "Function update",
    description:
      "Add real time tracking system for delievery",
    details: {
      overview:
        "A responsive calendar UI with event management and extensible integrations. Built with a clean component architecture and a focus on maintainability.",
      tech: ["Node.js", "JavaScript", "React", "Tailwind", "Firestore"],
      highlights: [
        "Implemented modular UI components + state management patterns",
        "Built secure server actions / API routes for data operations",
        "Optimized UX with loading states and predictable error handling",
      ],
    },
  },
  {
    id: "calendar",
    title: "EpiCourier Calendar App",
    subtitle: "Full-stack scheduling + integrations",
    description:
      "Built a full-stack calendar experience with modern Next.js patterns.",
    details: {
      overview:
        "A responsive calendar UI with event management and extensible integrations. Built with a clean component architecture and a focus on maintainability.",
      tech: ["Next.js", "TypeScript", "React", "Tailwind", "Supabase"],
      highlights: [
        "Implemented modular UI components + state management patterns",
        "Built secure server actions / API routes for data operations",
        "Optimized UX with loading states and predictable error handling",
      ],
    },
  },
];

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [open, setOpen] = useState(false);

  const close = () => {
    setOpen(false);
    // 等動畫結束再清空，避免閃爍
    setTimeout(() => setSelected(null), 200);
  };

  // ESC 關閉
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return (
    <section
      id="projects"
      className="h-screen py-20 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.22)_0%,transparent_60%)] text-center"
    >
      <h2 className="text-4xl font-bold text-primary mb-10">Projects Experience</h2>
      <h3 className="text-3xl font-bold text-primary mb-10">Projects</h3>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
        {PROJECTS.map((p) => (
          <motion.button
            key={p.id}
            type="button"
            onClick={() => {
              setSelected(p);
              setOpen(true);
            }}
            whileHover={{ y: -6 }}
            whileTap={{ scale: 0.98 }}
            className="text-left bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-sm hover:shadow-lg transition focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <h3 className="text-xl font-semibold text-primary">{p.title}</h3>
            {p.subtitle && (
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                {p.subtitle}
              </p>
            )}
            <p className="mt-4 text-gray-700 dark:text-gray-300">
              {p.description}
            </p>
            <p className="mt-4 text-sm text-primary underline underline-offset-4">
              View details →
            </p>
          </motion.button>
        ))}
      </div>
      <h2 className="text-3xl font-bold text-primary m-10">Course Projects</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
        {C_PROJECTS.map((p) => (
          <motion.button
            key={p.id}
            type="button"
            onClick={() => {
              setSelected(p);
              setOpen(true);
            }}
            whileHover={{ y: -6 }}
            whileTap={{ scale: 0.98 }}
            className="text-left bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-sm hover:shadow-lg transition focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <h3 className="text-xl font-semibold text-primary">{p.title}</h3>
            {p.subtitle && (
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                {p.subtitle}
              </p>
            )}
            <p className="mt-4 text-gray-700 dark:text-gray-300">
              {p.description}
            </p>
            <p className="mt-4 text-sm text-primary underline underline-offset-4">
              View details →
            </p>
          </motion.button>
        ))}
      </div>

      <ProjectModal project={selected} isOpen={open} onClose={close} />
    </section>
  );
}
