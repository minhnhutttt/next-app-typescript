"use client";
import { useEffect } from "react";
import ScrollOut from "scroll-out";
import Splitting from "splitting";

const data = [
  {
    id: 1,
    image: "/assets/images/case-01.png",
    title: "Anime & Animation",
  },
  {
    id: 2,
    image: "/assets/images/case-02.png",
    title: "Manga & Comics",
  },
  {
    id: 3,
    image: "/assets/images/case-03.png",
    title: "Music & Concerts",
  },
  {
    id: 4,
    image: "/assets/images/case-04.png",
    title: "Film & Television",
  },
  {
    id: 5,
    image: "/assets/images/case-05.png",
    title: "Art & Design",
  },
  {
    id: 6,
    image: "/assets/images/case-06.png",
    title: "Games & Interactive",
  },
];
const Showcase = () => {
  useEffect(() => {
    Splitting();
    ScrollOut({ once: true });
  });

  return (
    <section className="relative overflow-hidden md:mt-[235px] mt-[150px] px-5 md:pb-[100px] pb-[60px]">
      <div className="w-full max-w-[1300px] mx-auto">
        <div className="px-5 text-[#111111] md:pb-16 pb-10">
          <h3
            data-scroll
            className="text--enter md:text-[64px] xl:text-[128px] text-[clamp(20px,7.5vw,60px)] leading-[1.2] font-semibold text-center overflow-hidden tracking-widest"
          >
            <span data-splitting>
              IP ASSETS <br />
              SHOWCASE
            </span>
          </h3>
        </div>
        <div className="border-t border-[#F34927] md:pt-12 pt-8">
            <p data-scroll className="ani-slide-bottom text-center md:text-[32px] text-[20px] tracking-widest font-semibold">Entertainment Categories</p>
            <div className="flex justify-center flex-wrap gap-10 md:gap-[120px] w-full max-w-[870px] mx-auto md:mt-24 mt-16">
                {data.map((item) => (
                    <div data-scroll key={item.id} className="ani-slide-bottom relative overflow-hidden w-[210px]">
                        <div className="">
                            <img src={item.image} alt="" />
                        </div>
                        <span className="block text-center md:text-[20px] text-[16px] tracking-wider md:mt-8 mt-5">
                            {item.title}
                        </span>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
