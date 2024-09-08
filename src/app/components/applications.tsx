"use client";
import Title from "@/components/title";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const data = [
  {
    image: "/assets/images/applications-img-01.png",
    title: "Regenerative Medicine",
    subTitle: (<>Tissue Regeneration and Repair</>),
  },
  {
    image: "/assets/images/applications-img-02.png",
    title: "Cancer Therapy",
    subTitle: (<>Targeted Therapies with Fewer Side Effects</>),
  },
  {
    image: "/assets/images/applications-img-03.png",
    title: "Environmental Protection",
    subTitle: (<>Ecosystem Restoration and Pollutant Removal</>),
  },
];

const Applications = () => {
  const ref = useScrollAnimations();
  return (
    <section
      ref={ref}
      className="relative px-8 py-10 md:py-7"
    >
      <div className="w-full md:max-w-[1100px] max-w-[475px] mx-auto">
        <Title>
            Applications of Exosome <br />
            Technology
        </Title>
        <div className="flex gap-3 md:gap-7 mt-8 md:mt-10 max-lg:flex-wrap justify-center items-center">
          {data.map((item, index) => (
            <div
              key={index}
              className="fade-up w-[348px] h-[328px] flex gap-5 flex-col items-center p-3"
            >
                <figure>
                    <img src={item.image} alt={item.title} />
                </figure>
                <div className="flex-1 space-y-2 w-[244px]">
                    <h5 className="text-[20px] leading-[1.4] text-center">{item.title}</h5>
                    <p className="text-[16px] text-[#71717A] leading-[1.5] text-center">{item.subTitle}</p>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Applications;
