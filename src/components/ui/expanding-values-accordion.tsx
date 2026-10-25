import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Scale, 
  Target, 
  BookOpen, 
  Lock, 
  Users, 
  Sparkles, 
  CheckCircle2
} from 'lucide-react';

export interface ValueItem {
  name: string;
  description: string;
  tagline?: string;
}

const valueMeta = [
  {
    icon: Scale,
    accent: "#E57A00",
    gradient: "from-[#221305] via-[#100b07] to-[#060608]",
    tagline: "Honesty & Limitation Awareness",
    badge: "Ethical Foundation"
  },
  {
    icon: Target,
    accent: "#FFA439",
    gradient: "from-[#221805] via-[#110c06] to-[#060608]",
    tagline: "Empirical Evidence & Validation",
    badge: "Scientific Rigour"
  },
  {
    icon: BookOpen,
    accent: "#0FB7B7",
    gradient: "from-[#051c1c] via-[#060f12] to-[#060608]",
    tagline: "Democratising Cyber Knowledge",
    badge: "Public Access"
  },
  {
    icon: Lock,
    accent: "#10B981",
    gradient: "from-[#051f15] via-[#06120e] to-[#060608]",
    tagline: "Privacy by Design & Safety",
    badge: "Responsible Practice"
  },
  {
    icon: Users,
    accent: "#38BDF8",
    gradient: "from-[#051824] via-[#060e17] to-[#060608]",
    tagline: "Respect, Inclusion & Mentorship",
    badge: "Human-Centric"
  },
  {
    icon: Sparkles,
    accent: "#F59E0B",
    gradient: "from-[#221605] via-[#100d07] to-[#060608]",
    tagline: "Iterative Learning & Agility",
    badge: "Continuous Evolution"
  }
];

interface ExpandingValuesAccordionProps {
  values: ValueItem[];
}

