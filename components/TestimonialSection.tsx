"use client";

import { useState } from "react";

interface Testimonial {
  quote: string;
  author: string;
  title: string;
}

interface TestimonialSectionProps {
  testimonials?: Testimonial[];
}

const defaultTestimonials: Testimonial[] = [
  {
    quote: "Our online presence has never looked better. The new site helped boost both traffic and conversions. From start to finish, the process was smooth. The team delivered on time and with exceptional quality.",
    author: "James Smith",
    title: "Marketing Manager at JW Agency",
  },
  {
    quote: "Working with Nexium Trio transformed our digital strategy. Their attention to detail and technical expertise is unmatched.",
    author: "Sarah Johnson",
    title: "CEO at Digital Innovations",
  },
  {
    quote: "The team's ability to understand our needs and deliver beyond expectations has been remarkable. Highly recommended.",
    author: "Michael Chen",
    title: "Product Director at TechStart",
  },
  {
    quote: "From concept to launch, the experience was seamless. Our new platform has significantly improved our customer engagement.",
    author: "Emma Williams",
    title: "Operations Manager at RetailHub",
  },
  {
    quote: "Professional, responsive, and incredibly skilled. They brought our vision to life exactly as we imagined.",
    author: "David Brown",
    title: "Founder at GrowthLabs",
  },
  {
    quote: "The quality of work and level of communication exceeded all our expectations. A true partnership.",
    author: "Lisa Anderson",
    title: "Marketing Director at BrandCo",
  },
  {
    quote: "They didn't just build a website, they built a solution that drives real business results.",
    author: "Robert Taylor",
    title: "VP of Sales at SalesForce Pro",
  },
  {
    quote: "Outstanding technical expertise combined with genuine care for our success. Could not ask for a better team.",
    author: "Jennifer Martinez",
    title: "CTO at FinTech Solutions",
  },
];

export default function TestimonialSection({
  testimonials = defaultTestimonials,
}: TestimonialSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const currentTestimonial = testimonials[currentIndex];

  if (!testimonials || testimonials.length === 0 || !currentTestimonial) {
    return null;
  }

  return (
    <section className="w-full py-16 lg:py-24 px-4 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-[1228px] mx-auto relative">
          <span
            className="text-[#353638] absolute top-0 left-0 pb-4"
            style={{
              fontSize: "20px",
              fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif",
              fontStyle: "italic",
            }}
          >
            {String(currentIndex + 1).padStart(2, "0")}/{String(testimonials.length).padStart(2, "0")}
          </span>

          <blockquote
            className="text-[#353638] text-start mb-12 pt-12"
            style={{
              fontSize: "56px",
              lineHeight: "64px",
              fontWeight: 400,
            }}
          >
            &ldquo;{currentTestimonial.quote}&rdquo;
          </blockquote>

          <div className="flex items-center justify-between mb-8">
            <div className="text-start">
              <p
                className="text-[#353638]"
                style={{
                  fontSize: "26px",
                  fontFamily: "'Josefin Sans', sans-serif",
                  lineHeight: "40px",
                  letterSpacing: "-0.52px",
                }}
              >
                {currentTestimonial.author}
              </p>
              <p
                className="text-[#353638]/60"
                style={{
                  fontSize: "18px",
                  fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif",
                }}
              >
                /{currentTestimonial.title}
              </p>
            </div>

            <div className="flex items-center gap-6">
              <button
                onClick={handlePrevious}
                className="w-[51px] h-[33px] bg-white border border-[#353638]/50 hover:bg-[#267275] hover:border-[#267275] flex items-center justify-center transition-all duration-300 group"
                aria-label="Previous testimonial"
              >
                <svg
                  className="w-4 h-4 text-[#353638] group-hover:text-white transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={handleNext}
                className="w-[51px] h-[33px] bg-white border border-[#353638]/50 hover:bg-[#267275] hover:border-[#267275] flex items-center justify-center transition-all duration-300 group"
                aria-label="Next testimonial"
              >
                <svg
                  className="w-4 h-4 text-[#353638] group-hover:text-white transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
