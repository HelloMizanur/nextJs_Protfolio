"use client";
import { useState, useEffect } from "react";
import { Reveal, GradText, GlowBtn, SocialIcon } from "./Utils";
import Image from "next/image"; // Ensure no curly braces here

function Typewriter({ words }) {
  const [idx, setIdx] = useState(0);
  const [txt, setTxt] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const word = words[idx % words.length];
    const timeout = setTimeout(
      () => {
        if (!del) {
          setTxt(word.slice(0, txt.length + 1));
          if (txt.length + 1 === word.length)
            setTimeout(() => setDel(true), 1200);
        } else {
          setTxt(word.slice(0, txt.length - 1));
          if (txt.length - 1 === 0) {
            setDel(false);
            setIdx((i) => i + 1);
          }
        }
      },
      del ? 60 : 110,
    );
    return () => clearTimeout(timeout);
  }, [txt, del, idx, words]);
  return (
    <span style={{ color: "#a855f7" }}>
      {txt}
      <span style={{ animation: "blink 1s step-end infinite" }}>|</span>
    </span>
  );
}

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/HelloMizanur",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hellomizanur/",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/hellomizanur",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "https://x.com/hellomizanur",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: 80,
      }}
    >
      {/* Background Orbs */}
      {[
        { left: "10%", top: "20%", size: 400, color: "#7c3aed" },
        { left: "70%", top: "60%", size: 300, color: "#06b6d4" },
        { left: "40%", top: "80%", size: 200, color: "#f59e0b" },
      ].map((o, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: o.left,
            top: o.top,
            width: o.size,
            height: o.size,
            borderRadius: "50%",
            background: o.color,
            filter: "blur(120px)",
            opacity: 0.12,
            animation: `orb ${5 + i * 1.5}s ease-in-out infinite alternate`,
            pointerEvents: "none",
          }}
        />
      ))}

      <div className="container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 60,
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {/* Left Content */}
          <div style={{ flex: 1, minWidth: 280 }}>
            <Reveal>
              <div
                style={{
                  display: "inline-block",
                  background: "rgba(124,58,237,0.13)",
                  border: "1px solid rgba(124,58,237,0.27)",
                  borderRadius: 50,
                  padding: "6px 18px",
                  marginBottom: 24,
                  color: "#a855f7",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                }}
              >
                👋 Available for Hire
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 900,
                  fontSize: "clamp(2.5rem,6vw,4.5rem)",
                  lineHeight: 1.1,
                  marginBottom: 16,
                  color: "#fff",
                }}
              >
                Hi, I'm
                <br />
                <GradText>
                  Mizanur
                  <br />
                  Rahman
                </GradText>
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p
                style={{
                  fontSize: "1.3rem",
                  fontWeight: 600,
                  marginBottom: 24,
                  color: "#e2e8f0",
                }}
              >
                <Typewriter
                  words={[
                    "Web Developer",
                    "Frontend Engineer",
                    "React Specialist",
                    "Digital Marketer",
                  ]}
                />
              </p>
              <p
                style={{
                  color: "#64748b",
                  lineHeight: 1.8,
                  maxWidth: 480,
                  marginBottom: 36,
                }}
              >
                CSE graduate turning ideas into beautiful, fast, and accessible
                web experiences. Passionate about clean code and pixel-perfect
                design.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div
                style={{
                  display: "flex",
                  gap: 16,
                  flexWrap: "wrap",
                  marginBottom: 40,
                }}
              >
                <GlowBtn href="https://drive.google.com/uc?export=download&id=1qGN9f3Xi0xqjfLrMxYRgu807NUGMTl3Y">
                  📄 Download Resume
                </GlowBtn>
                <GlowBtn variant="outline" href="#projects">
                  View My Work →
                </GlowBtn>
              </div>
              <div style={{ display: "flex", gap: 12 }}>
                {SOCIALS.map((s) => (
                  <SocialIcon key={s.label} href={s.href} label={s.label}>
                    {s.icon}
                  </SocialIcon>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Avatar Container */}
          <Reveal delay={0.2}>
            <div
              style={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {/* Dashed Spinners */}
              <div
                style={{
                  position: "absolute",
                  inset: -20,
                  borderRadius: "50%",
                  border: "2px dashed rgba(124,58,237,0.33)",
                  animation: "spin 20s linear infinite",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: -40,
                  borderRadius: "50%",
                  border: "2px dashed rgba(6,182,212,0.2)",
                  animation: "spin 30s linear infinite reverse",
                }}
              />

              {/* Main Avatar Div */}
              <div
                style={{
                  width: 300,
                  height: 300,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg,#7c3aed,#06b6d4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 0 60px rgba(124,58,237,0.6)",
                  border: "4px solid #a855f7",
                  flexShrink: 0,
                  animation: "float 4s ease-in-out infinite",
                  position: "relative", // Required for fill
                  overflow: "hidden", // Clips the image to the circle
                }}
              >
                <Image
                  src="/assets/my.png" // Path simplified (no /public)
                  fill
                  style={{ objectFit: "cover" }}
                  alt="Mizanur Rahman"
                  priority // Optimization for hero images
                />
              </div>

              {/* Skill Badges */}
              {[
                { txt: "React Dev", color: "#7c3aed", top: -20, left: -30 },
                { txt: "NodeJs", color: "#06b6d4", bottom: -10, left: -40 },
                { txt: "NextJs", color: "#f59e0b", top: 40, right: -50 },
                { txt: "Full stack", color: "#f59e0b", top: 180, right: -80 },
              ].map((b, i) => (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    top: b.top,
                    bottom: b.bottom,
                    left: b.left,
                    right: b.right,
                    background: "#16161f",
                    border: `1px solid ${b.color}66`,
                    borderRadius: 50,
                    padding: "6px 14px",
                    color: b.color,
                    fontWeight: 700,
                    fontSize: "0.8rem",
                    whiteSpace: "nowrap",
                    boxShadow: `0 0 16px ${b.color}44`,
                    animation: `pulse ${2 + i * 0.5}s ease-in-out infinite`,
                  }}
                >
                  {b.txt}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
