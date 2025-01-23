import { ReactNode, useState } from "react";

export interface dataAI {
    morning: ReactNode,
    url: ReactNode,
    detail: ReactNode,
    cost: ReactNode,
  }
interface WeatherProps {
    weather?: "sun" | "rain";
  }
interface PlanneItemProps extends WeatherProps {
  type: string;
  modal?: boolean;
}
interface ResultItemProps extends WeatherProps {
  type: string;
  text: ReactNode;
  note: ReactNode;
  data: dataAI[],
}
const weatherAssets = {
    sun: {
      image: "/assets/images/result-sun.png",
      textColor: "text-[#9E6222]",
      bgImage: "bg-[url(/assets/images/result-sun-bg.png)]",
      borderSp: "max-md:bg-[url(/assets/images/result-border-sun-sp.png),url(/assets/images/result-border-sun-sp.png)]",
      borderMd: "md:bg-[url(/assets/images/result-border-sun.png),url(/assets/images/result-border-sun.png)]",
      modalborder: "bg-[url(/assets/images/modal-border-sun.png)]",
      deco: "/assets/images/deco-sun.png",
    },
    rain: {
      image: "/assets/images/result-rain.png",
      textColor: "text-[#095285]",
      bgImage: "bg-[url(/assets/images/result-rain-bg.png)]",
      borderSp: "max-md:bg-[url(/assets/images/result-border-rain-sp.png),url(/assets/images/result-border-rain-sp.png)]",
      borderMd: "md:bg-[url(/assets/images/result-border-rain.png),url(/assets/images/result-border-rain.png)]",
      modalborder: "bg-[url(/assets/images/modal-border-rain.png)]",
      deco: "/assets/images/deco-rain.png",
    },
  };

const PlanneItem = ({ type, weather = "sun", modal }: PlanneItemProps) => {
    const { image, textColor } = weatherAssets[weather];
    return (
  <span className={`flex justify-center  ${textColor} ${modal ? 'w-[120px]' : 'max-md:w-[150px]'}`}>
    <span className="relative">
      <span className={`absolute inset-0 flex items-end justify-center font-['Hiragino_Mincho_ProN'] text-center uppercase font-semibold ${modal ? 'text-[35px] pb-1' : 'text-[40px] md:text-[53px] pb-3 md:pb-5'}`}>
        {type}
      </span>
      <img src={image} alt="" />
    </span>
  </span>
  )
};

export const ResultItem = ({ type, weather = "sun", text, note, data }: ResultItemProps) => {
  const { textColor, bgImage, borderSp, borderMd, modalborder, deco } = weatherAssets[weather];
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
    <button type="button"  onClick={() => setIsOpen((prev) => !prev)}
      className={`w-[330px] md:w-[294px] max-md:py-1.5 border border-[#8C7366] select-text ${textColor} ${bgImage}`}
    >
      <div
        className={`flex py-2.5 px-1.5 md:p-2.5 bg-no-repeat bg-[position:top_center,_bottom_center] md:flex-col items-center max-md:gap-3 ${borderSp}`}
      >
        <PlanneItem type={type} weather={weather} />
        <div
          className={`w-full max-md:flex-1 text-center md:h-[135px] flex items-center justify-center flex-col md:mt-5 bg-repeat-x bg-[position:top_center,_bottom_center] ${borderMd}`}
        >
          <p className="text-[17px] md:text-[20px] font-semibold">{text}</p>
          <p className="text-[13px] md:text-[15px]">{note}</p>
        </div>
      </div>
    </button>
      <div
        className={`fixed inset-0 flex items-center justify-center bg-[url('/assets/images/bg.png')] bg-cover bg-right-bottom bg-no-repeat p-5 z-10 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className={`w-full max-w-[792px] h-[calc(90%-60px)] border border-[#B4B4B4] py-2 px-5  bg-cover relative ${bgImage} ${textColor}`}>
        <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="absolute text-black bottom-[calc(100%+20px)] right-0 w-[134px] h-10 flex items-center justify-center rounded-lg border border-[#75A5BE] bg-[#BEF4EE]"
            >
              戻る
            </button>
          <div className="flex flex-col items-center h-full overflow-auto">
          <PlanneItem type={type} weather={weather} modal />
            <div className="flex w-full">
                <div className={`h-3 w-full mt-3 ${modalborder}`}></div>
            </div>
            <div className="text-center mt-4">
                <p className="text-[18px] md:text-[23px] font-semibold">{text}</p>
                <p className="text-[14px] md:text-[19px]">{note}</p>
            </div>
            <div>
                {data.map((item, index) => (
                    <div className="group" key={index}>
                    <div className="md:text-[14px] text-[13px] text-[#020200] py-5" key={index}>
                        <p className="flex">
                            <span className="min-w-[40px]">午前：</span>
                            <span>{item.morning}</span>
                        </p>
                        <p className="flex">
                            <span className="min-w-[40px]">URL：</span>
                            <span>{item.url}</span>
                        </p>
                        <p className="flex">
                            <span className="min-w-[40px]">詳細：</span>
                            <span>{item.detail}</span>
                        </p>
                        <p className="flex">
                            <span className="min-w-[40px]">予算：</span>
                            <span>{item.cost}</span>
                        </p>
                    </div>
                    <div className="group-last:hidden">
                        <img src={deco} alt="" />
                    </div>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};