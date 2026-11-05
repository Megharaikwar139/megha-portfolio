import React, { useState, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CustomCursor from './components/CustomCursor';
import IntroLoader from './components/IntroLoader';
import SiteHeader from './components/SiteHeader';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectShowcase from './components/ProjectShowcase';
import JourneyTimeline from './components/JourneyTimeline';
import ToolkitSection from './components/ToolkitSection';
import AwardsSection from './components/AwardsSection';
import ContactSection from './components/ContactSection';

export default function App() {
  const [introFinished, setIntroFinished] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Track active section on scroll
  useEffect(() => {
    const sections = ['hero', 'about', 'work', 'journey', 'toolkit', 'awards', 'contact'];

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const headerOffset = 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const id = sections[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - headerOffset;
          if (scrollY >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // When intro loader completes, refresh ScrollTrigger to recalculate exact section heights
  useEffect(() => {
    if (introFinished) {
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    }
  }, [introFinished]);

  return (
    <div className="portfolio-app">
      {/* Sleek magnetic trailing cursor for desktop */}
      <CustomCursor />

      {/* Short skippable red numeric intro loader */}
      {!introFinished && <IntroLoader onComplete={() => setIntroFinished(true)} />}

      {/* Sticky Navigation Header */}
      <SiteHeader activeSection={activeSection} />

      {/* Main Content Sections */}
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectShowcase />
        <JourneyTimeline />
        <ToolkitSection />
        <AwardsSection />
        <ContactSection />
      </main>
    </div>
  );
}
