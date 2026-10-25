import React from 'react';
import { motion } from 'framer-motion';
import { REDKROSS_DATA } from '../data/redkrossData';
import { 
  ShieldCheck, 
  Sparkles, 
  BookOpen, 
  Scale, 
  Users, 
  Target, 
  Lock, 
  Building2, 
  Award,
  ArrowRight
} from 'lucide-react';
import ExpandingValuesAccordion from './ui/expanding-values-accordion';

export default function AboutSection() {
  const { institution, missionVisionValues } = REDKROSS_DATA;
  const { values, mission, vision } = missionVisionValues;

  const valueIcons = [
    <Scale className="w-5 h-5 text-[#E57A00]" key="integrity" />,
    <Target className="w-5 h-5 text-[#FFA439]" key="rigour" />,
    <BookOpen className="w-5 h-5 text-[#0FB7B7]" key="accessibility" />,
    <Lock className="w-5 h-5 text-emerald-400" key="responsibility" />,
    <Users className="w-5 h-5 text-cyan-400" key="collaboration" />,
    <Sparkles className="w-5 h-5 text-amber-400" key="impact" />
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#040406] border-t border-white/5 select-none overflow-hidden">
      {/* Subtle Ambient Radial Glow */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[350px] bg-[#E57A00]/[0.04] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[350px] bg-[#0FB7B7]/[0.03] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* SECTION HEADER: Verbatim from Spec Section 4 & 5 */}
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300 mb-4 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#E57A00] animate-pulse" />
            <span>ORGANISATIONAL IDENTITY & OPERATING PRINCIPLES</span>
            <span className="text-gray-500 hidden sm:inline">&bull; SECTION 8 NPO</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-5 font-royal" style={{ perspective: '1000px' }}>
            About <span className="gradient-text">RedKross Research Foundation</span>
          </h2>

          <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl mx-auto font-sans">
            RedKross Research Foundation is a research, education and innovation organisation working across cybersecurity, artificial intelligence, digital forensics and human-centred security, with an associated psychology and mental-wellbeing wing.
          </p>
        </motion.div>

        {/* MISSION & VISION DUAL BANNER */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 sm:p-10 rounded-3xl bg-[#090c14]/90 border border-white/10 relative overflow-hidden backdrop-blur-xl group hover:border-[#E57A00]/40 transition-all shadow-xl"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#E57A00]/5 rounded-bl-full pointer-events-none" />
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E57A00]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#FFA439] font-bold">
                Our Mission
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-royal">
              Evidence-Informed Practical Impact
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed font-sans">
              {mission}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 sm:p-10 rounded-3xl bg-[#090c14]/90 border border-white/10 relative overflow-hidden backdrop-blur-xl group hover:border-[#0FB7B7]/40 transition-all shadow-xl"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#0FB7B7]/5 rounded-bl-full pointer-events-none" />
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0FB7B7]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#0FB7B7] font-bold">
                Our Vision
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-royal">
              Resilient Digital & Human Systems
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed font-sans">
              {vision}
            </p>
          </motion.div>
        </div>

        {/* 6 CORE INSTITUTIONAL VALUES: 3D Perspective Fan / Expanding Accordion */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <span className="text-xs font-mono text-gray-400 uppercase tracking-widest block mb-2">
              FOUNDATIONAL PILLARS OF CONDUCT
            </span>
            <h3 className="text-2xl sm:text-4xl font-bold text-white font-royal tracking-tight">
              The 6 Core Institutional Values
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto mt-2 font-mono">
              Hover across the cards to expand and inspect each ethical cornerstone.
            </p>
          </div>

          <ExpandingValuesAccordion values={values} />
        </div>

      </div>
    </section>
  );
}
