import React from "react";
import { Link } from "react-router-dom";
import GLogo from "../../assets/icons/Glogo.svg";
import CallIcon from "../../assets/icons/Call.svg";
import EmailIcon from "../../assets/icons/Email.svg";
import Button from "./Button";
import BgVector1 from "../../assets/icons/Bgvector-1.svg";
import BgVector2 from "../../assets/icons/Bgvector-2.svg";

const Footer = () => {
  return (
    <footer className="relative px-4 lg:px-15 2xl:px-25 py-6 bg-white overflow-hidden">
      {/* Bottom Left Shadow Vector */}
      <img
        src={BgVector1}
        alt=""
        className="pointer-events-none select-none absolute -bottom-20 -left-20 w-[700px] max-w-none opacity-80 z-0"
      />

      {/* Bottom Right Shadow Vector */}
      <img
        src={BgVector2}
        alt=""
        className="pointer-events-none select-none absolute -bottom-20 -right-20 w-[700px] max-w-none opacity-80 z-0"
      />

      <div
        className="absolute inset-0 pointer-events-none z-[1] bg-gradient-to-b from-white via-white/80 to-transparent"
      />
      {/* Content */}
      <div className="mx-auto max-w-full  relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-6">
          {/* Logo and About */}
          <div className="max-w-md space-y-2">
            <img src={GLogo} alt="GarageSaarthi" className="h-10" />

            <p className="text-[#575757] text-xs font-medium leading-relaxed">
              Simplify your garage operations with smart automation, from job
              cards and billing to parts, customers, and team tracking.
            </p>

            <p className="text-xs font-medium">
              Product By{" "}
              <span className="text-[#B02E0C] font-bold">TechifyHouse</span>
            </p>

            <div className="pt-4">
              <Button
                variant="hero"
                icon={
                  <svg
                    className="w-4 h-4"
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
                }
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Access Platform
              </Button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4 md:mt-10">
            <a href="tel:+919737321120" className="flex items-center gap-2">
              <img
                src={CallIcon}
                alt="Call"
                className="w-4 h-4 -translate-y-px"
              />
              <span className="font-medium">+91 9737321120</span>
            </a>

            <a
              href="mailto:contact@techifyhouse.com"
              className="flex items-center gap-2"
            >
              <img src={EmailIcon} alt="Email" className="w-4 h-4" />
              <span className="font-medium">contact@techifyhouse.com</span>
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-6 border-t border-gray-200/60 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] 2xl:text-sm">
            © {new Date().getFullYear()} GarageSaarthi. All rights reserved by{" "}
            <span className="text-[#B02E0C] font-medium">Techifyhouse.</span>
          </p>

          <div className="flex items-center gap-8">
            <Link
              to="/privacy-policy"
              className="text-xs hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-and-conditions"
              className="text-xs hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
