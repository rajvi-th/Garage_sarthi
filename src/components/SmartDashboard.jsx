import React from 'react';
import DemoImg from '../assets/icons/Demo.svg';
import MockupBg from '../assets/icons/Mockup dashboard 1.png'; 
import Button from './common/Button';

const SmartDashboard = () => {
  return (
    <section
      id="showcase"
      className="py-10 px-4"
      style={{
        backgroundImage: `url(${MockupBg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="max-w-7xl mx-auto text-center">
        
        <h2 className="text-xl md:text-2xl font-bold text-text-dark mb-4">
          Run Your Entire Garage From <br />
          One{' '}
          <span className="relative inline-block">
            Smart Dashboard
            <span className="absolute -bottom-1 left-0 w-full h-1 rounded-full bg-[linear-gradient(90deg,#B02E0C_0%,#FF643C_100%)]"></span>
          </span>
        </h2>

        <p className="text-text-muted text-sm md:text- max-w-2xl mx-auto mb-8">
          Manage jobs, customers, vehicles, staff, and finances seamlessly – all in one
          powerful garage management system designed for modern workshops.
        </p>

        <div className="flex justify-center mb-6">
          <Button 
            variant="hero" 
            className="!px-8"
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Book a Free Demo
            <svg
                  className="w-5 h-5"
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

        <div className="relative max-w-6xl mx-auto">
          <img src={DemoImg} alt="Smart Dashboard Mockup" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default SmartDashboard;
