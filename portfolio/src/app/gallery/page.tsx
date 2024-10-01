import Navbar from "@/components/Navbar";
import Link from "next/link";

const Gallery = () => {
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

        <section className="w-full h-[170vh]">
         
            <div className="grid grid-cols-6 grid-rows-2 gap-4">
              <div className="col-start-5 row-start-1 bg-green-400 h-[18rem]">
                5
              </div>
              <div className="col-span-2 row-span-2 col-start-3 row-start-1 bg-red-400">
                6
              </div>
              <div className="col-start-5 row-start-2 bg-blue-400">7</div>
              <div className="col-start-2 row-start-2 bg-pink-400">8</div>
            </div>

       
            <div className="grid grid-cols-6 grid-rows-3 gap-4 mt-[1rem]">
              <div className="bg-red-400 h-[18rem]">18</div>
              <div className="bg-blue-400">19</div>
              <div className="bg-green-400">20</div>
              <div className="bg-yellow-400">21</div>
              <div className="col-span-2 bg-pink-400">22</div>
              <div className="col-start-3 row-start-2 bg-pink-400">23</div>
              <div className="col-span-3 col-start-1 row-start-3 bg-orange-400 ">
                24
              </div>
              <div className="col-span-2 row-span-2 col-start-4 row-start-2 bg-blue-400 ">
                25
              </div>
              <div className="col-start-6 row-start-2 bg-green-400">26</div>
            </div>
        
        </section>
      </section>
    </>
  );
};

export default Gallery;
