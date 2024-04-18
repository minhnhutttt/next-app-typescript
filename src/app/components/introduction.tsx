import { ReactNode } from "react"

interface articleProps {
    title: string
    text: ReactNode
  }

const Article = ({ title, text }: articleProps) => {
    return (
        <div className="aspect-square w-[200px] relative flex itemss-center flex-col md:pt-12 text-white m-10">
            <div className="absolute inset-0 rotate-45 border-[10px] border-black bg-[#252525]/[0.5] [box-shadow:0px_0px_60px_0px_#7FFF00]"></div>
            <div className="relative md:text-[32px] text-[18px] font-bold text-center">{title}</div>
            <div className="relative md:text-[20px] text-[16px] font-bold text-center md:mt-5 mt-3">{text}</div>
        </div>
    )
}

const Introduction = () => {
  return (
    <section className="bg-[url(/images/bg-01.jpg)] bg-cover md:pt-[106px] pt-[60px]">
        <div className="flex justify-center">
            <div className="relative text-white md:text-[52px] text-[24px] font-black tracking-[0.2em]">
                <span className="absolute md:top-[-50px] md:left-[-70px]">
                    <img src="/images/dekiru.png" alt="デキる" />
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
                <div className="w-[175px] aspect-square relative flex items-center justify-center flex-col font-bold m-8">
                    <div className="absolute inset-0 bg-[#7FFF00] border-[11px] border-black rotate-45"></div>
                    <div className="relative md:text-[32px] text-[18px]"><span className="md:text-[66px] text-[32px] font-bold leading-none">4</span>つ</div>
                    <div className="relative md:text-[28px] text-[16px]">の特徴</div>
                </div>
                <Article title="1タッチ!" text={<>即交換<br />即連絡</>} />
            </div>
            <div className="flex justify-center">
                <Article title="最先端!" text={<>NFT名刺<br />で印象UP</>} />
            </div>
        </div>
    </section>
  )
}

export default Introduction
