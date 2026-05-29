import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Research Overview", href: "#research-overview" },
  { label: "Projects", href: "#projects" },
  { label: "Doctoral Proposal", href: "#doctoral-proposal" },
  { label: "Research Statement", href: "#research-statement" },
  { label: "Lab Fit", href: "#lab-fit" },
  { label: "Download Center", href: "#download-center" },
  { label: "About", href: "#about" },
];

const SECTION_IDS = [
  "research-overview",
  "projects",
  "doctoral-proposal",
  "research-statement",
  "lab-fit",
  "download-center",
  "about",
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 48);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false);
    }
  };

  return (
    <nav
      data-testid="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0A1628]/97 backdrop-blur-md shadow-lg" : "bg-[#0A1628]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-0">
        <div className="flex items-center justify-between h-16">
          {/* Logo + Disclaimer */}
          <div className="flex flex-col justify-center gap-0.5">
            <img
              src="/assets/logos/mit_logo_transparent.png"
              alt="MIT Logo (reference)"
              className="h-8 w-auto object-contain"
              data-testid="nav-mit-logo"
            />
            <span className="text-[10px] text-gray-400 leading-none tracking-wide">
              Independent Portfolio — Not an Official MIT Page
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1" data-testid="nav-links-desktop">
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  data-testid={`nav-link-${sectionId}`}
                  className={`px-3 py-2 text-[13px] font-medium tracking-wide transition-colors duration-200 rounded-sm ${
                    isActive
                      ? "text-white border-b-2 border-[#A31F34]"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            data-testid="nav-mobile-toggle"
            aria-label="Toggle navigation"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden pb-4 border-t border-[#1E2D42]" data-testid="nav-mobile-menu">
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  data-testid={`nav-mobile-link-${sectionId}`}
                  className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
}
