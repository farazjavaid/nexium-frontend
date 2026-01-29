import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhatWeBuildSection from "@/components/WhatWeBuildSection";
import TeamCTASection from "@/components/TeamCTASection";
import ContactFormSection from "@/components/ContactFormSection";
import Footer from "@/components/Footer";

const servicesData = [
  {
    title: "WordPress Development",
    description:
      "We build custom WordPress sites, perfect for marketing, publishing, or service-driven brands.",
    items: [
      "Custom theme and plugin development",
      "Full content migration and CMS setup",
      "Performance and security optimisation",
      "Ongoing support and site maintenance",
    ],
  },
  {
    title: "Shopify e-Commerce",
    description:
      "We create Shopify stores that are fast, secure, and built to scale. From theme customisation to app integrations, we tailor every build to your brand and goals.",
    items: [
      "Shopify theme customisation",
      "Third-party app integrations and API connections",
      "Store setup and product catalogue migration",
      "Shopify Plus solutions",
    ],
  },
  {
    title: "Custom Web Development",
    description:
      "We build bespoke web apps and systems using Laravel, React, and other frameworks. Ideal for client portals, internal tools, and dashboards.",
    items: [
      "Laravel and React development",
      "Full-stack web app builds",
      "Scalable, secure backend infrastructure",
      "API integrations and automation",
    ],
  },
];

export default function OurServices() {
  return (
    <div className="bg-white w-full overflow-x-hidden">
      <Header transparent />

      <HeroSection
        heading="Elevating Ideas into Premium Solutions"
        description="Every business is unique, and off-the shelf solutions rarely deliver. That's why we offer custom-built solutions, using trusted technology like Shopify, WordPress, Laravel and React. Whether you need a marketing site, an eCommerce store, or a full-stack web app, we can help you bring it to life."
        buttonText="GET A QUOTE"
        buttonLink="/contact-us"
      />

      <WhatWeBuildSection services={servicesData} />

      <TeamCTASection
        topText="Don't know where to start?"
        heading="Get in touch & we will talk through your requirements"
        buttonText="Get a Quote"
        buttonLink="/contact-us"
      />

      <ContactFormSection />

      <Footer />
    </div>
  );
}
