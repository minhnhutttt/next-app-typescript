"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const Donation = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="relative pt-[19.167vw]">
      <div className="w-full max-w-[1440px] mx-auto px-5 pt-16 md:pt-[100px]">
        <h3 className="text-center md:text-[48px] text-[32px] font-bold tracking-wide">Donation mechanism using BGT coins</h3>
        <div className="w-full max-w-[1360px] mx-auto mt-8 md:mt-[72px] md:space-y-[100px] space-y-[60px]">
            <div className="flex items-center max-md:flex-col-reverse max-md:gap-6">
                <div className="flex-1 flex justify-center md:px-5">
                    <div className="w-full max-w-[555px]">
                        <h5 className="md:text-[32px] text-[24px] font-bold leading-[1.3]">
                        BGT coins are digital tokens that represent donations to projects. Its characteristics are as follows
                        </h5>
                        <ul className="md:text-[18px] text-[15px] font-medium list-decimal pl-4 md:mt-10 mt-6 md:space-y-5 space-y-3 md:mb-7 mb-5">
                            <li>Easy to obtain: available for purchase on the BGT platform</li>
                            <li>Flexible donations: You can donate any amount, from small to large amounts.</li>
                            <li>Project specification: You can specify a specific project to donate to.</li>
                            <li>Transparency: All donation transactions are recorded and traceable on the blockchain</li>
                        </ul>
                        <div className="border border-[#0DA66E] rounded-[20px] md:text-[16px] text-[13px] leading-[1.3] md:py-[30px] py-5 xl:px-[50px] px-5 text-[#0DA66E]">
                        Donations to BGT projects contribute to the discovery and preservation of human history and culture, provide educational value, and create opportunities to connect with like-minded people around the world.
                        </div>
                    </div>
                </div>
                <figure className="max-md:w-auto max-xl:w-1/2">
                    <img className="" src="/assets/images/donation-img-01.png" alt="" />
                </figure>
            </div>
            <div className="flex items-center max-md:flex-col max-md:gap-6">
            <figure className="max-md:w-auto max-xl:w-1/2">
                    <img className="" src="/assets/images/donation-img-02.png" alt="" />
                </figure>
                <div className="flex-1 flex justify-center md:px-5">
                    <div className="w-full max-w-[555px]">
                        <h5 className="md:text-[32px] text-[24px] font-bold leading-[1.3]">
                        Donor benefits
                        </h5>
                        <ul className="md:text-[18px] text-[15px] font-medium list-decimal pl-4 md:mt-10 mt-6 md:space-y-5 space-y-3 md:mb-7 mb-5">
                            <li>Voting rights: the right to participate in the selection of new projects</li>
                            <li>Information access: Access to detailed progress reports of supported projects</li>
                            <li>Sharing results: priority access to discovered information and materials</li>
                            <li>Community participation: right to participate in discussion forums and Q&A sessions with experts</li>
                            <li>Recognition: Names of donors who have made significant contributions will be included in the project report.</li>
                        </ul>
                        <div className="border border-[#0DA66E] rounded-[20px] md:text-[16px] text-[13px] leading-[1.3] md:py-[30px] py-5 xl:px-[50px] px-5 text-[#0DA66E]">
                        Participating in a BGT project means more than just a monetary donation. It is an opportunity to directly contribute to the excavation and preservation of human wisdom and cultural heritage, and a participation in the adventure of restoring a lost page of history together. Your donation could be the catalyst for the next big historical discovery. Now is the time to be a part of history.
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
      </div>
    </section>
  );
};

export default Donation;
