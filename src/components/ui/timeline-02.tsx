import * as React from "react";
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { 
  Building2, 
  Calendar, 
  CheckCircle2, 
  ShieldCheck, 
  Award, 
  GitBranch, 
  Layers, 
  Server, 
  Compass,
  LucideIcon
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export interface TimelineItem {
  title: string;
  company?: string;
  period: string;
  description: string;
  technologies?: string[];
  icon?: LucideIcon;
  verified?: boolean;
  phase?: string;
}

const defaultExperiences: TimelineItem[] = [
  {
    phase: "Phase 01",
    title: "Foundation Begins",
    company: "Panipat, Haryana",
    period: "April 2026",
    description:
      "RedKross begins work as a research, education and innovation organisation in Panipat, Haryana.",
    technologies: ["Research", "Education", "Innovation", "Founding Principles"],
    icon: Compass,
    verified: true,
  },
  {
    phase: "Phase 02",
    title: "Formal Incorporation",
    company: "Ministry of Corporate Affairs",
    period: "27 April 2026",
    description:
      "Formally registered under the Ministry of Corporate Affairs (CIN: U85499HR2026NPL144741).",
    technologies: ["CIN: U85499HR2026NPL144741", "Section 8 NPO", "Govt of India"],
    icon: Award,
    verified: true,
  },
  {
    phase: "Phase 03",
    title: "Public GitHub Organisation",
    company: "GitHub / Redkrossresearch",
    period: "10 June 2026",
    description:
      "The Redkrossresearch GitHub organisation was established to build public engineering and research repositories.",
    technologies: ["Open Source", "Public Repositories", "Code Integrity", "GitHub"],
    icon: GitBranch,
    verified: true,
  },
  {
    phase: "Phase 04",
    title: "Research & Platform Foundations",
    company: "Core Architecture Lab",
    period: "Q3 2026",
    description:
      "Development of programme structures, internship workflows, project infrastructure and governance rules.",
    technologies: ["Programme Structures", "Internship Workflows", "Governance Rules"],
    icon: Layers,
    verified: true,
  },
  {
    phase: "Phase 05",
    title: "Academy & Cyber Range Architecture",
    company: "Simulated Cyber Warfare Lab",
    period: "Q4 2026",
    description:
      "Architectural blueprint and isolation framework completed; planned capabilities structured for phased rollout.",
    technologies: ["Virtual Cyber Range", "Network Sandboxing", "Phase Rollout"],
    icon: Server,
    verified: true,
  },
  {
    phase: "Phase 06",
    title: "Longer-Term Expansion",
    company: "Global Research Affiliates",
    period: "2027 Onward",
    description:
      "Targeted expansion of research programmes, college affiliations, and peer-reviewed outputs.",
    technologies: ["College Affiliations", "Peer-Reviewed Papers", "AI Security Models"],
    icon: ShieldCheck,
    verified: true,
  },
];

export interface TimelineProps {
  items?: TimelineItem[];
  className?: string;
}

export default function Timeline({ items = defaultExperiences, className = "" }: TimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll linked tracking for the filling line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 75%"],
  });

  // Smooth spring physics for line progression
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <div ref={containerRef} className={`mx-auto max-w-6xl xl:max-w-7xl px-3 sm:px-6 py-12 md:py-16 ${className}`}>
      <div className="relative">
        {/* Background static timeline line */}
        <div className="absolute inset-y-0 left-4 sm:left-6 md:left-1/2 md:-translate-x-1/2 w-0.5 bg-white/10 rounded-full" />

        {/* Dynamic scroll-filling glowing timeline line */}
        <motion.div
          style={{ scaleY }}
          className="absolute inset-y-0 left-4 sm:left-6 md:left-1/2 md:-translate-x-1/2 w-0.5 bg-gradient-to-b from-[#E57A00] via-[#FFA439] to-[#0FB7B7] origin-top rounded-full shadow-[0_0_14px_rgba(229,122,0,0.85)] z-0"
        />

        {/* Origin / Start Node (RedKross Crest Logo in Circle) */}
        <div className="relative z-20 pb-10 sm:pb-14">
          <div className="absolute left-4 sm:left-6 md:left-1/2 -translate-x-1/2 -top-5 flex flex-col items-center group">
            <div className="relative flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#08090e] border-2 border-[#E57A00] p-1.5 shadow-[0_0_22px_rgba(229,122,0,0.7),inset_0_0_12px_rgba(229,122,0,0.3)] transition-all duration-300 group-hover:scale-110">
              <span className="absolute -inset-1 rounded-full border border-[#FFA439]/40 animate-ping pointer-events-none" style={{ animationDuration: '3.5s' }} />
              <img
                src="/assets/crest-clean-circle.png"
                alt="RedKross Origin"
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <span className="mt-2 text-[10px] font-mono uppercase tracking-widest text-[#FFA439] font-bold bg-[#08090e]/95 px-2.5 py-0.5 rounded-full border border-[#E57A00]/40 shadow-sm backdrop-blur-sm">
              Genesis
            </span>
          </div>
        </div>

        {/* Milestone Items */}
        <div className="space-y-16 sm:space-y-20 md:space-y-28">
          {items.map(
            (
              { company, description, period, technologies, title, icon: Icon, verified, phase },
              index
            ) => {
              const MilestoneIcon = Icon || ShieldCheck;
              const isRight = index % 2 === 0; // Card 1 right, Card 2 left, Card 3 right... (matching reference diagram)

              return (
                <div
                  key={index}
                  className={`relative flex items-center md:items-start group ${
                    isRight ? "md:justify-end" : "md:justify-start"
                  }`}
                >
                  {/* Central Node / Icon */}
                  <div className="absolute left-4 sm:left-6 md:left-1/2 -translate-x-1/2 top-10 flex h-11 w-11 items-center justify-center rounded-full bg-[#0a0a0f] border-2 border-white/20 group-hover:border-[#E57A00] group-hover:shadow-[0_0_20px_rgba(229,122,0,0.65)] transition-all duration-300 z-20">
                    <MilestoneIcon className="h-4.5 w-4.5 text-gray-300 group-hover:text-[#FFA439] transition-colors" />
                  </div>

                  {/* Desktop Horizontal Connecting Branch Line (Centered to Circle Node Midpoint: 62px) */}
                  <div
                    className={`hidden md:block absolute top-[61px] h-[2px] transition-all duration-300 z-10 ${
                      isRight
                        ? "left-1/2 w-[2.5rem] xl:w-[3rem] bg-gradient-to-r from-[#E57A00] to-white/20 group-hover:from-[#FFA439] group-hover:to-[#E57A00] group-hover:shadow-[0_0_8px_rgba(229,122,0,0.6)]"
                        : "right-1/2 w-[2.5rem] xl:w-[3rem] bg-gradient-to-l from-[#E57A00] to-white/20 group-hover:from-[#FFA439] group-hover:to-[#E57A00] group-hover:shadow-[0_0_8px_rgba(229,122,0,0.6)]"
                    }`}
                  />

                  {/* Mobile Horizontal Connecting Branch Line (Centered to Circle Node Midpoint: 62px) */}
                  <div className="block md:hidden absolute left-4 sm:left-6 top-[61px] w-8 sm:w-10 h-[2px] bg-gradient-to-r from-[#E57A00] to-white/20 group-hover:from-[#FFA439] z-10" />

                  {/* Animated Card Wrapper: Horizontally Wider & Responsive */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: isRight ? 40 : -40,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      y: 0,
                    }}
                    viewport={{ once: false, amount: 0.25, margin: "-30px" }}
                    transition={{
                      duration: 0.7,
                      delay: 0.05,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="w-full md:w-[calc(50%-2.5rem)] xl:w-[calc(50%-3rem)] pl-12 sm:pl-16 md:pl-0"
                  >
                    {/* Card Container: Spacious, Tall, Editorial */}
                    <div className="rounded-2xl p-7 sm:p-9 md:p-10 min-h-[290px] sm:min-h-[320px] flex flex-col justify-between bg-[#0b0e14]/90 border border-white/10 hover:border-[#E57A00]/40 transition-all duration-300 shadow-xl backdrop-blur-sm relative overflow-hidden group-hover:shadow-[0_0_30px_rgba(229,122,0,0.18)] group-hover:translate-y-[-3px]">
                      {/* Ambient subtle glow on hover */}
                      <div className="absolute top-0 right-0 w-56 h-56 bg-[#E57A00]/5 rounded-full blur-3xl pointer-events-none group-hover:bg-[#E57A00]/12 transition-colors" />

                      {/* Top Section */}
                      <div>
                        {/* Top bar: Period + Phase Badge */}
                        <div className="flex items-center justify-between mb-5 flex-wrap gap-2">
                          <div className="flex items-center gap-2 text-xs sm:text-sm font-mono font-bold text-[#FFA439]">
                            <Calendar className="h-4 w-4 text-[#E57A00]" />
                            <span>{period}</span>
                          </div>

                          {phase && (
                            <span className="text-[11px] font-mono font-semibold text-gray-400 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                              {phase}
                            </span>
                          )}
                        </div>

                        {/* Title & Organization / Context */}
                        <div className="mb-4">
                          <h3 className="font-bold text-2xl sm:text-3xl text-white tracking-tight font-royal group-hover:text-amber-100 transition-colors mb-2">
                            {title}
                          </h3>
                          {company && (
                            <div className="flex items-center gap-2 mt-2 text-xs sm:text-sm font-mono text-gray-400">
                              <Building2 className="h-4 w-4 text-[#E57A00]" />
                              <span>{company}</span>
                            </div>
                          )}
                        </div>

                        {/* Milestone Detailed Copy with generous leading */}
                        <p className="text-gray-300/90 text-sm sm:text-[15px] leading-relaxed mb-6 font-sans">
                          {description}
                        </p>
                      </div>

                      {/* Bottom Section: Verified Status & Technology / Focus Badges */}
                      <div className="pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-3.5 mt-auto">
                        {technologies && technologies.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {technologies.map((tech) => (
                              <Badge
                                key={tech}
                                variant="secondary"
                                className="rounded-full bg-white/5 border border-white/10 text-gray-300 text-[12px] font-mono hover:bg-[#E57A00]/15 hover:border-[#E57A00]/30 hover:text-white transition-all py-1 px-3"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        )}

                        {verified && (
                          <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 font-semibold shrink-0">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                            <span>Verified Public Record</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            }
          )}
        </div>

        {/* Terminal / Stop Node (RedKross Crest Logo in Circle) */}
        <div className="relative z-20 pt-12 sm:pt-16">
          <div className="absolute left-4 sm:left-6 md:left-1/2 -translate-x-1/2 -bottom-5 flex flex-col items-center group">
            <div className="relative flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#08090e] border-2 border-[#0FB7B7] p-1.5 shadow-[0_0_22px_rgba(15,183,183,0.65),inset_0_0_12px_rgba(15,183,183,0.25)] transition-all duration-300 group-hover:scale-110">
              <span className="absolute -inset-1 rounded-full border border-[#0FB7B7]/40 animate-pulse pointer-events-none" />
              <img
                src="/assets/crest-clean-circle.png"
                alt="RedKross Horizon"
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <span className="mt-2 text-[10px] font-mono uppercase tracking-widest text-[#0FB7B7] font-bold bg-[#08090e]/95 px-2.5 py-0.5 rounded-full border border-[#0FB7B7]/40 shadow-sm backdrop-blur-sm">
              Present & Beyond
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
