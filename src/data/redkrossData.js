// Comprehensive Verified Data Store for RedKross Research Foundation
// Strictly extracted from the 5 authoritative developer documents:
// 1. RedKross Main Website Developer Specification
// 2. RedKross Cybersecurity Website Developer Specification
// 3. RedKross Complete Architecture Blueprint
// 4. RedKross Organisation Profile
// 5. Atharv Gupta Complete Tech Stack

import { getEcosystemUrl } from '../utils/ecosystemLinks';

export const REDKROSS_DATA = {
  // 1. Legal, Institutional & Contact Profile
  institution: {
    name: "RedKross Research Foundation",
    tagline: "Initiate. Innovate. Impact.",
    cin: "U85499HR2026NPL144741",
    incorporationDate: "27 April 2026",
    beganDate: "April 2026",
    registrar: "Registrar of Companies, Haryana",
    companyStatus: "Active",
    ngoDarpanStatus: "Registered (Darpan Unique ID verification pending formal issuance)",
    registeredAddress: "11219 Mahadev Colony, near Samsan Road / Saini Chakki, Panipat, Haryana 132103, India",
    publicContact: {
      email: "contact@redkross.org.in",
      inquiryEmail: "contact@redkross.org.in",
      phone: "+91 73032 63719"
    },
    domains: {
      get main() { return getEcosystemUrl('main'); },
      get cyber() { return getEcosystemUrl('cyber'); },
      get psychology() { return getEcosystemUrl('psychology'); }
    },
    canonicalDomains: {
      main: "https://redkross.org.in",
      cyber: "https://cyber.redkross.org.in",
      psychology: "https://psychology.redkross.org.in"
    },
    githubOrg: "https://github.com/Redkrossresearch"
  },

  // 2. Mission, Vision & Core Values (Verbatim from Specs & Profile)
  missionVisionValues: {
    mission: "To connect research, education and innovation with practical challenges in digital security and human wellbeing, while encouraging responsible, evidence-informed and collaborative work.",
    vision: "A safer, more digitally resilient and psychologically informed society supported by accessible knowledge, responsible technology and meaningful research.",
    oneSentence: "RedKross aims to connect applied research, technology development, education and community benefit—especially where digital safety and human wellbeing intersect.",
    values: [
      {
        name: "Integrity",
        description: "Communicate findings honestly and acknowledge limitations. Distinguish verified facts from assumptions."
      },
      {
        name: "Rigour",
        description: "Use structured methods, evidence, validation and clear documentation rather than unsupported claims."
      },
      {
        name: "Accessibility",
        description: "Make research, technical knowledge and opportunities easier to discover and understand for students and underserved communities."
      },
      {
        name: "Responsibility",
        description: "Consider privacy, ethics, safety and potential harm. Adhere strictly to responsible disclosure in all technical work."
      },
      {
        name: "Collaboration",
        description: "Encourage constructive contributions from students, researchers and academic institutions."
      },
      {
        name: "Impact",
        description: "Focus on useful, measurable community outcomes rather than vanity metrics or unsupported claims."
      }
    ]
  },

  // 3. Team & Leadership (Verbatim from Profile & Spec - Confirmed Roles Only)
  leadership: [
    {
      name: "Harsh Rajput",
      role: "Director",
      badge: "Governance & Direction",
      bio: "Leads organizational governance, strategic initiatives and institutional alignment for RedKross Research Foundation."
    },
    {
      name: "Ojas Satardekar",
      role: "CEO",
      badge: "Executive Leadership",
      bio: "Oversees executive operations, cross-domain coordination and external partnerships across technology and human wellbeing."
    },
    {
      name: "Upasana Solanki",
      role: "Department Head",
      badge: "Academic & Research Head",
      image: "/assets/team/upasana-solanki.jpg",
      linkedin: "https://www.linkedin.com/in/upasana-solanki",
      bio: "Directs research standards, curriculum design and department workflows across interdisciplinary initiatives."
    },
    {
      name: "Atharv .R. Gupta",
      role: "Development Head",
      badge: "Engineering & Architecture",
      image: "/assets/team/atharv-gupta.jpg",
      linkedin: "https://www.linkedin.com/in/atharv-gupta-930009403",
      bio: "Leads platform architecture, cybersecurity engineering, lab isolation frameworks and technical development."
    }
  ],

  // 4. Two Core Pillars (Equal Prominence as mandated by Spec)
  pillars: {
    cybersecurity: {
      id: "cybersecurity",
      title: "Cybersecurity & Technology",
      shortTitle: "Cybersecurity",
      get targetUrl() { return getEcosystemUrl('cyber'); },
      canonicalTargetUrl: "https://cyber.redkross.org.in",
      internalRoute: "/pillars/cybersecurity",
      accent: "#E57A00",
      accentRgb: "229, 122, 0",
      summary: "Exploring digital security, artificial intelligence, digital forensics, security engineering and technical research through reproducible experimentation and responsible innovation.",
      copy: "Our cybersecurity pillar focuses on digital security, artificial intelligence, digital forensics, security engineering and technical research. The work includes developing and documenting projects, exploring defensive and offensive security concepts in authorised environments, and investigating how technology can support safer digital systems.",
      domains: [
        {
          name: "Cybersecurity & Security Engineering",
          summary: "Investigating digital security challenges through authorised testing, vulnerability analysis, secure engineering and defensive techniques."
        },
        {
          name: "AI & AI Security",
          summary: "Exploring the security and reliability of AI-enabled systems, including model robustness, adversarial risks and safe AI application practices."
        },
        {
          name: "Digital Forensics & Incident Response",
          summary: "Developing knowledge and methods for analysing digital evidence, investigating incidents, integrity preservation and technical documentation."
        },
        {
          name: "Threat Intelligence & Detection",
          summary: "Exploring how security information can be collected, assessed and used to support threat hunting, detection and investigation."
        },
        {
          name: "IoT, Cloud & Emerging Technologies",
          summary: "Investigating security challenges in connected devices, embedded firmware, cloud infrastructure and evolving distributed environments."
        },
        {
          name: "Human-Centred Security",
          summary: "Exploring human behaviour, social engineering defence, security decisions and awareness in collaboration with psychology."
        }
      ]
    },
    psychology: {
      id: "psychology",
      title: "Psychology & Human Wellbeing",
      shortTitle: "Applied Psychology",
      get targetUrl() { return getEcosystemUrl('psychology'); },
      canonicalTargetUrl: "https://psychology.redkross.org.in",
      internalRoute: "/pillars/psychology",
      accent: "#0FB7B7",
      accentRgb: "15, 183, 183",
      summary: "Supporting psychology education, mental wellbeing initiatives, behavioural research and community-focused programmes through a dedicated platform.",
      copy: "Our Psychology pillar focuses on psychology education, mental wellbeing, behavioural research, community initiatives and related programmes. It provides a dedicated destination for psychology-specific information, services and opportunities, with appropriate attention to confidentiality, professional boundaries and responsible practice.",
      connection: "Cybersecurity and psychology inform one another through research into human behaviour, online trust, social engineering, security awareness, and mental resilience against digital deception."
    }
  },

  // 5. Four-Part Mental Model & Operating Blueprint (From Architecture Blueprint)
  mentalModel: [
    {
      area: "Academy",
      action: "Learn",
      purpose: "Build understanding and foundational competence through structured learning pathways and rigorous rubrics.",
      accent: "#E57A00"
    },
    {
      area: "Cyber Range",
      action: "Practise",
      purpose: "Apply skills in controlled, disposable, isolated environments with default-deny network controls.",
      accent: "#FFA439"
    },
    {
      area: "Research",
      action: "Investigate",
      purpose: "Test scoped questions using reproducible methods and produce evidence-backed knowledge.",
      accent: "#0FB7B7"
    },
    {
      area: "Innovation",
      action: "Make Useful",
      purpose: "Turn validated knowledge and findings into functional tools, systems, prototypes or open resources.",
      accent: "#38BDF8"
    }
  ],

  // 6. Cyber Range & Lab Plane Architecture (16-Page Blueprint)
  cyberRangeArchitecture: {
    statusNotice: "These descriptions represent planned capabilities, not a claim that public lab environments are currently available. Access, supported exercises and participation requirements will be published when environments are implemented, tested and approved for use.",
    controlPlane: {
      title: "Control Plane",
      items: [
        "Identity, curriculum, catalogue and provisioning requests",
        "Specifications, approved images, quotas and audit events",
        "Protected APIs, MFA and authenticated access control",
        "Lifecycle state management and scheduled cleanup"
      ]
    },
    labPlane: {
      title: "Lab Plane (Isolated)",
      items: [
        "Disposable containers, VMs and challenge networks",
        "Potentially vulnerable exercise workloads",
        "Strict isolation from production and student-to-student",
        "Default-deny egress and automated teardown quotas"
      ]
    },
    safetyControls: [
      "No direct route from vulnerable labs to production databases, mail systems, admin panels or private networks.",
      "Default-deny egress; allow only explicitly justified outbound paths.",
      "Per-student/session identity, strict quotas, timeouts and automated teardown.",
      "Tested reset/destroy, monitoring, capacity limits and rapid failure recovery."
    ]
  },

  // 7. Verified Project Portfolio & Taxonomy (From Cybersecurity Spec)
  // Strict Status Taxonomy: Planned | In development | Prototype | Beta | Available / deployed | Evaluated / validated
  projects: [
    {
      slug: "deepscan-ai",
      name: "DeepScan AI",
      category: "AI & Forensics",
      domain: "AI Security",
      status: "Prototype",
      tagline: "Deepfake Detection & Media Provenance Engine",
      problem: "Rapid proliferation of synthetic media and manipulated audio/video undermines digital trust and evidence integrity.",
      architecture: "Convolutional neural network & frequency domain artifact analyzer for detecting synthetic facial reenactment and voice cloning.",
      maturity: "Experimental prototype undergoing validation against public research benchmarks.",
      limitations: "Requires high-resolution input; performance degrades under extreme re-compression and adversarial noise.",
      github: "https://github.com/Redkrossresearch",
      lastVerified: "October 2026",
      techStack: ["Python", "PyTorch", "OpenCV", "FFmpeg", "FastAPI"]
    },
    {
      slug: "firmstrike",
      name: "FirmStrike",
      category: "Hardware & IoT",
      domain: "IoT, Cloud & Emerging",
      status: "In development",
      tagline: "IoT Firmware Security Analysis Framework",
      problem: "Connected devices often run uninspected binary blobs with hardcoded credentials and outdated CVE vulnerabilities.",
      architecture: "Automated firmware extraction pipeline, file system unpacking, entropy analysis, and binary symbol disassembly.",
      maturity: "Active development. Static analysis engine functional; dynamic emulation integration in progress.",
      limitations: "Proprietary bootloaders and encrypted vendor images require manual pre-processing.",
      github: "https://github.com/Redkrossresearch",
      lastVerified: "October 2026",
      techStack: ["C++", "Python", "Ghidra API", "QEMU", "Docker"]
    },
    {
      slug: "appsec-orchestrator",
      name: "AppSec Orchestrator",
      category: "Application Security",
      domain: "Cybersecurity & Security Engineering",
      status: "Prototype",
      tagline: "Automated Code & Dependency Security Pipeline",
      problem: "Fragmented vulnerability scanning creates alert fatigue without clear remediation priorities for developers.",
      architecture: "Unified wrapper aggregating static analysis (SAST), software composition analysis (SCA), and secrets detection into actionable triage reports.",
      maturity: "Prototype tested on internal repositories. CLI tool available for internal evaluation.",
      limitations: "Scanning speed depends on repository scale; AST parsers currently focused on JavaScript, Python, and Go.",
      github: "https://github.com/Redkrossresearch",
      lastVerified: "October 2026",
      techStack: ["Go", "Node.js", "Docker", "Git Hooks"]
    },
    {
      slug: "risklens-ai",
      name: "RiskLens AI",
      category: "Threat Intelligence",
      domain: "Threat Intelligence & Detection",
      status: "Prototype",
      tagline: "Contextual Threat Intelligence & Risk Scorer",
      problem: "Raw CVE feeds lack operational context regarding an organization's specific attack surface and exposure.",
      architecture: "LLM-assisted threat intelligence parser correlating public CVEs, exploit availability, and asset criticality into weighted risk scores.",
      maturity: "Proof of concept. Designed to augment human analysts, not replace professional compliance reviews.",
      limitations: "Dependent on external CVE databases; evaluation against simulated SOC feeds ongoing.",
      github: "https://github.com/Redkrossresearch",
      lastVerified: "October 2026",
      techStack: ["Python", "LangChain", "Vector Store", "FastAPI"]
    },
    {
      slug: "zero-trust-access",
      name: "Zero Trust Network Isolation Spec",
      category: "Architecture Standard",
      domain: "Cybersecurity & Security Engineering",
      status: "Evaluated / validated",
      tagline: "16-Page Master Architecture & Boundary Rules",
      problem: "Lack of strict physical and network segregation between training cyber ranges and operational control planes poses lateral movement risks.",
      architecture: "Defines deterministic boundaries: mutual TLS, default-deny egress, ephemeral lab identities, and independent audit logging.",
      maturity: "Formally reviewed architecture specification published as the foundation technical blueprint.",
      limitations: "Applies to architectural governance; actual lab deployment follows staged pilot testing.",
      github: "https://github.com/Redkrossresearch",
      lastVerified: "October 2026",
      techStack: ["WireGuard", "eBPF", "mTLS", "Kubernetes NetworkPolicies"]
    }
  ],

  // 8. College & University Partnerships (Verbatim Section 10 & 11)
  collegePartnership: {
    heading: "Bridging Academic Learning and Real-World Cybersecurity",
    introduction: "RedKross Research Foundation welcomes collaborations with colleges and universities that want to prepare students for practical technology projects and entry-level cybersecurity work. Through structured training, guided projects and collaborative learning, we aim to help students develop the technical foundations, problem-solving skills and project-level thinking needed to progress beyond classroom theory.",
    themes: [
      {
        title: "Cybersecurity Foundation Training",
        description: "Networking, Linux command line, security principles, common vulnerabilities and defensive practices."
      },
      {
        title: "Project-Level Thinking",
        description: "Identify problems, review existing literature, define requirements, design architectures, allocate tasks, build prototypes, and document."
      },
      {
        title: "Cybersecurity Trainee Development",
        description: "Introductory security assessments, vulnerability management, log analysis, and incident-response concepts in authorised labs."
      },
      {
        title: "Mentored Team Projects",
        description: "Project briefs, version control, collaboration, peer reviews, rigorous testing, and live demonstrations."
      },
      {
        title: "Project Documentation & Evaluation",
        description: "Technical reports, architecture decision records, reproducible evidence, limitations, and structured presentations."
      }
    ],
    stages: [
      {
        step: 1,
        title: "Institutional Consultation",
        description: "Understand courses, student year groups, timetable hours, outcomes and institutional constraints."
      },
      {
        step: 2,
        title: "Foundational Training",
        description: "Teach cybersecurity basics, Linux, networking fundamentals, research skills, and safe lab practices."
      },
      {
        step: 3,
        title: "Project Planning",
        description: "Define real problem statements, requirements, milestones, team roles and testing strategies."
      },
      {
        step: 4,
        title: "Guided Implementation",
        description: "Supervised hands-on work on approved projects in controlled, isolated environments."
      },
      {
        step: 5,
        title: "Evaluation & Presentation",
        description: "Project demonstrations, technical reports, evidence reviews, feedback and agreed assessment."
      }
    ]
  },

  // 9. Verified Opportunities Directory (Verbatim Section 9 & 12)
  opportunities: [
    {
      slug: "cybersecurity-research-intern",
      title: "Cybersecurity & Security Engineering Intern",
      domain: "Cybersecurity & Technology",
      type: "Internship",
      status: "Upcoming",
      delivery: "Remote / Hybrid",
      eligibility: "Students and graduates with foundational Linux, networking, and Python/C knowledge.",
      summary: "Work on reproducible security research, defensive tooling, vulnerability analysis and technical documentation under engineering mentorship.",
      commitment: "12-16 weeks; part-time and full-time tracks available upon cohort scheduling."
    },
    {
      slug: "ai-security-contributor",
      title: "AI Security & Deepfake Research Contributor",
      domain: "Cybersecurity & Technology",
      type: "Technical contribution",
      status: "Open",
      delivery: "Remote",
      eligibility: "Familiarity with PyTorch/TensorFlow, computer vision, or adversarial machine learning.",
      summary: "Contribute to dataset preprocessing, model evaluation benchmarks, and artifact reproducibility for DeepScan AI.",
      commitment: "Project-based contributions via GitHub pull requests with formal code reviews."
    },
    {
      slug: "behavioural-cyberpsychology-fellow",
      title: "Human Factors & Cyberpsychology Researcher",
      domain: "Psychology & Human Wellbeing",
      type: "Research role/participation",
      status: "Upcoming",
      delivery: "Hybrid",
      eligibility: "Background in cognitive psychology, behavioural science, or human-computer interaction.",
      summary: "Investigate cognitive fatigue in security operations, deceptive urgency triggers, and habit-forming security awareness nudges.",
      commitment: "Cohort-based research sprints following formal ethics and consent approval."
    },
    {
      slug: "college-faculty-collaborator",
      title: "Academic & Institutional Project Partner",
      domain: "Cross-disciplinary Research",
      type: "Partnership",
      status: "Open",
      delivery: "Institutional",
      eligibility: "University professors, department heads, and academic placement cells.",
      summary: "Establish joint training programmes, faculty-mentored capstone pipelines, and research lab affiliations.",
      commitment: "Tailored to academic semester schedules."
    }
  ],

  // 10. Organisational Timeline (Verbatim from Profile & Spec)
  timeline: [
    {
      period: "April 2026",
      milestone: "Foundation Begins",
      detail: "RedKross begins work as a research, education and innovation organisation in Panipat, Haryana."
    },
    {
      period: "27 April 2026",
      milestone: "Formal Incorporation",
      detail: "Formally registered under the Ministry of Corporate Affairs (CIN: U85499HR2026NPL144741)."
    },
    {
      period: "10 June 2026",
      milestone: "Public GitHub Organisation",
      detail: "The Redkrossresearch GitHub organisation was established to build public engineering and research repositories."
    },
    {
      period: "Q3 2026",
      milestone: "Research & Platform Foundations",
      detail: "Development of programme structures, internship workflows, project infrastructure and governance rules."
    },
    {
      period: "Q4 2026",
      milestone: "Academy & Cyber Range Architecture",
      detail: "Architectural blueprint and isolation framework completed; planned capabilities structured for phased rollout."
    },
    {
      period: "2027 Onward",
      milestone: "Longer-Term Expansion",
      detail: "Targeted expansion of research programmes, college affiliations, and peer-reviewed outputs."
    }
  ],

  // 11. Governance, Ethics & Responsible Disclosure (From Spec)
  governance: {
    ethics: "We aim to approach research and innovation with integrity, respect for privacy, appropriate ethical oversight and clear accountability. Higher-risk research must receive formal review.",
    privacy: "We minimize data collection, restrict access, redact evidence, and ensure no confidential student or participant data is exposed in public repositories.",
    safeguarding: "Defined conduct rules, supervised student communication channels, and clear escalation routes for safety and welfare.",
    responsibleDisclosure: {
      heading: "Responsible Security Disclosure",
      statement: "RedKross supports authorised research, careful handling of sensitive information, and clear communication of security findings. Our technical work strictly respects privacy, minimises harm, and follows appropriate disclosure procedures.",
      reportingAddress: "security@redkross.org.in",
      rules: [
        "Only test systems you own or have explicit written authorisation to assess.",
        "Do not access, alter, delete or disclose other people's data.",
        "Do not degrade service availability, deploy destructive malware, or exploit beyond proof of concept.",
        "Provide reasonable time for remediation before any public discussion or disclosure."
      ]
    }
  }
};
