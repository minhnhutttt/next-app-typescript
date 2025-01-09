"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const RoadmapData = [
  {
    phase: "1",
    date: "2024 Q2-Q3",
    title: "Infrastructure construction",
    content:
      "We will build a basic system centered on beauty services and establish collaboration with initial partners.",
  },
  {
    phase: "2",
    date: "2024 Q4-2025 Q1",
    title: "Chain expansion",
    content:
      "We will expand into the nail and fashion fields and establish a chain-linked value provision system.",
  },
  {
    phase: "3",
    date: "2025 Q2-",
    title: "Cross-industry expansion",
    content:
      "Start collaborating with other industry tokens and build a broader value exchange network.",
  },
];

const Roadmap = () => {
  const ref = useScrollAnimations();

  return (
    <section
      ref={ref}
      className="relative bg-[#0495F0] px-5 md:pt-[145px] md:pb-[135px] py-[100px]"
    >
      <div className="w-full max-w-[840px] mx-auto">
        <div className="fade-up flex justify-center flex-col items-center text-center leading-[1.3]">
          <span className="md:text-[96px] text-[40px] tracking-[0.05em] text-white">
            Project roadmap
          </span>
        </div>
        <div className="divide-y divide-white">
            {RoadmapData.map((item, index) => (
                <div className="fade-up flex gap-5 pt-10 md:pb-9 pb-6 md:pt-[60px]" key={index}>
                    <div className="md:size-[140px] size-[100px] bg-[url(/assets/images/phase-bg.png)] bg-cover bg-center flex items-center justify-center md:text-[28px] text-[20px] italic">
                        Phase {item.phase}
                    </div>
                    <div className="flex-1 text-white">
                        <p className="md:text-[20px] text-[16px] leading-[1.2] tracking-wider">{item.date}</p>
                        <p className="md:text-[36px] text-[24px] leading-[1.2] tracking-wider">{item.title}</p>
                        <p className="md:text-[20px] text-[16px] leading-[1.3] tracking-wider md:mt-4 mt-3">
                            {item.content}
                        </p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
