import React, { useState, useEffect, useRef } from "react";
import { cn } from "../../utils/cn";
import fireIcon from "../../assets/pricing/fire.svg";

export default function PricingComparisonTable({ plans }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
            setIsVisible(true);
            if (sectionRef.current) observer.unobserve(sectionRef.current);
          }
        },
        {
          threshold: 0.3,
          rootMargin: "0px",
        },
      );

      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }

      return () => observer.disconnect();
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  const sortedPlans = plans
    .filter((p) => p.durationMonths !== 999 && p.price > 0)
    .sort((a, b) => a.durationMonths - b.durationMonths);

  const baseMonthlyPrice = sortedPlans.find((p) => p.durationMonths === 1)?.price || 999;

  if (sortedPlans.length === 0) return null;

  return (
    <div className="bg-[#F6F6F6] py-24 px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Pricing{" "}
          <span className="relative inline-block">
            Comparison
            <span className="absolute left-0 -bottom-1 w-full h-[4px] bg-gradient-to-r from-orange-500 to-red-600 rounded-full"></span>
          </span>
        </h2>
        <p className="text-slate-500 max-w-2xl mx-auto">
          For Garages & Workshops, we’ve got pricing that grows with you.
        </p>
      </div>

      <div className="container mx-auto relative group" ref={sectionRef}>
        <div
          className="bg-white rounded-[26px] overflow-hidden border border-[#F1F1F4]"
          style={{
            boxShadow: `
              0px 6px 13px 0px #CCCCCC1A,
              0px 24px 24px 0px #CCCCCC17,
              0px 54px 33px 0px #CCCCCC0D,
              0px 97px 39px 0px #CCCCCC03,
              0px 151px 42px 0px #CCCCCC00
            `,
          }}
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse table-fixed min-w-[1100px]">
              <thead>
                <tr className="bg-[#FCFCFC] border-b border-[#F1F1F4]">
                  <th className="w-1/4 py-6 px-10 font-bold text-[#0F172A] text-sm tracking-wider">
                    Plan
                  </th>
                  <th className="w-1/4 py-6 px-6 font-bold text-[#0F172A] text-sm tracking-wider text-center">
                    Price
                  </th>
                  <th className="w-1/4 py-6 px-6 font-bold text-[#0F172A] text-sm tracking-wider text-center">
                    <span className="xl:opacity-0 transition-opacity">
                      Save On Plan
                    </span>
                  </th>
                  <th className="w-1/4 py-6 px-10 font-bold text-[#0F172A] text-sm tracking-wider text-center">
                    Monthly Equivalent
                  </th>
                </tr>
              </thead>
              <tbody>
                {sortedPlans.map((plan) => {
                  const totalMonthlyValue = baseMonthlyPrice * plan.durationMonths;
                  const savings = totalMonthlyValue - plan.price;
                  const perMonth = Math.round(plan.price / plan.durationMonths);
                  const isBestValue = plan.durationMonths === 12;

                  return (
                    <tr
                      key={plan._id}
                      className={cn(
                        "border-b border-[#F1F1F4] transition-colors",
                        isBestValue
                          ? "bg-[#F8F4EE] border-[#E5D7C252]"
                          : "bg-white hover:bg-slate-50/30",
                      )}
                    >
                      <td className="py-6 px-10">
                        <div className="flex items-center gap-3">
                          <span
                            className={cn(
                              "text-base text-[#0F172A]",
                              isBestValue ? "font-bold" : "font-normal",
                            )}
                          >
                            {plan.durationMonths} Months
                          </span>
                          {isBestValue && (
                            <span className="bg-gradient-to-r from-[#00822B] to-[#04B740] text-white text-[11px] px-3 py-1.5 rounded-full font-medium tracking-widest uppercase">
                              Best Value
                            </span>
                          )}
                        </div>
                      </td>
                      <td
                        className={cn(
                          "py-6 px-6 text-center text-[#0F172A] text-lg",
                          isBestValue ? "font-bold" : "font-normal",
                        )}
                      >
                        ₹{plan.price}
                      </td>
                      <td
                        className={cn(
                          "py-6 px-6 text-center text-[#0F172A] text-lg",
                          isBestValue ? "font-bold" : "font-normal",
                        )}
                      >
                        <span className="xl:opacity-0 transition-opacity">
                          {savings > 0
                            ? `₹${Math.round(savings / 100) * 100}`
                            : "-"}
                        </span>
                      </td>
                      <td
                        className={cn(
                          "py-6 px-10 text-center text-[#0F172A] text-lg",
                          isBestValue ? "font-bold" : "font-normal",
                        )}
                      >
                        ₹{perMonth}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Floating "Save On Plan" Column */}
        <div
          className={cn(
            "absolute top-0 left-[62.5%] -translate-x-1/2 w-1/4 bg-white rounded-3xl border border-[#F1F1F4] transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] z-20 pointer-events-none hidden xl:block",
            isVisible
              ? "opacity-100 scale-105 translate-y-[-15px]"
              : "opacity-0 scale-95 translate-y-8",
          )}
          style={{
            height: `calc(100% + 20px)`,
            boxShadow: "0 30px 60px -12px rgba(0, 0, 0, 0.12)",
          }}
        >
          <div className="h-[73px] px-6 text-center border-b border-[#F1F1F4] flex items-center justify-center gap-2 bg-[#FCFCFC] rounded-t-3xl">
            <img src={fireIcon} className="h-4 w-4" alt="fire" />
            <span className="font-bold text-[#0F172A] text-sm tracking-wider">
              Save On Plan
            </span>
          </div>
          <div className="flex flex-col">
            {sortedPlans.map((plan) => {
              const totalMonthlyValue = baseMonthlyPrice * plan.durationMonths;
              const savings = totalMonthlyValue - plan.price;
              const isBestValue = plan.durationMonths === 12;

              return (
                <div
                  key={plan._id}
                  className={cn(
                    "h-[77px] flex items-center justify-center border-b last:border-0 text-[#0F172A] text-xl",
                    isBestValue
                      ? "bg-[#F8F4EE] border-[#E5D7C252] font-bold"
                      : "border-[#F1F1F4] font-normal",
                  )}
                >
                  {savings > 0 ? `₹${Math.round(savings / 100) * 100}` : "-"}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
