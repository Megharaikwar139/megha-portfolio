import React, { useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const { personal } = portfolioData;
  const sectionRef = useRef(null);
  const portraitCardRef = useRef(null);
  const textContentRef = useRef(null);
  const statsRef = useRef([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const mm = gsap.matchMedia();

    // Desktop: Full choreographed entrance animations
    mm.add('(min-width: 769px)', () => {
      // Portrait Entrance
      gsap.from(portraitCardRef.current, {
        x: -60,
        opacity: 0,
        rotateY: 10,
        duration: 1.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%'
        }
      });

      // Text Content Entrance (Heading, intro paragraph, extended bio - excluding stats)
      const textNodes = Array.from(textContentRef.current?.children || []).filter(
        (el) => !el.classList.contains('stats-grid')
      );
      if (textNodes.length > 0) {
        gsap.from(textNodes, {
          y: 40,
          opacity: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%'
          }
        });
      }

      // Stat Cards Grid Entrance — all cards appear together with once: true so no card ever gets stuck faded
      gsap.from('.stats-grid', {
        y: 25,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.stats-grid',
          start: 'top 92%',
          once: true
        }
      });
    });

    // Mobile: Elements stay 100% visible immediately so no blank spaces or invisible content occur
    mm.add('(max-width: 768px)', () => {
      if (portraitCardRef.current) {
        gsap.from(portraitCardRef.current, {
          opacity: 0,
          y: 25,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            once: true
          }
        });
      }
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="section" style={{ backgroundColor: '#F5F2EB' }}>
      <div className="container">
        <div className="section-label">[02] — ABOUT ME</div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '4rem'
          }}
          className="about-grid"
        >
          {/* Left Column — Sticky Editorial Portrait Card */}
          <div className="about-sticky-col">
            <div
              className="about-sticky-wrapper"
              style={{
                position: 'sticky',
                top: 'calc(var(--header-height) + 1.5rem)',
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <div
                ref={portraitCardRef}
                style={{
                  position: 'relative',
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  perspective: '1000px'
                }}
              >
                {/* Framed Background Card */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: '440px',
                    backgroundColor: '#EAE5DC',
                    borderRadius: '24px',
                    padding: '2rem 1.5rem 0',
                    border: '1px solid var(--color-border)',
                    overflow: 'hidden',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.06)',
                    transition: 'transform 0.4s ease, box-shadow 0.4s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-6px) rotateX(2deg) rotateY(-2deg)';
                    e.currentTarget.style.boxShadow = '0 30px 60px rgba(245, 34, 34, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) rotateX(0deg) rotateY(0deg)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.06)';
                  }}
                >
                  {/* Corner Watermark */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '1.25rem',
                      left: '1.5rem',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: 'var(--color-red)',
                      letterSpacing: '0.1em'
                    }}
                  >
                    MEGHA RAIKWAR // 2026
                  </div>

                  {/* Cutout Portrait */}
                  <img
                    src={`${import.meta.env.BASE_URL}assets/megha-about.png`}
                    alt="Megha Raikwar posing"
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxHeight: '520px',
                      objectFit: 'contain',
                      display: 'block',
                      margin: '0 auto',
                      filter: 'drop-shadow(0 15px 25px rgba(0,0,0,0.15))'
                    }}
                    loading="lazy"
                  />

                  {/* Bottom Card Strip */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      backgroundColor: 'rgba(21, 21, 29, 0.92)',
                      backdropFilter: 'blur(8px)',
                      padding: '1rem 1.5rem',
                      color: '#FFF',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.85rem' }}>Megha Raikwar</div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#B3B3BD' }}>
                        Senior Website Developer
                      </div>
                    </div>
                    <div
                      style={{
                        backgroundColor: 'var(--color-red)',
                        color: '#FFF',
                        padding: '0.25rem 0.65rem',
                        borderRadius: '9999px',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.7rem',
                        fontWeight: 700
                      }}
                    >
                      BHOPAL, IN
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column — Biography & Factual Metrics */}
          <div ref={textContentRef}>
            <h2
              style={{
                fontSize: 'clamp(2.8rem, 5.5vw, 5rem)',
                lineHeight: 1.04,
                color: 'var(--color-near-black)',
                marginBottom: '1.75rem'
              }}
            >
              I BUILD FOR <span style={{ color: 'var(--color-red)' }}>THE WEB.</span>
            </h2>

            <p
              style={{
                fontSize: '1.18rem',
                fontWeight: 600,
                color: 'var(--color-near-black)',
                lineHeight: 1.6,
                marginBottom: '1.25rem'
              }}
            >
              Passionate developer specializing in{' '}
              <span style={{ color: 'var(--color-red)', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
                WordPress customization
              </span>
              , robust <span style={{ color: 'var(--color-red)' }}>PHP &amp; CodeIgniter</span> backends, and{' '}
              <span style={{ color: 'var(--color-red)' }}>high-converting Shopify</span> storefronts.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--color-text-muted)', fontSize: '0.98rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              {personal.extendedBio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Factual Statistics Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1.25rem'
              }}
              className="stats-grid"
            >
              {personal.stats.map((stat, idx) => (
                <div
                  key={idx}
                  ref={(el) => (statsRef.current[idx] = el)}
                  style={{
                    backgroundColor: 'var(--color-warm-white)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '16px',
                    padding: '1.5rem',
                    opacity: 1,
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-red)';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-border)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(2.4rem, 4vw, 3.4rem)',
                      color: 'var(--color-red)',
                      lineHeight: 1,
                      marginBottom: '0.35rem'
                    }}
                  >
                    {stat.value}
                  </div>
                  <div style={{ fontWeight: 700, fontSize: '0.92rem', color: 'var(--color-near-black)', marginBottom: '0.2rem' }}>
                    {stat.label}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', lineHeight: 1.4 }}>
                    {stat.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .about-grid {
            grid-template-columns: 0.9fr 1.1fr !important;
            align-items: stretch !important;
            gap: 4rem !important;
          }
          .about-sticky-col {
            height: 100% !important;
            position: relative !important;
          }
          .about-sticky-wrapper {
            position: sticky !important;
            top: calc(var(--header-height) + 1.5rem) !important;
            z-index: 5;
          }
        }
        @media (max-width: 959px) {
          .about-sticky-wrapper {
            position: relative !important;
            top: auto !important;
          }
          .about-grid {
            gap: 2rem !important;
          }
        }
        @media (max-width: 520px) {
          .stats-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
