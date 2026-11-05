import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function ToolkitSection() {
  const { toolkit } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('all');

  // Specific AR orbiting nodes with anchor pins on Megha (Matching 00:10 in Reference Video!)
  const orbitNodes = [
    { name: 'WordPress', category: 'cms', x: '16%', y: '22%', pinX: '46%', pinY: '38%' },
    { name: 'PHP', category: 'backend', x: '78%', y: '18%', pinX: '54%', pinY: '36%' },
    { name: 'Shopify', category: 'cms', x: '12%', y: '48%', pinX: '44%', pinY: '52%' },
    { name: 'CodeIgniter', category: 'backend', x: '82%', y: '45%', pinX: '56%', pinY: '50%' },
    { name: 'JavaScript', category: 'frontend', x: '18%', y: '74%', pinX: '45%', pinY: '68%' },
    { name: 'MySQL', category: 'backend', x: '80%', y: '72%', pinX: '55%', pinY: '66%' },
    { name: 'Technical SEO', category: 'seo', x: '28%', y: '12%', pinX: '48%', pinY: '30%' },
    { name: 'n8n Automation', category: 'tools', x: '68%', y: '12%', pinX: '52%', pinY: '30%' },
    { name: 'Elementor', category: 'cms', x: '30%', y: '84%', pinX: '47%', pinY: '75%' },
    { name: 'Zapier', category: 'tools', x: '68%', y: '84%', pinX: '53%', pinY: '75%' }
  ];

  return (
    <section id="toolkit" className="section" style={{ backgroundColor: 'var(--color-warm-white)', paddingBottom: 0, overflow: 'hidden' }}>
      <div className="container">
        <div className="section-label">[05] — MY TOOLS. MY WORKFLOW.</div>

        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3rem' }}>
          <h2
            style={{
              fontSize: 'clamp(3rem, 7vw, 6.5rem)',
              lineHeight: 1.06,
              color: 'var(--color-near-black)',
              marginBottom: '1rem',
              letterSpacing: '0.03em',
              display: 'flex',
              flexDirection: 'column',
              gap: 'clamp(0.25rem, 1vw, 0.65rem)'
            }}
          >
            <span>EVERYTHING</span>
            <span style={{ color: 'var(--color-red)' }}>IN ORBIT.</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
            Connected skills, custom frameworks, and automated integrations powering high-performance production websites.
          </p>
        </div>

        {/* AR ORBIT STAGE WITH RED CONNECTOR LINES (Exact match to 00:10 of Reference Video!) */}
        <div
          style={{
            position: 'relative',
            minHeight: '620px',
            backgroundColor: '#F5F2EC',
            borderRadius: '32px',
            border: '1px solid var(--color-border)',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '4rem'
          }}
          className="orbit-stage"
        >
          {/* Subtle concentric orbit rings */}
          <div
            className="orbit-ring"
            style={{
              position: 'absolute',
              width: '580px',
              height: '580px',
              borderRadius: '50%',
              border: '1px dashed rgba(245, 34, 34, 0.22)',
              pointerEvents: 'none'
            }}
          />
          <div
            className="orbit-ring"
            style={{
              position: 'absolute',
              width: '380px',
              height: '380px',
              borderRadius: '50%',
              border: '1px solid rgba(21, 21, 29, 0.08)',
              pointerEvents: 'none'
            }}
          />

          {/* SVG Connecting Lines extending from Megha's body to the tags (Exact video detail!) */}
          <svg
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              pointerEvents: 'none',
              zIndex: 3
            }}
          >
            {orbitNodes.map((node, idx) => (
              <g key={idx}>
                {/* Thin red connector line */}
                <line
                  x1={node.pinX}
                  y1={node.pinY}
                  x2={node.x}
                  y2={node.y}
                  stroke="#F52222"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  opacity="0.65"
                />
                {/* Glowing red pin dot on Megha */}
                <circle cx={node.pinX} cy={node.pinY} r="4" fill="#F52222" />
                <circle cx={node.pinX} cy={node.pinY} r="7" fill="none" stroke="#F52222" strokeWidth="1" opacity="0.5" />
              </g>
            ))}
          </svg>

          {/* Central Portrait of Megha */}
          <div
            className="orbit-portrait"
            style={{
              position: 'relative',
              zIndex: 4,
              width: '320px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              userSelect: 'none'
            }}
          >
            <img
              src={`${import.meta.env.BASE_URL}assets/megha-hero.png`}
              alt="Megha Raikwar Center Orbit"
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '480px',
                objectFit: 'contain',
                filter: 'drop-shadow(0 20px 35px rgba(0,0,0,0.2))'
              }}
              loading="lazy"
            />
          </div>

          {/* Floating Red Pill Tags Positioned Around Megha */}
          {orbitNodes.map((node, index) => {
            const animDuration = 3.5 + (index % 3) * 0.8;
            const animName = index % 2 === 0 ? 'floatSlow' : 'floatReverse';

            return (
              <div
                key={node.name}
                style={{
                  position: 'absolute',
                  left: node.x,
                  top: node.y,
                  transform: 'translate(-50%, -50%)',
                  zIndex: 10,
                  animation: `${animName} ${animDuration}s ease-in-out infinite`
                }}
                className="floating-pill-container"
              >
                <div
                  style={{
                    backgroundColor: 'var(--color-red)',
                    color: '#FFFFFF',
                    padding: '0.55rem 1.25rem',
                    borderRadius: '9999px',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    letterSpacing: '0.04em',
                    boxShadow: '0 8px 24px rgba(245, 34, 34, 0.35)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    userSelect: 'none',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.15)';
                    e.currentTarget.style.backgroundColor = '#15151D';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.backgroundColor = 'var(--color-red)';
                  }}
                >
                  <span style={{ fontSize: '0.65rem' }}>✦</span>
                  <span>{node.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* FULL-WIDTH LOOPING RED TICKER (Exact match to 00:11 of reference video!) */}
      <div
        style={{
          width: '100%',
          backgroundColor: 'var(--color-red)',
          color: '#FFFFFF',
          padding: '1.25rem 0',
          overflow: 'hidden',
          borderTop: '2px solid rgba(0,0,0,0.1)',
          borderBottom: '2px solid rgba(0,0,0,0.1)'
        }}
      >
        <div className="animate-ticker">
          {[...toolkit.tickerItems, ...toolkit.tickerItems, ...toolkit.tickerItems].map((item, idx) => (
            <div
              key={idx}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '1.5rem',
                padding: '0 1.5rem',
                fontFamily: 'var(--font-display)',
                fontSize: '2rem',
                letterSpacing: '0.04em',
                whiteSpace: 'nowrap',
                userSelect: 'none'
              }}
            >
              <span>+ {item}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) {
          .orbit-portrait {
            display: none !important;
          }
          .orbit-ring {
            display: none !important;
          }
          .orbit-stage svg {
            display: none !important;
          }
          .floating-pill-container {
            position: static !important;
            transform: none !important;
            animation: none !important;
            margin: 4px !important;
          }
          .orbit-stage {
            flex-direction: row !important;
            flex-wrap: wrap !important;
            justify-content: center !important;
            align-content: center !important;
            gap: 0.5rem !important;
            padding: 2.25rem 1.25rem !important;
            min-height: auto !important;
          }
        }
      `}</style>
    </section>
  );
}
