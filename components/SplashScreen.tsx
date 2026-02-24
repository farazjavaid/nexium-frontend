"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function SplashScreen() {
  const [visible, setVisible] = useState(false);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const seen = sessionStorage.getItem("splashSeen");
    if (seen) return;

    setVisible(true);
    sessionStorage.setItem("splashSeen", "1");

    const timers = [
      setTimeout(() => setPhase(1), 50),
      setTimeout(() => setPhase(2), 2100),
      setTimeout(() => setPhase(3), 2900),
      setTimeout(() => setPhase(4), 5000),
      setTimeout(() => setPhase(5), 5750),
      setTimeout(() => setPhase(6), 8500),
      setTimeout(() => setVisible(false), 9300),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  if (!visible) return null;

  const rotation = phase <= 1 ? phase * 123 : 123;
  const scale = phase === 2 ? 0.05 : 1;
  const flipX = phase === 2 ? 180 : 0;
  const triangleOpacity = phase >= 2 ? 0 : 1;

  const triangleTransition =
    phase === 1
      ? "transform 2000ms cubic-bezier(0.36, 0, 0.66, -0.56)"
      : phase === 2
      ? "transform 700ms cubic-bezier(0.4, 0, 1, 1), opacity 600ms ease-in"
      : "none";

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
      style={{
        backgroundColor: phase >= 3 ? "#ffffff" : "#267275",
        transition: phase >= 3 && phase < 4 ? "background-color 600ms ease-in-out" : "none",
        pointerEvents: "none",
      }}
    >
      <style>{`
        @keyframes logoPopIn {
          0%   { transform: scale(0.1);  opacity: 0; }
          50%  { transform: scale(1.3);  opacity: 1; }
          75%  { transform: scale(0.95); opacity: 1; }
          100% { transform: scale(1);    opacity: 1; }
        }
        @keyframes springUp {
          0%   { transform: translateY(400px); opacity: 0;
                 animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }
          8%   { opacity: 1;
                 animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }
          59%  { transform: translateY(-320px); opacity: 1;
                 animation-timing-function: ease-out; }
          75%  { transform: translateY(120px);  animation-timing-function: ease-out; }
          87%  { transform: translateY(-30px);  animation-timing-function: ease-out; }
          94%  { transform: translateY(15px);   animation-timing-function: ease-out; }
          100% { transform: translateY(0px);    opacity: 1; }
        }
      `}</style>

      <Image
        src="/images/about-us/logo.png"
        alt="Nexium"
        width={220}
        height={61}
        priority
        style={{
          position: "absolute",
          opacity: phase >= 3 ? 1 : 0,
          animation: phase >= 3 ? "logoPopIn 900ms ease-out forwards" : "none",
          zIndex: 1,
        }}
      />

      <div
        style={{
          perspective: "1200px",
          transform: `scale(${scale})`,
          transition: phase === 2 ? "transform 700ms cubic-bezier(0.4, 0, 1, 1)" : "none",
          zIndex: 1,
        }}
      >
        <svg
          width="80"
          height="96"
          viewBox="0 0 80 96"
          style={{
            transform: `rotate(${rotation}deg) rotateX(${flipX}deg)`,
            opacity: triangleOpacity,
            transition: triangleTransition,
            transformBox: "fill-box",
            transformOrigin: "center",
          }}
        >
          <polygon points="40,0 80,72 0,72" fill="white" />
        </svg>
      </div>

      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#267275",
          transform: phase >= 4 ? "translateY(0%)" : "translateY(100%)",
          transition: phase >= 4 ? "transform 700ms cubic-bezier(0.4, 0, 0.2, 1)" : "none",
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            fontSize: "22px",
            fontFamily: "var(--font-montserrat), sans-serif",
            fontWeight: 600,
            color: "white",
            whiteSpace: "nowrap",
            letterSpacing: "0.02em",
            opacity: phase >= 5 ? 1 : 0,
            animation: phase >= 5 ? "springUp 1700ms linear forwards" : "none",
          }}
        >
          Your Next Premium Software Solution
        </p>
      </div>

      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#ffffff",
          transform: phase >= 6 ? "translateY(0%)" : "translateY(100%)",
          transition: phase >= 6 ? "transform 700ms cubic-bezier(0.4, 0, 0.2, 1)" : "none",
          zIndex: 20,
        }}
      />
    </div>
  );
}
