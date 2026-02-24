"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// Phase 0: Triangle UP (0°), teal bg
// Phase 1: Triangle rotates 123°              — 2000ms ease-in-back
// Phase 2: Triangle flips + disappears        — 700ms
// Phase 3: BG teal → white, logo pop-in       — 900ms
// Phase 4: Teal curtain BOTTOM → TOP          — 700ms
// Phase 5: Text springs up on teal            — 1700ms
// Phase 6: White curtain BOTTOM → TOP (exit)  — 700ms

type Phase = 0 | 1 | 2 | 3 | 4 | 5 | 6;

const EASE_IN_BACK   = "cubic-bezier(0.36, 0, 0.66, -0.56)";
const CURTAIN_EASING = "cubic-bezier(0.4, 0, 0.2, 1)";

export default function SplashScreen() {
  const [visible, setVisible] = useState(false);
  const [phase, setPhase]     = useState<Phase>(0);

  useEffect(() => {
    const alreadySeen = sessionStorage.getItem("splashSeen");
    if (alreadySeen) return;

    setVisible(true);
    sessionStorage.setItem("splashSeen", "1");

    const t1 = setTimeout(() => setPhase(1), 50);
    const t2 = setTimeout(() => setPhase(2), 2100);
    const t3 = setTimeout(() => setPhase(3), 2900);
    const t4 = setTimeout(() => setPhase(4), 5000);   // teal curtain up
    const t5 = setTimeout(() => setPhase(5), 5750);   // text springs
    const t6 = setTimeout(() => setPhase(6), 8500);   // white curtain up (after text 1700ms + ~1s view)

    const hideTimer = setTimeout(() => setVisible(false), 9300); // after white curtain done

    return () => {
      [t1, t2, t3, t4, t5, t6, hideTimer].forEach(clearTimeout);
    };
  }, []);

  if (!visible) return null;

  const rotation        = phase <= 1 ? phase * 123 : 123;
  const scale           = phase === 2 ? 0.05 : 1;
  const flipX           = phase === 2 ? 180 : 0;
  const triangleOpacity = phase >= 2 ? 0 : 1;

  const triangleTransition = phase === 1
    ? `transform 2000ms ${EASE_IN_BACK}`
    : phase === 2
    ? `transform 700ms cubic-bezier(0.4, 0, 1, 1), opacity 600ms ease-in`
    : "none";

  const bgColor     = phase >= 3 ? "#ffffff" : "#267275";
  const logoOpacity = phase >= 3 ? 1 : 0;
  const tealCurtainY  = phase >= 4 ? "translateY(0%)"   : "translateY(100%)";
  const whiteCurtainY = phase >= 6 ? "translateY(0%)"   : "translateY(100%)";

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
      style={{
        backgroundColor: bgColor,
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
          0%   { transform: translateY(400px);  opacity: 0;
                 animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }
          8%   { opacity: 1;
                 animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }
          59%  { transform: translateY(-320px); opacity: 1;
                 animation-timing-function: ease-out; }
          75%  { transform: translateY(120px);
                 animation-timing-function: ease-out; }
          87%  { transform: translateY(-30px);
                 animation-timing-function: ease-out; }
          94%  { transform: translateY(15px);
                 animation-timing-function: ease-out; }
          100% { transform: translateY(0px);    opacity: 1; }
        }
      `}</style>

      {/* Colored logo — white bg phase 3 */}
      <Image
        src="/images/about-us/logo.png"
        alt="Nexium"
        width={220}
        height={61}
        priority
        style={{
          position: "absolute",
          opacity: logoOpacity,
          animation: phase >= 3 ? "logoPopIn 900ms ease-out forwards" : "none",
          zIndex: 1,
        }}
      />

      {/* Triangle — phases 0–2 */}
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

      {/* Teal curtain — neeche se upar, phase 4 */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#267275",
          transform: tealCurtainY,
          transition: phase >= 4 ? `transform 700ms ${CURTAIN_EASING}` : "none",
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Text springs up on teal — phase 5 */}
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

      {/* White curtain — neeche se upar (exit), phase 6 */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#ffffff",
          transform: whiteCurtainY,
          transition: phase >= 6 ? `transform 700ms ${CURTAIN_EASING}` : "none",
          zIndex: 20,
        }}
      />
    </div>
  );
}
