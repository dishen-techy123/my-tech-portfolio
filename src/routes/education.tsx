import { createFileRoute } from "@tanstack/react-router";
import { useRevealOnScroll } from "@/components/site";

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { title: "Education — Dishen Hada" },
      {
        name: "description",
        content: "Education of Dishen Hada — B.Tech Computer Science and Engineering at JECRC.",
      },
      { property: "og:title", content: "Education — Dishen Hada" },
      {
        property: "og:description",
        content: "Education of Dishen Hada — B.Tech Computer Science and Engineering at JECRC.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EducationPage,
});

function EducationPage() {
  useRevealOnScroll();

  return (
    <section className="py-20">
      <p className="reveal font-mono text-xs uppercase tracking-[0.3em] text-brand/70">
        02 — Education
      </p>
      <div className="mt-8 space-y-4">
        <div className="reveal rounded-xl bg-white/5 p-6 ring-1 ring-white/10">
          <div className="flex items-baseline justify-between">
            <h1 className="text-lg font-medium text-white">
              B.Tech, Computer Science and Engineering
            </h1>
            <span className="font-mono text-xs text-slate-500">2022 — 2026</span>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Undergraduate at JECRC
          </p>
        </div>
        <div className="reveal rounded-xl bg-white/5 p-6 ring-1 ring-white/10">
          <div className="flex items-baseline justify-between">
            <h2 className="text-lg font-medium text-white">
              Higher Secondary, PCM + CS
            </h2>
            <span className="font-mono text-xs text-slate-500">2020 — 2022</span>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Your School Name · 94%
          </p>
        </div>
      </div>
    </section>
  );
}
