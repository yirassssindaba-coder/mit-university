import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface DownloadItem {
  title: string;
  description: string;
  type: "PDF" | "ZIP";
  size: string;
}

interface DownloadGroup {
  groupTitle: string;
  items: DownloadItem[];
}

const DOWNLOADS: DownloadGroup[] = [
  {
    groupTitle: "Academic Documents",
    items: [
      {
        title: "Academic CV",
        description: "Full academic curriculum vitae including education, projects, skills, and research interests",
        type: "PDF",
        size: "182 KB",
      },
      {
        title: "Doctoral Research Statement",
        description: "Statement of research intent for doctoral application — narrative version",
        type: "PDF",
        size: "264 KB",
      },
      {
        title: "PhD Research Proposal — Full Draft",
        description: "Complete doctoral research proposal including all sections, methodology, and roadmap",
        type: "PDF",
        size: "418 KB",
      },
    ],
  },
  {
    groupTitle: "Advisor Fit",
    items: [
      {
        title: "Advisor Fit Note — Potential Lab Alignment",
        description: "Independent research fit analysis for MIT CSAIL, Jameel Clinic, IDSS, Media Lab, and RAISE",
        type: "PDF",
        size: "156 KB",
      },
    ],
  },
  {
    groupTitle: "Research Evidence",
    items: [
      {
        title: "Preliminary Evidence Report",
        description: "Consolidated report summarizing findings, methods, and limitations from all five projects",
        type: "PDF",
        size: "512 KB",
      },
      {
        title: "Reproducibility Package",
        description: "Environment specifications, random seeds, data cards, model cards, and code structure for all experiments",
        type: "ZIP",
        size: "2.1 MB",
      },
      {
        title: "Technical Report — AI Student Performance Prediction",
        description: "Full technical write-up including feature engineering, model comparison, and fairness analysis",
        type: "PDF",
        size: "286 KB",
      },
      {
        title: "Technical Report — Malaysia Housing Analysis",
        description: "Complete methodology, geospatial analysis, regression results, and policy implications",
        type: "PDF",
        size: "348 KB",
      },
      {
        title: "Technical Report — Sentiment Analysis NLP",
        description: "BERT fine-tuning process, baseline comparison, error analysis, and ethical considerations",
        type: "PDF",
        size: "312 KB",
      },
      {
        title: "Technical Report — Computer Vision Classification",
        description: "ResNet-50 vs. custom CNN comparison, domain shift analysis, and reproducibility notes",
        type: "PDF",
        size: "294 KB",
      },
      {
        title: "Technical Report — AI Portfolio Website",
        description: "Architecture decisions, asset management, evidence structure, and design rationale",
        type: "PDF",
        size: "198 KB",
      },
    ],
  },
  {
    groupTitle: "Portfolio",
    items: [
      {
        title: "Presentation Slides — Research Overview",
        description: "20-slide research overview deck suitable for lab presentation or application interview",
        type: "PDF",
        size: "1.4 MB",
      },
      {
        title: "Evidence Pack — Complete Application Package",
        description: "Consolidated PDF of all key documents for application submission",
        type: "PDF",
        size: "3.2 MB",
      },
    ],
  },
];

function DownloadCard({ item, index }: { item: DownloadItem; index: number }) {
  return (
    <div
      data-testid={`download-card-${index}`}
      className="flex items-start gap-4 p-4 border border-border bg-card rounded-sm hover:border-[#A31F34]/25 transition-all duration-200 group"
    >
      {/* Icon */}
      <div className="flex-shrink-0 w-10 h-10 rounded-sm bg-[#A31F34]/10 border border-[#A31F34]/20 flex items-center justify-center">
        {item.type === "ZIP" ? (
          <svg className="w-5 h-5 text-[#A31F34]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
            />
          </svg>
        ) : (
          <svg className="w-5 h-5 text-[#A31F34]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h4 className="text-sm font-semibold text-foreground leading-snug">{item.title}</h4>
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <span
              className={`px-1.5 py-0.5 text-[10px] font-bold rounded-sm ${
                item.type === "ZIP"
                  ? "bg-sky-500/10 text-sky-600 border border-sky-500/20"
                  : "bg-[#A31F34]/10 text-[#A31F34] border border-[#A31F34]/20"
              }`}
            >
              {item.type}
            </span>
            <span className="text-[10px] text-muted-foreground font-mono">{item.size}</span>
          </div>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed mb-2">{item.description}</p>
        <button
          data-testid={`download-btn-${index}`}
          className="text-[11px] font-semibold text-[#A31F34] hover:text-[#c14a5c] transition-colors flex items-center gap-1"
          disabled
        >
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download {item.type}
          <span className="text-muted-foreground font-normal">(Coming Soon)</span>
        </button>
      </div>
    </div>
  );
}

export default function DownloadCenter() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  let globalIndex = 0;

  return (
    <section
      id="download-center"
      ref={ref}
      data-testid="download-center-section"
      className="py-24 bg-background"
    >
      <div className="max-w-5xl mx-auto px-6">
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
              Download Center
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Application Documents
          </h2>
        </motion.div>

        {/* Groups */}
        <div className="space-y-10">
          {DOWNLOADS.map((group, gi) => (
            <motion.div
              key={gi}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + gi * 0.1 }}
              data-testid={`download-group-${gi}`}
            >
              <h3 className="text-[11px] font-semibold tracking-widest uppercase text-muted-foreground mb-4 flex items-center gap-2">
                <span className="w-3 h-px bg-muted-foreground" />
                {group.groupTitle}
              </h3>
              <div className="space-y-3">
                {group.items.map((item) => {
                  const idx = globalIndex++;
                  return <DownloadCard key={idx} item={item} index={idx} />;
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 p-4 border border-border bg-muted/30 rounded-sm"
          data-testid="download-disclaimer"
        >
          <p className="text-xs text-muted-foreground leading-relaxed text-center">
            <strong className="text-foreground/70">Academic Integrity Note:</strong> All documents are draft versions
            prepared for doctoral application purposes. No content constitutes a published, accepted, or peer-reviewed
            work. No claims of institutional affiliation, supervisor endorsement, or admission are implied.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
