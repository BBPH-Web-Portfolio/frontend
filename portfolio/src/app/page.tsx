"use client";
import Navbar from "../components/Navbar";
import Footer from "./landing/footer/Footer";
import HeroSection from "./landing/HeroSection";
import LandScapeSection from "./landing/LandScapeSection";
import LastUpdates from "./landing/LastUpdates";
import PictureSection from "./landing/first_section/PictureSection";
import ServiceSection from "./landing/ServiceSection";
import { Loader } from "@/components/Loader";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 5500);


    return () => clearTimeout(timer);
  }, []);

 
  if (loading) {
    return <Loader />;
  }


  return (
    <>
      <div className="w-[88%] mx-auto max-w-[90.75rem]">
        <Navbar />
        <HeroSection />
        <PictureSection />
      </div>
      <LandScapeSection />
      <div className="w-[88%] mx-auto max-w-[90.75rem]">
        <ServiceSection />
      </div>
      <LastUpdates />
      <Footer />
    </>
  );
}
