import React, { useEffect, useRef } from 'react';
import { ArrowDownRight, Download, Sparkles, Globe, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const { personal } = portfolioData;
  const sectionRef = useRef(null);
  const headlineRef = useRef(null);
  const labelRef = useRef(null);
  const bioRef = useRef(null);
  const ctaRef = useRef(null);
  const tagsRef = useRef(null);
  const bgTextRef = useRef(null);
  const portraitRef = useRef(null);
  const badge1Ref = useRef(null);
  const badge2Ref = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Entrance Timeline
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from(labelRef.current, {
        y: -25,
        opacity: 0,
        duration: 0.8,
        delay: 0.2
      })
      .from(
        headlineRef.current,
        {
          y: 60,
          opacity: 0,
          duration: 1.1,
          stagger: 0.15,
          ease: 'power4.out'
        },
        '-=0.5'
      )
      .from(
        bioRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.9
        },
        '-=0.7'
      )
      .from(
        ctaRef.current,
        {
          scale: 0.92,
          y: 20,
          opacity: 0,
          duration: 0.7,
          ease: 'back.out(1.5)'
        },
        '-=0.5'
      )
      .from(
        tagsRef.current,
        {
          y: 15,
          opacity: 0,
          duration: 0.6
        },
        '-=0.4'
      )
      .from(
        bgTextRef.current,
        {
          scale: 0.8,
          opacity: 0,
          duration: 1.4,
          ease: 'power3.out'
        },
        0.3
      )
      .from(
        portraitRef.current,
        {
          y: 90,
          opacity: 0,
          scale: 0.94,
          duration: 1.2,
          ease: 'power3.out'
        },
        0.5
      )
      .from(
        [badge1Ref.current, badge2Ref.current],
        {
          scale: 0,
          opacity: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: 'back.out(1.8)'
        },
        '-=0.4'
      );

      // ScrollTrigger Parallax for Giant Background Text
      gsap.to(bgTextRef.current, {
        yPercent: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });

      // Mouse Parallax Effect on Hero Visual
      const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 2;
        const yPos = (clientY / window.innerHeight - 0.5) * 2;

        if (bgTextRef.current) {
          gsap.to(bgTextRef.current, {
            x: xPos * -25,
            y: yPos * -15,
            duration: 1.2,
            ease: 'power2.out'
          });
        }
        if (portraitRef.current) {
          gsap.to(portraitRef.current, {
            x: xPos * 15,
            y: yPos * 10,
            duration: 1.5,
            ease: 'power2.out'
          });
        }
      };

      window.addEventListener('mousemove', handleMouseMove);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToWork = () => {
    const el = document.getElementById('work');
    if (el) {
      const offset = 80;
      const elPosition = el.getBoundingClientRect().top;
      const offsetPosition = elPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 'calc(var(--header-height) + 2rem)',
        paddingBottom: '4rem',
        overflow: 'hidden',
        borderBottom: '1px solid var(--color-border)'
      }}
    >
      {/* Background subtle grid pattern */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(21, 21, 29, 0.06) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            alignItems: 'center'
          }}
          className="hero-grid"
        >
          {/* Left Column — Editorial Typography & CTAs */}
          <div style={{ maxWidth: '680px' }}>
            {/* Small Label */}
            <div ref={labelRef} className="section-label">
              [01] — HELLO, I'M MEGHA RAIKWAR
            </div>

            {/* Giant Main Headline */}
            <h1
              ref={headlineRef}
              style={{
                fontSize: 'clamp(3.8rem, 8.5vw, 8.2rem)',
                letterSpacing: '0.02em',
                lineHeight: 1.05,
                color: 'var(--color-near-black)',
                marginBottom: '1.75rem',
                wordBreak: 'break-word',
                display: 'flex',
                flexDirection: 'column',
                gap: 'clamp(0.35rem, 1.2vw, 0.85rem)'
              }}
            >
              <span>SENIOR WEBSITE</span>
              <span style={{ color: 'var(--color-red)' }}>DEVELOPER.</span>
            </h1>

            {/* Supporting Bio */}
            <p
              ref={bioRef}
              style={{
                fontSize: 'clamp(1.05rem, 1.4vw, 1.25rem)',
                color: 'var(--color-text-muted)',
                lineHeight: 1.6,
                marginBottom: '2.5rem',
                maxWidth: '560px'
              }}
            >
              {personal.shortBio}
            </p>

            {/* Action Buttons */}
            <div
              ref={ctaRef}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                alignItems: 'center',
                marginBottom: '3rem'
              }}
            >
              <button
                onClick={scrollToWork}
                className="btn-primary"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowDownRight size={18} />
              </button>

              <a
                href={personal.resumeUrl}
                download="Megha_Raikwar_Resume.pdf"
                className="btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download size={18} />
                <span>DOWNLOAD RESUME</span>
              </a>
            </div>

            {/* Live Fact Pills */}
            <div
              ref={tagsRef}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.6rem',
                alignItems: 'center',
                borderTop: '1px solid var(--color-border)',
                paddingTop: '1.75rem'
              }}
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  backgroundColor: '#EDE8E1',
                  padding: '0.4rem 0.85rem',
                  borderRadius: '9999px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  color: 'var(--color-near-black)'
                }}
              >
                <Sparkles size={13} color="var(--color-red)" />
                <span>WordPress &amp; PHP</span>
              </div>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  backgroundColor: '#EDE8E1',
                  padding: '0.4rem 0.85rem',
                  borderRadius: '9999px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  color: 'var(--color-near-black)'
                }}
              >
                <Globe size={13} color="var(--color-red)" />
                <span>Shopify &amp; eCommerce</span>
              </div>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  backgroundColor: '#EDE8E1',
                  padding: '0.4rem 0.85rem',
                  borderRadius: '9999px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  color: 'var(--color-near-black)'
                }}
              >
                <ShieldCheck size={13} color="var(--color-red)" />
                <span>Bhopal, India</span>
              </div>
            </div>
          </div>

          {/* Right Column — Giant Background "MEGHA" Typography + Layered Portrait */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
              minHeight: '520px',
              userSelect: 'none'
            }}
            className="hero-visual"
          >
            {/* Giant Background Typography "MEGHA" with parallax */}
            <div
              ref={bgTextRef}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(9rem, 23vw, 22rem)',
                color: 'var(--color-red)',
                lineHeight: 0.8,
                letterSpacing: '-0.03em',
                zIndex: 1,
                opacity: 0.95,
                whiteSpace: 'nowrap',
                pointerEvents: 'none',
                willChange: 'transform'
              }}
            >
              MEGHA
            </div>

            {/* Glowing Backdrop Ring */}
            <div
              style={{
                position: 'absolute',
                top: '40%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '380px',
                height: '380px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(245, 34, 34, 0.15) 0%, rgba(245, 34, 34, 0) 70%)',
                zIndex: 2,
                pointerEvents: 'none'
              }}
            />

            {/* Cutout Portrait Image of Megha */}
            <div
              ref={portraitRef}
              style={{
                position: 'relative',
                zIndex: 3,
                width: '100%',
                maxWidth: '460px',
                display: 'flex',
                justifyContent: 'center',
                willChange: 'transform'
              }}
            >
              <img
                src={`${import.meta.env.BASE_URL}assets/megha-hero.png`}
                alt="Megha Raikwar — Senior Website Developer"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '620px',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.18))',
                  display: 'block'
                }}
                loading="eager"
              />
            </div>

            {/* Floating Badge 1: Current Senior Role */}
            <div
              ref={badge1Ref}
              style={{
                position: 'absolute',
                bottom: '12%',
                left: '5%',
                zIndex: 4,
                backgroundColor: 'var(--color-near-black)',
                color: '#FFF',
                padding: '0.75rem 1.25rem',
                borderRadius: '12px',
                boxShadow: '0 12px 28px rgba(0,0,0,0.25)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                border: '1px solid rgba(255,255,255,0.15)',
                animation: 'floatSlow 4s ease-in-out infinite'
              }}
              className="hero-badge"
            >
              <div
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-red)',
                  boxShadow: '0 0 10px var(--color-red)'
                }}
              />
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#A5A5AF', textTransform: 'uppercase' }}>
                  Current Position
                </div>
                <div style={{ fontWeight: 700, fontSize: '0.85rem' }}>
                  Senior Dev @ Wecrescent
                </div>
              </div>
            </div>

            {/* Floating Badge 2: B.Tech CGPA */}
            <div
              ref={badge2Ref}
              style={{
                position: 'absolute',
                top: '15%',
                right: '4%',
                zIndex: 4,
                backgroundColor: 'var(--color-warm-white)',
                color: 'var(--color-near-black)',
                padding: '0.75rem 1.25rem',
                borderRadius: '12px',
                boxShadow: '0 12px 28px rgba(0,0,0,0.12)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                border: '2px solid var(--color-red)',
                animation: 'floatReverse 4.5s ease-in-out infinite'
              }}
              className="hero-badge"
            >
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.8rem',
                  lineHeight: 1,
                  color: 'var(--color-red)'
                }}
              >
                8.32
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>
                  B.Tech CGPA
                </div>
                <div style={{ fontWeight: 700, fontSize: '0.8rem' }}>
                  RGPV Graduate
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
        @media (max-width: 640px) {
          .hero-badge {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
