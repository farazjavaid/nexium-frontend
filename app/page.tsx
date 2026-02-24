"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import SplashScreen from "@/components/SplashScreen";
import LandingHeroSection from "@/components/LandingHeroSection";
import ClientLogosSection from "@/components/ClientLogosSection";
import OutgrownSection from "@/components/OutgrownSection";
import PremiumSolutionsSection from "@/components/PremiumSolutionsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ProjectShowcaseSection from "@/components/ProjectShowcaseSection";
import ContactFormSection from "@/components/ContactFormSection";
import TestimonialSection from "@/components/TestimonialSection";
import TeamCTASection from "@/components/TeamCTASection";
import Footer from "@/components/Footer";
import { clientService } from "@/lib/services/clientService";
import { projectService } from "@/lib/services/projectService";
import { testimonialService } from "@/lib/services/testimonialService";
import { Client, Project, Testimonial } from "@/types/admin";

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://affectionate-magenta-kangaroo.39-61-46-46.cpanel.site/api';

export default function Home() {
  const [heroSlide, setHeroSlide] = useState(0);
  const [clientLogos, setClientLogos] = useState<string[]>([]);
  const [projects, setProjects] = useState<any[]>([]);
  const [testimonials, setTestimonials] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const clientsResponse = await clientService.getAll();
        const logos = clientsResponse.data
          ?.filter((client: Client) => client.is_active)
          .sort((a: Client, b: Client) => a.display_order - b.display_order)
          .map((client: Client) => `${API_URL}/storage/${client.logo}`) || [];
        setClientLogos(logos);

        const projectsResponse = await projectService.getAll();
        const transformedProjects = projectsResponse.data?.map((project: Project) => ({
          title: project.title,
          category: project.category,
          image: `${API_URL}/storage/${project.image}`,
          bgColor: project.bg_color,
          link: project.link,
        })) || [];
        setProjects(transformedProjects);

        const testimonialsResponse = await testimonialService.getAll();
        const transformedTestimonials = testimonialsResponse.data
          ?.filter((testimonial: Testimonial) => testimonial.is_active)
          .sort((a: Testimonial, b: Testimonial) => a.display_order - b.display_order)
          .map((testimonial: Testimonial) => ({
            quote: testimonial.quote,
            author: testimonial.author,
            title: testimonial.title,
          })) || [];
        setTestimonials(transformedTestimonials);
      } catch (error) {
        console.error("Error fetching data:", error);
        setClientLogos([]);
        setProjects([]);
        setTestimonials([]);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <SplashScreen />
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

      <ProjectShowcaseSection projects={projects} />

      <TestimonialSection testimonials={testimonials} />

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
