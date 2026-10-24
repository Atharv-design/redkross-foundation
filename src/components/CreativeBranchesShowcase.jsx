import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { REDKROSS_DATA } from '../data/redkrossData';
import { 
  Terminal, 
  Brain, 
  ExternalLink, 
  Lock, 
  Activity, 
  Cpu, 
  ShieldCheck,
  Server,
  Layers,
  ArrowRight
} from 'lucide-react';
import CyberTacticalRadar from './CyberTacticalRadar';
import PsychologyNeuralHUD from './PsychologyNeuralHUD';
import CyberRangeTopology3D from './3d/CyberRangeTopology3D';
import GradientHoverCard from './motion/GradientHoverCard';

export default function CreativeBranchesShowcase() {
  const { cyberRangeArchitecture, mentalModel } = REDKROSS_DATA;
  const [activeTab, setActiveTab] = useState('cyber'); // 'cyber' | 'psychology' | 'range'

  return (
    <section id="branches" className="py-24 px-6 relative bg-[#040406] overflow-hidden border-t border-white/5 select-none">
      {/* Background Ambient Glow */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full blur-[160px] pointer-events-none transition-all duration-700 ${
        activeTab === 'cyber' ? 'bg-[#E57A00]/15' : activeTab === 'psychology' ? 'bg-[#0FB7B7]/15' : 'bg-blue-500/15'
      }`}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading: Verbatim Mental Model */}
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-4xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-400 mb-4">
            <span>The Operating Model & Domains</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4 font-royal" style={{ perspective: '1000px' }}>
            Specialized Wings & <span className="gradient-text font-royal">Cyber Range</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Academy = Learn &bull; Cyber Range = Practise &bull; Research = Investigate &bull; Innovation = Make Useful. All formats operate under strict architectural and governance rules.
          </p>

          {/* 3 Interactive Mode Tabs */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-[#0e0d0b] border border-white/10 shadow-2xl justify-center gap-2 flex-wrap">
            <button
              onClick={() => setActiveTab('cyber')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-bold transition-all duration-300 cursor-pointer ${
                activeTab === 'cyber'
                  ? 'bg-gradient-to-r from-[#E57A00] to-[#B35F00] text-white shadow-[0_0_20px_rgba(229,122,0,0.4)] scale-105'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Terminal className="w-4 h-4" />
              <span>01. Cybersecurity Wing</span>
            </button>

            <button
              onClick={() => setActiveTab('psychology')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-bold transition-all duration-300 cursor-pointer ${
                activeTab === 'psychology'
                  ? 'bg-gradient-to-r from-[#0FB7B7] to-[#1ED8D8] text-black shadow-[0_0_20px_rgba(15,183,183,0.4)] scale-105'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Brain className="w-4 h-4" />
              <span>02. Psychology Wing</span>
            </button>

            <button
              onClick={() => setActiveTab('range')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-bold transition-all duration-300 cursor-pointer ${
                activeTab === 'range'
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-black shadow-[0_0_20px_rgba(56,189,248,0.4)] scale-105'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Server className="w-4 h-4" />
              <span>03. Cyber Range 3D Topology</span>
            </button>
          </div>
        </motion.div>

        {/* Tab 1: Cybersecurity Wing */}
        {activeTab === 'cyber' && (
          <div className="glass neon-border rounded-3xl p-6 sm:p-10 lg:p-12 relative overflow-hidden animate-in fade-in zoom-in-95 duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              <div className="lg:col-span-7">
                <h3 className="text-2xl sm:text-4xl font-black text-white mb-4 tracking-tight">
                  Cybersecurity Research & Engineering
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  Investigating digital security challenges through authorised testing, vulnerability analysis, AI-enabled defensive tools and firmware extraction in safe sandboxes.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                  <div className="p-3.5 rounded-xl bg-black/50 border border-white/5">
                    <h4 className="text-sm font-bold text-white mb-1 flex items-center gap-2">
                      <Lock className="w-4 h-4 text-[#E57A00]" />
                      <span>Offensive Security</span>
                    </h4>
                    <p className="text-xs text-gray-400">
                      Authorised vulnerability analysis, exploit demonstration and safe CVE reproduction.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-black/50 border border-white/5">
                    <h4 className="text-sm font-bold text-white mb-1 flex items-center gap-2">
                      <Activity className="w-4 h-4 text-[#E57A00]" />
                      <span>Blue Team & SOC</span>
                    </h4>
                    <p className="text-xs text-gray-400">
                      Security monitoring, SIEM log analysis, threat hunting and defensive incident response.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-black/50 border border-white/5">
                    <h4 className="text-sm font-bold text-white mb-1 flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-[#E57A00]" />
                      <span>Firmware & IoT</span>
                    </h4>
                    <p className="text-xs text-gray-400">
                      Binary symbol disassembly, CVE correlation and hardware attack surface inspection.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-black/50 border border-white/5">
                    <h4 className="text-sm font-bold text-white mb-1 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#E57A00]" />
                      <span>Zero Trust Labs</span>
                    </h4>
                    <p className="text-xs text-gray-400">
                      Isolated disposable workloads, default-deny egress and automated teardown.
                    </p>
                  </div>
                </div>

                <a
                  href="https://cyber.redkross.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold font-mono text-xs sm:text-sm text-white shadow-xl hover:scale-105 transition-all"
                  style={{
                    background: 'linear-gradient(135deg, #E57A00, #B35F00)',
                    boxShadow: '0 4px 20px rgba(229, 122, 0, 0.4)'
                  }}
                >
                  <span>Visit Cybersecurity Platform (cyber.redkross.org.in)</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="lg:col-span-5 flex items-center justify-center">
                <CyberTacticalRadar />
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Psychology Wing */}
        {activeTab === 'psychology' && (
          <div className="glass-teal neon-border-teal rounded-3xl p-6 sm:p-10 lg:p-12 relative overflow-hidden animate-in fade-in zoom-in-95 duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              <div className="lg:col-span-7">
                <h3 className="text-2xl sm:text-4xl font-black text-white mb-4 tracking-tight">
                  Applied Psychology & Human Wellbeing
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  Investigating the cognitive mechanics of cybersecurity: why human beings fall for social engineering, how stress impacts incident responders, and how to build mental resilience against digital deception.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                  <div className="p-3.5 rounded-xl bg-black/50 border border-white/5">
                    <h4 className="text-sm font-bold text-white mb-1 flex items-center gap-2">
                      <Brain className="w-4 h-4 text-[#0FB7B7]" />
                      <span>Cognitive Deception</span>
                    </h4>
                    <p className="text-xs text-gray-400">
                      Emotional urgency triggers, compliance heuristics and social manipulation resistance.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-black/50 border border-white/5">
                    <h4 className="text-sm font-bold text-white mb-1 flex items-center gap-2">
                      <Activity className="w-4 h-4 text-[#0FB7B7]" />
                      <span>Analyst Burnout</span>
                    </h4>
                    <p className="text-xs text-gray-400">
                      Alert fatigue, cognitive overload and sustained decision-making under incident pressure.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-black/50 border border-white/5">
                    <h4 className="text-sm font-bold text-white mb-1 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#0FB7B7]" />
                      <span>Habit-Forming Nudges</span>
                    </h4>
                    <p className="text-xs text-gray-400">
                      Replacing obsolete annual checkboxes with behavioral micro-interventions.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-black/50 border border-white/5">
                    <h4 className="text-sm font-bold text-white mb-1 flex items-center gap-2">
                      <Users className="w-4 h-4 text-[#0FB7B7]" />
                      <span>Community Wellbeing</span>
                    </h4>
                    <p className="text-xs text-gray-400">
                      Accessible, stigma-free counseling support and educational outreach.
                    </p>
                  </div>
                </div>

                <a
                  href="https://psychology.redkross.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold font-mono text-xs sm:text-sm text-black shadow-xl hover:scale-105 transition-all"
                  style={{
                    background: 'linear-gradient(135deg, #0FB7B7, #1ED8D8)',
                    boxShadow: '0 4px 20px rgba(15, 183, 183, 0.4)'
                  }}
                >
                  <span>Visit Psychology Platform (psychology.redkross.org.in)</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="lg:col-span-5 flex items-center justify-center">
                <PsychologyNeuralHUD />
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Cyber Range 3D Topology & Strict Isolation Blueprint */}
        {activeTab === 'range' && (
          <div className="p-6 sm:p-10 lg:p-12 rounded-3xl bg-[#080c14] border border-blue-500/30 relative overflow-hidden animate-in fade-in zoom-in-95 duration-300">
            <div className="max-w-3xl mb-6">
              <span className="text-xs font-mono text-blue-400 uppercase tracking-wider font-bold block mb-2">
                16-Page Master Architecture Standard &bull; Section 7
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
                Control Plane Separated from Lab Plane
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {cyberRangeArchitecture.statusNotice}
              </p>
            </div>

            {/* Interactive 3D Range Topology */}
            <div className="mb-8">
              <CyberRangeTopology3D />
            </div>

            {/* Control Plane vs Lab Plane Comparison */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="p-5 rounded-2xl bg-black/50 border border-blue-500/20">
                <h4 className="text-sm font-bold text-blue-400 font-mono mb-3">
                  1. {cyberRangeArchitecture.controlPlane.title}
                </h4>
                <ul className="space-y-1.5 text-xs text-gray-300">
                  {cyberRangeArchitecture.controlPlane.items.map((it, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-blue-400">&bull;</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-black/50 border border-[#E57A00]/20">
                <h4 className="text-sm font-bold text-[#E57A00] font-mono mb-3">
                  2. {cyberRangeArchitecture.labPlane.title}
                </h4>
                <ul className="space-y-1.5 text-xs text-gray-300">
                  {cyberRangeArchitecture.labPlane.items.map((it, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#E57A00]">&bull;</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Non-negotiable safety controls */}
            <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/20 text-xs text-gray-300">
              <span className="text-red-400 font-mono font-bold block mb-1">
                Non-Negotiable Safety Controls:
              </span>
              <div className="space-y-1">
                {cyberRangeArchitecture.safetyControls.map((sc, i) => (
                  <div key={i} className="flex items-start gap-2 text-[11px] text-gray-400">
                    <span className="text-red-400 font-mono">&gt;</span>
                    <span>{sc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
