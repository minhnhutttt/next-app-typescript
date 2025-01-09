"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const data = [
  {
    title: "End user",
    list: [
      "Enjoy consistent recommendations throughout your beauty experience",
      "Access to professional products",
      "Flexible value exchange across multiple services",
      "Receive personalized offers",
    ],
  },
  {
    title: "Service provider",
    list: [
      "Understanding customers’ overall aesthetic preferences",
      "Effective collaboration with related services",
      "Natural flow of new customers",
      "Realizing more effective service proposals",
    ],
  },
  {
    title: "Commodity provider",
    list: [
      "Reaching the right customer base",
      "Appropriate distribution management of professional products",
      "Gathering customer feedback directly",
    ],
  },
];

const EcosystemItem = ({ title, list }: { title: string; list: string[] }) => (
  <div className="fade-up flex flex-col items-center w-[380px] md:pb-10 pb-7">
    <span className="md:text-[32px] text-[20px] text-center text-[#1B1B2E]">
      {title}
    </span>
    <ul className="list-disc pl-6 md:text-[14px] text-[12px] leading-[1.6] mt-2 w-full">
      {list.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

const Ecosystem = () => {
  const ref = useScrollAnimations();

  return (
    <section
      ref={ref}
      className="relative bg-[url('/assets/images/ecosystem-bg.png')] [filter:drop-shadow(-10px_0px_60px_rgba(27,_57,_95,_0.10))] bg-cover bg-top mt-[90px] md:mt-[140px] pt-[100px] md:pt-[220px] md:pb-[158px] pb-24 px-5"
    >
      <div className="w-full max-w-[1360px] mx-auto">
        <div className="fade-up flex justify-center flex-col items-center text-center leading-[1.3]">
          <span>
            <img src="/assets/images/title-ic.svg" alt="" />
          </span>
          <span className="md:text-[96px] text-[40px] tracking-[0.05em] mt-6">
            Ecosystem and circulation system
          </span>
          <span className="md:text-[48px] text-[28px] tracking-[0.05em]">
            Circular flow of value
          </span>
        </div>
        <div className="flex items-center gap-5 justify-between mt-7 md:mt-10 max-sm:flex-col">
          <figure className="fade-up">
            <img src="/assets/images/ecosystem-pyramid.png" alt="" />
          </figure>
          <div className="fade-up leading-[1.3] md:w-[680px] md:space-y-10 space-y-6">
            <div>
              <p className="md:text-[24px] text-[18px] border-b border-[#1B1B2E] px-5 lg:px-9 pb-2 md:pb-3">
                1. chain of experiences
              </p>
              <p className="md:text-[16px] text-[14px] px-5 lg:px-9 md:pt-7 pt-5">
                Aesthetic experiences are linked together in a natural way, with
                changes in hairstyles prompting the selection of nail designs,
                which in turn lead to fashion suggestions to match.
              </p>
            </div>
            <div>
              <p className="md:text-[24px] text-[18px] border-b border-[#1B1B2E] px-5 lg:px-9 pb-2 md:pb-3">
                2. Data circulation
              </p>
              <p className="md:text-[16px] text-[14px] px-5 lg:px-9 md:pt-7 pt-5">
                 The choices and experiences you make with each service provide
                useful information to the next service provider, allowing them
                to make more appropriate proposals.
              </p>
            </div>
            <div>
              <p className="md:text-[24px] text-[18px] border-b border-[#1B1B2E] px-5 lg:px-9 pb-2 md:pb-3">
                3. cycle of value
              </p>
              <p className="md:text-[16px] text-[14px] px-5 lg:px-9 md:pt-7 pt-5">
                Acquired tokens can be exchanged for various services and
                products, and their use creates a continuous cycle that leads to
                the acquisition of new tokens.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full max-w-[1140px] mx-auto mt-16 md:mt-[75px]">
            <p className="fade-up text-center md:text-[36px] text-[24px] italic tracking-[0.07em]">
            Value of each participant
            </p>
          <div className="flex flex-wrap justify-center md:mt-10 mt-6">
            {data.map((item, index) => (
              <EcosystemItem title={item.title} list={item.list} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
