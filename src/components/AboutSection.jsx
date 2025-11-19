// src/components/AboutSection.jsx
import { useEffect, useRef, useState } from "react";
import SpotlightCard from "./SpotlightCard";

const AboutSection = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const items = section.querySelectorAll(".fade-item");

    // initial hidden state
    items.forEach((el) => {
      el.style.opacity = 0;
      el.style.transform = "translateY(20px)";
      el.style.filter = "blur(8px)";
    });

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);

          items.forEach((el, i) => {
            el.style.opacity = 1;
            el.style.transform = "translateY(0px)";
            el.style.filter = "blur(0px)";
            el.style.transition = `all 0.9s ease ${i * 0.13}s`;
          });

          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(section);
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`about-section ${visible ? "visible" : ""}`}
    >
      <div className="section-inner about-layout">
        {/* LEFT COLUMN */}
        <div className="about-left fade-item">
          <p className="section-eyebrow">About Flammin.Studio</p>
          <h2 className="about-title">
            Design driven{" "}
            <span className="about-title-highlight">FRONTEND</span> for brands
            that care about the details.
          </h2>
          <p className="about-text">
            I mix UI design, frontend engineering, and performance thinking to
            build digital experiences that feel sharp, intentional, and ready
            for real users, NOT just Dribbble shots.
          </p>
          <div className="about-cta-wrapper">
            <a href="/about" className="about-cta-link">
              Learn more about the studio{" "}
              <span className="about-cta-arrow">↗</span>
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="about-right">
          <SpotlightCard
            className="fade-item"
            spotlightColor="rgba(216, 64, 64, 0.22)"
          >
            <h3 className="about-card-title">Web Design & Interfaces</h3>
            <div className="about-card-pillrow">
              <span className="about-card-pill">Layout systems</span>
              <span className="about-card-pill">Visual direction</span>
              <span className="about-card-pill">Component thinking</span>
            </div>
            <p className="about-card-text">
              From hero concepts to full-page flows, I design interfaces that
              balance clean aesthetics with clear hierarchy and real content.
            </p>
          </SpotlightCard>

          <SpotlightCard
            className="fade-item"
            spotlightColor="rgba(142, 22, 22, 0.3)"
          >
            <h3 className="about-card-title">Frontend Development</h3>
            <div className="about-card-pillrow">
              <span className="about-card-pill">HTML · CSS · JS</span>
              <span className="about-card-pill">React</span>
              <span className="about-card-pill">Animations</span>
            </div>
            <p className="about-card-text">
              I ship production-ready builds with modern semantics, responsive
              layouts, and micro-interactions that feel smooth — not gimmicky.
            </p>
          </SpotlightCard>

          <SpotlightCard
            className="fade-item"
            spotlightColor="rgba(255, 190, 120, 0.24)"
          >
            <h3 className="about-card-title">Performance & SEO</h3>
            <div className="about-card-pillrow">
              <span className="about-card-pill">Page speed</span>
              <span className="about-card-pill">Core Web Vitals</span>
              <span className="about-card-pill">SEO foundations</span>
            </div>
            <p className="about-card-text">
              Beyond visuals, I care about how fast things load, how they rank,
              and how efficiently users can move through the experience.
            </p>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
