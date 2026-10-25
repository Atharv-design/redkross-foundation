import React from 'react';
import { 
  GraduationCap, 
  Terminal, 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  Code, 
  Sparkles, 
  Calendar,
  Lock,
  Clock
} from 'lucide-react';
import { REDKROSS_META } from '../data/redkrossData';

export default function TrainingAndStudents() {
  return (
    <section id="internships" className="py-24 px-6 relative bg-[#060608]">
      {/* Visual Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#E57A00]/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#E57A00]/10 border border-[#E57A00]/25 text-[#E57A00] text-xs font-mono mb-3">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Section 06 // Education, Internships & Students</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Hands-On Learning & <span className="gradient-text">Student Innovation</span>
            </h2>
            <p className="text-gray-400 text-base mt-3 leading-relaxed">
              Moving beyond passive lectures: RedKross pairs students directly with live research problems, verifiable capstones, and cryptographic certificate issuance.
            </p>
          </div>

          <div className="text-left md:text-right">
            <span className="text-xs font-mono text-gray-400 block">Certificate Registry:</span>
            <a 
              href="https://redkross.org.in/verify"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-[#0FB7B7] hover:underline"
            >
              redkross.org.in/verify &rarr;
            </a>
          </div>
        </div>

        {/* 3 Structured Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Card 1: 8-Week Research Internship */}
          <div className="glass neon-border rounded-2xl p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-[#E57A00] uppercase tracking-wider">
                  Flagship Program
                </span>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30">
                  Applications Closed
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                Cybersecurity Research Internship
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                An intensive 8-week, project-based engineering internship. Participants learn threat intelligence, OSINT, firmware reverse-engineering, and static security analysis by constructing demonstrable open-source capstones.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2.5 text-xs text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-[#E57A00] flex-shrink-0 mt-0.5" />
                  <span>Duration: 8 Weeks Structured Sprints</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-[#E57A00] flex-shrink-0 mt-0.5" />
                  <span>Output: Verified Capstone in Public GitHub</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-[#E57A00] flex-shrink-0 mt-0.5" />
                  <span>Credential: Cryptographically Verifiable Certificate</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 text-xs font-mono text-gray-500">
              Reference: redkross.org.in/programmes
            </div>
          </div>

          {/* Card 2: Student Innovation Lab */}
          <div className="glass neon-border rounded-2xl p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-[#0FB7B7] uppercase tracking-wider">
                  Incubation Engine
                </span>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  Active Ecosystem
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                Student Innovation Lab
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Where student research transforms into production tooling. Interns collaborate across cross-functional squads to engineer models like DeepScan AI and platforms like FirmStrike.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2.5 text-xs text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-[#0FB7B7] flex-shrink-0 mt-0.5" />
                  <span>22 Verified Contributors across featured repos</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-[#0FB7B7] flex-shrink-0 mt-0.5" />
                  <span>Strict code review, AST tests, and safe sandboxing</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-[#0FB7B7] flex-shrink-0 mt-0.5" />
                  <span>Public open-source attribution on GitHub</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 text-xs font-mono text-gray-500">
              Reference: redkross.org.in/innovation-lab
            </div>
          </div>

          {/* Card 3: Planned Academy Tracks */}
          <div className="glass-dark rounded-2xl p-7 flex flex-col justify-between border border-white/10">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-purple-400 uppercase tracking-wider">
                  Next-Gen Platform
                </span>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/30">
                  Target Q1 2027
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                RedKross Academy
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Currently in formal architectural specification. The Academy will offer self-paced learning paths mapped to MITRE ATT&amp;CK and D3FEND frameworks with automated lab provisioning.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2.5 text-xs text-gray-300">
                  <Clock className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>Track 1: Offensive Ethical Hacking & Exploit Dev</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-gray-300">
                  <Clock className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>Track 2: Digital Forensics & Incident Response</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-gray-300">
                  <Clock className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>Track 3: Applied Cyber Psychology & Human Factors</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 text-xs font-mono text-gray-500">
              Master Black Book Architecture Stage
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
