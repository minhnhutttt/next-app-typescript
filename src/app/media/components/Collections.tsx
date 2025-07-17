"use client";

import { useState } from "react";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const data = [
  {
    id: "01",
    type: "TV",
    title: "Sunny Bonnell on Gen Z redefining the workplace",
    image: "/assets/images/1.webp",
    brand: "Salon",
  },
  {
    id: "02",
    type: "TV",
    title: "Sunny Bonnell on Gen Z redefining the workplace",
    image: "/assets/images/1.webp",
    brand: "Salon",
  },
  {
    id: "03",
    type: "Podcast",
    title: "Sunny Bonnell on Gen Z redefining the workplace",
    video: "/assets/images/e3d75ddd-87e29be5.mp4",
    brand: "Salon",
  },
  {
    id: "04",
    type: "Print",
    title: "Sunny Bonnell on Gen Z redefining the workplace",
    image: "/assets/images/1.webp",
    brand: "Salon",
  },
  {
    id: "05",
    type: "TV",
    title: "Sunny Bonnell on Gen Z redefining the workplace",
    video: "/assets/images/17868c59-88f647ea.mp4",
    brand: "Salon",
  },
];

const Collections = () => {
  const ref = useScrollAnimations();
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredData = activeFilter === "All" 
    ? data 
    : data.filter(item => item.type === activeFilter);

  const filterButtons = ["All", "TV", "Podcast", "Print"];

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };

  return (
    <section ref={ref} className="bg-white relative">
      <div className="w-full md:px-[2vw] px-[4vw] pb-[30vw] md:pb-[20vw]">
        <div className="grid grid-cols-12 md:grid-cols-[repeat(24,_minmax(0,_1fr))] items-end md:pb-[3vw] pb-[6vw] gap-x-[2vw] ">
          <div className="col-span-12 md:col-[span_16_/_span_16] py-[5vw] md:py-0">
            <div className="h2 js-split">
              A go-to expert for leading publications covering leadership,
              innovation, and brand.
            </div>
          </div>
          <div className="col-span-12 md:col-span-8 py-6 gap-3 flex justify-end md:py-0 md:text-right">
            {filterButtons.map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterClick(filter)}
                className={`md:px-6 px-4 mb-5 md:mb-0 py-2 rounded-full inline-block transition-colors duration-300 hover:bg-black hover:text-white js-filter-btn ${
                  activeFilter === filter
                    ? "bg-black text-white"
                    : "bg-[#EBEBEB] text-black"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        <div className="grid gap-4 md:gap-5 grid-cols-12 md:grid-cols-[repeat(24,_minmax(0,_1fr))]">
          {filteredData.map((item) => (
            <div key={item.id} className="col-span-6 w-full relative">
              <a
                href="/"
                className="fade-up w-full relative mb-[7vw] md:mb-[4vw] group"
              >
                <div className="absolute bg-white rounded-full px-3 top-4 left-4 z-[2] md:text-[18px] text-[16px]">
                  {item.type}
                </div>
                <div className="relative w-full bg-grey block rounded-[0.4rem] overflow-hidden z-1">
                  <div className="md:pt-[102%] pt-[120%]"></div>
                  {item.image && (
                    <img
                      src={item.image}
                      alt=""
                      className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                  )}
                  {item.video && (
                    <video
                      className="size-full object-cover absolute top-0 left-0 is-playing"
                      data-lazy-video=""
                      data-lazy=""
                      data-autoplay="true"
                      preload="none"
                      loop
                      muted
                      autoPlay
                      src={item.video}
                      playsInline
                      data-loaded="true"
                    ></video>
                  )}
                </div>
                <div className="h4 mb-2 pr-5 md:mt-5 mt-3 js-split">
                  {item.title}
                </div>
                <div className="js-split text-black/60">{item.brand}</div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;