"use client";

import { TextDesintegratorComponent } from "@/components/TextDesintegratorComponent";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const Fv = () => {
  const ref = useScrollAnimations();

  return (
    <section
      ref={ref}
      className="relative min-h-screen bg-[url(/assets/images/bg-fv.png)] bg-cover overflow-hidden"
    >
      <div className="flex justify-center items-center pt-[130px]">
        <h1><img src="/assets/images/fv-text.svg" alt="" /></h1>
      </div>
      <div className="flex items-center justify-center -mt-6 relative">
        <p><img src="/assets/images/fv-people-01.png" alt="" /></p>
        <div className="absolute left-0 bottom-[-75px] z-10">
          <img src="/assets/images/fv-people-02.png" alt="" />
        </div>
        <div className="absolute right-[-20px] bottom-[-70px] z-10">
          <img src="/assets/images/fv-people-03.png" alt="" />
        </div>
      </div>
      <div className="flex items-center justify-center -mt-[240px] relative">
        <div className="relative">
        <p className="[filter:drop-shadow(0_4px_50px_rgba(74,_0,_39,_0.20))]"><img src="/assets/images/frame.png" alt="" /></p>
        <div className="absolute inset-0 flex items-center justify-center flex-col text-4xl font-bold text-center">
           <TextDesintegratorComponent  
            text="FAVERとファン"
            options={{
              padding: 160,
              density: 4,
              duration: 2500,
              textVisibleDuration: 5000
            }}
            className="text-4xl font-bold text-center"
          />
          <TextDesintegratorComponent  
            text="が共創する"
            options={{
              padding: 160,
              density: 4,
              duration: 2500,
              textVisibleDuration: 5000
            }}
            className="text-4xl font-bold text-center"
          />
          <TextDesintegratorComponent  
            text="新時代の"
            options={{
              padding: 160,
              density: 4,
              duration: 2500,
              textVisibleDuration: 5000
            }}
            className="text-4xl font-bold text-center"
          />
          <TextDesintegratorComponent  
            text="エコシステム"
            options={{
              padding: 160,
              density: 4,
              duration: 2500,
              textVisibleDuration: 5000
            }}
            className="text-4xl font-bold text-center"
          />
          <div className="flex">
          <TextDesintegratorComponent  
            text="F"
            options={{
              padding: 160,
              density: 4,
              duration: 2500,
              textVisibleDuration: 5000
            }}
            className="text-red-600"
          />
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Fv;