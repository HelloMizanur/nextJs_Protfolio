"use client";
import { useState, useMemo, useEffect } from "react";
// আপনার পাথ অনুযায়ী ইম্পোর্ট
import { Reveal, SectionHead, GlowBtn } from "../../components/Utils";
import ALL_PROJECTS from "../data/projects.json";

/**
 * ২. Modal Component
 * প্রজেক্টের বিস্তারিত (Challenges, Future Plans, Links) দেখানোর জন্য
 */
function Modal({ project, onClose, color }) {
  // মডাল ওপেন থাকলে স্ক্রল লক করা
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

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
          borderRadius: 24,
          maxWidth: 700,
          width: "100%",
          maxHeight: "90vh",
          overflowY: "auto",
          padding: 40,
          position: "relative",
          boxShadow: `0 0 80px ${color}33`,
        }}
      >
        {/* ক্লোজ বাটন */}
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

        {/* ইমোজি প্রিভিউ */}
        <div
          style={{
            height: 180,
            borderRadius: 12,
            marginBottom: 24,
            background: `linear-gradient(135deg, ${color}33, ${color}11)`,
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
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.8rem",
            fontWeight: 800,
            marginBottom: 12,
          }}
        >
          {project.name}
        </h3>

        {/* টেক স্ট্যাক লিস্ট */}
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

        {/* Challenges Section */}
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

        {/* Future Plans Section */}
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

        {/* অ্যাকশন বাটনসমূহ */}
        <div
          style={{
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
            borderTop: "1px solid #1e1e2e",
            paddingTop: 24,
          }}
        >
          <GlowBtn href={project.live}>🌐 Live Demo</GlowBtn>
          <GlowBtn href={project.github} variant="outline">
            GitHub Code
          </GlowBtn>
        </div>
      </div>
    </div>
  );
}

/**
 * ৩. Main Projects Page
 */
export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [active, setActive] = useState(null);

  // কার্ডের জন্য ভাইব্রেন্ট কালার প্যালেট
  const colors = ["#7c3aed", "#06b6d4", "#f59e0b", "#10b981", "#ec4899"];

  // সার্চ ফিল্টারিং লজিক (Name অথবা Stack দিয়ে সার্চ)
  const filteredProjects = useMemo(() => {
    return ALL_PROJECTS.filter(
      (p) =>
        p.stack.some((s) =>
          s.toLowerCase().includes(searchQuery.toLowerCase()),
        ) || p.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [searchQuery]);

  return (
    <section
      style={{ background: "#111118", minHeight: "100vh", padding: "100px 0" }}
    >
      <div className="container">
        <SectionHead eyebrow="My Portfolio" title="Search & Explore Projects" />

        {/* সার্চ বার ডিজাইন */}
        <div
          style={{
            marginBottom: 60,
            maxWidth: 500,
            marginInline: "auto",
            position: "relative",
          }}
        >
          <input
            type="text"
            placeholder="Search stack (e.g. React, Next, MongoDB)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: "100%",
              padding: "16px 24px",
              background: "#16161f",
              border: "1px solid #1e1e2e",
              borderRadius: 16,
              color: "#fff",
              outline: "none",
              fontSize: "1rem",
            }}
          />
          <span
            style={{
              position: "absolute",
              right: 20,
              top: "50%",
              transform: "translateY(-50%)",
              opacity: 0.5,
            }}
          >
            🔍
          </span>
        </div>

        {/* প্রজেক্ট গ্রিড */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 30,
          }}
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.1}>
                <div
                  style={{
                    background: "#16161f",
                    borderRadius: 20,
                    border: "1px solid #1e1e2e",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    transition: "transform 0.3s ease",
                  }}
                >
                  {/* কার্ড হেডার (কালারফুল গ্র্যাডিয়েন্ট) */}
                  <div
                    style={{
                      height: 180,
                      background: `linear-gradient(135deg, ${colors[i % colors.length]}22, ${colors[i % colors.length]}08)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 60,
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
                        fontWeight: 700,
                        marginBottom: 10,
                      }}
                    >
                      {p.name}
                    </h3>

                    {/* ছোট ট্যাগ প্রিভিউ (প্রথম ৩টি) */}
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
                            fontSize: "0.7rem",
                            color: "#a855f7",
                            background: "rgba(124,58,237,0.1)",
                            border: "1px solid rgba(124,58,237,0.2)",
                            padding: "2px 8px",
                            borderRadius: 4,
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
                        lineHeight: 1.6,
                        marginBottom: 24,
                        flex: 1,
                      }}
                    >
                      {p.desc.slice(0, 100)}...
                    </p>

                    {/* মডাল ওপেন করার বাটন */}
                    <GlowBtn
                      onClick={() =>
                        setActive({ ...p, color: colors[i % colors.length] })
                      }
                      variant="outline"
                    >
                      View Details →
                    </GlowBtn>
                  </div>
                </div>
              </Reveal>
            ))
          ) : (
            <p
              style={{
                color: "#64748b",
                textAlign: "center",
                gridColumn: "1/-1",
                padding: "40px",
              }}
            >
              No projects found matching that technology.
            </p>
          )}
        </div>
      </div>

      {/* মডাল রেন্ডারিং */}
      {active && (
        <Modal
          project={active}
          color={active.color}
          onClose={() => setActive(null)}
        />
      )}
    </section>
  );
}
