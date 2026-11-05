import React, { useEffect, useRef, useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Sparkles, Trophy, Award, GraduationCap, Briefcase, Star, CheckCircle } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AwardsSection() {
  const { achievements, journey } = portfolioData;
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const [isPaused, setIsPaused] = useState(false);
  const [rotationAngle, setRotationAngle] = useState(0);

  // Top 4 stats cards (matching 00:13 in reference video)
  const topStats = [
    { value: '05', label: 'INDUSTRY ROLES', sub: 'Senior Developer Progression', variant: 'red' },
    { value: '8.32', label: 'B.TECH CGPA', sub: 'Bansal College, RGPV', variant: 'dark' },
    { value: '11+', label: 'LIVE WEBSITES', sub: 'WordPress, PHP & Shopify', variant: 'red' },
    { value: '#1', label: 'STATE WINNER', sub: 'State-Level Tech Champion', variant: 'dark' }
  ];

  // 3D Carousel credentials items
  const credentials = [
    { id: 'c1', title: 'Senior Website Developer', org: 'Wecrescent (RKDF Group)', tag: '2026 - Present', icon: Briefcase },
    { id: 'c2', title: 'Associate WordPress Dev', org: 'AISECT Group (Elementor & n8n)', tag: '2025 - 2026', icon: Briefcase },
    { id: 'c3', title: 'Full Stack PHP Developer', org: 'Namami Software (CodeIgniter)', tag: '2024 - 2025', icon: Briefcase },
    { id: 'c4', title: 'Freelance WordPress Dev', org: 'Custom Themes & APIs', tag: '2024 - Present', icon: Star },
    { id: 'c5', title: 'B.Tech Graduate — 8.32 CGPA', org: 'Bansal College of Engg (RGPV)', tag: '2020 - 2024', icon: GraduationCap },
    { id: 'c6', title: 'State-Level Winner', org: 'Recognized Technical Champion', tag: 'Achievement', icon: Trophy },
    { id: 'c7', title: 'College Event Organizer', org: 'Campus Technical Leadership', tag: 'Leadership', icon: Award },
    { id: 'c8', title: 'Web Developer Intern', org: 'Toflymedia Digital Agency', tag: '2024', icon: Briefcase }
  ];

  // Continuous 3D rotation loop
  useEffect(() => {
    let animId;
    let angle = 0;

    const rotate = () => {
      if (!isPaused) {
        angle = (angle + 0.35) % 360;
        setRotationAngle(angle);
      }
      animId = requestAnimationFrame(rotate);
    };

    animId = requestAnimationFrame(rotate);
    return () => cancelAnimationFrame(animId);
  }, [isPaused]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%'
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const totalCards = credentials.length;
  const radius = 320; // 3D cylinder radius in px

  return (
    <section ref={sectionRef} id="awards" className="section" style={{ backgroundColor: '#F2EFE9', overflow: 'hidden' }}>
      <div className="container">
        <div className="section-label">[06] — PROOF OF WORK</div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '3rem',
            gap: '1.5rem'
          }}
        >
          <div>
            <h2
              style={{
                fontSize: 'clamp(2.8rem, 6vw, 5.5rem)',
                lineHeight: 1.04,
                color: 'var(--color-near-black)'
              }}
            >
              PROUD <span style={{ color: 'var(--color-red)' }}>MOMENTS.</span>
            </h2>
          </div>
          <p
            style={{
              fontSize: '1.05rem',
              color: 'var(--color-text-muted)',
              maxWidth: '460px',
              lineHeight: 1.6
            }}
          >
            Real verified qualifications, career milestones, and honors from university and industry.
          </p>
        </div>

        {/* Top 4 Stats Cards (Exact match to 00:13 of reference video) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.25rem',
            marginBottom: '4.5rem'
          }}
        >
          {topStats.map((stat, idx) => {
            const isRed = stat.variant === 'red';
            return (
              <div
                key={idx}
                ref={(el) => (cardsRef.current[idx] = el)}
                style={{
                  backgroundColor: isRed ? 'var(--color-red)' : 'var(--color-near-black)',
                  color: '#FFFFFF',
                  borderRadius: '20px',
                  padding: '1.75rem',
                  boxShadow: isRed ? '0 12px 28px rgba(245, 34, 34, 0.25)' : '0 12px 28px rgba(0,0,0,0.15)',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-6px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(3.2rem, 5vw, 4.4rem)',
                    lineHeight: 0.9,
                    color: '#FFFFFF',
                    marginBottom: '0.6rem',
                    letterSpacing: '-0.02em'
                  }}
                >
                  {stat.value}
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.08em', marginBottom: '0.25rem' }}>
                  {stat.label}
                </div>
                <div style={{ fontSize: '0.8rem', opacity: 0.8 }}>
                  {stat.sub}
                </div>
              </div>
            );
          })}
        </div>

        {/* SIGNATURE 3D ROTATING CYLINDER / CAROUSEL (From 00:13 of Reference Video!) */}
        <div
          style={{
            position: 'relative',
            backgroundColor: '#EBE6DE',
            borderRadius: '32px',
            border: '1px solid var(--color-border)',
            padding: '3rem 2rem 4rem',
            overflow: 'hidden'
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                fontWeight: 700,
                color: 'var(--color-red)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase'
              }}
            >
              [ INTERACTIVE 3D CREDENTIAL CYLINDER — HOVER TO PAUSE ]
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              minHeight: '360px'
            }}
          >
            {/* 3D Scene Viewport */}
            <div
              style={{
                perspective: '1200px',
                width: '100%',
                maxWidth: '750px',
                height: '240px',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Rotating 3D Ring */}
              <div
                style={{
                  width: '280px',
                  height: '140px',
                  position: 'relative',
                  transformStyle: 'preserve-3d',
                  transform: `rotateY(${rotationAngle}deg)`,
                  willChange: 'transform'
                }}
              >
                {credentials.map((cred, i) => {
                  const cardAngle = (360 / totalCards) * i;
                  const Icon = cred.icon;

                  return (
                    <div
                      key={cred.id}
                      style={{
                        position: 'absolute',
                        width: '260px',
                        height: '140px',
                        left: '10px',
                        top: 0,
                        backgroundColor: i % 2 === 0 ? 'var(--color-red)' : '#FFFFFF',
                        color: i % 2 === 0 ? '#FFFFFF' : 'var(--color-near-black)',
                        border: i % 2 === 0 ? 'none' : '2px solid var(--color-border)',
                        borderRadius: '16px',
                        padding: '1.25rem',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
                        transform: `rotateY(${cardAngle}deg) translateZ(${radius}px)`,
                        backfaceVisibility: 'hidden',
                        userSelect: 'none',
                        cursor: 'grab'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.68rem',
                            fontWeight: 700,
                            padding: '0.2rem 0.5rem',
                            borderRadius: '9999px',
                            backgroundColor: i % 2 === 0 ? 'rgba(255,255,255,0.2)' : 'rgba(245,34,34,0.1)',
                            color: i % 2 === 0 ? '#FFF' : 'var(--color-red)'
                          }}
                        >
                          {cred.tag}
                        </span>
                        <Icon size={16} />
                      </div>

                      <div>
                        <div style={{ fontWeight: 800, fontSize: '0.92rem', lineHeight: 1.2, marginBottom: '2px' }}>
                          {cred.title}
                        </div>
                        <div style={{ fontSize: '0.75rem', opacity: 0.85 }}>
                          {cred.org}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Standing Cutout Portrait on the Right (Exactly as in 00:13 of reference video!) */}
            <div
              style={{
                position: 'absolute',
                right: '0%',
                bottom: '-20px',
                width: '180px',
                zIndex: 10,
                pointerEvents: 'none'
              }}
              className="awards-portrait"
            >
              <img
                src={`${import.meta.env.BASE_URL}assets/megha-hero.png`}
                alt="Megha Raikwar presenting credentials"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '380px',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 15px 25px rgba(0,0,0,0.25))'
                }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) {
          .awards-portrait {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
