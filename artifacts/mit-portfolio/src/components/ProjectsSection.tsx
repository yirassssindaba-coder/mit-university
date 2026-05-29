import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function ProjectsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <section
      id="projects"
      ref={ref}
      data-testid="projects-section"
      className="py-24 bg-muted/30"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#A31F34]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[#A31F34]">
              Preliminary Evidence
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">
            Five Research Projects
          </h2>
          <p
            className="text-base text-foreground/70 max-w-3xl leading-relaxed"
            style={{ fontFamily: "Merriweather, Georgia, serif", fontWeight: 300 }}
          >
            Each project is presented with honest academic framing: problem statement, research questions, methodology,
            preliminary results, acknowledged limitations, and ethical considerations. None are claimed as published or
            peer-reviewed work.
          </p>
        </motion.div>

        {/* Cards grid — first 4 in 2-col, last card full-width */}
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {projects.slice(0, 4).map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              >
                <ProjectCard project={project} index={i} />
              </motion.div>
            ))}
          </div>

          {/* Fifth project — full width */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <ProjectCard project={projects[4]} index={4} />
          </motion.div>
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-10 p-4 border border-border bg-card rounded-sm"
        >
          <p className="text-xs text-muted-foreground leading-relaxed text-center">
            <strong className="text-foreground/70">Academic Integrity Note:</strong> None of the projects above constitute
            published, peer-reviewed, or institutionally accepted research. Results are preliminary and scoped to
            specific datasets and conditions. All limitations are disclosed. This portfolio is evidence of research
            readiness, not a record of completed doctoral contributions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
