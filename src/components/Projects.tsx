import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "QuizOasis",
    category: "AI / Education",
    description: "An AI-powered personalized learning platform that adapts to individual student needs using machine learning algorithms. Features include adaptive quizzes, real-time progress tracking, intelligent content recommendations, and multi-language support.",
    tech: ["Python", "TensorFlow", "React", "FastAPI", "PostgreSQL", "Redis", "TypeScript", "Node.JS", "Mongo.DB"],
    year: "2025",
    demo: "https://quizoasis.vercel.app/",
    stats: "10K+ users • 95% satisfaction",
  },
  {
    title: "OpenFuse",
    category: "AI / Open Source",
    description: "Open-source contribution to a decentralized voting system on Ethereum, designed to enhance transparency and security in elections. This project helps the community explore and audit blockchain-based voting solutions, and includes AI-powered tools for discovering and analyzing relevant open-source repositories.",
    tech: ["GIT", "TensorFlow", "Next.js", "Web3.js", "OAuth", "React", "FastAPI", "Node.JS", "Mongo.db","Oauth"],
    year: "2025",
    demo: "https://openfuse-nst.vercel.app/",
    stats: "50+ successful contributions • 2K+ users",
  },
  {
    title: "GreenPath",
    category: "Sustainability / Mobile",
    description: "Climate action tracking mobile app that gamifies sustainable lifestyle choices and carbon footprint reduction. Users earn points for eco-friendly actions, compete with friends, track their environmental impact, and receive personalized sustainability tips. Top 10 finalist at HackMIT 2023.",
    tech: ["React Native", "Node.js", "MongoDB", "Firebase", "Maps API", "Chart.js", "Oauth", "Next.JS"],
    year: "2024",
    github: "/",
    demo: "https://thegreenpath.in/",
    stats: "3K+ downloads • 500+ active users",
  },
  {
    title: "HealthBridge",
    category: "Healthcare / AQI",
    description: "Telemedicine platform connecting rural patients with doctors using WebRTC for video consultations and AI for preliminary diagnostics. Features appointment scheduling, prescription management, medical records storage, and multi-language support. 2nd Place at Google Solution Challenge.",
    tech: ["React", "WebRTC", "Node.js", "Socket.io", "TensorFlow.js", "AWS", "API Fetching"],
    year: "2024",
    demo: "https://hospital-psi-nine.vercel.app/",
    stats: "500+ consultations • 100+ doctors",
  },
];

export const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

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

      const items = projectsRef.current?.children || [];
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
      id="projects"
      ref={sectionRef}
      className="min-h-screen py-24 md:py-32 px-6 bg-background"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          ref={titleRef}
          className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter mb-16"
        >
          <span className="text-muted-foreground">[</span> PROJECTS <span className="text-muted-foreground">]</span>
        </h2>
        
        <div ref={projectsRef} className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card border-l-4 border-primary hover:border-accent p-8 md:p-10 transition-all duration-300 hover:bg-secondary/30"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2 flex-wrap">
                    <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-foreground group-hover:text-red-400 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-sm text-muted-foreground font-bold uppercase tracking-wider">
                      / {project.year}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <p className="text-primary font-semibold uppercase tracking-wider text-sm">
                      {project.category}
                    </p>
                    <span className="text-muted-foreground">•</span>
                    <p className="text-muted-foreground text-sm font-medium">
                      {project.stats}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 flex-shrink-0">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() => window.open(project.demo, "_blank")}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-secondary border border-border text-foreground text-sm font-medium rounded uppercase tracking-wider"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
