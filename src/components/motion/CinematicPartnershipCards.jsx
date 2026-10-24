import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { 
  GraduationCap, 
  FileText, 
  ShieldCheck, 
  Users, 
  BarChart3, 
  ChevronRight,
  Share2
} from 'lucide-react';

// The 5 Collaboration Themes with specific semantic icons matching visual reference
const THEMES_CONFIG = [
  {
    title: "Cybersecurity Foundation Training",
    description: "Networking, Linux command line, security principles, common vulnerabilities and defensive practices.",
    icon: GraduationCap,
    angle: { rx: 25, ry: -26, rz: -3, z: -180, x: -50, y: 50 },
  },
  {
    title: "Project-Level Thinking",
    description: "Identify problems, review existing literature, define requirements, design architectures, allocate tasks, build prototypes, and document.",
    icon: FileText,
    angle: { rx: -30, ry: 0, rz: 0, z: -220, x: 0, y: 70 },
  },
  {
    title: "Cybersecurity Trainee Development",
    description: "Introductory security assessments, vulnerability management, log analysis, and incident-response concepts in authorised labs.",
    icon: ShieldCheck,
    angle: { rx: 25, ry: 26, rz: 3, z: -180, x: 50, y: 50 },
  },
  {
    title: "Mentored Team Projects",
    description: "Project briefs, version control, collaboration, peer reviews, rigorous testing, and live demonstrations.",
    icon: Users,
    angle: { rx: 28, ry: -18, rz: 2, z: -140, x: -40, y: 60 },
  },
  {
    title: "Project Documentation & Evaluation",
    description: "Technical reports, architecture decision records, reproducible evidence, limitations, and structured presentations.",
    icon: BarChart3,
    angle: { rx: 28, ry: 18, rz: -2, z: -140, x: 40, y: 60 },
  },
];

