import React from "react";
import JobIcon from "../assets/icons/Job.svg";
import DashboardIcon from "../assets/icons/Gdashboard.svg";
import FinanceIcon from "../assets/icons/Gfinance.svg";
import PortalIcon from "../assets/icons/Portal.svg";
import AnalyticsIcon from "../assets/icons/Analytics.svg";
import Button from "./common/Button";

const features = [
  {
    title: "Job Management",
    description: "Track repairs from start to finish with digital job cards",
    icon: JobIcon,
    bgColor: "bg-orange-50",
    iconColor: "#D13F26",
  },
  {
    title: "Real-time Dashboard",
    description: "Monitor operations with live analytics and insights",
    icon: DashboardIcon,
    bgColor: "bg-orange-50",
    iconColor: "#D13F26",
  },
  {
    title: "Finance Management",
    description: "All your garage finances, managed in one place",
    icon: FinanceIcon,
    bgColor: "bg-orange-50",
    iconColor: "#D13F26",
  },
  {
    title: "Customer Portal",
    description: "Monitor operations with live analytics and insights",
    icon: PortalIcon,
    bgColor: "bg-orange-50",
    iconColor: "#D13F26",
  },
  {
    title: "Smart Analytics",
    description: "Data-driven decisions with comprehensive reporting",
    icon: AnalyticsIcon,
    bgColor: "bg-orange-50",
    iconColor: "#D13F26",
    isSpecial: true,
  },
];

const DashboardFeatures = () => {
  return (
    <div id="features" className="bg-white">
      {/* Dashboard Preview Section */}
      <section className="relative z-20 pt-10 lg:pt-20 pb-10 px-4 flex justify-center">
        <div className="max-w-7xl w-full">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-6">
              Your entire garage. <br />
              One powerf
              <span className="relative">
                ul dashboard.
                <span className="absolute bottom-0 left-0 w-full rounded-full hidden md:block  h-1 bg-[linear-gradient(90deg,#B02E0C_0%,#FF643C_100%)] "></span>
              </span>
            </h2>
            <p className="text-sm md:text-base mb-6">
              GarageSaarthi by Techifyhouse is a cloud-based platform for
              automobile workshops to manage jobs, billing, inventory,
              customers, and staff - all in one place.
            </p>
            <div className="flex justify-center">
              <Button variant="hero" className="cursor-pointer">
                Explore Now
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
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="pb-10 lg:pb-20 px-4 lg:px-15 2xl:px-25 bg-white">
        <div className="mx-auto max-w-full ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`relative p-4 border border-[#EEE] 
          transition-all duration-300 hover:shadow-sm hover:-translate-y-1 cursor-pointer
          ${
            feature.isSpecial ? "bg-[#EFE9E7] rounded-tr-[150px]" : "bg-white"
          }`}
              >
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center mb-6">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-9 h-9"
                  />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-2">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DashboardFeatures;
