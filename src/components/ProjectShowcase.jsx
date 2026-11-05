import React, { useState, useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';
import ProjectCard from './ProjectCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { gsap } from 'gsap';

export default function ProjectShowcase() {
  const { projects } = portfolioData;
  const [currentIndex, setCurrentIndex] = useState(0);
  const showcaseContainerRef = useRef(null);
  const thumbBarRef = useRef(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const hasMovedRef = useRef(false);

  const handleMouseDown = (e) => {
    isDraggingRef.current = true;
    hasMovedRef.current = false;
    startXRef.current = e.pageX - (thumbBarRef.current?.offsetLeft || 0);
    scrollLeftRef.current = thumbBarRef.current?.scrollLeft || 0;
  };

  const handleMouseLeaveOrUp = () => {
    isDraggingRef.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current || !thumbBarRef.current) return;
    const x = e.pageX - thumbBarRef.current.offsetLeft;
    const walk = x - startXRef.current;
    if (Math.abs(walk) > 4) {
      hasMovedRef.current = true;
      e.preventDefault();
      thumbBarRef.current.scrollLeft = scrollLeftRef.current - walk;
    }
  };

  // Auto-scroll the active pill into view so it is never hidden offscreen
  useEffect(() => {
    if (thumbBarRef.current) {
      const activeBtn = thumbBarRef.current.children[currentIndex];
      if (activeBtn) {
        activeBtn.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }
  }, [currentIndex]);

  const switchProject = (newIndex) => {
    if (newIndex === currentIndex) return;

    // Smooth GSAP transition between projects
    if (showcaseContainerRef.current) {
      gsap.to(showcaseContainerRef.current, {
        opacity: 0,
        y: -15,
        scale: 0.98,
        duration: 0.22,
        ease: 'power2.in',
        onComplete: () => {
          setCurrentIndex(newIndex);
          gsap.fromTo(
            showcaseContainerRef.current,
            { opacity: 0, y: 20, scale: 0.98 },
            { opacity: 1, y: 0, scale: 1, duration: 0.35, ease: 'power2.out' }
          );
        }
      });
    } else {
      setCurrentIndex(newIndex);
    }
  };

  const prevProject = () => {
    const nextIdx = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    switchProject(nextIdx);
  };

  const nextProject = () => {
    const nextIdx = currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    switchProject(nextIdx);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prevProject();
      if (e.key === 'ArrowRight') nextProject();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  const currentProject = projects[currentIndex];

  return (
    <section id="work" className="section" style={{ backgroundColor: 'var(--color-warm-white)', overflow: 'hidden' }}>
      <div className="container">
        {/* Section Top Header with Nav Controls */}
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
            <div className="section-label">[03] — SELECTED WORK</div>
            <h2
              style={{
                fontSize: 'clamp(2.8rem, 6vw, 5.5rem)',
                lineHeight: 1.04,
                color: 'var(--color-near-black)'
              }}
            >
              CRAFTED FOR <span style={{ color: 'var(--color-red)' }}>IMPACT.</span>
            </h2>
          </div>

          {/* Previous / Next Arrow Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.9rem',
                fontWeight: 700,
                color: 'var(--color-text-muted)',
                marginRight: '0.5rem'
              }}
            >
              {String(currentIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
            </span>

            <button
              onClick={prevProject}
              aria-label="Previous Project"
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: '#EDE8E1',
                border: '1px solid var(--color-border)',
                color: 'var(--color-near-black)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-red)';
                e.currentTarget.style.color = '#FFF';
                e.currentTarget.style.transform = 'scale(1.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#EDE8E1';
                e.currentTarget.style.color = 'var(--color-near-black)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <ChevronLeft size={22} />
            </button>

            <button
              onClick={nextProject}
              aria-label="Next Project"
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-red)',
                border: '1px solid var(--color-red)',
                color: '#FFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 14px rgba(245, 34, 34, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-red-hover)';
                e.currentTarget.style.transform = 'scale(1.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-red)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        {/* Active Project Slide */}
        <div ref={showcaseContainerRef} style={{ position: 'relative', minHeight: '520px' }}>
          <ProjectCard
            key={currentProject.id}
            project={currentProject}
            index={currentIndex}
            total={projects.length}
          />
        </div>

        {/* Project Thumbnail Navigation Bar */}
        <div
          ref={thumbBarRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeaveOrUp}
          onMouseUp={handleMouseLeaveOrUp}
          onMouseMove={handleMouseMove}
          style={{
            marginTop: '3.5rem',
            paddingTop: '2rem',
            borderTop: '1px solid var(--color-border)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            width: '100%',
            maxWidth: '100%',
            overflowX: 'auto',
            WebkitOverflowScrolling: 'touch',
            touchAction: 'pan-x',
            paddingBottom: '0.75rem',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            cursor: 'grab',
            userSelect: 'none'
          }}
          className="thumbnail-bar"
        >
          {projects.map((proj, idx) => {
            const isSelected = idx === currentIndex;
            return (
              <button
                key={proj.id}
                onClick={() => {
                  if (!hasMovedRef.current) {
                    switchProject(idx);
                  }
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.55rem 1.15rem',
                  borderRadius: '9999px',
                  backgroundColor: isSelected ? 'var(--color-red)' : '#EDE8E1',
                  color: isSelected ? '#FFFFFF' : 'var(--color-near-black)',
                  border: isSelected ? '1px solid var(--color-red)' : '1px solid var(--color-border)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  fontWeight: isSelected ? 700 : 500,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease',
                  flexShrink: 0,
                  touchAction: 'pan-x'
                }}
              >
                <span>{proj.id}</span>
                <span>•</span>
                <span>{proj.shortTitle}</span>
              </button>
            );
          })}
        </div>
      </div>

      <style>{`
        .thumbnail-bar::-webkit-scrollbar {
          display: none;
        }
        .thumbnail-bar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
