/**
 * One-page portfolio for Nikhil Ranga — minimal, content-first.
 */

const GITHUB = "https://github.com/Nikhilrangaa";
const EMAIL = "nranga@unc.edu";
const SUORAFLOW = `${GITHUB}/suoraflow`;
const DEMO = "https://suoraflow.nikhilranga.dev";

const PROJECTS: { name: string; blurb: string; href: string }[] = [
  {
    name: "ActionGate",
    blurb: "Real-time permissioning for AI agents.",
    href: `${GITHUB}/ActionGate`,
  },
  {
    name: "Landed",
    blurb: "FidHacks hackathon build.",
    href: `${GITHUB}/landed`,
  },
  {
    name: "Neurogaze",
    blurb: "Gaze-driven interfaces in the browser.",
    href: `${GITHUB}/Neurogaze`,
  },
];

function ArrowIcon() {
  return (
    <svg
      className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M7 17L17 7M17 7H8M17 7v9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200 antialiased">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px]"
        style={{
          background:
            "radial-gradient(600px 280px at 50% 0%, rgba(99,102,241,0.12), transparent 70%)",
        }}
      />

      <main className="relative max-w-xl mx-auto px-6">
        {/* Hero */}
        <header className="pt-28 pb-16">
          <h1 className="text-5xl font-extrabold tracking-tight text-zinc-50">
            Nikhil Ranga
          </h1>
          <p className="mt-4 text-xl text-zinc-300">I build intelligent systems.</p>
          <p className="mt-2 text-zinc-500">Computer science @ UNC Chapel Hill.</p>
          <div className="mt-7 flex gap-3">
            <a
              href={`mailto:${EMAIL}`}
              className="rounded-lg bg-indigo-600 hover:bg-indigo-500 transition-colors px-4 py-2 text-sm font-semibold text-white"
            >
              {EMAIL}
            </a>
            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-zinc-700 hover:border-zinc-500 transition-colors px-4 py-2 text-sm font-semibold text-zinc-200"
            >
              GitHub
            </a>
          </div>
        </header>

        {/* Featured: SuoraFlow */}
        <section className="pb-14">
          <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-indigo-400 mb-4">
            Featured
          </h2>
          <a
            href={DEMO}
            target="_blank"
            rel="noreferrer"
            className="group block rounded-2xl border border-zinc-800 hover:border-indigo-500/50 bg-zinc-900/60 p-7 transition-colors"
          >
            <h3 className="text-xl font-bold text-zinc-50 flex items-center gap-2">
              SuoraFlow
              <span className="text-indigo-400">
                <ArrowIcon />
              </span>
            </h3>

            {/* waveform motif */}
            <div className="mt-5 flex items-end gap-[3px] h-9 opacity-80" aria-hidden>
              {[3, 7, 5, 12, 18, 10, 22, 14, 28, 20, 34, 24, 38, 30, 26, 36, 18, 28,
                12, 22, 8, 16, 6, 12, 18, 26, 32, 24, 16, 10, 20, 28, 22, 14, 8, 5,
              ].map((h, i) => (
                <span
                  key={i}
                  className="w-[5px] rounded-full bg-gradient-to-t from-indigo-600/60 to-indigo-400"
                  style={{ height: `${h}px` }}
                />
              ))}
            </div>

            <p className="mt-5 text-sm text-zinc-400 leading-relaxed">
              Search video footage by meaning. A local-first pipeline — Whisper,
              voice-activity detection, vector embeddings — that turns raw footage
              into a searchable, exportable rough cut.
            </p>
          </a>
          <div className="mt-3 flex gap-4 px-1 text-sm">
            <a
              href={DEMO}
              target="_blank"
              rel="noreferrer"
              className="text-indigo-400 hover:text-indigo-300 font-medium"
            >
              Live demo →
            </a>
            <a
              href={SUORAFLOW}
              target="_blank"
              rel="noreferrer"
              className="text-zinc-400 hover:text-zinc-200"
            >
              Source →
            </a>
          </div>
        </section>

        {/* More */}
        <section className="pb-16">
          <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-indigo-400 mb-4">
            More
          </h2>
          <ul className="divide-y divide-zinc-800/80 border-y border-zinc-800/80">
            {PROJECTS.map((p) => (
              <li key={p.name}>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-baseline justify-between gap-6 py-4 hover:bg-zinc-900/40 px-2 -mx-2 rounded-lg transition-colors"
                >
                  <span className="font-semibold text-zinc-100 flex items-center gap-1.5 shrink-0">
                    {p.name}
                    <span className="text-indigo-400">
                      <ArrowIcon />
                    </span>
                  </span>
                  <span className="text-sm text-zinc-500 text-right">{p.blurb}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <footer className="pb-10 text-center text-xs text-zinc-600 font-mono">
          © {new Date().getFullYear()} Nikhil Ranga
        </footer>
      </main>
    </div>
  );
}
