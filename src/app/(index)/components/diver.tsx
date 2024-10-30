"use client";
import useScrollAnimations from "@/hooks/useScrollAnimations";
import { useEffect } from "react";

const Diver = () => {
  const ref = useScrollAnimations();

  useEffect(() => {
    const text = document.querySelector(".text");
    if (text) {
      text.classList.add("is-active");

      const interval = setInterval(() => {
        text.classList.toggle("is-active");
      }, 2600);

      return () => clearInterval(interval);
    }
  }, []);

  return (
    <section
      ref={ref}
      id="diver"
      className="relative md:px-10 px-5 bg-[url('/assets/images/bg-diver.png')] bg-center bg-[length:100%_100%] md:pt-[94px]"
    >
      <div className="w-full max-w-[1187px] mx-auto">
        <div className="relative text-[4.861vw] dt:text-[70px] font-black leading-[1.3] text-center">
          <h4 data-splitting className="relative text tracking-wider">
            <span className="char text-[#FF9E5C]" style={{ "--char-index": 0 } as React.CSSProperties}>D</span>
            <span className="char text-[#FFA34F]" style={{ "--char-index": 1 } as React.CSSProperties}>I</span>
            <span className="char text-[#FFAD46]" style={{ "--char-index": 2 } as React.CSSProperties}>V</span>
            <span className="char text-[#FEBB44]" style={{ "--char-index": 3 } as React.CSSProperties}>E</span>
            <span className="char text-[#FEC942]" style={{ "--char-index": 4 } as React.CSSProperties}>R</span>
            <span className="whitespace">&nbsp;</span>
            <span className="char text-[#FCDB3F]" style={{ "--char-index": 5 } as React.CSSProperties}>T</span>
            <span className="char text-[#FCE83F]" style={{ "--char-index": 6 } as React.CSSProperties}>I</span>
            <span className="char text-[#E9EC45]" style={{ "--char-index": 7 } as React.CSSProperties}>M</span>
            <span className="char text-[#D2F24B]" style={{ "--char-index": 8 } as React.CSSProperties}>E</span>
            <span className="whitespace">&nbsp;</span>
            <span className="char text-[#BCF853]" style={{ "--char-index": 9 } as React.CSSProperties}>N</span>
            <span className="char text-[#A3FD59]" style={{ "--char-index": 10 } as React.CSSProperties}>E</span>
            <span className="char text-[#95F97B]" style={{ "--char-index": 11 } as React.CSSProperties}>T</span>
            <span className="char text-[#89F1AB]" style={{ "--char-index": 12 } as React.CSSProperties}>W</span>
            <span className="char text-[#7BE8D9]" style={{ "--char-index": 13 } as React.CSSProperties}>O</span>
            <span className="char text-[#70E2FF]" style={{ "--char-index": 14 } as React.CSSProperties}>R</span>
            <span className="char text-[#84D1FF]" style={{ "--char-index": 15 } as React.CSSProperties}>K</span>
            <br />
            <span className="char text-[#FE80A5]" style={{ "--char-index": 16 } as React.CSSProperties}>R</span>
            <span className="char text-[#FF8B8A]" style={{ "--char-index": 17 } as React.CSSProperties}>E</span>
            <span className="char text-[#FE956F]" style={{ "--char-index": 18 } as React.CSSProperties}>S</span>
            <span className="char text-[#FFA056]" style={{ "--char-index": 19 } as React.CSSProperties}>P</span>
            <span className="char text-[#FFAC46]" style={{ "--char-index": 20 } as React.CSSProperties}>E</span>
            <span className="char text-[#FFBB44]" style={{ "--char-index": 21 } as React.CSSProperties}>C</span>
            <span className="char text-[#FECA42]" style={{ "--char-index": 22 } as React.CSSProperties}>T</span>
            <span className="char text-[#FED940]" style={{ "--char-index": 23 } as React.CSSProperties}>S</span>
            <span className="whitespace">&nbsp;</span>
            <span className="char text-[#F6EA41]" style={{ "--char-index": 24 } as React.CSSProperties}>A</span>
            <span className="char text-[#E2EF47]" style={{ "--char-index": 25 } as React.CSSProperties}>L</span>
            <span className="char text-[#D1F34C]" style={{ "--char-index": 26 } as React.CSSProperties}>L</span>
            <span className="whitespace">&nbsp;</span>
            <span className="char text-[#B9F953]" style={{ "--char-index": 27 } as React.CSSProperties}>I</span>
            <span className="char text-[#A7FD58]" style={{ "--char-index": 28 } as React.CSSProperties}>N</span>
            <span className="char text-[#99FB70]" style={{ "--char-index": 29 } as React.CSSProperties}>D</span>
            <span className="char text-[#90F68F]" style={{ "--char-index": 30 } as React.CSSProperties}>I</span>
            <span className="char text-[#88F1AC]" style={{ "--char-index": 31 } as React.CSSProperties}>V</span>
            <span className="char text-[#7FEBCA]" style={{ "--char-index": 32 } as React.CSSProperties}>I</span>
            <span className="char text-[#78E7E3]" style={{ "--char-index": 33 } as React.CSSProperties}>D</span>
            <span className="char text-[#78DCFF]" style={{ "--char-index": 34 } as React.CSSProperties}>U</span>
            <span className="char text-[#8EC8FF]" style={{ "--char-index": 35 } as React.CSSProperties}>A</span>
            <span className="char text-[#A0B9FF]" style={{ "--char-index": 36 } as React.CSSProperties}>L</span>
            <span className="char text-[#B7A7FF]" style={{ "--char-index": 37 } as React.CSSProperties}>S</span>
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Diver;
