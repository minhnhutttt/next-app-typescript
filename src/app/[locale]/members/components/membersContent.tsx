'use client'

import { useTranslations } from 'next-intl'

const MemberContent = () => {
  const tNariyukiTerada = useTranslations('Members.NariyukiTerada')
  const tHideyoshiAkita = useTranslations('Members.HideyoshiAkita')
  const tYutakaKanagawa = useTranslations('Members.YutakaKanagawa')
  const tYoshiyaKato = useTranslations('Members.YoshiyaKato')
  const tHajiTaniguchi = useTranslations('Members.HajiTaniguchi')
  const tLeoSakai = useTranslations('Members.LeoSakai')

  return (
    <div className="mb-24 px-5 md:mb-[160px]">
      <div className="mx-auto w-full max-w-[1200px] space-y-24 md:space-y-[160px]">
        <div className="rounded-[40px] border border-[#536DFE] bg-[#536DFE]/[0.05] px-5 py-10 md:py-20 lg:px-[60px]">
          <div className="relative flex items-center justify-center gap-5 rounded-[20px] bg-[#536DFE] px-5 py-10 max-md:flex-col-reverse md:justify-between md:px-10 md:py-[60px] lg:px-[78px]">
            <span className="pointer-events-none absolute aspect-[432/427] w-[200px] animate-[bounceRandomly1_80s_linear_infinite] bg-[url(/assets/images/members/member-star.png)] bg-no-repeat [background-size:100%_100%] md:w-[432px]"></span>
            <div className="text-[#111]">
              <p
                data-scroll
                className="ani-fade-up mb-1 text-[clamp(15px,4vw,20px)] md:text-[18px]"
              >
                CEO
              </p>
              <p
                data-scroll
                className="text--enter mb-3 overflow-hidden whitespace-nowrap px-1 font-['Inspiration'] text-[clamp(18px,9vw,44px)] font-normal tracking-wider md:text-[36px] lg:text-[64px]"
              >
                <span data-splitting>Nariaki Terada</span>
              </p>
              <p
                data-scroll
                className="ani-fade-up mb-6 text-[clamp(18px,4.5vw,26px)] md:text-[24px]"
              >
                寺田 成昇
              </p>
              <p
                data-scroll
                className="ani-fade-up text-[12px] leading-[1.1] md:text-[14px]"
                dangerouslySetInnerHTML={{
                  __html: tNariyukiTerada.raw('Introduction'),
                }}
              ></p>
            </div>
            <div data-scroll className="ani-fade-up">
              <img
                className="w-full max-w-[480px] rounded-[10px] [box-shadow:0px_4px_70px_0px_rgba(0,_0,_0,_0.25)]"
                src="/assets/images/members/ceo.jpg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="rounded-[40px] border border-[#FDD213] bg-[#FDD213]/[0.05] px-5 py-10 md:py-20 lg:px-[60px]">
          <div className="relative flex min-h-[400px] items-center justify-center gap-5 rounded-[20px] bg-[#FDD213] px-5 py-10 max-md:flex-col-reverse md:min-h-[600px] md:justify-between md:px-10 md:py-10 lg:px-[78px]">
            <span className="pointer-events-none absolute aspect-[432/427] w-[200px] animate-[bounceRandomly2_80s_linear_infinite] bg-[url(/assets/images/members/member-star.png)] bg-no-repeat [background-size:100%_100%] md:w-[432px]"></span>
            <div className="flex-1 text-[#111]">
              <p
                data-scroll
                className="ani-fade-up mb-1 text-[clamp(15px,4vw,20px)] md:text-[18px]"
              >
                CSO
              </p>
              <p
                data-scroll
                className="text--enter mb-3 overflow-hidden whitespace-nowrap px-1 font-['Inspiration'] text-[clamp(18px,9vw,44px)] font-normal tracking-wider md:text-[36px] lg:text-[64px]"
              >
                <span data-splitting>Brandon Tatum</span>
              </p>
              <p
                data-scroll
                className="ani-fade-up mb-6 text-[clamp(18px,4.5vw,26px)] md:text-[24px]"
              >
                ブランドン・テイタム
              </p>
              <p
                data-scroll
                className="ani-fade-up text-[12px] leading-[1.4] md:text-[14px]"
                dangerouslySetInnerHTML={{
                  __html: tHideyoshiAkita.raw('Introduction'),
                }}
              ></p>
            </div>
            <div className="lg:max-w-[480px]">
              <div data-scroll className="ani-fade-up">
                <img
                  className="w-full max-w-[480px] rounded-[10px] [box-shadow:0px_4px_70px_0px_rgba(0,_0,_0,_0.25)]"
                  src="/assets/images/members/brandon-tatum.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[40px] border border-[#69F0AE] bg-[#69F0AE]/[0.05] px-5 py-10 md:py-20 lg:px-[60px]">
          <div className="relative flex min-h-[400px] items-center justify-center gap-5 rounded-[20px] bg-[#69F0AE] px-5 py-10 max-md:flex-col md:min-h-[600px] md:justify-between md:px-10 md:py-10 lg:px-[78px]">
            <span className="pointer-events-none absolute aspect-[432/427] w-[200px] animate-[bounceRandomly4_80s_linear_infinite] bg-[url(/assets/images/members/member-star.png)] bg-no-repeat [background-size:100%_100%] md:w-[432px]"></span>
            <div className="text-[#111]">
              <p
                data-scroll
                className="ani-fade-up mb-1 text-[clamp(15px,4vw,20px)] md:text-[18px]"
              >
                CFO
              </p>
              <p
                data-scroll
                className="text--enter mb-3 overflow-hidden whitespace-nowrap px-2 font-['Inspiration'] text-[clamp(18px,9vw,44px)] font-normal tracking-wider md:text-[36px] lg:text-[64px]"
              >
                <span data-splitting>Yoshiya Kato</span>
              </p>
              <p
                data-scroll
                className="text-[12px] leading-[1.4] md:text-[14px]"
                dangerouslySetInnerHTML={{
                  __html: tYoshiyaKato.raw('Introduction'),
                }}
              ></p>
            </div>
            <div className="w-full lg:max-w-[478px]">
              <div data-scroll className="ani-fade-up">
                <img
                  className="w-full max-w-[480px] rounded-[10px] [box-shadow:0px_4px_70px_0px_rgba(0,_0,_0,_0.25)]"
                  src="/assets/images/members/kato.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[40px] border border-[#1EF1FF] bg-[#1EF1FF]/[0.05] px-5 py-10 md:py-20 lg:px-[60px]">
          <div className="relative flex min-h-[400px] items-center justify-center gap-5 rounded-[20px] bg-[#1EF1FF] px-5 py-10 max-md:flex-col-reverse md:min-h-[600px] md:justify-between md:px-10 md:py-10 lg:px-[78px]">
            <span className="pointer-events-none absolute aspect-[432/427] w-[200px] animate-[bounceRandomly3_80s_linear_infinite] bg-[url(/assets/images/members/member-star.png)] bg-no-repeat [background-size:100%_100%] md:w-[432px]"></span>
            <div className="flex-1 text-[#111]">
              <p
                data-scroll
                className="ani-fade-up mb-1 text-[clamp(15px,4vw,20px)] md:text-[18px]"
              >
                CMO
              </p>
              <p
                data-scroll
                className="text--enter mb-3 overflow-hidden whitespace-nowrap px-2 font-['Inspiration'] text-[clamp(18px,9vw,44px)] font-normal tracking-wider md:text-[36px] lg:text-[64px]"
              >
                <span data-splitting>Yutaka Kanagawa</span>
              </p>
              <p
                data-scroll
                className="ani-fade-up text-[12px] leading-[1.4] md:text-[14px]"
                dangerouslySetInnerHTML={{
                  __html: tYutakaKanagawa.raw('Introduction'),
                }}
              ></p>
            </div>

            <div className="lg:max-w-[480px]">
              <div data-scroll className="ani-fade-up">
                <img
                  className="w-full max-w-[480px] rounded-[10px] [box-shadow:0px_4px_70px_0px_rgba(0,_0,_0,_0.25)]"
                  src="/assets/images/members/cmo.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[40px] border border-gray-500 bg-gray-700/[0.05] px-5 py-10 md:py-20 lg:px-[60px]">
          <div className="relative flex min-h-[400px] justify-center gap-5 rounded-[20px] bg-gray-400 px-5 py-10 max-md:flex-col-reverse max-md:items-center md:min-h-[600px] md:justify-between md:px-10 md:py-10 lg:px-[78px]">
            <span className="pointer-events-none absolute aspect-[432/427] w-[200px] animate-[bounceRandomly4_65s_linear_infinite] bg-[url(/assets/images/members/member-star.png)] bg-no-repeat [background-size:100%_100%] md:w-[432px]"></span>
            <div className="flex-1 text-[#111]">
              <p
                data-scroll
                className="ani-fade-up mb-1 text-[clamp(15px,4vw,20px)] md:text-[18px]"
              >
                advisor
              </p>
              <p
                data-scroll
                className="text--enter mb-3 overflow-hidden whitespace-nowrap px-2 font-['Inspiration'] text-[clamp(18px,9vw,44px)] font-normal tracking-wider md:text-[36px] lg:text-[64px]"
              >
                <span data-splitting>Leo Sakai</span>
              </p>
              <p
                data-scroll
                className="ani-fade-up mb-6 text-[clamp(18px,4.5vw,26px)] md:text-[24px]"
              >
                酒井 レオ
              </p>
              <p
                data-scroll
                className="ani-fade-up text-[12px] leading-[1.4] md:text-[14px]"
                dangerouslySetInnerHTML={{
                  __html: tLeoSakai.raw('Introduction'),
                }}
              ></p>
            </div>
            <div className="lg:max-w-[480px]">
              <div data-scroll className="ani-fade-up">
                <img
                  className="w-full max-w-[480px] rounded-[10px] [box-shadow:0px_4px_70px_0px_rgba(0,_0,_0,_0.25)]"
                  src="/assets/images/members/leosakai.jpeg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[40px] border border-gray-500 bg-gray-700/[0.05] px-5 py-10 md:py-20 lg:px-[60px]">
          <div className="relative flex min-h-[400px] justify-center gap-5 rounded-[20px] bg-gray-400 px-5 py-10 max-md:flex-col-reverse max-md:items-center md:min-h-[600px] md:justify-between md:px-10 md:py-10 lg:px-[78px]">
            <span className="pointer-events-none absolute aspect-[432/427] w-[200px] animate-[bounceRandomly4_65s_linear_infinite] bg-[url(/assets/images/members/member-star.png)] bg-no-repeat [background-size:100%_100%] md:w-[432px]"></span>
            <div className="flex-1 text-[#111]">
              <p
                data-scroll
                className="ani-fade-up mb-1 text-[clamp(15px,4vw,20px)] md:text-[18px]"
              >
                Advisor
              </p>
              <p
                data-scroll
                className="text--enter mb-3 overflow-hidden whitespace-nowrap px-2 font-['Inspiration'] text-[clamp(18px,9vw,44px)] font-normal tracking-wider md:text-[36px] lg:text-[64px]"
              >
                <span data-splitting>Haji Taniguchi</span>
              </p>
              <p
                data-scroll
                className="ani-fade-up mb-6 text-[clamp(18px,4.5vw,26px)] md:text-[24px]"
              >
                谷口 元
              </p>
              <p
                data-scroll
                className="text-[12px] leading-[1.8] md:text-[14px]"
                dangerouslySetInnerHTML={{
                  __html: tHajiTaniguchi.raw('Introduction'),
                }}
              ></p>
            </div>
            <div className="lg:max-w-[480px]">
              <div data-scroll className="ani-fade-up md:mt-20">
                <img
                  className="w-full max-w-[480px] rounded-[10px] [box-shadow:0px_4px_70px_0px_rgba(0,_0,_0,_0.25)]"
                  src="/assets/images/members/taniguchi.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MemberContent
