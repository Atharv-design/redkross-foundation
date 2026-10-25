import React from 'react';
import { REDKROSS_CONFIG } from '../data/redkrossConfig';
import { Users, GraduationCap, Layers, Sparkles, Award, Code2 } from 'lucide-react';
import AnimatedHeading from './AnimatedHeading';
import GradientHoverCard from './motion/GradientHoverCard';
import SmoothCountUp from './motion/SmoothCountUp';

export default function BatchesAndStudentsSection() {
  const { batchesAndStudents } = REDKROSS_CONFIG;

  const cardIcons = [Layers, Award, Code2];

  return (
    <section id="batches-students" className="py-24 px-6 relative bg-[#040406] border-t border-white/5">
      <div className="absolute inset-0 dot-grid-bg opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading with Kinetic Typography (Centered in Middle) */}
        <div className="text-center max-w-5xl mx-auto mb-16">
          <div className="mb-4">
            <AnimatedHeading
              text="Total Batches & Students Trained"
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight"
            />
          </div>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
            Real participation metrics across research cohorts, specialized training tracks, and practical laboratory sprints.
          </p>
        </div>

        {/* 2 Massive Hero Metric Cards with Interactive Cursor Spotlight (Skiper-UI skiper90 & Animmasterlib inspired) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* Card 1: Cohort Sprints (Orange Accent) */}
          <GradientHoverCard
            glowColor="rgba(229, 122, 0, 0.16)"
            borderColor="rgba(229, 122, 0, 0.4)"
            className="glass neon-border p-8 sm:p-12 hover:-translate-y-1"
          >
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-mono text-[#E57A00] uppercase tracking-wider font-bold">
                Cohort Sprints
              </span>
              <div className="w-12 h-12 rounded-2xl bg-[#E57A00]/10 border border-[#E57A00]/30 flex items-center justify-center text-[#E57A00] shadow-[0_0_20px_rgba(229,122,0,0.2)]">
                <Layers className="w-6 h-6" />
              </div>
            </div>

            <div className="text-5xl sm:text-7xl font-black font-mono text-white tracking-tight mb-2 flex items-baseline">
              <SmoothCountUp
                end={batchesAndStudents.totalBatches.number}
                duration={1600}
                className="text-white"
              />
              <span className="text-[#E57A00] ml-1">{batchesAndStudents.totalBatches.suffix}</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              {batchesAndStudents.totalBatches.label}
            </h3>

            <p className="text-sm text-gray-400 leading-relaxed">
              {batchesAndStudents.totalBatches.note}
            </p>
          </GradientHoverCard>

          {/* Card 2: Student Reach (Cyan Accent) */}
          <GradientHoverCard
            glowColor="rgba(15, 183, 183, 0.18)"
            borderColor="rgba(15, 183, 183, 0.45)"
            className="glass-teal neon-border-teal p-8 sm:p-12 hover:-translate-y-1"
          >
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-mono text-[#0FB7B7] uppercase tracking-wider font-bold">
                Student Reach
              </span>
              <div className="w-12 h-12 rounded-2xl bg-[#0FB7B7]/10 border border-[#0FB7B7]/30 flex items-center justify-center text-[#0FB7B7] shadow-[0_0_20px_rgba(15,183,183,0.2)]">
                <GraduationCap className="w-6 h-6" />
              </div>
            </div>

            <div className="text-5xl sm:text-7xl font-black font-mono text-white tracking-tight mb-2 flex items-baseline">
              <SmoothCountUp
                end={batchesAndStudents.totalStudents.number}
                duration={1800}
                className="text-white"
              />
              <span className="text-[#0FB7B7] ml-1">{batchesAndStudents.totalStudents.suffix}</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              {batchesAndStudents.totalStudents.label}
            </h3>

            <p className="text-sm text-gray-400 leading-relaxed">
              {batchesAndStudents.totalStudents.note}
            </p>
          </GradientHoverCard>

        </div>

        {/* 3 Narrative Cohort Cards with Cursor Spotlights & Micro-Elevations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {batchesAndStudents.cards.map((card, i) => {
            const Icon = cardIcons[i % cardIcons.length];
            return (
              <GradientHoverCard
                key={card.title}
                glowColor="rgba(240, 165, 0, 0.12)"
                borderColor="rgba(240, 165, 0, 0.3)"
                className="p-6 bg-[#0b0b0f] border border-white/5 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-[#F0A500] font-semibold flex items-center gap-1.5">
                    <Icon className="w-3.5 h-3.5 text-[#F0A500]" />
                    {card.count}
                  </span>
                  <span className="text-[10px] font-mono text-gray-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                    {card.highlight}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{card.title}</h4>
                <p className="text-xs text-gray-400 leading-relaxed">{card.description}</p>
              </GradientHoverCard>
            );
          })}
        </div>

      </div>
    </section>
  );
}
