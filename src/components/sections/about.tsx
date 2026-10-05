

export function AboutPage() {
  return (
    <section id="about" className="scroll-mt-20 py-20">
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
  );
}
