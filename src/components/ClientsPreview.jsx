// src/components/ClientsPreview.jsx
import React from "react";

function ClientsPreview() {
  return (
    <section className="clients-section section" id="clients">
      <div className="section-inner clients-inner">
        {/* Left, intro text */}
        <div className="clients-copy">
          <p className="section-eyebrow">Clients and collaborations</p>

          <h2 className="clients-title">
            Built for teams who care about how their product feels, not just how
            it looks.
          </h2>

          <p className="clients-subtitle">
            From lean founders to creative studios, I plug in as your frontend
            and design partner, keeping the experience fast, sharp, and on
            brand.
          </p>

          <a href="/contact" className="clients-cta-link">
            Connect with the studio <span className="client-cta-arrow">↗</span>
          </a>
        </div>

        {/* Right, category cards */}
        <div className="clients-grid">
          <article className="client-card">
            <span className="client-pill">Best fit</span>
            <h3 className="client-title">Early stage startups</h3>
            <p className="client-text">
              Fast iterations, clean launches, and landing pages that actually
              convert traffic to demos.
            </p>
          </article>

          <article className="client-card">
            <span className="client-pill">Perfect match</span>
            <h3 className="client-title">Creative studios</h3>
            <p className="client-text">
              When you need a frontend partner who understands grids, motion,
              and design systems, not just tickets.
            </p>
          </article>

          <article className="client-card">
            <span className="client-pill">Ongoing</span>
            <h3 className="client-title">Agencies and teams</h3>
            <p className="client-text">
              Marketing, product, and brand teams that need a reliable dev to
              ship polished web work on repeat.
            </p>
          </article>

          <article className="client-card">
            <span className="client-pill">Selective</span>
            <h3 className="client-title">Independent creators</h3>
            <p className="client-text">
              Creators, coaches, and founders who want a premium, web first
              identity, not just another template.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default ClientsPreview;
