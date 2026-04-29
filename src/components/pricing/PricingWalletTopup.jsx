import React from "react";
import { IndianRupee, Plus } from "lucide-react";

export default function PricingWalletTopup({ creditPlans, handleBuyNow }) {
  if (!creditPlans || creditPlans.length === 0) return null;

  return (
    <div className=" py-24 px-4 container mx-auto">
      <div className="text-center space-y-2 mb-4">
        <h2 className="text-4xl font-black text-slate-900 tracking-tight">
          Add-on{" "}
          <span className="relative inline-block">
            Packs
            <div className="absolute -bottom-1 left-0 w-full h-[4px] bg-gradient-to-r from-orange-500 to-red-600 rounded-full" />
          </span>
        </h2>
        <p className="text-slate-500">
          For Garages & Workshops, we've got pricing that grows with you.
        </p>
      </div>
      <div className="bg-[#F0EBE9] p-5 rounded-[24px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {creditPlans.map((cp) => (
            <button
              key={cp._id}
              onClick={handleBuyNow}
              className="group relative bg-white p-5 rounded-[24px] border border-[#FFCFC3] hover:border-[#B02E0C]/20 transition-all shadow-sm hover:shadow-xl hover:-translate-y-1 text-left flex flex-col justify-between overflow-hidden min-h-[90px]"
            >
              {cp.isPopular && (
                <div className="absolute top-4 right-4 bg-[#B02E0C] text-white text-[9px] font-black px-3 py-1 rounded-full tracking-widest shadow-sm z-10">
                  Popular
                </div>
              )}
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-[16px] bg-[#F0EBE9] flex-shrink-0 flex items-center justify-center text-[#B02E0C] group-hover:bg-[#B02E0C] group-hover:text-white transition-colors">
                  <IndianRupee className="h-6 w-6" />
                </div>
                <div className="space-y-0">
                  <p className="text-sm text-slate-500 font-medium">
                    {cp.credits} Credits
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-black text-slate-900">
                      ₹{cp.price}
                    </span>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
