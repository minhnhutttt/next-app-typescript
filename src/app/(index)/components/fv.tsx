"use client";

import { useEffect, useState } from "react";

const FV = () => {
  const [isActive, setisActive] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setisActive((prev) => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="relative">
      <div className="relative md:h-[55.556vw] dt:h-[800px] h-[115vw] max-md:max-h-[660px] md:min-h-[690px] bg-[url('/assets/images/fv-bg.png')] bg-cover bg-no-repeat">
        <div className="w-full h-full flex justify-center max-lg:items-center lg:pt-[120px] xl:pt-[150px]">
          <div data-scroll="in" className="ani-zoom-out animation-500 relative">
            <figure className="max-md:w-[90vw] max-dt:w-[71.944vw] relative">
              <span className="absolute left-[30vw] md:left-[22.917vw] dt:left-[330px] top-[-2.6vw] md:top-[-2.778vw] dt:top-[-40px] [transition:1.5s_ease-in-out] animate-[fuwafuwa_3s_ease-in-out_infinite_alternate]">
                <img className="max-md:w-[8.5vw] max-dt:w-[7.292vw]" src="/assets/images/fv-t1.png" alt="" />
              </span>
              <span className="absolute left-[38vw] md:left-[29.167vw] dt:left-[420px] top-[-1.042vw] md:top-[-1.042vw] dt:top-[-15px] [transition:1.5s_ease-in-out] animate-[fuwafuwa_3s_1.3s_ease-in-out_infinite_alternate]">
                <img className="max-md:w-[8.6vw] max-dt:w-[7.431vw]" src="/assets/images/fv-t2.png" alt="" />
              </span>
              <img src="/assets/images/fv-frame.png" alt="" />
            </figure>
            <div className="absolute inset-0 flex justify-center pt-[10vw] md:pt-[7.639vw] dt:pt-[110px]">
              <h1 className="relative pl-[4.4vw] md:pl-[3.889vw] dt:pl-14">
                <div
                  className={`absolute duration-500 left-[0vw] md:left-[1.389vw] dt:left-5 flex animation-flash ${isActive ? "top-[3vw] md:top-[2.778vw] dt:top-10" : "top-[14vw] md:top-[12.5vw] dt:top-[180px]"}`}
                >
                  <img
                    className="block max-md:w-[2.4vw] max-dt:w-[1.458vw]"
                    src="/assets/images/fv-triangle.png"
                    alt=""
                  />
                </div>
                <span className="relative">
                  <img
                    className={`max-md:w-[76vw] max-dt:w-[62.014vw] ${isActive ? "animation-reappear" : "animation-hide"}`}
                    src="/assets/images/fv-text-01.png"
                    alt=""
                  />
                  <img
                    className={`max-md:w-[76vw] max-dt:w-[62.014vw] absolute inset-0 ${!isActive ? "animation-reappear" : "animation-hide"}`}
                    src="/assets/images/fv-text-02.png"
                    alt=""
                  />
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div data-scroll className="ani-zoom-out duration-1000 flex justify-center items-center md:-mt-[12.5vw] dt:-mt-[180px] -mt-[80px]">
        <div className="group md:w-[510px] w-[280px] md:h-[510px] h-[280px] relative flex items-center justify-center max-md:p-4">
          <figure className="bg-white rounded-full drop-shadow-2xl">
            <img src="/assets/images/circle.png" alt="" />
          </figure>
          <div className="absolute inset-0 animate-[rotate_25s_linear_infinite]">
          <img src="/assets/images/circle-text.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FV;
