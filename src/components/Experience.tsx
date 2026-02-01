"use client";

import * as React from "react";
import { motion } from "framer-motion";

type ExperienceItem = {
  id: string;
  start: string; // e.g. "2023-07"
  end: string; // e.g. "2023-12" or "Present"
  yearLabel: string; // e.g. "2023"
  title: string; // role
  org: string; // company/school
  location?: string;
  summary: string; // 1-liner
  bullets: string[];
  stack: string[];
  links?: { label: string; href: string }[];
};

const experiences: ExperienceItem[] = [
    {
    id: "freedom-systems",
    start: "2024-07",
    end: "2025-02",
    yearLabel: "2024",
    title: "Low-Code Engineer Intern",
    org: "Freedom Systems",
    location: "Taipei, Taiwan",
    summary: "Delivered internal tools and automation flows to improve operational efficiency.",
    bullets: [
      "Built internal approval workflows and notifications using Power Apps / Power Automate / SharePoint.",
      "Deployed and operated cloud services (Azure VM) while improving reliability of business processes.",
    ],
    stack: ["Power Apps", "Power Automate", "SharePoint", "Azure VM"],
  },
  {
    id: "supergeo-intern",
    start: "2024-01",
    end: "2024-06",
    yearLabel: "2024",
    title: "Project Intern",
    org: "SuperGeo",
    location: "Taiwan",
    summary: "Built and optimized data processing workflows for large-scale updates and privacy tasks.",
    bullets: [
      "Processed and cleaned 100k+ records using Python + PostgreSQL to support reliable downstream usage.",
      "Designed multithreaded update pipelines to improve throughput for large batch operations.",
      "Implemented OCR-based ID masking workflow to meet data privacy requirements and reduce manual effort.",
    ],
    stack: ["Python", "PostgreSQL", "Multithreading", "OCR", "Data Cleaning"],
  },

];

