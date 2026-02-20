"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

interface ServiceItem {
  title: string;
  description: string;
  items: string[];
}

interface WhatWeBuildSectionProps {
  services: ServiceItem[];
}

export default function WhatWeBuildSection({ services }: WhatWeBuildSectionProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: "trimSnaps",
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev' | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi && !isAnimating) {
      setDirection('prev');
      setIsAnimating(true);
      emblaApi.scrollPrev();
      setTimeout(() => {
        setIsAnimating(false);
        setDirection(null);
      }, 500);
    }
  }, [emblaApi, isAnimating]);

  const scrollNext = useCallback(() => {
    if (emblaApi && !isAnimating) {
      setDirection('next');
      setIsAnimating(true);
      emblaApi.scrollNext();
      setTimeout(() => {
        setIsAnimating(false);
        setDirection(null);
      }, 500);
    }
  }, [emblaApi, isAnimating]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const getVisibleIndices = () => {
    const prevIndex = (selectedIndex - 1 + services.length) % services.length;
    const nextIndex = (selectedIndex + 1) % services.length;
    return { prevIndex, centerIndex: selectedIndex, nextIndex };
  };

  const { prevIndex, centerIndex, nextIndex } = getVisibleIndices();

  const getTranslateX = (position: 'left' | 'center' | 'right') => {
    if (!isAnimating || !direction) return 0;

    const slideDistance = 20;

    if (direction === 'next') {
      return -slideDistance;
    } else {
      return slideDistance;
    }
  };

  return (
    <section className="w-full py-16 lg:py-24 bg-[#eee]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[48px] lg:text-[78px] leading-[80px] text-[#252525] font-montserrat font-light uppercase mb-12 lg:mb-20">
          What we<br />build
        </h2>
      </div>
      <div className="max-w-7xl mx-auto px-4 lg:px-20">
        <div className="relative">
          <div className="overflow-hidden opacity-0 h-0" ref={emblaRef}>
            <div className="flex">
              {services.map((_, index) => (
                <div key={index} className="flex-[0_0_100%]"></div>
              ))}
            </div>
          </div>

          <div className="relative flex items-center justify-center min-h-[520px]">
            <div
              className="absolute transition-all duration-500 ease-in-out"
              style={{
                left: "0px",
                zIndex: 1,
                opacity: 0.7,
                transform: `scale(0.9)`,
              }}
            >
              <div
                className="bg-white shadow-[0px_6px_45px_0px_rgba(0,0,0,0.18)] w-[396px] p-[36px] py-[40px] transition-all duration-500"
                style={{ minHeight: "430px" }}
              >
                <h3 className="text-[#252525] text-[18px] font-montserrat font-bold uppercase mb-2 tracking-[-0.36px] leading-[36px]">
                  {services[prevIndex].title}
                </h3>

                <p className="text-[#727272] text-[17px] leading-[26px] mb-6">
                  {services[prevIndex].description}
                </p>

                <p className="text-[#727272] text-[17px] leading-[26px] mb-4">
                  Services include:
                </p>

                <ul className="space-y-0 text-[#727272] text-[17px] leading-[20px] list-none">
                  {services[prevIndex].items.map((item, idx) => (
                    <li key={idx} className="flex items-start pb-2 last:pb-0">
                      <span className="text-[#267275] mr-2 flex-shrink-0">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div
              className="relative transition-all duration-500 ease-in-out"
              style={{
                zIndex: 10,
                opacity: 1,
                transform: `scale(1.05) translateX(${getTranslateX('center')}px)`,
              }}
            >
              <div
                className="bg-white shadow-[0px_6px_45px_0px_rgba(0,0,0,0.18)] w-[396px] p-[40px] py-[40px] transition-all duration-500"
                style={{ minHeight: "480px" }}
              >
                <h3 className="text-[#252525] text-[18px] font-montserrat font-bold uppercase mb-2 tracking-[-0.36px] leading-[36px]">
                  {services[centerIndex].title}
                </h3>

                <p className="text-[#727272] text-[17px] leading-[26px] mb-6">
                  {services[centerIndex].description}
                </p>

                <p className="text-[#727272] text-[17px] leading-[26px] mb-4">
                  Services include:
                </p>

                <ul className="space-y-0 text-[#727272] text-[17px] leading-[20px] list-none">
                  {services[centerIndex].items.map((item, idx) => (
                    <li key={idx} className="flex items-start pb-2 last:pb-0">
                      <span className="text-[#267275] mr-2 flex-shrink-0">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div
              className="absolute transition-all duration-500 ease-in-out"
              style={{
                right: "0px",
                zIndex: 1,
                opacity: 0.7,
                transform: `scale(0.9)`,
              }}
            >
              <div
                className="bg-white shadow-[0px_6px_45px_0px_rgba(0,0,0,0.18)] w-[396px] p-[36px] py-[40px] transition-all duration-500"
                style={{ minHeight: "430px" }}
              >
                <h3 className="text-[#252525] text-[18px] font-montserrat font-bold uppercase mb-2 tracking-[-0.36px] leading-[36px]">
                  {services[nextIndex].title}
                </h3>

                <p className="text-[#727272] text-[17px] leading-[26px] mb-6">
                  {services[nextIndex].description}
                </p>

                <p className="text-[#727272] text-[17px] leading-[26px] mb-4">
                  Services include:
                </p>

                <ul className="space-y-0 text-[#727272] text-[17px] leading-[20px] list-none">
                  {services[nextIndex].items.map((item, idx) => (
                    <li key={idx} className="flex items-start pb-2 last:pb-0">
                      <span className="text-[#267275] mr-2 flex-shrink-0">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 w-12 h-12 bg-white hover:bg-[#267275] text-[#353638] hover:text-white border border-[#ddd] hover:border-[#267275] rounded flex items-center justify-center transition-all duration-300 shadow-md z-20 focus:outline-none focus-visible:outline-none"
            aria-label="Previous slide"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 w-12 h-12 bg-white hover:bg-[#267275] text-[#353638] hover:text-white border border-[#ddd] hover:border-[#267275] rounded flex items-center justify-center transition-all duration-300 shadow-md z-20 focus:outline-none focus-visible:outline-none"
            aria-label="Next slide"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
