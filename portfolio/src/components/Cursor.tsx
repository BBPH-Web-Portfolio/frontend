"use client";
import React, { useEffect, useRef, useState } from "react";
import { useDarkMode } from "./Navbar"; 


interface Props {
  children: React.ReactNode;
}

const Cursor: React.FC<Props> = ({ children }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
const { isDarkMode } = useDarkMode();



  useEffect(() => {

    const cursorColor = isDarkMode ? "#ffffff" : "#000000";
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let mouseMoved = false;
    let animationFrameId: number;

    const pointer = {
      x: 0.5 * window.innerWidth,
      y: 0.5 * window.innerHeight,
    };

    const params = {
      pointsNumber: 40,
      widthFactor: 0.3,
      mouseThreshold: 0.6,
      spring: 0.4,
      friction: 0.5,
    };

    type Point = { x: number; y: number; dx: number; dy: number };

    const trail: Point[] = new Array(params.pointsNumber)
      .fill(null)
      .map(() => ({
        x: pointer.x,
        y: pointer.y,
        dx: 0,
        dy: 0,
      }));

    const updateMousePosition = (eX: number, eY: number) => {
      pointer.x = eX;
      pointer.y = eY;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseMoved = true;
      updateMousePosition(e.clientX, e.clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      mouseMoved = true;
      updateMousePosition(e.touches[0].clientX, e.touches[0].clientY);
    };

    const setupCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const update = (t: number) => {
      if (!mouseMoved) {
        pointer.x =
          (0.5 + 0.3 * Math.cos(0.002 * t) * Math.sin(0.005 * t)) *
          window.innerWidth;
        pointer.y =
          (0.5 + 0.2 * Math.cos(0.005 * t) + 0.1 * Math.cos(0.01 * t)) *
          window.innerHeight;
      }

      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      trail.forEach((p, pIdx) => {
        const prev = pIdx === 0 ? pointer : trail[pIdx - 1];
        const spring = pIdx === 0 ? 0.4 * params.spring : params.spring;
        p.dx += (prev.x - p.x) * spring;
        p.dy += (prev.y - p.y) * spring;
        p.dx *= params.friction;
        p.dy *= params.friction;
        p.x += p.dx;
        p.y += p.dy;
      });

      ctx.lineCap = "round";
      ctx.strokeStyle = cursorColor;
      ctx.beginPath();
      ctx.moveTo(trail[0].x, trail[0].y);

      for (let i = 1; i < trail.length - 1; i++) {
        const xc = 0.5 * (trail[i].x + trail[i + 1].x);
        const yc = 0.5 * (trail[i].y + trail[i + 1].y);
        ctx.quadraticCurveTo(trail[i].x, trail[i].y, xc, yc);
        ctx.lineWidth = params.widthFactor * (params.pointsNumber - i);
        ctx.stroke();
      }

      ctx.lineTo(trail[trail.length - 1].x, trail[trail.length - 1].y);
      ctx.stroke();

      animationFrameId = window.requestAnimationFrame(update);
    };

    setupCanvas();
    update(0);

    window.addEventListener("resize", setupCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("resize", setupCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, [ isDarkMode ]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className=" fixed top-0 left-0 z-50 pointer-events-none"
      ></canvas>
      {children}
    </>
  );
};

export default Cursor;
