"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AuthenticateSkillsSection from "@/components/authenticate-skills-section";
import WhyChooseSection from "@/components/why-choose-section";
import LoginSection from "@/components/login-section";
import TestimonialsSection from "@/components/testimonials-section";

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Skill Assessment",
      image: "/images/homepage/Carousel/Drivers License.jpg",
      isCentered: false,
    },
    {
      title: "Quiz Excellence",
      image: "/images/homepage/Carousel/Pick - Laptop.jpg",
      isCentered: false,
    },
    {
      title: "Learning Journey",
      image: "/images/homepage/Carousel/Secure Center.jpg",
      isCentered: false,
    },
    {
      title: "Hiring Simplified",
      image: "/images/homepage/Carousel/Skill Library.jpg",
      isCentered: true,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Carousel Banner Section */}
      <section className="relative w-full h-[75vh] md:h-[80vh] overflow-hidden pt-[70px] bg-white">
        <div className="relative w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${
                index === currentSlide
                  ? "opacity-100 scale-100 z-10"
                  : "opacity-0 scale-95 pointer-events-none z-0"
              }`}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={slide.image}
                  alt={`${slide.title} Background`}
                  fill
                  priority={index === 0}
                  className="object-cover"
                />
                {/* Overlay to ensure text readability */}
                <div className="absolute inset-0 bg-black/30"></div>
              </div>

              {/* Title Content */}
              <div className="relative h-full max-w-7xl mx-auto px-6 md:px-12 flex items-center z-20">
                <div
                  className={`w-full ${
                    slide.isCentered ? "text-center" : "text-left"
                  }`}
                >
                  <h3 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-yellow-400 to-yellow-300 bg-clip-text text-transparent drop-shadow-md select-none">
                    {slide.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white hover:scale-105 p-3 rounded-full shadow-lg z-30 transition-all focus:outline-none"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6 text-[#00418d]" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white hover:scale-105 p-3 rounded-full shadow-lg z-30 transition-all focus:outline-none"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6 text-[#00418d]" />
          </button>

          {/* Pagination Indicators */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-30">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-[#f73e5d] w-10 shadow-md"
                    : "bg-white/60 w-3 hover:bg-white"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Main Sections content */}
      <div className="bg-white relative z-20">
        <AuthenticateSkillsSection />
        <WhyChooseSection />
        <TestimonialsSection />
        <LoginSection />
      </div>
    </div>
  );
}
