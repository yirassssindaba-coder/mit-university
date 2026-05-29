import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { proposal } from "../data/proposal";

export default function LabFit() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <section
      id="lab-fit"
      ref={ref}
      data-testid="lab-fit-section"
      className="relative py-24 overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/assets/campus-images/web-optimized/03_mit_ray_and_maria_stata_center_web.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-[#0A1628]/90" />

      <div className="relative z-10 w-full max-w-[min(1120px,calc(100vw-32px))] mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#A31F34]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[#A31F34]">
              Lab Fit & Advisor Alignment
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Potential Research Environments
          </h2>
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-10 px-4 py-3 border border-amber-500/25 bg-amber-500/10 rounded-sm"
          data-testid="labfit-disclaimer"
        >
          <p className="text-xs text-amber-300 leading-relaxed">
            <strong>Important:</strong> {proposal.labFit.disclaimer}
          </p>
        </motion.div>

        {/* Lab cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5" data-testid="lab-cards">
          {proposal.labFit.labs.map((lab, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
              data-testid={`lab-card-${i}`}
              className="bg-white/5 border border-white/10 rounded-sm p-5 hover:border-[#A31F34]/40 hover:bg-white/8 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3 gap-2">
                <div className="w-8 h-8 rounded-sm bg-[#A31F34]/20 border border-[#A31F34]/30 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#A31F34]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
                <a
                  href={lab.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`lab-url-${i}`}
                  className="text-[10px] text-gray-400 hover:text-[#A31F34] transition-colors truncate max-w-[120px]"
                >
                  {lab.url.replace("https://", "")}
                </a>
              </div>
              <h3 className="text-sm font-semibold text-white mb-2 leading-snug">{lab.name}</h3>
              <p className="text-xs text-gray-300 leading-relaxed" style={{ fontFamily: "Merriweather, Georgia, serif", fontWeight: 300 }}>
                {lab.alignment}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom image credit */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-10 text-[10px] text-gray-500 text-right"
        >
          Background: MIT Ray and Maria Stata Center — MIT official About page image, via mit.edu/about
        </motion.p>
      </div>
    </section>
  );
}
