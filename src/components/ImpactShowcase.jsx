import React, { useState } from 'react';
import { FEATURED_PROJECTS, REDKROSS_META } from '../data/redkrossData';
import { 
  FolderGit2, 
  ExternalLink, 
  Cpu, 
  ShieldCheck, 
  Code2, 
  Sparkles, 
  Terminal, 
  Layers,
  CheckCircle2
} from 'lucide-react';

export default function ImpactShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Artificial Intelligence', 'Cybersecurity', 'Security Automation', 'Network Defense', 'AI & Compliance'];

  const filteredProjects = selectedCategory === 'All'
    ? FEATURED_PROJECTS
    : FEATURED_PROJECTS.filter(p => p.category === selectedCategory);

  const getBadgeStyle = (status) => {
    switch (status) {
      case 'Live Product':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      case 'In Development':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
      case 'Beta Release':
        return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30';
      default:
        return 'bg-[#E57A00]/10 text-[#E57A00] border-[#E57A00]/30';
    }
  };

  return (
    <section id="impact" className="py-24 px-6 relative bg-[#040406] border-t border-white/5">
      {/* Background Accent */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#0FB7B7]/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0FB7B7]/10 border border-[#0FB7B7]/25 text-[#0FB7B7] text-xs font-mono mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Section 05 // Tangible Engineering Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Real-World Tools & <span className="gradient-text-teal">Research Output</span>
            </h2>
            <p className="text-gray-400 text-base mt-3 leading-relaxed">
              Every project links to a public repository on the RedKross GitHub organisation with verified commit records, genuine architectural schematics, and open-source availability.
            </p>
          </div>

          <a
            href={REDKROSS_META.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-200 text-xs font-mono hover:border-[#E57A00] hover:text-[#E57A00] transition-colors"
          >
            <span>Visit github.com/Redkrossresearch</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-[#0FB7B7] to-[#1ED8D8] text-black font-bold shadow-lg shadow-cyan-500/20'
                  : 'bg-[#0b0b0f] text-gray-400 border border-white/5 hover:text-white hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.name}
              className="glass neon-border rounded-2xl p-6 sm:p-7 flex flex-col justify-between group hover:border-[#0FB7B7]/50 hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border ${getBadgeStyle(project.badge)}`}>
                    {project.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-[#0FB7B7] transition-colors mb-3">
                  {project.name}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed mb-5">
                  {project.summary}
                </p>

                {/* Architecture Brief */}
                <div className="mb-5 p-3.5 rounded-xl bg-black/40 border border-white/5">
                  <span className="text-[10px] font-mono uppercase text-gray-500 block mb-1">
                    System Architecture:
                  </span>
                  <p className="text-xs text-gray-300 font-mono leading-relaxed">
                    {project.architecture}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/5 border border-white/5 text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Link to Official Case Study / GitHub */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[10px] font-mono text-gray-500">
                  {project.repoTag}
                </span>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0FB7B7] hover:text-[#1ED8D8] transition-colors group-hover:translate-x-1 transition-transform"
                >
                  <span>Explore Source</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
