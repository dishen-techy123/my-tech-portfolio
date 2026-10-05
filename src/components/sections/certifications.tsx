import { Award } from "lucide-react";


const CERTIFICATIONS = [
  { title: "AWS Cloud Practitioner", issuer: "Amazon · 2024" },
  { title: "Meta Front-End Developer", issuer: "Coursera · 2023" },
  { title: "Data Structures & Algorithms", issuer: "NPTEL · 2022" },
];

export function CertificationsPage() {
  return (
    <section id="certifications" className="scroll-mt-20 py-20">
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
