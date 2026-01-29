"use client";

import Image from "next/image";

interface HeroSectionProps {
  heading: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
  onButtonClick?: () => void;
  showButton?: boolean;
  backgroundImage?: string;
  showBackgroundImage?: boolean;
}

export default function HeroSection({
  heading,
  description,
  buttonText = "GET A QUOTE",
  buttonLink,
  onButtonClick,
  showButton = true,
  backgroundImage = "/images/about-us/polygon-3.svg",
  showBackgroundImage = true,
}: HeroSectionProps) {
  const handleClick = () => {
    if (onButtonClick) {
      onButtonClick();
    } else if (buttonLink) {
      window.location.href = buttonLink;
    }
  };

  return (
    <section className="w-full pt-48 pb-30 lg:pt-54 px-6 lg:px-20 bg-white relative overflow-hidden">
      {showBackgroundImage && (
        <div className="absolute left-[-5%] lg:left-[13%] top-[15%] w-[300px] h-[300px] lg:w-[474px] lg:h-[474px] pointer-events-none z-0 rotate-[17deg]">
          <Image
            alt="Background"
            src={backgroundImage}
            fill
            className="object-contain opacity-40"
          />
        </div>
      )}

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-9">
            <h1 className="text-[48px] sm:text-[60px] lg:text-[78px] xl:text-[88px] leading-[1.05] tracking-tight text-[#353638] font-light">
              {heading}
            </h1>
          </div>
          <div className="lg:col-span-8">
            <p className="text-[#727272] text-[16px] lg:text-[17px] leading-[1.75] font-normal max-w-[750px] mb-0">
              {description}
            </p>
          </div>

          {showButton && (
            <div className="lg:col-span-4 flex lg:justify-start lg:items-start lg:pt-2">
              <button
                onClick={handleClick}
                className="bg-[#267275] hover:bg-[#1f5e61] text-white px-12 py-4 text-[14px] lg:text-[16px] tracking-[1.6px] uppercase font-extrabold transition-all duration-200 shadow-sm hover:shadow-md whitespace-nowrap"
              >
                {buttonText}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
