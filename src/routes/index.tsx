import { createFileRoute, Link } from "@tanstack/react-router";
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

const SECTION_CARDS = [
  {
    to: "/about",
    label: "About me",
    blurb: "Who I am and how I approach building software.",
  },
  {
    to: "/education",
    label: "Education",
    blurb: "B.Tech in Computer Science and Engineering at JECRC.",
  },
  {
    to: "/skills",
    label: "Skills",
    blurb: "Languages, frameworks, tooling and core coursework.",
  },
  {
    to: "/projects",
    label: "Projects",
    blurb: "Things I've designed, built and shipped.",
  },
  {
    to: "/certifications",
    label: "Certifications",
    blurb: "Courses and credentials earned along the way.",
  },
  {
    to: "/contact",
    label: "Contact",
    blurb: "Open to internships and collaborations.",
  },
];

function Index() {
  useRevealOnScroll();

  return (
    <>
      {/* Home / Hero */}
      <section className="flex min-h-[70vh] flex-col justify-center py-24">
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
        <div className="reveal mt-9 flex items-center gap-4">
          <Link
            to="/projects"
            className="rounded-lg bg-brand px-5 py-2.5 text-sm font-medium text-brand-foreground ring-1 ring-brand/40 transition-colors hover:bg-white"
          >
            View my work
          </Link>
          <Link
            to="/contact"
            className="rounded-lg px-5 py-2.5 text-sm font-medium text-muted-foreground ring-1 ring-white/15 transition-colors hover:bg-white/5"
          >
            Get in touch
          </Link>
        </div>
      </section>

      {/* Quick links to each page */}
      <section className="pb-24">
        <p className="reveal font-mono text-xs uppercase tracking-[0.3em] text-brand/70">
          Explore
        </p>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SECTION_CARDS.map((card) => (
            <Link
              key={card.to}
              to={card.to}
              className="reveal group rounded-xl bg-white/5 p-6 ring-1 ring-white/10 transition-colors hover:bg-white/10 hover:ring-white/20"
            >
              <h2 className="text-lg font-medium text-white">{card.label}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {card.blurb}
              </p>
              <span className="mt-4 inline-block font-mono text-xs text-brand/90 transition-colors group-hover:text-brand">
                {"→"} Open page
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
