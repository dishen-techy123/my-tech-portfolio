import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Github, Linkedin, Award, Code2, Layers, Wrench, BookOpen } from "lucide-react";
import projectDashboard from "@/assets/project-dashboard.jpg";
import projectNotes from "@/assets/project-notes.jpg";

const GITHUB_URL = "https://github.com/dishen-techy123";
const LINKEDIN_URL = "https://linkedin.com/in/dishenhada";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dishen Hada — B.Tech Computer Science Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Dishen Hada, a B.Tech Computer Science student building clean interfaces and reliable systems. Projects, skills, certifications and contact.",
      },
      { property: "og:title", content: "Dishen Hada — B.Tech Computer Science Portfolio" },
      {
        property: "og:description",
        content:
          "Portfolio of Dishen Hada, a B.Tech Computer Science student building clean interfaces and reliable systems.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certs", href: "#certs" },
  { label: "Contact", href: "#contact" },
];

const SKILL_GROUPS = [
  {
    title: "Languages",
    icon: Code2,
    items: ["Python", "JavaScript", "TypeScript", "C++", "C Programming"],
  },
  {
    title: "Frameworks",
    icon: Layers,
    items: ["React", "Next.js", "Node / Express", "Tailwind", "Web Development"],
  },
  {
    title: "Tooling",
    icon: Wrench,
    items: ["Git / GitHub", "PostgreSQL", "Docker", "Figma"],
  },
  {
    title: "Core Coursework",
    icon: BookOpen,
    items: ["Data Structures", "Calculus"],
  },
];

const PROJECTS = [
  {
    title: "Lumen Analytics",
    description:
      "A real-time metrics dashboard with streaming charts and alerting for small product teams.",
    tags: ["Next.js", "WebSockets", "D3"],
    image: projectDashboard,
    alt: "Lumen Analytics dashboard interface in cool blue tones",
  },
  {
    title: "Drift Notes",
    description:
      "A markdown-first note-taking app with instant search and offline sync across devices.",
    tags: ["React", "IndexedDB", "PWA"],
    image: projectNotes,
    alt: "Drift Notes mobile app interface with frosted glass cards",
  },
];

const CERTIFICATIONS = [
  { title: "AWS Cloud Practitioner", issuer: "Amazon · 2024" },
  { title: "Meta Front-End Developer", issuer: "Coursera · 2023" },
  { title: "Data Structures & Algorithms", issuer: "NPTEL · 2022" },
];

