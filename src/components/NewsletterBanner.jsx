// src/components/NewsletterBanner.jsx
import React from "react";

function NewsletterBanner() {
  return (
    <section
      className="newsletter-section"
      aria-labelledby="newsletter-heading"
    >
      <div className="section-inner newsletter-inner">
        {/* LEFT: Newsletter sign-up */}
        <div className="newsletter-col newsletter-signup">
          <p className="newsletter-section-eyebrow">Stay in the loop</p>
          <h2 id="newsletter-heading" className="newsletter-title">
            Get Flammin.Studio updates, launches, and case studies first.
          </h2>
          <p className="newsletter-subtitle">
            No spam. Just occasional deep-dives into builds, experiments, and
            what&apos;s shipping next.
          </p>

          <div className="newsletter-actions">
            <input
              type="email"
              className="newsletter-input"
              placeholder="Enter your email"
              aria-label="Email address"
            />
            <button className="newsletter-signup-btn" type="button">
              Sign up
            </button>
          </div>
        </div>

        {/* RIGHT: Contact blurb + CTA */}
        <div className="newsletter-col newsletter-contact">
          <p className="newsletter-section-eyebrow">Work with the studio</p>
          <h3 className="newsletter-contact-title">
            Have a brand, product, or idea that needs a sharp frontend?
          </h3>
          <p className="newsletter-contact-copy">
            Tell me about your project, goals, and timeline. I&apos;ll get back
            with ideas, structure, and a clear next step.
          </p>

          <a href="/contact" className="newsletter-contact-btn">
            Connect <span className="contact-cta-arrow">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default NewsletterBanner;