// Single 3D Interactive Card with Scroll Entry + Dynamic Mouse Tilt
function CinematicCard({ theme, index, total }) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse tilt tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 320, damping: 25 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const tiltX = useTransform(smoothY, [-0.5, 0.5], [12, -12]);
  const tiltY = useTransform(smoothX, [-0.5, 0.5], [-14, 14]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  const Icon = theme.icon;

  return (
    <motion.div
      ref={cardRef}
      initial={{
        opacity: 0,
        rotateX: theme.angle.rx,
        rotateY: theme.angle.ry,
        rotateZ: theme.angle.rz,
        z: theme.angle.z,
        x: theme.angle.x,
        y: theme.angle.y,
      }}
      whileInView={{
        opacity: 1,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        z: 0,
        x: 0,
        y: 0,
      }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{
        duration: 0.85,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[340px] xl:max-w-[360px] min-h-[220px] sm:min-h-[235px] perspective-[1000px] select-none"
    >
      <motion.div
        style={{
          rotateX: isHovered ? tiltX : 0,
          rotateY: isHovered ? tiltY : 0,
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
        }}
        animate={{
          y: isHovered ? -8 : 0,
          scale: isHovered ? 1.03 : 1,
        }}
        transition={{ duration: 0.28, ease: "easeOut" }}
        className={`relative h-full w-full rounded-2xl p-6 sm:p-7 flex flex-col justify-between overflow-hidden transition-all duration-300 ${
          isHovered
            ? "border border-[#FFA439] bg-gradient-to-br from-[#121622]/95 via-[#0b0e16]/98 to-[#06080d] shadow-[0_20px_45px_rgba(0,0,0,0.85),0_0_35px_rgba(229,122,0,0.45),inset_0_0_15px_rgba(229,122,0,0.2)]"
            : "border border-[#E57A00]/30 bg-gradient-to-br from-[#0e111a]/95 via-[#090b12]/98 to-[#05060a] shadow-[0_15px_35px_rgba(0,0,0,0.7),0_8px_25px_rgba(229,122,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.08)]"
        }`}
      >
        {/* Subtle Inner Ambient Glow on Top & Bottom Rim */}
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#FFA439]/60 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#E57A00]/70 to-transparent pointer-events-none" />
        
        {/* Glowing Orange Under-Edge Reflection */}
        <div 
          className={`absolute -bottom-8 inset-x-6 h-12 rounded-full blur-xl pointer-events-none transition-opacity duration-300 ${
            isHovered ? "bg-[#FFA439]/40 opacity-100" : "bg-[#E57A00]/25 opacity-70"
          }`} 
        />

        {/* Top Header: Themed Icon Box */}
        <div className="relative z-10">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E57A00]/25 to-[#E57A00]/5 border border-[#E57A00]/40 flex items-center justify-center text-[#FFA439] shadow-[0_0_15px_rgba(229,122,0,0.25)] mb-4">
            <Icon className="w-5 h-5" />
          </div>

          {/* Title */}
          <h4 className="text-base sm:text-lg font-bold text-white mb-2 font-sans tracking-tight leading-snug">
            {theme.title}
          </h4>

          {/* Description */}
          <p className="text-xs text-gray-300 leading-relaxed font-sans font-normal opacity-90 line-clamp-3">
            {theme.description}
          </p>
        </div>

        {/* Bottom Bar: Action Indicator Arrow */}
        <div className="pt-4 flex items-center justify-end relative z-10">
          <div className="w-7 h-7 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-white group-hover:border-[#E57A00] transition-colors shadow-inner">
            <ChevronRight className="w-3.5 h-3.5 text-[#FFA439]" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function CinematicPartnershipCards() {
  return (
    <div className="relative w-full py-8 my-6">
      
      {/* 3D Perspective Scene Container */}
      <div 
        className="relative w-full max-w-7xl mx-auto px-4"
        style={{ perspective: "1400px", transformStyle: "preserve-3d" }}
      >
        {/* Ambient Amber Light Trails & Orbital Rings Backdrop */}
        <div className="absolute inset-0 -top-16 -bottom-16 flex items-center justify-center pointer-events-none overflow-hidden z-0">
          <svg
            className="w-[125%] h-[150%] max-w-none opacity-50"
            viewBox="0 0 1200 700"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="orbit-grad-1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#E57A00" stopOpacity="0" />
                <stop offset="25%" stopColor="#FFA439" stopOpacity="0.8" />
                <stop offset="75%" stopColor="#E57A00" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#E57A00" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="orbit-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFA439" stopOpacity="0" />
                <stop offset="50%" stopColor="#E57A00" stopOpacity="0.65" />
                <stop offset="100%" stopColor="#FF3B30" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Elliptical Light Trail 1 */}
            <ellipse
              cx="600"
              cy="350"
              rx="560"
              ry="260"
              stroke="url(#orbit-grad-1)"
              strokeWidth="1.8"
              strokeDasharray="8 6"
              className="animate-pulse"
              style={{ animationDuration: "5s" }}
            />

            {/* Elliptical Light Trail 2 (Counter-orbital) */}
            <ellipse
              cx="600"
              cy="370"
              rx="500"
              ry="210"
              stroke="url(#orbit-grad-2)"
              strokeWidth="1.2"
              transform="rotate(-3 600 370)"
            />

            {/* Glowing Amber Orbital Particles */}
            <circle cx="90" cy="330" r="4.5" fill="#FFA439" className="filter drop-shadow-[0_0_8px_#FFA439]" />
            <circle cx="1110" cy="360" r="4" fill="#E57A00" className="filter drop-shadow-[0_0_8px_#E57A00]" />
            <circle cx="1060" cy="270" r="2.5" fill="#FFA439" opacity="0.8" />
            <circle cx="150" cy="420" r="3" fill="#E57A00" opacity="0.85" />
            <circle cx="600" cy="95" r="3" fill="#FFA439" opacity="0.75" />
            <circle cx="600" cy="625" r="2.5" fill="#E57A00" opacity="0.75" />
          </svg>
        </div>

        {/* Card Rows: Top 3 Cards + Bottom 2 Centered Cards */}
        <div className="relative z-10 space-y-6 lg:space-y-8">
          
          {/* Top Row: Exactly 3 Cards on Desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto justify-items-center">
            {THEMES_CONFIG.slice(0, 3).map((theme, i) => (
              <CinematicCard
                key={theme.title}
                theme={theme}
                index={i}
                total={THEMES_CONFIG.length}
              />
            ))}
          </div>

          {/* Bottom Row: 2 Centered Cards */}
          <div className="flex flex-wrap items-center justify-center gap-6 max-w-4xl mx-auto">
            {THEMES_CONFIG.slice(3, 5).map((theme, i) => (
              <CinematicCard
                key={theme.title}
                theme={theme}
                index={i + 3}
                total={THEMES_CONFIG.length}
              />
            ))}
          </div>

        </div>

        {/* Bottom Central Stage Pill: "Where the Pillars Connect" (Matching Reference) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex justify-center relative z-10"
        >
          <a
            href="#pillars"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-black/90 via-[#0d1017]/95 to-black/90 border border-[#E57A00]/50 hover:border-[#FFA439] text-white text-xs sm:text-sm font-sans font-bold shadow-[0_0_30px_rgba(229,122,0,0.35),inset_0_0_15px_rgba(229,122,0,0.15)] hover:shadow-[0_0_45px_rgba(229,122,0,0.55)] transition-all cursor-pointer group"
          >
            <div className="w-6 h-6 rounded-full bg-[#E57A00]/20 flex items-center justify-center text-[#FFA439] group-hover:scale-110 transition-transform">
              <Share2 className="w-3.5 h-3.5" />
            </div>
            <span className="tracking-wide">Where the Pillars Connect</span>
            <ChevronRight className="w-4 h-4 text-[#FFA439] group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

      </div>
    </div>
  );
}
