// src/pages/Work.jsx
import ProjectsSection from "../components/ProjectsSection";
import Footer from "../components/Footer";

const workProjects = [
  {
    id: "rhino",
    label: "Landing page",
    title: "Rhino Pergolas",
    role: "Design, build",
    summary:
      "Outdoor landing page with clear structure, bold visuals, and fast performance.",
    tech: ["React", "Vite", "CSS"],
    href: "https://admamr.github.io/Rhino",
  },
  {
    id: "rfglobal",
    label: "Property site",
    title: "RF Global",
    role: "Design, front end",
    summary:
      "Investment site with structured content, trust driven layout, and responsive grid.",
    tech: ["HTML", "CSS", "JavaScript"],
    href: "https://rfglobal.co.il",
  },
  {
    id: "rysplast",
    label: "Corporate site",
    title: "RYS Plast",
    role: "UI, production build",
    summary:
      "Plastic factory site focused on clarity, hierarchy, and product discovery.",
    tech: ["HTML", "CSS", "JavaScript"],
    href: "https://rys-plast.com",
  },
  // add more as needed
];

function Work() {
  return (
    <main className="work-page">
      {/* mini hero strip */}
      <section className="work-hero-strip">
        <div className="work-hero-inner">
          <p className="section-eyebrow">Selected work</p>
          <h1 className="work-hero-title">
            Digital projects built with precision and intent.
          </h1>
          <p className="work-hero-subtitle">
            A focused selection of sites and experiences that blend visual
            direction with solid front end engineering.
          </p>
        </div>
      </section>

      {/* main grid */}
      <section className="work-grid-section" id="work-grid">
        <div className="work-grid-inner">
          {workProjects.map((project) => (
            <article key={project.id} className="work-card">
              <header className="work-card-header">
                <span className="work-card-label">{project.label}</span>
                <h2 className="work-card-title">{project.title}</h2>
                <p className="work-card-role">{project.role}</p>
              </header>

              <p className="work-card-summary">{project.summary}</p>

              <div className="work-card-meta">
                <ul className="work-card-tech">
                  {project.tech.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                {project.href && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="work-card-link"
                  >
                    View live build
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* optional bottom CTA section */}
      <section className="work-cta-section">
        <div className="work-cta-inner">
          <h2 className="work-cta-title">
            Have a build in mind that needs a sharp front end
          </h2>
          <p className="work-cta-text">
            Share a link, a rough idea, or a brief, and we can start shaping a
            focused digital execution together.
          </p>
          <a href="#contact" className="work-cta-button">
            Start a project conversation
          </a>
        </div>
      </section>
    </main>
  );
}

export default Work;
