import { useState } from "react";

interface NavbarProps {
  onNavigate: (id: string) => void;
}

const Navbar = ({ onNavigate }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", id: "home" },
    { name: "Technologies", id: "technologies" },
    { name: "Projects", id: "projects" },
    { name: "About", id: "about" },
    { name: "Contact", id: "contact" },
  ];

  const handleNavigate = (id: string) => {
    onNavigate(id);
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <button
          className="brand"
          onClick={() => handleNavigate("home")}
        >
          <span className="brand-logo">
            &lt;/&gt;
          </span>
          <span className="gradient-text">Dev Stack</span>
        </button>

        <nav className={`nav-links ${menuOpen ? "mobile-open" : ""}`}>
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavigate(link.id)}
            >
              {link.name}
            </button>
          ))}
        </nav>

        <div className="auth-buttons">
          <button className="sign-in">Sign In</button>
          <button className="sign-up">Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;