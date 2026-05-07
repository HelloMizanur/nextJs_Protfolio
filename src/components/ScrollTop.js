'use client'
export default function ScrollTop() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
      style={{
        position: 'fixed', bottom: 28, right: 28, width: 48, height: 48,
        borderRadius: '50%', background: 'linear-gradient(135deg,#7c3aed,#06b6d4)',
        border: 'none', color: '#fff', fontSize: 20, cursor: 'pointer',
        zIndex: 999, boxShadow: '0 0 20px rgba(124,58,237,0.5)',
        transition: 'all 0.3s',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-3px) scale(1.1)'
        e.currentTarget.style.boxShadow = '0 0 30px rgba(124,58,237,0.8)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = ''
        e.currentTarget.style.boxShadow = '0 0 20px rgba(124,58,237,0.5)'
      }}
    >↑</button>
  )
}
