"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AnimatedTrianglesSlide3() {
  return (
    <div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      style={{
        width: "1920px",
        height: "1080px",
      }}
    >
      <motion.div
        initial={{ scale: 0.5 }}
        animate={{ scale: 2.0 }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute flex"
        style={{ left: "20%", top: "15%", opacity: 0.2 }}
      >
        <div className="flex-none size-[80px]" style={{ transform: "rotate(45deg)" }}>
          <div className="relative size-full">
            <Image
              alt=""
              src="/images/landing/polygon-white-1.svg"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ scale: 1.0 }}
        animate={{ scale: 0.5 }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute flex"
        style={{ left: "40%", top: "15%" }}
      >
        <div className="flex-none size-[90px]" style={{ transform: "rotate(-20deg)" }}>
          <div className="relative size-full">
            <Image
              alt=""
              src="/images/landing/polygon-white-2.svg"
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
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
        className="absolute flex"
        style={{ left: "60%", top: "15%", opacity: 0.2 }}
      >
        <div className="flex-none size-[85px]" style={{ transform: "rotate(120deg)" }}>
          <div className="relative size-full">
            <Image
              alt=""
              src="/images/landing/polygon-white-1.svg"
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
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute flex"
        style={{ left: "80%", top: "15%", opacity: 0.2 }}
      >
        <div className="flex-none size-[75px]" style={{ transform: "rotate(-60deg)" }}>
          <div className="relative size-full">
            <Image
              alt=""
              src="/images/landing/polygon-white-1.svg"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ scale: 1.0 }}
        animate={{ scale: 0.5 }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute flex"
        style={{ left: "20%", top: "45%" }}
      >
        <div className="flex-none size-[95px]" style={{ transform: "rotate(30deg)" }}>
          <div className="relative size-full">
            <Image
              alt=""
              src="/images/landing/polygon-white-2.svg"
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
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
        className="absolute flex"
        style={{ left: "40%", top: "45%", opacity: 0.2 }}
      >
        <div className="flex-none size-[90px]" style={{ transform: "rotate(90deg)" }}>
          <div className="relative size-full">
            <Image
              alt=""
              src="/images/landing/polygon-white-1.svg"
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
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute flex"
        style={{ left: "60%", top: "45%", opacity: 0.2 }}
      >
        <div className="flex-none size-[70px]" style={{ transform: "rotate(180deg)" }}>
          <div className="relative size-full">
            <Image
              alt=""
              src="/images/landing/polygon-white-1.svg"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ scale: 1.0 }}
        animate={{ scale: 0.5 }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute flex"
        style={{ left: "80%", top: "45%" }}
      >
        <div className="flex-none size-[100px]" style={{ transform: "rotate(-45deg)" }}>
          <div className="relative size-full">
            <Image
              alt=""
              src="/images/landing/polygon-white-2.svg"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ scale: 1.0 }}
        animate={{ scale: 0.5 }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
        className="absolute flex"
        style={{ left: "20%", top: "75%", opacity: 0.2 }}
      >
        <div className="flex-none size-[105px]" style={{ transform: "rotate(15deg)" }}>
          <div className="relative size-full">
            <Image
              alt=""
              src="/images/landing/polygon-white-2.svg"
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
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute flex"
        style={{ left: "40%", top: "75%" }}
      >
        <div className="flex-none size-[75px]" style={{ transform: "rotate(-90deg)" }}>
          <div className="relative size-full">
            <Image
              alt=""
              src="/images/landing/polygon-white-1.svg"
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
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
        className="absolute flex"
        style={{ left: "60%", top: "75%" }}
      >
        <div className="flex-none size-[95px]" style={{ transform: "rotate(135deg)" }}>
          <div className="relative size-full">
            <Image
              alt=""
              src="/images/landing/polygon-white-1.svg"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ scale: 1.0 }}
        animate={{ scale: 0.5 }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute flex"
        style={{ left: "80%", top: "75%", opacity: 0.2 }}
      >
        <div className="flex-none size-[85px]" style={{ transform: "rotate(-120deg)" }}>
          <div className="relative size-full">
            <Image
              alt=""
              src="/images/landing/polygon-white-2.svg"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