export default function ExpandingValuesAccordion({ values }: ExpandingValuesAccordionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full select-none">
      {/* 3D Perspective Container: Compact height & tight refined max width */}
      <div 
        className="hidden md:flex items-stretch justify-center gap-2.5 lg:gap-3 py-4 px-2 max-w-5xl mx-auto overflow-visible"
        style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}
      >
        {values.map((val, idx) => {
          const meta = valueMeta[idx] || valueMeta[0];
          const Icon = meta.icon;
          const isActive = activeIndex === idx;
          const isLeft = idx < activeIndex;
          const isRight = idx > activeIndex;

          // 3D Angle Calculation matching reference video
          const rotateY = isActive ? 0 : isLeft ? 24 : -24;
          const translateZ = isActive ? 25 : -12;

          return (
            <motion.div
              key={val.name}
              onMouseEnter={() => setActiveIndex(idx)}
              onClick={() => setActiveIndex(idx)}
              layout
              transition={{
                layout: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1]
              }}
              style={{
                transformStyle: 'preserve-3d',
                transformOrigin: isLeft ? 'right center' : isRight ? 'left center' : 'center center'
              }}
              animate={{
                rotateY,
                z: translateZ,
                scale: isActive ? 1.01 : 0.98
              }}
              className={`relative rounded-2xl cursor-pointer transition-colors duration-500 overflow-hidden flex flex-col justify-between ${
                isActive 
                  ? 'flex-[3] lg:flex-[3.2] min-w-[280px] lg:min-w-[340px]' 
                  : 'flex-[0.9] min-w-[70px] lg:min-w-[85px] max-w-[105px]'
              } h-[380px] p-5 lg:p-6 border ${
                isActive 
                  ? 'border-[#E57A00]/70 shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_35px_rgba(229,122,0,0.22)]' 
                  : 'border-white/10 hover:border-white/30 shadow-[0_10px_25px_rgba(0,0,0,0.5)]'
              } bg-gradient-to-b ${meta.gradient} backdrop-blur-2xl`}
            >
              {/* Luxury Ambient Shimmer & Flare */}
              <div 
                className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ${
                  isActive ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${meta.accent}25 0%, transparent 70%)`
                }}
              />

              {/* Reticle & Spec Line at Top */}
              <div className="absolute top-0 left-0 right-0 h-[2px] transition-all duration-500"
                style={{
                  background: isActive 
                    ? `linear-gradient(90deg, transparent, ${meta.accent}, transparent)` 
                    : 'transparent'
                }}
              />

              {/* ACTIVE CARD CONTENT */}
              {isActive ? (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.08 }}
                  className="flex flex-col justify-between h-full relative z-10"
                >
                  {/* Top Bar: Icon + Badge + Number */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div 
                        className="w-11 h-11 rounded-xl flex items-center justify-center border shadow-md transition-transform duration-300 group-hover:scale-105"
                        style={{
                          backgroundColor: `${meta.accent}15`,
                          borderColor: `${meta.accent}40`,
                          color: meta.accent,
                          boxShadow: `0 0 20px ${meta.accent}30`
                        }}
                      >
                        <Icon className="w-5 h-5" />
                      </div>

                      <div className="flex items-center gap-2">
                        <span 
                          className="text-[9px] font-mono px-2.5 py-0.5 rounded-full border font-bold uppercase tracking-wider"
                          style={{
                            backgroundColor: `${meta.accent}15`,
                            borderColor: `${meta.accent}30`,
                            color: meta.accent
                          }}
                        >
                          {meta.badge}
                        </span>
                        <span className="text-[11px] font-mono text-gray-400 font-bold">
                          0{idx + 1}
                        </span>
                      </div>
                    </div>

                    {/* Subtitle / Focus */}
                    <div 
                      className="text-[11px] font-mono font-bold uppercase tracking-wider mb-1.5"
                      style={{ color: meta.accent }}
                    >
                      {meta.tagline}
                    </div>

                    {/* Large Title */}
                    <h3 className="text-2xl lg:text-3xl font-black text-white font-royal tracking-tight mb-2.5">
                      {val.name}
                    </h3>

                    {/* Rich Descriptive Copy with compact crisp leading */}
                    <p className="text-gray-300 text-xs lg:text-[13px] leading-relaxed font-sans max-w-md">
                      {val.description}
                    </p>
                  </div>

                  {/* Bottom Metadata & Verification Strip */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono">
                    <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Verified Conduct Pillar</span>
                    </div>

                    <span className="text-gray-400 text-[10px]">
                      REF: #RKRF-VAL-0{idx + 1}
                    </span>
                  </div>
                </motion.div>
              ) : (
                /* COLLAPSED 3D SLICE CONTENT */
                <div className="flex flex-col items-center justify-between h-full relative z-10 py-1">
                  {/* Top Icon */}
                  <div 
                    className="w-9 h-9 rounded-lg flex items-center justify-center border transition-all"
                    style={{
                      backgroundColor: `${meta.accent}10`,
                      borderColor: `${meta.accent}25`,
                      color: meta.accent
                    }}
                  >
                    <Icon className="w-4 h-4" />
                  </div>

                  {/* Vertical Rotated Title */}
                  <div className="flex-1 flex items-center justify-center my-4">
                    <span 
                      className="text-xs font-royal font-bold text-gray-300 tracking-wider uppercase whitespace-nowrap transition-colors"
                      style={{
                        writingMode: 'vertical-rl',
                        transform: 'rotate(180deg)'
                      }}
                    >
                      {val.name}
                    </span>
                  </div>

                  {/* Bottom Index */}
                  <div className="text-[10px] font-mono text-gray-400 font-bold">
                    0{idx + 1}
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* MOBILE RESPONSIVE CAROUSEL / STACK */}
      <div className="flex md:hidden flex-col gap-3 px-2">
        {values.map((val, idx) => {
          const meta = valueMeta[idx] || valueMeta[0];
          const Icon = meta.icon;

          return (
            <div
              key={val.name}
              className={`p-5 rounded-2xl bg-gradient-to-b ${meta.gradient} border border-white/10 shadow-lg relative overflow-hidden`}
            >
              <div className="flex items-center justify-between mb-3">
                <div 
                  className="w-9 h-9 rounded-xl flex items-center justify-center border"
                  style={{
                    backgroundColor: `${meta.accent}15`,
                    borderColor: `${meta.accent}40`,
                    color: meta.accent
                  }}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-xs font-mono font-bold text-gray-400">
                  0{idx + 1}
                </span>
              </div>

              <h4 className="text-lg font-bold text-white font-royal tracking-tight mb-1.5">
                {val.name}
              </h4>
              <p className="text-xs text-gray-300 leading-relaxed font-sans mb-3">
                {val.description}
              </p>

              <div className="pt-2.5 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-emerald-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Verified Standard</span>
                </span>
                <span className="text-gray-400">{meta.badge}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
