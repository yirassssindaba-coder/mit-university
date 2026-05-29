import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <section
      id="about"
      ref={ref}
      data-testid="about-section"
      className="relative py-24 overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/assets/campus-images/web-optimized/02_mit_campus_panorama_at_sunset_web.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-[#0A1628]/88" />

      <div className="relative z-10 w-full max-w-[min(880px,calc(100vw-32px))] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#A31F34]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[#A31F34]">
              About
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-8">
            Research Identity
          </h2>

          <div
            className="space-y-5 text-base text-gray-200 leading-relaxed max-w-2xl"
            style={{ fontFamily: "Merriweather, Georgia, serif", fontWeight: 300 }}
          >
            <p>
              I am a researcher in formation — someone who has spent three years developing research
              judgment through empirical work in data science and applied machine learning, converging toward a
              focused doctoral agenda in responsible AI for educational systems.
            </p>
            <p>
              My research interest is not in AI as a performance optimization problem. It is in AI as an
              institutional actor — a system that makes decisions, encodes assumptions, and affects people who
              did not choose to be affected by it. The question that drives me is not "how accurate can we make
              it?" but "what would it take to make it trustworthy?"
            </p>
            <p>
              This portfolio is the honest record of where that question has taken me so far.
            </p>
          </div>

          {/* Contact */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 items-start" data-testid="about-contact">
            <div className="flex items-center gap-3 px-5 py-3 border border-white/15 bg-white/5 rounded-sm">
              <svg className="w-4 h-4 text-[#A31F34]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="text-sm text-gray-300">researcher@example.com</span>
            </div>
            <div className="flex items-center gap-3 px-5 py-3 border border-white/15 bg-white/5 rounded-sm">
              <svg className="w-4 h-4 text-[#A31F34]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span className="text-sm text-gray-300">github.com/researcher</span>
            </div>
          </div>

          {/* Image credit */}
          <p className="mt-12 text-[10px] text-gray-500">
            Background: MIT Campus Panorama at Sunset — Photo by Dominick Reuter for the MIT News Office, via mit.edu/about
          </p>
        </motion.div>
      </div>
    </section>
  );
}
