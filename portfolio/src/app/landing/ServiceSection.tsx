import Image from "next/image";
import Image_services from "../../../public/media/Image_services.png";
import { ArrowUp } from "lucide-react";
const ServiceSection = () => {
  return (
    <>
      <section className="mt-[3rem] h-screen grid grid-cols-2 grid-rows-1 gap-4 text-black dark:text-color1">
        <section className="pt-40">
          <h2 className="font-[DmsansBold] text-5xl">
            MY <br />
            SERVICES
            <br />
          </h2>

          <div className="grid grid-cols-2 grid-rows-2 mt-40 gap-x-4">
            <div className="border-y border-black dark:border-white flex h-auto flex-col w-[20rem] font-[DmSans]">
              <div className="py-4">
                <h2 className="text-2xl mb-2">CREATIVE</h2>
                <p className="text-md text-[#8B8B8B]">
                  We dive into concepts to find the one that suits best for a
                  persona / brand
                </p>
                <div className="flex items-center mt-4">
                  <div className="bg-black dark:bg-white h-[2rem] w-[2rem]  rounded-full flex items-center justify-center cursor-pointer">
                    {" "}
                    <ArrowUp className="text-white dark:text-black rotate-45" />{" "}
                  </div>
                  <span className="pl-4 cursor-pointer">ABOUT CREATIVE</span>
                </div>
              </div>
            </div>

            <div className="border-y border-black dark:border-white flex h-auto flex-col w-[20rem] font-[DmSans]">
              <div className="py-4">
                <h2 className="text-2xl mb-2">LIGHTING STUDIO</h2>
                <p className="text-md text-[#8B8B8B]">
                  Shaping an idea on paper brings the best campaigns
                </p>
                <div className="flex items-center mt-4">
                  <div className="bg-black dark:bg-white h-[2rem] w-[2rem]  rounded-full flex items-center justify-center cursor-pointer">
                    {" "}
                    <ArrowUp className="text-white dark:text-black rotate-45" />{" "}
                  </div>
                  <span className="pl-4 cursor-pointer">ABOUT LIGHTING</span>
                </div>
              </div>
            </div>

            <div className="border-b border-black dark:border-white flex h-auto flex-col w-[20rem] font-[DmSans]">
              <div className="py-4">
                <h2 className="text-2xl mb-2">EQUIPMENT</h2>
                <p className="text-md text-[#8B8B8B]">
                  Tech Equipment i s so important to create good ideas
                </p>
                <div className="flex items-center mt-4">
                  <div className="bg-black dark:bg-white h-[2rem] w-[2rem]  rounded-full flex items-center justify-center cursor-pointer">
                    {" "}
                    <ArrowUp className="text-white dark:text-black rotate-45" />{" "}
                  </div>
                  <span className="pl-4 cursor-pointer">ABOUT EQUIPMENT</span>
                </div>
              </div>
            </div>

            <div className="border-b border-black dark:border-white flex h-auto flex-col w-[20rem] font-[DmSans]">
              <div className="py-4">
                <h2 className="text-2xl mb-2">CREW ON OF SET</h2>
                <p className="text-md text-[#8B8B8B]">
                  Teams to work hand in hand to achieve something impressive
                </p>
                <div className="flex items-center mt-4">
                  <div className="bg-black dark:bg-white h-[2rem] w-[2rem]  rounded-full flex items-center justify-center cursor-pointer">
                    <ArrowUp className="text-white dark:text-black rotate-45" />{" "}
                  </div>
                  <span className="pl-4 cursor-pointer">
                    ABOUT CREW ON OF SET
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex justify-center relative items-center">
          <Image
            src={Image_services}
            alt="Picture"
            draggable={false}
            className="w-[33vw] h-[45rem] object-cover"
          />
        </section>
      </section>
    </>
  );
};

export default ServiceSection;
