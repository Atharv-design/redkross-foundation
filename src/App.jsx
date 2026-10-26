import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import TwoPillarsShowcase from './components/TwoPillarsShowcase';
import SelectedResearchSection from './components/SelectedResearchSection';
import HalfCircleTimeline from './components/HalfCircleTimeline';
import TeamSection from './components/TeamSection';
import CollegePartnershipSection from './components/CollegePartnershipSection';
import OpportunitiesSection from './components/OpportunitiesSection';
import GovernanceTrustSection from './components/GovernanceTrustSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import DataInventoryModal from './components/DataInventoryModal';
import { initGlobalSplitText } from './utils/initSplitText';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [inventoryModalOpen, setInventoryModalOpen] = useState(false);

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

  // Universal SplitText initialization with font readiness and ScrollTrigger synchronization
  useEffect(() => {
    let cleanup = null;

    const setupSplit = () => {
      cleanup = initGlobalSplitText();
      ScrollTrigger.refresh();
    };

    if (typeof document !== 'undefined' && document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        setupSplit();
      });
    } else {
      setupSplit();
    }

    // Refresh ScrollTrigger positions once LoadingScreen fades out and layout settles
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 1900);

    return () => {
      clearTimeout(refreshTimer);
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#040406] text-gray-100 flex flex-col font-sans selection:bg-[#E57A00]/30 selection:text-orange-200">
      {/* Authentic Initial System Loading Screen */}
      <LoadingScreen />

      {/* Navigation */}
      <Navbar onOpenInventory={() => setInventoryModalOpen(true)} />

      <main className="flex-1">
        {/* 1. HERO SECTION (GSAP ScrollTrigger Frame Scrubber + SplitType Royal Headline) */}
        <Hero />

        {/* 2. ABOUT REDKROSS & 6 CORE VALUES (Mandated Order 2 in Developer Spec) */}
        <AboutSection />

        {/* 3. TWO PILLARS (Equal weight: Cybersecurity & Technology + Psychology & Human Wellbeing) */}
        <TwoPillarsShowcase />

        {/* 4. SELECTED RESEARCH & INNOVATION (4-Part Mental Model, 10-Stage Lifecycle & Cyber Deep-Dive Link) */}
        <SelectedResearchSection />

        {/* 6. ORGANISATIONAL JOURNEY & STICKY NOTEBOOK TIMELINE */}
        <HalfCircleTimeline />

        {/* 7. TEAM, LEADERSHIP & STATUTORY COMPLIANCE (Profile Spec Section 6 & 8) */}
        <TeamSection />

        {/* 8. COLLEGE & UNIVERSITY PARTNERSHIPS (5 3D Stages & Functional Enquiry Form) */}
        <CollegePartnershipSection />

        {/* 9. VERIFIED OPPORTUNITIES DIRECTORY */}
        <OpportunitiesSection />

        {/* 10. GOVERNANCE, ETHICS, DATA MINIMIZATION & RESPONSIBLE DISCLOSURE */}
        <GovernanceTrustSection onOpenInventory={() => setInventoryModalOpen(true)} />

        {/* 11. CONTACT & INSTITUTIONAL DIRECTORY HUB */}
        <ContactSection />
      </main>

      {/* Institutional Legal Footer */}
      <Footer onOpenInventory={() => setInventoryModalOpen(true)} />

      {/* Audited Fact & Evidence Registry Modal */}
      <DataInventoryModal 
        isOpen={inventoryModalOpen} 
        onClose={() => setInventoryModalOpen(false)} 
      />
    </div>
  );
}
