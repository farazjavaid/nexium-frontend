"use client";

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
          <div>
            {topText && (
              <p className="text-white font-montserrat text-xl mb-4">{topText}</p>
            )}
            <h2 className="text-3xl lg:text-5xl text-white font-montserrat font-normal uppercase max-w-3xl">
              {heading}
            </h2>
          </div>
          <button
            onClick={handleClick}
            className="bg-white text-[#267275] px-8 py-4 text-sm tracking-widest uppercase font-montserrat font-bold hover:bg-gray-100 transition-colors whitespace-nowrap"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
}
