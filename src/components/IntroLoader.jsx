import React, { useEffect, useState } from 'react';

export default function IntroLoader({ onComplete }) {
  const [count, setCount] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Check reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      onComplete?.();
      return;
    }

    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(() => {
              onComplete?.();
            }, 600);
          }, 200);
          return 100;
        }
        // Accelerating counter
        const step = prev < 50 ? 5 : prev < 85 ? 7 : 4;
        return Math.min(prev + step, 100);
      });
    }, 35);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        clearInterval(interval);
        setIsExiting(true);
        setTimeout(() => onComplete?.(), 300);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearInterval(interval);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setIsExiting(true);
    setTimeout(() => onComplete?.(), 300);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: '#F52222',
        color: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '2.5rem',
        opacity: isExiting ? 0 : 1,
        transform: isExiting ? 'translateY(-100%)' : 'translateY(0)',
        transition: 'opacity 0.6s cubic-bezier(0.85, 0, 0.15, 1), transform 0.6s cubic-bezier(0.85, 0, 0.15, 1)',
        pointerEvents: isExiting ? 'none' : 'auto'
      }}
    >
      {/* Top Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
        <span>MEGHA RAIKWAR</span>
        <span>SENIOR WEBSITE DEVELOPER</span>
        <button
          onClick={handleSkip}
          style={{
            background: 'none',
            border: '1px solid rgba(255,255,255,0.4)',
            color: '#FFFFFF',
            borderRadius: '9999px',
            padding: '0.35rem 1rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            cursor: 'pointer',
            transition: 'background 0.2s'
          }}
          onMouseEnter={(e) => e.target.style.background = 'rgba(255,255,255,0.2)'}
          onMouseLeave={(e) => e.target.style.background = 'none'}
        >
          SKIP [ESC]
        </button>
      </div>

      {/* Center Giant Counter */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(7rem, 22vw, 18rem)',
            lineHeight: 0.85,
            letterSpacing: '-0.02em',
            userSelect: 'none',
            display: 'flex',
            alignItems: 'flex-start'
          }}
        >
          <span>{String(count).padStart(2, '0')}</span>
          <span style={{ fontSize: 'clamp(2rem, 6vw, 5rem)', marginTop: '1rem', opacity: 0.8 }}>%</span>
        </div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', letterSpacing: '0.25em', opacity: 0.85, marginTop: '1.5rem', textTransform: 'uppercase' }}>
          LOADING CREATIVE PORTFOLIO • 2026
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', letterSpacing: '0.12em', opacity: 0.8, textTransform: 'uppercase' }}>
        <span>BHOPAL, MP, INDIA</span>
        <span>WORDPRESS • PHP • SHOPIFY • FRONTEND</span>
        <span>[ 01 / 06 ]</span>
      </div>
    </div>
  );
}
