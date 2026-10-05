import { useEffect } from "react";
import { Github, Linkedin } from "lucide-react";

export const GITHUB_URL = "https://github.com/dishen-techy123";
export const LINKEDIN_URL = "https://www.linkedin.com/in/dishen-hada-04778142b/";

export function useRevealOnScroll() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export function SocialIcons() {
  return (
    <div className="flex items-center gap-3">
      <a
        href={GITHUB_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="grid size-9 place-items-center rounded-lg bg-white/5 ring-1 ring-white/10 text-muted-foreground transition-colors hover:bg-white/10 hover:text-foreground"
      >
        <Github size={18} />
      </a>
      <a
        href={LINKEDIN_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="grid size-9 place-items-center rounded-lg bg-white/5 ring-1 ring-white/10 text-muted-foreground transition-colors hover:bg-white/10 hover:text-foreground"
      >
        <Linkedin size={18} />
      </a>
    </div>
  );
}
