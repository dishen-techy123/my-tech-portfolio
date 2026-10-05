import projectDashboard from "@/assets/project-dashboard.jpg";
import projectNotes from "@/assets/project-notes.jpg";


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

export function ProjectsPage() {
  return (
    <section id="projects" className="scroll-mt-20 py-20">
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
              <h2 className="text-lg font-medium text-white">{project.title}</h2>
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
  );
}
