import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const PARAGRAPHS = [
  {
    heading: "Motivation",
    text: "My interest in educational AI did not begin with a research question — it began with a data problem. During an early project on student performance prediction, I noticed something that the accuracy metrics did not capture: the model was performing well on average, but its errors were systematically concentrated in specific demographic subgroups. The model was technically functional. It was also, in a meaningful sense, unfair. That observation did not feel like a minor limitation to footnote. It felt like the actual research question. Why do these systems fail the students who arguably need them most? What would it take to build a version that does not?",
  },
  {
    heading: "Research Trajectory",
    text: "The five projects documented in this portfolio are not a linear curriculum. They are the record of an evolving research sensibility. The student performance prediction work introduced me to fairness auditing as a technical practice. The housing data analysis taught me that socio-technical systems embed assumptions about whose reality they are trying to model. The sentiment analysis project introduced the surveillance risk that emerges when institutional data collection is framed as benign feedback intelligence. The computer vision experiment grounded me in the empirical realities of domain shift — the gap between what a model learns and where it is deployed. Together, these projects converged on a set of commitments that now define my research agenda: that prediction without explainability is epistemically incomplete; that systems deployed in educational settings require governance frameworks proportional to their social stakes; and that the fairness gaps I documented in preliminary work are not anomalies — they are the expected outcome of optimization processes that were never designed to be fair.",
  },
  {
    heading: "Why MIT EECS and CSAIL",
    text: "MIT's research environment is not the reason I became interested in these questions. But it is the environment where I believe this work could reach its full scope. The computational resources, the concentration of interdisciplinary expertise, the adjacency to policy institutions and civil society organizations that take AI governance seriously — these are not abstract amenities. They are the specific conditions that would allow this research to move from single-institution experiments to multi-institution validation studies, from workshop papers to the kind of sustained program that can actually inform how educational AI systems are designed and audited. The labs I identified as potential fits — CSAIL HCI Engineering, the Jameel Clinic, IDSS, RAISE — each represent a different facet of the problem I am trying to work on. I am not certain which direction the research will take. I am certain that the direction will require more than one kind of expertise.",
  },
  {
    heading: "What I Bring, What I Still Need to Learn",
    text: "I come to this application with five preliminary projects, one coherent proposal, and a clear sense of what I do not yet know. I know how to ask empirical questions, design experiments, and acknowledge negative results honestly. I do not yet have experience conducting research at scale, navigating IRB-equivalent institutional review, or building the kind of multi-institution partnerships that the doctoral proposal ultimately requires. A PhD is not the certification that I already know how to do research. It is the training program through which I will learn how to do it at the level the problem demands. The preliminary work in this portfolio is not a claim of readiness. It is evidence that the readiness is developing — and that the questions I am asking are serious enough to deserve the rigor that a doctoral program can provide.",
  },
  {
    heading: null,
    text: "I understand that research is not a destination but a discipline. The work described here is not proof of expertise — it is evidence of readiness.",
    isClosing: true,
  },
];

export default function ResearchStatement() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <section
      id="research-statement"
      ref={ref}
      data-testid="research-statement-section"
      className="py-24 bg-muted/20"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#A31F34]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[#A31F34]">
              Research Statement
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Statement of Research Intent
          </h2>
          <p className="mt-3 text-sm text-muted-foreground italic">
            Prepared for doctoral application. Not a published or institutionally reviewed document.
          </p>
        </motion.div>

        {/* Statement body */}
        <div className="space-y-12">
          {PARAGRAPHS.map((para, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.12 }}
              data-testid={`statement-paragraph-${i}`}
              className={para.isClosing ? "border-t border-border pt-10" : ""}
            >
              {para.heading && (
                <h3 className="text-[11px] font-semibold tracking-widest uppercase text-[#A31F34] mb-4">
                  {para.heading}
                </h3>
              )}
              <p
                className={`leading-[1.9] ${
                  para.isClosing
                    ? "text-lg font-medium text-foreground/90 italic"
                    : "text-base text-foreground/80"
                }`}
                style={{ fontFamily: "Merriweather, Georgia, serif", fontWeight: para.isClosing ? 400 : 300 }}
              >
                {para.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
