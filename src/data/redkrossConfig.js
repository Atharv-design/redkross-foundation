/**
 * REDKROSS CONFIGURATION FILE
 * You can easily update all values, numbers, and milestones here!
 */

export const REDKROSS_CONFIG = {
  brand: {
    name: "RedKross",
    fullName: "RedKross Research Foundation",
    tagline: "Advanced Research. Real-World Impact.",
    logo: "/assets/logo.png",
    logoTransparent: "/assets/logo-transparent.png",
    officialUrl: "https://redkross.org.in"
  },

  // 1. PAST: WHEN IT WAS STARTED
  past: {
    title: "Origins & Foundation",
    subtitle: "When & How It Started",
    foundedDate: "April 2026",
    location: "Panipat, Haryana, India",
    story: "RedKross began its journey with a clear mandate: bridge advanced security research with practical, accessible real-world applications. Founded to cultivate ethical researchers, defenders, and cognitive analysts, RedKross operates across cybersecurity and applied human-centred resilience.",
    mission: "Bridge advanced research and accessible real-world products, and train the people who will build a safer digital world.",
    vision: "A secure, digitally literate and mentally resilient society, defended by a generation of ethical researchers and builders."
  },

  // HALF-CIRCLE TIMELINE DATA (Scrolls on the half circle arc: 1st -> 2nd -> 3rd -> 4th...)
  timeline: [
    {
      step: 1,
      year: "April 2026",
      phase: "Phase 01",
      title: "Foundation & First Charter",
      summary: "RedKross Research Foundation commences operations as a specialized research, education, and innovation NGO spanning cybersecurity, digital forensics, and applied psychology.",
      badge: "Inception"
    },
    {
      step: 2,
      year: "Q2 2026",
      phase: "Phase 02",
      title: "Core Frameworks & Standards",
      summary: "Establishment of formal research governance, reproducible laboratory standards, security ethics charters, and initial technical development sprints.",
      badge: "Governance"
    },
    {
      step: 3,
      year: "Q3 2026",
      phase: "Phase 03",
      title: "First Cohort & Student Sprints",
      summary: "Delivery of the flagship research cohorts, bringing students and mentors together to engineer real-world defensive security solutions and public tools.",
      badge: "Student Impact"
    },
    {
      step: 4,
      year: "Q4 2026",
      phase: "Phase 04",
      title: "Complete Architecture Blueprint",
      summary: "Publication of the Master Architecture Blueprint establishing strict separation of control planes and lab isolation models for future cyber ranges.",
      badge: "Architecture"
    },
    {
      step: 5,
      year: "2027 Onward",
      phase: "Phase 05",
      title: "National Outreach & Scaling",
      summary: "Expansion of academic university affiliations, visiting scholar programs, community awareness campaigns, and advanced research fellowships.",
      badge: "Future Vision"
    }
  ],

  // 2. ACHIEVEMENTS
  achievements: [
    {
      id: "ach-1",
      title: "Specialized Security & AI Platforms",
      metric: "Engineered in Public",
      description: "Successfully built reproducible defensive systems, automated scanners, firmware analysis pipelines, and deepfake detection engines.",
      badge: "Technical Milestone"
    },
    {
      id: "ach-2",
      title: "Hands-on Research Internship Ecosystem",
      metric: "100% Practical",
      description: "Delivered project-based cohorts where students landed demonstrable capstone projects and verifiable cryptographic credentials.",
      badge: "Educational Impact"
    },
    {
      id: "ach-3",
      title: "Human Factors & Cyber Psychology Lab",
      metric: "Cognitive Science",
      description: "Pioneered empirical studies into security behaviour, SOC analyst burnout, and habit-forming cybersecurity awareness.",
      badge: "Interdisciplinary"
    },
    {
      id: "ach-4",
      title: "Master Architecture Specification",
      metric: "16-Page Standard",
      description: "Formally published end-to-end governance rules separating vulnerable lab environments from operational control planes.",
      badge: "Standards"
    }
  ],

  // 3. TOTAL NUMBER OF BATCHES AND STUDENTS
  batchesAndStudents: {
    title: "Batches & Students Trained",
    subtitle: "Scale of Participation & Student Impact",
    totalBatches: {
      number: 8,
      suffix: "+",
      label: "Total Batches Conducted",
      note: "Project cohorts and specialized training tracks"
    },
    totalStudents: {
      number: 1250,
      suffix: "+",
      label: "Total Students Trained",
      note: "Learners and interns across technical and research programs"
    },
    cards: [
      {
        title: "Active Research Batches",
        count: "Ongoing",
        description: "Hands-on engineering tracks focused on practical cybersecurity and digital defense.",
        highlight: "Cohort-Driven"
      },
      {
        title: "Certified Graduates",
        count: "Verifiable",
        description: "Each graduate earns a cryptographically verifiable certificate recorded on the official registry.",
        highlight: "Cryptographic Credential"
      },
      {
        title: "Student Capstones",
        count: "Production-Grade",
        description: "Students collaborate on real software repositories rather than hypothetical coursework.",
        highlight: "Open Source"
      }
    ]
  },

  // 4. NUMBER OF SESSIONS
  sessions: {
    title: "Sessions & Workshops",
    subtitle: "Practical Masterclasses & Live Training Hours",
    totalSessions: {
      number: 85,
      suffix: "+",
      label: "Total Training Sessions",
      note: "Interactive masterclasses, technical deep dives, and live workshops"
    },
    totalHours: {
      number: 240,
      suffix: "+",
      label: "Hands-on Lab Hours",
      note: "Practical security exercises and simulated attack-defense scenarios"
    },
    sessionTypes: [
      {
        name: "Hands-on Offensive Labs",
        count: "Ethical Hacking",
        detail: "Interactive exploitation walkthroughs, vulnerability discovery, and CTF challenge solving."
      },
      {
        name: "Blue Team & Incident Response",
        count: "SOC Defense",
        detail: "SIEM log correlation, threat hunting, and digital forensics evidence preservation."
      },
      {
        name: "Cyber Psychology & Awareness",
        count: "Human Factors",
        detail: "Cognitive biases in social engineering, anti-phishing behavioral habits, and mental resilience."
      },
      {
        name: "Code Security & Firmware Analysis",
        count: "AppSec",
        detail: "Static code analysis, secret scanning, and IoT device firmware extraction."
      }
    ]
  },

  // 5. NUMBER OF COLLEGE AFFILIATIONS & ONGOING AFFILIATIONS
  affiliations: {
    title: "College Affiliations & Partnerships",
    subtitle: "Institutional Collaborations Across India",
    totalAffiliations: {
      number: 18,
      suffix: "+",
      label: "Total College Affiliations",
      note: "Colleges and universities engaged in academic outreach & training"
    },
    ongoingAffiliations: {
      number: 12,
      suffix: "+",
      label: "Ongoing Active Collaborations",
      note: "Active academic pipelines, student clubs, and joint research initiatives"
    },
    pillars: [
      {
        title: "Confirmed Academic Collaborations",
        status: "Active Partnerships",
        description: "University engineering departments and computer application faculties with recurring workshops and training pipelines."
      },
      {
        title: "Ongoing Institutional Engagements",
        status: "In Progress",
        description: "Active collaborations for student internships, technical bootcamps, and cybersecurity awareness sessions."
      },
      {
        title: "Visiting Researcher Track",
        status: "2027 Expansion",
        description: "Co-authored empirical research and lab sharing for university professors, scholars, and graduate students."
      },
      {
        title: "Community & Non-Profit Outreach",
        status: "Open Alliance",
        description: "Empowering under-resourced schools and non-profit colleges with free cybersecurity hygiene education."
      }
    ]
  },

  // OFFICIAL CONTACT & FOOTER
  contact: {
    email: "contact@redkross.org.in",
    phone: "+91 73032 63719",
    location: "Panipat, Haryana 132103, India"
  }
};
