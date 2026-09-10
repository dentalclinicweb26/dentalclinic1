import { useState, useEffect, type MouseEvent } from 'react';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Treatments', href: '#treatments' },
    { name: 'Why Dentoville', href: '#why-us' },
    { name: 'Doctor', href: '#doctor' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-[0_4px_20px_-4px_rgba(78,62,45,0.08)] border-b border-[#E8DFD5]'
          : 'bg-[#FAF7F2]/80 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Wordmark */}
          <a
            id="brand-logo-link"
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-lg bg-[#292524] flex items-center justify-center text-[#FAF7F2] shadow-sm border border-[#44403C] group-hover:bg-[#1C1917] transition-colors">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 text-[#D4AF37]"
              >
                <path d="M12 2C8.5 2 6 4.5 6 8c0 3 1.5 5.5 2.5 8 .8 2 1.5 4 3.5 4s2.7-2 3.5-4c1-2.5 2.5-5 2.5-8 0-3.5-2.5-6-6-6z" />
                <path d="M9 8.5c1-1 5-1 6 0" />
              </svg>
            </div>
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1.5">
                <span className="font-serif text-2xl tracking-tight text-[#1C1917] font-medium group-hover:text-[#8C6D43] transition-colors">
                  Dentoville
                </span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#B8976C]"></span>
              </div>
              <span className="text-[10px] tracking-wider uppercase text-[#78716C] font-medium hidden sm:inline-block">
                Orthodontic & Multi-Speciality Clinic
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav-menu" className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm font-medium transition-colors relative py-1 ${
                    isActive
                      ? 'text-[#1C1917] font-semibold'
                      : 'text-[#57534E] hover:text-[#1C1917]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#B8976C] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action CTAs (Desktop and Mobile) */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              id="header-cta-phone"
              href={CLINIC_INFO.phoneTel}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wide text-[#292524] bg-white border border-[#D8CBBA] rounded-lg hover:border-[#B8976C] hover:bg-[#FAF7F2] transition-all duration-200 shadow-xs"
            >
              <Phone className="w-3.5 h-3.5 text-[#8C6D43]" />
              <span>{CLINIC_INFO.phoneDisplay}</span>
            </a>

            <a
              id="header-cta-whatsapp"
              href={CLINIC_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wide text-white bg-[#2D4A3E] hover:bg-[#233A31] border border-[#2D4A3E] rounded-lg transition-all duration-200 shadow-xs hover:shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#86EFAC]" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle-btn"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-lg text-[#292524] hover:bg-[#EFE9E1] transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-[#1C1917]" />
            ) : (
              <Menu className="w-6 h-6 text-[#1C1917]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-dropdown"
          className="lg:hidden bg-[#FAF7F2] border-b border-[#E8DFD5] shadow-lg animate-in slide-in-from-top-2 duration-200"
        >
          <div className="max-w-7xl mx-auto px-5 pt-3 pb-6 space-y-3">
            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-[#E8DFD5]">
              <a
                id="mobile-call-btn"
                href={CLINIC_INFO.phoneTel}
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs font-semibold text-[#1C1917] bg-white border border-[#D8CBBA]"
              >
                <Phone className="w-3.5 h-3.5 text-[#8C6D43]" />
                <span>Call Clinic</span>
              </a>
              <a
                id="mobile-whatsapp-btn"
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs font-semibold text-white bg-[#2D4A3E]"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#86EFAC]" />
                <span>WhatsApp</span>
              </a>
            </div>

            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    id={`mobile-nav-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-3 py-2.5 rounded-md text-sm font-medium flex items-center justify-between transition-colors ${
                      isActive
                        ? 'bg-[#EFE9E1] text-[#1C1917] font-semibold'
                        : 'text-[#44403C] hover:bg-[#F5EFE6]'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8C6D43]" />
                    )}
                  </a>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
