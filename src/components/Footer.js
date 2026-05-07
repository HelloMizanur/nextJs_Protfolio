'use client'
import { Logo } from './Utils'

const NAVLINKS = ['Home','About','Skills','Education','Experience','Projects','Contact']

export default function Footer() {
  const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  return (
    <footer style={{
      background: '#111118', borderTop: '1px solid #1e1e2e',
      padding: '40px 0', textAlign: 'center',
    }}>
      <div className="container">
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: 10, marginBottom: 20,
        }}>
          <Logo />
          <span style={{
            color: '#fff', fontFamily: "'Playfair Display',serif",
            fontWeight: 800, fontSize: '1.1rem',
          }}>Mizanur Rahman</span>
        </div>

        <div style={{
          display: 'flex', justifyContent: 'center', flexWrap: 'wrap',
          gap: 24, marginBottom: 24,
        }}>
          {NAVLINKS.map(l => (
            <button key={l} className="nav-link" onClick={() => scrollTo(l.toLowerCase())}
              style={{ fontSize: '0.85rem' }}>{l}</button>
          ))}
        </div>

        <p style={{ color: '#64748b', fontSize: '0.85rem' }}>
          © 2026 Mizanur Rahman · Crafted with ❤️ and a lot of ☕
        </p>
      </div>
    </footer>
  )
}
