

export function EducationPage() {
  return (
    <section id="education" className="scroll-mt-20 py-20">
      <p className="reveal font-mono text-xs uppercase tracking-[0.3em] text-brand/70">
        02 — Education
      </p>
      <div className="mt-8 space-y-4">
        <div className="reveal rounded-xl bg-white/5 p-6 ring-1 ring-white/10">
          <div className="flex items-baseline justify-between">
            <h2 className="text-lg font-medium text-white">
              B.Tech, Computer Science and Engineering
            </h2>
            <span className="font-mono text-xs text-slate-500">2026 — 2030</span>
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
            <span className="font-mono text-xs text-slate-500">2024 — 2026</span>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Scotle High School · 94%
          </p>
        </div>
      </div>
    </section>
  );
}
