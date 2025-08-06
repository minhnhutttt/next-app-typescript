"use client";

import { TextDesintegratorComponent } from "@/components/TextDesintegratorComponent";
import useScrollAnimations from "@/hooks/useScrollAnimations";
import ImageDisintegrator from "./ImageDisintegrator";
import { useState } from "react";

const Fv = () => {
  const ref = useScrollAnimations();

  const [dis, setDis] = useState(false);
  const [re, setRe] = useState(false);

  const handleDisintegrate = () => {
    setDis(true);
    setTimeout(() => setDis(false), 100); // reset để gọi lại được
  };

  const handleReintegrate = () => {
    setRe(true);
    setTimeout(() => setRe(false), 100); // reset để gọi lại được
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen bg-[url(/assets/images/bg-fv.png)] bg-cover overflow-hidden"
    >
      <div className="fade-up flex justify-center items-center pt-[130px] px-5">
        <h1><img src="/assets/images/fv-text.svg" alt="" /></h1>
      </div>
      <div className="flex items-center justify-center -mt-6 relative">
        <p className="fade-up-200"><img src="/assets/images/fv-people-01.png" alt="" /></p>
        <div className="fade-up-400 max-md:w-[25vw] absolute left-0 md:bottom-[-75px] -bottom-10 z-10">
          <img src="/assets/images/fv-people-02.png" alt="" />
        </div>
        <div className="fade-up-600 max-md:w-[30vw] absolute right-[-20px] -bottom-9 md:bottom-[-70px] z-10">
          <img src="/assets/images/fv-people-03.png" alt="" />
        </div>
      </div>
      <div className="flex items-center justify-center -mt-[37vw] md:-mt-[240px] relative">
        <div className="relative">
          <p className="[filter:drop-shadow(0_4px_50px_rgba(74,_0,_39,_0.20))]"><img src="/assets/images/frame.png" alt="" /></p>
          <div className="absolute inset-0 flex items-center justify-center flex-col font-bold text-center  leading-[1.2]">
            <ImageDisintegrator startDisintegrate={dis} startReintegrate={re} />

      <div className="flex space-x-4">
        <button
          onClick={handleDisintegrate}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Phân rã
        </button>
        <button
          onClick={handleReintegrate}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Tái tạo
        </button>
      </div>
            {/* <TextDesintegratorComponent
              text="FAVERとファン"
              options={{
                padding: 160,
                density: 4,
                duration: 2500,
                textVisibleDuration: 3000
              }}
              className="text-[46px] leading-[1.2] font-bold text-center"
            /> */}
            {/* <TextDesintegratorComponent
              text="が共創する"
              options={{
                padding: 160,
                density: 4,
                duration: 2500,
                textVisibleDuration: 3000
              }}
              className="text-[46px] leading-[1.2] font-bold text-center"
            />
            <div className="pt-5 flex flex-col items-center justify-center">
              <TextDesintegratorComponent
                text="新時代の"
                options={{
                  padding: 160,
                  density: 4,
                  duration: 2500,
                  textVisibleDuration: 3000
                }}
                className="text-[58px] leading-[1.2] font-bold text-center"
              />
              <TextDesintegratorComponent
                text="エコシステム"
                options={{
                  padding: 160,
                  density: 4,
                  duration: 2500,
                  textVisibleDuration: 3000
                }}
                className="text-[58px] leading-[1.2] font-bold text-center"
              />
            </div> */}
            {/* <div className="flex text-[68px]">
              <TextDesintegratorComponent
                text="F"
                options={{
                  padding: 160,
                  density: 4,
                  duration: 2500,
                  textVisibleDuration: 3000
                }}
                className="text-[#FF7DB8] font-black"
              />
              <TextDesintegratorComponent
                text="A"
                options={{
                  padding: 160,
                  density: 4,
                  duration: 2500,
                  textVisibleDuration: 3000
                }}
                className="text-[#ED62C7] font-black"
              />
              <TextDesintegratorComponent
                text="V"
                options={{
                  padding: 160,
                  density: 4,
                  duration: 2500,
                  textVisibleDuration: 3000
                }}
                className="text-[#D842D9] font-black"
              />
              <TextDesintegratorComponent
                text="E"
                options={{
                  padding: 160,
                  density: 4,
                  duration: 2500,
                  textVisibleDuration: 3000
                }}
                className="text-[#BB15F2] font-black"
              />
              <TextDesintegratorComponent
                text="コ"
                options={{
                  padding: 160,
                  density: 4,
                  duration: 2500,
                  textVisibleDuration: 3000
                }}
                className="text-[#A711FE] font-black"
              />
              <TextDesintegratorComponent
                text="イ"
                options={{
                  padding: 160,
                  density: 4,
                  duration: 2500,
                  textVisibleDuration: 3000
                }}
                className="text-[#A41BFE] font-black"
              />
              <TextDesintegratorComponent
                text="ン"
                options={{
                  padding: 160,
                  density: 4,
                  duration: 2500,
                  textVisibleDuration: 3000
                }}
                className="text-[#9A35FC] font-black"
              />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fv;