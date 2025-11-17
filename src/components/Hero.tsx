import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
      });

      gsap.from(subtitleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power4.out",
      });

      gsap.from(ctaRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.6,
        ease: "power4.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section ref={heroRef} className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h1
            ref={titleRef}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase"
          >
            <span className="block text-foreground">VEGAH</span>
            <span className="block text-muted-foreground text-3xl md:text-4xl lg:text-5xl mt-4">
              / THE HUSTLERS /
            </span>
          </h1>
          
          <p
            ref={subtitleRef}
            className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto font-medium"
          >
            [CODE. CREATE. CONQUER.]
          </p>
          
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              onClick={scrollToAbout}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wider text-base px-8 py-6"
            >
              Explore Our Journey
            </Button>
          </div>
        </div>
        
        <button
          onClick={scrollToAbout}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors animate-bounce"
          aria-label="Scroll down"
        >
          <ArrowDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
};
