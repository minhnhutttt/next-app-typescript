"use client";
import Title from "@/components/title";
import Button from "@/components/button";
import useScrollAnimations from "@/hooks/useScrollAnimations";
const data = [
  {
    icon: "/assets/images/ic1.png",
    text: `Platform development and initial user acquisition`,
  },
  {
    icon: "/assets/images/ic2.png",
    text: `Strengthening marketing activities and preparation for international `,
  },
  {
    icon: "/assets/images/ic3.png",
    text: `Implementation of additional features and introduction of community governance`,
  },
  {
    icon: "/assets/images/ic4.png",
    text: `Global expansion and partnership growth`,
  },
];
const Roadmap = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="md:pt-[150px] pt-16 md:pb-[200px] pb-[100px]">
      <Title>Future Roadmap</Title>
      <p className="fade-up md:text-[18px] text-[16px] text-center mt-[20px] mb-[30px]">
        The Fave Coin project will progress through the following phases
      </p>
      <div className="bg-[url(/assets/images/bg_roadmap.jpg)] bg-center bg-cover md:py-36 py-10 mb-[61px] md:px-0 px-5">
        <div className="relative  lg:flex items-baseline max-w-[1170px] w-full min-h-[369px] h-full mx-auto lg:pr-[50px] lg:pb-0 pb-10">
          {data.map((item, index) => (
            <div
              key={index}
              className={`fade-up lg:max-w-[280px] lg:px-8 px-4 py-4 lg:w-full w-1/2 lg:min-h-[180px] lg:mb-0 mb-2.5 lg:mx-auto bg-white ${index % 2 !== 0 ? "lg:mt-auto rounded-bl-[20px] rounded-br-[20px] ml-auto" : "rounded-tl-[20px] rounded-tr-[20px]"}`}
            >
              <div className="flex items-center justify-center">
                <h3 className="md:text-[24px] text-[16px] font-bold mt-1">
                  PHASE
                </h3>
                <figure className="ml-2">
                  <img className="" src={item.icon} alt="" />
                </figure>
              </div>

              <p className="md:text-[18px] text-[14px] font-medium mt-2">
                {item.text}
              </p>
            </div>
          ))}
          <span className="fade-up absolute lg:top-2/4 lg:left-0  lg:h-[52px] lg:bg-[url(/assets/images/arrow.png)] lg:bg-[center_right] lg:-translate-y-1/2 z-0 max-lg:top-0 max-lg:left-2/4 right-0 max-lg:w-[52px] max-lg:h-full bg-[url(/assets/images/arrow_sp.png)] max-lg:[background-size:100%] max-lg:bg-[bottom_right] max-lg:-translate-x-1/2"></span>
        </div>
      </div>
      <Button></Button>
    </section>
  );
};

export default Roadmap;
