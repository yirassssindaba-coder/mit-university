import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const TIMELINE = [
  {
    year: "2022",
    title: "AI Student Performance Prediction",
    type: "Data-Centric AI Study",
    color: "bg-[#A31F34]",
  },
  {
    year: "2023",
    title: "Malaysia Housing & Cost of Living Analysis",
    type: "Socio-Technical Decision Support",
    color: "bg-[#1E4D8C]",
  },
  {
    year: "2023–24",
    title: "Text Sentiment Analysis for Student Feedback",
    type: "NLP Research Prototype",
    color: "bg-[#A31F34]",
  },
  {
    year: "2024",
    title: "Computer Vision Image Classification",
    type: "Vision Research Experiment",
    color: "bg-[#1E4D8C]",
  },
  {
    year: "2024–25",
    title: "AI Portfolio + Evidence Hub",
    type: "Research Communication Artifact",
    color: "bg-[#556B8A]",
  },
  {
    year: "2025+",
    title: "Doctoral Proposal: Responsible AI for Education",
    type: "Proposed Doctoral Research",
    color: "bg-[#A31F34]",
    isProposal: true,
  },
];

export default function ResearchOverview() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section
      id="research-overview"
      ref={ref}
      data-testid="research-overview-section"
      className="py-24 bg-background"
    >
      <div className="w-full max-w-[min(1120px,calc(100vw-32px))] mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#A31F34]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[#A31F34]">Research Overview</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            A Convergent Research Agenda
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="space-y-5 text-base leading-relaxed" style={{ fontFamily: "Merriweather, Georgia, serif" }}>
              <p className="text-foreground/90">
                Artificial intelligence systems are increasingly deployed in educational settings — predicting student
                outcomes, analyzing institutional feedback, classifying academic content. These systems carry real
                consequences: a prediction that labels a student as "at-risk" shapes institutional resources, counselor
                attention, and in some systems, enrollment decisions.
              </p>
              <p className="text-foreground/80">
                The five preliminary projects in this portfolio did not start as a unified research program. They started
                as independent investigations into machine learning applied to real data problems. Over three years, a
                coherent pattern emerged: each project exposed a version of the same underlying tension — between
                predictive performance and responsible design, between institutional efficiency and student agency,
                between what a model can do and what it should do.
              </p>
              <p className="text-foreground/80">
                The doctoral proposal that closes this portfolio is not a departure from those projects. It is their
                synthesis: a research agenda that takes the fairness gaps identified in prediction tasks, the
                surveillance risks surfaced in NLP feedback analysis, and the generalization limitations found in
                computer vision experiments — and asks what it would take to build educational AI systems that are not
                only accurate, but also fair, explainable, and worthy of institutional trust.
              </p>
              <p className="text-foreground/70 text-sm italic border-l-2 border-[#A31F34]/40 pl-4">
                This is not a portfolio of completed achievements. It is a record of developing research judgment —
                of learning to ask harder questions as the technical work deepened.
              </p>
            </div>

            {/* Domain badges */}
            <div className="mt-8 flex flex-wrap gap-2" data-testid="research-domains">
              {[
                "Responsible AI",
                "Fairness & Bias",
                "Educational Technology",
                "NLP & Feedback Intelligence",
                "Human-Centered AI",
                "Reproducibility",
              ].map((domain) => (
                <span
                  key={domain}
                  className="px-3 py-1 text-xs font-medium bg-[#A31F34]/10 text-[#A31F34] border border-[#A31F34]/20 rounded-sm"
                >
                  {domain}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            data-testid="research-timeline"
          >
            <h3 className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-8">
              Research Progression
            </h3>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

              <div className="space-y-0">
                {TIMELINE.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 16 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    className={`relative flex gap-5 pb-8 ${i === TIMELINE.length - 1 ? "pb-0" : ""}`}
                    data-testid={`timeline-item-${i}`}
                  >
                    {/* Node */}
                    <div className="relative z-10 flex-shrink-0">
                      <div
                        className={`w-8 h-8 rounded-full border-2 border-background flex items-center justify-center ${item.color} ${item.isProposal ? "ring-2 ring-[#A31F34]/40 ring-offset-2 ring-offset-background" : ""}`}
                      >
                        <div className="w-2 h-2 rounded-full bg-white/70" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`pt-1 ${item.isProposal ? "border-l-0" : ""}`}>
                      <span className="text-[11px] font-semibold tracking-widest text-[#A31F34] uppercase">
                        {item.year}
                      </span>
                      <h4
                        className={`text-sm font-semibold mt-0.5 ${item.isProposal ? "text-foreground" : "text-foreground/80"}`}
                      >
                        {item.title}
                        {item.isProposal && (
                          <span className="ml-2 text-[10px] font-normal bg-[#A31F34]/15 text-[#A31F34] px-1.5 py-0.5 rounded-sm border border-[#A31F34]/20">
                            Proposal
                          </span>
                        )}
                      </h4>
                      <p className="text-xs text-muted-foreground mt-0.5">{item.type}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
