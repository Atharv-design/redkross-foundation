import React from "react";
import { Dot, Search, ShieldCheck, CheckCircle2, User, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="currentColor"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
    </svg>
  );
}

export interface Member {
  name: string;
  role: string;
  badge: string;
  bio: string;
  image?: string;
  initials: string;
  linkedin: string;
  verified?: boolean;
}

const members: Member[] = [
  {
    name: "Harsh Rajput",
    role: "Director",
    badge: "Governance & Direction",
    bio: "Leads organizational governance, strategic initiatives and institutional alignment for RedKross Research Foundation.",
    initials: "HR",
    linkedin: "https://www.linkedin.com/search/results/all/?keywords=Harsh%20Rajput%20RedKross",
    verified: true
  },
  {
    name: "Ojas Satardekar",
    role: "CEO",
    badge: "Executive Leadership",
    bio: "Oversees executive operations, cross-domain coordination and external partnerships across technology and human wellbeing.",
    image: "/assets/team/ojas-satardekar.png",
    initials: "OS",
    linkedin: "https://www.linkedin.com/in/ojas-satardekar-358445215/",
    verified: true
  },
  {
    name: "Upasana Solanki",
    role: "Department Head",
    badge: "Academic & Research Head",
    bio: "Directs research standards, curriculum design and department workflows across interdisciplinary initiatives.",
    image: "/assets/team/upasana-solanki.jpg",
    initials: "US",
    linkedin: "https://www.linkedin.com/in/upasana-solanki",
    verified: true
  },
  {
    name: "Atharv .R. Gupta",
    role: "Development Head",
    badge: "Engineering & Architecture",
    bio: "Leads platform architecture, cybersecurity engineering, lab isolation frameworks and technical development.",
    image: "/assets/team/atharv-gupta.jpg",
    initials: "AG",
    linkedin: "https://www.linkedin.com/in/atharv-gupta-930009403",
    verified: true
  }
];

export default function Members() {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-7xl">
        {/* Top Header Bar formatted in members-03 style */}
        <div className="flex justify-between gap-4 rounded-2xl bg-[#090c14]/90 border border-white/10 px-6 py-5 flex-col sm:flex-row sm:items-center backdrop-blur-xl mb-10 shadow-lg">
          <div>
            <h2 className="font-bold text-xl text-white font-royal tracking-tight">
              Leadership & Key Members
            </h2>
            <div className="mt-1 flex items-center text-gray-400 text-xs font-mono">
              <span className="text-[#FFA439] font-semibold">RedKross Research Foundation</span> 
              <Dot className="text-gray-600" /> 
              <span>4 Confirmed Roles</span>
              <Dot className="text-gray-600" /> 
              <span className="text-emerald-400">Section 8 NPO</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2.5">
            <a 
              href="https://www.linkedin.com/company/redkross-research-foundation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0A66C2]/15 border border-[#0A66C2]/40 text-xs font-mono text-blue-300 hover:bg-[#0A66C2] hover:text-white transition-all cursor-pointer font-semibold"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>Official LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Members Grid formatted according to members-03 */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member) => (
            <div 
              key={member.name}
              className="group p-5 rounded-3xl bg-[#080a10]/95 border border-white/10 hover:border-[#E57A00]/50 transition-all duration-300 flex flex-col justify-between shadow-xl relative overflow-hidden backdrop-blur-xl hover:shadow-[0_0_30px_rgba(229,122,0,0.15)]"
            >
              {/* Corner Ambient */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#E57A00]/5 rounded-bl-full pointer-events-none group-hover:bg-[#E57A00]/10 transition-colors" />

              <div>
                {/* Square Photo or Placeholder Container */}
                <div className="aspect-square rounded-2xl bg-[#0e121b] border border-white/10 overflow-hidden relative group-hover:border-white/20 transition-all">
                  {member.image ? (
                    <img
                      alt={member.name}
                      className="size-full rounded-2xl object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      src={member.image}
                    />
                  ) : (
                    /* Clean high-tech placeholder for members without photos */
                    <div className="size-full rounded-2xl bg-gradient-to-b from-[#10141f] via-[#090c14] to-[#05060a] flex flex-col items-center justify-center p-4 text-center">
                      <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#FFA439] text-xl font-royal font-bold shadow-inner mb-2 group-hover:scale-110 transition-transform">
                        {member.initials}
                      </div>
                      <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                        Official Profile
                      </span>
                    </div>
                  )}

                  {/* LinkedIn Clickable Overlay Button */}
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/75 border border-white/20 hover:border-[#0A66C2] hover:bg-[#0A66C2] text-white flex items-center justify-center backdrop-blur-md transition-all shadow-lg hover:scale-110 cursor-pointer"
                    title={`Connect with ${member.name} on LinkedIn`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <LinkedinIcon className="w-3.5 h-3.5 text-white" />
                  </a>

                  {/* Verification status badge */}
                  {member.verified && (
                    <div className="absolute bottom-3 left-3 px-2 py-0.5 rounded-full bg-black/70 border border-white/15 backdrop-blur-md flex items-center gap-1 text-[9px] font-mono text-emerald-400">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      <span>Verified</span>
                    </div>
                  )}
                </div>

                {/* Member Info: Name, Role, Badge & Bio (Preserved Exactly) */}
                <div className="mt-4">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-bold text-lg text-white font-royal tracking-tight group-hover:text-amber-100 transition-colors">
                      {member.name}
                    </h3>
                  </div>

                  <p className="text-xs font-mono font-bold text-[#FFA439] mt-0.5">
                    {member.role}
                  </p>

                  <span className="inline-block mt-1.5 text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-400">
                    {member.badge}
                  </span>

                  <p className="text-xs text-gray-300 mt-2.5 leading-relaxed font-sans line-clamp-3">
                    {member.bio}
                  </p>
                </div>
              </div>

              {/* Card Bottom: LinkedIn Connection Link */}
              <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 flex items-center gap-1.5 font-semibold group/ln"
                >
                  <LinkedinIcon className="w-3 h-3 text-[#0A66C2]" />
                  <span>LinkedIn Profile</span>
                </a>

                <span className="text-[10px] text-gray-500">
                  Ref: #rkrf-gov
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
