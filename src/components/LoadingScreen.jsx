import React, { useState, useEffect } from 'react';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 1600; // 1.6s smooth realistic preloader

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsLoading(false);
          setTimeout(() => setShouldRender(false), 700);
        }, 150);
      }
    }, 25);

    return () => clearInterval(interval);
  }, []);

  if (!shouldRender) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#060608] transition-all duration-700 select-none ${
        isLoading ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
      }`}
    >
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 cyber-grid-bg opacity-40 pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Pulsing Concentric Rings & Central Logo */}
        <div className="relative flex items-center justify-center mb-10 w-48 h-48">
          <span 
            className="absolute rounded-full pointer-events-none" 
            style={{
              width: '64px',
              height: '64px',
              border: '1px solid rgba(229,122,0,.35)',
              animation: 'pulseRing 1.5s ease-out infinite',
              animationDelay: '0.2s'
            }}
          ></span>
          <span 
            className="absolute rounded-full pointer-events-none" 
            style={{
              width: '128px',
              height: '128px',
              border: '1px solid rgba(229,122,0,.35)',
              animation: 'pulseRing 1.8s ease-out infinite',
              animationDelay: '0.4s'
            }}
          ></span>
          <span 
            className="absolute rounded-full pointer-events-none" 
            style={{
              width: '192px',
              height: '192px',
              border: '1px solid rgba(229,122,0,.35)',
              animation: 'pulseRing 2.1s ease-out infinite',
              animationDelay: '0.6s'
            }}
          ></span>

          {/* Central Logo Box with Glowing Shadow */}
          <div 
            className="w-16 h-16 rounded-xl overflow-hidden flex items-center justify-center bg-[#0e0d0b] border border-[#E57A00]/40 relative z-10"
            style={{ boxShadow: '0 0 32px rgba(229,122,0,.45)' }}
          >
            <img 
              src="/assets/crest-clean-circle.png" 
              alt="RedKross Logo" 
              className="w-12 h-12 object-contain"
            />
          </div>
        </div>

        {/* System Initializing Monospace Title */}
        <p className="font-mono text-sm tracking-[0.3em] mb-6 uppercase text-[#E57A00] font-semibold">
          Initializing System
        </p>

        {/* Progress Bar Track & Fill */}
        <div className="w-64 h-0.5 rounded-full overflow-hidden bg-[rgba(229,122,0,.15)] relative">
          <div 
            className="h-full rounded-full transition-all duration-75 ease-out" 
            style={{
              background: 'linear-gradient(90deg, #E57A00, #0FB7B7)',
              width: `${progress}%`
            }}
          ></div>
        </div>

        {/* Progress Percentage */}
        <p className="font-mono text-gray-400 text-xs mt-3">
          {progress}%
        </p>
      </div>
    </div>
  );
}
