import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
  ArrowUpRight
} from 'lucide-react';
import Helix10StageLifecycle from './ui/helix-10stage-lifecycle';

export default function BlueprintMentalModel() {
  const { institution } = REDKROSS_DATA;
  const [activeCard, setActiveCard] = useState(null);

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

  return (
    <section id="blueprint" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#040406] border-t border-white/5 select-none overflow-hidden">
      {/* Background Cyber Ambient */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-[#E57A00]/[0.035] rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* SECTION HEADER: From Architecture Blueprint Page 1-3 */}
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300 mb-4 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#0FB7B7] animate-ping" />
            <span>OPERATING ARCHITECTURE // COMPLETE BLUEPRINT</span>
            <span className="text-gray-500 hidden sm:inline">&bull; 4-PART MENTAL MODEL</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-5 font-royal" style={{ perspective: '1000px' }}>
            The 4-Part Operating <span className="gradient-text font-royal">Architecture</span>
          </h2>
          
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-sans">
            How RedKross connects governance, education, isolated lab experimentation, rigorous scientific inquiry and practical defensive tooling into one unified, reproducible ecosystem.
          </p>
        </motion.div>

        {/* ───────────────────────────────────────────────────────────── */}
        {/* 4-PART MENTAL MODEL: TOP-NOTCH LUXURY DOUBLE-BORDER CARDS     */}
        {/* ───────────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {mentalModelCards.map((item, idx) => {
            const Icon = item.icon;
            const isHovered = activeCard === idx;

            return (
              <motion.div
                key={item.area}
                onMouseEnter={() => setActiveCard(idx)}
                onMouseLeave={() => setActiveCard(null)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.55, delay: idx * 0.1 }}
                className="relative group rounded-3xl p-[1px] transition-all duration-500 hover:scale-[1.02]"
                style={{
                  // Outer luxury metallic gradient border
                  background: isHovered
                    ? `linear-gradient(135deg, ${item.accent}, rgba(255,255,255,0.2) 50%, ${item.accent}60 100%)`
                    : 'linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.03))',
                  boxShadow: isHovered
                    ? `0 20px 50px rgba(0,0,0,0.9), 0 0 35px ${item.accent}30`
                    : '0 10px 30px rgba(0,0,0,0.7)'
                }}
              >
                {/* Inner Card Container with Secondary Inset Border */}
                <div className={`relative h-full rounded-[23px] p-6 sm:p-7 flex flex-col justify-between overflow-hidden bg-gradient-to-b ${item.gradient} border border-white/5`}>
                  
                  {/* Subtle luxury ambient radial flare */}
                  <div 
                    className="absolute -top-12 -right-12 w-40 h-40 rounded-full blur-3xl pointer-events-none transition-opacity duration-500"
                    style={{
                      backgroundColor: `${item.accent}20`,
                      opacity: isHovered ? 1 : 0.4
                    }}
                  />

                  {/* Top Reticle Spec Line */}
                  <div 
                    className="absolute top-0 left-0 right-0 h-[2px] transition-all duration-500"
                    style={{
                      background: isHovered 
                        ? `linear-gradient(90deg, transparent, ${item.accent}, transparent)` 
                        : 'transparent'
                    }}
                  />

                  {/* Top Bar: Icon Badge + Stage Ref */}
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div 
                        className="w-13 h-13 p-3.5 rounded-2xl flex items-center justify-center border shadow-lg transition-transform duration-300 group-hover:scale-105"
                        style={{
                          backgroundColor: `${item.accent}15`,
                          borderColor: `${item.accent}40`,
                          color: item.accent,
                          boxShadow: isHovered ? `0 0 20px ${item.accent}40` : 'none'
                        }}
                      >
                        <Icon className="w-6 h-6" />
                      </div>

                      <div className="flex flex-col items-end">
                        <span className="text-[11px] font-mono text-gray-500 font-bold">
                          {item.stage}
                        </span>
                        <span 
                          className="text-[10px] font-mono font-bold tracking-wider uppercase mt-0.5"
                          style={{ color: item.accent }}
                        >
                          {item.action}
                        </span>
                      </div>
                    </div>

                    {/* Area Name & Sub-tagline */}
                    <h3 className="text-2xl sm:text-3xl font-black text-white font-royal tracking-tight group-hover:text-amber-100 transition-colors mb-1.5">
                      {item.area}
                    </h3>
                    <div className="text-[11px] font-mono text-gray-400 mb-3.5 line-clamp-1">
                      {item.tagline}
                    </div>

                    {/* Main Purpose */}
                    <p className="text-xs sm:text-[13px] text-gray-300 leading-relaxed font-sans mb-5">
                      {item.purpose}
                    </p>

                    {/* Section in Card: Key Operational Artifacts */}
                    <div className="pt-3.5 pb-2 border-t border-white/5 space-y-2 mb-4">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400 font-semibold flex items-center gap-1.5">
                        <Layers className="w-3 h-3 text-gray-400" />
                        <span>Core Deliverables:</span>
                      </span>
                      <div className="space-y-1.5">
                        {item.outputs.map((out, oIdx) => (
                          <div key={oIdx} className="flex items-center gap-2 text-[11px] font-mono text-gray-300">
                            <span 
                              className="w-1.5 h-1.5 rounded-full shrink-0"
                              style={{ backgroundColor: item.accent }}
                            />
                            <span className="truncate">{out}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom Verification Strip */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-gray-400">
                    <div className="flex items-center gap-1.5 text-emerald-400">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span className="text-[11px]">Architecture Verified</span>
                    </div>

                    <span className="text-[10px] text-gray-400">
                      SPEC // RKRF-0{idx + 1}
                    </span>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 10-STAGE REPEATABLE RESEARCH LIFECYCLE (UNCONTAINED OPEN 3D HELIX) */}
        <div className="mt-20 mb-12">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-10 pb-6 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#FFA439] uppercase tracking-wider mb-2">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Repeatable Scientific Standard</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-bold text-white font-royal tracking-tight">
                The 10-Stage Research & Engineering Lifecycle
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-300 max-w-xl font-sans leading-relaxed">
              Published in the RedKross Complete Architecture Blueprint (October 2026), ensuring all CVE reproductions, defensive tools and experiments operate with strict isolation and evidence-backed verification.
            </p>
          </div>

          {/* 3D Helix 10-Stage Lifecycle Animation */}
          <div className="my-6">
            <Helix10StageLifecycle />
          </div>

          {/* GitHub Organisation CTA Row */}
          <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
            <span className="text-gray-400">
              Open-source repositories, CVE analyses, and tooling are tracked under public review.
            </span>
            <a
              href={institution.githubOrg}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#E57A00]/10 border border-[#E57A00]/30 text-[#FFA439] hover:bg-[#E57A00] hover:text-black font-bold transition-all shrink-0 cursor-pointer shadow-lg hover:shadow-[0_0_20px_rgba(229,122,0,0.5)]"
            >
              <FolderGit2 className="w-4 h-4" />
              <span>Explore github.com/Redkrossresearch</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
