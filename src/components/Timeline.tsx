import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar, MapPin, Trophy, Code, Lightbulb, Rocket } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const timelineEvents = [
  {
    date: "August 2024",
    title: "The Beginning",
    icon: Lightbulb,
    description: "Team VEGAH was formed during college orientation week. Five ambitious students decided to participate in their first hackathon together.",
    location: "College Campus",
    highlight: "Team Formation",
  },
  {
    date: "October 2024",
    title: "First Hackathon",
    icon: Code,
    description: "Participated in our first local hackathon. Didn't win, but learned valuable lessons about teamwork, time management, and rapid prototyping.",
    location: "City Tech Hub",
    highlight: "Learning Experience",
  },
  {
    date: "December 2024",
    title: "Community Impact",
    icon: Trophy,
    description: "Won Community Choice Award at DevPost Hackathon. AccessiRead helped 1000+ visually impaired users within first month.",
    location: "Online",
    highlight: "₹10,000+",
  },
  {
    date: "January 2025",
    title: "First Victory",
    icon: Trophy,
    description: "Won 3rd place at College Tech Fest with a student productivity app. The first taste of victory that fueled our ambition.",
    location: "DevClub IIT Delhi 2025",
    highlight: "1K+ Users Impact",
  },
  {
    date: "April 2025",
    title: "Google Recognition",
    icon: Trophy,
    description: "2nd place at Google Solution Challenge. HealthBridge telemedicine platform connected rural patients with doctors across 5 states.",
    location: "Google India",
    highlight: "Google Cloud Credits",
  },
  {
    date: "June 2025",
    title: "Design Excellence",
    icon: Trophy,
    description: "Best UI/UX Design award at National Hackathon Series. Our disaster management dashboard set new standards for emergency response systems.",
    location: "Bangalore",
    highlight: "₹50,000 Prize",
  },
  {
    date: "August 2025",
    title: "Innovation Award",
    icon: Trophy,
    description: "Best Innovation at TechFest IIT Bombay. ChainVote blockchain voting system recognized for its potential to revolutionize democratic processes.",
    location: "IIT Bombay",
    highlight: "₹75,000 Prize",
  },
  {
    date: "September 2025",
    title: "International Stage",
    icon: Trophy,
    description: "Top 10 finish at Baseline Tooling Hackathon - our first international competition. GreenPath climate app received recognition from judges worldwide.",
    location: "Baseline Tooling Hackathon",
    highlight: "Certificate",
  },
  {
    date: "Present",
    title: "The Journey Continues",
    icon: Rocket,
    description: "10+ hackathons, 4 major awards, ₹20K+ in prizes, and countless memories. But we're just getting started. The best is yet to come.",
    location: "Everywhere",
    highlight: "VEGAH Forever",
  },
];

export const Timeline = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      const items = timelineRef.current?.querySelectorAll(".timeline-item");
      items?.forEach((item, index) => {
        const isLeft = index % 2 === 0;
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          x: isLeft ? -60 : 60,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="journey"
      ref={sectionRef}
      className="min-h-screen py-24 md:py-32 px-6 bg-secondary/20"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          ref={titleRef}
          className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter mb-16 text-right"
        >
          <span className="text-muted-foreground">[</span> OUR JOURNEY{" "}
          <span className="text-muted-foreground">]</span>
        </h2>

        <div ref={timelineRef} className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-border hidden md:block" />

          <div className="space-y-12">
            {timelineEvents.map((event, index) => {
              const Icon = event.icon;
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`timeline-item relative flex flex-col md:flex-row gap-8 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isLeft ? "md:text-right" : "md:text-left"}`}>
                    <div
                      className={`bg-card border-2 border-border hover:border-primary p-6 rounded transition-all duration-300 hover:scale-105 ${
                        isLeft ? "md:mr-8" : "md:ml-8"
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-3 md:justify-end">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span className="text-sm font-bold text-primary uppercase tracking-wider">
                          {event.date}
                        </span>
                      </div>

                      <h3 className="text-2xl font-black uppercase tracking-tight text-foreground mb-3">
                        {event.title}
                      </h3>

                      <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                        {event.description}
                      </p>

                      <div className="flex flex-wrap gap-2 md:justify-end">
                        <span className="px-3 py-1 bg-primary/10 text-primary font-bold rounded uppercase tracking-wider text-xs">
                          {event.highlight}
                        </span>
                        <span className="px-3 py-1 bg-secondary border border-border text-foreground font-medium rounded text-xs flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {event.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Center icon */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="bg-primary p-4 rounded-full border-4 border-background">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Mobile icon */}
                  <div className="md:hidden flex items-center gap-3">
                    <div className="bg-primary p-3 rounded-full">
                      <Icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Spacer for alignment */}
                  <div className="flex-1 hidden md:block" />
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block border-2 border-primary px-8 py-4 rounded bg-card">
            <p className="text-2xl md:text-3xl font-black text-primary uppercase tracking-wider">
              1+ Years of Hustling
            </p>
            <p className="text-muted-foreground uppercase tracking-wider mt-2 text-sm font-montserrat">
              From Zero to Heroes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
