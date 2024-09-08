"use client";
import Title from "@/components/title";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const data = [
  {
    image: "/assets/images/vm-img-01.png",
    title: "Project Overview",
    subTitle: (
      <>
        EXO DAO is dedicated to revolutionizing healthcare and environmental
        sustainability through exosome technology.
      </>
    ),
  },
  {
    image: "/assets/images/vm-img-02.png",
    title: "Our Mission",
    subTitle: (
      <>To advance exosome research and development for a healthier world.</>
    ),
  },
  {
    image: "/assets/images/vm-img-03.png",
    title: "Vision",
    subTitle: <>Creating a global impact on health and the environment.</>,
  },
];

const VisionMission = () => {
  const ref = useScrollAnimations();
  return (
    <section
    id="vision"
      ref={ref}
      className="relative px-8 py-10 md:py-[60px] bg-[url('/assets/images/vm-bg.png')] bg-cover"
    >
      <div className="w-full md:max-w-[1100px] max-w-[475px] mx-auto flex gap-10 max-lg:flex-col max-lg:items-center">
        <div className="md:w-[563px]">
          <Title left>Vision and Mission</Title>
          <div className="flex gap-5 mt-8 md:mt-[30px] flex-col justify-center items-center">
            {data.map((item, index) => (
              <div
                key={index}
                className="fade-up w-full flex items-center max-md:flex-col gap-4 py-4 px-5 bg-white/90 rounded-md [box-shadow:0px_1px_3px_0px_rgba(0,_0,_0,_0.10),_0px_1px_2px_0px_rgba(0,_0,_0,_0.06)]"
              >
                <figure className="max-md:h-[206px]">
                  <img className="size-full" src={item.image} alt={item.title} />
                </figure>
                <div className="flex-1 space-y-2">
                  <h5 className="text-[20px] font-medium leading-[1.4] max-md:text-center">
                    {item.title}
                  </h5>
                  <p className="text-[16px] text-[#3F3F46] leading-[1.5] md:min-h-[95px]">
                    {item.subTitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="md:flex-1 w-full">
            <figure className="fade-up w-full rounded-[12px] overflow-hidden">
                <img className="w-full max-md:h-[350px] object-cover" src="/assets/images/vm-img.png" alt="" />
            </figure>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
