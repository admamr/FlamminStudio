// src/App.jsx
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

import Hero from "./components/Hero";
import StaggeredMenu from "./components/StaggeredMenu";
import LogoSvg from "./assets/LOGO.svg";
import ProjectsSection from "./components/ProjectsSection";
import AboutSection from "./components/AboutSection";

const menuItems = [
  { label: "Home", ariaLabel: "Go to home", link: "#hero" },
  { label: "Work", ariaLabel: "View my work", link: "#work" },
  { label: "About", ariaLabel: "Learn about me", link: "#about" },
  { label: "Contact", ariaLabel: "Get in touch", link: "#contact" },
];

const socialItems = [
  { label: "Instagram", link: "https://www.instagram.com/flammin.studio" },
  { label: "GitHub", link: "https://github.com/admamr" },
  { label: "LinkedIn", link: "https://linkedin.com/in/adam-amar1" },
];

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [heroShouldAnimate, setHeroShouldAnimate] = useState(false);

  const splashRef = useRef(null);
  const mainRef = useRef(null);
  const taglineRef = useRef(null);

  useEffect(() => {
    let current = 0;
    const target = 100;
    const step = 1;
    const intervalMs = 45;

    const intervalId = setInterval(() => {
      current += step;

      if (current >= target) {
        current = target;
        clearInterval(intervalId);

        // instantly reveal main app behind the loader
        if (mainRef.current) {
          gsap.set(mainRef.current, { autoAlpha: 1 });
        }

        // trigger hero animation ONCE
        setHeroShouldAnimate(true);

        // fade out splash, then remove it from DOM
        if (splashRef.current) {
          gsap.to(splashRef.current, {
            autoAlpha: 0,
            duration: 0.8,
            ease: "power2.out",
            onComplete: () => setIsLoading(false),
          });
        } else {
          setIsLoading(false);
        }
      }

      setProgress(current);
    }, intervalMs);

    // subtle float on tagline text
    if (taglineRef.current) {
      gsap.to(taglineRef.current, {
        y: -4,
        duration: 1.4,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }

    return () => {
      clearInterval(intervalId);
      gsap.killTweensOf(taglineRef.current);
    };
  }, []);

  return (
    <div className="app">
      {/* STAGGERED MENU HEADER */}
      <StaggeredMenu
        isFixed={true}
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="#EEEEEE"
        openMenuButtonColor="#D84040"
        changeMenuColorOnOpen={true}
        colors={["#8E1616", "#D84040", "#1D1616"]}
        logoUrl={LogoSvg}
        accentColor="#D84040"
        onMenuOpen={() => console.log("Menu opened")}
        onMenuClose={() => console.log("Menu closed")}
      />

      {/* SPLASH / PRELOADER */}
      {isLoading && (
        <div className="splash-screen" ref={splashRef}>
          <div className="splash-inner">
            <h1 className="splash-title">
              FLAMMIN<span className="splash-title-dot">.</span>STUDIO
            </h1>
            <h2 className="splash-subtitle" ref={taglineRef}>
              Activating…
            </h2>
          </div>

          {/* bottom-right counter */}
          <div className="splash-percent-wrapper">
            <div className="splash-percent">
              {progress}
              <span className="splash-percent-symbol">%</span>
            </div>
          </div>
        </div>
      )}

      {/* MAIN CONTENT */}
      <main className="app-main" ref={mainRef}>
        <Hero animate={heroShouldAnimate} />
        <ProjectsSection />
        <AboutSection />
      </main>
    </div>
  );
}

export default App;
