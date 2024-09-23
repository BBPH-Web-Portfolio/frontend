import Image from "next/image";
import First from "../../../public/media/First_image.png";

const PictureSection = () => {
  return (
    <section className="h-screen grid grid-cols-2 grid-rows-1 gap-4 text-black dark:text-color1 mt-[-5rem]">
      <section className="pt-40">
        <h2 className="font-[DmsansBold] text-5xl">
          AI TOLD ME PEOPLE <br />
          TO GOOD BRANDS <br />
          PAYS MORE ATTENTION <br />
        </h2>
        <p className="text-[1.3rem] pt-[4rem] font-[Dmsans]">
          But, what makes a brand a food brand? know <br />
          your core values and find a way to tell this to <br />
          everyone.
        </p>

        <div className="border-b border-black dark:border-white mt-[8rem] flex items-center h-[4rem] justify-between font-[Dmsans] text-[1.3rem]">
          <h2>01</h2>
          <h2>PORTRAIT</h2>
        </div>

        <div className="border-b border-black dark:border-white flex items-center h-[4rem] justify-between font-[Dmsans] text-[1.3rem]">
          <h2>02</h2>
          <h2>COMMERCIAL</h2>
        </div>

        <div className="border-b border-black dark:border-white flex items-center h-[4rem] justify-between font-[Dmsans] text-[1.3rem]">
          <h2>03</h2>
          <h2>PERSONAL</h2>
        </div>

        <div className=" flex items-center h-[4rem] justify-between font-[Dmsans] text-[1.3rem]">
          <h2>04</h2>
          <h2>SOCIAL MEDIA</h2>
        </div>
      </section>

      <section className="flex justify-end relative">
        <Image
          src={First}
          alt="Picture"
          draggable={false}
          className="w-[33vw] h-[65rem] absolute bottom-0 object-cover"
        />
      </section>
    </section>
  );
};

export default PictureSection;
