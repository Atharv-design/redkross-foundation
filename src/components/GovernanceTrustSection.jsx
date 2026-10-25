import React from 'react';
import { motion } from 'framer-motion';
import { REDKROSS_DATA } from '../data/redkrossData';
import { 
  ShieldCheck, 
  Lock, 
  FileText, 
  AlertTriangle, 
  CheckCircle2, 
  Mail, 
  ExternalLink 
} from 'lucide-react';
import GradientHoverCard from './motion/GradientHoverCard';

export default function GovernanceTrustSection() {
  const { governance, institution } = REDKROSS_DATA;

  return (
    <section id="governance" className="py-24 px-6 relative bg-[#040406] border-t border-white/5 select-none">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading: Verbatim from Spec Section 12 & 15 */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-400 mb-4"
          >
            <span>Governance, Safeguarding & Compliance</span>
          </motion.div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4 font-royal" style={{ perspective: '1000px' }}>
            Governance. <span className="gradient-text font-royal">Trust Is Part of the Research.</span>
          </h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-gray-300 text-sm sm:text-base leading-relaxed"
          >
            We aim to approach research and innovation with integrity, respect for privacy, appropriate ethical oversight and clear accountability. Responsible practice shapes how projects are designed, conducted and communicated.
          </motion.p>
        </div>

        {/* 3 Core Governance Pillars */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          <GradientHoverCard
            glowColor="rgba(229, 122, 0, 0.12)"
            borderColor="rgba(229, 122, 0, 0.3)"
            className="p-7 bg-[#0b0e14] border border-white/10"
          >
            <div className="w-10 h-10 rounded-xl bg-[#E57A00]/10 border border-[#E57A00]/30 flex items-center justify-center text-[#E57A00] mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              Research Ethics & Oversight
            </h3>
            <p className="text-xs text-gray-300 leading-relaxed mb-4">
              {governance.ethics} Work involving sensitive topics, human participants or cyber testing requires written permission, scoped authorization and independent review.
            </p>
            <div className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Independent QA & Review Gate</span>
            </div>
          </GradientHoverCard>

          <GradientHoverCard
            glowColor="rgba(15, 183, 183, 0.12)"
            borderColor="rgba(15, 183, 183, 0.3)"
            className="p-7 bg-[#0b0e14] border border-white/10"
          >
            <div className="w-10 h-10 rounded-xl bg-[#0FB7B7]/10 border border-[#0FB7B7]/30 flex items-center justify-center text-[#0FB7B7] mb-4">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              Privacy by Design & Data Safety
            </h3>
            <p className="text-xs text-gray-300 leading-relaxed mb-4">
              {governance.privacy} Student projects strictly use synthetic data and authorized public sources. No real credentials or confidential data are ever exposed.
            </p>
            <div className="text-[11px] font-mono text-cyan-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Data Minimization Standard</span>
            </div>
          </GradientHoverCard>

          <GradientHoverCard
            glowColor="rgba(240, 165, 0, 0.12)"
            borderColor="rgba(240, 165, 0, 0.3)"
            className="p-7 bg-[#0b0e14] border border-white/10"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              Safeguarding & Escalation
            </h3>
            <p className="text-xs text-gray-300 leading-relaxed mb-4">
              {governance.safeguarding} Conduct standards apply across all cohorts, workshops, research repositories and digital channels.
            </p>
            <div className="text-[11px] font-mono text-amber-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Supervised Workstreams</span>
            </div>
          </GradientHoverCard>
        </motion.div>

        {/* RESPONSIBLE SECURITY DISCLOSURE PANEL (Verbatim Section 15 Cybersecurity Spec) */}
        <motion.div 
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="p-8 sm:p-12 rounded-3xl bg-[#090d16] border border-[#E57A00]/30 shadow-2xl"
        >
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-mono text-[#E57A00] mb-2 font-bold">
                <AlertTriangle className="w-4 h-4" />
                <span>{governance.responsibleDisclosure.heading}</span>
              </div>
              <h3 className="text-2xl font-black text-white mb-3">
                Security Research Requires Responsibility
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6">
                {governance.responsibleDisclosure.statement}
              </p>

              <div className="space-y-2 mb-6">
                <div className="text-xs font-mono font-bold text-gray-200">
                  Responsible Disclosure Principles:
                </div>
                {governance.responsibleDisclosure.rules.map((rule, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-gray-400">
                    <span className="text-[#E57A00] font-mono font-bold">{idx + 1}.</span>
                    <span>{rule}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-black/60 border border-white/10 w-full lg:w-80 shrink-0">
              <div className="text-xs font-mono text-gray-400 mb-2">
                Verified Security Reporting:
              </div>
              <a
                href={`mailto:${governance.responsibleDisclosure.reportingAddress}`}
                className="text-sm font-mono text-[#E57A00] font-bold hover:underline flex items-center gap-2 mb-4 break-all"
              >
                <Mail className="w-4 h-4 shrink-0" />
                <span>{governance.responsibleDisclosure.reportingAddress}</span>
              </a>
              <p className="text-[11px] text-gray-500 leading-tight">
                Include affected asset, safe reproduction steps and relevant proof of concept. Do not include passwords or sensitive customer data.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
