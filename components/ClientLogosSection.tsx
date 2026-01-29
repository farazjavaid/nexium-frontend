import Image from "next/image";

interface ClientLogosSectionProps {
  logos: string[];
  title?: string;
  backgroundColor?: string;
}

export default function ClientLogosSection({
  logos,
  title = "Our Clients",
  backgroundColor = "#312c2c",
}: ClientLogosSectionProps) {
  return (
    <section className="w-full py-6 overflow-hidden" style={{ backgroundColor }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center">
          <div className="flex-shrink-0 pr-8">
            <p className="text-white text-[17px] whitespace-nowrap">{title}</p>
          </div>

          <div className="flex-1 relative overflow-hidden">
            <div className="flex animate-scroll will-change-transform">
              {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[140px] h-[30px] mx-6 lg:mx-8 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <Image
                    src={logo}
                    alt={`Client ${index + 1}`}
                    width={140}
                    height={30}
                    className="object-contain max-h-[30px]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
