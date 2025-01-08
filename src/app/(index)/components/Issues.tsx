"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const Issues = () => {
  const ref = useScrollAnimations();

  return (
    <section
      ref={ref}
      className="relative flex items-center justify-center flex-col overflow-hidden mt-9"
    >
      <div className="bg-[url(/assets/images/bg-issues.png)] lg:w-[115%] w-[150%] flex top-0 bottom-0 absolute [clip-path:ellipse(closest-side_farthest-side)] p-px overflow-hidden u-graident">
        <span className="bg-[url(/assets/images/bg-issues.png)] bg-white w-full h-full [clip-path:ellipse(closest-side_farthest-side)]"></span>
      </div>
      <div className="w-full max-w-[800px] mx-auto py-20 md:py-[140px] lg:py-[232px] px-5 relative">
        <h2 className="fade-up text-center md:text-[64px] text-[32px] leading-[1.3]">Background and issues</h2>
        <p className="fade-up md:text-[22px] text-[16px] text-[#0076CD] mt-7 md:mt-12 tracking-wider">
        Currently, beauty-related services are offered independently of each other, fragmenting the user experience. For example, a change in hairstyle does not lead seamlessly to the selection of a nail design or the purchase of a fashion item, each of which is treated as an independent decision. <br /><br />
        In addition, each service provider operates its own point system, which creates challenges
        </p>
        <div className="fade-up flex justify-center mt-10 md:mt-16">
            <ul className="list-decimal leading-[1.3] md:text-[20px] text-[16px] w-full max-w-[520px] space-y-5 pl-6 tracking-wider">
                <li>User behavior data is fragmented, making it impossible to make optimal recommendations</li>
                <li>There are restrictions on where you can use the points you earn.</li>
                <li>Difficult to coordinate between service providers</li>
                <li>Limited access to professional products</li>
            </ul>
        </div>
      </div>
    </section>
  );
};

export default Issues;
