"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import First_project from "../../../public/media/First_project.png";
import Second_project from "../../../public/media/Second_project.png";
import Third_project from "../../../public/media/Third_project.png";
import Image from "next/image";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useLayoutEffect } from "react";
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}


const LandScapeSection = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 800px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "+=300%",
            scrub: 2,
            pin: true,
            anticipatePin: 1,
          }
        });

        tl.to(sectionRef.current, {
          translateX: "-200vw",
          ease: "none",
          duration: 1,
        });

        return () => {
          tl.kill();
          ScrollTrigger.getAll().forEach(t => t.kill());
        };
      });

      return () => mm.revert();
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="overflow-hidden mt-[10rem]" ref={triggerRef}>
      <nav className="absolute flex justify-between w-screen h-[110rem] z-10 items-center p-16 font-[DmSansBold] text-lg ">
        <div className="flex relative">
          <span className="mix-blend-difference">1</span>
          <div className="border border-black w-40 h-0 mt-[13px] mx-5" />
          <span>3</span>
        </div>
        <div>Scroll to find my projects</div>
      </nav>

      <div ref={sectionRef} className="flex w-[300vw] h-screen">
        <div className="w-screen h-full flex justify-center items-center relative">
          <h2 className="text-white text-9xl absolute font-[Mukta] tracking-tight mix-blend-difference">
            VISIONNAIRE
          </h2>
          <Image
            src={First_project}
            alt="Project"
            draggable={false}
            className="object-cover h-full w-full"
          />
        </div>

        <div className="w-screen h-full flex justify-center items-center relative">
          <h2 className="text-white text-9xl absolute font-[Mukta] tracking-tight mix-blend-difference">
            PRESSURE
          </h2>
          <Image
            src={Second_project}
            alt="Project"
            draggable={false}
            className="object-cover h-full w-full"
          />
        </div>

        <div className="w-screen h-full flex justify-center items-center relative">
          <h2 className="text-white text-9xl absolute font-[Mukta] tracking-tight mix-blend-difference">
            ASSPEROUSE
          </h2>
          <Image
            src={Third_project}
            alt="Picture"
            draggable={false}
            className="object-cover h-full w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default LandScapeSection;