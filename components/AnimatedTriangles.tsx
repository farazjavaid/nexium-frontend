"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AnimatedTriangles() {
  return (
    <div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      style={{
        width: "876.875px",
        height: "888.666px",
      }}
    >
      <motion.div
        initial={{ scale: 0.5 }}
        animate={{ scale: 2.0 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute flex"
        style={{ inset: "78.26% 22.13% 11.12% 75.04%" }}
      >
        <div className="flex-none size-[98.922px]" style={{ transform: "rotate(117.87deg)" }}>
          <div className="relative size-full">
            <Image
              alt=""
              src="/images/landing/Polygon 2.svg"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ scale: 0.5 }}
        animate={{ scale: 2.0 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
        className="absolute flex"
        style={{ inset: "0 70.02% 59.16% 0.29%" }}
      >
        <div className="flex-none size-[215.33px]" style={{ transform: "rotate(-103.74deg)" }}>
          <div className="relative size-full">
            <Image
              alt=""
              src="/images/about-us/polygon-3.svg"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 0.5 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute flex"
        style={{ inset: "22.55% 21.51% 0 0" }}
      >
        <div className="flex-none size-[650.489px] h-[500px]" style={{ transform: "rotate(17.13deg)" }}>
          <div className="relative size-full">
            <Image
              alt=""
              src="/images/about-us/polygon-3.svg"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ scale: 0.5 }}
        animate={{ scale: 2.0 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
        className="absolute flex"
        style={{ inset: "-50px 0 52.08% 57%" }}
      >
        <div className="flex-none size-[335.08px]" style={{ transform: "rotate(180.13deg)" }}>
          <div className="relative size-full">
            <Image
              alt=""
              src="/images/landing/Polygon 2.svg"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
