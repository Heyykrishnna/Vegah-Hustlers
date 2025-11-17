import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Quote } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Gauraksh Garg",
    role: "Professor of CS",
    company: "Newton School",
    quote: "Their approach to accessibility technology shows maturity beyond their years. The code quality, documentation, and impact—everything was top-notch.",
    rating: 5,
  },
  {
    name: "Dr. Rajesh Kumar",
    role: "Judge, DevClub Hackathon",
    company: "IIT Delhi",
    quote: "VEGAH team demonstrated exceptional problem-solving skills and technical prowess. Their AI solution was not just innovative but practical and scalable!",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Senior Developer",
    company: "Microsoft",
    quote: "The blockchain voting system they built showed deep understanding of distributed systems and security. These hustlers know their craft inside out.",
    rating: 5,
  },
  {
    name: "Alex Rodriguez",
    role: "Hackathon Organizer",
    company: "Baseline Tooling",
    quote: "What impressed me most wasn't just their technical skills, but their presentation and storytelling. They made complex tech accessible and exciting. Real hustlers!",
    rating: 5,
  },
  {
    name: "Amit Patel",
    role: "CTO",
    company: "Startup Incubator",
    quote: "I've offered mentorship to VEGAH because I see massive potential. They're not just building projects—they're building the future. Watch this space!",
    rating: 4,
  },
];

export const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(carouselRef.current, {
        scrollTrigger: {
          trigger: carouselRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="min-h-screen py-24 md:py-32 px-6 bg-background"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          ref={titleRef}
          className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter mb-16"
        >
          <span className="text-muted-foreground">[</span> TESTIMONIALS{" "}
          <span className="text-muted-foreground">]</span>
        </h2>

        <div ref={carouselRef} className="relative">
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-2">
                    <Card className="bg-card border-2 border-border hover:border-primary transition-all duration-300 h-full">
                      <CardContent className="p-8 flex flex-col h-full">
                        <Quote className="h-10 w-10 text-primary mb-4" />
                        
                        <blockquote className="text-lg text-muted-foreground leading-relaxed mb-6 flex-1">
                          "{testimonial.quote}"
                        </blockquote>

                        <div className="flex items-center gap-2 mb-4">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <span key={i} className="text-primary text-xl">★</span>
                          ))}
                        </div>

                        <div className="border-t border-border pt-4">
                          <p className="font-bold text-foreground text-lg uppercase tracking-wide">
                            {testimonial.name}
                          </p>
                          <p className="text-primary font-semibold uppercase text-sm tracking-wider">
                            {testimonial.role}
                          </p>
                          <p className="text-muted-foreground text-sm mt-1">
                            {testimonial.company}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex items-center justify-center gap-4 mt-8">
              <CarouselPrevious className="relative inset-0 translate-y-0 border-2 border-primary hover:bg-primary hover:text-primary-foreground" />
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 w-2 rounded-full transition-all duration-300 ${
                      index === currentIndex % testimonials.length
                        ? "bg-primary w-8"
                        : "bg-muted"
                    }`}
                  />
                ))}
              </div>
              <CarouselNext className="relative inset-0 translate-y-0 border-2 border-primary hover:bg-primary hover:text-primary-foreground" />
            </div>
          </Carousel>

          <div className="mt-12 text-center">
            <p className="text-sm uppercase tracking-wider text-muted-foreground">
              • Click arrows to navigate •
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
