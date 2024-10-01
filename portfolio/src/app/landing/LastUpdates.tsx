import Image from "next/image";
import First_project from "../../../public/media/First_project.png";

const LastUpdates = () => {
  return (
    <>
      <div className="h-[110vh] border-y border-black dark:border-white mt-10 text-black dark:text-color1">
        <div className="w-[88%] mx-auto max-w-[100.75rem]">
          <div className="w-full flex items-center justify-center mt-20">
            <h2 className="font-[DmsansBold] text-5xl">LATEST UPDATES</h2>
          </div>

          <div className="grid grid-cols-4 grid-rows-1 gap-0 mt-[5rem]">
            <div className="flex flex-col border-r border-black dark:border-white h-[40rem]">
              <section className="p-3 pr-5">
                <div>
                  <h3 className="text-2xl font-[DmSansBold] pb-5">
                    LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING
                  </h3>
                  <p className="text-md pb-5">
                    Duis euismod tempus sem, nec mollis ex faucibus et. Nulla
                    porttitor posuere neque.
                  </p>
                  <p>
                    Vitae maximus mauris mollis et. Cras suscipit nisi quis ex
                    sollicitudin rhoncus.
                  </p>
                </div>

                <div className="pt-5 flex">
                  <div className="border border-black dark:border-white w-full">
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-[DmSansBold] py-5">
                    CURABITUR UT IPSUM VITAE ARCU PLACERAT EFFICITUR
                  </h3>
                  <p className="text-md pb-5">
                    Duis euismod tempus sem, nec mollis ex faucibus et. Nulla
                    porttitor posuere neque.
                  </p>
                  <p>
                    Vitae maximus mauris mollis et. Cras suscipit nisi quis ex
                    sollicitudin rhoncus.
                  </p>
                  <p className="pt-5">
                    Aliquam blandit quam eget cursus finibus. Nulla efficitur,
                    arcu sit amet pellentesque ultricies. Pellentesque quis
                    bibendum neque, in hendrerit ligula. Ut eget diam eros.
                  </p>
                </div>
              </section>
            </div>

            <div className="flex flex-col border-r border-black dark:border-white h-[40rem]">
              <section className="p-5">
                <div>
                  <Image
                    src={First_project}
                    alt="Project"
                    draggable={false}
                    className="object-cover h-[15rem] w-full"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-[DmSansBold] py-5">
                    LOREM IPSUM DOLOR SIT, CONSECTETUR ADIPISCING
                  </h3>
                  <p className="text-md pb-5">
                    Phasellus auctor lorem non felis maximus pulvinar. Quisque
                    nibh erat, pretium a commodo pellentesque, malesuada nec
                    diam. Etiam rhoncus sollicitudin hendrerit. Nunc in dolor id
                    eros scelerisque eleifend et nec velit.
                  </p>
                  <p className="text-md pb-5">
                    Aliquam blandit quam eget cursus finibus. Nulla efficitur,
                    arcu sit amet pellentesque ultricies, massa sapien rhoncus
                    enim, eget luctus orci nisi eget tortor. Pellentesque quis
                    bibendum neque, in hendrerit ligula. Ut eget diam eros.
                  </p>
                </div>
              </section>
            </div>

            <div className="flex flex-col border-r border-black dark:border-white h-[40rem]">
              <section className="p-5">
                <div>
                  <Image
                    src={First_project}
                    alt="Project"
                    draggable={false}
                    className="object-cover h-[10rem] w-full"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-[DmSansBold] py-5">
                    NAM SODALES LUCTUS FERMENTUM. PRAESENT NON EST PELLENTESQUE,
                    EGESTAS ODIO SIT AMET
                  </h3>
                  <p className="text-md pb-5">
                    Nibh erat, pretium a commodo pellentesque, malesuada nec
                  </p>
                  <Image
                    src={First_project}
                    alt="Project"
                    draggable={false}
                    className="object-cover h-[7rem] w-full"
                  />
                  <p className="text-md pt-5">
                    Pellentesque quis bibendum neque, in hendrerit ligula
                    malesuada nec eget luctus.
                  </p>
                </div>
              </section>
            </div>

            <div className="flex flex-col border-r border-black dark:border-white h-[40rem]">
              <section className="p-5">
                <div>
                  <h3 className="text-2xl font-[DmSansBold] pb-5">
                    MORBI VOLUTPAT EFFICITUR FINIBUS. PELLENTESQUE HABITANT
                    MORBI TRISTIQUE
                  </h3>
                  <p className="text-md">
                    Proin tempor luctus arcu ac interdum. Etiam rutrum at enim
                    finibus pulvinar. In iaculis tortor nunc, ut convallis
                    tellus laoreet in. Quisque lacinia urna non dui ullamcorper,
                    eu lacinia libero molestie.
                  </p>
                </div>

                <div className="pt-5 flex">
                  <div className="h-0 w-full border border-black dark:border-white"></div>
                </div>

                <div>
                  <h3 className="text-2xl font-[DmSansBold] py-5">
                    ALIQUAM CONGUE MAURIS SIT AMET FEUGIAT PORTA.
                  </h3>
                  <p className="text-md">
                    Sed fermentum erat vel sodales placerat. Sed vestibulum,
                    elit vel malesuada volutpat, dolor est fermentum lectus, at
                    pulvinar enim ante in neque. Ut augue lorem, vulputate vitae
                    neque non, fringilla. Proin imperdiet erat ac leo luctus
                    tempus.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LastUpdates;
