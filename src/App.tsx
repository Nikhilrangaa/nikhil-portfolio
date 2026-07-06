/**
 * One-page portfolio for Nikhil Ranga.
 * Dark, fast, content-first. Featured project: SuoraFlow.
 */

const GITHUB = "https://github.com/Nikhilrangaa";
const EMAIL = "nikhilranga123@gmail.com";

type Project = {
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  href: string;
};

const FEATURED: Project = {
  name: "SuoraFlow",
  tagline: "AI-assisted footage search for video editors",
  description:
    "A local-first, multimodal media-processing pipeline. Raw footage goes through " +
    "FFmpeg extraction, Silero voice-activity detection, Whisper transcription with " +
    "word-level timestamps, optional speaker diarization, and MiniLM embeddings into " +
    "pgvector — then editors search their footage by meaning (“the part where they " +
    "discuss the budget”) and assemble ranked, timestamped hits into an exportable " +
    "rough-cut timeline. One `docker compose up`, no cloud dependencies.",
  tech: [
    "Python",
    "FastAPI",
    "PostgreSQL + pgvector",
    "Redis + RQ",
    "faster-whisper",
    "FFmpeg",
    "React",
    "TypeScript",
    "Docker",
  ],
  href: `${GITHUB}/suoraflow`,
};

const PROJECTS: Project[] = [
  {
    name: "ActionGate",
    tagline: "A trust & control layer for AI agents",
    description:
      "Maps what AI-powered workflows are capable of doing and decides in real time " +
      "whether an agent should be allowed to act — permissioning for the agentic era.",
    tech: ["JavaScript", "Node.js", "AI Safety"],
    href: `${GITHUB}/ActionGate`,
  },
  {
    name: "Landed",
    tagline: "FidHacks hackathon build",
    description:
      "A hackathon project built end-to-end under deadline pressure with a small team — " +
      "shipped a working TypeScript product in a weekend.",
    tech: ["TypeScript", "React"],
    href: `${GITHUB}/landed`,
  },
  {
    name: "Neurogaze",
    tagline: "Vision-driven interaction experiments",
    description:
      "Exploring gaze- and vision-based interfaces in the browser — computer vision " +
      "meets human-computer interaction.",
    tech: ["JavaScript", "Computer Vision"],
    href: `${GITHUB}/Neurogaze`,
  },
];

