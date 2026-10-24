import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

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
    offset: ["start 80%", "end 60%"],
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
      {/* 1. DESKTOP CONNECTING PROGRESS LINE & INDICATOR NODES        */}
      {/* ───────────────────────────────────────────────────────────── */}
      <div className="relative mb-8 hidden lg:block">
        {/* Background static connecting line */}
        <div className="absolute top-1/2 left-10 right-10 -translate-y-1/2 h-1 bg-white/10 rounded-full" />

        {/* Dynamic horizontal scroll-filling glowing progress line */}
        <motion.div
          style={{ scaleX }}
          className="absolute top-1/2 left-10 right-10 -translate-y-1/2 h-1 bg-gradient-to-r from-[#E57A00] via-[#FFA439] to-[#0FB7B7] origin-left rounded-full shadow-[0_0_15px_rgba(229,122,0,0.8)]"
        />

        {/* 5 Step Indicator Nodes along the line */}
        <div className="relative z-10 grid grid-cols-5 gap-4">
          {stages.map((stage, idx) => (
            <div key={stage.step} className="flex justify-center">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{
                  delay: idx * 0.16,
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="w-11 h-11 rounded-full bg-[#080a10] border-2 border-white/20 hover:border-[#E57A00] flex items-center justify-center font-mono font-black text-xs text-[#FFA439] shadow-lg hover:shadow-[0_0_20px_rgba(229,122,0,0.6)] transition-all duration-300"
              >
                0{stage.step}
              </motion.div>
            </div>
          ))}
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
              delay: idx * 0.14,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="p-5 sm:p-6 rounded-2xl bg-[#090c14]/90 border border-white/10 hover:border-[#E57A00]/40 transition-all duration-300 shadow-xl flex flex-col justify-between group hover:shadow-[0_0_25px_rgba(229,122,0,0.12)] relative overflow-hidden"
          >
            {/* Ambient hover glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#E57A00]/5 rounded-full blur-2xl pointer-events-none group-hover:bg-[#E57A00]/10 transition-colors" />

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

            {/* Bottom active pill */}
            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-gray-400 group-hover:text-[#FFA439] transition-colors">
              <span>STAGE // 0{stage.step}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#E57A00] opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
}
