import SectionWrap from "../common/sectionWrap";

export default function SectionSupport() {
    return (
        <SectionWrap anchor="support" number="6" title="LINE SUPPORT" content={<>ちょっと相談ヘルプミー<br />気軽にチャット！LINEサポート</>}>
            <div className="w-full md:pt-16 pt-8 md:pb-[96px] pb-16 px-[30px]">
                <div className="flex justify-center">
                    <img className="max-md:w-[120px]" src="/images/line-logo.png" alt="LINE" />
                </div>
                <p className="text-center md:text-[32px] text-[20px] font-bold mt-2.5">サポート専用LINEのご案内</p>
                <div className="flex items-center justify-center max-md:flex-wrap w-full md:max-w-[797px] max-w-[400px] mx-auto mt-8 md:mt-10 mb-10 md:mb-[51px]">
                    <figure className="w-full md:w-1/2">
                        <img className="rounded-[20px] [box-shadow:4px_4px_20px_0px_rgba(0,_0,_0,_0.10)]" src="/images/img-support.png" alt="" />
                    </figure>
                    <p className="md:text-[18px] text-[16px] w-full md:w-1/2 pt-6 md:pl-[30px]">
                    次世代ストレージのご購入や初期設定等のサポートから不明点の解消、質問・相談までチャットで対応中！
                    </p>
                </div>
                <div className="border-t border-black pt-10">
                    <div className="flex justify-center">
                        <h4 className="md:text-[36px] text-[20px] text-center font-black tracking-[0.2em]">
                        サポート専用LINE <br />
                        安心<span className="md:w-[73px] aspect-square inline-flex items-center justify-center rounded-full bg-[#FDD300] pl-2 pb-2 leading-[0] md:text-[80px] text-[40px]">5</span>つのお約束
                        </h4>
                    </div>
                </div>
            </div>
        </SectionWrap>
    );
  }