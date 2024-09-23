
"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import First_project from "../../../public/media/First_project.png";
import Second_project from "../../../public/media/Second_project.png";
import Third_project from "../../../public/media/Third_project.png";
import Image from "next/image";

const LandScapeSection = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const pin = gsap.to(sectionRef.current, {
      translateX: "-200vw",
      ease: "none",
      duration: 1,
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: "+=300%",
        scrub: 2,
        pin: true,
        anticipatePin: 1,
      },
    });

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <>
      <section className="overflow-hidden mt-[10rem]" ref={triggerRef}>
        <nav className="absolute flex justify-between w-screen h-[7rem] z-10 items-center p-16 font-[DmSansBold] text-lg ">
          <div className="flex relative">
            <span className="mix-blend-difference">1</span>

            <div className="border border-black w-40 h-0 mt-[13px] mx-5" />

            <span>3</span>
          </div>
          <div>Scroll to find my projects</div>
        </nav>

        <div ref={sectionRef} className="flex w-[300vw] h-screen">
          <div className="w-screen h-full flex justify-center items-center relative">
            <h2 className="text-white text-9xl absolute font-[Mukta] tracking-tight">
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
    </>
  );
};

export default LandScapeSection;
