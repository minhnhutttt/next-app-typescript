"use client";
import Title from "@/components/title";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const data = [
  {
    image: "/assets/images/challenges-img-01.png",
    subTitle: "Cost and Production",
    title: "Expensive",
    content: "Need for cost reduction",
  },
  {
    image: "/assets/images/challenges-img-02.png",
    subTitle: "Regulatory Concerns",
    title: "Uncertainty",
    content: "Need for clarity",
  },
  {
    image: "/assets/images/challenges-img-03.png",
    subTitle: "Lack of Clinical Data",
    title: "Insufficient",
    content: "Data collection required",
  },
];

const Challenges = () => {
  const ref = useScrollAnimations();
  return (
    <section
      ref={ref}
      className="relative px-8 py-10 md:py-[60px]"
    >
      <div className="w-full md:max-w-[1100px] max-w-[475px] mx-auto">
        <Title>
            Current Challenges
        </Title>
        <p className="text-center font-roboto text-[16px] mt-6">Identifying key challenges in the exosome technology landscape</p>
        <div className="flex gap-5 mt-10 max-lg:flex-wrap justify-center">
          {data.map((item, index) => (
            <div
              key={index}
              className="fade-up w-[353px] h-[140px] flex gap-5 items-center rounded-md overflow-hidden bg-white px-5 py-6 border border-[#0C408C] border-t-[6px]"
            >
                <figure>
                    <img src={item.image} alt={item.title} />
                </figure>
                <div className="flex-1 space-y-1">
                    <p className="text-[16px] text-[#71717A] leading-[1.42]">{item.subTitle}</p>
                    <h5 className="text-[28px] font-roboto text-[#04A599] font-medium leading-[1.28]">{item.title}</h5>
                    <p className="text-[16px] font-roboto text-[#3F3F46]">{item.content}</p>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Challenges;
