// src/components/ProjectsSection.jsx
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import TextType from "./TextType";
import CardSwap, { Card } from "./CardSwap";

import rfGlobalImg from "../assets/projects/rfglobal-pr.jpg";
import rhinoImg from "../assets/projects/rhino-pr.jpg";
import creativePlaceImg from "../assets/projects/cp-pr.jpg";
import portfolioImg from "../assets/projects/srf-pr.jpg";

const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const items = section.querySelectorAll(".fade-item");

    gsap.set(items, {
      opacity: 0,
      y: 25,
      filter: "blur(8px)",
    });

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);

          gsap.to(items, {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1,
            ease: "power3.out",
            stagger: 0.18, // short delay between each item
          });

          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);
  }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      className={`projects-section fade-in-section ${visible ? "visible" : ""}`}
    >
      {/* HEADER */}
      <div className="section-inner">
        <div className="projects-header fade-item">
          <p className="section-eyebrow">Selected Work</p>

          <div className="fade-item">
            <TextType
              as="h2"
              className="projects-title"
              text={[
                "Clean builds for real clients",
                "Design + Development in one flow",
                "Projects that actually ship",
              ]}
              typingSpeed={70}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
              textColors={["#eeeeee", "#d84040"]}
            />
          </div>

          <p className="section-subtitle fade-item">
            A curated mix of brand sites, landing pages, and product
            experiences.
          </p>
          <div className="projects-cta-wrapper fade-item">
            <a href="/work" className="projects-cta-link fade-item">
              View Full Work <span className="project-cta-arrow">↗</span>
            </a>
            <p className="projects-cta-coming-soon">
              More case studies, in-depth breakdowns
              <br /> and experimental builds are coming very soon.
            </p>
          </div>
        </div>
      </div>

      {/* CARD SWAP */}
      <div className="projects-cards-swap-shell fade-item">
        <CardSwap
          width={560}
          height={340}
          cardDistance={70}
          verticalDistance={80}
          delay={3000}
          pauseOnHover={true}
        >
          {/* RF GLOBAL */}
          <Card>
            <div className="project-card-inner">
              <div
                className="project-card-media"
                style={{ backgroundImage: `url(${rfGlobalImg})` }}
              />
              <div className="project-card-body">
                <span className="project-card-badge">
                  Real Estate • WordPress
                </span>
                <h3 className="project-card-title">RF Global — Real Estate</h3>
                <p className="project-card-role">Design · Development · SEO</p>
                <p className="project-card-desc">
                  High-converting real estate hub optimized for clarity and
                  investor performance.
                </p>
                <div className="project-card-footer">
                  <a
                    className="project-card-link"
                    href="https://rfglobal.co.il"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View live site ↗
                  </a>
                </div>
              </div>
            </div>
          </Card>

          {/* RHINO PERGOLAS */}
          <Card>
            <div className="project-card-inner">
              <div
                className="project-card-media"
                style={{ backgroundImage: `url(${rhinoImg})` }}
              />
              <div className="project-card-body">
                <span className="project-card-badge">Outdoor • Landing</span>
                <h3 className="project-card-title">Rhino Pergolas</h3>
                <p className="project-card-role">Design · Build</p>
                <p className="project-card-desc">
                  Minimal landing page built with clean structure and strong
                  visuals.
                </p>
                <div className="project-card-footer">
                  <a
                    className="project-card-link"
                    href="https://admamr.github.io/Rhino/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View live page ↗
                  </a>
                </div>
              </div>
            </div>
          </Card>

          {/* CREATIVEPLACE.IO */}
          <Card>
            <div className="project-card-inner">
              <div
                className="project-card-media"
                style={{ backgroundImage: `url(${creativePlaceImg})` }}
              />
              <div className="project-card-body">
                <span className="project-card-badge">Studio • Multi-page</span>
                <h3 className="project-card-title">CreativePlace.io</h3>
                <p className="project-card-role">UX · Web Design · Build</p>
                <p className="project-card-desc">
                  Multi-page studio site with clear IA and smooth design
                  hierarchy.
                </p>
                <div className="project-card-footer">
                  <a
                    className="project-card-link"
                    href="https://creativeplace.io"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit website ↗
                  </a>
                </div>
              </div>
            </div>
          </Card>

          {/* PERSONAL PORTFOLIO */}
          <Card>
            <div className="project-card-inner">
              <div
                className="project-card-media"
                style={{ backgroundImage: `url(${portfolioImg})` }}
              />
              <div className="project-card-body">
                <span className="project-card-badge">Personal • Frontend</span>
                <h3 className="project-card-title">Flammin.Studio Portfolio</h3>
                <p className="project-card-role">Design · Frontend Dev</p>
                <p className="project-card-desc">
                  Dark-mode portfolio showcasing real client work, motion, and
                  modern builds.
                </p>
                <div className="project-card-footer">
                  <a
                    className="project-card-link"
                    href="https://admamr.github.io"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View portfolio ↗
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </CardSwap>
      </div>
    </section>
  );
};

export default ProjectsSection;
