import React, { useState, useEffect, useRef } from 'react';
import { REDKROSS_DATA } from '../data/redkrossData';
import { 
  FolderGit2, 
  ExternalLink, 
  AlertCircle, 
  Terminal,
  Code2,
  ChevronRight,
  ShieldCheck,
  Zap,
  Layers,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ArcCarousel from './ui/arc-carousel';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsPortfolio() {
  const { projects } = REDKROSS_DATA;
  const [activeIndex, setActiveIndex] = useState(0);

  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const telemetryRef = useRef(null);

  const activeProject = projects[activeIndex % projects.length] || projects[0];



  const getStatusBadge = (status) => {
    switch (status) {
      case 'Prototype':
        return 'bg-amber-500/15 text-[#FFA439] border-amber-500/40';
      case 'In development':
        return 'bg-blue-500/15 text-blue-400 border-blue-500/40';
      case 'Evaluated / validated':
        return 'bg-emerald-500/15 text-emerald-400 border-emerald-500/40';
      case 'Beta':
        return 'bg-purple-500/15 text-purple-400 border-purple-500/40';
      default:
        return 'bg-gray-500/15 text-gray-400 border-gray-500/40';
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className="py-24 relative bg-[#040406] border-t border-white/5 select-none overflow-hidden"
    >
      {/* Background Cyber Ambient with Seamless Radial Falloff */}
      <div className="absolute inset-0 cyber-grid-bg opacity-15 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#E57A00]/[0.05] rounded-full blur-[180px] pointer-events-none" />

      {/* SECTION HEADING WITH ROYAL CINZEL & GSAP SPLITTYPE */}
      <motion.div 
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-4xl mx-auto mb-8 px-4 sm:px-6 relative z-10"
      >
        <div ref={telemetryRef} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300 mb-4 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-[#E57A00] animate-ping" />
          <span>VERIFIED PORTFOLIO // ZERO FABRICATIONS</span>
          <span className="text-gray-500 hidden sm:inline">&bull; 5 REGISTERED INITIATIVES</span>
        </div>

        <h2 
          ref={headingRef}
          className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4 font-royal"
          style={{ perspective: '1000px' }}
        >
          Projects. <span className="gradient-text">Engineering with Evidence.</span>
        </h2>

        <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-sans">
          Our public project portfolio includes tools and prototypes across AI, cybersecurity and related technologies. 
          Each project clearly communicates its purpose, current maturity, technical approach and known limitations.
        </p>
      </motion.div>

      {/* ========================================================================= */}
      {/* RAINBOW ARCH CAROUSEL (EXACT VIDEO MATCH - CARDS FAN ALONG SEMICIRCLE ARC) */}
      {/* ========================================================================= */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full relative my-2"
      >
        <ArcCarousel
          items={projects}
          activeIndex={activeIndex}
          onChange={setActiveIndex}
          cardWidth={340}
          cardHeight={500}
          radius={1200}
          angleStep={15}
          renderItem={(project, { isApex, diff, index }) => {
            const isTeal = index % 2 === 1;
            const primaryColor = isTeal ? '#0FB7B7' : '#E57A00';
            const glowBorder = isApex 
              ? (isTeal ? 'border-[#0FB7B7] shadow-[0_0_40px_rgba(15,183,183,0.35)]' : 'border-[#E57A00] shadow-[0_0_40px_rgba(229,122,0,0.35)]')
              : 'border-white/10 hover:border-white/30';

            return (
              <div 
                className={`w-full h-full rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 backdrop-blur-xl relative overflow-hidden border ${glowBorder} ${
                  isApex 
                    ? (isTeal ? 'bg-gradient-to-b from-[#04151b] via-[#080d14] to-[#040407]' : 'bg-gradient-to-b from-[#170e05] via-[#0d090d] to-[#040407]') 
                    : 'bg-[#09090e]/95'
                }`}
              >
                {/* Cyber Reticles & Corner Tags */}
                <div className="absolute top-2.5 left-3.5 text-[9px] font-mono text-gray-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: primaryColor }} />
                  <span>[ + ] NODE 0{index + 1}</span>
                </div>
                <div className="absolute top-2.5 right-3.5 text-[9px] font-mono text-gray-400">
                  VERIFIED SPEC
                </div>

                {/* Top Section: Category & Status */}
                <div className="pt-3">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span 
                      className="text-[10px] font-mono px-2.5 py-1 rounded-lg border font-semibold truncate max-w-[190px]"
                      style={{
                        backgroundColor: `${primaryColor}15`,
                        borderColor: `${primaryColor}40`,
                        color: primaryColor
                      }}
                    >
                      {project.domain}
                    </span>

                    <span className={`text-[9px] font-mono px-2 py-0.5 rounded-full border shrink-0 ${getStatusBadge(project.status)}`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl sm:text-2xl font-black text-white mb-1 font-royal tracking-tight leading-tight">
                    {project.name}
                  </h3>

                  {/* Tagline */}
                  <div 
                    className="text-xs font-mono font-medium mb-3 line-clamp-1"
                    style={{ color: isTeal ? '#38BDF8' : '#FFA439' }}
                  >
                    {project.tagline}
                  </div>

                  {/* Core Problem / Motivation */}
                  <div className="mb-3">
                    <div className="text-[10px] font-mono text-gray-400 uppercase tracking-wider mb-1">
                      Core Challenge:
                    </div>
                    <p className="text-xs text-gray-300 leading-relaxed line-clamp-2 font-sans">
                      {project.problem}
                    </p>
                  </div>

                  {/* Architecture Specification Box */}
                  <div className="p-3 rounded-xl bg-black/60 border border-white/5 mb-3">
                    <div className="text-[10px] font-mono text-gray-300 uppercase font-bold flex items-center gap-1.5 mb-1">
                      <Terminal className="w-3 h-3 text-[#E57A00]" />
                      <span>Architecture:</span>
                    </div>
                    <p className="text-[11px] text-gray-400 font-mono leading-relaxed line-clamp-2">
                      {project.architecture}
                    </p>
                  </div>

                  {/* Documented Limitation Notice */}
                  <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-[10px] text-amber-200/90 flex items-start gap-1.5 mb-3">
                    <AlertCircle className="w-3 h-3 text-[#FFA439] shrink-0 mt-0.5" />
                    <span className="line-clamp-2">
                      <strong>Limitation:</strong> {project.limitations}
                    </span>
                  </div>
                </div>

                {/* Bottom Section: Tech Stack & GitHub */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-0.5 rounded bg-black/50 border border-white/10 text-[9px] font-mono text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2.5 border-t border-white/10 flex items-center justify-between">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold hover:underline group"
                      style={{ color: primaryColor }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FolderGit2 className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                      <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </a>

                    <span className="text-[9px] font-mono text-gray-400">
                      {project.lastVerified}
                    </span>
                  </div>
                </div>

              </div>
            );
          }}
        />
      </motion.div>

    </section>
  );
}