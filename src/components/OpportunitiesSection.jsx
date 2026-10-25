import React, { useState, useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { REDKROSS_DATA } from '../data/redkrossData';
import { 
  Briefcase, 
  Clock, 
  MapPin, 
  CheckCircle, 
  ExternalLink, 
  ArrowRight,
  Filter,
  Layers
} from 'lucide-react';
import { StickyCard_001 } from './ui/skiper16';

export default function OpportunitiesSection() {
  const { opportunities } = REDKROSS_DATA;

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Open':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      case 'Upcoming':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
      case 'Closed':
        return 'bg-rose-500/10 text-rose-400 border-rose-500/30';
      default:
        return 'bg-gray-500/10 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <section id="opportunities" className="py-24 px-6 relative bg-[#060608] border-t border-white/5 select-none">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading: Verbatim from Spec Page 4 & 6 */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-400 mb-4"
          >
            <Layers className="w-3.5 h-3.5 text-[#E57A00]" />
            <span>Verified Opportunities Directory &bull; Interactive Card Stack</span>
          </motion.div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4 font-royal" style={{ perspective: '1000px' }}>
            Opportunities. <span className="gradient-text font-royal">Find Your Place in the Work.</span>
          </h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-gray-300 text-sm sm:text-base leading-relaxed"
          >
            RedKross Research Foundation brings together people interested in research, technology, psychology and community-focused work. Explore opportunities across cybersecurity, AI, digital forensics, psychology and interdisciplinary research.
          </motion.p>
        </div>

        {/* Skiper16 Interactive Sticky Card Stack */}
        <div 
          ref={containerRef} 
          className="relative w-full max-w-4xl mx-auto pb-32"
        >
          {opportunities.map((opp, i) => {
            const total = opportunities.length;
            const targetScale = Math.max(0.84, 1 - (total - i - 1) * 0.04);
            const rangeStart = total > 1 ? i * (0.75 / (total - 1)) : 0;

            return (
              <StickyCard_001
                key={opp.slug}
                i={i}
                progress={scrollYProgress}
                range={[rangeStart, 1]}
                targetScale={targetScale}
                className="w-full origin-top"
              >
                <div className="relative rounded-3xl bg-[#090c14]/95 backdrop-blur-2xl border border-white/10 hover:border-[#E57A00]/50 p-8 sm:p-11 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_35px_rgba(229,122,0,0.1)] transition-all">
                  
                  {/* Glowing Corner Indicator */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#E57A00]/5 rounded-tr-3xl rounded-bl-full pointer-events-none" />

                  {/* Top Card Badge Header */}
                  <div className="flex items-center justify-between mb-4 relative z-10">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#E57A00]" />
                      <span className="text-xs font-mono uppercase tracking-wider text-gray-400">
                        {opp.domain}
                      </span>
                    </div>
                    <span className={`text-[10px] font-mono px-3 py-1 rounded-full border ${getStatusBadge(opp.status)}`}>
                      {opp.status}
                    </span>
                  </div>

                  {/* Role Title */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 font-royal tracking-tight relative z-10">
                    {opp.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6 font-sans relative z-10">
                    {opp.summary}
                  </p>

                  {/* Structured Metadata Box */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono text-gray-400 mb-6 bg-black/55 p-4 rounded-2xl border border-white/5 relative z-10">
                    <div className="flex items-center gap-2.5">
                      <Briefcase className="w-3.5 h-3.5 text-[#E57A00] shrink-0" />
                      <span className="truncate"><strong>Type:</strong> {opp.type}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span className="truncate"><strong>Delivery:</strong> {opp.delivery}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span className="truncate"><strong>Commitment:</strong> {opp.commitment}</span>
                    </div>
                  </div>

                  {/* Eligibility Details */}
                  <div className="text-xs text-gray-400 mb-6 pb-6 border-b border-white/5 relative z-10">
                    <span className="text-gray-300 font-semibold block mb-1.5 font-mono text-[11px] uppercase tracking-wider">
                      Eligibility Requirements:
                    </span>
                    <p className="leading-relaxed font-sans text-gray-300">{opp.eligibility}</p>
                  </div>

                  {/* Card Bottom / Action Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
                    {opp.status === 'Open' ? (
                      <a
                        href="mailto:contact@redkross.org.in?subject=Application%20for%20Opportunity"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#E57A00] to-[#FF9E2C] text-black text-xs font-mono font-bold shadow-[0_0_20px_rgba(229,122,0,0.35)] hover:shadow-[0_0_30px_rgba(229,122,0,0.55)] transition-all cursor-pointer self-start sm:self-auto"
                      >
                        <span>Apply via Official Channel</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <span className="text-xs font-mono text-gray-500 italic">
                        Opening dates will be published upon cohort validation
                      </span>
                    )}
                    <span className="text-[11px] font-mono text-gray-500">
                      Ref: #{opp.slug}
                    </span>
                  </div>

                </div>
              </StickyCard_001>
            );
          })}
        </div>

        {/* Specification Compliance Note */}
        <div className="p-4 rounded-2xl bg-black/50 border border-white/5 text-center text-xs font-mono text-gray-500 max-w-2xl mx-auto">
          Canonical destination rule: Only listings marked Open are accepting applications. Psychology-specific applications route directly to psychology.redkross.org.in.
        </div>

      </div>
    </section>
  );
}
