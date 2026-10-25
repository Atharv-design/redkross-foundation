import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export interface ProcessStage {
  step: number;
  title: string;
  description: string;
}

interface HorizontalProcessStagesProps {
  stages: ProcessStage[];
  className?: string;
}

export default function HorizontalProcessStages({
  stages,
  className = "",
}: HorizontalProcessStagesProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll linked tracking for the horizontal filling line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "end 65%"],
  });

  // Smooth spring physics for line progression
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <div ref={containerRef} className={`relative w-full ${className}`}>
      
      {/* ───────────────────────────────────────────────────────────── */}
      {/* 1. DESKTOP CONNECTING PROGRESS LINE & REDKROSS START/END NODES */}
      {/* ───────────────────────────────────────────────────────────── */}
      <div className="relative mb-10 hidden lg:block pt-2">
        {/* Continuous background track line connecting through all nodes from Start to Delivery */}
        <div className="absolute top-[22px] left-6 right-6 h-[2px] bg-white/10 rounded-full" />

        {/* Dynamic scroll-filling glowing progress line */}
        <motion.div
          style={{ scaleX }}
          className="absolute top-[22px] left-6 right-6 h-[2px] bg-gradient-to-r from-[#E57A00] via-[#FFA439] to-[#0FB7B7] origin-left rounded-full shadow-[0_0_14px_rgba(229,122,0,0.85)] z-0"
        />

        {/* Flex container evenly aligning: [Start Node] + [5 Stage Nodes] + [Delivery Node] */}
        <div className="relative z-10 flex items-start justify-between">
          
          {/* 1. Origin / Start Node (RedKross Crest Logo) */}
          <div className="flex flex-col items-center group w-12">
            <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-[#08090e] border-2 border-[#E57A00] p-1.5 shadow-[0_0_20px_rgba(229,122,0,0.7),inset_0_0_10px_rgba(229,122,0,0.3)] transition-all duration-300 group-hover:scale-110">
              <span className="absolute -inset-1 rounded-full border border-[#FFA439]/40 animate-ping pointer-events-none" style={{ animationDuration: '3.5s' }} />
              <img
                src="/assets/crest-clean-circle.png"
                alt="RedKross Origin"
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <span className="mt-2 text-[9px] font-mono uppercase tracking-widest text-[#FFA439] font-bold bg-[#08090e]/95 px-2 py-0.5 rounded-full border border-[#E57A00]/40 shadow-sm backdrop-blur-sm whitespace-nowrap">
              Start
            </span>
          </div>

          {/* 2. 5 Central Stage Nodes (01 to 05) with exact perpendicular branch line to card center */}
          {stages.map((stage, idx) => (
            <div key={stage.step} className="flex-1 flex flex-col items-center relative">
              {/* Branch line running straight down from circle center towards the card */}
              <div className="w-[2px] h-8 bg-gradient-to-b from-[#E57A00]/70 to-white/10 mt-11" />

              {/* Step Circle Node */}
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{
                  delay: idx * 0.12,
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="absolute top-0 w-11 h-11 rounded-full bg-[#080a10] border-2 border-white/20 hover:border-[#E57A00] flex items-center justify-center font-mono font-black text-xs text-[#FFA439] shadow-lg hover:shadow-[0_0_20px_rgba(229,122,0,0.6)] transition-all duration-300 z-10"
              >
                0{stage.step}
              </motion.div>
            </div>
          ))}

          {/* 3. Terminal / Delivery Node (RedKross Crest Logo) */}
          <div className="flex flex-col items-center group w-12">
            <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-[#08090e] border-2 border-[#0FB7B7] p-1.5 shadow-[0_0_20px_rgba(15,183,183,0.65),inset_0_0_10px_rgba(15,183,183,0.25)] transition-all duration-300 group-hover:scale-110">
              <span className="absolute -inset-1 rounded-full border border-[#0FB7B7]/40 animate-pulse pointer-events-none" />
              <img
                src="/assets/crest-clean-circle.png"
                alt="RedKross Horizon"
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <span className="mt-2 text-[9px] font-mono uppercase tracking-widest text-[#0FB7B7] font-bold bg-[#08090e]/95 px-2 py-0.5 rounded-full border border-[#0FB7B7]/40 shadow-sm backdrop-blur-sm whitespace-nowrap">
              Delivery
            </span>
          </div>

        </div>
      </div>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* 2. 5 STAGE PROCESS CARDS (Reveal one by one as user scrolls)   */}
      {/* ───────────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {stages.map((stage, idx) => (
          <motion.div
            key={stage.step}
            initial={{ opacity: 0, y: 35, scale: 0.94 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.25, margin: "-30px" }}
            transition={{
              duration: 0.65,
              delay: idx * 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="p-5 sm:p-6 rounded-2xl bg-[#090c14]/90 border border-white/10 hover:border-[#E57A00]/40 transition-all duration-300 shadow-xl flex flex-col justify-between group hover:shadow-[0_0_25px_rgba(229,122,0,0.14)] relative overflow-hidden"
          >
            {/* Ambient hover glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#E57A00]/5 rounded-full blur-2xl pointer-events-none group-hover:bg-[#E57A00]/12 transition-colors" />

            <div>
              {/* Step number on mobile (hidden on lg where track node is shown) */}
              <div className="lg:hidden text-2xl font-mono font-black text-[#E57A00] mb-2">
                0{stage.step}
              </div>

              {/* Stage Title */}
              <h5 className="text-sm sm:text-base font-bold text-white mb-2 font-royal group-hover:text-amber-100 transition-colors">
                {stage.title}
              </h5>

              {/* Stage Description */}
              <p className="text-xs text-gray-300 leading-relaxed font-sans">
                {stage.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
}