function useRevealOnScroll() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function SocialIcons() {
  return (
    <div className="flex items-center gap-3">
      <a
        href={GITHUB_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="grid size-9 place-items-center rounded-lg bg-white/5 ring-1 ring-white/10 text-muted-foreground transition-colors hover:bg-white/10 hover:text-foreground"
      >
        <Github size={18} />
      </a>
      <a
        href={LINKEDIN_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="grid size-9 place-items-center rounded-lg bg-white/5 ring-1 ring-white/10 text-muted-foreground transition-colors hover:bg-white/10 hover:text-foreground"
      >
        <Linkedin size={18} />
      </a>
    </div>
  );
}

function Index() {
  useRevealOnScroll();

  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      {/* Ambient glow blobs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-32 h-[520px] w-[520px] rounded-full bg-brand/20 blur-[130px]" />
        <div className="absolute top-24 right-0 h-[460px] w-[460px] rounded-full bg-glow/15 blur-[140px]" />
        <div className="absolute bottom-0 left-1/3 h-[420px] w-[420px] rounded-full bg-brand/10 blur-[150px]" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="font-mono text-sm font-medium text-white">
            Dishen Hada<span className="text-brand">.</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <SocialIcons />
        </div>
      </header>

      <main className="relative mx-auto max-w-7xl px-6">
        {/* Home / Hero */}
        <section className="flex min-h-[80vh] flex-col justify-center py-24">
          <p className="reveal font-mono text-xs uppercase tracking-[0.35em] text-brand/80">
            {"// B.Tech Computer Science"}
          </p>
          <h1 className="reveal mt-6 max-w-[16ch] text-balance text-6xl font-semibold leading-none text-white">
            Building calm, precise software.
          </h1>
          <p className="reveal mt-6 max-w-[52ch] text-pretty text-lg leading-relaxed text-muted-foreground">
            I'm Dishen Hada — a B.Tech CS student focused on clean interfaces and
            reliable systems. I care about the details most people never notice.
          </p>
          <div className="reveal mt-9 flex items-center gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-brand px-5 py-2.5 text-sm font-medium text-brand-foreground ring-1 ring-brand/40 transition-colors hover:bg-white"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="rounded-lg px-5 py-2.5 text-sm font-medium text-muted-foreground ring-1 ring-white/15 transition-colors hover:bg-white/5"
            >
              Get in touch
            </a>
          </div>
        </section>

        {/* About */}
        <section id="about" className="border-t border-white/5 py-20">
          <p className="reveal font-mono text-xs uppercase tracking-[0.3em] text-brand/70">
            01 — About me
          </p>
          <div className="reveal mt-8 grid grid-cols-1 gap-8 md:grid-cols-[1fr_1.4fr]">
            <h2 className="max-w-[20ch] text-balance text-3xl font-semibold leading-tight text-white">
              A developer who treats craft as the whole job.
            </h2>
            <div className="space-y-4 text-pretty text-base leading-relaxed text-muted-foreground">
              <p>
                I started programming out of curiosity and stayed for the craft.
                Today I build full-stack features end to end, from database schema
                to the last pixel of a hover state.
              </p>
              <p>
                Outside of coursework I contribute to open-source tooling and read
                too much about design systems. My goal is simple: ship software
                that feels obvious to use.
              </p>
            </div>
          </div>
        </section>

        {/* Education */}
        <section id="education" className="border-t border-white/5 py-20">
          <p className="reveal font-mono text-xs uppercase tracking-[0.3em] text-brand/70">
            02 — Education
          </p>
          <div className="mt-8 space-y-4">
            <div className="reveal rounded-xl bg-white/5 p-6 ring-1 ring-white/10">
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-medium text-white">
                  B.Tech, Computer Science and Engineering
                </h3>
                <span className="font-mono text-xs text-slate-500">2022 — 2026</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Undergraduate at JECRC
              </p>
            </div>
            <div className="reveal rounded-xl bg-white/5 p-6 ring-1 ring-white/10">
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-medium text-white">
                  Higher Secondary, PCM + CS
                </h3>
                <span className="font-mono text-xs text-slate-500">2020 — 2022</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Your School Name · 94%
              </p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="border-t border-white/5 py-20">
          <p className="reveal font-mono text-xs uppercase tracking-[0.3em] text-brand/70">
            03 — Skills
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SKILL_GROUPS.map((group) => (
              <div
                key={group.title}
                className="reveal rounded-xl bg-white/5 p-6 ring-1 ring-white/10"
              >
                <div className="flex items-center gap-2">
                  <group.icon size={16} className="text-brand" />
                  <h3 className="text-sm font-medium text-white">{group.title}</h3>
                </div>
                <ul className="mt-4 space-y-2 font-mono text-sm text-muted-foreground">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="border-t border-white/5 py-20">
          <p className="reveal font-mono text-xs uppercase tracking-[0.3em] text-brand/70">
            04 — Projects
          </p>
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
            {PROJECTS.map((project) => (
              <article
                key={project.title}
                className="reveal overflow-hidden rounded-xl bg-white/5 ring-1 ring-white/10 transition-colors hover:ring-white/20"
              >
                <img
                  src={project.image}
                  alt={project.alt}
                  className="aspect-[16/9] w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-medium text-white">{project.title}</h3>
                  <p className="mt-2 text-pretty text-sm text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2 font-mono text-xs text-brand/90">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-brand/10 px-2 py-1 ring-1 ring-brand/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section id="certs" className="border-t border-white/5 py-20">
          <p className="reveal font-mono text-xs uppercase tracking-[0.3em] text-brand/70">
            05 — Certifications
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.title}
                className="reveal rounded-xl bg-white/5 p-5 ring-1 ring-white/10"
              >
                <div className="flex items-center gap-2">
                  <Award size={15} className="text-brand" />
                  <p className="text-sm font-medium text-white">{cert.title}</p>
                </div>
                <p className="mt-1 font-mono text-xs text-slate-500">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="border-t border-white/5 py-24">
          <div className="reveal rounded-2xl bg-white/5 p-10 ring-1 ring-white/10 md:p-14">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-brand/70">
              06 — Contact
            </p>
            <h2 className="mt-5 max-w-[24ch] text-balance text-4xl font-semibold leading-tight text-white">
              Let's build something worth shipping.
            </h2>
            <p className="mt-4 max-w-[48ch] text-pretty text-base leading-relaxed text-muted-foreground">
              Open to internships and collaborations. The fastest way to reach me
              is email — I reply within a day.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="mailto:dishen@example.com"
                className="rounded-lg bg-brand px-5 py-2.5 text-sm font-medium text-brand-foreground ring-1 ring-brand/40 transition-colors hover:bg-white"
              >
                dishen@example.com
              </a>
              <div className="flex items-center gap-3">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium text-muted-foreground ring-1 ring-white/15 transition-colors hover:bg-white/5"
                >
                  <Github size={16} /> GitHub
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium text-muted-foreground ring-1 ring-white/15 transition-colors hover:bg-white/5"
                >
                  <Linkedin size={16} /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row">
          <p className="font-mono text-xs text-slate-500">
            © 2026 Dishen Hada — built with care.
          </p>
          <SocialIcons />
        </div>
      </footer>
    </div>
  );
}
