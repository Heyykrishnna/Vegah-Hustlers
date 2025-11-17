import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, Github, User } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export const JoinUs = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current?.children || [], {
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 75%",
          end: "top 30%",
          scrub: 1,
        },
        y: 60,
        opacity: 0,
        stagger: 0.15,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="join"
      ref={sectionRef}
      className="min-h-screen py-24 md:py-32 px-6 bg-secondary/20 flex items-center"
    >
      <div className="max-w-4xl mx-auto text-center w-full">
        <div ref={contentRef} className="space-y-12">
          <div>
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter mb-6">
              <span className="text-muted-foreground">[</span> JOIN THE HUSTLE <span className="text-muted-foreground">]</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-2xl mx-auto">
              Are you ready to build something extraordinary? We're always looking for passionate hustlers to join our crew.
            </p>
          </div>
          
          <div className="bg-card border-2 border-primary p-8 md:p-12 rounded">
            <p className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              THINK YOU HAVE WHAT IT TAKES?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://forms.gle/8ccLNVPdWHFXWdon9" target="_blank">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wider text-base px-8 py-6 group"
                >
                  <User className="h-5 w-5 mr-2" />
                  BECOME A MEMBER
                </Button>
              </a>
              <a href="https://github.com/Heyykrishnna" target="_blank">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold uppercase tracking-wider text-base px-8 py-6"
                >
                  <Github className="h-5 w-5 mr-2" />
                  View Our Work
                </Button>
              </a>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 pt-8">
            <div className="bg-card border border-border p-6 rounded">
              <Mail className="h-8 w-8 text-primary mb-4 mx-auto" />
              <p className="text-muted-foreground font-medium uppercase tracking-wider text-sm">
                Email Us
              </p>
              <p className="text-foreground font-bold mt-2">
              vegah.team@gmail.com
              </p>
            </div>
            
            <div className="bg-card border border-border p-6 rounded">
              <MessageSquare className="h-8 w-8 text-primary mb-4 mx-auto" />
              <p className="text-muted-foreground font-medium uppercase tracking-wider text-sm">
                Discord
              </p>
              <p className="text-foreground font-bold mt-2">
                /vegah-hustlers
              </p>
            </div>
            
            <div className="bg-card border border-border p-6 rounded">
              <Github className="h-8 w-8 text-primary mb-4 mx-auto" />
              <p className="text-muted-foreground font-medium uppercase tracking-wider text-sm">
                GitHub
              </p>
              <p className="text-foreground font-bold mt-2">
                @Heyykrishnna
              </p>
            </div>
          </div>
          
          <div className="pt-12 border-t border-border">
            <p className="text-9xl md:text-9xl font-black text-primary">
              VEGAH
            </p>
            <p className="text-muted-foreground mt-4 uppercase tracking-wider">
              © 2025 The Hustlers. All rights reserved.
            </p>
          </div>
        </div>
      </div>
      
    </section>
  );
};
