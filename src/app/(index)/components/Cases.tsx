"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const data = [
  {
    title: "私たちの目指すもの",
    content: (
      <>
        テキストテキストテキストテキストテキストテキスト <br />
        テキストテキストテキストテキスト
        <br />
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
      </>
    ),
    image: "/assets/images/text-01.svg",
  },
  {
    title: "私たちの目指すもの",
    content: (
      <>
        テキストテキストテキストテキストテキストテキスト <br />
        テキストテキストテキストテキスト
        <br />
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
      </>
    ),
    image: "/assets/images/text-02.svg",
  },
  {
    title: "私たちの目指すもの",
    content: (
      <>
        テキストテキストテキストテキストテキストテキスト <br />
        テキストテキストテキストテキスト
        <br />
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
      </>
    ),
    image: "/assets/images/text-03.svg",
  },
];

const Cases = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="relative">
      <div className="w-full">
        <div className="w-full relative border-b border-black">
          {data.map((item, index) => (
            <div
              className="group w-full text-block h-[510px] last:h-[255px] last:mb-0 -mb-[255px] block relative bg-white"
              key={index}
            >
              <div className="w-full h-[255px] flex flex-col items-center justify-center sticky top-0 overflow-hidden border-t border-black">
                <div className="p-5 max-w-[1240px] flex justify-between max-md:flex-col w-full items-center gap-5 md:group-even:flex-row-reverse">
                  <div className="max-w-[500px]">
                    <h5 className="md:text-[22px] text-center text-[20px] font-bold">
                      {item.title}
                    </h5>
                    <div className="mt-5">
                      <p className="md:text-[18px] text-[14px]">
                        {item.content}
                      </p>
                    </div>
                  </div>
                  <div className="">
                    <img className="max-md:h-[50px]" src={item.image} alt="" />
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div
              className="group w-full text-block h-[510px] last:h-[255px] last:mb-0 -mb-[255px] block relative bg-white"
            >
              <div className="w-full h-[255px] flex flex-col items-center justify-center sticky top-0 overflow-hidden border-t border-black">
              <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-center absolute inset-0"
        >
          <source src="/assets/videos/fv.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Cases;
