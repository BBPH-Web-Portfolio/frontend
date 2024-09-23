import Navbar from "../components/Navbar";
import Footer from "./landing/Footer";
import HeroSection from "./landing/HeroSection";
import LandScapeSection from "./landing/LandScapeSection";
import LastUpdates from "./landing/LastUpdates";
import PictureSection from "./landing/PictureSection";
import ServiceSection from "./landing/ServiceSection";

export default function Home() {
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
