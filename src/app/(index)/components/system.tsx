"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
gsap.config({
  nullTargetWarn: false,
});

const data = [
    {
        movie: '/assets/videos/system-01.mp4',
        title: (<>Technical Implementation</>),
        content: (<>
        The DRC20 adopts Proof of Contribution (PoC), an improved version of Proof of Staking, where rewards are distributed based on the user’s contributions to the network, such as transaction verification and node operation. Instead of transaction fees, each transaction incurs a point cost, and users receive a daily point allocation to facilitate their transactions, preventing spam attacks while maintaining zero transaction fees. The network employs multi-layer security protocols and zero-knowledge proof technology to ensure transaction validity while protecting privacy. <br />
        <br />
        The absence of fees addresses a major limitation in traditional blockchain systems, where small transactions often become economically unviable. This opens new opportunities for economic interactions and social contributions.
        </>)
    },
    {
        movie: '/assets/videos/system-02.mp4',
        title: (<>Token Economy Structure</>),
        content: (<>
        The CIP Coin economy promotes frequent and meaningful human interactions. The initial issuance is set at 1 billion CIP, with an annual fixed inflation rate of 2%. Newly issued tokens are distributed between network maintainers and the ecosystem development fund. An algorithmic stabilization mechanism ensures value stability by automatically adjusting token circulation based on market demand. Incentive systems encourage active participation by awarding bonus points for frequent transactions and contributions.
        </>)
    },
    {
        movie: '/assets/videos/system-03.mp4',
        title: (<>Smart Contract Implementation</>),
        content: (<>
        Smart contracts managing CIP Coin are optimized for micro and high-frequency transactions. They allow for automated sending and receiving processes, with features like attaching gratitude messages or conditional transfers upon task completion. Additionally, they facilitate small and recurring donations, with tracking functionality for donation usage. A social credit scoring system calculates and updates a user’s score based on gifting and receiving patterns, serving as a trust indicator within the community.
        </>)
    },
    {
        movie: '/assets/videos/system-04.mp4',
        title: 'Data Analytics and Continuous Improvement',
        content: (<>
        The CIP Coin system incorporates advanced data analytics for refinement. Machine learning algorithms analyze transaction patterns to detect trends and anomalies, enabling fraud detection and user behavior predictions. Privacy-preserving analysis using differential privacy protects individual user data while extracting valuable insights. A feedback loop continuously updates system parameters based on user behavior and community input, dynamically adjusting the frequency and range of gratitude expressions and donation amounts.
        </>)
    }
]

const System = () => {
  const ref = useScrollAnimations();
  const systemRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    let ctx = gsap.context(() => {
      if (systemRef.current) {
        const items = systemRef.current.querySelectorAll(".systerm-item");

        items.forEach((item) => {
          gsap.fromTo(
            item,
            { scale: 1 },
            {
              scale: 0.7,
              duration: 1,
              ease: "power1.out",
              scrollTrigger: {
                trigger: item,
                start: "top center", 
                scrub: true,
              },
            }
          );
        });
      }
    });

    return () => ctx.revert();
  });
  return (
    <section ref={ref} className="relative md:pt-[130px] pt-[100px] z-10">
      <div ref={systemRef} className="w-full relative border-b border-[#777]">
          {data.map((item,index) => (
            <div className="group w-full h-[230vh] last:h-[130vh] last:mb-0 -mb-[100vh] block relative odd:bg-[#101010] even:bg-[#FFFAFA] odd:text-white even:text-black px-5 xl:pr-[110px] md:pr-16 pr-5" key={index}>
              <div className="w-full h-[100vh] flex max-md:flex-col max-md:items-center justify-between gap-5 md:gap-[50px] sticky top-0 overflow-hidden pt-7 md:pt-[38px] pb-6">
                <div className="fade-up flex flex-col justify-between md:pl-5 gap-5 md:gap-10">
                  <h5 className="lg:text-[98px] md:text-[60px] text-[32px] font-bold leading-none">{item.title}</h5>
                  <div className="flex justify-end">
                    <p className="w-full max-w-[582px] border-t group-even:border-black group-odd:border-white py-5 md:py-[25px] px-5 md:px-[35px] leading-[1.3] md:text-[18px] text-[16px]">
                        {item.content}
                    </p>
                  </div>
                </div>
                <div className="fade-up relative max-md:flex-1 w-full flex items-end md:max-w-[35%]">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="systerm-item max-md:absolute w-full max-md:h-full object-cover object-center md:rounded-[60px] rounded-[30px] md:aspect-[480/640]"
                    >
                    <source src={item.movie} type="video/mp4" />
                    Your browser does not support the video tag.
                    </video>
                </div>
              </div>
            </div>
          ))}
        </div>
    </section>
  );
};

export default System;
