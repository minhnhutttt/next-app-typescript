import { ReactNode } from "react"

interface articleProps {
    title: string
    text: ReactNode
  }

const Article = ({ title, text }: articleProps) => {
    return (
        <div className="aspect-square w-[88px] md:w-[200px] relative flex itemss-center flex-col pt-4 md:pt-12 text-white m-2 md:m-10">
            <div className="absolute inset-0 rotate-45 md:border-[10px] border-[5px] border-black bg-[#252525]/[0.5] [box-shadow:0px_0px_60px_0px_#7FFF00]"></div>
            <div className="relative md:text-[32px] text-[16px] font-bold text-center">{title}</div>
            <div className="relative md:text-[20px] text-[12px] font-bold text-center md:mt-5 mt-1">{text}</div>
        </div>
    )
}

const Introduction = () => {
  return (
    <section className="bg-[url(/images/bg-02.jpg)] bg-center">
        <div className="bg-[url(/images/bg-01.png)] bg-bottom bg-cover md:py-[106px] py-[60px]">
            <div className="flex justify-center">
                <div className="relative text-white md:text-[52px] text-[24px] font-black tracking-[0.2em]">
                    <span className="absolute -top-8 -left-10 md:top-[-50px] md:left-[-70px]">
                        <img className="max-md:w-20" src="/images/dekiru.png" alt="デキる" />
                    </span>
                <span className="relative">ビジネスマンが選ぶ<br />NFT名刺管理アプリ</span>
                </div>
            </div>
            <div className="mt-10">
                <div className="flex justify-center">
                    <Article title="制作3分!" text={<>すぐに<br />使える</>} />
                </div>
                <div className="flex justify-center items-center my-[-16px]">
                    <Article title="合理的!" text={<>いつでも<br />どこでも</>} />
                    <div className="w-[80px] md:w-[175px] aspect-square relative flex items-center justify-center flex-col font-bold m-8">
                        <div className="absolute inset-0 bg-[#7FFF00] md:border-[11px] border-[5.5px] border-black rotate-45"></div>
                        <div className="relative md:text-[32px] text-[16px]"><span className="md:text-[66px] text-[33px] font-bold leading-none">4</span>つ</div>
                        <div className="relative md:text-[28px] text-[14px]">の特徴</div>
                    </div>
                    <Article title="1タッチ!" text={<>即交換<br />即連絡</>} />
                </div>
                <div className="flex justify-center">
                    <Article title="最先端!" text={<>NFT名刺<br />で印象UP</>} />
                </div>
            </div>
        </div>
        <div className="py-12 px-5 md:py-20">
            <div className="flex justify-center">
                <img className="[box-shadow:0px_0px_30px_0px_rgba(0,_0,_0,_0.10)] max-md:w-[140px]" src="/images/diver-biz.png" alt="DIVER Biz" />
            </div>
            <div className="text-center mt-6 md:mt-12 max-md:space-y-2">
                <p className="md:text-[24px] text-[14px] leading-none font-black">ダイバービズ</p>
                <h3 className="md:text-[68px] text-[34px] font-black leading-none">DIVER Biz<span className="md:text-[42px] text-[21px]">を</span></h3>
                <p className="md:text-[42px] text-[21px] font-black">今すぐインストール</p>
                <p className="text-center md:text-[16px] text-[13px] max-md:leading-[2]">※NFT名刺の制作は<a href="/form" className="font-bold inline-block relative after:absolute after:top-full after:left-0 md:after:h-[3px] after:h-[2px] after:w-full after:bg-black after:rounded-3xl">フォーム</a>からの申請が必要です（アプリ内で制作はできません）</p>
            </div>
            <div className="flex justify-center items-center gap-5 mt-7 md:mt-10">
                <a href=""><img src="/images/btn-ios.png" alt="" /></a>
                <a href=""><img src="/images/btn-android.png" alt="" /></a>
            </div>
        </div>
    </section>
  )
}

export default Introduction
