"use client";
import Title from "@/components/title";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const data = [
  {
    image: "/assets/images/challenges-img-01.svg",
    subTitle: "Improved generation efficiency",
    title: "Resistivity",
    content: "Need to improve efficiency",
  },
  {
    image: "/assets/images/challenges-img-02.svg",
    subTitle: "Managing Tumorigenesis Risk",
    title: "Insecurity",
    content: "Need to develop safe alternative technologies",
  },
  {
    image: "/assets/images/challenges-img-03.svg",
    subTitle: "Refining Differentiation",
    title: "Lack of precision",
    content: "Need to improve accuracy",
  },
];

const Challenges = () => {
  const ref = useScrollAnimations();
  return (
    <section
    id="challenges"
      ref={ref}
      className="relative px-8 py-[60px] md:bg-[url('/assets/images/challenges-bg.jpg')] bg-[url('/assets/images/challenges-bg-sp.jpg')] bg-cover bg-center"
    >
      <div className="w-full md:max-w-[1100px] max-w-[475px] mx-auto">
        <div className="flex items-center justify-center text-center">
            <h3 className="fade-up text-[#FDD0DF] text-[24px] md:text-[36px] font-bold md:leading-[1.1] leading-[1.3]">
            Current Challenges
            </h3>
        </div>
        <p className="fade-up text-center font-roboto text-[16px] text-white mt-6">Identifying key challenges in the exosome technology landscape</p>
        <div className="flex gap-5 mt-10 max-lg:flex-wrap justify-center">
          {data.map((item, index) => (
            <div
              key={index}
              className="fade-up w-[353px] md:h-[156px] flex gap-3 items-center rounded-md overflow-hidden bg-white px-6 md:px-5 pb-5 pt-[14px] md:py-6 border border-[#3FCAE1] border-t-[6px]"
            >
                <figure>
                    <img src={item.image} alt={item.title} />
                </figure>
                <div className="flex-1 space-y-1">
                    <p className="text-[16px] text-[#71717A] leading-[1.42] max-md:tracking-[-0.045em]">{item.subTitle}</p>
                    <h5 className="text-[28px] font-roboto text-[#D9748F] font-medium leading-[1.28] whitespace-nowrap">{item.title}</h5>
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
