import { createFileRoute } from "@tanstack/react-router";
import { Award } from "lucide-react";
import { useRevealOnScroll } from "@/components/site";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: "Certifications — Dishen Hada" },
      {
        name: "description",
        content: "Certifications earned by Dishen Hada — cloud, front-end and algorithms.",
      },
      { property: "og:title", content: "Certifications — Dishen Hada" },
      {
        property: "og:description",
        content: "Certifications earned by Dishen Hada — cloud, front-end and algorithms.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CertificationsPage,
});

const CERTIFICATIONS = [
  { title: "AWS Cloud Practitioner", issuer: "Amazon · 2024" },
  { title: "Meta Front-End Developer", issuer: "Coursera · 2023" },
  { title: "Data Structures & Algorithms", issuer: "NPTEL · 2022" },
];

function CertificationsPage() {
  useRevealOnScroll();

  return (
    <section className="py-20">
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
              <h2 className="text-sm font-medium text-white">{cert.title}</h2>
            </div>
            <p className="mt-1 font-mono text-xs text-slate-500">{cert.issuer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
