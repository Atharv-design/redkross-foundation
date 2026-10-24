import React, { useState, useEffect } from 'react';

export default function CyberTacticalRadar() {
  const [bearing, setBearing] = useState(42);

  // Smooth realistic radar sweep rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setBearing((prev) => (prev + 1) % 360);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  // Generate azimuth degree ticks (every 10 degrees major, every 5 degrees minor)
  const ticks = [];
  for (let deg = 0; deg < 360; deg += 5) {
    const isMajor = deg % 10 === 0;
    const isCard = deg % 90 === 0;
    const isLabel = deg % 30 === 0;
    const rad = (deg - 90) * (Math.PI / 180);
    const rOuter = 146;
    const rInner = isCard ? 134 : isMajor ? 138 : 142;
    const x1 = 160 + rOuter * Math.cos(rad);
    const y1 = 160 + rOuter * Math.sin(rad);
    const x2 = 160 + rInner * Math.cos(rad);
    const y2 = 160 + rInner * Math.sin(rad);

    ticks.push(
      <line
        key={`tick-${deg}`}
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={isCard ? '#FFA439' : isMajor ? '#E57A00' : 'rgba(229,122,0,0.35)'}
        strokeWidth={isCard ? 2 : isMajor ? 1.5 : 0.8}
      />
    );

    if (isLabel && !isCard) {
      const rText = 126;
      const tx = 160 + rText * Math.cos(rad);
      const ty = 160 + rText * Math.sin(rad);
      ticks.push(
        <text
          key={`txt-${deg}`}
          x={tx}
          y={ty + 3}
          fill="rgba(229,122,0,0.7)"
          fontSize="7.5"
          fontFamily="monospace"
          fontWeight="bold"
          textAnchor="middle"
        >
          {String(deg).padStart(3, '0')}
        </text>
      );
    }
  }

  return (
    <div className="relative w-full max-w-[380px] mx-auto select-none font-mono flex flex-col items-center">
      {/* Top Borderless Telemetry Header */}
      <div className="w-full flex items-center justify-between px-2 pb-2 text-[10px] text-gray-400">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[#E57A00] font-bold tracking-wider">
            CYBER-RADAR // AN-FPS-42
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[9px] text-[#FFA439]">PRF: 1200Hz</span>
          <span>&bull;</span>
          <span className="text-[9px]">RNG: 100KM</span>
        </div>
      </div>

      {/* THE CIRCULAR RADAR PPI DISPLAY (Unboxed, completely borderless background) */}
      <div className="relative w-[300px] h-[300px] sm:w-[320px] sm:h-[320px] my-2 flex items-center justify-center">
        
        {/* Bezel Outer Glow Ring */}
        <div className="absolute inset-0 rounded-full border-2 border-[#E57A00]/50 shadow-[0_0_35px_rgba(229,122,0,0.35)] pointer-events-none"></div>

        {/* SVG Azimuth & Polar Coordinate Grid */}
        <svg className="w-full h-full" viewBox="0 0 320 320">
          <defs>
            <radialGradient id="radarGlass" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#0a121e" stopOpacity="0.95" />
              <stop offset="85%" stopColor="#04090e" stopOpacity="0.98" />
              <stop offset="100%" stopColor="#010408" stopOpacity="1" />
            </radialGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Scope Phosphor Background */}
          <circle cx="160" cy="160" r="148" fill="url(#radarGlass)" />

          {/* Concentric Range Rings (25km, 50km, 75km, 100km) */}
          <circle cx="160" cy="160" r="35" fill="none" stroke="rgba(229,122,0,0.22)" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="160" cy="160" r="70" fill="none" stroke="rgba(229,122,0,0.28)" strokeWidth="1" />
          <circle cx="160" cy="160" r="105" fill="none" stroke="rgba(229,122,0,0.22)" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="160" cy="160" r="140" fill="none" stroke="rgba(229,122,0,0.4)" strokeWidth="1.2" />

          {/* Range Labels cleanly aligned at 45° angle */}
          <text x="188" y="140" fill="rgba(229,122,0,0.5)" fontSize="6.5" fontFamily="monospace">25KM</text>
          <text x="214" y="115" fill="rgba(229,122,0,0.5)" fontSize="6.5" fontFamily="monospace">50KM</text>
          <text x="240" y="90" fill="rgba(229,122,0,0.5)" fontSize="6.5" fontFamily="monospace">75KM</text>
          <text x="264" y="65" fill="rgba(229,122,0,0.7)" fontSize="6.5" fontFamily="monospace" fontWeight="bold">100KM</text>

          {/* Primary Crosshairs (N-S, E-W) with sub-ticks */}
          <line x1="160" y1="20" x2="160" y2="300" stroke="rgba(229,122,0,0.3)" strokeWidth="1" />
          <line x1="20" y1="160" x2="300" y2="160" stroke="rgba(229,122,0,0.3)" strokeWidth="1" />
          
          {/* 45° and 135° Diagonals */}
          <line x1="61" y1="61" x2="259" y2="259" stroke="rgba(229,122,0,0.15)" strokeWidth="0.8" strokeDasharray="4 4" />
          <line x1="259" y1="61" x2="61" y2="259" stroke="rgba(229,122,0,0.15)" strokeWidth="0.8" strokeDasharray="4 4" />

          {/* All Azimuth Ticks & Degree Numbers */}
          {ticks}

          {/* Cardinal Navigation Letters */}
          <text x="160" y="24" fill="#FFA439" fontSize="10" fontWeight="black" fontFamily="monospace" textAnchor="middle" filter="url(#glow)">N</text>
          <text x="160" y="306" fill="#FFA439" fontSize="10" fontWeight="black" fontFamily="monospace" textAnchor="middle" filter="url(#glow)">S</text>
          <text x="306" y="163" fill="#FFA439" fontSize="10" fontWeight="black" fontFamily="monospace" textAnchor="middle" filter="url(#glow)">E</text>
          <text x="14" y="163" fill="#FFA439" fontSize="10" fontWeight="black" fontFamily="monospace" textAnchor="middle" filter="url(#glow)">W</text>

          {/* Center Origin Reticle with Center Ring */}
          <circle cx="160" cy="160" r="8" fill="rgba(229,122,0,0.15)" stroke="#E57A00" strokeWidth="1.2" />
          <circle cx="160" cy="160" r="2.5" fill="#FFA439" />
        </svg>

        {/* REAL-TIME ROTATING PHOSPHOR SWEEP BEAM */}
        <div 
          className="absolute inset-[10px] rounded-full overflow-hidden pointer-events-none origin-center"
          style={{
            transform: `rotate(${bearing}deg)`,
            transition: 'transform 0.03s linear'
          }}
        >
          {/* Multi-stop decaying phosphor cone wake */}
          <div 
            className="w-1/2 h-full ml-auto"
            style={{
              background: 'conic-gradient(from 180deg at 0% 50%, rgba(229,122,0,0.55) 0deg, rgba(229,122,0,0.22) 25deg, rgba(229,122,0,0.06) 55deg, transparent 75deg)'
            }}
          />
          {/* High-intensity leading radar laser edge */}
          <div className="absolute top-0 right-1/2 w-[1.5px] h-1/2 bg-gradient-to-t from-[#FFA439] via-[#E57A00] to-transparent shadow-[0_0_12px_#FFA439]"></div>
        </div>

        {/* TACTICAL BLIP 1: RED HOSTILE THREAT */}
        <div 
          className="absolute z-20 flex items-center gap-1.5 pointer-events-none"
          style={{ top: '88px', left: '202px' }}
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500 shadow-[0_0_10px_#ef4444]"></span>
          </span>
          <div className="bg-black/90 px-1.5 py-0.5 rounded border border-red-500/50 flex flex-col text-[8px] leading-tight shadow-lg">
            <span className="text-red-400 font-bold">THREAT #01</span>
            <span className="text-[7px] text-gray-400">CVSS 9.8</span>
          </div>
        </div>

        {/* TACTICAL BLIP 2: EMERALD SECURE DEFENSE NODE */}
        <div 
          className="absolute z-20 flex items-center gap-1.5 pointer-events-none"
          style={{ top: '210px', left: '78px' }}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400 shadow-[0_0_8px_#10b981]"></span>
          </span>
          <div className="bg-black/90 px-1.5 py-0.5 rounded border border-emerald-500/50 flex flex-col text-[8px] leading-tight shadow-lg">
            <span className="text-emerald-400 font-bold">NODE-OK</span>
            <span className="text-[7px] text-gray-400">SOC LIVE</span>
          </div>
        </div>

        {/* TACTICAL BLIP 3: AMBER ANOMALY PROBE */}
        <div 
          className="absolute z-20 flex items-center gap-1.5 pointer-events-none"
          style={{ top: '136px', left: '72px' }}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FFA439] shadow-[0_0_8px_#FFA439]"></span>
          </span>
          <div className="bg-black/90 px-1.5 py-0.5 rounded border border-[#E57A00]/50 flex flex-col text-[8px] leading-tight shadow-lg">
            <span className="text-[#FFA439] font-bold">PROBE</span>
            <span className="text-[7px] text-gray-400">PORT 443</span>
          </div>
        </div>

        {/* Glass CRT Curved Reflection Flare */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.08] pointer-events-none"></div>
      </div>

      {/* BOTTOM BORDERLESS TELEMETRY READOUT */}
      <div className="w-full flex items-center justify-between px-2 pt-2 text-[10px] text-gray-400">
        <div className="flex items-center gap-1.5">
          <span>BRG:</span>
          <strong className="text-white font-mono bg-white/5 px-1.5 py-0.5 rounded border border-white/10">
            {String(bearing).padStart(3, '0')}°
          </strong>
        </div>

        <div className="text-[9px] text-[#FFA439] flex items-center gap-1 font-bold">
          <span className="flex gap-0.5 items-end h-2.5">
            <span className="w-0.5 h-1.5 bg-[#FFA439] animate-pulse"></span>
            <span className="w-0.5 h-2.5 bg-[#FFA439] animate-pulse" style={{ animationDelay: '0.2s' }}></span>
            <span className="w-0.5 h-2 bg-[#FFA439] animate-pulse" style={{ animationDelay: '0.4s' }}></span>
          </span>
          <span>3 TARGETS TRACKED</span>
        </div>

        <div className="text-emerald-400 flex items-center gap-1 text-[9px] font-bold">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          SHIELD LOCKED
        </div>
      </div>
    </div>
  );
}
