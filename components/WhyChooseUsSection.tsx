interface Feature {
  number: string;
  title: string;
  description: string;
  isDark?: boolean;
}

interface WhyChooseUsSectionProps {
  features?: Feature[];
}

const defaultFeatures: Feature[] = [
  {
    number: "01",
    title: "Tailored Solutions",
    description: "We don't start with templates. We start with your vision, tailoring the solution to your business needs.",
    isDark: true,
  },
  {
    number: "02",
    title: "Always Full-Stack",
    description: "From intuitive front-end interfaces to robust server-side logic, we manage the entire development lifecycle.",
    isDark: true,
  },
  {
    number: "03",
    title: "Scalable and Secure",
    description: "We build robust systems that can scale with your business and adapt as you grow.",
    isDark: true,
  },
  {
    number: "04",
    title: "Fast Delivery",
    description: "We work in agile sprints to deliver working software faster while keeping you involved every step of the way.",
    isDark: true,
  },
  {
    number: "05",
    title: "Like Having An Extra Team Member",
    description: "You'll work directly with the trio behind the name. No account managers or middlemen - just clear, honest communication.",
    isDark: true,
  },
];

export default function WhyChooseUsSection({
  features = defaultFeatures,
}: WhyChooseUsSectionProps) {
  return (
    <section className="w-full py-16 lg:py-24 px-4 lg:px-20 bg-[#1f1f1f] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <h2
          className="mb-12 lg:mb-16 font-montserrat uppercase"
          style={{
            color: "#FFF",
            fontSize: "78px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "80px",
            letterSpacing: "0.5px",
          }}
        >
          Why clients<br />choose us
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-8 lg:p-10 ${
                feature.isDark ? "bg-transparent" : "bg-[#267275]"
              } ${index === features.length - 1 ? "lg:col-span-2" : ""}`}
            >
              <div className="flex items-start gap-4">
                <span
                  className="font-montserrat"
                  style={{
                    color: "#267275",
                    fontSize: "18px",
                    fontWeight: 800,
                  }}
                >
                  {feature.number}
                </span>
                <div className="flex-1">
                  <h3
                    className={`font-bold uppercase mb-4 ${
                      feature.isDark ? "text-white" : "text-white"
                    }`}
                    style={{
                      fontSize: "18px",
                      letterSpacing: "-0.36px",
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    style={{
                      color: "rgba(255, 255, 255, 0.80)",
                      fontFamily: "Segoe UI",
                      fontSize: "17px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "26px",
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
