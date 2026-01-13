import React from "react";
import GformBg from "../assets/icons/Gform.svg";
import Button from "./common/Button";

const ContactSection = () => {
  return (
    <section id="contact" className="px-4 lg:px-15 2xl:px-25 pb-10 lg:pb-20 flex justify-center">
      <div
        className="relative w-full mx-auto max-w-full min-h-[420px] rounded-[28px] overflow-hidden flex items-center"
        style={{
          backgroundImage: `url(${GformBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/90 via-black/60 to-black/90" />

        {/* Content */}
        <div className="relative z-10 w-full flex flex-col lg:flex-row items-center gap-12 px-6 md:px-12 lg:px-16">
          {/* Left Content */}
          <div className="flex-1 text-white">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold leading-tight mb-6 mt-6">
              Ready to Simplify Your Garage
              <br className="hidden md:block" /> Management?
            </h2>

            <p className="text-white/80 text-base md:text-lg max-w-xl mb-3">
              Get a free, personalized demo from our experts.
            </p>

            <p className="text-white/70 text-base md:text-lg max-w-xl">
              We'll help you set up GarageSaarthi, understand all features, and
              get your garage running smarter from day one.
            </p>
          </div>

          {/* Right Form */}
          <div className="w-full lg:max-w-[380px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-white text-xs mb-1 block">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full rounded-xl px-4 py-3 text-sm bg-white outline-none"
                />
              </div>

              <div>
                <label className="text-white text-xs mb-1 block">Email</label>
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full rounded-xl px-4 py-3 text-sm bg-white outline-none"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="text-white text-xs mb-1 block">
                Garage/Workshop Name
              </label>
              <input
                type="text"
                placeholder="Garage name"
                className="w-full rounded-xl px-4 py-3 text-sm bg-white outline-none"
              />
            </div>

            <div className="mb-6">
              <label className="text-white text-xs mb-1 block">
                Your Message
              </label>
              <textarea
                rows="3"
                placeholder="Write your message"
                className="w-full rounded-2xl px-4 py-3 text-sm bg-white outline-none resize-none"
              />
            </div>

            <div className="relative flex justify-center sm:justify-end pb-6">
              <Button
                variant="hero"
                className="
    w-full sm:w-auto
    
    justify-center
  "
              >
                Book Demo
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
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
