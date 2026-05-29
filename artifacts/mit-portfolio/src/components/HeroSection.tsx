import { motion } from "framer-motion";

const STATS = [
  { label: "Preliminary Projects", value: "5" },
  { label: "Research Domains", value: "3" },
  { label: "Doctoral Proposal", value: "1" },
  { label: "Open Reproducibility", value: "Full" },
];

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ paddingTop: "4rem" }}
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/backgrounds/hero_background_campus_1920x1080.jpg')",
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/85 via-[#0A1628]/88 to-[#0A1628]/95" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20">
        {/* Research tag */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6"
        >
          <span
            data-testid="hero-type-badge"
            className="inline-flex items-center gap-2 px-3 py-1 text-[11px] font-semibold tracking-widest uppercase bg-[#A31F34]/20 border border-[#A31F34]/40 text-[#e8909a] rounded-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#A31F34] animate-pulse" />
            Doctoral Research Portfolio — MIT EECS / CSAIL Application Track
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          data-testid="hero-headline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Toward Responsible AI Systems
          <br />
          <span className="text-[#c14a5c]">for Educational Intelligence</span>
        </motion.h1>

        {/* Research statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="max-w-3xl"
        >
          <p
            data-testid="hero-statement"
            className="text-lg text-gray-200 leading-relaxed mb-3"
            style={{ fontFamily: "Merriweather, Georgia, serif", fontWeight: 300 }}
          >
            This portfolio presents five preliminary research projects in data-centric AI, NLP, and computer vision,
            converging toward a doctoral proposal on fairness-aware, privacy-preserving AI systems for student support.
          </p>
          <p className="text-base text-gray-400 leading-relaxed" style={{ fontFamily: "Merriweather, Georgia, serif", fontWeight: 300 }}>
            It is prepared as evidence of research readiness for doctoral application — not as a claim of publication,
            admission, or institutional affiliation.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap gap-4 mt-10"
        >
          <button
            data-testid="hero-cta-proposal"
            onClick={() => scrollToSection("doctoral-proposal")}
            className="px-6 py-3 bg-[#A31F34] hover:bg-[#8a1929] text-white text-sm font-semibold tracking-wide transition-all duration-200 rounded-sm border border-[#A31F34] hover:border-[#8a1929]"
          >
            View Doctoral Proposal
          </button>
          <button
            data-testid="hero-cta-download"
            onClick={() => scrollToSection("download-center")}
            className="px-6 py-3 bg-transparent hover:bg-white/10 text-white text-sm font-semibold tracking-wide transition-all duration-200 rounded-sm border border-white/30 hover:border-white/60"
          >
            Download Evidence Pack
          </button>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-0 mt-16 border border-white/10 rounded-sm overflow-hidden"
        >
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              data-testid={`hero-stat-${i}`}
              className={`px-5 py-4 text-center ${
                i < STATS.length - 1 ? "border-r border-white/10" : ""
              } bg-white/5 hover:bg-white/8 transition-colors`}
            >
              <div className="text-2xl font-bold text-[#c14a5c] tracking-tight">{stat.value}</div>
              <div className="text-xs text-gray-400 mt-1 tracking-wide">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom image credit */}
      <div className="absolute bottom-4 right-6 text-[10px] text-gray-500 z-10">
        Background: MIT Campus — Photo by Dominick Reuter / MIT News Office, via mit.edu/about
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-1 text-gray-500">
          <span className="text-[10px] tracking-widest uppercase">Scroll</span>
          <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
