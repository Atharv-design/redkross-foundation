import React, { useRef, useState } from 'react';
import { REDKROSS_DATA } from '../data/redkrossData';
import { 
  ShieldCheck, 
  Brain, 
  ExternalLink, 
  Terminal, 
  Activity, 
  Sparkles
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function TwoPillarsShowcase() {
  const { pillars } = REDKROSS_DATA;
  const [hoveredDomain, setHoveredDomain] = useState(null);

  const sectionRef = useRef(null);
  const headingRef = useRef(null);

  return (
    <section 
      ref={sectionRef}
      id="pillars" 
      className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#040406] border-t border-white/5 select-none overflow-hidden"
    >
      {/* Background Cyber Ambient */}
      <div className="absolute inset-0 cyber-grid-bg opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[400px] bg-[#E57A00]/[0.06] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[400px] bg-[#0FB7B7]/[0.06] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* SECTION HEADER WITH TELEMETRY & ROYAL TYPOGRAPHY */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-18">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 sm:gap-3 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md mb-5"
          >
            <span className="w-2 h-2 rounded-full bg-[#E57A00] animate-ping" />
            <span className="text-[11px] font-mono tracking-wider text-gray-300 uppercase">
              FOUNDATION ARCHITECTURE // DUAL-PILLAR DOSSIER
            </span>
            <span className="text-[10px] font-mono text-gray-500 hidden sm:inline">
              [CIN: U85499HR2026NPL144741]
            </span>
          </motion.div>

          <h2 
            ref={headingRef}
            className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4 font-royal"
            style={{ perspective: '1000px' }}
          >
            Two Pillars. <span className="gradient-text">One Shared Mission.</span>
          </h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-sans"
          >
            RedKross Research Foundation brings together two areas of work that address different but interconnected challenges: 
            the <span className="text-[#FFA439] font-medium">security of digital systems</span> and the <span className="text-[#1ED8D8] font-medium">wellbeing of people</span>.
          </motion.p>
        </div>

        {/* ========================================================================= */}
        {/* 2-COLUMN GRID: PILLAR 1 (LEFT) & PILLAR 2 (RIGHT)                         */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-12 relative">
          
          {/* ───────────────────────────────────────────────────────────── */}
          {/* PILLAR 1: CYBERSECURITY (Fly in smoothly from the left)      */}
          {/* ───────────────────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              duration: 0.85,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{ willChange: 'transform, opacity' }}
            className="rounded-3xl p-7 sm:p-9 bg-gradient-to-b from-[#140b05] via-[#0a090e] to-[#040406] border border-[#E57A00]/50 shadow-[0_0_40px_rgba(229,122,0,0.18)] relative overflow-hidden flex flex-col justify-between"
          >
            {/* Elastic Plasma Glow at Bottom Base */}
            <div className="absolute -bottom-4 inset-x-8 h-8 bg-gradient-to-t from-transparent via-[#E57A00]/25 to-[#E57A00]/50 blur-sm pointer-events-none rounded-full" />
            {/* Sci-Fi Corner Reticles */}
            <div className="absolute top-3 left-3 text-[10px] font-mono text-[#E57A00]/70">[ + ] NODE 01</div>
            <div className="absolute top-3 right-3 text-[10px] font-mono text-[#E57A00]/70">[ SEC_ACTIVE ]</div>
            <div className="absolute bottom-3 left-3 text-[10px] font-mono text-[#E57A00]/40">LAT: 28.4595° N</div>
            <div className="absolute bottom-3 right-3 text-[10px] font-mono text-[#E57A00]/40">SPEC_REV: 2026.4</div>

            <div>
              {/* Header HUD Bar */}
              <div className="flex items-center justify-between mb-6 pt-2">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#E57A00] animate-pulse" />
                  <span className="text-[11px] font-mono text-[#FFA439] uppercase tracking-wider font-semibold">
                    Technical Pillar &bull; Engineering & Lab
                  </span>
                </div>
                
                <div className="w-12 h-12 rounded-2xl bg-[#E57A00]/10 border border-[#E57A00]/30 flex items-center justify-center text-[#E57A00] shadow-[0_0_15px_rgba(229,122,0,0.2)]">
                  <ShieldCheck className="w-6 h-6" />
                </div>
              </div>

              {/* Title & Copy */}
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 tracking-tight font-royal">
                {pillars.cybersecurity.title}
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed mb-6 font-sans">
                {pillars.cybersecurity.copy}
              </p>

              {/* Domain Matrix Chips */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-gray-400">
                  <span>Key Research Domains</span>
                  <span className="text-[#E57A00]">{pillars.cybersecurity.domains.length} Specialized Tracks</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {pillars.cybersecurity.domains.map((d) => (
                    <motion.div
                      key={d.name}
                      whileHover={{ scale: 1.02, x: 2 }}
                      onMouseEnter={() => setHoveredDomain(d.name)}
                      onMouseLeave={() => setHoveredDomain(null)}
                      className={`p-2.5 rounded-xl border text-xs font-mono transition-all duration-200 cursor-pointer ${
                        hoveredDomain === d.name
                          ? 'bg-[#E57A00]/15 border-[#E57A00]/50 text-white shadow-[0_0_15px_rgba(229,122,0,0.2)]'
                          : 'bg-black/40 border-white/5 text-gray-300 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <Terminal className="w-3.5 h-3.5 text-[#E57A00] shrink-0" />
                        <span className="truncate">{d.name}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Portal Link */}
            <div className="pt-5 border-t border-white/10 flex items-center justify-between">
              <a
                href={pillars.cybersecurity.targetUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#FFA439] hover:text-white transition-colors group"
              >
                <span>Launch Cybersecurity Website</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <span className="text-[11px] font-mono text-gray-500 bg-white/[0.02] px-2.5 py-1 rounded-md border border-white/5">
                cyber.redkross.org.in
              </span>
            </div>
          </motion.div>

          {/* ───────────────────────────────────────────────────────────── */}
          {/* PILLAR 2: PSYCHOLOGY (Fly in smoothly from the right)        */}
          {/* ───────────────────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              duration: 0.85,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{ willChange: 'transform, opacity' }}
            className="rounded-3xl p-7 sm:p-9 bg-gradient-to-b from-[#051317] via-[#08090f] to-[#040406] border border-[#0FB7B7]/50 shadow-[0_0_40px_rgba(15,183,183,0.18)] relative overflow-hidden flex flex-col justify-between"
          >
            {/* Elastic Plasma Glow at Bottom Base */}
            <div className="absolute -bottom-4 inset-x-8 h-8 bg-gradient-to-t from-transparent via-[#0FB7B7]/25 to-[#0FB7B7]/50 blur-sm pointer-events-none rounded-full" />
            {/* Sci-Fi Corner Reticles */}
            <div className="absolute top-3 left-3 text-[10px] font-mono text-[#0FB7B7]/70">[ + ] NODE 02</div>
            <div className="absolute top-3 right-3 text-[10px] font-mono text-[#0FB7B7]/70">[ NEURAL_SYNC ]</div>
            <div className="absolute bottom-3 left-3 text-[10px] font-mono text-[#0FB7B7]/40">LNG: 77.0266° E</div>
            <div className="absolute bottom-3 right-3 text-[10px] font-mono text-[#0FB7B7]/40">SPEC_REV: 2026.4</div>

            <div>
              {/* Header HUD Bar */}
              <div className="flex items-center justify-between mb-6 pt-2">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#0FB7B7] animate-pulse" />
                  <span className="text-[11px] font-mono text-[#1ED8D8] uppercase tracking-wider font-semibold">
                    Human Wellbeing &bull; Community & Behavioral Lab
                  </span>
                </div>
                
                <div className="w-12 h-12 rounded-2xl bg-[#0FB7B7]/10 border border-[#0FB7B7]/30 flex items-center justify-center text-[#0FB7B7] shadow-[0_0_15px_rgba(15,183,183,0.2)]">
                  <Brain className="w-6 h-6" />
                </div>
              </div>

              {/* Title & Copy */}
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 tracking-tight font-royal">
                {pillars.psychology.title}
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed mb-6 font-sans">
                {pillars.psychology.copy}
              </p>

              {/* Focus Disciplines Chips */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-gray-400">
                  <span>Focus Disciplines</span>
                  <span className="text-[#0FB7B7]">Cognitive & Mental Health</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    "Cognitive Biases & Deception",
                    "SOC Analyst Fatigue",
                    "Habit-Forming Security",
                    "Mental Wellbeing Education"
                  ].map((t) => (
                    <motion.div
                      key={t}
                      whileHover={{ scale: 1.02, x: 2 }}
                      onMouseEnter={() => setHoveredDomain(t)}
                      onMouseLeave={() => setHoveredDomain(null)}
                      className={`p-2.5 rounded-xl border text-xs font-mono transition-all duration-200 cursor-pointer ${
                        hoveredDomain === t
                          ? 'bg-[#0FB7B7]/15 border-[#0FB7B7]/50 text-white shadow-[0_0_15px_rgba(15,183,183,0.2)]'
                          : 'bg-black/40 border-white/5 text-gray-300 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <Activity className="w-3.5 h-3.5 text-[#0FB7B7] shrink-0" />
                        <span className="truncate">{t}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Portal Link */}
            <div className="pt-5 border-t border-white/10 flex items-center justify-between">
              <a
                href={pillars.psychology.targetUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#1ED8D8] hover:text-white transition-colors group"
              >
                <span>Launch Psychology Website</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <span className="text-[11px] font-mono text-gray-500 bg-white/[0.02] px-2.5 py-1 rounded-md border border-white/5">
                psychology.redkross.org.in
              </span>
            </div>
          </motion.div>

        </div>

        {/* ───────────────────────────────────────────────────────────── */}
        {/* WHERE THE PILLARS CONNECT (Slide in smoothly from the right)   */}
        {/* ───────────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            duration: 0.85,
            delay: 0.15,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{ willChange: 'transform, opacity' }}
          className="relative rounded-3xl p-8 sm:p-10 bg-gradient-to-r from-[#0e0905] via-[#090b14] to-[#040f12] border border-white/10 shadow-2xl overflow-hidden backdrop-blur-2xl"
        >
          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-amber-300 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#E57A00]" />
              <span>THE SYNAPTIC NEXUS // INTERDISCIPLINARY SYNTHESIS</span>
            </div>

            <h4 className="text-xl sm:text-3xl font-black text-white mb-3 font-royal">
              Where the Pillars Connect
            </h4>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-sans mb-6">
              {pillars.psychology.connection} <span className="text-white font-medium">Interdisciplinary work must be supported by appropriate methods, safeguards, and collaboration.</span>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-white/10">
              <div className="p-3.5 rounded-xl bg-black/50 border border-white/5">
                <div className="text-[11px] font-mono text-[#E57A00] font-bold mb-1">01 / BEHAVIORAL DEFENSE</div>
                <div className="text-xs text-gray-300">Social engineering mitigation through cognitive awareness.</div>
              </div>
              <div className="p-3.5 rounded-xl bg-black/50 border border-white/5">
                <div className="text-[11px] font-mono text-[#F0A500] font-bold mb-1">02 / ANALYST RESILIENCE</div>
                <div className="text-xs text-gray-300">Cognitive fatigue management in high-stress SOC operations.</div>
              </div>
              <div className="p-3.5 rounded-xl bg-black/50 border border-white/5">
                <div className="text-[11px] font-mono text-[#0FB7B7] font-bold mb-1">03 / ETHICAL INNOVATION</div>
                <div className="text-xs text-gray-300">Human-centric AI safety & responsible disclosure protocols.</div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
