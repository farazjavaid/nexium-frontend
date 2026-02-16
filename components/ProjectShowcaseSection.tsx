"use client";

import Image from "next/image";

interface Project {
  title: string;
  category: string;
  image: string;
  bgColor: string;
  link?: string;
}

interface ProjectShowcaseSectionProps {
  projects?: Project[];
}

const defaultProjects: Project[] = [
  {
    title: "E-Commerce Platform",
    category: "Shopify Development",
    image: "/images/projects/project-1.jpg",
    bgColor: "#8B1538",
  },
  {
    title: "Brand Identity",
    category: "Design & Development",
    image: "/images/projects/project-2.jpg",
    bgColor: "#4A5FC1",
  },
  {
    title: "Agency Website",
    category: "WordPress Development",
    image: "/images/projects/project-3.jpg",
    bgColor: "#B88B9D",
  },
  {
    title: "Interior Design",
    category: "Custom Web App",
    image: "/images/projects/project-4.jpg",
    bgColor: "#1A4D3E",
  },
];

export default function ProjectShowcaseSection({
  projects = defaultProjects,
}: ProjectShowcaseSectionProps) {
  return (
    <section className="w-full py-16 lg:py-24 px-4 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-center mb-12 lg:mb-16 uppercase"
          style={{
            fontSize: "48px",
            lineHeight: "60px",
            letterSpacing: "0.5px",
            color: "#252525",
            fontWeight: 300,
          }}
        >
          SEE WHAT WE HAVE BUILT
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          {projects.map((project, index) => {
            const rowIndex = Math.floor(index / 2);
            const isFirstInRow = index % 2 === 0;
            const isEvenRow = rowIndex % 2 === 0;
            const colSpan = isEvenRow
              ? isFirstInRow ? "md:col-span-8" : "md:col-span-4"
              : isFirstInRow ? "md:col-span-4" : "md:col-span-8";

            return (
            <div
              key={index}
              className={`relative group overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-[1.02] ${colSpan}`}
              style={{
                backgroundColor: project.bgColor,
                minHeight: "400px",
              }}
            >
              <div className="relative w-full h-full p-8 lg:p-12 flex flex-col justify-between">
                <div className="relative w-full h-[280px] mb-6">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="mt-auto">
                  <p
                    className="text-white uppercase mb-1"
                    style={{
                      fontSize: "12px",
                      letterSpacing: "1.5px",
                      fontWeight: 600,
                    }}
                  >
                    {project.category}
                  </p>
                  <h3
                    className="text-white"
                    style={{
                      fontSize: "20px",
                      fontWeight: 600,
                      letterSpacing: "-0.4px",
                    }}
                  >
                    {project.title}
                  </h3>
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
