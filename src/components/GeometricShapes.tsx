import { useEffect, useRef } from "react";

interface Shape {
  x: number;
  y: number;
  size: number;
  type: "triangle" | "square" | "hexagon" | "line";
  rotation: number;
  rotationSpeed: number;
  speedX: number;
  speedY: number;
  color: string;
  opacity: number;
  strokeWidth: number;
}

const SHAPE_COLORS = [
  "#FF6B35",
  "#F7931E",
  "#00FF88",
  "#00D9FF",
  "#A459D1",
  "#FF0080",
  "#FFE66D",
];

export const GeometricShapes = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const shapesRef = useRef<Shape[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize shapes
    const shapeCount = 25;
    shapesRef.current = Array.from({ length: shapeCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 60 + 30,
      type: ["triangle", "square", "hexagon", "line"][
        Math.floor(Math.random() * 4)
      ] as Shape["type"],
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.02,
      speedX: (Math.random() - 0.5) * 1.5,
      speedY: (Math.random() - 0.5) * 1.5,
      color: SHAPE_COLORS[Math.floor(Math.random() * SHAPE_COLORS.length)],
      opacity: Math.random() * 0.3 + 0.2,
      strokeWidth: Math.random() * 3 + 2,
    }));

    const drawTriangle = (
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number
    ) => {
      ctx.beginPath();
      ctx.moveTo(x, y - size / 2);
      ctx.lineTo(x - size / 2, y + size / 2);
      ctx.lineTo(x + size / 2, y + size / 2);
      ctx.closePath();
    };

    const drawSquare = (
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number
    ) => {
      ctx.beginPath();
      ctx.rect(x - size / 2, y - size / 2, size, size);
    };

    const drawHexagon = (
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number
    ) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i;
        const hx = x + size * Math.cos(angle);
        const hy = y + size * Math.sin(angle);
        if (i === 0) ctx.moveTo(hx, hy);
        else ctx.lineTo(hx, hy);
      }
      ctx.closePath();
    };

    const drawLine = (
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number
    ) => {
      ctx.beginPath();
      ctx.moveTo(x - size, y);
      ctx.lineTo(x + size, y);
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      shapesRef.current.forEach((shape) => {
        // Update position
        shape.x += shape.speedX;
        shape.y += shape.speedY;
        shape.rotation += shape.rotationSpeed;

        // Wrap around edges
        if (shape.x < -100) shape.x = canvas.width + 100;
        if (shape.x > canvas.width + 100) shape.x = -100;
        if (shape.y < -100) shape.y = canvas.height + 100;
        if (shape.y > canvas.height + 100) shape.y = -100;

        // Draw shape
        ctx.save();
        ctx.translate(shape.x, shape.y);
        ctx.rotate(shape.rotation);

        // Glow effect
        ctx.shadowBlur = 30;
        ctx.shadowColor = shape.color;
        ctx.strokeStyle = shape.color;
        ctx.lineWidth = shape.strokeWidth;
        ctx.globalAlpha = shape.opacity;

        switch (shape.type) {
          case "triangle":
            drawTriangle(ctx, 0, 0, shape.size);
            break;
          case "square":
            drawSquare(ctx, 0, 0, shape.size);
            break;
          case "hexagon":
            drawHexagon(ctx, 0, 0, shape.size / 2);
            break;
          case "line":
            drawLine(ctx, 0, 0, shape.size);
            break;
        }

        ctx.stroke();
        ctx.restore();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ mixBlendMode: "screen" }}
    />
  );
};
