"use client";

import Link from "next/link";

interface TeamCTASectionProps {
  topText?: string;
  heading: string;
  buttonText?: string;
  buttonLink?: string;
  onButtonClick?: () => void;
}

export default function TeamCTASection({
  topText = "Proudly based in Melbourne",
  heading,
  buttonText = "Get a Quote",
  buttonLink,
  onButtonClick,
}: TeamCTASectionProps) {
  const handleClick = () => {
    if (onButtonClick) {
      onButtonClick();
    } else if (buttonLink) {
      window.location.href = buttonLink;
    }
  };

  return (
    <section className="w-full py-16 lg:py-20 px-4 lg:px-20 bg-[#fff]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between bg-[#267275] gap-8 px-8 lg:px-16 py-12 lg:py-16">
          <div className="text-center lg:text-left w-full lg:w-auto">
            {topText && (
              <p className="text-white font-montserrat text-xl mb-4">{topText}</p>
            )}
            <h2 className="text-xl sm:text-2xl lg:text-[48px] leading-tight lg:leading-[53px] text-white font-montserrat font-normal uppercase max-w-3xl lg:max-w-[640px]">
              {heading}
            </h2>
          </div>
          {buttonLink ? (
            <Link
              href={buttonLink}
              className="w-full lg:w-auto bg-white text-[#267275] px-8 py-4 text-[16px] tracking-[1.44px] uppercase font-montserrat font-bold hover:bg-gray-100 transition-colors whitespace-nowrap text-center inline-block"
            >
              {buttonText}
            </Link>
          ) : (
            <button
              onClick={handleClick}
              className="w-full lg:w-auto bg-white text-[#267275] px-8 py-4 text-[16px] tracking-[1.44px] uppercase font-montserrat font-bold hover:bg-gray-100 transition-colors whitespace-nowrap"
            >
              {buttonText}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
