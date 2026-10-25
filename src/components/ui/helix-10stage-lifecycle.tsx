import React, { useState, useRef } from 'react';
import { motion, PanInfo } from 'motion/react';
import { 
  ShieldCheck, 
  UserCheck, 
  GraduationCap, 
  Terminal, 
  Search, 
  Wrench, 
  Award, 
  Share2, 
  BarChart3, 
  RotateCw,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  MoveHorizontal
} from 'lucide-react';

export interface StageDetail {
  num: string;
  name: string;
  shortDesc: string;
  purpose: string;
  deliverable: string;
  accent: string;
  domain: string;
  icon: any;
  keyOutputs: string[];
}

export const LIFECYCLE_10_STAGES: StageDetail[] = [
  {
    num: "01",
    name: "Govern",
    shortDesc: "Ethics & Decision Rights",
    purpose: "Set priorities, legal boundaries, ethics, risk limits and accountability before work begins.",
    deliverable: "Approved project priorities, formal risk charters, designated owners and binding policies.",
    accent: "#E57A00",
    domain: "Strategic Direction",
    icon: ShieldCheck,
    keyOutputs: ["Ethics Clearance", "Risk & Scope Boundaries", "Decision Rights", "Audit Trails"]
  },
  {
    num: "02",
    name: "Onboard",
    shortDesc: "Role & Safety Scope",
    purpose: "Place students and fellows in defined programmes with clear scope, supervisor and RBAC privileges.",
    deliverable: "Role clarity, lab access credentials, personalized learning pathway & capstone brief.",
    accent: "#FFA439",
    domain: "Talent Architecture",
    icon: UserCheck,
    keyOutputs: ["Identity & Scope Verification", "Supervisor Assignment", "Safety Checklists", "Resource Quotas"]
  },
  {
    num: "03",
    name: "Learn",
    shortDesc: "Curriculum & Rubrics",
    purpose: "Teach rigorous concepts through structured Academy modules and observable competency rubrics.",
    deliverable: "Measurable competency milestones, verifiable lab submissions, and mastery evidence.",
    accent: "#0FB7B7",
    domain: "Academy Pipeline",
    icon: GraduationCap,
    keyOutputs: ["Structured Modules", "Observable Objectives", "Competency Milestones", "Formative Rubrics"]
  },
  {
    num: "04",
    name: "Practise",
    shortDesc: "Isolated Cyber Range",
    purpose: "Apply offensive and defensive skills safely inside disposable containers with default-deny egress.",
    deliverable: "Empirical exercise logs, defensive telemetry capture, challenge scoring & instant teardown.",
    accent: "#10B981",
    domain: "Virtual Cyber Range",
    icon: Terminal,
    keyOutputs: ["Default-Deny Networks", "Vulnerable Labs (Air-Gapped)", "Live Attack Teardown", "Automated Reset"]
  },
  {
    num: "05",
    name: "Investigate",
    shortDesc: "Empirical Research",
    purpose: "Test scoped questions and CVE root-cause analyses using reproducible, scientific methods.",
    deliverable: "Reproducible research methodology, hypothesis validation, structured telemetry & findings.",
    accent: "#38BDF8",
    domain: "Scientific Inquiry",
    icon: Search,
    keyOutputs: ["Primary Literature Review", "Synthetic Datasets", "Hypothesis Testing", "Limitations Log"]
  },
  {
    num: "06",
    name: "Build",
    shortDesc: "Engineered Prototype",
    purpose: "Turn validated findings into practical defensive tools, CLI utilities, parsers, or robust services.",
    deliverable: "Public Git repository, automated test suites, architectural decision records (ADRs) & binaries.",
    accent: "#818CF8",
    domain: "Applied Engineering",
    icon: Wrench,
    keyOutputs: ["GitHub Version Control", "Security Architecture Review", "Unit & Integration Tests", "Developer Docs"]
  },
  {
    num: "07",
    name: "Assure",
    shortDesc: "Independent Peer QA",
    purpose: "Check safety, quality, privacy, limitations and readiness through independent peer examination.",
    deliverable: "Independent QA report, limitations disclosure, reproducible test report & formal sign-off.",
    accent: "#A78BFA",
    domain: "Quality Assurance",
    icon: Award,
    keyOutputs: ["Independent Reviewer", "False-Positive Scrutiny", "Data Minimization Audit", "Formal QA Record"]
  },
  {
    num: "08",
    name: "Release",
    shortDesc: "Responsible Disclosure",
    purpose: "Publish responsibly, coordinate CVE disclosures with vendors, and return knowledge to community.",
    deliverable: "Responsible CVE coordination, public whitepapers, MIT-licensed open source releases & checksums.",
    accent: "#F43F5E",
    domain: "Public Benefit",
    icon: Share2,
    keyOutputs: ["Vendor Embargo Notice", "Open Source Repos", "Whitepaper Distribution", "Release Versioning"]
  },
  {
    num: "09",
    name: "Measure",
    shortDesc: "Defensive Utility",
    purpose: "Track real-world operational utility, adoption rates, defensive impact and skill progression.",
    deliverable: "Telemetry metrics, practitioner feedback reports, defensive utility assessments & partner reviews.",
    accent: "#FB923C",
    domain: "Outcome Telemetry",
    icon: BarChart3,
    keyOutputs: ["Incident Reduction Impact", "GitHub Star/Fork Telemetry", "Course Completion Ratios", "Public Citations"]
  },
  {
    num: "10",
    name: "Improve",
    shortDesc: "Next Research Cycle",
    purpose: "Use feedback, incidents, and outcome measures to adapt curricula, tighten controls and start Stage 01.",
    deliverable: "Curricular patch updates, newly isolated CVE labs, updated risk policies & next-generation project charters.",
    accent: "#E57A00",
    domain: "Continuous Evolution",
    icon: RotateCw,
    keyOutputs: ["Continuous Feedback Loop", "Curriculum Re-factoring", "Risk Model Tuning", "Re-entry into Stage 01"]
  }
];

