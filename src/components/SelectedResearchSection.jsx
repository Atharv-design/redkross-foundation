import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { REDKROSS_DATA } from '../data/redkrossData';
import { 
  GraduationCap, 
  Terminal, 
  Search, 
  Wrench, 
  ShieldCheck, 
  CheckCircle2, 
  FolderGit2,
  ExternalLink,
  Layers,
  Sparkles,
  ArrowUpRight,
  Code2,
  ChevronRight,
  AlertCircle
} from 'lucide-react';
import Helix10StageLifecycle from './ui/helix-10stage-lifecycle';
import { getEcosystemUrl } from '../utils/ecosystemLinks';

export default function SelectedResearchSection() {
  const { institution, projects } = REDKROSS_DATA;
  const [activeCard, setActiveCard] = useState(null);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  // 4-Part Mental Model enriched with verified Blueprint operational details
  const mentalModelCards = [
    {
      stage: "STAGE 01",
      area: "Academy",
      action: "LEARN",
      tagline: "Foundations & Observable Competency",
      purpose: "Build understanding and foundational competence through structured learning pathways and rigorous rubrics.",
      accent: "#E57A00",
      gradient: "from-[#201306] via-[#0d0f17] to-[#06080e]",
      icon: GraduationCap,
      outputs: [
        "Structured Learning Pathways",
        "Observable Competency Rubrics",
        "Formative Assessment Records",
        "Supervised Mentor Feedback"
      ],
      deliverable: "Progress, exercise and assessment evidence verified by faculty."
    },
    {
      stage: "STAGE 02",
      area: "Cyber Range",
      action: "PRACTISE",
      tagline: "Isolated CVE Labs & Defensive Sandboxing",
      purpose: "Apply skills in controlled, disposable, isolated environments with default-deny network controls.",
      accent: "#FFA439",
      gradient: "from-[#221808] via-[#0d0f17] to-[#06080e]",
      icon: Terminal,
      outputs: [
        "Air-Gapped Disposable Labs",
        "Default-Deny Egress Controls",
        "Automated Teardown & Reset",
        "Telemetry & Defensive Logs"
      ],
      deliverable: "Lab validation results, defense telemetry, scoring and safe destruction."
    },
    {
      stage: "STAGE 03",
      area: "Research",
      action: "INVESTIGATE",
      tagline: "Scientific Inquiry & Empirical Findings",
      purpose: "Test scoped questions using reproducible methods and produce evidence-backed knowledge.",
      accent: "#0FB7B7",
      gradient: "from-[#061b1c] via-[#0d0f17] to-[#06080e]",
      icon: Search,
      outputs: [
        "Methodology & Hypothesis Specs",
        "Synthetic & Authorized Datasets",
        "Peer-Reviewed Uncertainty Audits",
        "Formal Limitations Register"
      ],
      deliverable: "Reproducible research methodology, evidence, findings and published papers."
    },
    {
      stage: "STAGE 04",
      area: "Innovation",
      action: "MAKE USEFUL",
      tagline: "Defensive Software & Community Tooling",
      purpose: "Turn validated knowledge and findings into functional tools, systems, prototypes or open resources.",
      accent: "#38BDF8",
      gradient: "from-[#071624] via-[#0d0f17] to-[#06080e]",
      icon: Wrench,
      outputs: [
        "Open-Source Public Repositories",
        "Architectural Decision Records (ADRs)",
        "Automated Test Suites & Binaries",
        "Responsible Disclosure Channels"
      ],
      deliverable: "Reviewed code, automated test suites, documentation and released prototype."
    }
  ];

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

  const activeProject = projects[activeProjectIndex % projects.length] || projects[0];

  return (
    <section id="research" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#040406] border-t border-white/5 select-none overflow-hidden">
      {/* Background Cyber Ambient */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-[#E57A00]/[0.035] rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* SECTION HEADER: From Architecture Blueprint Page 1-3 */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300 mb-4 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-[#0FB7B7] animate-ping" />
            <span>OPERATING ARCHITECTURE // COMPLETE BLUEPRINT</span>
            <span className="text-gray-500 hidden sm:inline">&bull; 4-PART MENTAL MODEL</span>
          </motion.div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-5 font-royal" style={{ perspective: '1000px' }}>
            Selected Research &amp; <span className="gradient-text font-royal">Innovation</span>
          </h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-400 font-sans leading-relaxed max-w-3xl mx-auto"
          >
            RedKross is not an ad-hoc programme or marketing catalogue. It operates as one connected scientific ecosystem where students <span className="text-white font-medium">learn</span> in structured cohorts, <span className="text-white font-medium">practise</span> in isolated environments, <span className="text-white font-medium">investigate</span> through reproducible inquiry, and turn validated findings into <span className="text-white font-medium">useful open technology</span>.
          </motion.p>
        </div>

        {/* 4-PART MENTAL MODEL CARDS (Grid 4-columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {mentalModelCards.map((card, idx) => {
            const Icon = card.icon;
            const isHovered = activeCard === idx;
            
            return (
              <motion.div
                key={card.area}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onMouseEnter={() => setActiveCard(idx)}
                onMouseLeave={() => setActiveCard(null)}
                className={`relative rounded-2xl bg-gradient-to-b ${card.gradient} border border-white/10 p-6 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]`}
                style={{
                  borderColor: isHovered ? `${card.accent}80` : 'rgba(255,255,255,0.08)'
                }}
              >
                {/* Accent Top Bar */}
                <div 
                  className="absolute top-0 left-6 right-6 h-[2px] rounded-full transition-all duration-300 opacity-60 group-hover:opacity-100"
                  style={{ backgroundColor: card.accent }}
                />

                <div>
                  {/* Stage & Area Badge */}
                  <div className="flex items-center justify-between mb-4 pt-1">
                    <span className="text-[11px] font-mono tracking-widest uppercase font-semibold" style={{ color: card.accent }}>
                      {card.stage}
                    </span>
                    <div className="p-2 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" style={{ color: card.accent }} />
                    </div>
                  </div>

                  {/* Area Title & Action */}
                  <div className="mb-2">
                    <h3 className="text-2xl font-black text-white font-royal tracking-tight flex items-baseline gap-2">
                      {card.area}
                      <span className="text-xs font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/10 text-gray-300">
                        = {card.action}
                      </span>
                    </h3>
                    <p className="text-xs font-mono text-gray-400 mt-1 leading-snug">
                      {card.tagline}
                    </p>
                  </div>

                  {/* Purpose Paragraph */}
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6 font-sans">
                    {card.purpose}
                  </p>

                  {/* Concrete Outputs List */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-white/10">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400 font-semibold block">
                      Blueprint Artifacts:
                    </span>
                    {card.outputs.map((out, oIdx) => (
                      <div key={oIdx} className="flex items-center gap-2 text-xs text-gray-300">
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0" style={{ color: card.accent }} />
                        <span className="line-clamp-1">{out}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Deliverable Box */}
                <div className="pt-3 border-t border-white/5">
                  <div className="p-2.5 rounded-xl bg-black/40 border border-white/5">
                    <span className="text-[9px] font-mono text-gray-400 uppercase tracking-widest block mb-0.5">Primary Deliverable:</span>
                    <p className="text-[11px] font-sans text-gray-300 leading-tight">
                      {card.deliverable}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 10-STAGE SCIENTIFIC OPERATING LIFECYCLE (Helix Carousel) */}
        <Helix10StageLifecycle />

        {/* SELECTED VERIFIED RESEARCH INITIATIVES (Zero Fabrications Taxonomy) */}
        <div className="mt-24 pt-16 border-t border-white/10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#E57A00]" />
              <span>VERIFIED WORK // ZERO FABRICATIONS STATUS</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-bold font-royal text-white tracking-tight mb-3">
              Selected Research <span className="text-[#FFA439]">Focus &amp; Tooling</span>
            </h3>
            <p className="text-sm text-gray-400 font-sans">
              All initiatives are strictly catalogued with verified maturity labels. Completed tools and CVE lab sandboxes are deployed on our specialist technical platform.
            </p>
          </div>

          {/* Project Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {projects.slice(0, 3).map((proj, pIdx) => (
              <div 
                key={proj.title}
                className="rounded-2xl bg-[#090d16]/90 border border-white/10 p-6 flex flex-col justify-between hover:border-[#E57A00]/40 transition-all duration-300 group hover:-translate-y-1 shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider">{proj.category}</span>
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono border font-medium ${getStatusBadge(proj.status)}`}>
                      {proj.status}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-white font-royal group-hover:text-[#FFA439] transition-colors mb-2">
                    {proj.title}
                  </h4>
                  <p className="text-xs text-gray-300 font-sans leading-relaxed mb-4">
                    {proj.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-gray-400">
                  <span>Domain: {proj.domain || "Cybersecurity"}</span>
                  <a 
                    href={getEcosystemUrl('cyber', '/projects')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#E57A00] hover:underline cursor-pointer"
                  >
                    <span>Inspect</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* SPECIALIST SUBDOMAIN PORTAL CARD */}
          <div className="rounded-2xl p-8 bg-gradient-to-r from-[#0d1322] via-[#090e18] to-[#141b2d] border border-[#00F0FF]/30 shadow-[0_0_50px_rgba(0,240,255,0.08)] relative overflow-hidden">
            <div className="absolute right-0 top-0 w-96 h-96 bg-[#00F0FF]/[0.04] rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/30 text-xs font-mono text-[#00F0FF] mb-3">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>SPECIALIST CYBERSECURITY SUBDOMAIN</span>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold font-royal text-white mb-2">
                  Explore Full Technical Projects, Labs &amp; Tool Repositories
                </h4>
                <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed">
                  Detailed technical projects, CVE reproduction pipelines, forensic workbenches, disposable cyber range specifications, and open-source documentation live on our dedicated subdomain: <span className="text-[#00F0FF] font-mono">cyber.redkross.org.in</span>.
                </p>
              </div>

              <a
                href={getEcosystemUrl('cyber')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#00F0FF] text-black font-royal font-bold text-xs uppercase tracking-wider hover:bg-[#38bdf8] transition-all hover:scale-105 shadow-[0_0_25px_rgba(0,240,255,0.4)] whitespace-nowrap cursor-pointer shrink-0"
              >
                <span>Launch Cybersecurity Platform</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
