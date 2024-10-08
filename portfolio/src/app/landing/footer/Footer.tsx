"use client";
import Image from "next/image";
import Logo from "../../../../public/media/logo_blanco.png";
import Logo_black from "../../../../public/media/logo_negro1.png";
import { useDarkMode } from "@/components/Navbar";
import TimeDisplay from "./components/Date";


const Footer = ( ) => {
  const { isDarkMode } = useDarkMode();
  const image = isDarkMode ? Logo : Logo_black;

  return (
    <section className="h-screen pt-20">
      <div className="w-[88%] mx-auto max-w-[100.75rem] text-black dark:text-color1 h-full">
        <div className="w-full flex justify-between items-center">
          <div>
            <h3 className="text-3xl">CONTACT ME</h3>
          </div>
          <div className="flex">
            <span className="text-4xl mr-5 font-[DmSansBold]">
              <TimeDisplay />
            </span>

            <div className="bg-black dark:bg-white w-[5rem] rounded-3xl text-color1 dark:text-black flex items-center justify-center">
              <span className="text-lg">COT</span>
            </div>
          </div>
        </div>

        <div className="h-full w-full flex justify-center items-center ">
          <Image
            src={image}
            alt="Logo"
            draggable={false}
            className="w-[35rem]"
          />
        </div>

        <div className="w-full flex justify-between items-center mt-[-5em]">
          <div>
            <h3 className="text-lg">brianbecerra@gmail.com</h3>
            <h3 className="text-lg">Cra. 77r #49-42, Bogotá, Colombia</h3>
          </div>

          <div className="flex">
            <span className="text-lg mr-5 ">Instagram</span>
            <span className="text-lg mr-5 ">Linkedin</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
