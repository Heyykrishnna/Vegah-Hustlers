import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { Menu } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl md:text-2xl font-bold tracking-tight">
            <span className="text-foreground">VEGAH</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("achievements")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider"
            >
              Achievements
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("journey")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider"
            >
              Journey
            </button>
            {/* <button
              onClick={() => scrollToSection("team")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider"
            >
              Team
            </button> */}
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider text-left"
            >
              Testimonials
            </button>
            <ThemeToggle />
            <Button
              onClick={() => scrollToSection("join")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold uppercase tracking-wider"
            >
              Join Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-6 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("achievements")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider text-left"
            >
              Achievements
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider text-left"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("journey")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider text-left"
            >
              Journey
            </button>
            {/* <button
              onClick={() => scrollToSection("team")} 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider text-left"
            >
              Team
            </button> */}
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider text-left"
            >
              Testimonials
            </button>
            <Button
              onClick={() => scrollToSection("join")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold uppercase tracking-wider w-full"
            >
              Join Us
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
