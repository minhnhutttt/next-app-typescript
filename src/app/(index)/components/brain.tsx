"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const data = [
    'Centralization Risks',
    'Security and Privacy Concerns',
    'Management System Vulnerabilities',
    'Scalability Limitations',
    'Efficiency and Cost Issues',
    'Participation Barriers'
]

const Brain = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} id="brain" className="relative pt-20 md:pt-[160px] md:pb-[100px] pb-[60px] px-8">
      <div className="w-full max-w-[1350px] mx-auto">
        <h3 className="text-center font-semibold md:text-[96px] text-[32px]">Background and Challenges</h3>
        <div className="flex justify-end md:mt-[85px]">
            <ul className="list-decimal md:text-[36px] text-[20px] font-semibold leading-[3]">
                {data.map((item, index)=>(
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
      </div>
    </section>
  );
};

export default Brain;
