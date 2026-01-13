import React from 'react';
import JobCardImg from '../assets/icons/jobcard.svg';
import JobIcon from '../assets/icons/Job.svg';
import GarageIcon from '../assets/icons/Garage.svg';
import PaymentIcon from '../assets/icons/Payments.svg';

const benefits = [
  {
    icon: JobIcon,
    stat: '50%',
    title: 'Faster Job Completion',
    description: 'Reduce delays with digital job cards and smooth workflows.'
  },
  {
    icon: GarageIcon,
    stat: '24/7',
    title: 'Garage Control Anytime',
    description: 'Access jobs, finances, and updates anytime, anywhere.'
  },
  {
    icon: PaymentIcon,
    stat: '100%',
    title: 'Transparent Payments',
    description: 'Track income, expenses, and dues with complete clarity.'
  }
];

const IndustrialBenefits = () => {
  return (
    <section className="py-10 lg:py-20 px-4 bg-white">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-7xl flex flex-col lg:flex-row items-center gap-20">
        {/* Benefits List */}
        <div className="flex-1 space-y-8">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="flex items-start gap-6 group">
              <div className="w-14 h-14 rounded-full bg-[#EFE9E7] flex items-center justify-center shrink-0 ">
                <img src={benefit.icon} alt={benefit.title} className="w-6 h-6" />
              </div>
              <div className="flex-1 pt-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-bold text-text-dark">{benefit.stat}</span>
                </div>
                <h3 className="text-lg font-bold text-text-dark">{benefit.title}</h3>
                <p className="text-sm leading-relaxed max-w-sm">
                  {benefit.description}
                </p>
                {idx !== benefits.length - 1 && <div className="mt-8 border-b border-[#EFE9E7] w-full" />}
              </div>
            </div>
          ))}
        </div>

        {/* Right side Mockup Container */}
        <div className="flex-1 relative overflow-hidden">
           <div className="">
             <img src={JobCardImg} alt="Recent Job Cards Mockup" className="w-full h-auto" />
           </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrialBenefits;
