"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import Logo from "../../public/media/logo_blanco.png";
import Logo_black from "../../public/media/logo_negro1.png";
import { create } from "zustand";

interface DarkModeState {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  setDarkMode: (mode: boolean) => void;
}

export const useDarkMode = create<DarkModeState>((set) => ({
  isDarkMode: false,
  toggleDarkMode: () => {
    set((state) => ({ isDarkMode: !state.isDarkMode }));
  },
  setDarkMode: (mode) => {
    set(() => ({ isDarkMode: mode }));
  },
}));

const Navbar = () => {
  const { isDarkMode, toggleDarkMode, setDarkMode } = useDarkMode();

  //verifica si hay un tema guardado en localStorage

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
      document.body.classList.add("bg-[#141414]");
    } else {
      document.body.classList.add("bg-white");
    }
  }, [setDarkMode]);

  //cambia el tema

  const handleThemeChange = () => {
    toggleDarkMode();
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
      document.body.classList.replace("bg-white", "bg-[#141414]");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.replace("bg-[#141414]", "bg-white");
      localStorage.setItem("theme", "light");
    }
  };

  const image = isDarkMode ? Logo : Logo_black;

  return (
    <nav className="text-black dark:text-white pt-10">  
      <div className="flex justify-between">
        <div className="hidden md:flex">
          <Link href="/" className="mr-[10vw] cursor-none">
            HOME
          </Link>
          <Link href="#" className="">
            ABOUT
          </Link>
        </div>
        <div className="relative w-[160px]">
          <Image
            src={image}
            alt="Logo"
            draggable={false}
            className="pt-0 md:mt-7 absolute"
          />
        </div>
        <div className="hidden md:flex">
          <Link href="/gallery" className="mr-[10vw]">
            GALLERY
          </Link>
          <Link href="#" className="" onClick={handleThemeChange}>
            {isDarkMode ? "LIGHT" : "DARK"}
          </Link>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <button className="md:hidden">
              <Menu className="h-[3.8rem] w-[3rem]" />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="border-none text-black dark:text-color1"
          >
            <nav className="flex flex-col text-black dark:text-color1 text-lg pt-10">
              <Link
                href="#"
                className="text-lg p-10 text-center border-y border-white"
              >
                HOME
              </Link>
              <Link href="#" className="text-lg p-10 text-center">
                ABOUT
              </Link>
              <Link href="#" className="text-lg p-10 text-center">
                GALLERY
              </Link>
              <Link
                href="#"
                className="text-lg p-10 text-center"
                onClick={handleThemeChange}
              >
                {isDarkMode ? "LIGHT" : "DARK"}
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;


// estilos para la navbar fija fixed w-[86%] max-w-[90.75rem] z-10