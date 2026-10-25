import React, { useRef } from 'react';
import { 
  Cpu, 
  Award, 
  ShieldCheck, 
  BookOpen, 
  Layers, 
  ExternalLink,
  GitBranch,
  Terminal,
  Activity,
  FileCode,
  CheckCircle,
  Binary,
  Radio,
  Lock
} from 'lucide-react';
import AnimatedHeading from './AnimatedHeading';
import GradientHoverCard from './motion/GradientHoverCard';

export default function AchievementsSection() {
  const achievements = [
    {
      id: "ach-1",
      number: "01",
      category: "Platform Engineering",
      subtitle: "Technical Milestone",
      title: "Specialized Security & AI Platforms",
      description: "Successfully built reproducible defensive systems, automated scanners, firmware analysis pipelines, and deepfake detection engines designed for real-world threat emulation.",
      tags: [
        { name: "Defensive Telemetry", icon: Radio },
        { name: "Automated Scanners", icon: Terminal },
        { name: "Firmware Analysis", icon: Binary },
        { name: "Deepfake Detection", icon: Cpu }
      ],
      accent: "#E57A00",
      accentRgb: "229, 122, 0",
      type: "platform"
    },
    {
      id: "ach-2",
      number: "02",
      category: "Workforce & Talent",
      subtitle: "Educational Impact",
      title: "Hands-on Research Internship Ecosystem",
      description: "Delivered rigorous, project-driven cohorts where students shipped demonstrable software capstones and earned verifiable cryptographic credentials backed by verifiable repository commits.",
      tags: [
        { name: "1,250+ Students Trained", icon: Award },
        { name: "Cryptographic Credentials", icon: Lock },
        { name: "Production Capstones", icon: GitBranch },
        { name: "Cohort Mentorship", icon: FileCode }
      ],
      accent: "#FFA439",
      accentRgb: "255, 164, 57",
      type: "education"
    },
    {
      id: "ach-3",
      number: "03",
      category: "Behavioral Defense",
      subtitle: "Interdisciplinary Research",
      title: "Human Factors & Cyber Psychology Lab",
      description: "Pioneered empirical studies into human security behavior, SOC analyst burnout dynamics, and habit-forming security awareness, bridging the gap between behavioral psychology and defensive engineering.",
      tags: [
        { name: "SOC Burnout Modeling", icon: Activity },
        { name: "Phishing Cognition", icon: ShieldCheck },
        { name: "Behavioral Defenses", icon: Cpu },
        { name: "Empirical Studies", icon: FileCode }
      ],
      accent: "#0FB7B7",
      accentRgb: "15, 183, 183",
      type: "psychology"
    },
    {
      id: "ach-4",
      number: "04",
      category: "Architecture Standard",
      subtitle: "Institutional Governance",
      title: "Master Architecture Specification",
      description: "Formally published end-to-end governance rules separating vulnerable lab environments from operational control planes, creating an audit-ready blueprint for academic and defense cyber ranges.",
      tags: [
        { name: "16-Page Standard", icon: BookOpen },
        { name: "Zero-Trust Lab Isolation", icon: Lock },
        { name: "Control Plane Rules", icon: GitBranch },
        { name: "Open Governance Model", icon: CheckCircle }
      ],
      accent: "#38BDF8",
      accentRgb: "56, 189, 248",
      type: "architecture"
    }
  ];

  const cardRefs = useRef([]);

  const scrollToCard = (idx) => {
    if (cardRefs.current[idx]) {
      const el = cardRefs.current[idx];
      const offset = 90 + idx * 48;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  // Render authentic achievement-specific visual
  const renderAchievementVisual = (item) => {
    switch (item.type) {
      case 'platform':
        return (
          <div className="w-full bg-[#03060a]/90 rounded-2xl p-5 border border-white/10 relative overflow-hidden flex flex-col justify-between h-full">
            {/* Subtle background tech lines */}
            <div className="absolute inset-0 bg-[radial-gradient(#e57a0010_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none"></div>

            <div className="relative z-10 flex items-center justify-between pb-3 border-b border-white/10 text-[10px] font-mono text-gray-400">
              <span className="text-[#E57A00] font-bold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E57A00] animate-ping"></span>
                DEFENSE PIPELINE
              </span>
              <span>4 CONNECTED MODULES</span>
            </div>

            {/* Visual Process Flow */}
            <div className="relative z-10 py-5 grid grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-[#E57A00]/30 flex flex-col justify-between">
                <div className="flex items-center justify-between text-gray-400 mb-2">
                  <span className="text-[10px]">01 // TELEMETRY</span>
                  <Radio className="w-3.5 h-3.5 text-[#E57A00]" />
                </div>
                <div className="text-white font-bold text-xs">Event Collection</div>
                <div className="text-[10px] text-gray-400 mt-1">Multi-source logs</div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.03] border border-[#FFA439]/30 flex flex-col justify-between">
                <div className="flex items-center justify-between text-gray-400 mb-2">
                  <span className="text-[10px]">02 // SCANNERS</span>
                  <Terminal className="w-3.5 h-3.5 text-[#FFA439]" />
                </div>
                <div className="text-white font-bold text-xs">Automated CVE Scan</div>
                <div className="text-[10px] text-gray-400 mt-1">Vulnerability audit</div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.03] border border-[#0FB7B7]/30 flex flex-col justify-between">
                <div className="flex items-center justify-between text-gray-400 mb-2">
                  <span className="text-[10px]">03 // FIRMWARE</span>
                  <Binary className="w-3.5 h-3.5 text-[#0FB7B7]" />
                </div>
                <div className="text-white font-bold text-xs">IoT Disassembly</div>
                <div className="text-[10px] text-gray-400 mt-1">Binary inspection</div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.03] border border-[#38BDF8]/30 flex flex-col justify-between">
                <div className="flex items-center justify-between text-gray-400 mb-2">
                  <span className="text-[10px]">04 // AI DETECT</span>
                  <Cpu className="w-3.5 h-3.5 text-[#38BDF8]" />
                </div>
                <div className="text-white font-bold text-xs">Deepfake Engine</div>
                <div className="text-[10px] text-gray-400 mt-1">Synthetic media filter</div>
              </div>
            </div>

            <div className="relative z-10 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-gray-400">
              <span className="text-gray-300">Public Security Architecture</span>
              <span className="text-[#E57A00] font-semibold">Open Source Defenses</span>
            </div>
          </div>
        );

      case 'education':
        return (
          <div className="w-full bg-[#03060a]/90 rounded-2xl p-5 border border-white/10 relative overflow-hidden flex flex-col justify-between h-full">
            <div className="absolute inset-0 bg-[radial-gradient(#ffa43910_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none"></div>

            <div className="relative z-10 flex items-center justify-between pb-3 border-b border-white/10 text-[10px] font-mono text-gray-400">
              <span className="text-[#FFA439] font-bold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFA439]"></span>
                COHORT IMPACT PIPELINE
              </span>
              <span>1,250+ LEARNERS</span>
            </div>

            <div className="relative z-10 py-5 space-y-3 font-mono text-xs">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-white font-bold">Practical Cohort Sprints</div>
                  <div className="text-[10px] text-gray-400 mt-0.5">8+ specialized batches conducted</div>
                </div>
                <Award className="w-5 h-5 text-[#FFA439] shrink-0 ml-2" />
              </div>

              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-white font-bold">Cryptographic Credentials</div>
                  <div className="text-[10px] text-gray-400 mt-0.5">Independently verifiable project certificates</div>
                </div>
                <Lock className="w-5 h-5 text-emerald-400 shrink-0 ml-2" />
              </div>
            </div>

            <div className="relative z-10 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-gray-400">
              <span className="text-gray-300">Verified Project Repositories</span>
              <span className="text-emerald-400 font-semibold">100% Practical</span>
            </div>
          </div>
        );

      case 'psychology':
        return (
          <div className="w-full bg-[#020b10]/90 rounded-2xl p-5 border border-white/10 relative overflow-hidden flex flex-col justify-between h-full">
            <div className="absolute inset-0 bg-[radial-gradient(#0fb7b712_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none"></div>

            <div className="relative z-10 flex items-center justify-between pb-3 border-b border-white/10 text-[10px] font-mono text-gray-400">
              <span className="text-[#0FB7B7] font-bold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0FB7B7] animate-pulse"></span>
                HUMAN FACTORS MODEL
              </span>
              <span>COGNITIVE DEFENSE</span>
            </div>

            <div className="relative z-10 py-5 space-y-3 font-mono text-xs">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-[#0FB7B7]/30 flex items-center justify-between">
                <div>
                  <div className="text-white font-bold">SOC Analyst Fatigue Study</div>
                  <div className="text-[10px] text-gray-400 mt-0.5">Cognitive workload &amp; alert desensitization</div>
                </div>
                <Activity className="w-5 h-5 text-[#0FB7B7] shrink-0 ml-2" />
              </div>

              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-white font-bold">Habit-Forming Security</div>
                  <div className="text-[10px] text-gray-400 mt-0.5">Behavioral interventions replacing checkboxes</div>
                </div>
                <ShieldCheck className="w-5 h-5 text-cyan-300 shrink-0 ml-2" />
              </div>
            </div>

            <div className="relative z-10 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-gray-400">
              <span className="text-gray-300">Interdisciplinary Research Wing</span>
              <span className="text-[#0FB7B7] font-semibold">Published Insights</span>
            </div>
          </div>
        );

      case 'architecture':
        return (
          <div className="w-full bg-[#03070d]/90 rounded-2xl p-5 border border-white/10 relative overflow-hidden flex flex-col justify-between h-full">
            <div className="absolute inset-0 bg-[radial-gradient(#38bdf810_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none"></div>

            <div className="relative z-10 flex items-center justify-between pb-3 border-b border-white/10 text-[10px] font-mono text-gray-400">
              <span className="text-[#38BDF8] font-bold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]"></span>
                GOVERNANCE BLUEPRINT
              </span>
              <span>16-PAGE SPEC</span>
            </div>

            <div className="relative z-10 py-4 font-mono text-xs">
              {/* Architecture Boundary Illustration */}
              <div className="p-3.5 rounded-xl bg-black/60 border border-white/10 space-y-2.5">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-gray-300 font-bold">Operational Control Plane</span>
                  <span className="text-emerald-400 text-[10px] bg-emerald-500/10 px-1.5 py-0.5 rounded">Isolated</span>
                </div>
                
                <div className="w-full flex items-center justify-center my-1 text-[9px] text-[#38BDF8] border-y border-dashed border-[#38BDF8]/40 py-1">
                  ══ Zero-Trust Security Boundary ══
                </div>

                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-gray-400">Vulnerable Attack Labs</span>
                  <span className="text-[#FFA439] text-[10px] bg-orange-500/10 px-1.5 py-0.5 rounded">Sandboxed</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-gray-400">
              <span className="text-gray-300">Standardized Framework</span>
              <span className="text-[#38BDF8] font-semibold">Audit Specification</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="achievements" className="py-28 px-4 sm:px-6 relative bg-[#040406] border-t border-white/5 select-none">
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#E57A00]/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#0FB7B7]/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute inset-0 cyber-grid-bg opacity-25 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Heading (Centered) */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="mb-4">
            <AnimatedHeading
              text="Major Achievements &amp; Verified Output"
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight"
            />
          </div>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Measurable accomplishments spanning technical platforms, student capstones, behavioral security research, and formal architecture standards.
          </p>

          <div className="inline-flex items-center gap-2 mt-6 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-gray-400">
            <Layers className="w-3.5 h-3.5 text-[#E57A00]" />
            <span>Interactive Layered Stack &bull; Scroll to inspect notebooks</span>
          </div>
        </div>

        {/* Vertical Sticky Stacking Notebook Sequence */}
        <div className="relative pb-24">
          {achievements.map((item, idx) => {
            const stickyTop = `calc(5.5rem + ${idx * 46}px)`;
            const zIndex = 10 + idx * 10;

            return (
              <div
                key={item.id}
                ref={(el) => (cardRefs.current[idx] = el)}
                style={{
                  top: stickyTop,
                  zIndex: zIndex
                }}
                className={`sticky transition-all duration-300 ${
                  idx < achievements.length - 1 ? 'mb-40 sm:mb-52' : 'mb-8'
                }`}
              >
                {/* Physical Layered Notebook Card with Cursor Spotlight */}
                <GradientHoverCard 
                  glowColor={`rgba(${item.accentRgb}, 0.14)`}
                  borderColor={`rgba(${item.accentRgb}, 0.35)`}
                  className="rounded-3xl bg-[#080B10]/95 backdrop-blur-2xl border border-white/10 shadow-[0_-14px_45px_rgba(0,0,0,0.95)] hover:border-white/20 transition-all duration-300 overflow-hidden group"
                >
                  {/* REDESIGNED SIMPLIFIED HEADER (Subtle, elegant divider, no uppercase clutter) */}
                  <div 
                    onClick={() => scrollToCard(idx)}
                    className="flex items-center justify-between px-6 sm:px-8 py-3.5 bg-[#0b0f17] border-b border-white/10 cursor-pointer hover:bg-[#101622] transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      {/* Orange milestone indicator */}
                      <span 
                        className="w-2.5 h-2.5 rounded-full shadow-sm shrink-0"
                        style={{ backgroundColor: item.accent }}
                      ></span>

                      <span className="text-xs font-mono font-bold text-gray-200">
                        {item.number}
                      </span>

                      <span className="text-gray-500 text-xs font-mono">/</span>

                      <span className="text-xs font-mono font-semibold text-gray-300">
                        {item.category}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="hidden sm:inline-block text-xs font-mono text-gray-400">
                        {item.subtitle}
                      </span>
                    </div>
                  </div>

                  {/* Card Content Interior: 2-Column Balanced Composition */}
                  <div className="p-6 sm:p-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
                      
                      {/* Left Column: Title (Hero Focal Point), Description, Capability Chips */}
                      <div className="lg:col-span-7 flex flex-col justify-between">
                        <div>
                          {/* THE ACHIEVEMENT TITLE AS THE PRIMARY FOCAL POINT */}
                          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4 leading-tight tracking-tight group-hover:text-gray-100 transition-colors">
                            {item.title}
                          </h3>

                          {/* Concise, Readable Supporting Description */}
                          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                            {item.description}
                          </p>
                        </div>

                        {/* UPGRADED CAPABILITY CHIPS (Clean chips, small icons, natural wrapping) */}
                        <div>
                          <div className="text-[11px] font-mono uppercase tracking-wider text-gray-400 mb-3">
                            Documented Scope &amp; Deliverables:
                          </div>
                          <div className="flex flex-wrap gap-2.5">
                            {item.tags.map((tagObj) => {
                              const TagIcon = tagObj.icon;
                              return (
                                <span
                                  key={tagObj.name}
                                  className="px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs font-mono text-gray-300 flex items-center gap-2 hover:border-white/20 transition-colors"
                                >
                                  <TagIcon className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                                  <span>{tagObj.name}</span>
                                </span>
                              );
                            })}
                          </div>
                        </div>
                      </div>

                      {/* Right Column: INTEGRATED ACHIEVEMENT-SPECIFIC VISUAL & OUTCOME SUMMARY */}
                      <div className="lg:col-span-5 flex flex-col justify-center">
                        {renderAchievementVisual(item)}
                      </div>

                    </div>
                  </div>

                </GradientHoverCard>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
