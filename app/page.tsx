"use client";

import { useState } from "react";
import Header from "@/components/Header";
import LandingHeroSection from "@/components/LandingHeroSection";
import ClientLogosSection from "@/components/ClientLogosSection";
import OutgrownSection from "@/components/OutgrownSection";
import PremiumSolutionsSection from "@/components/PremiumSolutionsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ContactFormSection from "@/components/ContactFormSection";
import TestimonialSection from "@/components/TestimonialSection";
import TeamCTASection from "@/components/TeamCTASection";
import Footer from "@/components/Footer";

export default function Home() {
  const [heroSlide, setHeroSlide] = useState(0);
  const clientLogos = [
    "/images/about-us/client-logo-1.png",
    "/images/about-us/client-logo-2.png",
    "/images/about-us/client-logo-3.png",
    "/images/about-us/client-logo-5.png",
    "/images/about-us/client-logo-6.png",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header
        transparent
        whiteLogo={heroSlide === 2 || heroSlide === 3}
        whiteMenu={heroSlide === 2 || heroSlide === 3}
      />

      <LandingHeroSection
        heading="DIGITAL SOLUTIONS THAT DRIVE BUSINESS"
        description="We're a Melbourne-based team of full-stack developers specialising in Shopify, WordPress, Laravel, and React.js. Whether you're scaling fast, replatforming, or building from scratch - we turn complex requirements into high-performing digital platforms."
        buttonText="GET A QUOTE"
        buttonLink="/contact-us"
        showButton={true}
        onSlideChange={setHeroSlide}
      />

      <ClientLogosSection
        logos={clientLogos}
        title="Our Clients"
        backgroundColor="#312c2c"
      />

      <OutgrownSection />

      <PremiumSolutionsSection />

      <WhyChooseUsSection />

      <TestimonialSection />

      <TeamCTASection
        topText="Ready to take the next step?"
        heading="Let's make it happen smarter, faster & better"
        buttonText="Get a Quote"
        buttonLink="/contact-us"
      />

      <ContactFormSection/>

      <Footer />
    </div>
  );
}
