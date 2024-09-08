"use client";
import Title from "@/components/title";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const data = [
  {
    image: "/assets/images/technology-img-01.jpg",
    title: "Role of Exosomes",
    subTitle: "Information Transfer between Cells",
    content: (
      <>
        Exosomes play a crucial role in various applications such as
        regenerative medicine, cancer therapy, and environmental remediation.
      </>
    ),
  },
  {
    image: "/assets/images/technology-img-02.jpg",
    title: "Production Challenges",
    subTitle: "High Costs and Limited Production Capacity",
    content: (
      <>
        Developing technologies for efficient separation and purification of
        exosomes is essential for future advancements.
      </>
    ),
  },
];

const Background = () => {
  const ref = useScrollAnimations();
  return (
    <section
      ref={ref}
      className="relative px-8 py-10 md:py-[60px] bg-[url('/assets/images/bg-background.png')] bg-cover bg-center"
    >
      <div className="w-full md:max-w-[1100px] max-w-[475px] mx-auto">
        <Title>
          Background on Exosome <br />
          Technology
        </Title>
        <div className="flex gap-10 py-5 mt-10 max-lg:flex-wrap justify-center">
          {data.map((item, index) => (
            <div
              key={index}
              className="fade-up md:w-[540px] flex gap-4 max-md:flex-col rounded-md bg-white/90 px-5 py-4 [box-shadow:0px_1px_3px_0px_rgba(0,_0,_0,_0.10),_0px_1px_2px_0px_rgba(0,_0,_0,_0.06)]"
            >
                <figure className="rounded-md overflow-hidden md:size-[160px] size-full">
                    <img className="size-full object-cover" src={item.image} alt={item.title} />
                </figure>
                <div className="flex-1 space-y-1.5">
                    <h5 className="text-[20px] font-medium leading-[1.4] max-md:text-center">{item.title}</h5>
                    <p className="text-[14px] text-[#71717A] leading-[1.42] max-md:text-center">{item.subTitle}</p>
                    <p className="text-[16px] text-[#3F3F46] line-clamp-5">{item.content}</p>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Background;
