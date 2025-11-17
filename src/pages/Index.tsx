import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Achievements } from "@/components/Achievements";
import { Projects } from "@/components/Projects";
import { Timeline } from "@/components/Timeline";
import { Team } from "@/components/Team";
import { Testimonials } from "@/components/Testimonials";
import { JoinUs } from "@/components/JoinUs";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { Cursor } from "@/components/ui/inverted-cursor";

const Index = () => {
  useSmoothScroll();

  return (
    <div className="relative">
      <Navbar />
      <main>
        <Cursor />
        <Hero />
        <About />
        <Achievements />
        <Projects />
        <Timeline />
        <Team />
        <Testimonials />
        <JoinUs />
      </main>
    </div>
  );
};

export default Index;
