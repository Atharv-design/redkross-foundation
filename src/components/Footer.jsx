import React from 'react';
import { REDKROSS_DATA } from '../data/redkrossData';
import { 
  Building2, 
  Mail, 
  Phone, 
  ExternalLink, 
  ShieldCheck, 
  Lock, 
  FolderGit2,
  FileCheck2
} from 'lucide-react';
import DoodleCrewFooter from '@/components/ui/doodle-crew-footer-sunny';

export default function Footer() {
  const { institution, pillars, governance } = REDKROSS_DATA;

  return (
    <footer className="bg-[#030406] border-t border-white/10 text-gray-400 text-xs select-none">
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Column 1: Institutional Overview */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full overflow-hidden border border-[#E57A00]/50 bg-[#0e0d0b] flex items-center justify-center">
                <img src="/assets/crest-clean-circle.png" alt="RedKross Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="font-bold text-white text-base block">{institution.name}</span>
                <span className="text-[10px] font-mono text-[#E57A00] uppercase block">{institution.tagline}</span>
              </div>
            </div>

            <p className="text-gray-400 text-xs leading-relaxed max-w-sm">
              A research, education and innovation organisation working across cybersecurity, artificial intelligence, digital forensics and human-centred security, with an associated psychology and mental-wellbeing wing.
            </p>

            {/* Official Legal Registrations Box */}
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1 text-[11px] font-mono text-gray-400">
              <div><strong className="text-gray-300">CIN:</strong> {institution.cin}</div>
              <div><strong className="text-gray-300">Incorporation Date:</strong> {institution.incorporationDate}</div>
              <div><strong className="text-gray-300">Registrar:</strong> {institution.registrar}</div>
              <div><strong className="text-gray-300">NGO Darpan:</strong> {institution.ngoDarpanStatus}</div>
            </div>
          </div>

          {/* Column 2: Two Pillars */}
          <div className="space-y-3">
            <h4 className="text-white font-mono font-bold uppercase tracking-wider text-xs">
              Two Pillars
            </h4>
            <ul className="space-y-2 font-mono">
              <li>
                <a 
                  href={pillars.cybersecurity.targetUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#E57A00] flex items-center gap-1.5 transition-colors"
                >
                  <span>Cybersecurity Platform</span>
                  <ExternalLink className="w-3 h-3 text-gray-500" />
                </a>
              </li>
              <li>
                <a 
                  href={pillars.psychology.targetUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#0FB7B7] flex items-center gap-1.5 transition-colors"
                >
                  <span>Psychology Platform</span>
                  <ExternalLink className="w-3 h-3 text-gray-500" />
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Autonomous Threat Defense
                </a>
              </li>
              <li>
                <a href="#pillars" className="hover:text-white transition-colors">
                  Interdisciplinary Synthesis
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Collaboration & Programmes */}
          <div className="space-y-3">
            <h4 className="text-white font-mono font-bold uppercase tracking-wider text-xs">
              Engagement
            </h4>
            <ul className="space-y-2 font-mono">
              <li>
                <a href="#partners" className="hover:text-white transition-colors">
                  College Tie-Up Enquiry
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Verified Project Portfolio
                </a>
              </li>
              <li>
                <a href="#opportunities" className="hover:text-white transition-colors">
                  Research Opportunities
                </a>
              </li>
              <li>
                <a 
                  href={institution.githubOrg} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <FolderGit2 className="w-3 h-3" />
                  <span>GitHub Repositories</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Governance & Contact */}
          <div className="space-y-3">
            <h4 className="text-white font-mono font-bold uppercase tracking-wider text-xs">
              Governance & Contact
            </h4>
            <ul className="space-y-2 font-mono">
              <li>
                <a href="#governance" className="hover:text-white transition-colors">
                  Ethics & Safeguarding
                </a>
              </li>
              <li>
                <a href={`mailto:${governance.responsibleDisclosure.reportingAddress}`} className="hover:text-[#E57A00] transition-colors">
                  Responsible Disclosure
                </a>
              </li>
              <li className="pt-2 text-[11px] text-gray-500">
                <span className="block text-gray-400 font-semibold mb-0.5">Headquarters:</span>
                Panipat, Haryana, India
              </li>
              <li className="text-[11px] text-gray-400 flex items-center gap-1.5">
                <Mail className="w-3 h-3 text-[#E57A00]" />
                <a href={`mailto:${institution.publicContact.email}`} className="hover:underline">
                  {institution.publicContact.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Interactive Hand-Drawn Doodle Crew Brandmark */}
        <div className="my-8 pt-6 border-t border-white/5">
          <DoodleCrewFooter
            as="div"
            showTop={false}
            showBar={false}
            wordmark="REDKROSS"
            wordmarkColorMode="logo"
            tagline="Pioneering Defensive Cyber Architecture & Behavioral Intelligence"
            height="460px"
            palette={{
              background: "#030406",
              ink: "#f9fafb",
              accent: "#E57A00"
            }}
            crew={[
              { kind: "yeti", letter: 0, seat: "front", offset: -0.05, says: "Defending networks & critical infrastructure!" },
              { kind: "bird", letter: 1, seat: "top", offset: 0.08, says: "Telemetry & vulnerability audit clean!" },
              { kind: "ghost", letter: 2, seat: "behind", offset: 0.0, says: "Hidden threat vectors neutralized!" },
              { kind: "cat", letter: 3, seat: "top", offset: 0.05, says: "Cognitive security loops active!" },
              { kind: "kid", letter: 4, seat: "front", offset: 0.1, says: "Behavioral modeling underway!" },
              { kind: "mushroom", letter: 5, seat: "front", offset: -0.05, says: "Synaptic nexus interconnected!" },
              { kind: "bird", letter: 6, seat: "top", offset: -0.08, flip: true, says: "Ethical research verified!" },
              { kind: "cat", letter: 7, seat: "front", flip: true, offset: 0.12, says: "RedKross Foundation sentry online!" }
            ]}
            doodles={[]}
            doodleCount={0}
            actions={[
              { label: "Explore Two Pillars", href: "#pillars", variant: "solid" },
              { label: "Responsible Disclosure", href: `mailto:${governance.responsibleDisclosure.reportingAddress}`, variant: "outline" }
            ]}
          />
        </div>

        {/* Bottom Legal Notice Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-gray-500">
          <div>
            &copy; {new Date().getFullYear()} {institution.name}. All verified rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Incorporation CIN: {institution.cin}</span>
            <span>&bull;</span>
            <span className="text-emerald-400/80">Active Indian Non-Profit Foundation</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
