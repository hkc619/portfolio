"use client";

import { motion, AnimatePresence } from "framer-motion";

export type Project = {
  id: string;
  title: string;
  subtitle?: string;
  description: string; // 短描述（卡片用）
  details: {
    start: string,
    end: string,
    overview: string;
    tech: string[];
    highlights: string[];
    links?: { label: string; href: string }[];
  };
};

function formatRange(start: string, end: string) {
  const fmt = (s: string) => {
    if (s === "Present") return "Present";
    const [y, m] = s.split("-");
    const month = Number(m);
    const map = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    return `${map[month - 1]} ${y}`;
  };
  return `${fmt(start)} – ${fmt(end)}`;
}

export default function ProjectModal({
  project,
  isOpen,
  onClose,
}: {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {isOpen && project && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          aria-modal="true"
          role="dialog"
          onClick={onClose}
        >
          {/* overlay */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

          {/* panel */}
          <motion.div
            className="relative w-[92%] max-w-2xl rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-xl"
            initial={{ y: 24, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 24, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-semibold text-primary">
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                      {project.subtitle}
                    </p>
                  )}
                    {project.details.start && project.details.end && (
                   <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                    {formatRange(project.details.start, project.details.end)}
                   </p>
                  )}
                </div>

                <button
                  onClick={onClose}
                  className="rounded-lg px-3 py-1 border border-primary text-primary hover:bg-primary hover:text-white transition"
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>

              <div className="mt-5 space-y-5">
                <div>
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-100">
                    Overview
                  </p>
                  <p className="mt-2 text-gray-700 dark:text-gray-300 leading-relaxed">
                    {project.details.overview}
                  </p>
                </div>
                
                <div>
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-100">
                    Tech Stack
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.details.tech.map((t) => (
                      <span
                        key={t}
                        className="text-sm px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950/40 text-primary border border-purple-200 dark:border-purple-900"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-100">
                    Highlights
                  </p>
                  <ul className="mt-2 list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                    {project.details.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </div>

                {project.details.links?.length ? (
                  <div className="flex flex-wrap gap-3 pt-2">
                    {project.details.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary-dark transition"
                      >
                        {l.label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="px-6 pb-6 text-xs text-gray-500 dark:text-gray-400">
              Tip: 點背景或按 ✕ 關閉
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
