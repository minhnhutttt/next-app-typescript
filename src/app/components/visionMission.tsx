"use client";
import Title from "@/components/title";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const data = [
  {
    image: "/assets/images/vm-img-01.png",
    imageSp: "/assets/images/vm-img-01-sp.png",
    title: "Project Overview",
    subTitle: (
      <>
        Through the iPS DAO, we aim to accelerate technological development and build a sustainable healthcare system while addressing ethical issues.
      </>
    ),
  },
  {
    image: "/assets/images/vm-img-02.png",
    imageSp: "/assets/images/vm-img-02-sp.png",
    title: "Our Mission",
    subTitle: (
      <>To advance iPS cells research and development for a healthier world.</>
    ),
  },
  {
    image: "/assets/images/vm-img-03.png",
    imageSp: "/assets/images/vm-img-03-sp.png",
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
      className="relative px-8 py-[60px] md:bg-[url('/assets/images/vm-bg.jpg')] bg-[url('/assets/images/vm-bg-sp.jpg')] bg-cover"
    >
      <div className="w-full md:max-w-[1100px] max-w-[475px] mx-auto flex gap-10 max-lg:flex-col max-lg:items-center">
        <div className="md:w-[600px]">
          <Title left>Vision and Mission</Title>
          <div className="flex gap-5 mt-8 md:mt-[30px] flex-col justify-center items-center">
            {data.map((item, index) => (
              <div
                key={index}
                className="fade-up w-full max-md:h-[392px] flex items-center max-md:flex-col gap-4 p-3 bg-white/90 rounded-md [box-shadow:0px_1px_3px_0px_rgba(0,_0,_0,_0.10),_0px_1px_2px_0px_rgba(0,_0,_0,_0.06)]"
              >
                <figure className="">
                  <img className="max-md:hidden" src={item.image} alt={item.title} />
                  <img className="md:hidden" src={item.imageSp} alt={item.title} />
                </figure>
                <div className="flex-1 space-y-2">
                  <h5 className="text-[20px] font-medium leading-[1.4] max-md:text-center">
                    {item.title}
                  </h5>
                  <p className="text-[16px] text-[#3F3F46] leading-[1.5]">
                    {item.subTitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="md:flex-1 w-full">
            <figure className="fade-up w-full rounded-[12px] overflow-hidden">
                <img className="w-full max-md:hidden" src="/assets/images/vm-img.png" alt="" />
                <img className="w-full md:hidden" src="/assets/images/vm-img-sp.png" alt="" />
            </figure>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
