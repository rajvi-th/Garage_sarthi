import React from "react";
import Button from "./common/Button";
import HeroBg from "../assets/icons/Gimage.svg";
import DashboardImg from "../assets/icons/Gvector.svg";

const Hero = () => {
  return (
    <section id="home" className="relative w-full overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HeroBg})` }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 min-h-[300px] md:min-h-[400px] lg:min-h-[500px] xl:min-h-[600px] flex flex-col items-center justify-center px-4 
      pt-24 md:pt-32 lg:pt-40 xl:pt-48  
      pb-32 md:pb-40 lg:pb-48 xl:pb-56 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-white font-semibold text-2xl md:text-4xl lg:text-5xl leading-tight mb-6">
            Your Digital Partner in <br />
            <span className="text-white">Garage Management</span>
          </h1>

          <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto mb-10">
            Simplify your garage operations with smart automation, from job
            cards and billing to parts, customers, and team tracking.
          </p>

          <div className="flex flex-row max-[380px]:flex-col justify-center gap-4">

            <Button 
              variant="hero" 
              className="ring-4 ring-white/10 !px-8 !py-2 text-lg"
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

            <button className="flex items-center gap-3 px-5 py-2 rounded-full bg-white text-gray-900 font-semibold hover:bg-gray-100 transition shadow-lg cursor-pointer">
              <span className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white ml-0.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              Watch Demo
            </button>
          </div>
        </div>
      </div>

      {/* Dashboard Card */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 -mt-16 md:-mt-24 lg:-mt-32 xl:-mt-40">
        <div className="">
          <img
            src={DashboardImg}
            alt="Garage Dashboard"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
