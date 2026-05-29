import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import ResearchOverview from "../components/ResearchOverview";
import ProjectsSection from "../components/ProjectsSection";
import DoctoralProposal from "../components/DoctoralProposal";
import ResearchStatement from "../components/ResearchStatement";
import LabFit from "../components/LabFit";
import DownloadCenter from "../components/DownloadCenter";
import ImageCredits from "../components/ImageCredits";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <HeroSection />
        <ResearchOverview />
        <ProjectsSection />
        <DoctoralProposal />
        <ResearchStatement />
        <LabFit />
        <DownloadCenter />
        <ImageCredits />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
