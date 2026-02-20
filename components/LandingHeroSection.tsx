"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import AnimatedTriangles from "./AnimatedTriangles";
import AnimatedTrianglesSlide3 from "./AnimatedTrianglesSlide3";
import Slide4Decorations from "./Slide4Decorations";
import Slide5Decorations from "./Slide5Decorations";

interface LandingHeroSectionProps {
  heading: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
  onButtonClick?: () => void;
  showButton?: boolean;
  onSlideChange?: (slide: number) => void;
}

export default function LandingHeroSection({
  heading,
  description,
  buttonText = "GET A QUOTE",
  buttonLink,
  onButtonClick,
  showButton = true,
  onSlideChange,
}: LandingHeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const onSlideChangeRef = useRef(onSlideChange);

  useEffect(() => {
    onSlideChangeRef.current = onSlideChange;
  }, [onSlideChange]);

  useEffect(() => {
    onSlideChangeRef.current?.(currentSlide);
  }, [currentSlide]);

  useEffect(() => {
    const slideDurations = [
      4000,
      600,
      4000,
      600,
      4000,
      2000,
    ];

    const timeout = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % 6);
    }, slideDurations[currentSlide]);

    return () => clearTimeout(timeout);
  }, [currentSlide]);

  return (
    <motion.section
      className="w-full min-h-screen flex items-center relative overflow-hidden"
      animate={{
        backgroundColor:
          currentSlide === 2 || currentSlide === 3 ? "#267275" : // Teal
          currentSlide === 4 || currentSlide === 5 ? "#f3f3f3" : // Light gray
          "#FFFFFF" // White
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <motion.div
        animate={{ opacity: currentSlide === 0 ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <AnimatedTriangles />
      </motion.div>

      <motion.div
        animate={{ opacity: (currentSlide === 2 || currentSlide === 3) ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <AnimatedTrianglesSlide3 />
      </motion.div>

      <motion.div
        animate={{
          opacity: currentSlide === 3 ? 1 : 0,
          scale: currentSlide === 3 ? 1.2 : 0.5
        }}
        transition={{
          duration: 1,
          ease: [0.68, -0.55, 0.27, 1.55]
        }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] pointer-events-none z-10"
      >
        <div
          className="w-full h-full rounded-full bg-white"
          style={{
            filter: "blur(100px)"
          }}
        />
      </motion.div>

      <motion.div
        animate={{
          x: currentSlide === 0 ? 0 : -745,
          opacity: currentSlide === 0 ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute left-1/2 top-[189px] -translate-x-1/2 text-[75px] text-[#353638] uppercase whitespace-nowrap font-montserrat font-normal"
      >
        <div className="absolute left-[calc(50%-309px)] top-[49px] flex flex-col justify-center">
          <p className="leading-[98px] tracking-tight">Digital Solutions</p>
        </div>

        <div className="absolute left-[calc(50%-408px)] top-[149px] flex flex-col justify-center">
          <p className="leading-[98px] tracking-tight">that drive</p>
        </div>

        <div className="absolute left-[calc(50%-209px)] top-[245px] flex flex-col justify-center">
          <p className="leading-[98px] tracking-tight">business</p>
        </div>
      </motion.div>

      <motion.div
        animate={{
          x: currentSlide === 2 ? 0 : (currentSlide === 0 || currentSlide === 1 ? 745 : -745),
          opacity: currentSlide === 2 ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[75px] text-white uppercase font-montserrat font-normal"
      >
        <div className="flex flex-col items-center gap-2">
          <p className="leading-[98px] tracking-tight whitespace-nowrap text-start w-full">Your Next</p>
          <p className="leading-[98px] tracking-tight whitespace-nowrap text-center">Premium</p>
          <p className="leading-[98px] tracking-tight whitespace-nowrap text-center">Software Solution</p>
        </div>
      </motion.div>

      <motion.div
        animate={{
          opacity: currentSlide === 4 ? 1 : 0
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut"
        }}
      >
        <Slide4Decorations />
      </motion.div>

      <motion.div
        animate={{
          x: currentSlide === 4 ? 0 : -745,
          opacity: currentSlide === 4 ? 1 : 0
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut"
        }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#353638] uppercase font-montserrat font-normal"
      >
        <div className="flex flex-col items-center text-center">
          <p className="text-[75px] leading-[98px] tracking-tight text-start w-full pl-24">We deliver</p>

          <p className="text-[75px] leading-[98px] tracking-tight">premium websites</p>

          <p className="text-[75px] leading-[98px] tracking-tight text-end w-full mr-[-120px]">& digital systems</p>
        </div>
      </motion.div>

      <motion.div
        animate={{
          opacity: currentSlide === 5 ? 1 : 0,
          scale: currentSlide === 5 ? 1 : 0.95
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut"
        }}
      >
        <Slide5Decorations />
      </motion.div>
    </motion.section>
  );
}
