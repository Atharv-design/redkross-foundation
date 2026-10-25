import React from 'react';
import { TWO_BRANCHES } from '../data/redkrossData';
import { 
  ShieldCheck, 
  Brain, 
  ExternalLink, 
  ArrowRight, 
  Terminal, 
  Cpu, 
  Lock, 
  Flame, 
  HeartHandshake,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export default function TwoBranchesSection() {
  const { cybersecurity, psychology } = TWO_BRANCHES;

  return (
    <section id="branches" className="py-28 px-6 relative bg-[#060608] border-t border-white/5 overflow-hidden">
      {/* Visual Ambient Backdrops */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-[#E57A00]/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-[#0FB7B7]/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300 mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#E57A00]" />
            <span>Section 08 // Dual Core Architecture</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight mb-6">
            The Two Main <br className="hidden sm:block" />
            <span className="gradient-text">Branches of RedKross</span>
          </h2>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            RedKross executes its mission through two interconnected pillars: technical security engineering defending systems, and behavioral psychology understanding human resilience.
          </p>
        </div>

        {/* The Two Distinct Branch Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-16">
          
          {/* BRANCH A: CYBERSECURITY */}
          <div className="glass neon-border rounded-3xl p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden group hover:border-[#E57A00] transition-all duration-300">
            {/* Background Texture */}
            <div className="absolute inset-0 cyber-grid-bg opacity-30 pointer-events-none"></div>

            <div className="relative z-10">
              {/* Branch Header Badge */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#E57A00]/10 border border-[#E57A00]/30 flex items-center justify-center text-[#E57A00] shadow-[0_0_20px_rgba(229,122,0,0.3)]">
                    <Terminal className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono tracking-wider text-[#E57A00] uppercase font-bold block">
                      {cybersecurity.badge}
                    </span>
                    <span className="text-xs text-gray-400 font-mono">
                      {cybersecurity.status}
                    </span>
                  </div>
                </div>
                <span className="text-2xl font-black font-mono text-[#E57A00]/30">01</span>
              </div>

              {/* Title & Tagline */}
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">
                {cybersecurity.title}
              </h3>
              <p className="text-sm font-mono text-[#F0A500] mb-5">
                {cybersecurity.tagline}
              </p>

              {/* Description */}
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
                {cybersecurity.description}
              </p>

              {/* Verified Technical Highlights */}
              <div className="space-y-3.5 mb-8">
                <span className="text-xs font-mono uppercase tracking-wider text-gray-400 block mb-2">
                  Key Technical Workstreams:
                </span>
                {cybersecurity.highlights.map((h) => (
                  <div key={h.title} className="p-3.5 rounded-xl bg-black/40 border border-white/5 flex flex-col gap-1">
                    <span className="text-xs font-semibold text-white flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E57A00]"></span>
                      {h.title}
                    </span>
                    <span className="text-xs text-gray-400 leading-relaxed pl-3.5">
                      {h.detail}
                    </span>
                  </div>
                ))}
              </div>

              {/* Stack Pills */}
              <div className="mb-8">
                <span className="text-[11px] font-mono text-gray-500 uppercase block mb-2">
                  Technologies & Frameworks:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {cybersecurity.stack.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/5 border border-white/10 text-gray-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Button to Verified Official Cybersecurity Destination */}
            <div className="relative z-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs font-mono text-gray-400">
                Official Destination: <span className="text-gray-200">/innovation/cybersecurity</span>
              </span>

              <a
                href={cybersecurity.destinationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-white font-semibold text-sm transition-all duration-200 shadow-xl hover:scale-[1.02]"
                style={{
                  background: 'linear-gradient(135deg, #E57A00, #B35F00)',
                  boxShadow: '0 4px 20px rgba(229, 122, 0, 0.35)'
                }}
              >
                <span>{cybersecurity.ctaLabel}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* BRANCH B: PSYCHOLOGY */}
          <div className="glass-teal neon-border-teal rounded-3xl p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden group hover:border-[#0FB7B7] transition-all duration-300">
            {/* Background Texture */}
            <div className="absolute inset-0 cyber-grid-teal opacity-30 pointer-events-none"></div>

            <div className="relative z-10">
              {/* Branch Header Badge */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#0FB7B7]/10 border border-[#0FB7B7]/30 flex items-center justify-center text-[#0FB7B7] shadow-[0_0_20px_rgba(15,183,183,0.3)]">
                    <Brain className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono tracking-wider text-[#0FB7B7] uppercase font-bold block">
                      {psychology.badge}
                    </span>
                    <span className="text-xs text-gray-400 font-mono">
                      {psychology.status}
                    </span>
                  </div>
                </div>
                <span className="text-2xl font-black font-mono text-[#0FB7B7]/30">02</span>
              </div>

              {/* Title & Tagline */}
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">
                {psychology.title}
              </h3>
              <p className="text-sm font-mono text-[#1ED8D8] mb-5">
                {psychology.tagline}
              </p>

              {/* Description */}
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
                {psychology.description}
              </p>

              {/* Verified Psychology Highlights */}
              <div className="space-y-3.5 mb-8">
                <span className="text-xs font-mono uppercase tracking-wider text-gray-400 block mb-2">
                  Key Research Domains:
                </span>
                {psychology.highlights.map((h) => (
                  <div key={h.title} className="p-3.5 rounded-xl bg-black/40 border border-white/5 flex flex-col gap-1">
                    <span className="text-xs font-semibold text-white flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0FB7B7]"></span>
                      {h.title}
                    </span>
                    <span className="text-xs text-gray-400 leading-relaxed pl-3.5">
                      {h.detail}
                    </span>
                  </div>
                ))}
              </div>

              {/* Focus Pillars */}
              <div className="mb-8">
                <span className="text-[11px] font-mono text-gray-500 uppercase block mb-2">
                  Methodology & Focus:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {psychology.stack.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/5 border border-white/10 text-gray-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Button to Verified Official Psychology Destination */}
            <div className="relative z-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs font-mono text-gray-400">
                Official Destination: <span className="text-gray-200">/research/labs#applied-psychology</span>
              </span>

              <a
                href={psychology.destinationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-black font-semibold text-sm transition-all duration-200 shadow-xl hover:scale-[1.02]"
                style={{
                  background: 'linear-gradient(135deg, #0FB7B7, #1ED8D8)',
                  boxShadow: '0 4px 20px rgba(15, 183, 183, 0.35)'
                }}
              >
                <span>{psychology.ctaLabel}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Integration Synthesis Note */}
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <span className="text-xs font-mono text-[#F0A500] uppercase block">
              Why Both Matter at RedKross:
            </span>
            <p className="text-sm text-gray-300 mt-1">
              "Technical controls fail without human understanding; human resilience fails without secure architecture. RedKross bridges code and cognition."
            </p>
          </div>
          <span className="text-xs font-mono text-gray-400 whitespace-nowrap bg-black/40 px-3 py-1.5 rounded-lg border border-white/10">
            Unified Institutional Mission
          </span>
        </div>

      </div>
    </section>
  );
}
