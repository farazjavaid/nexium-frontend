import Image from "next/image";

interface Service {
  title: string;
  description: string;
  icon: string;
}

interface PremiumSolutionsSectionProps {
  services?: Service[];
}

const defaultServices: Service[] = [
  {
    title: "SHOPIFY ECOMMERCE",
    description: "Custom online stores built for conversion.",
    icon: "/images/landing/bxl-shopify 1.svg",
  },
  {
    title: "WORDPRESS DEVELOPMENT",
    description: "Content management systems with fully customised themes and integrations.",
    icon: "/images/landing/logo-wordpress 1.svg",
  },
  {
    title: "LARAVEL WEB APPLICATIONS",
    description: "Secure backend solutions designed for your business logic and workflows",
    icon: "/images/landing/Laravel.svg",
  },
  {
    title: "REACT.JS FRONTENDS",
    description: "Dynamic user experiences built with the most trusted JavaScript framework.",
    icon: "/images/landing/React.svg",
  },
];

export default function PremiumSolutionsSection({
  services = defaultServices,
}: PremiumSolutionsSectionProps) {
  return (
    <section className="w-full py-16 lg:py-24 px-4 lg:px-20 relative" style={{ backgroundColor: "#eee" }}>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-12 lg:mb-20">
          <p
            className="text-[#353638] font-semibold mb-2"
            style={{
              fontSize: "22px",
              lineHeight: "67px",
            }}
          >
            Elevating Ideas into
          </p>
          <h2
            className="text-[#353638] font-light uppercase mb-8"
            style={{
              fontSize: "78px",
              lineHeight: "80px",
              letterSpacing: "0.64px",
            }}
          >
            PREMIUM<br />SOLUTIONS
          </h2>
          <p
            className="text-[#727272] max-w-[718px] mx-auto pt-12"
            style={{
              fontSize: "17px",
              lineHeight: "30px",
            }}
          >
            We deliver premium websites and digital systems using trusted technology like Shopify, WordPress, Laravel, and React.js. From front-end design to backend architecture, we develop solutions that align with your goals and scale with your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-32 gap-y-12 lg:gap-y-26 max-w-[718px] mx-auto py-12">
          {services.map((service, index) => (
            <div key={index} className="relative">
              <Image
                src={service.icon}
                alt=""
                width={100}
                height={100}
                className="absolute top-[-30px] left-[-40px]"
              />

              <h3
                className="text-[#353638] font-bold uppercase relative z-10"
                style={{
                  fontSize: "18px",
                  lineHeight: "36px",
                  letterSpacing: "-0.36px",
                }}
              >
                {service.title}
              </h3>

              <p
                className="text-[#727272] max-w-[320px] relative z-10"
                style={{
                  fontSize: "17px",
                  lineHeight: "26px",
                }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
