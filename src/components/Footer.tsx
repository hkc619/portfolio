import Image from 'next/image';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-28 border-t border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-6xl px-6 py-14">
        {/* Top row: signature + CTAs */}
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row sm:items-end">
          {/* Signature block */}
          <div className="text-center sm:text-left">
            <Image
              src="https://github.com/hkc619/portfolio/blob/main/public/img/KYLECHCHIU-signature.svg"
              alt="Kyle Chiu signature"
              width={320}
              height={56}
              className="h-14 w-auto max-w-[320px] opacity-90 dark:opacity-80"
            />
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
              Systems-minded SWE · Interested in infrastructure & reliability
            </p>
          </div>

          {/* Primary links */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-end">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-800 shadow-sm transition hover:shadow
                         dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100"
            >
              Resume (PDF)
            </a>

            <a
              href="https://github.com/hkc619"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:text-slate-900
                         dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:hover:text-slate-100"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:text-slate-900
                         dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:hover:text-slate-100"
            >
              LinkedIn
            </a>

            <a
              href="mailto:YOUR_EMAIL_HERE"
              className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:text-slate-900
                         dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:hover:text-slate-100"
            >
              Email
            </a>
          </div>
        </div>

        {/* Bottom row: small print */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-6 text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400 sm:flex-row">
          <p>© {year} Kyle Chiu. Built with Next.js + Tailwind.</p>
          <p>Raleigh, NC · America/New_York</p>
        </div>
      </div>
    </footer>
  );
}
