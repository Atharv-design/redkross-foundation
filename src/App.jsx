import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TwoPillarsShowcase from './components/TwoPillarsShowcase';
import ProjectsPortfolio from './components/ProjectsPortfolio';
import CreativeBranchesShowcase from './components/CreativeBranchesShowcase';
import HalfCircleTimeline from './components/HalfCircleTimeline';
import CollegePartnershipSection from './components/CollegePartnershipSection';
import OpportunitiesSection from './components/OpportunitiesSection';
import GovernanceTrustSection from './components/GovernanceTrustSection';
import Footer from './components/Footer';
import { initGlobalSplitText } from './utils/initSplitText';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  // Initialize Lenis smooth scroll engine synchronized with GSAP ScrollTrigger
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const updateTicker = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
    };
  }, []);

  // Universal SplitText initialization across all sections on the website
  useEffect(() => {
    const timer = setTimeout(() => {
      initGlobalSplitText();
    }, 250);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#040406] text-gray-100 flex flex-col font-sans selection:bg-[#E57A00]/30 selection:text-orange-200">
      {/* Authentic Initial System Loading Screen */}
      <LoadingScreen />

      {/* Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* 1. HERO SECTION (GSAP ScrollTrigger Frame Scrubber + SplitType Royal Headline) */}
        <Hero />

        {/* 2. TWO PILLARS (Equal weight: Cybersecurity & Technology + Psychology & Human Wellbeing) */}
        <TwoPillarsShowcase />

        {/* 3. VERIFIED PROJECTS PORTFOLIO (Strict status taxonomy) */}
        <ProjectsPortfolio />

        {/* 4. CREATIVE BRANCHES, RADAR, NEURAL HUD & 3D CYBER RANGE ISOLATION TOPOLOGY (Hidden for now as requested) */}
        {/* <CreativeBranchesShowcase /> */}

        {/* 5. ORGANISATIONAL JOURNEY & STICKY NOTEBOOK TIMELINE */}
        <HalfCircleTimeline />

        {/* 6. COLLEGE & UNIVERSITY PARTNERSHIPS (5 Stages & Functional Enquiry Form) */}
        <CollegePartnershipSection />

        {/* 7. VERIFIED OPPORTUNITIES DIRECTORY */}
        <OpportunitiesSection />

        {/* 8. GOVERNANCE, ETHICS, DATA MINIMIZATION & RESPONSIBLE DISCLOSURE */}
        <GovernanceTrustSection />
      </main>

      {/* Institutional Legal Footer */}
      <Footer />
    </div>
  );
}
