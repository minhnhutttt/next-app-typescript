"use client";
import Title from "@/components/title";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const data = [
  {
    image: "/assets/images/token-img-01.jpg",
    tag: "Sustainable Healthcare",
    title: "iPS Coin Fund",
    content: <>Support innovative projects</>,
  },
  {
    image: "/assets/images/token-img-02.jpg",
    tag: "Global Impact",
    title: "Research Partnership",
    content: <>Collaborate with global institutions</>,
  },
  {
    image: "/assets/images/token-img-03.jpg",
    tag: "Community-driven",
    title: "Governance Tools",
    content: (
      <>
        Transparent governance with blockchain
      </>
    ),
  },
];

const Tokens = () => {
  const ref = useScrollAnimations();
  return (
    <section
    id="introduction"
      ref={ref}
      className="relative px-8 py-[60px] md:bg-[url('/assets/images/tokens-bg.jpg')] bg-[url('/assets/images/tokens-bg-sp.jpg')] bg-cover"
    >
      <div className="w-full md:max-w-[1100px] max-w-[475px] mx-auto">
        <div className="relative max-md:flex flex-col items-center justify-center">
            <Title left>
                Explore iPS tokens
            </Title>
            <p className="fade-up font-roboto text-[16px] mt-6">Innovate with iPS Coins for medical projects</p>
            <span className="fade-up md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 max-md:mt-6">
                <img src="/assets/images/avatar.svg" alt="" />
            </span>
        </div>
        <div className="flex justify-center gap-10 flex-wrap mt-10">
          {data.map((item, index) => (
            <div key={index} className="fade-up w-[340px] min-h-[454px] rounded-md border border-[#E4E4E7] bg-white">
              <div className="relative">
                <figure className="h-[340px]">
                  <img className="h-full object-cover" src={item.image} alt={item.title} />
                </figure>
                <div className="absolute bottom-0 inset-x-0 bg-white/70 h-[71px] flex items-center justify-center flex-col">
                  <span className="text-[#0C408C] text-[20px] font-semibold">
                    {item.tag}
                  </span>
                  <span className="w-[100px] h-1 bg-[linear-gradient(90deg,_#D9748F_0%,_#0059BA_100%)]"></span>
                </div>
              </div>
              <div className="px-3 py-3 md:py-2 space-y-1.5">
                <h5 className="text-[20px] font-semibold leading-[1.4]">{item.title}</h5>
                <p className="text-[18px] font-light leading-[1.55]">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tokens;
