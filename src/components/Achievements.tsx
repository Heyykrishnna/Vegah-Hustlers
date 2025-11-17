import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Trophy, Award, Target, Users } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const achievements = [
  {
    icon: Trophy,
    title: "1st Place Winner",
    description: "DevPost Hackathon 2025",
    detail: "Built EduAI - An AI-powered personalized learning platform that adapts to individual student needs in real-time",
    prize: "₹10,000",
    participants: "1,200+ teams",
    date: "September 2025",
  },
  {
    icon: Award,
    title: "Best Innovation Award",
    description: "DevClub IIT Delhi 2025",
    detail: "Created ChainVote - A blockchain-based decentralized voting system ensuring transparent and tamper-proof elections",
    prize: "Goodies",
    participants: "800+ teams",
    date: "August 2024",
  },
  {
    icon: Target,
    title: "Top 10 Finalists",
    description: "Baseline Tooling Hackathon",
    detail: "Developed GreenPath - Climate action tracking app that gamifies sustainable lifestyle choices and carbon footprint reduction",
    prize: "Certificate",
    participants: "2,500+ teams worldwide",
    date: "August 2025",
  },
  {
    icon: Users,
    title: "Community Choice Winner",
    description: "AWS & NVIDIA Hackathon 2024",
    detail: "AccessiRead - Screen reader enhancement tool with AI-powered image description and context-aware navigation for visually impaired users",
    prize: "Certificate",
    participants: "1,800+ participants",
    date: "December 2024",
  },
];

export const Achievements = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

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

      const items = gridRef.current?.children || [];
      Array.from(items).forEach((item, index) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          y: 60,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: "power3.out",
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="achievements"
      ref={sectionRef}
      className="min-h-screen py-24 md:py-32 px-6 bg-secondary/20"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          ref={titleRef}
          className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter mb-16 text-right"
        >
          <span className="text-muted-foreground">[</span> ACHIEVEMENTS <span className="text-muted-foreground">]</span>
        </h2>
        
        <div ref={gridRef} className="grid md:grid-cols-2 gap-6 md:gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={index}
                className="group bg-card border-2 border-border hover:border-primary p-8 rounded transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-primary/10 p-4 rounded">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold uppercase tracking-wider mb-2 text-primary group-hover:text-red-400 transition-colors">
                      {achievement.title}
                    </h3>
                    <p className="text-lg font-semibold text-foreground mb-2">
                      {achievement.description}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {achievement.detail}
                </p>
                <div className="flex flex-wrap gap-3 text-sm">
                  <span className="px-3 py-1 bg-primary/10 text-primary font-bold rounded uppercase tracking-wider">
                    {achievement.prize}
                  </span>
                  <span className="px-3 py-1 bg-secondary border border-border text-foreground font-medium rounded">
                    {achievement.participants}
                  </span>
                  <span className="px-3 py-1 bg-secondary border border-border text-muted-foreground font-medium rounded">
                    {achievement.date}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center border-2 border-primary px-6 py-6 rounded">
            <p className="text-4xl md:text-5xl font-black text-primary mb-2">
              10+
            </p>
            <p className="text-muted-foreground uppercase tracking-wider text-sm">
              Hackathons
            </p>
          </div>
          <div className="text-center border-2 border-border px-6 py-6 rounded hover:border-primary transition-colors">
            <p className="text-4xl md:text-5xl font-black text-foreground mb-2">
              ₹20K
            </p>
            <p className="text-muted-foreground uppercase tracking-wider text-sm">
              Prize Money
            </p>
          </div>
          <div className="text-center border-2 border-border px-6 py-6 rounded hover:border-primary transition-colors">
            <p className="text-4xl md:text-5xl font-black text-foreground mb-2">
              12
            </p>
            <p className="text-muted-foreground uppercase tracking-wider text-sm">
              Projects Built
            </p>
          </div>
          <div className="text-center border-2 border-border px-6 py-6 rounded hover:border-primary transition-colors">
            <p className="text-4xl md:text-5xl font-black text-foreground mb-2">
              4
            </p>
            <p className="text-muted-foreground uppercase tracking-wider text-sm">
              Awards Won
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
