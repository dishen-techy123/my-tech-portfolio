import { Code2, Layers, Wrench, BookOpen } from "lucide-react";


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

export function SkillsPage() {
  return (
    <section id="skills" className="scroll-mt-20 py-20">
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
              <h2 className="text-sm font-medium text-white">{group.title}</h2>
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
  );
}
