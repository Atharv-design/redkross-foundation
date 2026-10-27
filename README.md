# 🌐 RedKross Research Foundation — Official Umbrella Portal

[![Platform](https://img.shields.io/badge/Platform-RedKross%20Foundation-E11D48?style=for-the-badge&logo=shield)](https://redkross.org.in)
[![Vite](https://img.shields.io/badge/Vite-6.0+-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18.3+-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Three.js](https://img.shields.io/badge/Three.js-WebGL%203D-black?style=for-the-badge&logo=three.js)](https://threejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4+-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Section%208%20Non--Profit-0284C7?style=for-the-badge)](LICENSE)

> **Official primary digital ecosystem of RedKross Research Foundation** — an interdisciplinary Section 8 non-profit research institution bridging the vital frontiers of **Applied Cybersecurity** and **Evidence-Based Psychology**.

---

## 🏛️ Ecosystem Overview & Architecture

The RedKross Foundation operates on a dual-pillar institutional framework designed to solve complex socio-technical challenges:

```
                            ┌────────────────────────────────────────┐
                            │      REDKROSS RESEARCH FOUNDATION       │
                            │         https://redkross.org.in         │
                            │   (Governance, Trust, Core Leadership)  │
                            └───────────────────┬────────────────────┘
                                                │
                       ┌────────────────────────┴────────────────────────┐
                       ▼                                                 ▼
        ┌─────────────────────────────┐                   ┌─────────────────────────────┐
        │   CYBERSECURITY DIVISION    │                   │     PSYCHOLOGY DIVISION     │
        │ https://cyber.redkross.org.in│                   │https://psychology.redkross.org.in│
        ├─────────────────────────────┤                   ├─────────────────────────────┤
        │ • AI & Threat Modeling      │                   │ • Grassroots Psychoeducation│
        │ • Defensive Engineering     │                   │ • Stepped-Care Counselling  │
        │ • Digital Forensics (DFIR)  │                   │ • Trauma & Youth Mental Care│
        │ • Critical Infra & Cloud    │                   │ • Tele-MANAS / MHCA 2017    │
        └─────────────────────────────┘                   └─────────────────────────────┘
```

---

## ✨ Flagship Engineering & Creative Highlights

- **Interactive 3D WebGL Visualization:** Built with `@react-three/fiber` and `@react-three/drei` with real-time post-processing bloom, chromatic aberration, and particle physics.
- **Cinema-Grade Kinetic Motion:** Ultra-smooth inertial page momentum powered by **Lenis**, synchronized with **GSAP ScrollTrigger** and **Framer Motion**.
- **Dynamic Two-Pillars Showcase:** Interactive split-screen portal detailing the operational scopes of the **Cybersecurity Wing** and **Psychology Wing** with instant sub-domain routing.
- **Half-Circle Trajectory Timeline:** Interactive chronological roadmap highlighting institutional milestones, legal charter registrations, and research publications.
- **Institutional Partnerships Hub:** Structured framework for university MOUs, academic faculty collaborations, and campus outreach.
- **Data Governance & Privacy Disclosure Modal:** Granular data minimization protocols complying with the Digital Personal Data Protection (DPDP) Act.
- **Seamless Glassmorphic Aesthetics:** Deep frosted acrylics, radial ambient backdrops, subtle gold/crimson specular highlights, and zero harsh section boundaries.

---

## 🛠️ Technology Stack

| Domain | Technology | Description |
| :--- | :--- | :--- |
| **Framework** | React 18.3+ & Vite 6 | Modern modular SPA framework with instant HMR and optimized tree-shaking |
| **3D Graphics** | Three.js & R3F (`@react-three/fiber`) | Procedural particles, camera rigs, and GPU-rendered lighting effects |
| **Post-Processing**| `@react-three/postprocessing` | Bloom, Vignette, and Depth-of-Field visual pipelines |
| **Animation** | GSAP 3 + ScrollTrigger & Lenis | Smooth momentum scrolling and scroll-linked timeline sequences |
| **UI Components** | Framer Motion & Radix UI | Micro-interactions, accessible accordions, and dialog portals |
| **Styling** | Tailwind CSS & PostCSS | Cyber-tactical utility design system with custom CSS variables |
| **Icons** | Lucide React | Clean, scalable vector iconography |

---

## 📂 Project Directory Structure

```text
RedKross WebSite/
├── public/                     # Static assets, logos, and favicons
├── src/
│   ├── components/             # Reusable modular UI components
│   │   ├── LoadingScreen.jsx   # High-tech initialization sequence
│   │   ├── Navbar.jsx          # Glassmorphic adaptive navigation
│   │   ├── Hero.jsx            # 3D interactive Three.js hero showcase
│   │   ├── AboutSection.jsx    # Section 8 charter and mission statement
│   │   ├── TwoPillarsShowcase.jsx # Dual-wing interactive gateway
│   │   ├── SelectedResearchSection.jsx # Flagship cross-domain papers
│   │   ├── HalfCircleTimeline.jsx      # Interactive institutional timeline
│   │   ├── TeamSection.jsx     # Leadership and research fellows
│   │   ├── CollegePartnershipSection.jsx # Academic MOU protocols
│   │   ├── OpportunitiesSection.jsx      # Fellowships & student internships
│   │   ├── GovernanceTrustSection.jsx    # Legal & DPDP disclosures
│   │   ├── ContactSection.jsx  # Multi-channel institutional enquiry desk
│   │   ├── DataInventoryModal.jsx # Granular data policy modal
│   │   └── Footer.jsx          # Seamless blended glassmorphic footer
│   ├── data/                   # Structured research datasets and bios
│   ├── lib/                    # Shared utility functions and math helpers
│   ├── App.jsx                 # Main layout controller and animation orchestrator
│   ├── main.jsx                # Application root mount
│   └── index.css               # Global styles, fonts, and custom utilities
├── package.json                # Project dependencies and build scripts
└── vite.config.js              # Vite bundler configuration
```

---

## 🚀 Quickstart & Development Setup

### Prerequisites
- **Node.js**: `v18.0.0` or higher
- **npm**: `v9.0.0` or higher

### 1. Clone the Repository
```bash
git clone https://github.com/Atharv-design/redkross-foundation.git
cd redkross-foundation
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Launch Development Server
```bash
npm run dev
```
The application will be live at `http://localhost:5173`.

### 4. Production Build
```bash
npm run build
```
Generates a minified, production-grade output in `dist/`.

### 5. Preview Production Build
```bash
npm run preview
```

---

## 🔗 Cross-Domain Ecosystem Links

| Platform | Production URL | Focus Area |
| :--- | :--- | :--- |
| **RedKross Foundation (Main)** | [redkross.org.in](https://redkross.org.in) | Umbrella governance, institutional partnerships, legal charter |
| **Cybersecurity Wing** | [cyber.redkross.org.in](https://cyber.redkross.org.in) | Threat modeling, defensive engineering, air-gap labs |
| **Psychology Wing** | [psychology.redkross.org.in](https://psychology.redkross.org.in) | Grassroots mental health, stepped-care, bilingual counseling |

---

## 📜 Governance, Ethics & Compliance

RedKross Research Foundation operates under strict institutional principles:
- **Non-Commercial Mandate:** All research, public whitepapers, and grassroots community drives are non-profit initiatives.
- **Data Protection:** Full adherence to the Indian **Digital Personal Data Protection Act (DPDPA 2023)**. No personal identifiable information is harvested or sold.
- **Open Science:** Where security boundaries permit, research frameworks, datasets, and educational toolkits are published for open academic review.

---

## 👥 Contributors & Contact

- **Lead Architect & Developer:** Atharv Gupta ([@Atharv-design](https://github.com/Atharv-design))
- **Official Inquiries:** `contact@redkross.org.in`
- **Institutional Partnerships:** `partnerships@redkross.org.in`

© 2026 RedKross Research Foundation. All rights reserved.
