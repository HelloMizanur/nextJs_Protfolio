"use client";
import { useState, useEffect } from "react";
import { Logo } from "./Utils";

const NAVLINKS = [
  "Home",
  "About",
  "Skills",
  "Education",
  "Experience",
  "Projects",
  "Contact",
];

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setNavOpen(false);
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled ? "rgba(10,10,15,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid #1e1e2e" : "none",
        transition: "all 0.4s ease",
        padding: "16px 0",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Brand */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            cursor: "pointer",
          }}
          onClick={() => scrollTo("home")}
        >
          <Logo />
          <div>
            <div
              style={{
                color: "#fff",
                fontWeight: 800,
                fontSize: "1.05rem",
                fontFamily: "'Playfair Display', serif",
              }}
            >
              Mizanur Rahman
            </div>
            <div
              style={{
                color: "#64748b",
                fontSize: "0.72rem",
                letterSpacing: "0.1em",
              }}
            >
              Web Developer
            </div>
          </div>
        </div>

        {/* Desktop nav */}
        <div className="hide-mobile" style={{ display: "flex", gap: 32 }}>
          {NAVLINKS.map((l) => (
            <button
              key={l}
              className="nav-link"
              onClick={() => scrollTo(l.toLowerCase())}
            >
              {l}
            </button>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <a
            href="#"
            className="hide-mobile glow-btn"
            style={{
              background: "linear-gradient(135deg,#7c3aed,#a855f7)",
              color: "#fff",
              boxShadow: "0 0 20px rgba(124,58,237,0.5)",
            }}
          >
            Hire Me ✨
          </a>

          {/* Hamburger - added className "show-mobile" */}
          <button
            className="show-mobile"
            onClick={() => setNavOpen((o) => !o)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#fff",
              fontSize: 24,
              display: "flex",
            }}
            aria-label="Toggle menu"
          >
            {navOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {navOpen && (
        <div
          className="show-mobile"
          style={{
            background: "rgba(10,10,15,0.97)",
            borderTop: "1px solid #1e1e2e",
            padding: "20px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          {NAVLINKS.map((l) => (
            <button
              key={l}
              className="nav-link"
              style={{ textAlign: "left", fontSize: "1.1rem" }}
              onClick={() => scrollTo(l.toLowerCase())}
            >
              {l}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