// --- helpers ---
function formatRange(start: string, end: string) {
  const fmt = (s: string) => {
    if (s === "Present") return "Present";
    const [y, m] = s.split("-");
    const month = Number(m);
    const map = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${map[month - 1]} ${y}`;
  };
  return `${fmt(start)} – ${fmt(end)}`;
}

function cn(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};

export default function Experience() {
  const [openAll, setOpenAll] = React.useState(false);
  const [openId, setOpenId] = React.useState<string | null>(experiences[1]?.id ?? null);

  // if openAll toggled on, keep openId null (not needed)
  React.useEffect(() => {
    if (openAll) setOpenId(null);
  }, [openAll]);

  return (
    <section id="experience" className="scroll-mt-24">
      <div className="mx-auto max-w-4xl px-4">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        transition={{ duration: 0.5 }}
        className="mb-8 flex items-end justify-between gap-4"
      >
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Experience
          </h2>
          <p className="mt-2 max-w-2xl text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Timeline-first view for fast scanning, with expandable details for engineering depth.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setOpenAll((v) => !v)}
            className={cn(
              "rounded-xl px-3 py-2 text-sm font-medium",
              "border border-slate-200 dark:border-slate-800",
              "bg-white/70 dark:bg-slate-900/40 backdrop-blur",
              "text-slate-700 dark:text-slate-200",
              "hover:bg-white hover:dark:bg-slate-900",
              "transition"
            )}
          >
            {openAll ? "Collapse all" : "Expand all"}
          </button>
        </div>
      </motion.div>

      <div className="relative">
        {/* vertical line */}
        <div className="absolute left-4 top-0 h-full w-px bg-slate-200 dark:bg-slate-800" />

        <ul className="space-y-6">
          {experiences.map((item, idx) => {
            const isOpen = openAll || openId === item.id;
            return (
              <motion.li
                key={item.id}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                transition={{ duration: 0.45, delay: Math.min(idx * 0.05, 0.2) }}
                className="relative pl-12"
              >
                {/* dot */}
                <div
                  className={cn(
                    "absolute left-4 top-6 -translate-x-1/2",
                    "h-3 w-3 rounded-full",
                    "bg-violet-600 dark:bg-violet-500",
                    "ring-4 ring-white dark:ring-slate-950"
                  )}
                />

                {/* header row */}
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                      {item.yearLabel}
                    </p>

                    <h3 className="mt-1 text-lg font-semibold text-slate-900 dark:text-slate-100">
                      {item.title}{" "}
                      <span className="text-slate-500 dark:text-slate-400 font-medium">
                        · {item.org}
                      </span>
                    </h3>

                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                      {formatRange(item.start, item.end)}
                      {item.location ? <span> · {item.location}</span> : null}
                    </p>

                    <p className="mt-3 text-sm sm:text-base text-slate-700 dark:text-slate-200">
                      {item.summary}
                    </p>

                    {/* stack badges */}
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.stack.map((s) => (
                        <span
                          key={s}
                          className={cn(
                            "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium",
                            "bg-slate-100 text-slate-700",
                            "dark:bg-slate-900 dark:text-slate-200",
                            "border border-slate-200 dark:border-slate-800"
                          )}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* toggle button */}
                  <div className="sm:pt-6">
                    <button
                      type="button"
                      onClick={() => {
                        if (openAll) return; // openAll manages everything
                        setOpenId((cur) => (cur === item.id ? null : item.id));
                      }}
                      className={cn(
                        "w-fit rounded-xl px-3 py-2 text-sm font-medium",
                        "border border-slate-200 dark:border-slate-800",
                        "bg-white/70 dark:bg-slate-900/40 backdrop-blur",
                        "text-slate-700 dark:text-slate-200",
                        "hover:bg-white hover:dark:bg-slate-900 transition"
                      )}
                      aria-expanded={isOpen}
                      aria-controls={`${item.id}-details`}
                    >
                      {isOpen ? "Hide details" : "Show details"}
                    </button>
                  </div>
                </div>

                {/* expandable card */}
                <motion.div
                  id={`${item.id}-details`}
                  initial={false}
                  animate={isOpen ? "open" : "collapsed"}
                  variants={{
                    open: { height: "auto", opacity: 1, marginTop: 16 },
                    collapsed: { height: 0, opacity: 0, marginTop: 0 },
                  }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <div
                    className={cn(
                      "rounded-2xl p-4 sm:p-5",
                      "border border-slate-200 dark:border-slate-800",
                      "bg-white dark:bg-slate-950",
                      "shadow-sm"
                    )}
                  >
                    <div className="grid gap-4 md:grid-cols-12">
                      <div className="md:col-span-8">
                        <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                          Highlights
                        </p>
                        <ul className="mt-2 space-y-2 text-sm text-slate-700 dark:text-slate-200">
                          {item.bullets.map((b, i) => (
                            <li key={i} className="flex gap-2">
                              <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-slate-400 dark:bg-slate-600" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="md:col-span-4">
                        <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                          Tech Stack
                        </p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {item.stack.map((s) => (
                            <span
                              key={`${item.id}-${s}`}
                              className={cn(
                                "inline-flex items-center rounded-lg px-2 py-1 text-xs font-medium",
                                "bg-slate-50 text-slate-700",
                                "dark:bg-slate-900 dark:text-slate-200",
                                "border border-slate-200 dark:border-slate-800"
                              )}
                            >
                              {s}
                            </span>
                          ))}
                        </div>

                        {item.links?.length ? (
                          <>
                            <p className="mt-4 text-sm font-semibold text-slate-900 dark:text-slate-100">
                              Links
                            </p>
                            <div className="mt-2 flex flex-col gap-2">
                              {item.links.map((l) => (
                                <a
                                  key={l.href}
                                  href={l.href}
                                  className={cn(
                                    "text-sm font-medium",
                                    "text-violet-700 dark:text-violet-400",
                                    "hover:underline underline-offset-4"
                                  )}
                                >
                                  {l.label}
                                </a>
                              ))}
                            </div>
                          </>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.li>
            );
          })}
        </ul>
      </div>
      </div>
    </section>
    
  );
}

