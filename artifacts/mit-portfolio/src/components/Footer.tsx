export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer data-testid="footer" className="bg-[#060F1C] border-t border-[#1E2D42] py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Logo + disclaimer */}
          <div data-testid="footer-brand">
            <img
              src="/assets/logos/mit_logo_transparent.png"
              alt="MIT Logo (reference)"
              className="h-10 w-auto object-contain mb-4 opacity-70"
            />
            <p className="text-xs text-gray-500 leading-relaxed">
              This is an independent doctoral application portfolio. It is not affiliated with, endorsed by, or
              representative of the Massachusetts Institute of Technology.
            </p>
            <p className="text-xs text-gray-600 mt-2">
              The MIT name and logo are registered trademarks of MIT.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-[10px] font-semibold tracking-widest uppercase text-gray-500 mb-4">
              Portfolio Sections
            </h4>
            <ul className="space-y-2">
              {[
                ["Research Overview", "research-overview"],
                ["Preliminary Projects", "projects"],
                ["Doctoral Proposal", "doctoral-proposal"],
                ["Research Statement", "research-statement"],
                ["Lab Fit", "lab-fit"],
                ["Download Center", "download-center"],
              ].map(([label, id]) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-xs text-gray-400 hover:text-gray-200 transition-colors"
                    data-testid={`footer-link-${id}`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Research agenda */}
          <div>
            <h4 className="text-[10px] font-semibold tracking-widest uppercase text-gray-500 mb-4">
              Research Agenda
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed mb-3">
              Responsible AI Systems for Student Support and Institutional Intelligence — toward fairness-aware,
              privacy-preserving, and explainable educational AI.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {["Fairness", "Explainability", "Privacy", "Educational AI", "Reproducibility"].map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-[10px] text-gray-500 border border-[#1E2D42] rounded-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-[#1E2D42] flex flex-col sm:flex-row items-center justify-between gap-3" data-testid="footer-bottom">
          <p className="text-[11px] text-gray-600 text-center sm:text-left">
            &copy; {currentYear} — Independent Portfolio. Built to demonstrate research readiness, not institutional affiliation.
          </p>
          <p className="text-[11px] text-gray-600">
            Image credits: MIT official About page (mit.edu/about)
          </p>
        </div>
      </div>
    </footer>
  );
}
