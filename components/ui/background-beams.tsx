"use client";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  const beamsRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = beamsRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    canvas.width = windowWidth;
    canvas.height = windowHeight;

    const beams = Array.from({ length: 50 }, () => ({
      x: Math.random() * windowWidth,
      y: Math.random() * windowHeight,
      radius: Math.random() * 2 + 0.5,
      speedX: Math.random() * 0.4 - 0.2,
      speedY: Math.random() * 0.4 - 0.2,
    }));

    let animationFrameId: number;

    const render = () => {
      context.clearRect(0, 0, windowWidth, windowHeight);
      context.fillStyle = "rgba(255, 255, 255, 0.05)";

      beams.forEach((beam) => {
        context.beginPath();
        context.arc(beam.x, beam.y, beam.radius, 0, Math.PI * 2);
        context.fill();

        beam.x += beam.speedX;
        beam.y += beam.speedY;

        if (beam.x < 0 || beam.x > windowWidth) beam.speedX *= -1;
        if (beam.y < 0 || beam.y > windowHeight) beam.speedY *= -1;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={beamsRef}
      className={cn(
        "fixed inset-0 z-20 h-screen w-screen bg-transparent opacity-40",
        className
      )}
    />
  );
};

