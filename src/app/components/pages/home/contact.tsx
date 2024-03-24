import SectionContainer from "../../common/sectionContainer";

export default function Contact() {
    return (
        <SectionContainer>
            <div className="">
                <h3 className="flex justify-end">
                    <img className="" src="/images/contact.png" alt="Contact" />
                </h3>
                <div className="px-8 w-full md:max-w-[1160px] max-w-[600px] mx-auto mt-3 md:mt-2 relative pb-14 md:pb-[180px]">
                    <h5 className="text-center md:text-[28px] text-[18px] font-mincho font-semibold">
                        お問い合わせ
                    </h5>
                    <div className="flex justify-center mt-10 md:mt-20">
                        <a href="https://lin.ee/VhROyxa" className="w-[317px] h-[63px] rounded-[32px] bg-[#74DB0D] flex items-center justify-center md:text-[20px] text-[16px] font-bold text-[#404040]" target="_blank">LINE登録はこちら</a>
                    </div>
                    <div className="flex justify-center mt-8">
                        <p className="md:text-[20px] text-[14px] font-bold text-[#404040]">
                            プロジェクトパートナーをご検討の方 <br />
                            お気軽にご連絡下さい。
                        </p>
                    </div>
                </div>
            </div>
        </SectionContainer>
    );
}
