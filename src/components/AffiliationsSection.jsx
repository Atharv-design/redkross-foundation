import React from 'react';
import { REDKROSS_CONFIG } from '../data/redkrossConfig';
import { Building2, Handshake, Mail, CheckCircle2, ArrowRight } from 'lucide-react';
import AnimatedHeading from './AnimatedHeading';
import GradientHoverCard from './motion/GradientHoverCard';
import SmoothCountUp from './motion/SmoothCountUp';

export default function AffiliationsSection() {
  const { affiliations } = REDKROSS_CONFIG;

  return (
    <section id="affiliations" className="py-24 px-6 relative bg-[#040406] border-t border-white/5">
      <div className="absolute inset-0 dot-grid-bg opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading with Kinetic Typography (Centered in Middle) */}
        <div className="text-center max-w-5xl mx-auto mb-16">
          <div className="mb-4">
            <AnimatedHeading
              text="College Affiliations & Ongoing Partnerships"
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight"
            />
          </div>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
            Academic alliances across universities and engineering institutes — connecting classroom education with real-world security research.
          </p>
        </div>

        {/* 2 Massive Affiliation Stat Cards with Dynamic Cursor Spotlight */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* Card 1: Institutional Network */}
          <GradientHoverCard
            glowColor="rgba(229, 122, 0, 0.16)"
            borderColor="rgba(229, 122, 0, 0.4)"
            className="glass neon-border p-8 sm:p-12 hover:-translate-y-1"
          >
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-mono text-[#E57A00] uppercase tracking-wider font-bold">
                Institutional Network
              </span>
              <div className="w-12 h-12 rounded-2xl bg-[#E57A00]/10 border border-[#E57A00]/30 flex items-center justify-center text-[#E57A00] shadow-[0_0_20px_rgba(229,122,0,0.2)]">
                <Building2 className="w-6 h-6" />
              </div>
            </div>

            <div className="text-5xl sm:text-7xl font-black font-mono text-white tracking-tight mb-2 flex items-baseline">
              <SmoothCountUp
                end={affiliations.totalAffiliations.number}
                duration={1600}
                className="text-white"
              />
              <span className="text-[#E57A00] ml-1">{affiliations.totalAffiliations.suffix}</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              {affiliations.totalAffiliations.label}
            </h3>

            <p className="text-sm text-gray-400 leading-relaxed">
              {affiliations.totalAffiliations.note}
            </p>
          </GradientHoverCard>

          {/* Card 2: Current Engagements */}
          <GradientHoverCard
            glowColor="rgba(15, 183, 183, 0.18)"
            borderColor="rgba(15, 183, 183, 0.45)"
            className="glass-teal neon-border-teal p-8 sm:p-12 hover:-translate-y-1"
          >
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-mono text-[#0FB7B7] uppercase tracking-wider font-bold">
                Current Engagements
              </span>
              <div className="w-12 h-12 rounded-2xl bg-[#0FB7B7]/10 border border-[#0FB7B7]/30 flex items-center justify-center text-[#0FB7B7] shadow-[0_0_20px_rgba(15,183,183,0.2)]">
                <Handshake className="w-6 h-6" />
              </div>
            </div>

            <div className="text-5xl sm:text-7xl font-black font-mono text-white tracking-tight mb-2 flex items-baseline">
              <SmoothCountUp
                end={affiliations.ongoingAffiliations.number}
                duration={1800}
                className="text-white"
              />
              <span className="text-[#0FB7B7] ml-1">{affiliations.ongoingAffiliations.suffix}</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              {affiliations.ongoingAffiliations.label}
            </h3>

            <p className="text-sm text-gray-400 leading-relaxed">
              {affiliations.ongoingAffiliations.note}
            </p>
          </GradientHoverCard>

        </div>

        {/* 4 Pillars of Affiliation with Dynamic Cursor Spotlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {affiliations.pillars.map((p) => (
            <GradientHoverCard
              key={p.title}
              glowColor="rgba(240, 165, 0, 0.12)"
              borderColor="rgba(240, 165, 0, 0.3)"
              className="p-7 bg-[#0b0b0f] border border-white/5 hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-[#F0A500] font-semibold">
                    {p.status}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{p.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{p.description}</p>
              </div>
            </GradientHoverCard>
          ))}
        </div>

        {/* Partner Invitation Box */}
        <GradientHoverCard
          glowColor="rgba(229, 122, 0, 0.15)"
          borderColor="rgba(229, 122, 0, 0.4)"
          className="p-8 sm:p-10 bg-gradient-to-r from-[#0e0d0b] to-[#12121a] border border-[#E57A00]/30 shadow-2xl"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Interested in an Institutional Partnership?
              </h4>
              <p className="text-sm text-gray-400 max-w-xl leading-relaxed">
                Connect directly with RedKross Research Foundation to bring workshops, lab curricula, and research internships to your university or college.
              </p>
            </div>

            <a
              href="mailto:contact@redkross.org.in?subject=Institutional%20Partnership%20Inquiry"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-sm text-white shadow-lg transition-all hover:scale-105 active:scale-95 whitespace-nowrap group"
              style={{
                background: 'linear-gradient(135deg, #E57A00, #B35F00)',
                boxShadow: '0 4px 25px rgba(229, 122, 0, 0.35)'
              }}
            >
              <Mail className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
              <span>Connect for Affiliation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </GradientHoverCard>

      </div>
    </section>
  );
}
