'use client'

import useScrollAnimations from '@/hooks/useScrollAnimations'

const Development = () => {
  const ref = useScrollAnimations()
  return (
    <>
      <section
        ref={ref}
        className="relative mt-[150px] bg-[linear-gradient(180deg,_#2A66DB_0%,_#31167C_100%)] pb-16 md:mt-[289px] md:pb-[110px]"
      >
        <div className="absolute inset-0 bg-[url('/assets/images/bg-dev.png')] bg-cover"></div>
        <div className="mx-auto w-full max-w-[1440px]">
          <div className="h-px"></div>
          <div className="relative -mt-[58px] h-20 max-w-[1080px] bg-[linear-gradient(278deg,_#FF2A2A_-5.11%,_#FF9B04_78.14%)] md:h-[91px]">
            <div className="flex py-2">
              <span className="mt-3 h-px w-5 bg-white md:mt-5 md:w-[70px]"></span>
              <p className="text-[16px] font-bold text-white md:text-[24px]">
                AI活用の次なるステージへ
                <br />
                導入最適化パッケージと自社専用ツールの開発
              </p>
              <span className="mt-3 h-px flex-1 bg-white md:mt-5"></span>
            </div>
            <span className="absolute bottom-0 right-0">
              <img src="/assets/images/dev-text.png" alt="" />
            </span>
          </div>
          <div className="px-5">
            <div className="mx-auto mt-12 flex w-full max-w-[1095px] flex-wrap justify-center gap-10 md:mt-[86px]">
              <div
                id="ai-consulting"
                className="relative w-[527px] overflow-hidden rounded-[38px] border-[3px] border-white/80 bg-[linear-gradient(180deg,_#F35646_0%,_#F58214_100%)]"
              >
                <div className="relative px-5 pb-3 pt-6">
                  <h4 className="flex h-[90px] items-center justify-center border-b-[3px] border-white/70 pb-4 text-center text-[18px] font-bold text-white md:text-[24px]">
                    生成AI導入コンサルティング <br />
                    業務改善支援
                  </h4>
                  <p className="p-2 text-[15px] font-semibold text-white md:text-[20px] ">
                    貴社の業務を深く理解し、AIの力で効率化と革新を実現します。
                  </p>
                  <div className="mt-4 bg-[#FDFDFD]/[0.7] p-5 text-[13px] font-medium md:text-[16px]">
                    <ul className="ml-6 list-disc space-y-1">
                      <li>
                        詳細な業務内容のヒアリングによる、的確なニーズ把握
                      </li>
                      <li>貴社の強みを活かすAI活用方針の策定</li>
                      <li>
                        多様なAIツールの中から、最適なソリューションの選定
                      </li>
                      <li>
                        AI技術を駆使した具体的な業務改善方法の提案と実装支援
                      </li>
                      <li>導入後のフォローアップと継続的な最適化サポート</li>
                    </ul>
                  </div>
                  <div className="mt-6 flex justify-center">
                    <a
                      href="#contact"
                      className="flex h-[51px] w-[140px] items-center justify-center rounded-[30px] bg-[#FEFFBA] text-[14px] font-bold md:text-[18px]"
                    >
                      詳しく聞く
                    </a>
                  </div>
                </div>
              </div>
              <div
                id="ai-development"
                className="relative w-[527px] overflow-hidden rounded-[38px] border-[3px] border-white/80 bg-[linear-gradient(180deg,_#F35646_0%,_#F58214_100%)]"
              >
                <div className="relative px-5 pb-3 pt-6">
                  <h4 className="flex h-[90px] items-center justify-center border-b-[3px] border-white/70 pb-4 text-center text-[18px] font-bold text-white md:text-[24px]">
                    自社専用生成AIツールの開発
                  </h4>
                  <p className="p-2 text-[15px] font-semibold text-white md:text-[20px]">
                    貴社専用にカスタマイズしたAIツールを設計・開発します。
                  </p>
                  <div className="mt-4 bg-[#FDFDFD]/[0.7] p-5 text-[13px] font-medium md:text-[16px]">
                    <ul className="ml-6 list-disc space-y-1">
                      <li>貴社の独自ニーズに完全対応したAIツールの設計</li>
                      <li>
                        既存の業務フローを革新するカスタマイズAIツールの開発
                      </li>
                      <li>自社に真に必要な業務改善ツールの提案と実装</li>
                      <li>社内データと知見を活用した、高精度AIモデルの構築</li>
                      <li>
                        継続的なアップデートによる長期的な競争優位性の確保
                      </li>
                    </ul>
                  </div>
                  <div className="mt-6 flex justify-center">
                    <a
                      href="#contact"
                      className="flex h-[51px] w-[140px] items-center justify-center rounded-[30px] bg-[#FEFFBA] text-[14px] font-bold md:text-[18px]"
                    >
                      詳しく聞く
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex h-[340px] flex-col items-center justify-center bg-[url('/assets/images/bg-04.png')] bg-cover bg-center px-5 py-10 md:h-[404px]">
        <h4 className="mdLtext-[32px] text-center text-[24px] font-bold">
        COMPANY Profile
        </h4>
        <div className="flex justify-center py-6 md:py-8">
          <p className="text-[15px] font-medium md:text-[18px]">
            名称　株式会社MARKK <br />
            住所　〒104-0061
            <br />
            　　　東京都中央区銀座1-12-4 N&E BLD. 7F
            <br />
            <br />
            設立　2024年3月
            <br />
            URL　
            <a
              href="https://markk.jp/"
              target="_blank"
              className="underline"
              rel="noopener noreferrer"
            >
              https://markk.jp/
            </a>
            <br />
          </p>
        </div>
      </div>
    </>
  )
}

export default Development
