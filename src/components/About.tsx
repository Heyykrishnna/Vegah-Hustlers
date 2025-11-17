import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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

      const items = contentRef.current?.children || [];
      Array.from(items).forEach((item, index) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          y: 40,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.15,
          ease: "power3.out",
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen py-24 md:py-32 px-6 bg-background"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          ref={titleRef}
          className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter mb-16"
        >
          <span className="text-muted-foreground">[</span> WHO WE ARE <span className="text-muted-foreground">]</span>
        </h2>
        
        <div ref={contentRef} className="space-y-12">
          <div className="border-l-4 border-primary pl-6 md:pl-8">
            <p className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground leading-relaxed">
              WE ARE THE AMBITIOUS ONES. THE ONES WHO DON'T SLEEP WHEN THERE'S CODE TO WRITE.
              THE ONES WHO TURN CAFFEINE INTO SOLUTIONS.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 pt-8">
            <div className="bg-card border border-border p-8 rounded">
              <h3 className="text-2xl font-bold uppercase tracking-wider mb-4 text-primary">
                / THE VISION
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To push the boundaries of what's possible in 48 hours. To create solutions that matter.
                To prove that with the right team and mindset, impossible is just a starting point.
              </p>
            </div>
            
            <div className="bg-card border border-border p-8 rounded">
              <h3 className="text-2xl font-bold uppercase tracking-wider mb-4 text-primary">
                / THE MISSION
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Transform ideas into reality through collaborative innovation. Compete at the highest level.
                Build products that solve real problems and make a lasting impact.
              </p>
            </div>
          </div>
          
          <div className="mt-12 p-8 bg-secondary/50 border border-border rounded">
            <p className="text-lg md:text-xl text-center font-medium">
              <span className="text-primary font-bold text-2xl md:text-3xl">VEGAH</span>
              <span className="text-muted-foreground mx-4">/</span>
              <span className="text-foreground">From students to innovators. From ideas to impact.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
