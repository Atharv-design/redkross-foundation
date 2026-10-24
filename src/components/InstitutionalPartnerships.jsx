import React from 'react';
import { INSTITUTIONAL_COLLABORATION, REDKROSS_META } from '../data/redkrossData';
import { 
  Building2, 
  GraduationCap, 
  FlaskConical, 
  Users, 
  ShieldAlert, 
  Mail, 
  ArrowRight,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

export default function InstitutionalPartnerships() {
  return (
    <section id="affiliations" className="py-24 px-6 relative bg-[#040406] border-t border-white/5">
      {/* Background Ambience */}
      <div className="absolute inset-0 dot-grid-bg opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0FB7B7]/10 border border-[#0FB7B7]/25 text-[#0FB7B7] text-xs font-mono mb-3">
              <Building2 className="w-3.5 h-3.5" />
              <span>Section 07 // Institutional & Academic Collaborations</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Academic Partnerships & <span className="gradient-text-teal">Collaborations</span>
            </h2>
            <p className="text-gray-400 text-base mt-3 leading-relaxed">
              Bridging higher education and defensive cybersecurity research through reproducible laboratory frameworks, visiting scholar tracks, and student open-source development.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-3 py-1.5 rounded-full border border-cyan-500/30">
              {INSTITUTIONAL_COLLABORATION.status}
            </span>
          </div>
        </div>

        {/* Anti-Misrepresentation & Integrity Banner */}
        <div className="mb-12 p-6 rounded-2xl bg-[#0b0b0f] border border-amber-500/30 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 flex-shrink-0">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <div className="text-sm text-gray-300 leading-relaxed">
            <strong className="text-amber-400 font-semibold block mb-0.5">Strict Institutional Integrity Policy:</strong>
            {INSTITUTIONAL_COLLABORATION.collaborationNotice}
          </div>
        </div>

        {/* 4 Strategic Academic Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {INSTITUTIONAL_COLLABORATION.tracks.map((track) => (
            <div
              key={track.title}
              className="glass neon-border rounded-2xl p-7 flex flex-col justify-between group hover:border-[#0FB7B7]/50 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-[#0FB7B7] uppercase tracking-wider">
                    {track.badge}
                  </span>
                  <span className="text-[10px] font-mono text-gray-500 bg-white/5 px-2 py-0.5 rounded">
                    {track.reference}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-[#1ED8D8] transition-colors mb-3">
                  {track.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {track.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-gray-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Open Governance
                </span>
                <span className="text-gray-500">2027 Expansion Track</span>
              </div>
            </div>
          ))}
        </div>

        {/* Partnership Invitation Box */}
        <div className="glass-dark rounded-3xl p-8 sm:p-10 border border-[#E57A00]/30 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-mono text-[#E57A00] uppercase tracking-wider block mb-2">
              Join the Academic Alliance
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
              Partner With RedKross Research Foundation
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              We welcome universities, engineering colleges, cybersecurity research clubs, and non-profit organisations looking to integrate reproducible cybersecurity labs, open-source projects, or behavioral psychology research into their curriculum.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
            <a
              href="mailto:contact@redkross.org.in?subject=Academic%20Partnership%20Proposal%20-%20RedKross"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-white font-semibold text-sm transition-all duration-200 shadow-xl hover:scale-[1.02]"
              style={{
                background: 'linear-gradient(135deg, #E57A00, #B35F00)',
                boxShadow: '0 4px 20px rgba(229, 122, 0, 0.3)'
              }}
            >
              <Mail className="w-4 h-4" />
              <span>Submit Partnership Inquiry</span>
            </a>

            <a
              href="https://redkross.org.in/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-gray-300 bg-white/5 border border-white/10 hover:border-white/30 hover:text-white transition-all"
            >
              <span>Contact Registry</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
