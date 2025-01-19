"use client";
import useScrollAnimations from "@/hooks/useScrollAnimations";
import { useEffect } from "react";
import Scene from "scenejs";

const What = () => {
  const ref = useScrollAnimations();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const scene = new Scene(
        {
          ".card-wrapper.forward": {
            0: { transform: "rotateY(0deg)" },
            5: { transform: "rotateY(360deg)" },
          },
          ".card-wrapper.backward": {
            0: { transform: "rotateY(180deg)" },
            5: { transform: "rotateY(540deg)" },
          },
        },
        {
          selector: true,
          iterationCount: "infinite",
        }
      );

      scene.playCSS();
    }
  }, []);
  return (
    <section ref={ref} className="relative overflow-hidden px-5 lg:px-9 md:pb-20 pb-10">
      <div className="w-full max-w-[1440px] mx-auto relative md:min-h-[1000px]">
        
      <div className="md:absolute top-0 inset-x-0 flex justify-center max-md:mt-6">
          <div className="w-full max-w-[1000px] mx-auto relative bg-[#F4F4F4] rounded-[92px] flex justify-center items-center py-12">
            <div className="lg:w-[513px] md:w-[400px] w-[300px] aspect-[513/902] relative">
              <div className="card-wrapper forward absolute size-full [backface-visibility:hidden]">
                <div>
                  <img src="/assets/images/img-phone.png" alt="" />
                </div>
              </div>
              <div className="card-wrapper backward absolute size-full [backface-visibility:hidden]">
                <div>
                  <img src="/assets/images/img-phone-dark.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <h3 className="fade-up leading-[1.3] xl:text-[90px] md:text-[60px] text-[32px] font-black relative z-10 py-7 md:py-14">
          What is <br />
          TELEPORT <br />
          EXCHANGE？
        </h3>
        <div className="fade-up flex justify-end xl:pr-[145px] md:pt-9">
            <p className="md:w-[240px] lg:w-[294px] xl:text-[24px] md:text-[20px] text-[18px] leading-loose relative z-10">
            TELEPORT EXCHANGE is a swap platform for DwETH, an Ethereum-based Wrapped Token used on the DIVER Time Chain, and DRC20Token, a token based on the DIVER Time Chain standard. Users can send DwETH and DRC20Token to the DIVER blockchain in a decentralized manner.
            </p>
        </div>
      </div>
    </section>
  );
};

export default What;
