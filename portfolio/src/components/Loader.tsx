"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export const Loader = () => {
  const loaderRef = useRef(null) ;

  useEffect(() => {
    if (!loaderRef.current) return;

    const element  = loaderRef.current as HTMLElement;
    const letters = element.querySelectorAll(".loading__letter") as NodeListOf<HTMLElement>;


    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

    tl.set(letters, { yPercent: 100, autoAlpha: 0 })
      .to(letters, {
        duration: 2,
        yPercent: 0,
        autoAlpha: 1,
        stagger: 0.1,
        ease: "expo.inOut",
      })
      .to(
        letters,
        {
          duration: 2,
          yPercent: -100,
          autoAlpha: 0,
          stagger: 0.1,
          ease: "expo.inOut",
        },
        "+=0.5"
      );
  }, []);

  return (
    <div
      ref={loaderRef}
      className="w-full h-screen flex items-center justify-center"
    >
      <p className="loading text-black dark:text-white text-[20vw] leading-[100%] tracking-[-1rem] overflow-hidden h-auto font-[mukta]">
        <span className="loading__letter inline-block">L</span>
        <span className="loading__letter inline-block">O</span>
        <span className="loading__letter inline-block">A</span>
        <span className="loading__letter inline-block">D</span>
        <span className="loading__letter inline-block">I</span>
        <span className="loading__letter inline-block">N</span>
        <span className="loading__letter inline-block">G</span>
      </p>
    </div>
  );
};
