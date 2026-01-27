import React, { useState } from 'react';
import Button from './Button';
import GLogo from '../../assets/icons/Glogo.svg';

const Header = () => {
  const [active, setActive] = useState('Features');

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Showcase', href: '#showcase' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToHome = () => {
    const homeSection = document.getElementById('home');
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth' });
    }
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
            onClick={scrollToContact}
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
                    onClick={() => setActive(link.name)}
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
              onClick={scrollToContact}
              className="text-sm font-medium border rounded-full px-4 py-2 cursor-pointer"
            >
              Login
            </button>
            <Button 
              variant="hero" 
              className="!px-4 !py-2 "
              onClick={() => window.open('https://platform.garagesaarthi.com/login', '_blank')}
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
