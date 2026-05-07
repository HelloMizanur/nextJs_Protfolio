"use client";
import { useState, useEffect } from "react";
import { Reveal, SectionHead, GlowBtn } from "./Utils";
import ALL_PROJECTS from "../app/data/projects.json";

function Modal({ project, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const colors = ["#7c3aed", "#06b6d4", "#f59e0b", "#10b981", "#ec4899"];

  const idx = ALL_PROJECTS.findIndex((p) => p.name === project.name);
  const c = colors[idx % colors.length] || "#7c3aed";

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.85)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: "blur(8px)",
        padding: 20,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#16161f",
          border: "1px solid #1e1e2e",
          borderRadius: 20,
          maxWidth: 700,
          width: "100%",
          maxHeight: "90vh",
          overflowY: "auto",
          padding: 40,
          position: "relative",
          boxShadow: `0 0 80px ${c}44`,
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            background: "#111118",
            border: "none",
            color: "#64748b",
            width: 36,
            height: 36,
            borderRadius: "50%",
            cursor: "pointer",
            fontSize: 18,
          }}
        >
          ✕
        </button>

        <div
          style={{
            height: 200,
            borderRadius: 12,
            marginBottom: 24,
            background: `linear-gradient(135deg,${c}33,${c}11)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 72,
          }}
        >
          {project.emoji}
        </div>

        <h3
          style={{
            color: "#fff",
            fontFamily: "'Playfair Display',serif",
            fontSize: "1.8rem",
            fontWeight: 800,
            marginBottom: 8,
          }}
        >
          {project.name}
        </h3>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            marginBottom: 20,
          }}
        >
          {project.stack.map((s) => (
            <span
              key={s}
              style={{
                background: "rgba(124,58,237,0.13)",
                color: "#a855f7",
                padding: "4px 12px",
                borderRadius: 50,
                fontSize: "0.8rem",
                border: "1px solid rgba(124,58,237,0.27)",
              }}
            >
              {s}
            </span>
          ))}
        </div>

        <p style={{ color: "#94a3b8", lineHeight: 1.8, marginBottom: 20 }}>
          {project.desc}
        </p>

        <div
          style={{
            background: "#111118",
            borderRadius: 12,
            padding: 20,
            marginBottom: 20,
          }}
        >
          <h4 style={{ color: "#f59e0b", fontWeight: 700, marginBottom: 8 }}>
            ⚡ Challenges
          </h4>
          <p style={{ color: "#64748b", lineHeight: 1.7, fontSize: "0.9rem" }}>
            {project.challenges}
          </p>
        </div>

        <div
          style={{
            background: "#111118",
            borderRadius: 12,
            padding: 20,
            marginBottom: 24,
          }}
        >
          <h4 style={{ color: "#06b6d4", fontWeight: 700, marginBottom: 8 }}>
            🚀 Future Plans
          </h4>
          <p style={{ color: "#64748b", lineHeight: 1.7, fontSize: "0.9rem" }}>
            {project.future}
          </p>
        </div>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <GlowBtn href={project.live}>🌐 Live Demo</GlowBtn>
          <GlowBtn href={project.github} variant="outline">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              style={{ marginRight: 8 }}
            >
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            GitHub
          </GlowBtn>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [active, setActive] = useState(null);
  const colors = ["#7c3aed", "#06b6d4", "#f59e0b", "#10b981", "#ec4899"];

  const featuredProjects = ALL_PROJECTS.slice(0, 3);

  return (
    <section
      id="projects"
      style={{ background: "#111118", padding: "100px 0" }}
    >
      <div className="container">
        <SectionHead eyebrow="My Work" title="Featured Projects" />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: 28,
          }}
        >
          {featuredProjects.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <div
                className="card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  background: "#16161f",
                  borderRadius: 20,
                  border: "1px solid #1e1e2e",
                  overflow: "hidden",
                  height: "100%",
                }}
              >
                {/* কার্ডের উপরের কালারফুল অংশ */}
                <div
                  style={{
                    height: 200,
                    background: `linear-gradient(135deg,${colors[i % colors.length]}33,${colors[i % colors.length]}11)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 72,
                  }}
                >
                  {p.emoji}
                </div>

                {/* কার্ড কন্টেন্ট */}
                <div
                  style={{
                    padding: 24,
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <h3
                    style={{
                      color: "#fff",
                      fontWeight: 800,
                      fontSize: "1.1rem",
                      marginBottom: 12,
                      fontFamily: "'Playfair Display',serif",
                    }}
                  >
                    {p.name}
                  </h3>

                  {/* টেক স্ট্যাকের প্রথম ৩টি ট্যাগ */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 6,
                      marginBottom: 16,
                    }}
                  >
                    {p.stack.slice(0, 3).map((s) => (
                      <span
                        key={s}
                        style={{
                          background: "rgba(124,58,237,0.13)",
                          color: "#a855f7",
                          padding: "3px 10px",
                          borderRadius: 50,
                          fontSize: "0.75rem",
                          border: "1px solid rgba(124,58,237,0.2)",
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <p
                    style={{
                      color: "#64748b",
                      fontSize: "0.9rem",
                      lineHeight: 1.7,
                      flex: 1,
                      marginBottom: 20,
                    }}
                  >
                    {p.desc.slice(0, 110)}…
                  </p>

                  <GlowBtn onClick={() => setActive(p)} variant="outline">
                    View Details →
                  </GlowBtn>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* See All Projects বাটন */}
        <div
          style={{ marginTop: 60, display: "flex", justifyContent: "center" }}
        >
          <Reveal delay={0.4}>
            <GlowBtn href="/projects">See All Projects ↗</GlowBtn>
          </Reveal>
        </div>
      </div>

      {/* মডাল রেন্ডারিং */}
      {active && <Modal project={active} onClose={() => setActive(null)} />}
    </section>
  );
}
