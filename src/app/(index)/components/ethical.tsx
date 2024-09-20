"use client";
import useScrollAnimations from "@/hooks/useScrollAnimations";
import { ReactNode } from "react";

type ArticleType = {
    image: string,
    title: string,
    children: ReactNode,
    link: string
}

const Article = ({image, title, children, link}: ArticleType) => {
    return (
        <div className="group flex items-center odd:justify-start even:justify-end">
            <div className="w-full max-w-[1320px] flex max-md:flex-col max-md:group-even:flex-col group-even:flex-row-reverse items-center">
                <figure className="fade-up max-md:w-full max-xl:w-1/2">
                    <img src={image} alt={title} />
                </figure>
                <div className="fade-up flex-1 p-6 md:p-10">
                    <h5 className="md:text-[32px] text-[20px] font-bold">{title}</h5>
                    <p className="md:text-[20px] text-[16px] font-bold mt-5 leading-[1.3]">
                        {children}
                    </p>
                    <div className="flex justify-end mt-8 md:mt-14">
                        <a href="/" className="flex items-center gap-2 md:text-[20px] text-[16px] font-bold duration-150 hover:opacity-75">
                        <span>Learn more</span>
                        <span><img src="/assets/images/arrow.svg" alt="" /></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Ethical = () => {
    const ref = useScrollAnimations();

    return (
        <section ref={ref} className="relative overflow-hidden">
            <div className="w-full py-[85px] md:py-[216px]">
                <h4 className="fade-up md:text-[64px] text-[32px] text-center font-bold leading-[1.2]">
                Ethical and Regulatory Challenges
                </h4>
                <div className="w-full max-w-[1440px] mx-auto md:mt-[100px] mt-[60px] md:space-y-[160px] space-y-[90px]">
                    <Article image="/assets/images/img-01.png" title="[ A ] Ethical Issues" link="/">
                        1. patient safety and risk management <br /><br />
                        2. informed consent<br /><br />
                        3. equity and access to treatment
                    </Article>
                    <Article image="/assets/images/img-02.png" title="[ B ] Regulatory Issues" link="/">
                        1. Certification of Product Safety and Efficacy<br /><br />
                        2. Regulation of manufacturing and quality control<br /><br />
                        3. Ethical Review and Approval of Clinical Trials
                    </Article>
                </div>
            </div>
            <div id="framework" className="w-full pb-[85px] md:pb-[216px]">
                <h4 className="md:text-[64px] text-[32px] text-center font-bold leading-[1.2]">
                HGF DAO Framework
                </h4>
                <div className="w-full max-w-[1440px] mx-auto md:mt-[100px] mt-[60px] md:space-y-[160px] space-y-[90px]">
                    <Article image="/assets/images/img-03.png" title="[ 1 ] DAO Structure and Operation" link="/">
                        1. Project Selection <br /><br />
                        2. Determination of project priorities <br /><br />
                        3. Allocation of funds for projects
                    </Article>
                    <Article image="/assets/images/img-04.png" title="[ 2 ] Role of HGF Token" link="/">
                        The HGF token serves as a funding vehicle for governance and project support within the DAO.Token holders will be offered incentives based on their contribution to technology development.
                    </Article>
                </div>
            </div>
        </section>
  );
};

export default Ethical;
