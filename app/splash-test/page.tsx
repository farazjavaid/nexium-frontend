"use client";

import SplashScreen from "@/components/SplashScreen";

export default function SplashTestPage() {
  function resetSplash() {
    sessionStorage.removeItem("splashSeen");
    window.location.reload();
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gray-100">
      <SplashScreen />
      <h1 className="text-2xl font-bold text-gray-800">Splash Screen Test Page</h1>
      <p className="text-gray-500 text-sm">Splash sirf pehli baar dikhe ga. Dobara test karne ke liye neeche button click karo.</p>
      <button
        onClick={resetSplash}
        className="px-6 py-3 bg-[#267275] text-white rounded-lg hover:bg-[#1e5a5c] transition-colors cursor-pointer"
      >
        Reset & Replay Splash
      </button>
    </div>
  );
}
