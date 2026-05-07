'use client'
import { useState } from 'react'
import { Reveal, SectionHead } from './Utils'

const INFO = [
  {
    icon: '✉️', label: 'Email', value: 'mizanurrahman@email.com',
    href: 'mailto:mizanurrahman@email.com', color: '#7c3aed',
  },
  {
    icon: '📞', label: 'Phone', value: '+880 1XXX-XXXXXX',
    href: 'tel:+8801XXXXXXXXX', color: '#06b6d4',
  },
  {
    icon: '💬', label: 'WhatsApp', value: '+880 1XXX-XXXXXX',
    href: 'https://wa.me/8801XXXXXXXXX', color: '#25d366',
  },
  {
    icon: '📍', label: 'Location', value: 'Netrakona, Bangladesh',
    href: null, color: '#f59e0b',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'sending' | 'sent' | 'error'

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      setStatus('error')
      return
    }
    setStatus('sending')
    // Simulate send — replace with your API/EmailJS/Formspree call
    await new Promise(r => setTimeout(r, 1500))
    setStatus('sent')
    setForm({ name: '', email: '', message: '' })
  }

  const inputStyle = {
    width: '100%', background: '#0a0a0f', border: '1px solid #1e1e2e',
    borderRadius: 10, padding: '14px 16px', color: '#e2e8f0',
    fontSize: '0.95rem', fontFamily: "'DM Sans',sans-serif",
    outline: 'none', transition: 'border-color 0.3s, box-shadow 0.3s',
  }
  const labelStyle = {
    display: 'block', color: '#64748b', fontWeight: 600,
    fontSize: '0.85rem', marginBottom: 8, letterSpacing: '0.05em',
  }

  return (
    <section id="contact">
      <div className="container">
        <SectionHead eyebrow="Let's Connect" title="Get In Touch" />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
          gap: 40,
          alignItems: 'start',
        }}>

          {/* ── LEFT: Contact Info ── */}
          <div>
            <Reveal>
              <h3 style={{
                color: '#fff', fontFamily: "'Playfair Display',serif",
                fontSize: '1.6rem', fontWeight: 800, marginBottom: 12,
              }}>Contact Information</h3>
              <p style={{ color: '#64748b', lineHeight: 1.8, marginBottom: 32 }}>
                I'm always open to new opportunities, collaborations, or just a friendly chat.
                Feel free to reach out through any channel below!
              </p>
            </Reveal>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {INFO.map((item, i) => (
                <Reveal key={item.label} delay={i * 0.08}>
                  {item.href ? (
                    <a href={item.href} style={{ textDecoration: 'none' }}
                      onMouseEnter={e => {
                        e.currentTarget.style.transform = 'translateX(6px)'
                        e.currentTarget.style.borderColor = `${item.color}88`
                        e.currentTarget.style.boxShadow = `0 0 20px ${item.color}22`
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.transform = ''
                        e.currentTarget.style.borderColor = '#1e1e2e'
                        e.currentTarget.style.boxShadow = ''
                      }}
                    >
                      <InfoCard item={item} />
                    </a>
                  ) : (
                    <InfoCard item={item} />
                  )}
                </Reveal>
              ))}
            </div>

            {/* Social row */}
            <Reveal delay={0.3}>
              <div style={{ marginTop: 32 }}>
                <p style={{ color: '#64748b', fontWeight: 600, fontSize: '0.85rem',
                  letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16 }}>
                  Find me on
                </p>
                <div style={{ display: 'flex', gap: 12 }}>
                  {[
                    { label: 'GitHub',   href: 'https://github.com/yourusername',   color: '#fff', icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                      </svg>
                    )},
                    { label: 'LinkedIn', href: 'https://linkedin.com/in/yourusername', color: '#0a66c2', icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    )},
                    { label: 'Facebook', href: 'https://facebook.com/yourusername', color: '#1877f2', icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    )},
                  ].map(s => (
                    <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}
                      style={{
                        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                        width: 44, height: 44, borderRadius: '50%',
                        background: '#16161f', border: '1px solid #1e1e2e',
                        color: '#64748b', transition: 'all 0.3s', textDecoration: 'none',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.color = s.color
                        e.currentTarget.style.borderColor = s.color
                        e.currentTarget.style.boxShadow = `0 0 14px ${s.color}66`
                        e.currentTarget.style.transform = 'translateY(-3px)'
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.color = '#64748b'
                        e.currentTarget.style.borderColor = '#1e1e2e'
                        e.currentTarget.style.boxShadow = ''
                        e.currentTarget.style.transform = ''
                      }}
                    >{s.icon}</a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* ── RIGHT: Contact Form ── */}
          <Reveal delay={0.1}>
            <div style={{
              background: '#16161f', border: '1px solid #1e1e2e',
              borderRadius: 20, padding: '36px 32px',
              boxShadow: '0 0 60px rgba(124,58,237,0.08)',
            }}>
              <h3 style={{
                color: '#fff', fontFamily: "'Playfair Display',serif",
                fontSize: '1.5rem', fontWeight: 800, marginBottom: 8,
              }}>Send a Message</h3>
              <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: 28 }}>
                Fill the form and I'll get back to you within 24 hours.
              </p>

              {/* Name */}
              <div style={{ marginBottom: 20 }}>
                <label style={labelStyle}>Your Name</label>
                <input
                  name="name" value={form.name} onChange={handleChange}
                  placeholder="Mizanur Rahman"
                  style={inputStyle}
                  onFocus={e => {
                    e.target.style.borderColor = '#7c3aed'
                    e.target.style.boxShadow = '0 0 0 3px rgba(124,58,237,0.15)'
                  }}
                  onBlur={e => {
                    e.target.style.borderColor = '#1e1e2e'
                    e.target.style.boxShadow = ''
                  }}
                />
              </div>

              {/* Email */}
              <div style={{ marginBottom: 20 }}>
                <label style={labelStyle}>Email Address</label>
                <input
                  name="email" value={form.email} onChange={handleChange}
                  type="email" placeholder="you@example.com"
                  style={inputStyle}
                  onFocus={e => {
                    e.target.style.borderColor = '#7c3aed'
                    e.target.style.boxShadow = '0 0 0 3px rgba(124,58,237,0.15)'
                  }}
                  onBlur={e => {
                    e.target.style.borderColor = '#1e1e2e'
                    e.target.style.boxShadow = ''
                  }}
                />
              </div>

              {/* Message */}
              <div style={{ marginBottom: 28 }}>
                <label style={labelStyle}>Your Message</label>
                <textarea
                  name="message" value={form.message} onChange={handleChange}
                  placeholder="Hi Mizanur, I'd love to work with you on..."
                  rows={5}
                  style={{ ...inputStyle, resize: 'vertical', minHeight: 130 }}
                  onFocus={e => {
                    e.target.style.borderColor = '#7c3aed'
                    e.target.style.boxShadow = '0 0 0 3px rgba(124,58,237,0.15)'
                  }}
                  onBlur={e => {
                    e.target.style.borderColor = '#1e1e2e'
                    e.target.style.boxShadow = ''
                  }}
                />
              </div>

              {/* Status messages */}
              {status === 'error' && (
                <p style={{ color: '#f87171', marginBottom: 16, fontSize: '0.9rem' }}>
                  ⚠️ Please fill in all fields before sending.
                </p>
              )}
              {status === 'sent' && (
                <p style={{ color: '#4ade80', marginBottom: 16, fontSize: '0.9rem' }}>
                  ✅ Message sent! I'll get back to you soon.
                </p>
              )}

              {/* Submit */}
              <button
                onClick={handleSubmit}
                disabled={status === 'sending'}
                style={{
                  width: '100%', padding: '14px 0', borderRadius: 50,
                  background: status === 'sending'
                    ? '#333' : 'linear-gradient(135deg,#7c3aed,#a855f7)',
                  color: '#fff', fontWeight: 700, fontSize: '1rem',
                  border: 'none', cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                  fontFamily: "'DM Sans',sans-serif",
                  boxShadow: status === 'sending' ? 'none' : '0 0 24px rgba(124,58,237,0.45)',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={e => {
                  if (status !== 'sending') {
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.boxShadow = '0 0 36px rgba(124,58,237,0.7)'
                  }
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = ''
                  e.currentTarget.style.boxShadow = status === 'sending'
                    ? 'none' : '0 0 24px rgba(124,58,237,0.45)'
                }}
              >
                {status === 'sending' ? '⏳ Sending…' : '🚀 Send Message'}
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* Info card sub-component */
function InfoCard({ item }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 16,
      background: '#16161f', border: '1px solid #1e1e2e',
      borderRadius: 14, padding: '18px 20px',
      transition: 'all 0.3s ease', cursor: item.href ? 'pointer' : 'default',
    }}>
      <div style={{
        width: 52, height: 52, borderRadius: 14, flexShrink: 0,
        background: `${item.color}22`, border: `1px solid ${item.color}44`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 24, boxShadow: `0 0 16px ${item.color}22`,
      }}>{item.icon}</div>
      <div>
        <p style={{ color: '#64748b', fontSize: '0.78rem', fontWeight: 700,
          letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>
          {item.label}
        </p>
        <p style={{ color: '#e2e8f0', fontWeight: 700, fontSize: '1rem' }}>{item.value}</p>
      </div>
    </div>
  )
}
