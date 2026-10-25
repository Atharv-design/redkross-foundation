import React, { useState, useEffect, useRef } from 'react';
import { VERIFIED_METRICS } from '../data/redkrossData';
import { ShieldCheck, GitPullRequest, Users, Layers, Wrench, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function MetricsOverview({ onOpenInventory }) {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState(VERIFIED_METRICS.map(() => 0));
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          // Animate count up smoothly to exact verified figures
          VERIFIED_METRICS.forEach((metric, index) => {
            let start = 0;
            const end = metric.value;
            const duration = 1600;
            const stepTime = 30;
            const steps = Math.ceil(duration / stepTime);
            const increment = end / steps;

            const timer = setInterval(() => {
              start += increment;
              if (start >= end) {
                setCounts((prev) => {
                  const updated = [...prev];
                  updated[index] = end;
                  return updated;
                });
                clearInterval(timer);
              } else {
                setCounts((prev) => {
                  const updated = [...prev];
                  updated[index] = Math.floor(start);
                  return updated;
                });
              }
            }, stepTime);
          });
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, [hasAnimated]);

  const metricIcons = [
    <GitPullRequest className="w-6 h-6 text-[#E57A00]" key="repo" />,
    <Users className="w-6 h-6 text-[#0FB7B7]" key="users" />,
    <Layers className="w-6 h-6 text-[#F0A500]" key="domains" />,
    <Wrench className="w-6 h-6 text-emerald-400" key="tech" />
  ];

  return (
    <section ref={sectionRef} className="py-24 px-6 relative overflow-hidden bg-[#040406] border-y border-white/5">
      {/* Background Accent Grids */}
      <div className="absolute inset-0 dot-grid-bg opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#E57A00]/10 border border-[#E57A00]/25 text-[#E57A00] text-xs font-mono mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Section 03 // RedKross at a Glance</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Verified Scale & <span className="gradient-text">Research Output</span>
            </h2>
            <p className="text-gray-400 text-base mt-3 leading-relaxed">
              Every statistic published by RedKross represents a demonstrable, publicly audited outcome — from verified repository commits to reproducible research frameworks.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <button
              onClick={onOpenInventory}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0e0d0b] border border-[#E57A00]/30 text-xs font-mono text-[#E57A00] hover:bg-[#E57A00]/10 transition-colors"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>View Source Citations</span>
            </button>
          </div>
        </div>

        {/* 4 Verified Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {VERIFIED_METRICS.map((metric, i) => (
            <div
              key={metric.id}
              className="glass neon-border rounded-2xl p-6 flex flex-col justify-between group hover:border-[#E57A00]/50 transition-all duration-300 relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {metricIcons[i]}
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  Verified Data
                </span>
              </div>

              <div>
                <div className="text-4xl sm:text-5xl font-black font-mono tracking-tight text-white mb-2 flex items-baseline">
                  <span>{counts[i]}</span>
                  <span className="text-[#E57A00] ml-1">{metric.suffix}</span>
                </div>
                <h3 className="text-white font-semibold text-base mb-2">
                  {metric.label}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                  {metric.subtext}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-gray-500">
                <span>Ref: official registry</span>
                <span className="text-gray-400 group-hover:text-[#E57A00] transition-colors">Audit trail &rarr;</span>
              </div>
            </div>
          ))}
        </div>

        {/* Master Architecture Cadence Strip */}
        <div className="glass-dark rounded-2xl p-6 sm:p-8 border border-white/10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-6">
            <div>
              <span className="text-xs font-mono text-[#0FB7B7] uppercase tracking-wider block mb-1">
                Architecture Standard // Master Blueprint
              </span>
              <h3 className="text-xl font-bold text-white">
                The 10-Stage Repeatable Research Loop
              </h3>
            </div>
            <p className="text-xs text-gray-400 max-w-xl">
              Published in the RedKross Complete Architecture Blueprint (October 2026), ensuring all projects, CVE reproductions, and tools are built with strict safety boundaries and evidence-backed peer review.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2">
            {[
              "1. Govern",
              "2. Onboard",
              "3. Learn",
              "4. Practise",
              "5. Investigate",
              "6. Build",
              "7. Assure",
              "8. Release",
              "9. Measure",
              "10. Improve"
            ].map((step, idx) => (
              <div 
                key={step} 
                className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-center flex flex-col justify-center items-center hover:border-[#E57A00]/40 transition-colors"
              >
                <span className="text-[11px] font-mono font-semibold text-gray-300">
                  {step}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
