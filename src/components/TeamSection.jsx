import React from 'react';
import { motion } from 'framer-motion';
import { REDKROSS_DATA } from '../data/redkrossData';
import { 
  Users, 
  FileCheck2, 
  CheckCircle2
} from 'lucide-react';
import Members from '@/components/ui/members-03';

export default function TeamSection() {
  const { institution } = REDKROSS_DATA;

  return (
    <section id="team" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#040406] border-t border-white/5 select-none overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[350px] bg-[#E57A00]/[0.03] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* SECTION HEADER: Verbatim from Profile Spec Section 6 */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300 mb-4 backdrop-blur-md"
          >
            <Users className="w-3.5 h-3.5 text-[#E57A00]" />
            <span>LEADERSHIP, GOVERNANCE & ROLES</span>
            <span className="text-gray-500 hidden sm:inline">&bull; VERIFIED PROFILES</span>
          </motion.div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-5 font-royal" style={{ perspective: '1000px' }}>
            Leadership & <span className="gradient-text">Governance</span>
          </h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl mx-auto font-sans"
          >
            Confirmed leadership and governance roles for RedKross Research Foundation, steering strategic direction, institutional alignment, research standards, and engineering architecture.
          </motion.p>
        </div>

        {/* INTEGRATED SHADCN MEMBERS-03 COMPONENT */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <Members />
        </motion.div>

        {/* LEGAL REGISTRATION & STATUTORY PROFILE (From Profile Spec Section 8 & 9) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl p-7 sm:p-10 bg-[#07090f]/90 border border-white/10 backdrop-blur-2xl shadow-2xl relative overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-8 pb-6 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#0FB7B7] uppercase tracking-wider mb-2">
                <FileCheck2 className="w-4 h-4" />
                <span>Statutory & Corporate Credentials</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-royal">
                Legal Entity & Institutional Compliance
              </h3>
            </div>
            <span className="text-xs font-mono px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold shrink-0">
              Active & Publicly Audited
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs font-mono">
            <div className="p-4 rounded-2xl bg-black/50 border border-white/5">
              <span className="text-gray-400 block mb-1">Corporate ID (CIN)</span>
              <span className="text-white font-bold text-sm text-[#FFA439]">
                {institution.cin}
              </span>
              <span className="text-[10px] text-gray-500 block mt-1">
                RoC Haryana, Section 8
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-black/50 border border-white/5">
              <span className="text-gray-400 block mb-1">Incorporation Date</span>
              <span className="text-white font-bold text-sm">
                {institution.incorporationDate}
              </span>
              <span className="text-[10px] text-gray-500 block mt-1">
                Commenced: {institution.beganDate}
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-black/50 border border-white/5">
              <span className="text-gray-400 block mb-1">NGO Darpan Status</span>
              <span className="text-emerald-400 font-bold text-sm flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Registered NITI Aayog</span>
              </span>
              <span className="text-[10px] text-gray-500 block mt-1">
                Voluntary Action Cell
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-black/50 border border-white/5">
              <span className="text-gray-400 block mb-1">Registered Headquarters</span>
              <span className="text-white font-bold text-xs line-clamp-2">
                Panipat, Haryana 132103
              </span>
              <span className="text-[10px] text-gray-500 block mt-1">
                India
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
