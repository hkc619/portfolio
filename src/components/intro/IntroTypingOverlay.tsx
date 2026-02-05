"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  lines?: string[];
  onDone?: () => void;
  speedMs?: number;     // typing speed
  lineDelayMs?: number; // delay between lines
  showOncePerSession?: boolean;
};

export default function IntroTypingOverlay({
  lines = [
    "kyle C.:~$ whoami",
    "MCS @ NCSU · Systems / Infrastructure",
    "kylechchiu@gmail.com:~$ open --section projects",
  ],
  onDone,
  speedMs = 15,
  lineDelayMs = 500,
  showOncePerSession = true,
}: Props) {
  const [visible, setVisible] = React.useState(false);
  const [lineIndex, setLineIndex] = React.useState(0);
  const [charIndex, setCharIndex] = React.useState(0);
  const [typed, setTyped] = React.useState<string[]>(() => lines.map(() => ""));

  // Decide whether to show overlay
  React.useEffect(() => {
    if (!showOncePerSession) {
      setVisible(true);
      return;
    }
    const key = "intro_typing_seen";
    const seen = typeof window !== "undefined" ? sessionStorage.getItem(key) : "1";
    if (seen) return;
    sessionStorage.setItem(key, "1");
    setVisible(true);
  }, [showOncePerSession]);

  // Typing engine
  React.useEffect(() => {
    if (!visible) return;
    if (lineIndex >= lines.length) return;

    const current = lines[lineIndex];
    if (charIndex < current.length) {
      const t = window.setTimeout(() => {
        setTyped((prev) => {
          const next = [...prev];
          next[lineIndex] = current.slice(0, charIndex + 1);
          return next;
        });
        setCharIndex((c) => c + 1);
      }, speedMs);

      return () => window.clearTimeout(t);
    } else {
      const t = window.setTimeout(() => {
        setLineIndex((i) => i + 1);
        setCharIndex(0);
      }, lineDelayMs);

      return () => window.clearTimeout(t);
    }
  }, [visible, lineIndex, charIndex, lines, speedMs, lineDelayMs]);

  // Auto close after finished
  React.useEffect(() => {
    if (!visible) return;
    if (lineIndex < lines.length) return;

    const t = window.setTimeout(() => {
      setVisible(false);
      onDone?.();
    }, 700);

    return () => window.clearTimeout(t);
  }, [visible, lineIndex, lines.length, onDone]);

  // Allow skip
  React.useEffect(() => {
    if (!visible) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setVisible(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={() => setVisible(false)}
          role="dialog"
          aria-label="Intro typing overlay"
        >
          <motion.div
            className="w-[92vw] max-w-2xl rounded-2xl border border-slate-800 bg-slate-950/60 p-6 shadow-xl backdrop-blur"
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.98, opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <span className="h-3 w-3 rounded-full bg-green-500/80" />
              </div>
              <button
                type="button"
                onClick={() => setVisible(false)}
                className="text-xs text-slate-400 hover:text-slate-200 transition"
              >
                Skip (Esc)
              </button>
            </div>

            <div className="mt-5 font-mono text-sm sm:text-base text-slate-200">
              {typed.map((line, i) => (
                <div key={i} className="leading-7">
                  <span>{line}</span>
                  {i === lineIndex && (
                    <span className="ml-1 inline-block h-5 w-[10px] translate-y-[3px] bg-slate-200 animate-pulse" />
                  )}
                </div>
              ))}
            </div>

            <p className="mt-6 text-xs text-slate-400">
              Tip: click to skip. This plays once per session.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
