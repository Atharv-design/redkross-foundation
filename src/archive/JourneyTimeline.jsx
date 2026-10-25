import React, { useState } from 'react';
import { TIMELINE_MILESTONES } from '../data/redkrossData';
import { 
  Milestone, 
  CheckCircle2, 
  Clock, 
  Calendar, 
  Shield, 
  Cpu, 
  GitBranch, 
  GraduationCap, 
  FileText, 
  Layers, 
  Terminal, 
  Rocket, 
  Globe,
  Filter
} from 'lucide-react';

export default function JourneyTimeline() {
  const [filter, setFilter] = useState('All');
  const [expandedIndex, setExpandedIndex] = useState(null);

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Shield': return <Shield className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      case 'GitBranch': return <GitBranch className="w-5 h-5" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5" />;
      case 'FileText': return <FileText className="w-5 h-5" />;
      case 'Layers': return <Layers className="w-5 h-5" />;
      case 'Terminal': return <Terminal className="w-5 h-5" />;
      case 'Rocket': return <Rocket className="w-5 h-5" />;
      case 'Globe': return <Globe className="w-5 h-5" />;
      default: return <Milestone className="w-5 h-5" />;
    }
  };

  const getStatusBadge = (phase) => {
    switch (phase) {
      case 'Completed':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Completed</span>
          </span>
        );
      case 'In Development':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#E57A00]/10 text-[#E57A00] border border-[#E57A00]/30 animate-pulse">
            <Clock className="w-3.5 h-3.5" />
            <span>In Development</span>
          </span>
        );
      case 'Planned':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
            <Calendar className="w-3.5 h-3.5" />
            <span>Planned</span>
          </span>
        );
      case 'Target':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-purple-500/10 text-purple-400 border border-purple-500/30">
            <Rocket className="w-3.5 h-3.5" />
            <span>Target (QA Gated)</span>
          </span>
        );
      default:
        return null;
    }
  };

  const filteredMilestones = filter === 'All' 
    ? TIMELINE_MILESTONES 
    : TIMELINE_MILESTONES.filter(m => m.phase === filter);

  return (
    <section id="journey" className="py-24 px-6 relative bg-[#060608]">
      {/* Visual Ambient Light */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#E57A00]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#E57A00]/10 border border-[#E57A00]/25 text-[#E57A00] text-xs font-mono mb-3">
              <Milestone className="w-3.5 h-3.5" />
              <span>Section 04 // Historical Timeline</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Our Journey & <span className="gradient-text">Roadmap</span>
            </h2>
            <p className="text-gray-400 text-base mt-3 max-w-2xl leading-relaxed">
              Every milestone is grounded in official release records, public repository commits, and the formal Architecture Blueprint. No dates or achievements are fabricated.
            </p>
          </div>

          {/* Interactive Phase Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            {['All', 'Completed', 'In Development', 'Planned', 'Target'].map((p) => (
              <button
                key={p}
                onClick={() => setFilter(p)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 ${
                  filter === p
                    ? 'bg-[#E57A00] text-white font-semibold shadow-lg shadow-orange-500/25'
                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5'
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Flow */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-[#E57A00]/30 space-y-12">
          {filteredMilestones.map((m, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <div 
                key={m.title}
                className="relative group transition-all"
              >
                {/* Connecting Node Icon on the line */}
                <div className={`absolute -left-[35px] sm:-left-[51px] top-1.5 w-10 h-10 sm:w-11 sm:h-11 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                  m.phase === 'Completed'
                    ? 'bg-[#0e0d0b] text-[#E57A00] border-2 border-[#E57A00] shadow-[0_0_15px_rgba(229,122,0,0.4)]'
                    : m.phase === 'In Development'
                    ? 'bg-[#0e0d0b] text-[#F0A500] border-2 border-[#F0A500] animate-pulse shadow-[0_0_20px_rgba(240,165,0,0.5)]'
                    : 'bg-[#0b0b0f] text-gray-400 border border-white/20'
                }`}>
                  {getIcon(m.icon)}
                </div>

                {/* Milestone Content Card */}
                <div 
                  onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                  className="glass neon-border rounded-2xl p-6 sm:p-7 hover:border-[#E57A00]/50 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-[#E57A00] tracking-wider uppercase px-2.5 py-1 rounded bg-[#E57A00]/10 border border-[#E57A00]/20">
                        {m.date}
                      </span>
                      <span className="text-xs font-mono text-gray-400">
                        {m.tag}
                      </span>
                    </div>
                    <div>
                      {getStatusBadge(m.phase)}
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#F0A500] transition-colors mb-2">
                    {m.title}
                  </h3>

                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-3">
                    {m.description}
                  </p>

                  <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-gray-500">
                    <span>Source: redkross.org.in/roadmap & blueprint</span>
                    <span className="text-[#0FB7B7] hover:underline">
                      {isExpanded ? "Collapse notes ▲" : "Inspect details ▼"}
                    </span>
                  </div>

                  {/* Expanded Architectural Context */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-white/10 text-xs font-mono text-gray-400 bg-black/40 rounded-xl p-4 space-y-2">
                      <p><strong className="text-gray-300">Phase Status:</strong> {m.phase}</p>
                      <p><strong className="text-gray-300">Governance Gate:</strong> Verified by RKRF Leadership Team.</p>
                      <p><strong className="text-gray-300">Architectural Note:</strong> Control plane strictly separated from lab environments. All claims supported by documented artifacts.</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
