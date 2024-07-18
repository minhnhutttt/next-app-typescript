'use client'

import useScrollAnimations from '@/hooks/useScrollAnimations'


const Development = () => {
  const ref = useScrollAnimations();
  return (
    <>
    <section ref={ref} className="relative bg-[linear-gradient(180deg,_#2A66DB_0%,_#31167C_100%)] md:mt-[289px] mt-[150px] pb-16 md:pb-[110px]">
        <div className="absolute inset-0 bg-[url('/assets/images/bg-dev.png')] bg-cover"></div>
        <div className="w-full max-w-[1440px] mx-auto">
            <div className="h-px"></div>
            <div className="bg-[linear-gradient(278deg,_#FF2A2A_-5.11%,_#FF9B04_78.14%)] h-20 md:h-[91px] relative -mt-[58px] max-w-[1080px]">
                <div className="flex py-2">
                    <span className="md:w-[70px] w-5 bg-white h-px mt-3 md:mt-5"></span>
                    <p className="md:text-[24px] text-[16px] font-bold text-white">AI活用の次なるステージへ<br />
                    導入最適化パッケージと自社専用ツールの開発</p>
                    <span className="flex-1 bg-white h-px mt-3 md:mt-5"></span>
                </div>
                <span className="absolute bottom-0 right-0">
                    <img src="/assets/images/dev-text.png" alt="" />
                </span>
            </div>
            <div className="px-5">
            <div className="w-full max-w-[1095px] mx-auto flex flex-wrap justify-center mt-12 md:mt-[86px] gap-10">
                <div className="w-[527px] relative overflow-hidden border-[3px] border-white/80 rounded-[38px] bg-[linear-gradient(180deg,_#F35646_0%,_#F58214_100%)]">
                    <div className="relative pt-6 px-5 pb-3">
                        <h4 className="text-center text-white md:text-[24px] text-[18px] font-bold border-b-[3px] border-white/70 pb-4 h-[90px] flex items-center justify-center">
                        生成AI導入コンサルティング <br />
                        業務改善支援
                        </h4>
                        <p className="md:text-[20px] text-[15px] font-semibold text-white p-2 ">貴社の業務を深く理解し、AIの力で効率化と革新を実現します。
                        </p>
                        <div className="bg-[#FDFDFD]/[0.7] p-5 mt-4 md:text-[16px] text-[13px] font-medium">
                            <ul className="list-disc ml-6 space-y-1">
                                <li>詳細な業務内容のヒアリングによる、的確なニーズ把握</li>
                                <li>貴社の強みを活かすAI活用方針の策定</li>
                                <li>多様なAIツールの中から、最適なソリューションの選定</li>
                                <li>AI技術を駆使した具体的な業務改善方法の提案と実装支援</li>
                                <li>導入後のフォローアップと継続的な最適化サポート</li>
                            </ul>
                        </div>
                        <div className="flex justify-center mt-6">
                            <a href="#contact" className="w-[140px] h-[51px] flex items-center justify-center bg-[#FEFFBA] rounded-[30px] md:text-[18px] text-[14px] font-bold">詳しく聞く</a>
                        </div>
                    </div>
                </div>
                <div className="w-[527px] relative overflow-hidden border-[3px] border-white/80 rounded-[38px] bg-[linear-gradient(180deg,_#F35646_0%,_#F58214_100%)]">
                    <div className="relative pt-6 px-5 pb-3">
                        <h4 className="text-center text-white md:text-[24px] text-[18px] font-bold border-b-[3px] border-white/70 pb-4 h-[90px] flex items-center justify-center">
                        自社専用生成AIツールの開発
                        </h4>
                        <p className="md:text-[20px] text-[15px] font-semibold text-white p-2">貴社専用にカスタマイズしたAIツールを設計・開発します。
                        </p>
                        <div className="bg-[#FDFDFD]/[0.7] p-5 mt-4 md:text-[16px] text-[13px] font-medium">
                            <ul className="list-disc ml-6 space-y-1">
                                <li>貴社の独自ニーズに完全対応したAIツールの設計</li>
                                <li>既存の業務フローを革新するカスタマイズAIツールの開発</li>
                                <li>自社に真に必要な業務改善ツールの提案と実装</li>
                                <li>社内データと知見を活用した、高精度AIモデルの構築</li>
                                <li>継続的なアップデートによる長期的な競争優位性の確保</li>
                            </ul>
                        </div>
                        <div className="flex justify-center mt-6">
                            <a href="#contact" className="w-[140px] h-[51px] flex items-center justify-center bg-[#FEFFBA] rounded-[30px] md:text-[18px] text-[14px] font-bold">詳しく聞く</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>
    <div className="md:h-[404px] h-[340px] bg-[url('/assets/images/bg-04.png')] bg-cover bg-center flex flex-col items-center justify-center py-10 px-5">
        <h4 className="text-center mdLtext-[32px] text-[24px] font-bold">CONPANY Profile</h4>
        <div className="flex justify-center md:py-8 py-6">
            <p className="md:text-[18px] text-[15px] font-medium">
            名称　株式会社MARKK <br />
            住所　〒104-0061<br />
            　　　東京都中央区銀座1-12-4 N&E BLD. 7F<br />
            <br />
            設立　2024年3月<br />
            URL　<a href="https://markk.jp/" target="_blank" className='underline' rel="noopener noreferrer">https://markk.jp/</a><br />
            </p>
        </div>
    </div>
    </>
  )
}

export default Development;
