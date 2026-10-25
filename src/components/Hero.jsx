import React, { useEffect, useRef, useState } from 'react';
import { Compass, Sparkles, ChevronDown } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TypewriterText from './TypewriterText';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  const totalFrames = 160;

  // Helper to draw an image onto canvas maintaining cover aspect ratio
  const drawImageToCanvas = (img) => {
    const canvas = canvasRef.current;
    if (!canvas || !img) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const imgRatio = img.width / img.height;
    const canvasRatio = canvasWidth / canvasHeight;

    let drawWidth, drawHeight, offsetX, offsetY;

    if (canvasRatio > imgRatio) {
      drawWidth = canvasWidth;
      drawHeight = canvasWidth / imgRatio;
      offsetX = 0;
      offsetY = (canvasHeight - drawHeight) / 2;
    } else {
      drawWidth = canvasHeight * imgRatio;
      drawHeight = canvasHeight;
      offsetX = (canvasWidth - drawWidth) / 2;
      offsetY = 0;
    }

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  // 1. Two-Tier Frame Preloader: Immediate Priority for Instant Render + Staggered Idle Chunks
  useEffect(() => {
    let isCancelled = false;
    let loadedCount = 0;
    const images = new Array(totalFrames);

    const loadImage = (index) => {
      return new Promise((resolve) => {
        const img = new Image();
        const paddedIndex = String(index + 1).padStart(3, '0');
        img.src = `/frames/ezgif-frame-${paddedIndex}.jpg`;

        const markDone = () => {
          if (!isCancelled) {
            images[index] = img;
            loadedCount++;
            setLoadProgress(Math.floor((loadedCount / totalFrames) * 100));
          }
          resolve();
        };

        img.onload = markDone;
        img.onerror = markDone;
      });
    };

    // Priority Tier: Load first 16 frames immediately for instant above-the-fold canvas
    const priorityCount = 16;
    const priorityPromises = [];
    for (let i = 0; i < priorityCount; i++) {
      priorityPromises.push(loadImage(i));
    }

    Promise.all(priorityPromises).then(() => {
      if (isCancelled) return;
      imagesRef.current = images;
      setImagesLoaded(true);

      // Background Tier: Stream remaining frames in non-blocking batches
      let currentBatchStart = priorityCount;
      const batchSize = 16;

      const loadNextBatch = () => {
        if (isCancelled || currentBatchStart >= totalFrames) return;
        const batchPromises = [];
        const end = Math.min(currentBatchStart + batchSize, totalFrames);
        for (let i = currentBatchStart; i < end; i++) {
          batchPromises.push(loadImage(i));
        }
        currentBatchStart = end;

        Promise.all(batchPromises).then(() => {
          if (!isCancelled && currentBatchStart < totalFrames) {
            if ('requestIdleCallback' in window) {
              window.requestIdleCallback(() => loadNextBatch(), { timeout: 300 });
            } else {
              setTimeout(loadNextBatch, 60);
            }
          }
        });
      };

      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(() => loadNextBatch(), { timeout: 300 });
      } else {
        setTimeout(loadNextBatch, 60);
      }
    });

    return () => {
      isCancelled = true;
    };
  }, []);

  // 2. High performance canvas drawer with graceful fallback to nearest ready frame
  const renderFrame = (index) => {
    if (!imagesRef.current) return;
    const clampedIndex = Math.max(0, Math.min(totalFrames - 1, index));
    const img = imagesRef.current[clampedIndex];

    if (img && img.complete && img.naturalWidth > 0) {
      drawImageToCanvas(img);
      return;
    }

    // Nearest loaded frame fallback to guarantee 0 canvas flicker during fast scrubs
    for (let offset = 1; offset < totalFrames; offset++) {
      const prev = imagesRef.current[clampedIndex - offset];
      if (prev && prev.complete && prev.naturalWidth > 0) {
        drawImageToCanvas(prev);
        return;
      }
      const next = imagesRef.current[clampedIndex + offset];
      if (next && next.complete && next.naturalWidth > 0) {
        drawImageToCanvas(next);
        return;
      }
    }
  };

  // 3. Resize sync
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      if (imagesLoaded) renderFrame(0);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [imagesLoaded]);

  // 4. GSAP ScrollTrigger Frame Scrubber with debounced tween cleanup
  useEffect(() => {
    if (!imagesLoaded || !containerRef.current || !canvasRef.current) return;

    const frameObj = { frame: 0 };

    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: '+=350%',
      pin: true,
      scrub: 0.6,
      onUpdate: (self) => {
        const targetFrame = Math.round(self.progress * (totalFrames - 1));
        gsap.killTweensOf(frameObj);
        gsap.to(frameObj, {
          frame: targetFrame,
          duration: 0.08,
          ease: 'none',
          onUpdate: () => {
            renderFrame(Math.round(frameObj.frame));
          }
        });
      }
    });

    renderFrame(0);

    return () => {
      gsap.killTweensOf(frameObj);
      trigger.kill();
    };
  }, [imagesLoaded]);

  const handleScrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) {
      const offset = 80;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  const heroTones = [
    "Exploring cybersecurity, artificial intelligence and digital forensics.",
    "Connecting technical investigation with human-centred thinking.",
    "Bridging academic learning and real-world project development.",
    "Two interconnected pillars: Digital Security and Human Wellbeing."
  ];

  return (
    <section ref={containerRef} id="hero" className="relative w-full h-screen bg-[#040406] select-none overflow-hidden">
      
      {/* 1. Fullscreen 3D Eagle Frame Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
      />

      {/* 2. Cinematic Gradient Edge Vignette (Top is crystal clear for clean nav, bottom darkens for text) */}
      <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-[#040406] via-[#040406]/75 to-transparent pointer-events-none z-10" />

      {/* 3. Preloader */}
      {!imagesLoaded && (
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#040406]/95 backdrop-blur-2xl">
          <div className="w-12 h-12 rounded-full border-2 border-[#E57A00]/20 border-t-[#E57A00] animate-spin mb-4" />
          <span className="font-royal text-xs font-bold text-white tracking-widest uppercase">
            Loading Cinematic 3D
          </span>
          <span className="font-mono text-[10px] text-[#E57A00] mt-1">
            {loadProgress}%
          </span>
        </div>
      )}

      {/* 4. DESIGNER BOTTOM HORIZON (Center Eagle is 100% Unobstructed) */}
      <div className="absolute bottom-8 inset-x-0 z-20 px-6 sm:px-12 pointer-events-none">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-end lg:items-center justify-between gap-6 pointer-events-auto">
          
          {/* Left Column: Big Royal Statement Headline */}
          <div className="max-w-2xl">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-royal font-extrabold text-white tracking-wide leading-tight mb-2">
              Research for a Safer, <br className="hidden sm:block" />
              <span className="gradient-text font-royal">More Resilient World.</span>
            </h1>

            {/* Typewriter single-line ticker */}
            <div className="flex items-center gap-2 text-xs font-mono text-gray-300">
              <span className="text-[#E57A00] font-bold">&gt;</span>
              <TypewriterText 
                phrases={heroTones} 
                typingSpeed={38} 
                deletingSpeed={18} 
                pauseTime={2500}
                className="text-gray-200 font-mono"
              />
            </div>
          </div>

          {/* Right Column: Luxury Action Pills & Scroll Cue */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button
              onClick={() => handleScrollTo('#projects')}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#E57A00] to-[#FF9E2C] text-black font-royal font-bold text-xs tracking-wider shadow-[0_0_30px_rgba(229,122,0,0.4)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer uppercase whitespace-nowrap"
            >
              <span>Explore Research</span>
              <Compass className="w-4 h-4" />
            </button>

            <button
              onClick={() => handleScrollTo('#pillars')}
              className="px-6 py-3 rounded-full bg-white/[0.04] border border-white/20 text-white font-royal font-bold text-xs tracking-wider hover:border-[#0FB7B7] hover:text-[#0FB7B7] hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer uppercase whitespace-nowrap backdrop-blur-xl"
            >
              <span>Our Pillars</span>
              <Sparkles className="w-4 h-4 text-[#0FB7B7]" />
            </button>

            {/* Subtle Scroll Cue */}
            <div className="hidden xl:flex items-center gap-2 text-[10px] font-mono text-gray-400 uppercase tracking-widest pl-3 border-l border-white/10">
              <span>Scroll to scrub</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#E57A00] animate-bounce" />
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
