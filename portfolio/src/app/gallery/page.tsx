"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { fetchImagesUrl } from "./hooks/FetchImages";
import { useImageStore } from "./store/UseImageGallery";
import { DialogImageGallery } from "./components/DialogImageGallery";
import { DialogAdd } from "./components/DialogAdd";

const Gallery = () => {
  const [token, setToken] = useState(false);
  const { setImageData, getOrderedImages } = useImageStore();
  const orderedImages = getOrderedImages();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) setToken(true);
  }, []);

  useEffect(() => {
    const loadImages = async () => {
      const fetchedImages = await fetchImagesUrl();
      if (fetchedImages) {
        setImageData(fetchedImages);
      }
      setIsLoading(false);
    };
    loadImages();
  }, [setImageData]);

  if (isLoading) return <div></div>;

  return (
    <>
      <section className="w-[88%] mx-auto max-w-[90.75rem]">
        <Navbar />
        <section className="h-[70vh] flex justify-center">
          <div>
            <h1 className="Title text-[13rem] text-black dark:text-color1 font-[Mukta] leading-[6rem] mt-[15rem]">
              <span className="tracking-tight">GALLERY</span>
            </h1>
            <div className="flex flex-col w-full ml-[26rem] mt-[4rem] text-black dark:text-color1 font-[DmSansMedium] text-xl">
              <Link href="/gallery/portrait">PORTRAIT</Link>
              <Link href="/gallery/commercial" className="text-[#8B8B8B]">
                COMMERCIAL
              </Link>
              <Link href="gallery/raw" className="text-[#8B8B8B]">
                RAW
              </Link>
            </div>
          </div>
        </section>

        <section className="w-full h-auto mb-[5rem]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {orderedImages.map((image) => (
              <div
                key={image.id}
                className="overflow-hidden  relative"
              >
                <img
                  src={image.url}
                  alt={image.alt || `Image ${image.id}`}
                  className="w-full h-auto transition-transform duration-300 transform hover:scale-105"
                  width={image.width}
                  height={image.height}
                />
                {token && (
                  <DialogImageGallery
                    id={image.id}
                    width={image.width}
                    height={image.height}
                  />
                )}
              </div>
            ))}
            {token && (
              <div className=" flex justify-center items-center overflow-hidden rounded-lg relative bg-[#8b8b8b33] hover:scale-105 transition-transform duration-300">
                <DialogAdd />
              </div>
            )}
          </div>
        </section>
      </section>
    </>
  );
};

export default Gallery;
