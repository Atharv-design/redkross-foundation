import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    const sectionIds = ['hero', 'about', 'pillars', 'research', 'past', 'team', 'partners', 'opportunities', 'governance', 'contact'];
    const handleScrollSpy = () => {
      const scrollY = window.scrollY;
      const navOffset = 200;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const top = el.offsetTop - navOffset;
          if (scrollY >= top) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    handleScrollSpy();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleScrollSpy);
    };
  }, []);

  // Clean, professional nav titles mapped directly to core architecture
  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Pillars", href: "#pillars" },
    { label: "Research & Innovation", href: "#research" },
    { label: "Our Journey", href: "#past" },
    { label: "Team", href: "#team" },
    { label: "Partnerships", href: "#partners" },
    { label: "Opportunities", href: "#opportunities" },
    { label: "Governance", href: "#governance" },
    { label: "Contact", href: "#contact" }
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    setActiveSection(targetId);
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className="fixed top-5 inset-x-0 z-50 px-4 sm:px-8 pointer-events-none select-none">
      <div className={`max-w-7xl mx-auto rounded-full px-5 py-2.5 flex items-center justify-between transition-all duration-300 pointer-events-auto ${
        scrolled
          ? "bg-[#06080e]/85 backdrop-blur-2xl border border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.7)]"
          : "bg-[#06080e]/60 backdrop-blur-lg border border-white/10 shadow-lg"
      }`}>
        
        {/* Brand Logo & Name */}
        <a 
          href="#hero" 
          onClick={(e) => handleLinkClick(e, '#hero')}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="relative w-8 h-8 rounded-full overflow-hidden bg-black border border-[#E57A00]/50 flex items-center justify-center shadow-[0_0_15px_rgba(229,122,0,0.3)] group-hover:scale-105 transition-transform">
            <img 
              src="/assets/crest-clean-circle.png" 
              alt="RedKross Logo" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div className="flex flex-col">
            <span className="font-royal font-bold text-sm tracking-wider text-white leading-tight">
              RedKross <span className="text-[#E57A00]">Foundation</span>
            </span>
            <span className="text-[9px] font-mono tracking-widest text-gray-400 uppercase -mt-0.5">
              Research &bull; Education
            </span>
          </div>
        </a>

        {/* Desktop Single-Line Horizontal Nav */}
        <nav className="hidden xl:flex items-center gap-4 2xl:gap-5">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-xs font-mono font-medium transition-colors duration-200 relative py-1 whitespace-nowrap ${
                  isActive ? "text-[#E57A00] font-bold" : "text-gray-300 hover:text-white"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-[#E57A00] to-[#0FB7B7] rounded-full shadow-[0_0_8px_rgba(229,122,0,0.8)]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Action: Slim Pill Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#partners"
            onClick={(e) => handleLinkClick(e, '#partners')}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-black text-xs font-royal font-bold tracking-wider shadow-[0_0_20px_rgba(229,122,0,0.35)] hover:scale-105 transition-all cursor-pointer uppercase"
            style={{
              background: 'linear-gradient(135deg, #E57A00, #FF9E2C)'
            }}
          >
            <span>Partner With Us</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile / Tablet Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2 rounded-full bg-white/5 border border-white/10 text-gray-300 cursor-pointer"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-[#E57A00]" /> : <Menu className="w-5 h-5 text-[#E57A00]" />}
        </button>

      </div>

      {/* Accessible Mobile Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden mt-3 max-w-7xl mx-auto rounded-3xl bg-[#06080e]/95 backdrop-blur-2xl border border-white/10 p-5 shadow-2xl pointer-events-auto">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-xs font-mono text-gray-200 hover:text-[#E57A00] py-2 px-3 rounded-lg hover:bg-white/5 transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-[10px] text-gray-500 font-mono">&gt;</span>
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#partners"
                onClick={(e) => handleLinkClick(e, '#partners')}
                className="block text-center py-2.5 rounded-full bg-[#E57A00] text-black font-royal font-bold text-xs uppercase tracking-wider"
              >
                Partner With Us
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
