import Image from "next/image";
import { useEffect } from "react";
import { useImageStore } from "../../store/UseImageStore";
import { fetchImageUrl } from "../../hooks/FetchImage";

export const GetImage = () => {
  const { imageUrl, setImageUrl } = useImageStore();

  useEffect(() => {
    const loadImageUrl = async () => {
      const url = await fetchImageUrl();
      if (url) {
        setImageUrl(url);
      }
    };

    loadImageUrl();
  }, [setImageUrl]);

  return (
    <>
    {
      imageUrl.length > 0 ? (
        <Image
          src={imageUrl}
          width={10000}
          height={10000}
          alt="Picture"
          draggable={false}
          className="w-[33vw] h-[1040px] absolute bottom-0 object-cover"
        />
      ) : (
        <div className="flex-col gap-4 w-full flex items-center justify-center">
          <div className="w-20 h-20 border-4 border-transparent text-white text-4xl animate-spin flex items-center justify-center border-t-white rounded-full">
            <div className="w-16 h-16 border-4 border-transparent text-black text-2xl animate-spin flex items-center justify-center border-t-black rounded-full"></div>
          </div>
        </div>
      )
    }
    </>
  );
};
