"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactFormSection from "@/components/ContactFormSection";
import TeamCTASection from "@/components/TeamCTASection";
import HeroSection from "@/components/HeroSection";
import ClientLogosSection from "@/components/ClientLogosSection";
import { clientService } from "@/lib/services/clientService";
import { Client } from "@/types/admin";

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://affectionate-magenta-kangaroo.39-61-46-46.cpanel.site/api';

const imgPolygon3 = "/images/about-us/polygon-3.svg";
const imgRectangle702 = "/images/about-us/rectangle-702.png";
const imgGroup = "/images/about-us/group.svg";
const imgGroup2307 = "/images/about-us/group-2307.svg";
const imgTailorBuildsIcon = "/images/about-us/tailor-builds-icon.svg";
const imgGroup2327 = "/images/about-us/group-2327.svg";
const imgGroup2328 = "/images/about-us/Group 2328.svg";

export default function AboutUs() {
  const [clientLogos, setClientLogos] = useState<string[]>([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await clientService.getAll();

        const logos = response.data
          ?.filter((client: Client) => client.is_active)
          .sort((a: Client, b: Client) => a.display_order - b.display_order)
          .map((client: Client) => `${API_URL}/storage/${client.logo}`) || [];

        setClientLogos(logos);
      } catch (error) {
        console.error("Error fetching clients:", error);
        setClientLogos([]);
      }
    };

    fetchClients();
  }, []);
  return (
    <div className="bg-white w-full overflow-x-hidden">
      <Header transparent />

      <HeroSection
        heading="We Build Digital Products That Build Businesses"
        description="At NexiumTrio, we're more than just developers. we're collaborators, problem-solvers, and long-term partners. Whether you're scaling fast, replatforming, or building from scratch, we turn your requirements into high-performance platforms that reflect your vision and drive real results."
        buttonText="GET A QUOTE"
        backgroundImage={imgPolygon3}
      />

      <ClientLogosSection
        logos={clientLogos}
        title="Our Clients"
      />

      <section className="w-full py-16 lg:py-24 px-4 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl lg:text-5xl text-[#353638] font-montserrat font-normal uppercase mb-6">
                Collaborative<br />by design
              </h2>
            </div>
            <div>
              <p className="text-[#727272] font-montserrat text-base lg:text-lg leading-relaxed">
                Every project is different, and so is our approach. From initial scoping to post-launch support, we shape every solution around your business, bringing your vision to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 lg:py-24 px-4 lg:px-20 bg-[#1f1f1f] relative overflow-hidden">
        <div className="absolute right-0 bottom-0 w-[350px] h-[300px] opacity-20 pointer-events-none">
          <Image alt="" src={imgRectangle702} fill className="object-contain" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-3xl lg:text-[48px] text-white font-montserrat font-normal uppercase mb-12 lg:mb-16">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 mb-12">
            <div>
              <h3 className="text-[20px] text-white font-montserrat font-bold uppercase mb-4 tracking-wide">
                Innovation with Purpose
              </h3>
              <p className="text-white font-montserrat text-[17px] leading-[26px] opacity-90">
                We build solutions that solve real-world problems and deliver measurable impact for your business.
              </p>
            </div>
            <div>
              <h3 className="text-[20px] text-white font-montserrat font-bold uppercase mb-4 tracking-wide">
                Across the Details
              </h3>
              <p className="text-white font-montserrat text-[17px] leading-[26px] opacity-90">
                From responsive design to backend<br />architecture, we understand everything it<br />takes to make your digital experience fast,<br />reliable, and built to scale.
              </p>
            </div>
          </div>
          <div className="max-w-full">
            <h3 className="text-[20px] text-white font-montserrat font-bold uppercase mb-4 tracking-wide">
              Client Collaboration
            </h3>
            <p className="text-white font-montserrat text-[17px] leading-[26px] opacity-90 max-w-5xl">
              You&apos;ll work directly with the technical experts who are delivering your project. Working with us feels more like <br />collaborating with a partner than an agency.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-16 lg:py-24 px-4 lg:px-20 bg-[#eee]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[32px] lg:text-[78px] leading-tight lg:leading-[80px] text-[#252525] font-montserrat font-light uppercase mb-12 lg:mb-20">
            Why clients<br />choose us
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-x-16 gap-y-12 lg:gap-y-28 ps-0 lg:ps-28">
            <div className="flex flex-row gap-5">
              <div className="flex-shrink-0 w-[66px] h-[68px] relative">
                <Image alt="" src={imgTailorBuildsIcon} fill className="object-contain" />
              </div>
              <div className="flex-1">
                <h3 className="text-[18px] text-[#252525] font-montserrat font-bold uppercase mb-4 leading-[36px]">
                  Tailored Builds
                </h3>
                <p className="text-[#727272] font-montserrat text-[17px] leading-[26px]">
                  We don&apos;t start with templates. We start<br />with your vision, tailoring the solution to<br />your business needs.
                </p>
              </div>
            </div>

            <div className="flex flex-row gap-5">
              <div className="flex-shrink-0 w-[66px] h-[68px] relative rotate-[45deg]">
                <Image alt="" src={imgGroup2307} fill className="object-contain" />
              </div>
              <div className="flex-1">
              <h3 className="text-[18px] text-[#252525] font-montserrat font-bold uppercase mb-4 leading-[36px]">
                Always Full-Stack
              </h3>
              <p className="text-[#727272] font-montserrat text-[17px] leading-[26px]">
                From backend architecture to front-end<br />design, we build fast, using the tools that<br />suit your project best.
              </p>
              </div>
            </div>

            <div className="flex flex-row gap-5">
              <div className="flex-shrink-0 w-[66px] h-[68px] relative">
                <Image alt="" src={imgGroup} fill className="object-contain" />
              </div>
              <div className="flex-1">
              <h3 className="text-[18px] text-[#252525] font-montserrat font-bold uppercase mb-4 leading-[36px]">
                Like Having An Extra Team Member
              </h3>
              <p className="text-[#727272] font-montserrat text-[17px] leading-[26px]">
                You&apos;ll work directly with the trio behind<br />the name. No account managers or<br />middlemen - just clear, honest<br />communication.
              </p>
              </div>
            </div>

            <div className="flex flex-row gap-5">
              <div className="flex-shrink-0 w-[66px] h-[68px] relative">
                <Image alt="Fast Delivery" src={imgGroup2327} fill className="object-contain" />
              </div>
              <div className="flex-1">
              <h3 className="text-[18px] text-[#252525] font-montserrat font-bold uppercase mb-4 leading-[36px]">
                Fast Delivery
              </h3>
              <p className="text-[#727272] font-montserrat text-[17px] leading-[26px]">
                You&apos;ll work with the people who are<br />delivering your product.
              </p>
              </div>
            </div>

            <div className="flex flex-row gap-5">
              <div className="flex-shrink-0 w-[66px] h-[68px] relative">
                <Image alt="Scalable and Secure" src={imgGroup2328} fill className="object-contain" />
              </div>
              <div className="flex-1">
              <h3 className="text-[18px] text-[#252525] font-montserrat font-bold uppercase mb-4 leading-[36px]">
                Scalable and Secure
              </h3>
              <p className="text-[#727272] font-montserrat text-[17px] leading-[26px]">
                We build robust systems that can scale<br />with your business and adapt as you grow.
              </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TeamCTASection
        topText="Proudly based in Melbourne"
        heading="We're a team of software engineers who genuinely love what we do"
        buttonText="Get a Quote"
      />

      <ContactFormSection />

      <Footer />
    </div>
  );
}
