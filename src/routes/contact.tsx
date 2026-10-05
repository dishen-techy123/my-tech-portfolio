import { createFileRoute } from "@tanstack/react-router";
import { Github, Linkedin } from "lucide-react";
import { GITHUB_URL, LINKEDIN_URL, useRevealOnScroll } from "@/components/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Dishen Hada" },
      {
        name: "description",
        content: "Contact Dishen Hada — open to internships and collaborations.",
      },
      { property: "og:title", content: "Contact — Dishen Hada" },
      {
        property: "og:description",
        content: "Contact Dishen Hada — open to internships and collaborations.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  useRevealOnScroll();

  return (
    <section className="py-24">
      <div className="reveal rounded-2xl bg-white/5 p-10 ring-1 ring-white/10 md:p-14">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-brand/70">
          06 — Contact
        </p>
        <h1 className="mt-5 max-w-[24ch] text-balance text-4xl font-semibold leading-tight text-white">
          Let's build something worth shipping.
        </h1>
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
  );
}
