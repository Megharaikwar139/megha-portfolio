import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Download, Send } from 'lucide-react';

export default function SiteHeader({ activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'work', label: 'Work' },
    { id: 'journey', label: 'Journey' },
    { id: 'toolkit', label: 'Toolkit' },
    { id: 'awards', label: 'Awards' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [mobileMenuOpen]);

  // Close mobile menu when screen resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 900) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    document.body.style.overflow = '';
    document.body.style.touchAction = '';
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const offset = 75;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 50);
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 'var(--header-height)',
          zIndex: 1001,
          display: 'flex',
          alignItems: 'center',
          transition: 'background-color 0.25s ease, border-color 0.25s ease',
          backgroundColor: mobileMenuOpen
            ? 'var(--color-warm-white)'
            : isScrolled
            ? 'rgba(248, 246, 242, 0.94)'
            : 'transparent',
          backdropFilter: isScrolled || mobileMenuOpen ? 'blur(12px)' : 'none',
          borderBottom: (isScrolled || mobileMenuOpen) ? '1px solid var(--color-border)' : '1px solid transparent'
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          {/* Brand Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            style={{
              textDecoration: 'none',
              color: 'var(--color-near-black)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem'
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2rem',
                letterSpacing: '-0.02em',
                lineHeight: 1
              }}
            >
              MEGHA
            </span>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '18px',
                height: '18px',
                backgroundColor: 'var(--color-red)',
                color: '#FFF',
                borderRadius: '50%',
                fontSize: '0.8rem',
                fontWeight: 900
              }}
            >
              +
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '0.4rem',
              backgroundColor: '#EDE8E1',
              padding: '0.35rem',
              borderRadius: '9999px',
              border: '1px solid var(--color-border)'
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  style={{
                    background: isActive ? 'var(--color-red)' : 'transparent',
                    color: isActive ? '#FFFFFF' : 'var(--color-near-black)',
                    border: 'none',
                    padding: '0.45rem 1.15rem',
                    borderRadius: '9999px',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.85rem',
                    fontWeight: isActive ? 700 : 500,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    cursor: 'pointer',
                    transition: 'all 0.25s var(--ease-out-expo)',
                    boxShadow: isActive ? '0 4px 12px rgba(245, 34, 34, 0.35)' : 'none'
                  }}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Header Action CTAs */}
          <div
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '0.75rem'
            }}
            className="desktop-cta"
          >
            <a
              href={`${import.meta.env.BASE_URL}Megha_Raikwar_Resume.pdf`}
              download="Megha_Raikwar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                textDecoration: 'none',
                color: 'var(--color-near-black)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                padding: '0.45rem 0.9rem',
                borderRadius: '9999px',
                border: '1px solid var(--color-border)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-red)';
                e.currentTarget.style.color = 'var(--color-red)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-border)';
                e.currentTarget.style.color = 'var(--color-near-black)';
              }}
            >
              <Download size={14} />
              <span>Resume</span>
            </a>

            <button
              onClick={() => scrollToSection('contact')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                backgroundColor: 'var(--color-red)',
                color: '#FFF',
                border: 'none',
                fontFamily: 'var(--font-body)',
                fontSize: '0.82rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                padding: '0.55rem 1.25rem',
                borderRadius: '9999px',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                boxShadow: '0 4px 14px rgba(245, 34, 34, 0.28)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-red-hover)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-red)'}
            >
              <span>Let's Talk</span>
              <ArrowUpRight size={15} />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              backgroundColor: mobileMenuOpen ? 'var(--color-near-black)' : '#EDE8E1',
              border: mobileMenuOpen ? '1px solid var(--color-near-black)' : '1px solid var(--color-border)',
              color: mobileMenuOpen ? '#FFFFFF' : 'var(--color-near-black)',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            className="mobile-toggle"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 'var(--header-height)',
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1000,
            backgroundColor: 'var(--color-warm-white)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            overflowY: 'auto',
            WebkitOverflowScrolling: 'touch',
            padding: '1.25rem 1.5rem calc(2rem + env(safe-area-inset-bottom, 0px))',
            animation: 'drawerFadeIn 0.25s var(--ease-out-expo)'
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.65rem',
              width: '100%',
              maxWidth: '320px',
              margin: 'auto 0'
            }}
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  style={{
                    width: '100%',
                    background: isActive ? 'var(--color-red)' : 'transparent',
                    color: isActive ? '#FFFFFF' : 'var(--color-near-black)',
                    border: 'none',
                    padding: '0.75rem 1.25rem',
                    borderRadius: '9999px',
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.75rem',
                    letterSpacing: '0.04em',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: isActive ? '0 6px 18px rgba(245, 34, 34, 0.25)' : 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {link.label}
                </button>
              );
            })}

            <div
              style={{
                width: '100%',
                maxWidth: '220px',
                height: '1px',
                backgroundColor: 'var(--color-border)',
                margin: '0.75rem 0'
              }}
            />

            {/* Let's Talk CTA button */}
            <button
              onClick={() => scrollToSection('contact')}
              style={{
                width: '100%',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                padding: '0.8rem',
                borderRadius: '9999px',
                backgroundColor: 'var(--color-red)',
                color: '#FFF',
                border: 'none',
                fontFamily: 'var(--font-body)',
                fontWeight: 700,
                fontSize: '0.88rem',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(245, 34, 34, 0.25)',
                transition: 'all 0.2s ease'
              }}
            >
              <span>Let's Talk</span>
              <ArrowUpRight size={16} />
            </button>

            {/* Download Resume button */}
            <a
              href={`${import.meta.env.BASE_URL}Megha_Raikwar_Resume.pdf`}
              download="Megha_Raikwar_Resume.pdf"
              style={{
                width: '100%',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                padding: '0.8rem',
                borderRadius: '9999px',
                border: '1.5px solid var(--color-near-black)',
                color: 'var(--color-near-black)',
                textDecoration: 'none',
                fontFamily: 'var(--font-body)',
                fontWeight: 700,
                fontSize: '0.88rem',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                transition: 'all 0.2s ease'
              }}
            >
              <Download size={16} />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      )}

      {/* Responsive styles */}
      <style>{`
        @keyframes drawerFadeIn {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          .desktop-cta {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
