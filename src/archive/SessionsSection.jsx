import React from 'react';
import { REDKROSS_CONFIG } from '../data/redkrossConfig';
import { Terminal, Clock, ShieldAlert, Cpu, Brain, Code, Sparkles } from 'lucide-react';
import AnimatedHeading from './AnimatedHeading';
import GradientHoverCard from './motion/GradientHoverCard';
import SmoothCountUp from './motion/SmoothCountUp';

export default function SessionsSection() {
  const { sessions } = REDKROSS_CONFIG;

  const topicIcons = [ShieldAlert, Terminal, Brain, Cpu];

  return (
    <section id="sessions" className="py-24 px-6 relative bg-[#060608] border-t border-white/5">
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#E57A00]/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading with Kinetic Typography (Centered in Middle) */}
        <div className="text-center max-w-5xl mx-auto mb-16">
          <div className="mb-4">
            <AnimatedHeading
              text="Number of Sessions & Hands-on Workshops"
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight"
            />
          </div>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
            Live technical masterclasses, CTF walkthroughs, defensive drills, and behavioral psychology workshops.
          </p>
        </div>

        {/* 2 Big Stat Cards with Interactive Spotlight (Orange and Cyan Accents) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* Card 1: Live Delivery */}
          <GradientHoverCard
            glowColor="rgba(229, 122, 0, 0.16)"
            borderColor="rgba(229, 122, 0, 0.4)"
            className="glass neon-border p-8 sm:p-12 hover:-translate-y-1"
          >
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-mono text-[#E57A00] uppercase tracking-wider font-bold">
                Live Delivery
              </span>
              <div className="w-12 h-12 rounded-2xl bg-[#E57A00]/10 border border-[#E57A00]/30 flex items-center justify-center text-[#E57A00] shadow-[0_0_20px_rgba(229,122,0,0.2)]">
                <Terminal className="w-6 h-6" />
              </div>
            </div>

            <div className="text-5xl sm:text-7xl font-black font-mono text-white tracking-tight mb-2 flex items-baseline">
              <SmoothCountUp
                end={sessions.totalSessions.number}
                duration={1600}
                className="text-white"
              />
              <span className="text-[#E57A00] ml-1">{sessions.totalSessions.suffix}</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              {sessions.totalSessions.label}
            </h3>

            <p className="text-sm text-gray-400 leading-relaxed">
              {sessions.totalSessions.note}
            </p>
          </GradientHoverCard>

          {/* Card 2: Practical Engagement */}
          <GradientHoverCard
            glowColor="rgba(15, 183, 183, 0.18)"
            borderColor="rgba(15, 183, 183, 0.45)"
            className="glass-teal neon-border-teal p-8 sm:p-12 hover:-translate-y-1"
          >
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-mono text-[#0FB7B7] uppercase tracking-wider font-bold">
                Practical Engagement
              </span>
              <div className="w-12 h-12 rounded-2xl bg-[#0FB7B7]/10 border border-[#0FB7B7]/30 flex items-center justify-center text-[#0FB7B7] shadow-[0_0_20px_rgba(15,183,183,0.2)]">
                <Clock className="w-6 h-6" />
              </div>
            </div>

            <div className="text-5xl sm:text-7xl font-black font-mono text-white tracking-tight mb-2 flex items-baseline">
              <SmoothCountUp
                end={sessions.totalHours.number}
                duration={1800}
                className="text-white"
              />
              <span className="text-[#0FB7B7] ml-1">{sessions.totalHours.suffix}</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              {sessions.totalHours.label}
            </h3>

            <p className="text-sm text-gray-400 leading-relaxed">
              {sessions.totalHours.note}
            </p>
          </GradientHoverCard>

        </div>

        {/* 4 Specialized Session Topics Grid with Dynamic Hover Glows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sessions.sessionTypes.map((st, i) => {
            const Icon = topicIcons[i % topicIcons.length];
            return (
              <GradientHoverCard
                key={st.name}
                glowColor="rgba(15, 183, 183, 0.12)"
                borderColor="rgba(15, 183, 183, 0.3)"
                className="p-6 bg-[#0b0b0f] border border-white/5 hover:-translate-y-1"
              >
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-mono text-[#0FB7B7] uppercase tracking-wider font-semibold">
                        {st.count}
                      </span>
                      <Icon className="w-4 h-4 text-[#0FB7B7]/70" />
                    </div>
                    <h4 className="text-base font-bold text-white mb-2">
                      {st.name}
                    </h4>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {st.detail}
                    </p>
                  </div>
                </div>
              </GradientHoverCard>
            );
          })}
        </div>

      </div>
    </section>
  );
}
