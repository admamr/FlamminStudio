// src/components/Footer.jsx
import { useEffect, useRef } from "react";
import LogoSvg from "../assets/LOGO.svg";

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;

    const handleScroll = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;

      // progress goes roughly from 0 (footer below view)
      // to -1 (footer fully in view and above center)
      const progress = (rect.top - vh) / vh;

      // map to a small offset in px (subtle, between 0 and -40px)
      const offset = Math.max(-60, Math.min(0, progress * 60));

      el.style.setProperty("--footer-parallax", `${offset}px`);
    };

    handleScroll(); // run once on mount
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <footer className="footer" ref={footerRef}>
      <div className="footer-glass-panel">
        <div className="footer-content">
          {/* Column 1 */}
          <div className="footer-col">
            <img src={LogoSvg} alt="Flammin Studio" className="footer-logo" />
            <p className="footer-tagline">
              Design driven frontend for brands that demand sharp execution.
            </p>
          </div>

          {/* Column 2 */}
          <div className="footer-col">
            <h4 className="footer-heading">Studio</h4>
            <ul>
              <li>
                <a href="#work">Home</a>
              </li>
              <li>
                <a href="#work">Work</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="footer-col">
            <h4 className="footer-heading">Work With Me</h4>
            <p className="footer-cta-text">
              Have a product or brand that needs a sharp frontend?
            </p>
            <a href="/contact" className="footer-cta-btn">
              Start a project <span className="footer-cta-arrow">↗</span>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="copyright">
            © {new Date().getFullYear()} Flammin
            <span className="footer-dot">.</span>Studio
          </span>
          <span className="footer-slogan">
            Designed with vision, built with precision.
          </span>
        </div>
      </div>
    </footer>
  );
}
