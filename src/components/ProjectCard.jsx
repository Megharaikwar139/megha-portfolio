import React from 'react';
import { ExternalLink, ArrowRight, Check, Monitor, Gauge } from 'lucide-react';

export default function ProjectCard({ project, index, total }) {
  // Score indicator (e.g. 98% for performance / responsive standards)
  const scores = ['98%', '95%', '99%', '96%', '97%', '94%', '98%', '100%', '99%', '95%', '96%'];
  const score = scores[index % scores.length];

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '3rem',
        alignItems: 'center',
        width: '100%'
      }}
      className="project-slide-grid"
    >
      {/* Left Column — Project Information & Links */}
      <div>
        {/* Project Header Number & Category */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '1rem'
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '1.75rem',
              fontWeight: 800,
              color: 'var(--color-red)'
            }}
          >
            {project.id} <span style={{ opacity: 0.4, fontSize: '1.1rem' }}>/ {String(total).padStart(2, '0')}</span>
          </span>
          <span
            style={{
              backgroundColor: '#EDE8E1',
              color: 'var(--color-near-black)',
              padding: '0.3rem 0.85rem',
              borderRadius: '9999px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}
          >
            {project.category}
          </span>
        </div>

        {/* Giant Project Title */}
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
            letterSpacing: '0.03em',
            lineHeight: 1.06,
            color: 'var(--color-near-black)',
            marginBottom: '1.25rem'
          }}
        >
          {project.title}
        </h3>

        {/* Project Summary */}
        <p
          style={{
            fontSize: '1.05rem',
            color: 'var(--color-text-muted)',
            lineHeight: 1.6,
            marginBottom: '1.75rem',
            maxWidth: '540px'
          }}
        >
          {project.summary}
        </p>

        {/* Verified Feature Highlights */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '2rem' }}>
          {project.features.map((feat, fIdx) => (
            <div
              key={fIdx}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.65rem',
                fontSize: '0.88rem',
                color: 'var(--color-near-black)'
              }}
            >
              <div
                style={{
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(245, 34, 34, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: '2px'
                }}
              >
                <Check size={11} color="var(--color-red)" strokeWidth={3} />
              </div>
              <span>{feat}</span>
            </div>
          ))}
        </div>

        {/* Tech Stack Chips */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2.5rem' }}>
          {project.tags.map((tag, tIdx) => (
            <span
              key={tIdx}
              style={{
                backgroundColor: 'var(--color-warm-white)',
                border: '1px solid var(--color-border)',
                color: 'var(--color-near-black)',
                padding: '0.35rem 0.75rem',
                borderRadius: '8px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                fontWeight: 600
              }}
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Call to Action Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ textDecoration: 'none' }}
          >
            <span>VISIT LIVE WEBSITE</span>
            <ExternalLink size={18} />
          </a>
        </div>
      </div>

      {/* Right Column — Signature Red Project Card (Exact Match to 00:05 of Reference Video!) */}
      <div
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '480px'
        }}
      >
        {/* Main Red Project Presentation Card */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '540px',
            backgroundColor: '#F52222',
            borderRadius: '28px',
            padding: '2rem 1.75rem',
            boxShadow: '0 24px 50px rgba(245, 34, 34, 0.28)',
            color: '#FFF',
            overflow: 'hidden'
          }}
        >
          {/* Card Top: Circular Gauge Metric (Matching the 82% gauge in reference video!) */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '1.5rem',
              backgroundColor: 'rgba(0,0,0,0.18)',
              padding: '1rem 1.25rem',
              borderRadius: '16px'
            }}
          >
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', textTransform: 'uppercase', opacity: 0.85, letterSpacing: '0.08em' }}>
                OPTIMIZATION SCORE
              </div>
              <div style={{ fontWeight: 800, fontSize: '1.25rem' }}>
                {project.badgeText}
              </div>
            </div>

            {/* Circular Gauge Badge */}
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                border: '3px solid #FFFFFF',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(255,255,255,0.15)',
                boxShadow: '0 0 14px rgba(255,255,255,0.3)'
              }}
            >
              <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 900, fontSize: '0.9rem', lineHeight: 1 }}>{score}</span>
              <span style={{ fontSize: '0.55rem', textTransform: 'uppercase', opacity: 0.8 }}>SCORE</span>
            </div>
          </div>

          {/* Browser Preview Window inside Red Card */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 12px 28px rgba(0,0,0,0.22)',
              color: 'var(--color-near-black)',
              padding: '1.25rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '1rem', borderBottom: '1px solid #ECE7E0', paddingBottom: '0.5rem' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#FF5F56' }} />
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#FFBD2E' }} />
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#27C93F' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#888', marginLeft: '6px' }}>
                {project.url}
              </span>
            </div>

            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', lineHeight: 1, marginBottom: '0.5rem' }}>
              {project.shortTitle}
            </div>

            <p style={{ fontSize: '0.82rem', color: '#666', lineHeight: 1.5, marginBottom: '1.25rem' }}>
              {project.summary.slice(0, 110)}...
            </p>

            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                backgroundColor: 'var(--color-near-black)',
                color: '#FFF',
                padding: '0.5rem 1rem',
                borderRadius: '9999px',
                fontSize: '0.78rem',
                fontWeight: 700,
                textDecoration: 'none'
              }}
            >
              <span>Explore Live</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>

        {/* Standing Portrait Cutout (Exactly as in Reference Video at 00:05!) */}
        <div
          style={{
            position: 'absolute',
            bottom: '-15px',
            right: '-25px',
            zIndex: 10,
            width: '190px',
            pointerEvents: 'none'
          }}
          className="project-portrait"
        >
          <img
            src={`${import.meta.env.BASE_URL}assets/megha-hero.png`}
            alt="Megha Raikwar presenting project"
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: '440px',
              objectFit: 'contain',
              filter: 'drop-shadow(0 15px 25px rgba(0,0,0,0.35))'
            }}
          />
        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .project-slide-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .project-portrait {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
