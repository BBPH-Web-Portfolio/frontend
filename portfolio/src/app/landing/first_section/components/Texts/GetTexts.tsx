import { useTextStore } from "../../store/UseText";
import { useEffect } from "react";
import { fetchText } from "../../hooks/FetchText";

export const GetTexts = () => {
  const { title, body, setTitle, setBody } = useTextStore();

  useEffect(() => {
    const loadText = async () => {
      const data = await fetchText();
      if (data) {
        setTitle(data.title);
        setBody(data.body);
      }
    };

    loadText();
  }, []);

  return (
    <>
      <h2 className="w-[35rem] font-[DmsansBold] text-5xl">{title}</h2>
      <p className="text-[1.3rem] pt-[4rem] font-[Dmsans] w-[30rem]">{body}</p>
    </>
  );
};
