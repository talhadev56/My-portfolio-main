import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const links = [
  { to: "/#home", id: "home", label: "Home" },
  { to: "/#about", id: "about", label: "About" },
  { to: "/#projects", id: "projects", label: "Projects" },
  { to: "/#skills", id: "skills", label: "Skills" },
  { to: "/#contact", id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0.15, 0.4, 0.7] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => {
    const collapse = document.getElementById("navbarNav");
    if (collapse?.classList.contains("show")) {
      collapse.classList.remove("show");
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark site-nav fixed-top"
      data-bs-theme="dark"
    >
      <div className="container">
        <Link className="navbar-brand text-white fw-bold fs-4 mb-0" to="/#home">
          Talha Akram
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-lg-center gap-lg-1 py-3 py-lg-0">
            {links.map((link) => (
              <li className="nav-item" key={link.id}>
                <Link
                  className={`nav-link ${active === link.id ? "is-active" : ""}`}
                  to={link.to}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
