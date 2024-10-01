import Navbar from "@/components/Navbar";
import Image from "next/image";

const About = () => {
  return (
    <>
      <section className="w-[88%] mx-auto max-w-[90.75rem]">
        <Navbar />
        <section className=" text-black dark:text-white flex  h-screen items-center">
          <div className="grid grid-cols-2 grid-rows-1 gap-4 mt-[3rem]">
            <div>
              <h2 className="text-[5rem] font-[mukta] mb-[-3rem]">
                I CREATE DIGITAL
              </h2>
              <h2 className="text-[5rem] mb-4 font-[Mukta]">FUTURE.</h2>

              <p className="mt-[17.4rem] text-xl">
                <span className="mb-10 font-[mukta] text-4xl">WHO IS BBPH</span><br/> <br/>
                With a focus on innovation and cutting-edge technology, I bring
                digital visions to life. My work spans across various platforms,
                creating seamless and impactful digital experiences. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Aenean et vulputate
                est. Fusce euismod eget ipsum in tincidunt. Aenean vitae elit
                ullamcorper, pellentesque ipsum nec, tincidunt.
              </p>
            </div>
            <div className="flex justify-center">
              {" "}
              <Image
                src="https://i.pinimg.com/564x/c7/30/92/c73092f305c1dbde1c5d5605e537a81d.jpg"
                alt="Portrait of a person"
                width={10000}
                height={10000}
                className="w-[30rem] h-[43rem] object-cover transition-transform duration-300 transform hover:scale-105"
              />
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default About;
