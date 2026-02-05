"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProjectModal, { Project } from "@/components/ProjectModal";

const PROJECTS: Project[] = [
{
  id: "chatbot",
  title: "AI Chatbot",
  subtitle: "Service 24/7",
  description:
    "An AI-powered chatbot that provides instant, automated responses using NLP and LLM-based reasoning.",
  details: {
    overview:
      "Designed and built an AI chatbot capable of handling user queries 24/7 with consistent and context-aware responses. Focused on reliability, response quality, and smooth user interaction for real-world usage scenarios.",
    tech: ["Python", "LLM API", "FastAPI", "REST API"],
    highlights: [
      "Integrated large language models to generate natural and context-aware responses",
      "Designed prompt and response handling logic to improve answer consistency",
      "Implemented a lightweight backend service to support real-time chat interactions",
    ],
    start: "2024-11",
    end: "2025-01"
  },
},
  {
  id: "pettycash",
  title: "Petty Cash",
  subtitle: "Internal Workflow Automation",
  description:
    "An internal petty cash management system built with Microsoft Power Platform to automate expense submission and approval workflows.",
  details: {
    overview:
      "Designed and implemented a petty cash management application using Power Apps, Power Automate, and SharePoint. The system streamlines expense submission, approval, and record management, reducing manual effort and improving data consistency in internal workflows.",
    tech: ["Power Apps", "Power Automate", "SharePoint"],
    highlights: [
      "Built a Power Apps interface for submitting and tracking petty cash requests",
      "Automated approval workflows and notifications using Power Automate",
      "Designed SharePoint lists as the backend data store for expense records and status tracking",
    ],
    start: "2024-07",
    end: "2024-10"
  },
},
  {
    id: "ocr",
    title: "OCR ID Masking Tool",
    subtitle: "Privacy automation",
    description:
      "Automated masking of sensitive fields on ID documents using OCR + CV.",
    details: {
      start:"",
      end:"",
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
  id: "netflixrecommander",
  title: "Netflix Movie Recommender System",
  subtitle: "Collaborative Filtering & Evaluation",
  description:
    "A movie recommendation system built on the Netflix dataset using collaborative filtering techniques and quantitative evaluation.",
  details: {
    overview:
      "Developed a movie recommender system using the Netflix dataset to predict user ratings and generate personalized recommendations. Explored multiple collaborative filtering approaches and focused on model comparison, evaluation, and error analysis.",
    tech: ["Python", "NumPy", "Pandas", "Scikit-learn"],
    highlights: [
      "Implemented user-based and item-based collaborative filtering models",
      "Applied matrix factorization techniques to capture latent user–item preferences",
      "Evaluated model performance using RMSE and conducted comparative analysis",
    ],
    start: "2024-09",
    end: "2024-12"
  },
},
  {
  id: "hungrywolf",
  title: "Hungry Wolf",
  subtitle: "Real-Time Delivery Tracking",
  description:
    "A delivery tracking system with real-time location updates using Google Maps API and cloud-based data synchronization.",
  details: {
    overview:
      "Built a food delivery tracking system that displays real-time courier locations on an interactive map. Focused on low-latency updates, reliable data synchronization, and a smooth user experience for tracking active deliveries.",
    tech: [
      "JavaScript",
      "React",
      "Node.js",
      "Google Maps API",
      "Firestore"
    ],
    highlights: [
      "Integrated Google Maps API to visualize real-time courier locations",
      "Implemented live location updates using Firestore real-time listeners",
      "Designed backend APIs to handle location updates and delivery state transitions",
    ],
    start: "2025-11",
    end: "2025-12"
  },
},
  {
    id: "epicourier",
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
      start: "2025-09",
      end: "2025-10"
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
