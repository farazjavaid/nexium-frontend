"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Slide5Decorations() {
  return (
    <>
      <div className="absolute right-[400px] top-[0px] w-[300px] h-[160px]">
        <Image
          src="/images/landing/Group 329.svg"
          alt="Group 329 decoration"
          fill
          className="object-contain"
        />
      </div>

      <div className="absolute right-[50px] bottom-[50px] w-[200px] h-[200px]">
        <Image
          src="/images/landing/Group 1.svg"
          alt="Group decoration"
          fill
          className="object-contain"
        />
      </div>

      <motion.div
        className="absolute left-1/2 -translate-x-1/2 top-[561px] w-[173px] h-[173px]"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.6, 0.8, 0.6]
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(53, 54, 56, 0.15) 0%, rgba(53, 54, 56, 0) 70%)"
          }}
        />
      </motion.div>
    </>
  );
}
