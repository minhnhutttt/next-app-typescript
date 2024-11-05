"use client";
import Title from "@/components/title";
import Text from "@/components/text";
import Button from "@/components/button";
import useScrollAnimations from "@/hooks/useScrollAnimations";
import { title } from "process";

const howtos = [
  {
    img: "/assets/images/app.png",
    bgColor:"#88D1F5",
    title: (
      <>
        MERCURY VAULTを
        <br />
        ダウンロード"
      </>
    ),
  },
  {
    img: "/assets/images/phone.png",
    bgColor:"#228FCE",
    title: (
      <>
        位置情報で
        <br />
        マップにアクセス
      </>
    ),
  },
  {
    img: "/assets/images/ticket.png",
    bgColor:"#18539E",
    title: (
      <>
        NFTを集めて
        <br />
        特典をゲット！
      </>
    ),
  },
];

const Howto = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="bg-[#B6E1F2] px-5 pt-[200px]">
      <h2 className="md:text-[48px] text-[22px] text-center font-bold">
        <span className="box relative border-b-[5px] border-[#000]">
          簡単3ステップで今すぐ始めよう!!
        </span>
      </h2>

      <ul className="max-w-[1160px] mx-auto w-full flex max-[767px]:flex-wrap justify-between pt-[50px] md:pt-[100px] gap-[40px]">
        {howtos.map((howto, index) => (
          <li
            style={{ borderColor: howto.bgColor }}
            className="md:w-1/3 w-full border-[5px] md:rounded-t-full rounded-t-[50%] bg-[#fff] relative pt-[40px] px-[44px]"
            key={index}
          >
            <figure className="absolute left-1/2 -translate-x-1/2 top-[-34px]">
              <img src="/assets/images/pin.svg" alt="" />
            </figure>
            <span 
            style={{ backgroundColor: howto.bgColor }}
            className="md:text-[18px] text-[14px] text-[#fff] font-bold pt-[2px] pb-[3px] text-center max-w-[80px] w-full rounded-full block mx-auto">
              STEP {index+1}
            </span>
            <h3 className="text-[18px] text-center md:text-[28px] font-bold mt-[10px]">
              {howto.title}
            </h3>
            <figure className="mt-[20px] max-h-[300px] overflow-hidden" key={index}>
              <img className="mx-auto" src={howto.img} alt="" />
            </figure>
          </li>
        ))}
      </ul>
      
      <div className="relative md:pt-[106px] pt-[50px] md:pb-[83px] pb-[40px] md:max-w-[555px] max-w-[460px] mx-auto">
        <figure className="md:w-auto max-md:max-w-[138px] w-full absolute md:-left-[31px] left-[0] top-[0] z-10">
          <img className="w-full" src="/assets/images/bubble.png" alt="" />
        </figure>
        <Button>OPEN Mapへ</Button>
      </div>
      

    </section>
  );
};

export default Howto;
