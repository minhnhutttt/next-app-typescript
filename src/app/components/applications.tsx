"use client";
import Title from "@/components/title";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const data = [
  {
    label: "Regenerative Medicine",
    image: "/assets/images/applications-img-01.png",
    title: "Cell Transplants",
    subTitle: (<>Used for Parkinson&apos;s disease and diabetes treatment</>),
  },
  {
    label: "Gene Therapy",
    image: "/assets/images/applications-img-02.png",
    title: "Personalized Medicine",
    subTitle: (<>Minimize rejection risk using patient&apos;s cells</>),
  },
  {
    label: "Drug Screening",
    image: "/assets/images/applications-img-03.png",
    title: "Efficient Process",
    subTitle: (<>Established for new drug development</>),
  },
];

const Applications = () => {
  const ref = useScrollAnimations();
  return (
    <section
      ref={ref}
      className="relative px-8 py-[60px]"
    >
      <div className="w-full md:max-w-[1100px] max-w-[475px] mx-auto">
        <Title>
            Applications of iPS Cells
        </Title>
        <p className="fade-up text-center font-roboto text-[16px] mt-6">Explore practical uses of iPS cells in medicine</p>
        <div className="flex gap-9 md:gap-10 mt-10 max-lg:flex-wrap justify-center items-center">
          {data.map((item, index) => (
            <div
              key={index}
              className="fade-up w-[340px] gap-1 flex flex-col items-center p-3"
            >
                <div className="flex">
                    <div className="bg-[linear-gradient(90deg,_#D9748F_0%,_#0059BA_100%)] relative rounded-lg p-0.5 overflow-hidden h-9">
                    <div className="px-2 w-full h-full flex justify-center items-center bg-white rounded-lg"><span className="u-text-gradient bg-[linear-gradient(90deg,_#D9748F_0%,_#0059BA_100%)]">{item.label}</span></div>
                    </div>
                </div>
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
