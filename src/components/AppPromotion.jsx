import React from 'react';
import MockupBg from '../assets/icons/Mockup dashboard 1.png';
import AppHand from '../assets/icons/Appdl.png';
import AppStoreIcon from '../assets/icons/Apple.png';
import PlayStoreIcon from '../assets/icons/Playstore.png';

const AppPromotion = () => {
  return (
    <section 
      className="relative w-full py-10 md:py-16 2xl:py-20 px-6 md:px-12 lg:px-20 2xl:px-50 overflow-hidden bg-[#EFE9E7]"
    >
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none" 
        style={{ 
          backgroundImage: `url("${MockupBg}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20">
        {/* Left Side - Image */}
        <div className="w-full flex justify-center lg:justify-start items-end self-end ">
          <div className="relative w-full">
            <img 
              src={AppHand} 
              alt="GarageSaarthi App Mockup" 
              className="w-full h-full object-contain lg:-mb-20"
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="w-full flex flex-col items-start text-center md:text-left">
          <h2 className="text-xl md:text-3xl lg:text-2xl xl:text-4xl 2xl:text-[44px] font-bold text-[#111827] mb-5">
            Manage Your Garage Smarter,{" "}
            <span className="relative inline-block mt-2">
              Faster & Better
              <span className="absolute -bottom-1 left-0 w-full h-1 rounded-full bg-[linear-gradient(90deg,#B02E0C_0%,#FF643C_100%)]"></span>
            </span>
          </h2>
          
          <p className="text-[#4B5563] text-sm md:text-lg mb-7 md:mb-10 max-w-3xl leading-relaxed font-medium">
            GarageSaarthi helps you track vehicles, manage jobs, handle billing, and grow your garage-all from one powerful platform.
          </p>

          <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start w-full">
            {/* App Store Button */}
            {/* <a 
              href="https://apps.apple.com/in/app/garagesaarthi/id6475635390" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-black text-white px-5 py-2 md:py-3 rounded-full transition-all hover:-translate-y-1 active:scale-95 group"
            >
              <div className="p-1">
                <img src={AppStoreIcon} alt="" className="w-8 h-8 object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-normal opacity-70 leading-tight">Download on the</span>
                <span className="text-sm md:text-[20px] font-semibold leading-tight">App Store</span>
              </div>
            </a> */}

            {/* Play Store Button */}
            <a 
              href="https://play.google.com/store/apps/details?id=com.th.garagesaarthi&hl=en_IN" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-black text-white px-5 py-2 md:py-3 rounded-full transition-all hover:-translate-y-1 active:scale-95 group"
            >
              <div className="p-1">
                <img src={PlayStoreIcon} alt="" className="w-8 h-8 object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-normal opacity-70 leading-tight">Download on the</span>
                <span className="text-sm md:text-[20px] font-semibold leading-tight">Play Store</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPromotion;
