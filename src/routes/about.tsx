import { createFileRoute } from "@tanstack/react-router";
import { useRevealOnScroll } from "@/components/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Dishen Hada" },
      {
        name: "description",
        content: "About Dishen Hada, a B.Tech Computer Science student focused on craft.",
      },
      { property: "og:title", content: "About — Dishen Hada" },
      {
        property: "og:description",
        content: "About Dishen Hada, a B.Tech Computer Science student focused on craft.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  useRevealOnScroll();

  return (
    <section className="py-20">
      <p className="reveal font-mono text-xs uppercase tracking-[0.3em] text-brand/70">
        01 — About me
      </p>
      <div className="reveal mt-8 grid grid-cols-1 gap-8 md:grid-cols-[1fr_1.4fr]">
        <h1 className="max-w-[20ch] text-balance text-3xl font-semibold leading-tight text-white">
          A developer who treats craft as the whole job.
        </h1>
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
  );
}
