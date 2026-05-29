import { useState } from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import type { Project } from "../data/projects";

interface Props {
  project: Project;
  index: number;
}

const PUBLICATION_COLORS: Record<string, string> = {
  "Workshop-Level — Requires Multi-Institution Validation": "bg-amber-500/10 text-amber-600 border-amber-500/20",
  "Workshop-Level — Regional Conference or Data Policy Track": "bg-amber-500/10 text-amber-600 border-amber-500/20",
  "Workshop-Level — NLP / Educational Data Mining Track": "bg-amber-500/10 text-amber-600 border-amber-500/20",
  "Experiment-Level — Student/Undergraduate Research Conference": "bg-sky-500/10 text-sky-600 border-sky-500/20",
  "N/A — Communication & Application Artifact": "bg-gray-500/10 text-gray-500 border-gray-500/20",
};

function SmallChart({ project }: { project: Project }) {
  if (!project.chart) return null;
  const { type, data, xKey, yKey, label } = project.chart;

  if (type === "bar") {
    return (
      <div data-testid={`project-chart-${project.id}`}>
        <p className="text-[11px] font-semibold text-muted-foreground mb-2 tracking-wide uppercase">{label}</p>
        <ResponsiveContainer width="100%" height={160}>
          <BarChart data={data} margin={{ top: 4, right: 8, left: -24, bottom: 4 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="currentColor" opacity={0.08} />
            <XAxis dataKey={xKey} tick={{ fontSize: 10, fill: "#9ca3af" }} axisLine={false} tickLine={false} />
            <YAxis domain={[0.5, 1.0]} tick={{ fontSize: 10, fill: "#9ca3af" }} axisLine={false} tickLine={false} />
            <Tooltip
              contentStyle={{
                background: "#0A1628",
                border: "1px solid #1E2D42",
                borderRadius: "2px",
                fontSize: "11px",
                color: "#e2e8f0",
              }}
              formatter={(v: number) => [v.toFixed(2), yKey]}
            />
            <Bar dataKey={yKey} fill="#A31F34" radius={[2, 2, 0, 0]} maxBarSize={36} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }

  if (type === "line") {
    const multiLine = data[0] && "resnet" in data[0];
    return (
      <div data-testid={`project-chart-${project.id}`}>
        <p className="text-[11px] font-semibold text-muted-foreground mb-2 tracking-wide uppercase">{label}</p>
        <ResponsiveContainer width="100%" height={160}>
          <LineChart data={data} margin={{ top: 4, right: 8, left: -24, bottom: 4 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="currentColor" opacity={0.08} />
            <XAxis dataKey={xKey} tick={{ fontSize: 10, fill: "#9ca3af" }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 10, fill: "#9ca3af" }} axisLine={false} tickLine={false} />
            <Tooltip
              contentStyle={{
                background: "#0A1628",
                border: "1px solid #1E2D42",
                borderRadius: "2px",
                fontSize: "11px",
                color: "#e2e8f0",
              }}
            />
            {multiLine ? (
              <>
                <Legend wrapperStyle={{ fontSize: "10px" }} />
                <Line type="monotone" dataKey="resnet" stroke="#A31F34" strokeWidth={2} dot={false} name="ResNet-50" />
                <Line type="monotone" dataKey="custom" stroke="#3B7DD8" strokeWidth={2} dot={false} name="Custom CNN" />
              </>
            ) : (
              <Line type="monotone" dataKey={yKey} stroke="#A31F34" strokeWidth={2} dot={false} />
            )}
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }

  return null;
}

export default function ProjectCard({ project, index }: Props) {
  const [expanded, setExpanded] = useState(false);
  const pubColorClass =
    PUBLICATION_COLORS[project.publicationReadiness] || "bg-gray-500/10 text-gray-500 border-gray-500/20";

  return (
    <article
      data-testid={`project-card-${project.id}`}
      className="bg-card border border-card-border rounded-sm overflow-hidden hover:border-[#A31F34]/30 transition-all duration-300 flex flex-col"
    >
      {/* Card header */}
      <div className="px-6 pt-6 pb-4 border-b border-border">
        <div className="flex items-start justify-between gap-3 mb-3">
          <span
            data-testid={`project-type-${project.id}`}
            className="inline-flex items-center px-2.5 py-0.5 text-[10px] font-semibold tracking-widest uppercase bg-[#A31F34]/10 text-[#A31F34] border border-[#A31F34]/20 rounded-sm"
          >
            {project.researchType}
          </span>
          <span className="text-[11px] text-muted-foreground font-mono tracking-wider">{project.year}</span>
        </div>
        <h3
          data-testid={`project-title-${project.id}`}
          className="text-lg font-bold text-foreground tracking-tight leading-snug mb-1"
        >
          {project.title}
        </h3>
        <p className="text-xs text-muted-foreground leading-snug">{project.subtitle}</p>
      </div>

      <div className="px-6 py-5 flex flex-col gap-5 flex-1">
        {/* Problem */}
        <div>
          <h4 className="text-[10px] font-semibold tracking-widest uppercase text-[#A31F34] mb-2">
            Problem Statement
          </h4>
          <p className="text-sm text-foreground/80 leading-relaxed" style={{ fontFamily: "Merriweather, Georgia, serif", fontWeight: 300 }}>
            {project.problemStatement}
          </p>
        </div>

        {/* Research Questions */}
        <div>
          <h4 className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground mb-2">
            Research Questions
          </h4>
          <ul className="space-y-1.5">
            {project.researchQuestions.map((q, i) => (
              <li key={i} className="flex gap-2 text-xs text-foreground/75 leading-relaxed">
                <span className="flex-shrink-0 w-4 h-4 rounded-full bg-[#A31F34]/10 text-[#A31F34] text-[9px] font-bold flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <span style={{ fontFamily: "Merriweather, Georgia, serif" }}>{q}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Key result */}
        <div className="bg-[#A31F34]/5 border border-[#A31F34]/15 rounded-sm px-4 py-3">
          <h4 className="text-[10px] font-semibold tracking-widest uppercase text-[#A31F34] mb-1.5">
            Key Preliminary Result
          </h4>
          <p className="text-xs text-foreground/80 leading-relaxed font-mono">{project.keyResult}</p>
        </div>

        {/* Chart or tech badges */}
        {project.chart ? (
          <SmallChart project={project} />
        ) : project.techBadges ? (
          <div data-testid={`project-tech-${project.id}`}>
            <h4 className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground mb-2">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.techBadges.map((badge) => (
                <span
                  key={badge}
                  className="px-2.5 py-1 text-[11px] font-medium bg-[#0A1628] dark:bg-white/5 border border-border text-foreground/70 rounded-sm"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        ) : null}

        {/* Expandable details */}
        <button
          data-testid={`project-expand-${project.id}`}
          onClick={() => setExpanded(!expanded)}
          className="text-[11px] font-semibold tracking-wide text-[#A31F34] hover:text-[#c14a5c] transition-colors text-left flex items-center gap-1.5"
        >
          {expanded ? "Hide" : "Show"} methodology, tools, limitations & ethics
          <svg
            className={`w-3.5 h-3.5 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {expanded && (
          <div className="space-y-4 border-t border-border pt-4">
            <div>
              <h4 className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground mb-1.5">
                Methodology
              </h4>
              <p className="text-xs text-foreground/75 leading-relaxed">{project.methodology}</p>
            </div>
            <div>
              <h4 className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground mb-1.5">
                Tools & Stack
              </h4>
              <div className="flex flex-wrap gap-1">
                {project.toolsStack.map((tool) => (
                  <span
                    key={tool}
                    className="px-2 py-0.5 text-[10px] font-medium bg-secondary/40 text-secondary-foreground border border-border rounded-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground mb-1.5">
                Acknowledged Limitation
              </h4>
              <p className="text-xs text-foreground/70 leading-relaxed italic">{project.limitation}</p>
            </div>
            <div>
              <h4 className="text-[10px] font-semibold tracking-widest uppercase text-amber-600 mb-1.5">
                Ethical Consideration
              </h4>
              <p className="text-xs text-foreground/70 leading-relaxed">{project.ethicalNote}</p>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-border bg-muted/30 flex items-center justify-between gap-3 flex-wrap">
        <span
          data-testid={`project-pub-readiness-${project.id}`}
          className={`inline-flex items-center px-2.5 py-1 text-[10px] font-semibold tracking-wider border rounded-sm ${pubColorClass}`}
        >
          {project.publicationReadiness}
        </span>
        <div className="flex gap-2">
          <a
            href={project.githubUrl}
            data-testid={`project-github-${project.id}`}
            className="px-3 py-1.5 text-[11px] font-medium border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors rounded-sm"
          >
            GitHub
          </a>
          <a
            href={project.demoUrl}
            data-testid={`project-demo-${project.id}`}
            className="px-3 py-1.5 text-[11px] font-medium border border-[#A31F34]/30 text-[#A31F34] hover:bg-[#A31F34]/5 transition-colors rounded-sm"
          >
            Demo
          </a>
        </div>
      </div>
    </article>
  );
}
