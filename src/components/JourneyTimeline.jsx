import React, { useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, GraduationCap, MapPin, CheckCircle2, Sparkles } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function JourneyTimeline() {
  const { journey } = portfolioData;
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const bgYearRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Use GSAP MatchMedia for Desktop Pinned Separation Transition
    const mm = gsap.matchMedia();

    mm.add('(min-width: 961px)', () => {
      // Pinned ScrollTrigger Timeline:
      // As user scrolls down, the line moves across and separates the left side image section,
      // sliding the image out and leaving the right side skills/timeline in full focus!
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=120%',
          pin: true,
          scrub: 1,
          anticipatePin: 1
        }
      });

      // 1. Left side image section slides out to the left
      tl.to(
        leftColRef.current,
        {
          x: '-120%',
          opacity: 0,
          scale: 0.92,
          ease: 'power2.inOut'
        },
        0
      );

      // 2. Giant background year slides out
      tl.to(
        bgYearRef.current,
        {
          x: '-50%',
          opacity: 0.04,
          ease: 'power2.inOut'
        },
        0
      );

      // 4. Right side timeline & skills expand and shift into prime focus
      tl.to(
        rightColRef.current,
        {
          x: '-22vw',
          scale: 1.05,
          ease: 'power2.out'
        },
        0.1
      );

      // 5. Sequence through the milestone cards highlighting each in turn
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        tl.to(
          card,
          {
            scale: 1.03,
            borderColor: '#F52222',
            boxShadow: '0 16px 36px rgba(245, 34, 34, 0.18)',
            duration: 0.25
          },
          0.2 + i * 0.12
        );
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="journey"
      style={{
        backgroundColor: '#F8F6F2',
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        padding: '5rem 0'
      }}
    >
      {/* Giant Outlined Background Year Typography */}
      <div
        ref={bgYearRef}
        style={{
          position: 'absolute',
          top: '6%',
          left: '2%',
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(9rem, 26vw, 24rem)',
          color: 'transparent',
          WebkitTextStroke: '2px rgba(245, 34, 34, 0.14)',
          lineHeight: 0.8,
          userSelect: 'none',
          pointerEvents: 'none',
          zIndex: 1,
          willChange: 'transform, opacity'
        }}
      >
        2026
      </div>

      <div ref={containerRef} className="container" style={{ position: 'relative', zIndex: 3, width: '100%' }}>
        <div className="section-label">[04] — JOURNEY SO FAR</div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            alignItems: 'center'
          }}
          className="journey-grid"
        >
          {/* Left Column — Portrait & Visual (Separates and slides away on scroll) */}
          <div
            ref={leftColRef}
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              willChange: 'transform, opacity'
            }}
          >
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '420px',
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <img
                src={`${import.meta.env.BASE_URL}assets/megha-hero.png`}
                alt="Megha Raikwar Journey"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '520px',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 20px 35px rgba(0,0,0,0.18))',
                  display: 'block'
                }}
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column — Editorial Timeline & Skills (Takes Center Stage on Scroll) */}
          <div
            ref={rightColRef}
            style={{
              willChange: 'transform',
              maxWidth: '680px'
            }}
          >
            <h2
              style={{
                fontSize: 'clamp(2.8rem, 6vw, 5.2rem)',
                lineHeight: 1.06,
                color: 'var(--color-near-black)',
                marginBottom: '1rem',
                letterSpacing: '0.03em',
                display: 'flex',
                flexDirection: 'column',
                gap: 'clamp(0.25rem, 1vw, 0.65rem)'
              }}
            >
              <span>LEARNING</span>
              <span style={{ color: 'var(--color-red)' }}>OUT LOUD.</span>
            </h2>

            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', marginBottom: '2rem', lineHeight: 1.6 }}>
              A continuous track record of shipping production websites, refactoring codebases, and mastering web architectures.
            </p>

            {/* Milestones & Skills List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              {journey.map((item, idx) => {
                const isCurrent = idx === 0;
                return (
                  <div
                    key={item.id}
                    ref={(el) => (cardsRef.current[idx] = el)}
                    style={{
                      backgroundColor: isCurrent ? '#FFFFFF' : '#FAF8F4',
                      border: isCurrent ? '2px solid var(--color-red)' : '1px solid var(--color-border)',
                      borderRadius: '16px',
                      padding: '1.25rem 1.5rem',
                      boxShadow: isCurrent ? '0 10px 24px rgba(245, 34, 34, 0.12)' : '0 4px 12px rgba(0,0,0,0.03)',
                      transition: 'all 0.25s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateX(6px)';
                      e.currentTarget.style.borderColor = 'var(--color-red)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateX(0)';
                      e.currentTarget.style.borderColor = isCurrent ? 'var(--color-red)' : 'var(--color-border)';
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.35rem' }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          color: isCurrent ? 'var(--color-red)' : 'var(--color-text-muted)',
                          textTransform: 'uppercase'
                        }}
                      >
                        {item.period}
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          backgroundColor: isCurrent ? 'var(--color-red)' : '#EDE8E1',
                          color: isCurrent ? '#FFF' : 'var(--color-near-black)',
                          padding: '0.2rem 0.6rem',
                          borderRadius: '9999px'
                        }}
                      >
                        {item.year}
                      </span>
                    </div>

                    <h3
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '1.18rem',
                        fontWeight: 800,
                        letterSpacing: '0.01em',
                        lineHeight: 1.35,
                        color: 'var(--color-near-black)',
                        marginBottom: '0.35rem'
                      }}
                    >
                      {item.role}
                    </h3>
                    <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-muted)', marginBottom: '0.4rem' }}>
                      {item.company} • {item.location}
                    </div>

                    <p style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                      {item.highlights[0]}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 961px) {
          .journey-grid {
            grid-template-columns: 0.85fr 1.15fr !important;
          }
        }
      `}</style>
    </section>
  );
}
