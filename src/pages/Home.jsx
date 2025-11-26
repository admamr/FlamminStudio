// src/pages/Home.jsx
import Hero from "../components/Hero";
import ProjectsSection from "../components/ProjectsSection";
import AboutSection from "../components/AboutSection";
import TechStackStrip from "../components/TechStackStrip";
import ClientsPreview from "../components/ClientsPreview";
import Footer from "../components/Footer";

function Home({ animate }) {
  return (
    <>
      <Hero animate={animate} />
      <ProjectsSection />
      <AboutSection />
      <TechStackStrip />
      <ClientsPreview />
      <Footer />
    </>
  );
}

export default Home;
