"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Slide4Decorations() {
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

      <motion.div 
          animate={{
            rotate: 360
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
      className="absolute right-[400px] top-[0px] w-[300px] h-[290px]">
        <Image
          src="/images/landing/Polygon 1.svg"
          alt="Group 329 decoration"
          fill
          className="object-contain"
        />
      </motion.div>

      <div className="absolute left-[66px] bottom-0 w-[800px] h-[400px] overflow-hidden">
        <motion.div 
          animate={{
            rotate: 360
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute left-0 -bottom-[400px] w-[800px] h-[800px]"
        >
          <Image
            src="/images/landing/Vector.svg"
            alt="Group 14 decoration"
            fill
            className="object-contain"
          />
        </motion.div>
      </div>

      <div className="absolute right-[50px] bottom-[50px] w-[200px] h-[200px]">
        <Image
          src="/images/landing/Group 1.svg"
          alt="Group decoration"
          fill
          className="object-contain"
        />
      </div>
    </>
  );
}