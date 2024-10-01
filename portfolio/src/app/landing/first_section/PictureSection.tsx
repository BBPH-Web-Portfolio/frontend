"use client";
import { useEffect, useState } from "react";
import { useImageStore } from "./store/UseImageStore";
import { DialogImage } from "./components/Images/DialogImage";
import { GetImage } from "./components/Images/GetImage";
import { GetTexts } from "./components/Texts/GetTexts";
import DialogText from "./components/Texts/DialogText";

const PictureSection = () => {
  const [token, setToken] = useState(false);
  const { imageUrl } = useImageStore();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) setToken(true);
  }, []);

  return (
    <section className="h-screen grid grid-cols-2 gap-4 text-black dark:text-color1 mt-[-5rem]">
      <section className="pt-40 relative">
        <GetTexts />
        <DialogText />
        {["PORTRAIT", "COMMERCIAL", "PERSONAL", "SOCIAL MEDIA"].map(
          (label, idx) => (
            <div
              key={label}
              className={`border-b border-black dark:border-white flex items-center h-[4rem] justify-between font-[Dmsans] text-[1.3rem] ${
                idx === 0 ? "mt-[8rem]" : ""
              }`}
            >
              <h2>{`0${idx + 1}`}</h2>
              <h2>{label}</h2>
            </div>
          )
        )}
      </section>

      <section className="flex justify-end relative">
        <GetImage />
        {token && <DialogImage />}
      </section>
    </section>
  );
};

export default PictureSection;
