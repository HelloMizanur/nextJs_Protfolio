"use client";
import { useState } from "react";
import { Reveal, SectionHead } from "./Utils";
import emailjs from "@emailjs/browser";

const INFO = [
  {
    icon: "✉️",
    label: "Email",
    value: "mizanur.rahman0050@gmail.com",
    href: "mailto:mizanur.rahman0050@gmail.com",
    color: "#7c3aed",
  },
  {
    icon: "📞",
    label: "Phone",
    value: "+880 1724-282253",
    href: "tel:+8801724282253",
    color: "#06b6d4",
  },
  {
    icon: "💬",
    label: "WhatsApp",
    value: "+880 1724-282253",
    href: "https://wa.me/8801724282253",
    color: "#25d366",
  },
  {
    icon: "📍",
    label: "Location",
    value: "Netrakona, Bangladesh",
    href: null,
    color: "#f59e0b",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // null | 'sending' | 'sent' | 'error'

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    const serviceId = "service_6q5cryl";
    const templateId = "template_1t6bmwa";
    const publicKey = "3Pzg0jl0ryuRJCGkR";

    const templateParams = {
      name: form.name,
      email: form.email,
      message: form.message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        setStatus("sent");
        setForm({ name: "", email: "", message: "" }); // ফর্ম খালি করা
        // ৫ সেকেন্ড পর সাকসেস মেসেজ সরিয়ে ফেলা
        setTimeout(() => setStatus(null), 5000);
      },
      (error) => {
        console.log("FAILED...", error);
        setStatus("error");
      },
    );
  };

  const inputStyle = {
    width: "100%",
    background: "#0a0a0f",
    border: "1px solid #1e1e2e",
    borderRadius: 10,
    padding: "14px 16px",
    color: "#e2e8f0",
    fontSize: "0.95rem",
    fontFamily: "'DM Sans',sans-serif",
    outline: "none",
    transition: "border-color 0.3s, box-shadow 0.3s",
  };

  const labelStyle = {
    display: "block",
    color: "#64748b",
    fontWeight: 600,
    fontSize: "0.85rem",
    marginBottom: 8,
    letterSpacing: "0.05em",
  };

  return (
    <section id="contact" style={{ padding: "80px 0" }}>
      <div className="container">
        <SectionHead eyebrow="Let's Connect" title="Get In Touch" />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: 40,
            alignItems: "start",
          }}
        >
          {/* LEFT: Contact Info */}
          <div>
            <Reveal>
              <h3
                style={{
                  color: "#fff",
                  fontSize: "1.6rem",
                  fontWeight: 800,
                  marginBottom: 12,
                }}
              >
                Contact Information
              </h3>
              <p
                style={{ color: "#64748b", lineHeight: 1.8, marginBottom: 32 }}
              >
                I'm always open to new opportunities or collaborations. Feel
                free to reach out!
              </p>
            </Reveal>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {INFO.map((item, i) => (
                <Reveal key={item.label} delay={i * 0.08}>
                  {item.href ? (
                    <a href={item.href} style={{ textDecoration: "none" }}>
                      <InfoCard item={item} />
                    </a>
                  ) : (
                    <InfoCard item={item} />
                  )}
                </Reveal>
              ))}
            </div>
          </div>

          {/* RIGHT: Contact Form */}
          <Reveal delay={0.1}>
            <div
              style={{
                background: "#16161f",
                border: "1px solid #1e1e2e",
                borderRadius: 20,
                padding: "36px 32px",
                boxShadow: "0 0 60px rgba(124,58,237,0.08)",
              }}
            >
              <h3
                style={{
                  color: "#fff",
                  fontSize: "1.5rem",
                  fontWeight: 800,
                  marginBottom: 8,
                }}
              >
                Send a Message
              </h3>
              <p
                style={{
                  color: "#64748b",
                  fontSize: "0.9rem",
                  marginBottom: 28,
                }}
              >
                Fill the form and I'll get back to you within 24 hours.
              </p>

              <div style={{ marginBottom: 20 }}>
                <label style={labelStyle}>Your Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Mizanur Rahman"
                  style={inputStyle}
                />
              </div>

              <div style={{ marginBottom: 20 }}>
                <label style={labelStyle}>Email Address</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  style={inputStyle}
                />
              </div>

              <div style={{ marginBottom: 28 }}>
                <label style={labelStyle}>Your Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Hi Mizanur, I'd love to work with you..."
                  rows={5}
                  style={{ ...inputStyle, resize: "vertical", minHeight: 130 }}
                />
              </div>

              {status === "error" && (
                <p
                  style={{
                    color: "#f87171",
                    marginBottom: 16,
                    fontSize: "0.9rem",
                  }}
                >
                  ⚠️ Error sending message. Please check all fields.
                </p>
              )}
              {status === "sent" && (
                <p
                  style={{
                    color: "#4ade80",
                    marginBottom: 16,
                    fontSize: "0.9rem",
                  }}
                >
                  ✅ Message sent! I'll get back to you soon.
                </p>
              )}

              <button
                onClick={handleSubmit}
                disabled={status === "sending"}
                style={{
                  width: "100%",
                  padding: "14px 0",
                  borderRadius: 50,
                  background:
                    status === "sending"
                      ? "#333"
                      : "linear-gradient(135deg,#7c3aed,#a855f7)",
                  color: "#fff",
                  fontWeight: 700,
                  border: "none",
                  cursor: status === "sending" ? "not-allowed" : "pointer",
                  transition: "all 0.3s",
                }}
              >
                {status === "sending" ? "⏳ Sending…" : "🚀 Send Message"}
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ item }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 16,
        background: "#16161f",
        border: "1px solid #1e1e2e",
        borderRadius: 14,
        padding: "18px 20px",
      }}
    >
      <div
        style={{
          width: 52,
          height: 52,
          borderRadius: 14,
          background: `${item.color}22`,
          border: `1px solid ${item.color}44`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 24,
        }}
      >
        {item.icon}
      </div>
      <div>
        <p
          style={{
            color: "#64748b",
            fontSize: "0.78rem",
            fontWeight: 700,
            textTransform: "uppercase",
          }}
        >
          {item.label}
        </p>
        <p style={{ color: "#e2e8f0", fontWeight: 700 }}>{item.value}</p>
      </div>
    </div>
  );
}
