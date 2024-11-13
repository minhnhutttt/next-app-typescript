"use client";
import Scene from "scenejs";
import useScrollAnimations from "@/hooks/useScrollAnimations";
import { ReactNode, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useMediaQuery } from "@/hooks/useMediaQuery";

type CaseItemPropsType = {
    id: string;
    title: ReactNode;
    items: string[];
};
  
  const caseData: CaseItemPropsType[] = [
    {
      id: "1",
      title: (<>Basic Functions of Pilot Program <span className="md:text-[32px] text-[20px]">(December 2024)</span> </>),
      items: [
        'Basic token issuance and transfer function (SANTA Coin issuance and sending process)',
        'Mechanism of direct support to selected facilities',
        'Ensuring transaction transparency using blockchain',
        'Simple community participation mechanism'
      ]
    },
    {
        id: "2",
        title: (<>Planned Functions for Full Version <span className="md:text-[32px] text-[20px]">(2025) </span> </>),
        items: [
          'Basic token issuance and transfer function (SANTA Coin issuance and sending process)',
          'Mechanism of direct support to selected facilities',
          'Ensuring transaction transparency using blockchain',
          'Simple community participation mechanism'
        ]
      },
      {
        id: "3",
        title: (<>Development of support programs </>),
        items: [
          'Basic token issuance and transfer function (SANTA Coin issuance and sending process)',
          'Mechanism of direct support to selected facilities',
          'Ensuring transaction transparency using blockchain',
          'Simple community participation mechanism'
        ]
      }
  ];
  
  function CaseItem({ title, items }: CaseItemPropsType) {
    const contentRef = useRef(null);
    const arrowRef = useRef(null);
    const isClosedRef = useRef(true);
    const isDesktop = useMediaQuery("(min-width: 768px)", true);
  
    const handleExpand = () => {
      const $content = contentRef.current;
      const $arrow = arrowRef.current;
      if (isClosedRef.current) {
        gsap.set($content, { height: "auto" });
        gsap.from($content, { duration: 0.2, height: 0 });
        gsap.to($arrow, { duration: 0.1, rotation: -90, transformOrigin: 'center' });
      } else {
        gsap.to($content, { duration: 0.2, height: 0 });
        gsap.to($arrow, { duration: 0.1, rotation: 0 });
      }
      isClosedRef.current = !isClosedRef.current;
    };
  
    return (
      <div
        className="fade-up border-b border-[#B70000] pt-8 pb-6 xl:px-8 md:px-5 px-3"
      >
        <button
          type="button"
          className="flex w-full items-center duration-200 hover:opacity-75 cursor-pointer pb-1"
          onClick={handleExpand}
        >
          <p className="flex-1 text-left text-[24px] md:text-[48px] font-black leading-[1.3]">{title}</p>
          <div
            className="relative ml-2 flex items-center justify-center duration-150 size-7 md:size-12 lg:size-[70px]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
            <rect ref={arrowRef} x="31.9999" width="6" height="70" fill="#0F0F0F"/>
            <rect x="70" y="32" width="6" height="70" transform="rotate(90 70 32)" fill="#0F0F0F"/>
            </svg>
          </div>
        </button>
        <div ref={contentRef} className="h-0 overflow-hidden">
            <ul className="md:text-[18px] text-[15px] leading-[1.3] list-disc pl-4 md:pl-6 pb-4">
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
      </div>
    );
  }

const Solution = () => {
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
    <section ref={ref} id="solution" className="relative overflow-hidden">
      <div className="px-5 bg-[#B70000]">
        <div className="w-full max-w-[1210px] mx-auto flex items-center max-md:flex-col py-8 md:py-10 md:gap-[52px] gap-10">
          <div className="popup md:w-[554px] w-[300px] aspect-[554/522] relative">
            <div className="card-wrapper forward absolute size-full [backface-visibility:hidden]">
              <div>
                <img
                  className="drop-shadow-[0_4px_60px_#FF3138]"
                  src="/assets/images/solution-img-01.png"
                  alt=""
                />
              </div>
            </div>
            <div className="card-wrapper backward absolute size-full [backface-visibility:hidden]">
              <div>
                <img
                  className="drop-shadow-[0_4px_60px_#FF3138]"
                  src="/assets/images/solution-img-02.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="popup flex-1">
            <h4 className="md:text-[98px] text-[44px] text-white font-bold leading-none mb-5">SANTA Coin <br />Solution</h4>
            <p className="md:text-[18px] text-[16px] leading-[1.3] font-medium text-[#E6E6E6] max-w-[535px]">
                SANTA Coin addresses these challenges through blockchain technology. <br />
                <br />
                On the blockchain, <span className="font-bold text-white">fund movements are public</span> information. Therefore, support fund flows can never be opaque - every penny is tracked and visible.<br />
                <br />
                Additionally, since <span className="font-bold text-white">everything operates through programmed code</span>, management costs, including personnel expenses, are significantly reduced.<br />
                <br />
                As a result, <span className="font-bold text-white">support reaches children in need</span> more efficiently.
            </p>
          </div>
        </div>
      </div>
      <div className="relative px-5 md:pt-[50px] pt-[30px] md:pb-[160px] pb-20 z-10">
      <div className="w-full max-w-[1360px] mx-auto relative h-full">
        <div className="mx-auto w-full border-t border-[#B70000]">
        {caseData.map(({ id, title, items }) => (
            <CaseItem key={id} id={id} title={title} items={items} />
        ))}
        </div>
      </div>
    </div>
    </section>
  );
};

export default Solution;
