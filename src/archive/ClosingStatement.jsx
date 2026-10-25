import React from 'react';
import { ArrowRight, Shield, HeartHandshake, Mail, Terminal, Sparkles } from 'lucide-react';
import { REDKROSS_META } from '../data/redkrossData';

export default function ClosingStatement() {
  const handleScrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) {
      const offset = 80;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-28 px-6 relative bg-[#040406] overflow-hidden border-t border-white/5">
      {/* Visual Ambient Concentric Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-[#E57A00]/10 via-[#F0A500]/5 to-[#0FB7B7]/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        
        {/* Emblem Badge */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#0e0d0b] border border-[#E57A00]/40 shadow-[0_0_30px_rgba(229,122,0,0.3)] mb-8 p-3">
          <img 
            src="/assets/logo.png" 
            alt="RedKross Research Foundation" 
            className="w-full h-full object-contain"
          />
        </div>

        <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#E57A00] block mb-4">
          The Long-Term Imperative
        </span>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] mb-8">
          A Secure, Digitally Literate, and <br className="hidden sm:block" />
          <span className="gradient-text-mixed">Mentally Resilient Society.</span>
        </h2>

        <p className="text-gray-300 text-base sm:text-xl leading-relaxed max-w-3xl mx-auto mb-12">
          Defended by a new generation of ethical researchers, software builders, and cognitive analysts who refuse to compromise between high-assurance security and human dignity.
        </p>

        {/* Closing Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => handleScrollTo('#branches')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-white font-semibold text-base transition-all duration-200 shadow-xl hover:scale-[1.02]"
            style={{
              background: 'linear-gradient(135deg, #E57A00, #B35F00)',
              boxShadow: '0 4px 25px rgba(229, 122, 0, 0.35)'
            }}
          >
            <span>Explore Cybersecurity & Psychology</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <a
            href="mailto:contact@redkross.org.in"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold text-gray-200 bg-white/5 border border-white/10 hover:border-white/30 hover:text-white transition-all"
          >
            <Mail className="w-5 h-5 text-[#0FB7B7]" />
            <span>Connect for Collaboration</span>
          </a>
        </div>

        {/* Factual Integrity Tagline */}
        <div className="mt-14 pt-8 border-t border-white/5 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-gray-500">
          <span>Est. April 2026 // Panipat, Haryana</span>
          <span>&bull;</span>
          <span>Public Code on GitHub</span>
          <span>&bull;</span>
          <span>Reproducible Research Standard</span>
        </div>

      </div>
    </section>
  );
}
