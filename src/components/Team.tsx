import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import member1 from "@/assets/member1.png";
import member2 from "@/assets/member2.png";
import member3 from "@/assets/member3.png";
import member4 from "@/assets/member4.jpeg";
import member5 from "@/assets/member5.png";

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
  {
    name: "Yatharth Khandelwal",
    role: "Full-Stack Dev & Team Manager",
    image: member1,
    skills: ["React", "Node.js", "TypeScript", "AWS", "Docker", "TypeScript"],
    bio: "Leads the team with 3 years of development experience. Specializes in scalable architectures.",
    social: {
      github: "https://github.com/Heyykrishnna",
      linkedin: "https://www.linkedin.com/in/yatharth-khandelwal-krishna/",
      email: "yatharth.k25530@nst.rishihood.edu.in",
    },
  },
  {
    name: "Meghna Nair",
    role: "Frontend Developer",
    image: member2,
    skills: ['React', 'HTML & CSS', 'JavaScript', "UI/UX", "Talwind CSS"],
    bio: "Frontend wizard who ensures everything runs smoothly. UI optimization expert.",
    social: {
      github: "/",
      linkedin: "https://www.linkedin.com/in/meghna-nair-159458227/",
      email: "meghnanair7569@gmail.com",
    },
  },
  {
    name: "Priyanshu Sharma",
    role: "Frontend Dev & Researcher",
    image: member3,
    skills: ["React", "Next.JS", "JavaScript", "GSAP", "Research"],
    bio: "Frontend and research expert focused on seamless performance and innovation.",
    social: {
      github: "https://github.com/priyanshusharma99",
      linkedin: "https://www.linkedin.com/in/priyanshu-sharma-7356b0380/",
      email: "priyanshu.s25358@nst.rishihood.edu.in",
    },
  },
  {
    name: "Vanshika Rajoria",
    role: "Presenter",
    image: member4,
    skills: ['Engaging Presentation', 'Clear Communication', 'Audience Connection'],
    bio: "Dynamic presenter skilled in storytelling, clear communication, audience engagement and strong stage presence..",
    social: {
      github: "/",
      linkedin: "/",
      email: "rajoriavanshika128@gmail.com",
    },
  },
  {
    name: "Anurag Sonawane",
    role: "AI Integrator",
    image: member5,
    skills: ["Rest API", "Python", "JavaScript", "OpenAI"],
    bio: "Builds intelligent AI-driven systems that elevate user experiences.",
    social: {
      github: "https://github.com/EditHive",
      linkedin: "https://www.linkedin.com/in/anurag-sonawane-981011380/",
      email: "anurag.s25561@nst.rishihood.edu.in",
    },
  },
  {
    name: "Ishita Neeraj Sharma",
    role: "Coder, Presenter and PPT Designer",
    image: member4,
    skills: ["Debugging", "PPT Designing", "Communication", "Versatile"],
    bio: "A powerhouse of exceptional coding talent fused with a beautifully imaginative design mind.",
    social: {
      github: "/",
      linkedin: "https://www.linkedin.com/in/ishita-neeraj-sharma-a3ab2237a/",
      email: "ishitasharma2490@gmail.com",
    },
  },
];

export const Team = () => {
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
        x: -100,
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
      id="team"
      ref={sectionRef}
      className="min-h-screen py-24 md:py-32 px-6 bg-background"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          ref={titleRef}
          className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter mb-8"
        >
          <span className="text-muted-foreground">[</span> MEET THE HUSTLERS{" "}
          <span className="text-muted-foreground">]</span>
        </h2>
        
        <p className="text-lg text-muted-foreground mb-16 max-w-3xl">
          Five ambitious individuals united by passion for technology and drive to create impact.
        </p>

        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-card border-2 border-border hover:border-primary rounded overflow-hidden transition-all duration-300 hover:scale-105"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-black uppercase tracking-tight text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-4">
                  {member.role}
                </p>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {member.bio}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {member.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-secondary border border-border text-foreground text-xs font-medium rounded uppercase tracking-wider"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2 pt-4 border-t border-border">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() => window.open(member.social.github, "_blank")}
                  >
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() => window.open(member.social.linkedin, "_blank")}
                  >
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() => window.open(`mailto:${member.social.email}`, "_blank")}
                  >
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl font-bold text-foreground uppercase tracking-wider mb-4">
            Want to Join the Team?
          </p>
          <p className="text-muted-foreground mb-6">
            We're always looking for talented hustlers to join our crew.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wider"
            onClick={() => {
              const joinSection = document.getElementById("join");
              joinSection?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};
