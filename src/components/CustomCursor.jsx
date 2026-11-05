import React, { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop with fine pointer
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let animId;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setIsVisible(true);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    const render = () => {
      // Smooth linear interpolation for trailing ring
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${isHovered ? 1.6 : 1})`;
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Detect hoverable interactive elements
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('floating-pill')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isHovered]);

  return (
    <>
      {/* Small center red dot */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '8px',
          height: '8px',
          backgroundColor: 'var(--color-red)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99999,
          opacity: isVisible ? 1 : 0,
          transform: 'translate(-50%, -50%)',
          transition: 'opacity 0.2s ease, width 0.2s ease, height 0.2s ease',
          willChange: 'transform'
        }}
        className="custom-cursor-dot"
      />

      {/* Trailing smooth magnetic ring */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '38px',
          height: '38px',
          borderRadius: '50%',
          border: '1.5px solid var(--color-red)',
          backgroundColor: isHovered ? 'rgba(245, 34, 34, 0.12)' : 'transparent',
          pointerEvents: 'none',
          zIndex: 99998,
          opacity: isVisible ? 0.75 : 0,
          transition: 'opacity 0.2s ease, background-color 0.2s ease, border-color 0.2s ease',
          willChange: 'transform'
        }}
        className="custom-cursor-ring"
      />

      <style>{`
        @media (pointer: coarse), (max-width: 768px) {
          .custom-cursor-dot, .custom-cursor-ring {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
