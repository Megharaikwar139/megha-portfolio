import React, { useState, useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, Download, ArrowUpRight, Send, CheckCircle2, Copy, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GithubIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function ContactSection() {
  const { personal } = portfolioData;
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const portraitRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'WordPress Website',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Giant Heading Entrance
      gsap.from(headingRef.current, {
        y: 80,
        opacity: 0,
        duration: 1.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%'
        }
      });

      // Layered Portrait Rise
      gsap.from(portraitRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%'
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const projectTypes = [
    'WordPress Website',
    'PHP / CodeIgniter App',
    'Shopify eCommerce Store',
    'Performance & SEO Audit',
    'Website Redesign'
  ];

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter a brief message';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {}

    setSubmitted(true);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      style={{
        backgroundColor: '#F52222',
        color: '#FFFFFF',
        paddingTop: '6rem',
        paddingBottom: '3rem',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background radial glow */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '900px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.12) 0%, rgba(245, 34, 34, 0) 70%)',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Top Label */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.85rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: '#FFFFFF',
            opacity: 0.9,
            marginBottom: '1rem'
          }}
        >
          <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#FFFFFF' }} />
          <span>[06] — GET IN TOUCH</span>
        </div>

        {/* Giant White Heading Layered Composition (Inspired by Reference Video!) */}
        <div
          style={{
            position: 'relative',
            marginBottom: '4rem'
          }}
        >
          <h2
            ref={headingRef}
            style={{
              fontSize: 'clamp(3.5rem, 9.5vw, 9.5rem)',
              lineHeight: 1.08,
              letterSpacing: '0.02em',
              color: '#FFFFFF',
              textTransform: 'uppercase',
              userSelect: 'none',
              maxWidth: '1200px',
              display: 'flex',
              flexDirection: 'column',
              gap: 'clamp(0.5rem, 2vw, 1.5rem)'
            }}
          >
            <span>LET'S BUILD</span>
            <span>SOMETHING.</span>
          </h2>

          {/* Layered Portrait Silhouette on the right side of the heading (matching final video scene) */}
          <div
            ref={portraitRef}
            style={{
              position: 'absolute',
              bottom: '-20px',
              right: '2%',
              width: '260px',
              pointerEvents: 'none',
              zIndex: 3
            }}
            className="contact-portrait"
          >
            <img
              src={`${import.meta.env.BASE_URL}assets/megha-hero.png`}
              alt="Megha Raikwar"
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '380px',
                objectFit: 'contain',
                filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.3))'
              }}
              loading="lazy"
            />
          </div>
        </div>

        {/* Main Contact Grid: Direct Info Left + Interactive Form Right */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3.5rem',
            alignItems: 'flex-start',
            marginBottom: '5rem'
          }}
          className="contact-grid"
        >
          {/* Left Column — Direct Inquiries & Socials */}
          <div>
            <div style={{ marginBottom: '2.5rem' }}>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  opacity: 0.85,
                  textTransform: 'uppercase',
                  marginBottom: '0.75rem',
                  letterSpacing: '0.08em'
                }}
              >
                DIRECT INQUIRIES &amp; EMAIL
              </div>

              {/* Large Clickable Email */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a
                  href={`mailto:${personal.email}`}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.6rem, 3.2vw, 2.6rem)',
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    letterSpacing: '0.02em',
                    lineHeight: 1.1,
                    borderBottom: '2px solid rgba(255,255,255,0.4)',
                    paddingBottom: '4px',
                    transition: 'border-color 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = '#FFFFFF'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'}
                >
                  {personal.email}
                </a>

                <button
                  onClick={copyEmail}
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    border: 'none',
                    color: '#FFF',
                    padding: '0.5rem 0.85rem',
                    borderRadius: '9999px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    transition: 'background 0.2s'
                  }}
                  title="Copy email to clipboard"
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copied ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Quick Links & Resources */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '380px' }}>
              <a
                href={personal.resumeUrl}
                download="Megha_Raikwar_Resume.pdf"
                className="btn-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download size={18} />
                <span>DOWNLOAD OFFICIAL RESUME</span>
              </a>

              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    backgroundColor: 'rgba(0,0,0,0.25)',
                    color: '#FFF',
                    padding: '0.85rem',
                    borderRadius: '9999px',
                    textDecoration: 'none',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    border: '1px solid rgba(255,255,255,0.2)',
                    transition: 'background 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.45)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.25)'}
                >
                  <GithubIcon size={16} />
                  <span>GitHub Profile</span>
                  <ArrowUpRight size={14} />
                </a>

                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    backgroundColor: 'rgba(0,0,0,0.25)',
                    color: '#FFF',
                    padding: '0.85rem',
                    borderRadius: '9999px',
                    textDecoration: 'none',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    border: '1px solid rgba(255,255,255,0.2)',
                    transition: 'background 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.45)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.25)'}
                >
                  <LinkedinIcon size={16} />
                  <span>LinkedIn</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column — Interactive Contact Form */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              color: 'var(--color-near-black)',
              borderRadius: '28px',
              padding: '2.5rem',
              boxShadow: '0 24px 50px rgba(0,0,0,0.25)'
            }}
          >
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(39, 201, 63, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem',
                    color: '#27C93F'
                  }}
                >
                  <CheckCircle2 size={36} />
                </div>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '0.75rem', color: 'var(--color-near-black)' }}>
                  Message Received!
                </h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                  Thank you for reaching out, <strong>{formData.name}</strong>. I will review your project inquiry and reply to <strong>{formData.email}</strong> shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', projectType: 'WordPress Website', message: '' });
                  }}
                  className="btn-primary"
                >
                  <span>Send Another Inquiry</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      marginBottom: '0.5rem',
                      color: 'var(--color-near-black)'
                    }}
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Doe"
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '12px',
                      border: `2px solid ${errors.name ? 'var(--color-red)' : '#E2DDD7'}`,
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.95rem',
                      outline: 'none',
                      transition: 'border-color 0.2s'
                    }}
                  />
                  {errors.name && (
                    <span style={{ color: 'var(--color-red)', fontSize: '0.75rem', marginTop: '4px', display: 'block', fontWeight: 600 }}>
                      {errors.name}
                    </span>
                  )}
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      marginBottom: '0.5rem',
                      color: 'var(--color-near-black)'
                    }}
                  >
                    Your Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '12px',
                      border: `2px solid ${errors.email ? 'var(--color-red)' : '#E2DDD7'}`,
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.95rem',
                      outline: 'none',
                      transition: 'border-color 0.2s'
                    }}
                  />
                  {errors.email && (
                    <span style={{ color: 'var(--color-red)', fontSize: '0.75rem', marginTop: '4px', display: 'block', fontWeight: 600 }}>
                      {errors.email}
                    </span>
                  )}
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      marginBottom: '0.5rem',
                      color: 'var(--color-near-black)'
                    }}
                  >
                    Project Type
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '12px',
                      border: '2px solid #E2DDD7',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.95rem',
                      outline: 'none',
                      backgroundColor: '#FFF',
                      cursor: 'pointer'
                    }}
                  >
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      marginBottom: '0.5rem',
                      color: 'var(--color-near-black)'
                    }}
                  >
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your website goals, timeline, or scope..."
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '12px',
                      border: `2px solid ${errors.message ? 'var(--color-red)' : '#E2DDD7'}`,
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.95rem',
                      outline: 'none',
                      resize: 'vertical',
                      transition: 'border-color 0.2s'
                    }}
                  />
                  {errors.message && (
                    <span style={{ color: 'var(--color-red)', fontSize: '0.75rem', marginTop: '4px', display: 'block', fontWeight: 600 }}>
                      {errors.message}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  style={{
                    width: '100%',
                    padding: '1rem',
                    backgroundColor: 'var(--color-red)',
                    color: '#FFF',
                    border: 'none',
                    borderRadius: '9999px',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    boxShadow: '0 8px 24px rgba(245, 34, 34, 0.35)',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-red-hover)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-red)'}
                >
                  <span>Send Project Inquiry</span>
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Minimal Footer Notice */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.2)',
            paddingTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.78rem',
            opacity: 0.85
          }}
        >
          <div>Designed &amp; developed by Megha Raikwar.</div>
          <div>© {new Date().getFullYear()} ALL RIGHTS RESERVED.</div>
        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .contact-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 768px) {
          .contact-portrait {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