export default function Helix10StageLifecycle() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const totalStages = LIFECYCLE_10_STAGES.length;

  // Single unidirectional linear progression (clamps cleanly from 0 to 9)
  const handleNext = () => {
    setActiveIdx((prev) => Math.min(totalStages - 1, prev + 1));
  };

  const handlePrev = () => {
    setActiveIdx((prev) => Math.max(0, prev - 1));
  };

  // Cursor Drag handlers for intuitive horizontal gestures
  const handleDrag = (_: any, info: PanInfo) => {
    setDragOffset(info.offset.x);
  };

  const handleDragEnd = (_: any, info: PanInfo) => {
    const swipeThreshold = 50;
    const velocityThreshold = 250;

    if (info.offset.x < -swipeThreshold || info.velocity.x < -velocityThreshold) {
      // Swiped Left -> Advance to next stage
      handleNext();
    } else if (info.offset.x > swipeThreshold || info.velocity.x > velocityThreshold) {
      // Swiped Right -> Go to previous stage
      handlePrev();
    }
    setDragOffset(0);
  };

  return (
    <div 
      ref={containerRef}
      className="w-full relative py-6 select-none"
    >
      {/* ───────────────────────────────────────────────────────────── */}
      {/* 3D HELIX STAGE SCENE (WITH HORIZONTAL DRAG & CURSOR GESTURE)  */}
      {/* ───────────────────────────────────────────────────────────── */}
      <motion.div 
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
        className="relative w-full h-[520px] sm:h-[550px] flex items-center justify-center overflow-visible cursor-grab active:cursor-grabbing touch-pan-y"
        style={{ perspective: '1400px' }}
      >
        {LIFECYCLE_10_STAGES.map((stage, idx) => {
          const Icon = stage.icon;

          // Pure linear distance along track
          const offset = idx - activeIdx;
          const isCurrent = offset === 0;

          // Render only within visible range of 3 steps to each side
          if (Math.abs(offset) > 3) return null;

          // Natural 3D Linear Helix Flow + Interactive cursor drag feedback
          const dynamicDragShift = Math.max(-100, Math.min(100, dragOffset * 0.4));
          const translateX = offset * 260 + dynamicDragShift;
          const translateY = offset * 20;
          const translateZ = -Math.abs(offset) * 125 + (isCurrent ? 40 : 0);
          const rotateY = -offset * 20 - (dragOffset * 0.04);
          const scale = isCurrent ? 1.03 : Math.max(0.72, 1 - Math.abs(offset) * 0.12);
          const opacity = isCurrent ? 1 : Math.max(0.35, 1 - Math.abs(offset) * 0.26);

          return (
            <motion.div
              key={stage.num}
              onClick={() => {
                if (Math.abs(dragOffset) < 10) {
                  setActiveIdx(idx);
                }
              }}
              layout
              animate={{
                x: translateX,
                y: translateY,
                z: translateZ,
                rotateY,
                scale,
                opacity,
              }}
              transition={{
                duration: 0.55,
                ease: [0.16, 1, 0.3, 1]
              }}
              style={{
                transformStyle: 'preserve-3d',
                zIndex: 30 - Math.abs(offset) * 5
              }}
              className={`absolute w-[320px] sm:w-[380px] h-[460px] sm:h-[480px] rounded-3xl p-6 sm:p-7 border flex flex-col justify-between backdrop-blur-2xl transition-colors duration-500 select-none ${
                isCurrent 
                  ? 'border-[#E57A00] bg-gradient-to-b from-[#18110b] via-[#0d0f17] to-[#06080e] shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_40px_rgba(229,122,0,0.32)] ring-1 ring-[#FFA439]/50' 
                  : 'border-white/10 bg-gradient-to-b from-[#0e111a]/90 to-[#07080f]/90 hover:border-white/30 shadow-[0_15px_40px_rgba(0,0,0,0.8)]'
              }`}
            >
              {/* Luxury Ambient Shimmer for Active Card */}
              <div 
                className="absolute inset-0 rounded-3xl pointer-events-none transition-opacity duration-700"
                style={{
                  background: isCurrent 
                    ? `radial-gradient(circle at 50% 0%, ${stage.accent}35 0%, transparent 65%)` 
                    : 'transparent'
                }}
              />

              {/* Reticle Top Specular Line */}
              <div 
                className="absolute top-0 left-0 right-0 h-[2px] transition-all duration-500"
                style={{
                  background: isCurrent 
                    ? `linear-gradient(90deg, transparent, ${stage.accent}, transparent)` 
                    : 'transparent'
                }}
              />

              {/* ───────────────────────────────────────────────────── */}
              {/* CARD TOP BAR: Number, Domain Pill & Blueprint Badge   */}
              {/* ───────────────────────────────────────────────────── */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span 
                    className="text-xs font-mono font-black px-2.5 py-1 rounded-full border shadow-sm"
                    style={{
                      borderColor: `${stage.accent}50`,
                      color: stage.accent,
                      backgroundColor: `${stage.accent}15`
                    }}
                  >
                    0{idx + 1}
                  </span>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-gray-400">
                    {stage.domain}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Mandate</span>
                </div>
              </div>

              {/* ───────────────────────────────────────────────────── */}
              {/* CARD BODY: Icon, Title, Purpose & Concrete Deliverable */}
              {/* ───────────────────────────────────────────────────── */}
              <div className="relative z-10 my-auto space-y-3.5 pointer-events-none">
                <div className="flex items-center gap-3.5">
                  <div 
                    className="w-13 h-13 p-3 rounded-2xl flex items-center justify-center border shadow-lg transition-transform duration-300"
                    style={{
                      borderColor: `${stage.accent}50`,
                      backgroundColor: `${stage.accent}15`,
                      color: stage.accent,
                      boxShadow: isCurrent ? `0 0 25px ${stage.accent}45` : 'none'
                    }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <span 
                      className="text-[10px] font-mono font-bold uppercase tracking-widest block"
                      style={{ color: stage.accent }}
                    >
                      {stage.shortDesc}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-white font-royal tracking-tight leading-none mt-0.5">
                      {stage.name}
                    </h3>
                  </div>
                </div>

                {/* Systemic Purpose */}
                <p className="text-xs sm:text-[13px] text-gray-200 leading-relaxed font-sans line-clamp-3">
                  {stage.purpose}
                </p>

                {/* Concrete Deliverable Box */}
                <div className="p-3 rounded-xl bg-black/60 border border-white/5 space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400 font-bold block">
                    Deliverable:
                  </span>
                  <p className="text-xs text-[#FFA439] font-mono font-medium leading-relaxed line-clamp-2">
                    &gt; {stage.deliverable}
                  </p>
                </div>

                {/* Verified Artifacts Chips */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400 font-bold block">
                    Verified Artifacts:
                  </span>
                  <div className="grid grid-cols-2 gap-1.5">
                    {stage.keyOutputs.map((item, oIdx) => (
                      <div 
                        key={oIdx}
                        className="flex items-center gap-1.5 text-[10px] font-mono text-gray-300 truncate bg-white/5 px-2 py-1 rounded-md border border-white/5"
                      >
                        <span 
                          className="w-1.5 h-1.5 rounded-full shrink-0" 
                          style={{ backgroundColor: stage.accent }}
                        />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* ───────────────────────────────────────────────────── */}
              {/* CARD FOOTER: Status, Spec Reference & Drag Hint      */}
              {/* ───────────────────────────────────────────────────── */}
              <div className="relative z-10 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-gray-400">
                <span>SPEC // #RKRF-STAGE-{stage.num}</span>
                {isCurrent ? (
                  <span className="text-[#FFA439] font-bold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E57A00] animate-ping" />
                    <span>Active Stage</span>
                  </span>
                ) : (
                  <span className="text-gray-400 group-hover:text-white transition-colors">
                    Click to Focus &rarr;
                  </span>
                )}
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* BOTTOM CONTROLS: PREV & NEXT ARROWS + DRAG GESTURE HINT       */}
      {/* ───────────────────────────────────────────────────────────── */}
      <div className="flex flex-col items-center justify-center gap-3 mt-8 z-20">
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={handlePrev}
            disabled={activeIdx === 0}
            aria-label="Previous Stage"
            className="w-12 h-12 rounded-full bg-[#0d1017] border border-white/10 hover:border-[#E57A00] disabled:opacity-30 disabled:hover:border-white/10 flex items-center justify-center text-gray-300 hover:text-white transition-all shadow-lg hover:shadow-[0_0_20px_rgba(229,122,0,0.5)] active:scale-95 cursor-pointer disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <span className="text-xs font-mono font-bold text-gray-400 tracking-widest uppercase">
            Stage <strong className="text-[#FFA439] font-bold text-sm">0{activeIdx + 1}</strong> / 10
          </span>

          <button
            onClick={handleNext}
            disabled={activeIdx === totalStages - 1}
            aria-label="Next Stage"
            className="w-12 h-12 rounded-full bg-[#0d1017] border border-white/10 hover:border-[#E57A00] disabled:opacity-30 disabled:hover:border-white/10 flex items-center justify-center text-gray-300 hover:text-white transition-all shadow-lg hover:shadow-[0_0_20px_rgba(229,122,0,0.5)] active:scale-95 cursor-pointer disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Drag Hint */}
        <div className="flex items-center gap-2 text-[11px] font-mono text-gray-500">
          <MoveHorizontal className="w-3.5 h-3.5 text-[#E57A00]/70" />
          <span>Click & drag horizontally or use arrow keys</span>
        </div>
      </div>

    </div>
  );
}
