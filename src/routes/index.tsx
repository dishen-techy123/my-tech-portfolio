import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/sections/about";
import { EducationPage } from "@/components/sections/education";
import { SkillsPage } from "@/components/sections/skills";
import { ProjectsPage } from "@/components/sections/projects";
import { CertificationsPage } from "@/components/sections/certifications";
import { ContactPage } from "@/components/sections/contact";
import { useRevealOnScroll } from "@/components/site";

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

function Index() {
  useRevealOnScroll();

  return (
    <>
      {/* Home / Hero */}
      <section id="home" className="flex min-h-[70vh] flex-col justify-center py-24">
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
        <div className="reveal mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-brand px-5 py-2.5 text-sm font-medium text-brand-foreground ring-1 ring-brand/40 transition-colors hover:bg-white"
          >
            View my work
          </a>
          <a
            href="/Dishen-Hada-Resume.pdf"
            download="Dishen-Hada-Resume.pdf"
            className="rounded-lg px-5 py-2.5 text-sm font-medium text-muted-foreground ring-1 ring-white/15 transition-colors hover:bg-white/5"
          >
            Download résumé
          </a>
          <a
            href="#contact"
            className="rounded-lg px-5 py-2.5 text-sm font-medium text-muted-foreground ring-1 ring-white/15 transition-colors hover:bg-white/5"
          >
            Get in touch
          </a>
        </div>
      </section>

      <AboutPage />
      <EducationPage />
      <SkillsPage />
      <ProjectsPage />
      <CertificationsPage />
      <ContactPage />
    </>
  );
}