const SKILLS: { label: string; items: string[] }[] = [
  { label: "Languages", items: ["Python", "TypeScript", "JavaScript", "SQL", "Shell"] },
  {
    label: "Backend & Infra",
    items: ["FastAPI", "Node.js", "PostgreSQL", "Redis", "Docker", "REST APIs"],
  },
  {
    label: "AI / Audio",
    items: [
      "Whisper / ASR",
      "Vector search (pgvector)",
      "Embeddings",
      "FFmpeg pipelines",
      "VAD & diarization",
    ],
  },
  { label: "Frontend", items: ["React", "Vite", "Tailwind CSS", "Playwright"] },
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

function TechPill({ label }: { label: string }) {
  return (
    <span className="text-xs font-mono text-indigo-300/90 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-2.5 py-0.5">
      {label}
    </span>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="max-w-3xl mx-auto px-6 py-16">
      <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-indigo-400 mb-8">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200 antialiased">
      {/* subtle top glow */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[500px]"
        style={{
          background:
            "radial-gradient(600px 300px at 50% 0%, rgba(99,102,241,0.12), transparent 70%)",
        }}
      />

      {/* Nav */}
      <nav className="relative max-w-3xl mx-auto px-6 pt-8 flex items-center justify-between">
        <span className="font-mono text-sm text-zinc-400">nikhil-ranga</span>
        <div className="flex gap-6 text-sm text-zinc-400">
          <a href="#work" className="hover:text-zinc-100 transition-colors">
            Work
          </a>
          <a href="#skills" className="hover:text-zinc-100 transition-colors">
            Skills
          </a>
          <a href="#contact" className="hover:text-zinc-100 transition-colors">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative max-w-3xl mx-auto px-6 pt-24 pb-8">
        <p className="font-mono text-indigo-400 mb-4">Hi, my name is</p>
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-zinc-50">
          Nikhil Ranga.
        </h1>
        <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-zinc-400">
          I build systems that understand media.
        </h2>
        <p className="mt-6 max-w-xl text-zinc-400 leading-relaxed">
          I&apos;m a computer science student focused on backend systems and applied
          AI — audio pipelines, vector search, and the infrastructure that makes
          machine learning products actually run. Currently building{" "}
          <a
            href={FEATURED.href}
            target="_blank"
            rel="noreferrer"
            className="text-indigo-400 hover:text-indigo-300 underline underline-offset-4 decoration-indigo-500/40"
          >
            SuoraFlow
          </a>
          , an AI footage-search engine for video editors.
        </p>
        <div className="mt-8 flex gap-4">
          <a
            href="#work"
            className="rounded-lg bg-indigo-600 hover:bg-indigo-500 transition-colors px-5 py-2.5 text-sm font-semibold text-white"
          >
            See my work
          </a>
          <a
            href={GITHUB}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-zinc-700 hover:border-zinc-500 transition-colors px-5 py-2.5 text-sm font-semibold text-zinc-200"
          >
            GitHub
          </a>
        </div>
      </header>

      {/* Featured project */}
      <Section id="work" title="Featured Project">
        <a
          href={FEATURED.href}
          target="_blank"
          rel="noreferrer"
          className="group block rounded-2xl border border-zinc-800 hover:border-indigo-500/50 bg-zinc-900/60 p-8 transition-colors"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold text-zinc-50 flex items-center gap-2">
                {FEATURED.name}
                <span className="text-indigo-400">
                  <ArrowIcon />
                </span>
              </h3>
              <p className="mt-1 text-indigo-300/90 font-medium">{FEATURED.tagline}</p>
            </div>
            <span className="hidden sm:inline-block shrink-0 font-mono text-xs text-zinc-500 border border-zinc-800 rounded-full px-3 py-1">
              flagship
            </span>
          </div>

          {/* waveform motif */}
          <div className="mt-6 flex items-end gap-[3px] h-10 opacity-80" aria-hidden>
            {[3, 6, 9, 5, 12, 18, 10, 22, 14, 28, 20, 34, 24, 38, 30, 26, 36, 18, 28, 12,
              22, 8, 16, 6, 12, 18, 26, 32, 24, 16, 10, 20, 28, 22, 14, 8, 5, 10, 6, 3,
            ].map((h, i) => (
              <span
                key={i}
                className="w-[5px] rounded-full bg-gradient-to-t from-indigo-600/60 to-indigo-400"
                style={{ height: `${h}px` }}
              />
            ))}
          </div>

          <p className="mt-6 text-zinc-400 leading-relaxed">{FEATURED.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {FEATURED.tech.map((t) => (
              <TechPill key={t} label={t} />
            ))}
          </div>
        </a>
      </Section>

      {/* Other projects */}
      <Section id="projects" title="Other Projects">
        <div className="grid sm:grid-cols-3 gap-4">
          {PROJECTS.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="group rounded-xl border border-zinc-800 hover:border-indigo-500/50 bg-zinc-900/60 p-5 transition-colors flex flex-col"
            >
              <h3 className="font-bold text-zinc-50 flex items-center gap-1.5">
                {p.name}
                <span className="text-indigo-400">
                  <ArrowIcon />
                </span>
              </h3>
              <p className="mt-0.5 text-sm text-indigo-300/80">{p.tagline}</p>
              <p className="mt-3 text-sm text-zinc-400 leading-relaxed flex-1">
                {p.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <TechPill key={t} label={t} />
                ))}
              </div>
            </a>
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Skills">
        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8">
          {SKILLS.map((group) => (
            <div key={group.label}>
              <h3 className="font-semibold text-zinc-100 mb-3">{group.label}</h3>
              <ul className="space-y-1.5">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-zinc-400 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-indigo-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-8 text-center">
          <h3 className="text-2xl font-bold text-zinc-50">Let&apos;s build something.</h3>
          <p className="mt-3 text-zinc-400 max-w-md mx-auto">
            I&apos;m open to internships, research, and interesting engineering
            problems — especially anything involving audio, media, or applied AI.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <a
              href={`mailto:${EMAIL}`}
              className="rounded-lg bg-indigo-600 hover:bg-indigo-500 transition-colors px-5 py-2.5 text-sm font-semibold text-white"
            >
              Email me
            </a>
            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-zinc-700 hover:border-zinc-500 transition-colors px-5 py-2.5 text-sm font-semibold text-zinc-200"
            >
              GitHub
            </a>
          </div>
        </div>
      </Section>

      <footer className="max-w-3xl mx-auto px-6 pb-10 text-center text-xs text-zinc-600 font-mono">
        © {new Date().getFullYear()} Nikhil Ranga · built with React + Tailwind, deployed on Vercel
      </footer>
    </div>
  );
}
