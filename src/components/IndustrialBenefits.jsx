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
    <section className="py-10 lg:py-20 px-4 lg:px-15 2xl:px-25 bg-white">
      <div className="mx-auto max-w-full flex flex-col lg:flex-row items-center gap-10 lg:gap-70 2xl:gap-100">
        {/* Benefits List */}
        <div className="flex-1 space-y-8 2xl:space-y-20">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="flex items-start gap-6 group">
              <div className="w-14 h-14 2xl:w-30 2xl:h-30 rounded-full bg-[#EFE9E7] flex items-center justify-center shrink-0 ">
                <img src={benefit.icon} alt={benefit.title} className="w-6 h-6 2xl:w-15 2xl:h-15" />
              </div>
              <div className="flex-1 pt-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-xl 2xl:text-4xl font-bold text-text-dark 2xl:mb-4">{benefit.stat}</span>
                </div>
                <h3 className="text-lg 2xl:text-2xl font-bold text-text-dark">{benefit.title}</h3>
                <p className="text-sm 2xl:text-xl leading-relaxed max-w-sm 2xl:max-w-3xl">
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
