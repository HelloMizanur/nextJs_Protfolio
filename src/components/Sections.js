'use client'
import { useState, useRef, useEffect } from 'react'
import { Reveal, GradText, SectionHead } from './Utils'

/* ── ABOUT ── */
export function About() {
  return (
    <section id="about" style={{ background: '#111118' }}>
      <div className="container">
        <SectionHead eyebrow="Get to Know Me" title="About Me" />
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
          gap: 40,
        }}>
          {[
            { icon: '🚀', title: 'My Journey', text: `I completed my B.Sc. in Computer Science & Engineering in 2021. My passion for technology led me to explore digital marketing professionally (2023–2024) at SEBPO, where I honed data-driven thinking and campaign optimisation. In 2026, I pivoted back to my first love — coding — completing an intensive web development programme at Programming Hero, mastering the modern full-stack ecosystem.` },
            { icon: '💻', title: 'What I Love', text: `I'm obsessed with building interfaces that feel alive — smooth animations, intuitive layouts, and code that scales. I enjoy bridging the gap between great design and solid engineering. Whether it's a pixel-perfect landing page or a complex dashboard, I approach every project with the same level of care and craft.` },
            { icon: '⚽', title: 'Beyond Code', text: `When I'm away from the screen, you'll find me on the football pitch, reading about design philosophy, or exploring how technology shapes human behaviour. I believe well-rounded interests fuel creativity — my marketing background gives me a unique lens for understanding users, not just building for them.` },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <div className="card" style={{ padding: 32 }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>{c.icon}</div>
                <h3 style={{
                  color: '#fff', fontWeight: 800, marginBottom: 12, fontSize: '1.3rem',
                  fontFamily: "'Playfair Display',serif",
                }}>{c.title}</h3>
                <p style={{ color: '#64748b', lineHeight: 1.9 }}>{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Stats */}
        <Reveal delay={0.1}>
          <div style={{
            display: 'flex', flexWrap: 'wrap', background: '#16161f',
            borderRadius: 20, marginTop: 48, border: '1px solid #1e1e2e', overflow: 'hidden',
          }}>
            {[
              { n: '3+', label: 'Years Experience' },
              { n: '15+', label: 'Projects Built' },
              { n: '2',   label: 'Years in Marketing' },
              { n: '∞',   label: 'Passion for Code' },
            ].map((s, i) => (
              <div key={i} style={{
                flex: '1 1 150px', padding: '32px 20px', textAlign: 'center',
                borderRight: i < 3 ? '1px solid #1e1e2e' : 'none',
              }}>
                <div style={{
                  fontFamily: "'Playfair Display',serif", fontSize: '2.5rem',
                  fontWeight: 900, background: 'linear-gradient(135deg,#7c3aed,#06b6d4)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                }}>{s.n}</div>
                <div style={{ color: '#64748b', fontSize: '0.85rem', marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ── SKILL BAR ── */
function SkillBar({ name, pct, color = '#7c3aed' }) {
  const ref = useRef(null)
  const [vis, setVis] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVis(true); obs.disconnect() }
    }, { threshold: 0.15 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} style={{ marginBottom: 18 }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between',
        marginBottom: 6, color: '#e2e8f0', fontWeight: 600, fontSize: '0.9rem',
      }}>
        <span>{name}</span>
        <span style={{ color: '#64748b' }}>{pct}%</span>
      </div>
      <div style={{ background: '#1e1e2e', borderRadius: 50, height: 8, overflow: 'hidden' }}>
        <div style={{
          height: '100%', borderRadius: 50,
          width: vis ? `${pct}%` : '0%',
          background: `linear-gradient(90deg,${color},#06b6d4)`,
          transition: 'width 1.2s cubic-bezier(.4,0,.2,1)',
          boxShadow: `0 0 10px ${color}88`,
        }} />
      </div>
    </div>
  )
}

const SKILLS = {
  Frontend: [
    { name: 'HTML5 & CSS3', pct: 92 },
    { name: 'JavaScript (ES6+)', pct: 88 },
    { name: 'React.js', pct: 85 },
    { name: 'Tailwind CSS', pct: 90 },
    { name: 'Next.js', pct: 75 },
  ],
  Backend: [
    { name: 'Node.js', pct: 78 },
    { name: 'Express.js', pct: 80 },
    { name: 'MongoDB', pct: 82 },
    { name: 'REST API Design', pct: 85 },
    { name: 'Firebase', pct: 76 },
  ],
  Tools: [
    { name: 'Git & GitHub', pct: 88 },
    { name: 'Digital Marketing', pct: 94 },
    { name: 'SEO & Analytics', pct: 90 },
    { name: 'Figma / UI Design', pct: 72 },
    { name: 'Problem Solving', pct: 85 },
  ],
}

export function Skills() {
  const [tab, setTab] = useState('Frontend')
  return (
    <section id="skills">
      <div className="container">
        <SectionHead eyebrow="What I Know" title="My Skills" />
        <Reveal>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 48 }}>
            {Object.keys(SKILLS).map(t => (
              <button key={t} onClick={() => setTab(t)} style={{
                padding: '10px 28px', borderRadius: 50, fontWeight: 700,
                cursor: 'pointer', border: 'none', fontFamily: "'DM Sans',sans-serif",
                transition: 'all 0.3s',
                background: tab === t ? 'linear-gradient(135deg,#7c3aed,#06b6d4)' : '#16161f',
                color: tab === t ? '#fff' : '#64748b',
                boxShadow: tab === t ? '0 0 20px rgba(124,58,237,0.4)' : 'none',
              }}>{t}</button>
            ))}
          </div>
        </Reveal>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          {SKILLS[tab].map((s, i) => (
            <Reveal key={s.name} delay={i * 0.08}>
              <SkillBar name={s.name} pct={s.pct}
                color={tab === 'Frontend' ? '#7c3aed' : tab === 'Backend' ? '#06b6d4' : '#f59e0b'} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── EDUCATION ── */
export function Education() {
  return (
    <section id="education" style={{ background: '#111118' }}>
      <div className="container">
        <SectionHead eyebrow="Academic Background" title="Education" />
        <div style={{ maxWidth: 760, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 24 }}>
          {[
            { period: '2017 – 2021', icon: '🎓', color: '#7c3aed',
              title: 'B.Sc. in Computer Science & Engineering',
              institute: 'University (Bangladesh)',
              detail: 'Graduated with a degree in CSE. Core studies included Data Structures, Algorithms, Database Systems, Computer Networks, and Software Engineering.' },
            { period: '2024 – 2026', icon: '📚', color: '#06b6d4',
              title: 'Post-Graduation',
              institute: 'Advanced Studies Programme',
              detail: 'Advanced studies building on the CSE foundation, deepening expertise in software development methodologies, research, and emerging technologies.' },
            { period: '2026', icon: '⚡', color: '#f59e0b',
              title: 'Complete Web Development Course',
              institute: 'Programming Hero',
              detail: 'Intensive bootcamp covering HTML, CSS, JavaScript, React.js, Node.js, Express, MongoDB, Firebase, and modern full-stack development practices.' },
          ].map((e, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="card" style={{ padding: 28, display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                <div style={{
                  width: 56, height: 56, borderRadius: 14, flexShrink: 0,
                  background: `${e.color}22`, border: `1px solid ${e.color}44`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26,
                }}>{e.icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, marginBottom: 4 }}>
                    <h3 style={{ color: '#fff', fontWeight: 800, fontSize: '1.05rem' }}>{e.title}</h3>
                    <span style={{
                      background: `${e.color}22`, color: e.color,
                      padding: '3px 12px', borderRadius: 50, fontSize: '0.8rem', fontWeight: 700,
                    }}>{e.period}</span>
                  </div>
                  <p style={{ color: e.color, fontWeight: 600, fontSize: '0.9rem', marginBottom: 8 }}>{e.institute}</p>
                  <p style={{ color: '#64748b', lineHeight: 1.7, fontSize: '0.9rem' }}>{e.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── EXPERIENCE ── */
export function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <SectionHead eyebrow="Work History" title="Experience" />
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <Reveal>
            <div className="card" style={{ padding: 36, position: 'relative', overflow: 'hidden' }}>
              <div style={{
                position: 'absolute', top: 0, left: 0, width: 4, height: '100%',
                background: 'linear-gradient(180deg,#7c3aed,#06b6d4)',
              }} />
              <div style={{ paddingLeft: 20 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, marginBottom: 16 }}>
                  <div>
                    <h3 style={{ color: '#fff', fontWeight: 800, fontSize: '1.3rem', fontFamily: "'Playfair Display',serif" }}>
                      Digital Marketing Expert
                    </h3>
                    <p style={{ color: '#a855f7', fontWeight: 700, marginTop: 4 }}>SEBPO</p>
                  </div>
                  <span style={{
                    background: 'rgba(124,58,237,0.13)', color: '#a855f7',
                    padding: '6px 18px', borderRadius: 50, fontWeight: 700, fontSize: '0.85rem',
                    alignSelf: 'flex-start',
                  }}>2023 – 2024</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {[
                    'Planned and executed multi-channel digital marketing campaigns (SEO, SEM, Social)',
                    'Analysed campaign performance data and improved ROI through A/B testing',
                    'Managed Facebook & Google Ads accounts with monthly budgets',
                    'Collaborated with content teams to produce SEO-optimised material',
                    'Leveraged Google Analytics & Search Console for data-driven insights',
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                      <div style={{
                        width: 8, height: 8, borderRadius: '50%', marginTop: 7, flexShrink: 0,
                        background: 'linear-gradient(135deg,#7c3aed,#06b6d4)',
                        boxShadow: '0 0 8px #7c3aed',
                      }} />
                      <p style={{ color: '#64748b', lineHeight: 1.7, fontSize: '0.95rem' }}>{item}</p>
                    </div>
                  ))}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 20 }}>
                  {['SEO','Google Ads','Facebook Ads','Analytics','Content Strategy','A/B Testing'].map(t => (
                    <span key={t} style={{
                      background: 'rgba(245,158,11,0.13)', color: '#f59e0b',
                      padding: '4px 12px', borderRadius: 50, fontSize: '0.78rem',
                      fontWeight: 700, border: '1px solid rgba(245,158,11,0.27)',
                    }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
