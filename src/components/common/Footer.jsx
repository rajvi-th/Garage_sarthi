import React from "react";
import GLogo from "../../assets/icons/Glogo.svg";
import CallIcon from "../../assets/icons/Call.svg";
import EmailIcon from "../../assets/icons/Email.svg";
import Button from "./Button";

const Footer = () => {
  return (
    <footer className="relative mt- px-4 lg:px-15 2xl:px-25 pb-6 bg-white overflow-hidden">
      {/* Bottom Left Shadow */}
      <div
        className="absolute -bottom-56 -left-56 w-[420px] h-[420px] rounded-full z-0"
        style={{
          background: "#CEBBB5",
          filter: "blur(271px)",
          opacity: 0.55,
        }}
      />

      {/* Bottom Right Shadow */}
      <div
        className="absolute -bottom-56 -right-56 w-[420px] h-[420px] rounded-full z-0"
        style={{
          background: "#CEBBB5",
          filter: "blur(271px)",
          opacity: 0.55,
        }}
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
              >
                Access Platform
              </Button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4 md:mt-10">
            <a
              href="tel:+919737321120"
              className="flex items-center gap-2"
            >
              <img src={CallIcon} alt="Call" className="w-4 h-4 -translate-y-px" />
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
            <a href="#" className="text-xs hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
