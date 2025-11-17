import { useEffect, useRef } from "react";

export const LiquidChromeHeader = () => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = canvasRef.current;
    if (!element) return;

    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width) * 100;
      mouseY = ((e.clientY - rect.top) / rect.height) * 100;
    };

    element.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;
      
      element.style.setProperty("--mouse-x", `${targetX}%`);
      element.style.setProperty("--mouse-y", `${targetY}%`);
      
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div 
      ref={canvasRef}
      className="liquid-chrome-container relative w-full h-screen overflow-hidden"
      style={{
        "--mouse-x": "50%",
        "--mouse-y": "50%",
      } as React.CSSProperties}
    >
      <div className="liquid-chrome absolute inset-0 opacity-20" />
      <div 
        className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-background/80"
        style={{
          background: `radial-gradient(
            circle at var(--mouse-x) var(--mouse-y),
            transparent 0%,
            hsl(var(--background) / 0.3) 50%,
            hsl(var(--background) / 0.9) 100%
          )`
        }}
      />
    </div>
  );
};
