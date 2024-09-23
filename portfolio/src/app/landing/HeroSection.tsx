const HeroSection = () => {
  return (
    <section className="h-screen flex items-center justify-center relative">
      <h1 className="Title text-[8rem] text-black dark:text-color1 font-[Mukta] leading-[6rem] ">
        <span className="tracking-tight ml-[4.7rem]">LIGHTHIN IS</span>
        <br />
        <span className="">EVERYTHING</span>
      </h1>

      <span className="absolute text-[#8B8B8B] right-[0rem] text-right">
        Scroll down to <br />
        find why
      </span>
      <span className="absolute text-[#8B8B8B] left-[0rem] bottom-32">
        Our services are not
        <br /> cheap, but they are
        <br /> fully justified
      </span>
    </section>
  );
};

export default HeroSection;
