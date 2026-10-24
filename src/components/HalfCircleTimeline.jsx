import React from 'react';
import { motion } from 'framer-motion';
import Timeline from './ui/timeline-02';

export default function HalfCircleTimeline() {
  return (
    <section id="past" className="py-24 px-4 sm:px-6 relative bg-[#040406] border-t border-white/5 select-none overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-[#E57A00]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Heading: Verbatim from Spec & Profile */}
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-4xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-400 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#E57A00] animate-pulse" />
            <span>Verified Journey & Roadmap</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4 font-royal" style={{ perspective: '1000px' }}>
            When It Was Started & <span className="gradient-text font-royal">Our Journey</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-sans">
            From founding principles and legal incorporation to our public GitHub engineering portfolio and staged Cyber Range roadmap.
          </p>
        </motion.div>

        {/* Interactive Scroll-Linked Timeline with Dynamic Progress Line */}
        <Timeline />

      </div>
    </section>
  );
}
