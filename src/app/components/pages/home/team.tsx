import useScrollAnimations from "@/app/hooks/useScrollAnimations";
import SectionContainer from "../../common/sectionContainer";

export default function Team() {
    const ref = useScrollAnimations();
    return (
        <SectionContainer>
            <div ref={ref} className="bg-[url('/images/bg-team.png')] bg-cover bg-center">
                <h3 className="fade-down">
                    <img src="/images/our-team.png" alt="Our Team" />
                </h3>
                <div className="content-scroll-keep px-5 w-full mx-auto mt-3 md:mt-10 pb-[120px] md:pb-[380px]">
                    <h5 className="fade-down text-center md:text-[28px] text-[24px] font-mincho font-semibold">
                        世界各国の精鋭が集う <br />
                        我々のチーム
                    </h5>
                    <div className="fade-down md:mt-10 mt-6 max-w-[882px] mx-auto border-[1.5px] border-white/[0.88] bg-[#010E15]/[0.65] px-6 md:px-9">
                        <div className="md:text-[45px] text-[36px] max-md:py-2 text-white font-helvetica font-thin text-center border-b border-white/50">All for the project</div>
                        <div className="text-white md:pt-7 pt-4 md:pb-5 pb-4">
                            <p className="text-center md:text-[22px] text-[20px] font-semibold font-mincho">全てはあなたのプロジェクトの成功の為に</p>
                            <p className="md:text-[19px] text-[16px] leading-relaxed pt-6 md:pt-8">
                            チームメンバー全員が少なくとも一度はプロジェクトで挫折を経験しています。その苦い経験を胸に刻み「もう二度とあのような思いをしたくない」という強い決意を持って、新たなプロジェクトで結果を出し続けています。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </SectionContainer>
    );
}
