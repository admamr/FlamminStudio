import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="app-header">
      <div className="logo-content">
        <img src={LogoSvg} alt="Flammin Studio Logo" className="bubble-logo" />
      </div>

      {/* Desktop / Tablet nav */}
      <nav className="nav">
        <a href="#work" className="nav-link">
          Work
        </a>
        <a href="#about" className="nav-link">
          About
        </a>
        <a href="#contact" className="nav-link">
          Contact
        </a>
      </nav>

      {/* Mobile hamburger */}
      <button
        className={`menu-toggle ${isOpen ? "is-open" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation"
      >
        <span className="menu-line" />
        <span className="menu-line" />
        <span className="menu-line" />
      </button>

      {/* Mobile dropdown panel */}
      {isOpen && (
        <div className="mobile-nav">
          <a href="#work" className="mobile-nav-link" onClick={closeMenu}>
            Work
          </a>
          <a href="#about" className="mobile-nav-link" onClick={closeMenu}>
            About
          </a>
          <a href="#contact" className="mobile-nav-link" onClick={closeMenu}>
            Contact
          </a>
        </div>
      )}
    </header>
  );
}

export default Navbar;
