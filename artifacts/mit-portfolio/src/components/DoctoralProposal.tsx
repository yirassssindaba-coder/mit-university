import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { proposal } from "../data/proposal";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h3 className="text-[11px] font-semibold tracking-widest uppercase text-[#A31F34] mb-3 flex items-center gap-2">
        <span className="w-4 h-px bg-[#A31F34]" />
        {title}
      </h3>
      {children}
    </div>
  );
}

function ProseText({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="text-sm text-foreground/80 leading-relaxed"
      style={{ fontFamily: "Merriweather, Georgia, serif", lineHeight: "1.85" }}
    >
      {children}
    </div>
  );
}

export default function DoctoralProposal() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <section
      id="doctoral-proposal"
      ref={ref}
      data-testid="doctoral-proposal-section"
      className="py-24 bg-background"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#A31F34]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[#A31F34]">
              Doctoral Research Proposal
            </span>
          </div>

          {/* Disclaimer banner */}
          <div className="mb-8 px-4 py-3 border border-amber-500/20 bg-amber-500/5 rounded-sm">
            <p className="text-xs text-amber-700 dark:text-amber-400 leading-relaxed">
              <strong>Note:</strong> {proposal.disclaimer}
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight leading-snug mb-4">
            {proposal.title}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main content — 2/3 width */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {/* Problem Gap */}
            <Section title={proposal.problemGap.heading}>
              <div className="space-y-4">
                {proposal.problemGap.content.map((p, i) => (
                  <ProseText key={i}>{p}</ProseText>
                ))}
              </div>
            </Section>

            {/* Research Questions */}
            <Section title="Research Questions">
              <ol className="space-y-4">
                {proposal.researchQuestions.map((rq, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="flex-shrink-0 w-6 h-6 rounded-sm bg-[#A31F34] text-white text-xs font-bold flex items-center justify-center mt-0.5">
                      {i + 1}
                    </span>
                    <ProseText>
                      <strong>RQ{i + 1}:</strong> {rq}
                    </ProseText>
                  </li>
                ))}
              </ol>
            </Section>

            {/* Methodology */}
            <Section title={proposal.methodology.heading}>
              <ProseText>{proposal.methodology.overview}</ProseText>
              {/* Methodology flow diagram */}
              <div className="mt-6 overflow-x-auto" data-testid="methodology-diagram">
                <div className="flex items-stretch gap-0 min-w-max">
                  {proposal.methodology.phases.map((phase, i) => (
                    <div key={i} className="flex items-center">
                      <div className="flex flex-col items-center text-center w-32 px-2">
                        <div className="w-full px-2 py-2.5 bg-[#0A1628] dark:bg-white/5 border border-[#1E2D42] rounded-sm">
                          <p className="text-[11px] font-semibold text-[#A31F34] mb-1">{phase.label}</p>
                          <p className="text-[10px] text-gray-400 leading-snug">{phase.description}</p>
                        </div>
                      </div>
                      {i < proposal.methodology.phases.length - 1 && (
                        <div className="flex-shrink-0 px-1 text-[#A31F34] font-bold text-lg">&#8594;</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground mb-2">
                    Fairness Metrics
                  </h4>
                  <ul className="space-y-1">
                    {proposal.methodology.fairnessMetrics.map((m, i) => (
                      <li key={i} className="flex gap-2 text-xs text-foreground/70">
                        <span className="text-[#A31F34] mt-0.5">—</span>
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground mb-2">
                    Privacy Approaches
                  </h4>
                  <ul className="space-y-1">
                    {proposal.methodology.privacyApproaches.map((p, i) => (
                      <li key={i} className="flex gap-2 text-xs text-foreground/70">
                        <span className="text-[#A31F34] mt-0.5">—</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Section>

            {/* Dataset & Privacy */}
            <Section title={proposal.datasetAndPrivacy.heading}>
              <ul className="space-y-2">
                {proposal.datasetAndPrivacy.points.map((p, i) => (
                  <li key={i} className="flex gap-2 text-sm text-foreground/75 leading-relaxed">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#A31F34] mt-2" />
                    <span style={{ fontFamily: "Merriweather, Georgia, serif" }}>{p}</span>
                  </li>
                ))}
              </ul>
            </Section>

            {/* Research Ethics */}
            <Section title={proposal.researchEthics.heading}>
              <ul className="space-y-2">
                {proposal.researchEthics.points.map((p, i) => (
                  <li key={i} className="flex gap-2 text-sm text-foreground/75 leading-relaxed">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-amber-500 mt-2" />
                    <span style={{ fontFamily: "Merriweather, Georgia, serif" }}>{p}</span>
                  </li>
                ))}
              </ul>
            </Section>

            {/* Limitations */}
            <Section title={proposal.limitations.heading}>
              <ul className="space-y-2">
                {proposal.limitations.points.map((p, i) => (
                  <li key={i} className="flex gap-2 text-sm text-foreground/75 leading-relaxed">
                    <span className="flex-shrink-0 text-[#A31F34] font-mono text-xs mt-0.5">!</span>
                    <span style={{ fontFamily: "Merriweather, Georgia, serif" }}>{p}</span>
                  </li>
                ))}
              </ul>
            </Section>

            {/* Publication Roadmap */}
            <Section title="Publication Roadmap">
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse" data-testid="publication-roadmap">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 pr-4 text-[10px] font-semibold tracking-widest uppercase text-muted-foreground">
                        Year
                      </th>
                      <th className="text-left py-2 pr-4 text-[10px] font-semibold tracking-widest uppercase text-muted-foreground">
                        Target
                      </th>
                      <th className="text-left py-2 pr-4 text-[10px] font-semibold tracking-widest uppercase text-muted-foreground">
                        Venue
                      </th>
                      <th className="text-left py-2 text-[10px] font-semibold tracking-widest uppercase text-muted-foreground">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {proposal.publicationRoadmap.map((row, i) => (
                      <tr
                        key={i}
                        data-testid={`pub-roadmap-row-${i}`}
                        className="border-b border-border/50 hover:bg-muted/30 transition-colors"
                      >
                        <td className="py-3 pr-4 text-xs font-semibold text-[#A31F34] whitespace-nowrap">
                          {row.year}
                        </td>
                        <td className="py-3 pr-4 text-xs font-medium text-foreground whitespace-nowrap">
                          {row.target}
                        </td>
                        <td className="py-3 pr-4 text-xs text-foreground/70 max-w-xs">{row.venue}</td>
                        <td className="py-3">
                          <span className="px-2 py-0.5 text-[10px] font-medium bg-sky-500/10 text-sky-600 border border-sky-500/20 rounded-sm">
                            {row.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Section>
          </motion.div>

          {/* Sidebar — 1/3 width */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            {/* Expected Contributions */}
            <div className="border border-border rounded-sm p-5 bg-card">
              <h3 className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground mb-4">
                Expected Contributions
              </h3>
              <div className="space-y-3">
                {proposal.expectedContribution.contributions.map((c, i) => (
                  <div key={i} className="border-b border-border/50 pb-3 last:border-0 last:pb-0">
                    <p className="text-[11px] font-semibold text-[#A31F34] mb-1">{c.type}</p>
                    <p className="text-xs text-foreground/70 leading-relaxed">{c.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Preliminary Evidence Links */}
            <div className="border border-border rounded-sm p-5 bg-card">
              <h3 className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground mb-4">
                Preliminary Evidence
              </h3>
              <p className="text-xs text-foreground/70 mb-3 leading-relaxed">{proposal.preliminaryEvidence.content}</p>
              <ul className="space-y-2">
                {proposal.preliminaryEvidence.connections.map((c, i) => (
                  <li key={i} className="text-[11px] text-foreground/65 leading-relaxed border-l-2 border-[#A31F34]/30 pl-3">
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            {/* Evaluation Plan */}
            <div className="border border-border rounded-sm p-5 bg-card">
              <h3 className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground mb-4">
                {proposal.evaluationPlan.heading}
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-[10px] font-semibold text-foreground/60 uppercase tracking-wider mb-1.5">
                    Internal Validity
                  </p>
                  {proposal.evaluationPlan.internal.map((e, i) => (
                    <p key={i} className="text-xs text-foreground/70 mb-1">
                      — {e}
                    </p>
                  ))}
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-foreground/60 uppercase tracking-wider mb-1.5">
                    External Validity
                  </p>
                  {proposal.evaluationPlan.external.map((e, i) => (
                    <p key={i} className="text-xs text-foreground/70 mb-1">
                      — {e}
                    </p>
                  ))}
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-foreground/60 uppercase tracking-wider mb-1.5">
                    Reproducibility
                  </p>
                  {proposal.evaluationPlan.reproducibility.map((e, i) => (
                    <p key={i} className="text-xs text-foreground/70 mb-1">
                      — {e}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
