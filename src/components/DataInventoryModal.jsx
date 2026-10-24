import React, { useState } from 'react';
import { X, CheckCircle2, ExternalLink, ShieldCheck, Database, FileText } from 'lucide-react';

export default function DataInventoryModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const inventoryItems = [
    {
      claim: "Legal Name & Organization Type",
      fact: "RedKross Research Foundation (RKRF) — Registered NGO & Research Foundation in India. Independent of ICRC/IRCS.",
      sourceUrl: "https://redkross.org.in/",
      sourceSection: "Schema.org NGO metadata & Homepage",
      status: "Verified Official",
      date: "Current (2026)"
    },
    {
      claim: "Founding Date",
      fact: "Began operations in April 2026.",
      sourceUrl: "https://redkross.org.in/about",
      sourceSection: "Section: 'Who We Are' & '/roadmap'",
      status: "Verified Official",
      date: "April 2026"
    },
    {
      claim: "Official Headquarters & Phone",
      fact: "Panipat, Haryana 132103, India. Tel: +91 73032 63719, Email: contact@redkross.org.in",
      sourceUrl: "https://redkross.org.in/contact",
      sourceSection: "Contact registry & JSON-LD address block",
      status: "Verified Official",
      date: "Current"
    },
    {
      claim: "Leadership Team",
      fact: "Harsh Rajput (Director), Pallavi (CEO), Ojas Satardekar (Vice President), Piyush (President).",
      sourceUrl: "https://redkross.org.in/governance",
      sourceSection: "Governance Roster // Leadership Team",
      status: "Verified Official",
      date: "Current"
    },
    {
      claim: "Core Mission & Vision",
      fact: "Vision: 'A secure, digitally literate and mentally resilient society, defended by a generation of ethical researchers and builders.' Mission: 'Bridge advanced research and accessible real-world products.'",
      sourceUrl: "https://redkross.org.in/about",
      sourceSection: "About RedKross // Vision & Mission",
      status: "Verified Official",
      date: "Current"
    },
    {
      claim: "Cybersecurity Branch Destination",
      fact: "Cybersecurity Innovation: Automated scanners, firmware analysis, deepfake detection, and isolated Cyber Range.",
      sourceUrl: "https://redkross.org.in/innovation/cybersecurity",
      sourceSection: "Cybersecurity Innovation Portal",
      status: "Verified Official",
      date: "Active Division"
    },
    {
      claim: "Psychology Branch Destination",
      fact: "Applied Psychology Lab: Cyber psychology, security behaviour, and human factors in defense.",
      sourceUrl: "https://redkross.org.in/research/labs",
      sourceSection: "Research Labs // Applied Psychology Lab",
      status: "Verified Official",
      date: "Active Lab & Planned Track"
    },
    {
      claim: "GitHub Engineering Output",
      fact: "10 public repositories, 6 featured case studies (DeepScan, FirmStrike, AppSec, ZTNA, RiskLens AI, Email Security), 22 verified contributors.",
      sourceUrl: "https://redkross.org.in/projects",
      sourceSection: "Project Portfolio & github.com/Redkrossresearch",
      status: "Verified Official",
      date: "June 2026 – Present"
    },
    {
      claim: "Complete Architecture Blueprint",
      fact: "16-page master architecture blueprint dated 14 October 2026 establishing strict separation between the control plane and lab plane, reproducible research cycles, and governance gates.",
      sourceUrl: "RedKross_Complete_Architecture_Blueprint.pdf",
      sourceSection: "Workspace Blueprint Document",
      status: "Verified Official",
      date: "14 October 2026"
    },
    {
      claim: "College Affiliations & Partnerships",
      fact: "Visiting Researcher and Academic Partnerships are formally scheduled in the roadmap for 2027 onward. In strict adherence to RKRF's anti-misrepresentation policy, no unverified partner logos are published.",
      sourceUrl: "https://redkross.org.in/roadmap",
      sourceSection: "Roadmap: 'Planned 2027 onward' & Code of Conduct",
      status: "Verified Official (Framework)",
      date: "Planned 2027"
    }
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#0b0b0f] border border-[#E57A00]/40 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#0e0d0b]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E57A00]/10 border border-[#E57A00]/30 flex items-center justify-center text-[#E57A00]">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span>Verified Fact & Evidence Registry</span>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                  Audited
                </span>
              </h3>
              <p className="text-xs text-gray-400">
                Primary Source: redkross.org.in & Complete Architecture Blueprint (October 2026)
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body / Table */}
        <div className="p-6 overflow-y-auto space-y-4">
          <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-xs text-gray-300 flex items-center justify-between">
            <span>
              <strong>Integrity Standard:</strong> Zero fabricated claims, zero fake college logos, zero synthetic statistics.
            </span>
            <span className="text-emerald-400 font-mono flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4" /> 100% Sourced
            </span>
          </div>

          <div className="space-y-3">
            {inventoryItems.map((item, i) => (
              <div 
                key={i}
                className="p-4 rounded-2xl bg-black/40 border border-white/5 hover:border-[#E57A00]/30 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono font-bold text-[#E57A00]">
                    {item.claim}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {item.status}
                    </span>
                    <span className="text-[10px] font-mono text-gray-500">
                      {item.date}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-gray-200 mb-2 leading-relaxed">
                  {item.fact}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-gray-400 pt-2 border-t border-white/5">
                  <span>Section: {item.sourceSection}</span>
                  {item.sourceUrl.startsWith('http') ? (
                    <a
                      href={item.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0FB7B7] hover:underline flex items-center gap-1"
                    >
                      <span>Verify at official URL</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-gray-500">{item.sourceUrl}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-white/10 bg-[#060608] flex items-center justify-between text-xs text-gray-400">
          <span>RedKross Research Foundation Governance Protocol</span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-white/10 text-white font-medium hover:bg-white/20 transition-colors"
          >
            Close Registry
          </button>
        </div>

      </div>
    </div>
  );
}
