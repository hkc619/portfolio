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
  coursework?: string[]; 
  links?: { label: string; href: string }[];
};

function cn(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

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

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};

const educationItems: ExperienceItem[] = [
  {
    id: "ncsu-mcs",
    start: "2025-08",
    end: "2027-05",
    yearLabel: "2027",
    title: "Master of Computer Science",
    org: "North Carolina State University",
    location: "Raleigh, NC",
    summary:
      "Focused on systems, distributed computing, and software engineering toward infrastructure roles.",
    bullets: [
      "Built projects around backend services, data pipelines, and scalable systems.",
      "Collaborated in team settings with clear design communication and maintainability in mind.",
    ],
    stack: ["Software Engineering", "Problem solving", "Teamwork"],
    coursework: [
      "Design & Analysis of Algorithms (CSC 505)",
      "Software Engineering (CSC 510)",
      "Automated Learning & Data Mining (CSC 522)",
      "Computer Networks (CSC 570)",
      "Neural Networks (CSC 534)",
      "Architecture Of Parallel Computers (CSC 506)",
    ],
    // links: [{ label: "Coursework", href: "/coursework" }],
  },
  {
    id: "nycu-ie",
    start: "2020-09",
    end: "2024-06",
    yearLabel: "2024",
    title: "B.S. in Industrial Engineering & Management",
    org: "National Yang Ming Chiao Tung University",
    location: "Taiwan",
    summary:
      "Built a strong foundation in structured problem solving, data thinking, and system-level analysis.",
    bullets: [
      "Developed analytical thinking through operations research and data-driven decision making.",
      "Strengthened collaboration and communication through team projects and presentations.",
    ],
    stack: ["Data Analysis", "Optimization", "Systems Thinking", "Teamwork", "Problem Solving"],
    coursework: [
      "OOP",
      "Data Structure",
      "Algorithms",
      "Operating Systems",
      "Cloud Computing",
      "Deep Learning"
    ],
  },
];

const internshipItems: ExperienceItem[] = [
    {
    id: "freedom-systems",
    start: "2024-07",
    end: "2025-02",
    yearLabel: "2025",
    title: "Low-Code Engineer Intern",
    org: "Freedom Systems",
    location: "Taipei, Taiwan",
    summary: "Delivered internal tools and automation flows to improve operational efficiency.",
    bullets: [
      "Built internal approval workflows and notifications using Power Apps / Power Automate / SharePoint.",
      "Deployed and operated cloud services (Azure VM) while improving reliability of business processes.",
    ],
    stack: ["Power Apps", "JavaScript", "Node.js", "MySQL", "Azure VM"],
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

function TimelineSection({
  id,
  title,
  description,
  items,
}: {
  id: string;
  title: string;
  description?: string;
  items: ExperienceItem[];
}) {
  const [openAll, setOpenAll] = React.useState(false);
  const [openId, setOpenId] = React.useState<string | null>(items[0]?.id ?? null);

  React.useEffect(() => {
    if (openAll) setOpenId(null);
  }, [openAll]);

  return (
    <section id={id} className="scroll-mt-24">
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
            {title}
          </h2>
          {description ? (
            <p className="mt-2 max-w-2xl text-sm sm:text-base text-slate-600 dark:text-slate-300">
              {description}
            </p>
          ) : null}
        </div>

        <button
          type="button"
          onClick={() => setOpenAll((v) => !v)}
          className={cn(
            "rounded-xl px-3 py-2 text-sm font-medium",
            "border border-slate-200 dark:border-slate-800",
            "bg-white/70 dark:bg-slate-900/40 backdrop-blur",
            "text-slate-700 dark:text-slate-200",
            "hover:bg-white hover:dark:bg-slate-900 transition"
          )}
        >
          {openAll ? "Collapse all" : "Expand all"}
        </button>
      </motion.div>

      <div className="relative">
        {/* vertical line */}
        <div className="absolute left-4 top-0 h-full w-px bg-slate-200 dark:bg-slate-800" />

        <ul className="space-y-6">
          {items.map((item, idx) => {
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

                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                      {item.yearLabel}
                    </p>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
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

                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.stack.map((s) => (
                        <span
                          key={`${item.id}-${s}`}
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

                  <div className="sm:pt-1">
                    <button
                      type="button"
                      onClick={() => {
                        if (openAll) return;
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

                {/* expandable details card */}
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
                              key={`stack-${item.id}-${s}`}
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
                      </div>
                            {item.coursework && (
                            <div className="md:col-span-12">
                              <p className="mt-4 text-sm font-semibold text-slate-900 dark:text-slate-100">
                                Coursework
                              </p>
                              <ul className="mt-2 grid gap-x-6 gap-y-1 sm:grid-cols-2 text-sm text-slate-600 dark:text-slate-300">
                                {item.coursework.map((c) => (
                                  <li key={c}>• {c}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                    </div>
                  </div>
                </motion.div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default function Experience() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.22)_0%,transparent_60%)]">
      <TimelineSection
        id="education"
        title="Education"
        description="Academic background and coursework that shaped my systems and software engineering foundation."
        items={educationItems}
      />

      <div className="h-14" />

      <TimelineSection
        id="internships"
        title="Internships"
        description="Hands-on experience building and improving real systems—data workflows, automation, and reliability."
        items={internshipItems}
      />
    </section>
  );
}