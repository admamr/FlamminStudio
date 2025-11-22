// src/components/Hero.jsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import heroVideo from "../assets/hero-bg-2.mp4";
import heroPoster from "../assets/hero-poster.jpg";

function Hero({ animate }) {
  const heroRef = useRef(null);
  const bgRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const actionsRef = useRef(null);

  // Intro blur + fade-in sequence (runs once after loader finishes)
  useEffect(() => {
    if (!animate) return;

    const ctx = gsap.context(() => {
      // start blurred + lowered
      gsap.set(
        [
          badgeRef.current,
          titleRef.current,
          subtitleRef.current,
          actionsRef.current,
        ],
        {
          opacity: 0,
          y: 24,
          filter: "blur(10px)",
        }
      );

      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.7 },
      });

      tl.to(badgeRef.current, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      })
        .to(
          titleRef.current,
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          },
          "-=0.35"
        )
        .to(
          subtitleRef.current,
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          },
          "-=0.3"
        )
        .to(
          actionsRef.current,
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          },
          "-=0.25"
        );
    }, heroRef);

    return () => ctx.revert();
  }, [animate]);

  // Scroll parallax for the hero background
  useEffect(() => {
    const heroEl = heroRef.current;
    const bgEl = bgRef.current;
    if (!heroEl || !bgEl) return;

    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      window.requestAnimationFrame(() => {
        const rect = heroEl.getBoundingClientRect();
        const vh = window.innerHeight || document.documentElement.clientHeight;

        // Only when hero is in view
        if (rect.bottom >= 0 && rect.top <= vh) {
          const progress = (vh - rect.top) / (vh + rect.height); // ~0 → 1
          const clamped = Math.max(0, Math.min(1, progress));
          const offset = (clamped - 0.5) * 60; // -30px → +30px

          gsap.to(bgEl, {
            y: offset,
            duration: 0.4,
            ease: "power2.out",
          });
        }

        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial position

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="hero" id="hero" ref={heroRef}>
      {/* 🔥 Video Background with parallax */}
      <div className="hero-bg" ref={bgRef}>
        <video
          src={heroVideo}
          poster={heroPoster}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        />
      </div>

      {/* Overlay */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="hero-content">
        <p className="hero-badge" ref={badgeRef}>
          Creative Tech Studio
        </p>
        <h1 className="hero-title" ref={titleRef}>
          Engineered aesthetics for modern brands.
        </h1>
        <p className="hero-subtitle" ref={subtitleRef}>
          Web design, frontend development, and digital craftsmanship, built
          with clean code and sharp visuals.
        </p>
        <div className="hero-actions" ref={actionsRef}>
          <button className="btn-primary">View Projects</button>
          <button className="btn-ghost">Let&apos;s Work Together</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
