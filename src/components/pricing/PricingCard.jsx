import React from "react";
import { cn } from "../../utils/cn";
import { Check, ArrowRight } from "lucide-react";
import fireIcon from "../../assets/pricing/fire.svg";
import ellipseIcon from "../../assets/pricing/ellipse.svg";

export default function PricingCard({
  plan,
  isTarget,
  handleBuyNow,
  onContactUs,
}) {
  const isLifetime = plan.name?.toLowerCase().includes("life");
  const perMonthPrice = Math.round(plan.price / plan.durationMonths);

  return (
    <div
      className={cn(
        "relative transition-all duration-700 ease-in-out w-full border rounded-[28px] overflow-hidden flex flex-col h-full",
        isTarget
          ? "xl:scale-105 z-10 shadow-2xl"
          : "xl:scale-95 xl:opacity-80 shadow-sm",
      )}
      style={{ borderColor: isTarget ? "#FFCFC3" : "#F6F6F6" }}
    >
      {isTarget && (
        <img
          src={ellipseIcon}
          alt="ellipse icon"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
        />
      )}
      <div className="relative z-10 h-full w-full bg-white p-4 flex flex-col">
        <div
          className="relative p-5 space-y-4 rounded-[28px] mb-2"
          style={{
            backgroundColor: isTarget ? "#F0E6E2" : "#F6F6F6",
          }}
        >
          {plan.isPopular && (
            <div className="absolute top-0 left-6 bg-[#B02E0C] text-white px-3 py-0.5 rounded-b-lg text-[11px] tracking-widest font-normal">
              Most Popular
            </div>
          )}
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-lg font-medium text-slate-800 tracking-tighter">
              {isLifetime ? "Lifetime" : `${plan.durationMonths} Months`}
            </h3>
            {plan.durationMonths >= 6 && !isLifetime && (
              <div className="flex items-center gap-1 py-1 px-3 bg-white rounded-full border border-white/20 text-[11px] font-semibold">
                <img src={fireIcon} className="h-3 w-3" alt="fire icon" /> Save
                ₹{plan.durationMonths * 100}
              </div>
            )}
          </div>
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={cn(
                  "whitespace-nowrap",
                  isTarget
                    ? "font-semibold text-3xl sm:text-4xl"
                    : "font-medium text-2xl sm:text-3xl",
                )}
              >
                {isLifetime ? "Life Time Access" : `₹${plan.price}.00`}
              </span>
              {!isLifetime && (
                <div className="bg-white px-2 py-[2px] rounded-full border border-white/20 shadow-sm whitespace-nowrap">
                  <span className="text-slate-800 text-[12px]">
                    ₹{perMonthPrice}/month
                  </span>
                </div>
              )}
            </div>
            <p className="text-[13px] text-[#626366] font-normal">
              {isLifetime
                ? "Ultimate freedom for your business"
                : "Best Value for small workshops"}
            </p>
          </div>
          <div className="flex items-center gap-2">
            {!isLifetime ? (
              <button
                onClick={() =>
                  window.open(
                    `${import.meta.env.VITE_FRONTEND_URL}/login`,
                    "_blank",
                  )
                }
                className="w-full border border-[#0F172A] text-[#0F172A] py-2.5 rounded-full font-bold transition-all hover:bg-slate-50 cursor-pointer flex flex-col items-center leading-tight"
              >
                <span className="text-[13px]">Start 7 Days Free Trial</span>
              </button>
            ) : (
              <button
                onClick={onContactUs}
                className={cn(
                  "w-full py-2 rounded-full font-bold transition-all flex items-center justify-center gap-2 text-[13px] whitespace-nowrap cursor-pointer",
                  isTarget
                    ? "bg-[#B02E0C] text-white hover:bg-[#B83520]"
                    : "text-[#B02E0C] border border-[#B02E0C]",
                )}
              >
                Contact Us <ArrowRight className="h-4 w-4" />
              </button>
            )}
          </div>
          <span className="text-[12px] font-normal">*No payment details needed</span>
        </div>
        <div className="p-4 flex-grow">
          <p className="text-[15px] font-bold text-[#080B23] mb-2">Features</p>
          <div className="space-y-0">
            {(plan.features?.length
              ? plan.features
              : [
                  "All Features Included",
                  `${isLifetime ? 1000 : plan.walletCredits || 100} WhatsApp Credits`,
                  "Priority Support",
                  "Accurate Finance Tracking",
                  "Automated Updates",
                ]
            ).map((feature, i) => (
              <div
                key={i}
                className="flex items-center gap-4 border-b border-[#EFEFEF]/60 py-3 last:border-0"
              >
                <div className="w-5 h-5 rounded-full bg-[#B02E0C]/10 flex items-center justify-center flex-shrink-0">
                  <Check className="h-3 w-3 text-[#B02E0C] stroke-[4px]" />
                </div>
                <span className="text-sm font-normal text-[#080B23]">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
