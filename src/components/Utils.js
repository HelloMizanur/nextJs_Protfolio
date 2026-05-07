"use client";
import { useRef, useState, useEffect } from "react";

export function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

export function Reveal({ children, delay = 0, className = "", style = {} }) {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function GradText({ children, className = "" }) {
  return (
    <span
      className={className}
      style={{
        background: "linear-gradient(135deg,#7c3aed,#06b6d4,#f59e0b)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundSize: "200% 200%",
        animation: "gradShift 4s ease infinite",
      }}
    >
      {children}
    </span>
  );
}

export function SectionHead({ eyebrow, title }) {
  return (
    <Reveal style={{ textAlign: "center", marginBottom: 64 }}>
      <p
        style={{
          color: "#a855f7",
          fontWeight: 700,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          fontSize: "0.8rem",
          marginBottom: 8,
        }}
      >
        {eyebrow}
      </p>
      <h2
        style={{
          fontSize: "clamp(2rem,5vw,3rem)",
          fontWeight: 900,
          color: "#fff",
          fontFamily: "'Playfair Display', serif",
        }}
      >
        <GradText>{title}</GradText>
      </h2>
      <div
        style={{
          width: 60,
          height: 4,
          borderRadius: 4,
          margin: "16px auto 0",
          background: "linear-gradient(90deg,#7c3aed,#06b6d4)",
        }}
      />
    </Reveal>
  );
}

export function GlowBtn({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
}) {
  const base = {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "12px 28px",
    borderRadius: 50,
    fontWeight: 700,
    fontSize: "0.95rem",
    cursor: "pointer",
    border: "none",
    transition: "all 0.3s ease",
    textDecoration: "none",
    fontFamily: "'DM Sans', sans-serif",
  };
  const primary = {
    ...base,
    background: "linear-gradient(135deg,#7c3aed,#a855f7)",
    color: "#fff",
    boxShadow: "0 0 20px rgba(124,58,237,0.5)",
  };
  const outline = {
    ...base,
    background: "transparent",
    color: "#a855f7",
    border: "2px solid #a855f7",
  };
  const s = variant === "primary" ? primary : outline;
  const Tag = href ? "a" : "button";
  return (
    <Tag
      href={href}
      onClick={onClick}
      style={s}
      className={`glow-btn ${className}`}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-3px) scale(1.03)";
        e.currentTarget.style.boxShadow =
          variant === "primary"
            ? "0 0 35px rgba(124,58,237,0.8)"
            : "0 0 20px rgba(168,85,247,0.4)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "";
        e.currentTarget.style.boxShadow =
          variant === "primary" ? "0 0 20px rgba(124,58,237,0.5)" : "";
      }}
    >
      {children}
    </Tag>
  );
}

export function SocialIcon({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 44,
        height: 44,
        borderRadius: "50%",
        background: "#16161f",
        border: "1px solid #1e1e2e",
        color: "#64748b",
        transition: "all 0.3s",
        textDecoration: "none",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = "#a855f7";
        e.currentTarget.style.borderColor = "#a855f7";
        e.currentTarget.style.boxShadow = "0 0 14px rgba(168,85,247,0.5)";
        e.currentTarget.style.transform = "translateY(-3px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = "#64748b";
        e.currentTarget.style.borderColor = "#1e1e2e";
        e.currentTarget.style.boxShadow = "";
        e.currentTarget.style.transform = "";
      }}
    >
      {children}
    </a>
  );
}

export function Logo() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      <defs>
        <linearGradient
          id="lg1"
          x1="0"
          y1="0"
          x2="44"
          y2="44"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7c3aed" />
          <stop offset="1" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      <rect width="44" height="44" rx="10" fill="url(#lg1)" />
      <text
        x="22"
        y="30"
        textAnchor="middle"
        fill="#fff"
        fontFamily="serif"
        fontWeight="700"
        fontSize="22"
      >
        M
      </text>
      <circle cx="36" cy="8" r="4" fill="#f59e0b" />
    </svg>
  );
}
