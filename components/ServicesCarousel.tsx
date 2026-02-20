"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

interface ServiceItem {
  title: string;
  description: string;
  items: string[];
}

interface ServicesCarouselProps {
  services: ServiceItem[];
  title?: string;
  backgroundColor?: string;
}

const TWEEN_FACTOR = 4;

export default function ServicesCarousel({
  services,
  title,
  backgroundColor = "#eee",
}: ServicesCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: "trimSnaps",
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [tweenValues, setTweenValues] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onScroll = useCallback(() => {
    if (!emblaApi) return;

    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();

    const styles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
      let diffToTarget = scrollSnap - scrollProgress;

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = loopItem.target();
          if (index === loopItem.index && target !== 0) {
            const sign = Math.sign(target);
            if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
            if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
          }
        });
      }
      const tweenValue = 1 - Math.abs(diffToTarget * TWEEN_FACTOR);
      return Math.max(0, Math.min(1, tweenValue));
    });

    setTweenValues(styles);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onScroll();
    onSelect();
    emblaApi.on("scroll", onScroll);
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onScroll);

    return () => {
      emblaApi.off("scroll", onScroll);
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onScroll);
    };
  }, [emblaApi, onScroll, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section
      className="w-full py-16 lg:py-24 overflow-visible"
      style={{ backgroundColor }}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-20">
        {title && (
          <h2 className="text-[48px] lg:text-[78px] leading-[80px] text-[#252525] font-montserrat font-light uppercase mb-12 lg:mb-20">
            {title}
          </h2>
        )}

        <div className="relative px-12 lg:px-20 pb-16">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex items-end min-h-[550px]">
              {services.map((service, index) => {
                const tweenValue = tweenValues[index] || 0;
                const scale = 0.9 + tweenValue * 0.15;
                const opacity = 0.7 + tweenValue * 0.3;
                const translateY = (1 - tweenValue) * 0;

                return (
                  <div
                    key={index}
                    className="flex-[0_0_90%] md:flex-[0_0_45%] lg:flex-[0_0_33.33%] px-2 lg:px-4"
                    style={{
                      transform: `scale(${scale}) translateY(-${tweenValue * 40}px)`,
                      opacity,
                      transition: "all 0.5s ease-in-out",
                    }}
                  >
                    <div
                      className={`bg-white p-8 lg:p-12 cursor-pointer min-h-[430px] transition-shadow duration-500 ${
                        tweenValue > 0.9
                          ? "shadow-[0px_12px_60px_0px_rgba(0,0,0,0.25)]"
                          : "shadow-[0px_6px_45px_0px_rgba(0,0,0,0.18)] hover:shadow-[0px_8px_50px_0px_rgba(0,0,0,0.22)]"
                      }`}
                      onClick={() => scrollTo(index)}
                    >
                      <h3 className="text-[#252525] text-[18px] font-montserrat font-bold uppercase mb-6 tracking-[-0.36px] leading-[36px]">
                        {service.title}
                      </h3>

                      <p className="text-[#727272] text-[17px] leading-[26px] mb-6">
                        {service.description}
                      </p>

                      <p className="text-[#727272] text-[17px] leading-[26px] mb-4">
                        Services include:
                      </p>

                      <ul className="space-y-2">
                        {service.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="text-[#267275] mt-1.5 flex-shrink-0 text-xs">
                              ▸
                            </span>
                            <span className="text-[#727272] text-[17px] leading-[28px]">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 bg-white hover:bg-[#267275] text-[#353638] hover:text-white border border-[#ddd] hover:border-[#267275] rounded flex items-center justify-center transition-all duration-300 shadow-md z-20"
            aria-label="Previous slide"
          >
            <svg
              className="w-5 h-5 lg:w-6 lg:h-6"
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
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 bg-white hover:bg-[#267275] text-[#353638] hover:text-white border border-[#ddd] hover:border-[#267275] rounded flex items-center justify-center transition-all duration-300 shadow-md z-20"
            aria-label="Next slide"
          >
            <svg
              className="w-5 h-5 lg:w-6 lg:h-6"
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

          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex justify-center gap-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  selectedIndex === index
                    ? "bg-[#267275] w-8"
                    : "bg-[#d1d1d1] w-2.5 hover:bg-[#267275]/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
