// src/components/TechStackStrip.jsx
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiVite,
  SiGithub,
  SiElementor,
  SiWordpress,
  SiGit,
  SiFigma,
  SiCanva,
  SiFramer,
} from "react-icons/si";
import LogoLoop from "./LogoLoop";

const techLogos = [
  { icon: <SiHtml5 />, label: "HTML5" },
  { icon: <SiCss3 />, label: "CSS3" },
  { icon: <SiJavascript />, label: "JavaScript" },
  { icon: <SiReact />, label: "React" },
  { icon: <SiVite />, label: "Vite" },
  { icon: <SiGithub />, label: "GitHub" },
  { icon: <SiElementor />, label: "Elementor" },
  { icon: <SiWordpress />, label: "Wordpress" },
  { icon: <SiGit />, label: "Git" },
  { icon: <SiFigma />, label: "Figma" },
  { icon: <SiCanva />, label: "Canva" },
  { icon: <SiFramer />, label: "Framer" },
];

export default function TechStackStrip() {
  return (
    <section className="techstack-section">
      <LogoLoop logos={techLogos} />
    </section>
  );
}
