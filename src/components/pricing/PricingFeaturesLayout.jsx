import React from "react";
import { Check } from "lucide-react";
import features1 from "../../assets/pricing/features1.svg";
import features2 from "../../assets/pricing/features2.svg";
import garageIcon from "../../assets/pricing/garagesaarthi-og.png";

const featuresLayoutData = [
  {
    title: "GarageSaarthi Helps You...",
    icon: garageIcon,
    items: [
      "Track all customer dues in one place",
      "Never forget pending payments",
      "Automate WhatsApp reminders",
      "Manage daily garage work easily",
      "Keep complete business history",
      "Access from anywhere, anytime",
    ],
  },
  {
    title: "Why Garage Owners Love It...",
    icon: features1,
    items: [
      "Recover more money, faster",
      "No more manual registers",
      "Everything in one app",
      "Simple & Reliable",
      "Accurate Garage Finance Tracking",
    ],
  },
  {
    title: "Included in Every Plan...",
    icon: features2,
    items: [
      "Unlimited customers",
      "Unlimited jobcard creation",
      "Unlimited Before/After Images",
      "GST Billing",
      "WhatsApp integration",
      "Automated Whatsapp Updates",
      "Secure cloud storage",
    ],
  },
];

export default function PricingFeaturesLayout() {
  return (
    <div className="py-24 px-4">
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
          GarageSaarthi{" "}
          <span className="relative inline-block">
            Features
            <span className="absolute left-0 -bottom-1 w-full h-[4px] bg-gradient-to-r from-orange-500 to-red-600 rounded-full"></span>
          </span>
        </h2>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg">
          Everything you need to manage, grow, and optimize your workshop - all
          in one place.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuresLayoutData.map((feature, idx) => (
          <div
            key={idx}
            className="p-10 rounded-[22px] bg-[#F3F3F3CC] transition-all duration-500 flex flex-col items-start gap-8 border border-transparent shadow-md hover:bg-[#EFE9E7] hover:shadow-2xl hover:-translate-y-1"
          >
            <div className="w-14 h-14 rounded-3xl bg-white shadow-sm flex items-center justify-center overflow-hidden p-3">
              <img
                src={feature.icon}
                alt="icon"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="space-y-6 w-full">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 leading-tight">
                {feature.title}
              </h3>
              <ul className="space-y-4">
                {feature.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#B02E0C] flex items-center justify-center shadow-sm shadow-orange-900/20">
                      <Check className="h-3 w-3 text-white stroke-[4px]" />
                    </div>
                    <span className="text-slate-600 text-[15px] leading-tight">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
