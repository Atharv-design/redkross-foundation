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
    <div ref={containerRef} className={`mx-auto max-w-4xl px-4 sm:px-6 py-12 md:py-16 ${className}`}>
      <div className="relative ml-4 sm:ml-8">
        {/* Background static timeline line */}
        <div className="absolute inset-y-0 left-0 w-0.5 bg-white/10 rounded-full" />

        {/* Dynamic scroll-filling glowing timeline line */}
        <motion.div
          style={{ scaleY }}
          className="absolute inset-y-0 left-0 w-0.5 bg-gradient-to-b from-[#E57A00] via-[#FFA439] to-[#0FB7B7] origin-top rounded-full shadow-[0_0_12px_rgba(229,122,0,0.8)]"
        />

        {/* Milestone Items */}
        <div className="space-y-12 sm:space-y-16">
          {items.map(
            (
              { company, description, period, technologies, title, icon: Icon, verified, phase },
              index
            ) => {
              const MilestoneIcon = Icon || ShieldCheck;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: false, amount: 0.3, margin: "-30px" }}
                  transition={{
                    duration: 0.7,
                    delay: 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative pl-8 sm:pl-12 group"
                >
                  {/* Timeline Glowing Node / Icon */}
                  <div className="absolute -left-[18px] top-1.5 flex h-9 w-9 items-center justify-center rounded-full bg-[#0a0a0f] border-2 border-white/20 group-hover:border-[#E57A00] group-hover:shadow-[0_0_15px_rgba(229,122,0,0.5)] transition-all duration-300 z-10">
                    <MilestoneIcon className="h-4 w-4 text-gray-300 group-hover:text-[#FFA439] transition-colors" />
                  </div>

                  {/* Card Container */}
                  <div className="rounded-2xl p-6 sm:p-7 bg-[#0b0e14]/90 border border-white/10 hover:border-[#E57A00]/40 transition-all duration-300 shadow-xl backdrop-blur-sm relative overflow-hidden group-hover:shadow-[0_0_25px_rgba(229,122,0,0.12)]">
                    {/* Ambient subtle glow on hover */}
                    <div className="absolute top-0 right-0 w-48 h-48 bg-[#E57A00]/5 rounded-full blur-3xl pointer-events-none group-hover:bg-[#E57A00]/10 transition-colors" />

                    {/* Top bar: Period + Phase Badge */}
                    <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                      <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#FFA439]">
                        <Calendar className="h-3.5 w-3.5 text-[#E57A00]" />
                        <span>{period}</span>
                      </div>

                      {phase && (
                        <span className="text-[10px] font-mono font-semibold text-gray-400 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/10">
                          {phase}
                        </span>
                      )}
                    </div>

                    {/* Title & Organization / Context */}
                    <div className="mb-3">
                      <h3 className="font-bold text-xl sm:text-2xl text-white tracking-tight font-royal group-hover:text-amber-100 transition-colors">
                        {title}
                      </h3>
                      {company && (
                        <div className="flex items-center gap-2 mt-1.5 text-xs sm:text-sm font-mono text-gray-400">
                          <Building2 className="h-3.5 w-3.5 text-[#E57A00]" />
                          <span>{company}</span>
                        </div>
                      )}
                    </div>

                    {/* Milestone Detailed Copy */}
                    <p className="text-gray-300 text-sm leading-relaxed mb-5 font-sans">
                      {description}
                    </p>

                    {/* Verified Status & Technology / Focus Badges */}
                    <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                      {technologies && technologies.length > 0 && (
                        <div className="flex flex-wrap gap-1.5">
                          {technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="rounded-full bg-white/5 border border-white/10 text-gray-300 text-[11px] font-mono hover:bg-[#E57A00]/15 hover:border-[#E57A00]/30 hover:text-white transition-all py-0.5 px-2.5"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      )}

                      {verified && (
                        <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 font-semibold shrink-0">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Verified Public Record</span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}
