import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const CREDITS = [
  {
    file: "01_mit_dome_and_killian_court_aerial_view_web.jpg",
    title: "MIT Dome and Killian Court — Aerial View",
    credit: "MIT official About page image",
    source: "https://web.mit.edu/about/",
    license: "MIT web image; use with source credit and do not imply official affiliation",
    usedIn: "Research Overview section",
  },
  {
    file: "02_mit_campus_panorama_at_sunset_web.jpg",
    title: "MIT Campus Panorama at Sunset",
    credit: "Photo by Dominick Reuter for the MIT News Office",
    source: "https://web.mit.edu/about/",
    license: "MIT official web image; use with source credit and do not imply official affiliation",
    usedIn: "Hero background, About section",
  },
  {
    file: "03_mit_ray_and_maria_stata_center_web.jpg",
    title: "MIT Ray and Maria Stata Center (CSAIL Building)",
    credit: "MIT official About page image",
    source: "https://web.mit.edu/about/",
    license: "MIT web image; use with source credit and do not imply official affiliation",
    usedIn: "Lab Fit & Advisor Alignment section",
  },
  {
    file: "04_mit_electronics_project_workspace_web.jpg",
    title: "MIT Electronics Project Workspace",
    credit: "MIT official About page image",
    source: "https://web.mit.edu/about/",
    license: "MIT web image; use with source credit and do not imply official affiliation",
    usedIn: "About section background",
  },
];

export default function ImageCredits() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <section
      id="credits"
      ref={ref}
      data-testid="image-credits-section"
      className="py-16 bg-muted/20 border-t border-border"
    >
      <div className="w-full max-w-[min(1000px,calc(100vw-32px))] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#A31F34]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[#A31F34]">
              Image Source Credits
            </span>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            All MIT campus images used in this portfolio are sourced from MIT's official About page (mit.edu/about)
            and used as contextual visual reference for portfolio design only. Each image is credited below in full.
            This portfolio is not affiliated with, endorsed by, or representative of MIT.
          </p>

          {/* Credits table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm" data-testid="credits-table">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left pb-3 pr-6 text-[10px] font-semibold tracking-widest uppercase text-muted-foreground">
                    Image
                  </th>
                  <th className="text-left pb-3 pr-6 text-[10px] font-semibold tracking-widest uppercase text-muted-foreground">
                    Credit
                  </th>
                  <th className="text-left pb-3 pr-6 text-[10px] font-semibold tracking-widest uppercase text-muted-foreground">
                    Source
                  </th>
                  <th className="text-left pb-3 text-[10px] font-semibold tracking-widest uppercase text-muted-foreground">
                    Usage
                  </th>
                </tr>
              </thead>
              <tbody>
                {CREDITS.map((credit, i) => (
                  <tr
                    key={i}
                    data-testid={`credit-row-${i}`}
                    className="border-b border-border/50 hover:bg-muted/20 transition-colors"
                  >
                    <td className="py-3 pr-6 align-top">
                      <p className="text-xs font-medium text-foreground leading-snug">{credit.title}</p>
                      <p className="text-[10px] text-muted-foreground mt-0.5 font-mono">{credit.file}</p>
                    </td>
                    <td className="py-3 pr-6 align-top text-xs text-foreground/70">{credit.credit}</td>
                    <td className="py-3 pr-6 align-top">
                      <a
                        href={credit.source}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-[#A31F34] hover:underline"
                      >
                        {credit.source}
                      </a>
                      <p className="text-[10px] text-muted-foreground mt-1 leading-snug">{credit.license}</p>
                    </td>
                    <td className="py-3 align-top text-xs text-muted-foreground">{credit.usedIn}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* MIT Logo credit */}
          <div className="mt-8 p-4 border border-border rounded-sm bg-card" data-testid="logo-credit">
            <h4 className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground mb-2">
              MIT Logo Usage
            </h4>
            <p className="text-xs text-foreground/70 leading-relaxed">
              The MIT logo displayed in the navigation and footer was supplied by the portfolio author and is used
              solely as a visual reference to identify the institution this application targets. It is{" "}
              <strong>not</strong> used to imply official MIT affiliation, endorsement, employment, or enrollment.
              The MIT name and logo are trademarks of the Massachusetts Institute of Technology.
              Official brand guidance: <a href="https://web.mit.edu/graphicidentity/" className="text-[#A31F34] hover:underline" target="_blank" rel="noopener noreferrer">mit.edu/graphicidentity</a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
