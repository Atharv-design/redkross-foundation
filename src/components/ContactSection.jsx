import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { REDKROSS_DATA } from '../data/redkrossData';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  ExternalLink, 
  ArrowRight, 
  Send,
  Building2,
  ShieldCheck,
  Brain,
  GraduationCap
} from 'lucide-react';

export default function ContactSection() {
  const { institution, pillars } = REDKROSS_DATA;
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText(institution.registeredAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const routingChannels = [
    {
      title: "General & Institutional Enquiries",
      desc: "For general inquiries, governance verification, and foundation communications.",
      actionLabel: "Email Contact Desk",
      href: `mailto:${institution.publicContact.email}?subject=General%20Institutional%20Enquiry`,
      icon: <Building2 className="w-5 h-5 text-[#E57A00]" />,
      accent: "#E57A00"
    },
    {
      title: "Academic & College Partnerships",
      desc: "For colleges and universities seeking structured training, lab setups, and capstone mentoring.",
      actionLabel: "Access Partnership Desk",
      href: "#partners",
      icon: <GraduationCap className="w-5 h-5 text-[#FFA439]" />,
      accent: "#FFA439"
    },
    {
      title: "Cybersecurity & Technical Research",
      desc: "For CVE reproductions, security engineering, threat intelligence, and vulnerability reporting.",
      actionLabel: "Launch Cyber Desk",
      href: institution.domains.cyber,
      isExternal: true,
      icon: <ShieldCheck className="w-5 h-5 text-[#0FB7B7]" />,
      accent: "#0FB7B7"
    },
    {
      title: "Applied Psychology & Wellbeing",
      desc: "For behavioral cyberpsychology inquiries, wellbeing programs, and interdisciplinary research.",
      actionLabel: "Launch Psychology Desk",
      href: institution.domains.psychology,
      isExternal: true,
      icon: <Brain className="w-5 h-5 text-purple-400" />,
      accent: "#A855F7"
    }
  ];

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#040406] border-t border-white/5 select-none overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[350px] bg-[#E57A00]/[0.03] rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* SECTION HEADER: From Spec Section 3 /contact */}
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300 mb-4 backdrop-blur-md">
            <Mail className="w-3.5 h-3.5 text-[#E57A00]" />
            <span>INSTITUTIONAL DIRECTORY & ROUTING</span>
            <span className="text-gray-500 hidden sm:inline">&bull; OFFICIAL COMMUNICATIONS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-5 font-royal" style={{ perspective: '1000px' }}>
            Contact <span className="gradient-text">& Institutional Hub</span>
          </h2>

          <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl mx-auto font-sans">
            Direct your inquiry to the appropriate department. Our communications desk handles institutional partnerships, research collaborations, student cohorts, and statutory governance.
          </p>
        </motion.div>

        {/* 2-COLUMN SECTION: ADDRESS & PHONE CARD + 4 CHANNEL ROUTERS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          {/* LEFT COLUMN: OFFICIAL HEADQUARTERS DOSSIER */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 sm:p-9 rounded-3xl bg-[#090c14]/95 border border-white/10 flex flex-col justify-between relative overflow-hidden backdrop-blur-xl shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-36 h-36 bg-[#E57A00]/5 rounded-bl-full pointer-events-none" />

            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E57A00] animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-widest text-[#FFA439] font-bold">
                  Registered Headquarters
                </span>
              </div>

              {/* Physical Address */}
              <div className="mb-6">
                <div className="flex items-start gap-3 text-white mb-2">
                  <MapPin className="w-5 h-5 text-[#E57A00] shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold font-royal leading-snug">
                      Panipat, Haryana
                    </h3>
                    <p className="text-xs text-gray-300 leading-relaxed font-sans mt-1">
                      {institution.registeredAddress}
                    </p>
                  </div>
                </div>

                <button
                  onClick={copyAddress}
                  className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[11px] font-mono text-gray-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Address Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-gray-400" />
                      <span>Copy Full Address</span>
                    </>
                  )}
                </button>
              </div>

              {/* Direct Communications */}
              <div className="pt-6 border-t border-white/10 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#E57A00] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-gray-400 uppercase block">Official Email</span>
                    <a 
                      href={`mailto:${institution.publicContact.email}`} 
                      className="text-xs font-mono font-bold text-white hover:text-[#FFA439] transition-colors"
                    >
                      {institution.publicContact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#0FB7B7] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-gray-400 uppercase block">Direct Line</span>
                    <a 
                      href={`tel:${institution.publicContact.phone.replace(/\s+/g, '')}`} 
                      className="text-xs font-mono font-bold text-white hover:text-[#0FB7B7] transition-colors"
                    >
                      {institution.publicContact.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 text-[10px] font-mono text-gray-500">
              Response SLA: Institutional enquiries are reviewed within 24-48 business hours.
            </div>
          </motion.div>

          {/* RIGHT COLUMN: 4 ROUTING CHANNEL TILES */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {routingChannels.map((channel, idx) => (
              <motion.a
                key={channel.title}
                href={channel.href}
                target={channel.isExternal ? "_blank" : "_self"}
                rel={channel.isExternal ? "noopener noreferrer" : ""}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="p-6 rounded-3xl bg-[#090c14]/90 border border-white/10 hover:border-[#E57A00]/50 transition-all duration-300 group hover:shadow-[0_0_25px_rgba(229,122,0,0.12)] flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    {channel.icon}
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-white font-royal tracking-tight mb-2 group-hover:text-amber-100 transition-colors">
                    {channel.title}
                  </h4>
                  <p className="text-xs text-gray-300/90 leading-relaxed font-sans mb-5">
                    {channel.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono font-bold" style={{ color: channel.accent }}>
                  <span>{channel.actionLabel}</span>
                  {channel.isExternal ? (
                    <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  ) : (
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  )}
                </div>
              </motion.a>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
