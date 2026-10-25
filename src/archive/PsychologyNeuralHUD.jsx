import React, { useState, useEffect } from 'react';
import { Brain, Activity, Zap } from 'lucide-react';

export default function PsychologyNeuralHUD() {
  const [pulseLevel, setPulseLevel] = useState(94);
  const [cognitiveLoad, setCognitiveLoad] = useState(38);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseLevel(Math.floor(92 + Math.random() * 6));
      setCognitiveLoad(Math.floor(34 + Math.random() * 8));
    }, 1400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-[380px] mx-auto select-none font-mono flex flex-col items-center">
      {/* Top Borderless Telemetry Header */}
      <div className="w-full flex items-center justify-between px-2 pb-2 text-[10px] text-gray-400">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="text-[#0FB7B7] font-bold tracking-wider">
            NEURAL-HUD // COGNITIVE LAB
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[9px] text-cyan-300">LOAD: {cognitiveLoad}%</span>
          <span>&bull;</span>
          <span className="text-[9px]">SYNC: 100%</span>
        </div>
      </div>

      {/* THE CIRCULAR HOLOGRAPHIC NEURAL SPHERE (Unboxed) */}
      <div className="relative w-[300px] h-[300px] sm:w-[320px] sm:h-[320px] my-2 flex items-center justify-center">
        
        {/* Bezel Outer Glow Ring */}
        <div className="absolute inset-0 rounded-full border-2 border-[#0FB7B7]/50 shadow-[0_0_35px_rgba(15,183,183,0.35)] pointer-events-none"></div>

        {/* Hex Grid Background */}
        <div className="absolute inset-[4px] rounded-full bg-[#030c12] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#0fb7b718_1px,transparent_1px)] [background-size:14px_14px] opacity-60"></div>
        </div>

        {/* Concentric Neural Rings */}
        <div className="absolute inset-8 rounded-full border border-dashed border-[#0FB7B7]/30 animate-spin" style={{ animationDuration: '40s' }}></div>
        <div className="absolute inset-16 rounded-full border border-[#0FB7B7]/25"></div>
        <div className="absolute inset-24 rounded-full border border-dotted border-cyan-400/40 animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>

        {/* Dynamic Brain Central Node */}
        <div className="relative z-10 w-24 h-24 rounded-full bg-[#021017]/95 border-2 border-[#0FB7B7]/70 flex flex-col items-center justify-center shadow-[0_0_30px_rgba(15,183,183,0.4)]">
          <Brain className="w-10 h-10 text-cyan-400 animate-pulse" />
          <span className="text-[8px] font-mono text-cyan-200 mt-1 font-bold">SYNAPSE ACTIVE</span>
        </div>

        {/* Orbiting Cognitive Markers */}
        <div 
          className="absolute z-20 flex items-center gap-1.5 pointer-events-none"
          style={{ top: '65px', left: '60px' }}
        >
          <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400 shadow-[0_0_6px_#22d3ee]"></span>
          <div className="bg-black/90 px-1.5 py-0.5 rounded border border-cyan-500/50 text-[8px] text-cyan-300 font-bold">
            PHISH-COG: 99.4%
          </div>
        </div>

        <div 
          className="absolute z-20 flex items-center gap-1.5 pointer-events-none"
          style={{ bottom: '70px', right: '55px' }}
        >
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400 shadow-[0_0_6px_#34d399]"></span>
          <div className="bg-black/90 px-1.5 py-0.5 rounded border border-emerald-500/50 text-[8px] text-emerald-300 font-bold">
            HUMAN-GATE: ACTIVE
          </div>
        </div>

        <div 
          className="absolute z-20 flex items-center gap-1.5 pointer-events-none"
          style={{ top: '80px', right: '60px' }}
        >
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0FB7B7] shadow-[0_0_6px_#0fb7b7]"></span>
          <div className="bg-black/90 px-1.5 py-0.5 rounded border border-white/20 text-[8px] text-gray-300 font-bold">
            BURNOUT-SHIELD
          </div>
        </div>

        {/* Glass CRT Flare */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-cyan-400/[0.03] to-cyan-400/[0.08] pointer-events-none"></div>
      </div>

      {/* BOTTOM BORDERLESS TELEMETRY READOUT */}
      <div className="w-full flex items-center justify-between px-2 pt-2 text-[10px] text-gray-400">
        <div className="flex items-center gap-1.5">
          <span>RESILIENCE:</span>
          <strong className="text-white font-mono bg-white/5 px-1.5 py-0.5 rounded border border-white/10">
            {pulseLevel}%
          </strong>
        </div>

        <div className="text-[9px] text-[#1ED8D8] flex items-center gap-1 font-bold">
          <Activity className="w-3.5 h-3.5 text-[#0FB7B7] animate-pulse" />
          <span>HEURISTIC LIVE</span>
        </div>

        <div className="text-emerald-400 flex items-center gap-1 text-[9px] font-bold">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          NEURAL LOCK
        </div>
      </div>
    </div>
  );
}
