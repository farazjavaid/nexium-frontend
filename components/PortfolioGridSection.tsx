import Image from "next/image";

interface PortfolioProject {
  title: string;
  category?: string;
  image: string;
  backgroundColor?: string;
}

interface PortfolioGridSectionProps {
  projects?: PortfolioProject[];
}

const defaultProjects: PortfolioProject[] = [
  {
    title: "Dockyard",
    category: "Web Development",
    image: "/images/about-us/rectangle-702.png",
    backgroundColor: "#8B1538",
  },
  {
    title: "The Red Poppy",
    category: "Branding, Web Design",
    image: "/images/about-us/image-3.png",
    backgroundColor: "#6B4C9A",
  },
  {
    title: "Yarraville Blooms",
    category: "Branding, Web Design",
    image: "/images/about-us/image-6.png",
    backgroundColor: "#B5A39A",
  },
  {
    title: "Well Drawn",
    category: "Branding, Web Design",
    image: "/images/about-us/image-8.png",
    backgroundColor: "#2F5547",
  },
];

export default function PortfolioGridSection({
  projects = defaultProjects,
}: PortfolioGridSectionProps) {
  return (
    <section className="w-full py-16 lg:py-24 px-4 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-[#353638] font-normal text-center uppercase mb-12 lg:mb-16"
          style={{
            fontSize: "48px",
            lineHeight: "40px",
          }}
        >
          See what we have built
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden cursor-pointer"
              style={{ backgroundColor: project.backgroundColor }}
            >
              <div className="relative w-full aspect-[389/371] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3
                      className="font-normal mb-2"
                      style={{
                        fontSize: "18px",
                        lineHeight: "64px",
                      }}
                    >
                      {project.title}
                    </h3>
                    {project.category && (
                      <p
                        className="text-white/80"
                        style={{
                          fontSize: "16px",
                          fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif",
                        }}
                      >
                        {project.category}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white">
                <h3
                  className="text-[#353638] font-normal"
                  style={{
                    fontSize: "18px",
                    lineHeight: "24px",
                  }}
                >
                  {project.title}
                </h3>
                {project.category && (
                  <p
                    className="text-[#727272] mt-1"
                    style={{
                      fontSize: "16px",
                      fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif",
                    }}
                  >
                    {project.category}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
