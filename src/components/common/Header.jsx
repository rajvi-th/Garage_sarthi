import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from './Button';
import GLogo from '../../assets/icons/Glogo.svg';

const Header = () => {
  const [active, setActive] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Showcase', href: '#showcase' },
    { name: 'Contact', href: '#contact' },
  ];

  // Clear active state when not on home page
  useEffect(() => {
    if (location.pathname !== '/') {
      setActive('');
    }
  }, [location.pathname]);

  const scrollToSection = (sectionId, linkName) => {
    // If we're on the home page, just scroll
    if (location.pathname === '/') {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        setActive(linkName);
      }
    } else {
      // If we're on another page, navigate to home first
      navigate('/');
      // Wait for navigation and DOM update, then scroll
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
          setActive(linkName);
        }
      }, 100);
    }
  };

  const handleNavClick = (e, link) => {
    e.preventDefault();
    const sectionId = link.href.replace('#', '');
    scrollToSection(sectionId, link.name);
  };

  const scrollToContact = () => {
    scrollToSection('contact', 'Contact');
  };

  const scrollToHome = () => {
    if (location.pathname === '/') {
      // If already on home page, just scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Navigate to home page
      navigate('/');
      // Scroll to top after navigation
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
    setActive(''); // Clear active state when clicking logo
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 2xl:px-25">
      <nav className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full bg-white rounded-full border border-gray-100 px-4 py-3 flex items-center justify-between">

        {/* ================= MOBILE / TABLET ================= */}
        <div className="flex items-center justify-between w-full md:hidden">
          
          {/* Hamburger */}
          <button className="p-2">
            <span className="block w-6 h-[2px] bg-black mb-1 rounded"></span>
            <span className="block w-6 h-[2px] bg-black mb-1 rounded"></span>
            <span className="block w-6 h-[2px] bg-black rounded"></span>
          </button>

          {/* Logo Center */}
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={scrollToHome}
          >
            <img src={GLogo} alt="GarageSaarthi" className="h-8" />
          </div>

          {/* Login */}
          <button 
            onClick={() => window.open('https://platform.garagesaarthi.com/login', '_blank')}
            className="border border-black rounded-full px-4 py-1.5 text-sm font-medium"
          >
            Login
          </button>
        </div>

        {/* ================= DESKTOP ================= */}
        <div className="hidden md:flex items-center justify-between w-full px-4">
          
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={scrollToHome}
          >
            <img src={GLogo} alt="GarageSaarthi" className="h-8 2xl:h-10" />
          </div>

          {/* Nav Links */}
          <ul className="flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = active === link.name;
              return (
                <li key={link.name} className="relative">
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link)}
                    className="text-md font-medium pb-2"
                  >
                    {link.name}
                  </a>

                  {isActive && (
                    <span
                      className="absolute left-0 right-0 -bottom-1 h-[5px] w-7 rounded-full"
                      style={{
                        background:
                          'linear-gradient(90deg, #B02E0C 0%, #FF643C 100%)',
                      }}
                    />
                  )}
                </li>
              );
            })}
          </ul>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => window.open('https://platform.garagesaarthi.com/login', '_blank')}
              className="text-sm font-medium border rounded-full px-4 py-2 cursor-pointer"
            >
              Login
            </button>
            <Button 
              variant="hero" 
              className="!px-4 !py-2 "
              onClick={scrollToContact}
            >
              Get Started
              <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
            </Button>
          </div>
        </div>

      </nav>
    </header>
  );
};

export default Header;
