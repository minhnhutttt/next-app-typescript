'use client'

import { useTranslations, useLocale } from 'next-intl'

const MemberContent = () => {
  const tNariyukiTerada = useTranslations('Members.NariyukiTerada')
  const tHideyoshiAkita = useTranslations('Members.HideyoshiAkita')
  const tYutakaKanagawa = useTranslations('Members.YutakaKanagawa')
  //const tYoshiyaKato = useTranslations('Members.YoshiyaKato')
  const tHajiTaniguchi = useTranslations('Members.HajiTaniguchi')
  //const tLeoSakai = useTranslations('Members.LeoSakai')

  const currentLocale = useLocale()
  return (
    <div className="mb-24 px-5 md:mb-[160px]">
      <div className="mx-auto w-full max-w-[1200px] space-y-24 md:space-y-[160px]">
        <div className="rounded-[40px] border border-[#747E86] bg-[#747E86]/[0.05] px-5 py-10 md:py-20 lg:px-[60px]">
          <div className="relative flex items-center justify-center gap-5 rounded-[20px] bg-[linear-gradient(293deg,_#A5884D_2.02%,_#EAC885_34.94%,_#FFF2DB_50.31%,_#A5884D_96.89%)] px-5 py-10 max-md:flex-col-reverse md:justify-between md:px-10 md:py-[60px] lg:px-[78px]">
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

        <div className="rounded-[40px] border border-[#747E86] bg-[#747E86]/[0.05] px-5 py-10 md:py-20 lg:px-[60px]">
          <div className="relative flex min-h-[400px] items-center justify-center gap-5 rounded-[20px] bg-[linear-gradient(293deg,_#A5884D_2.02%,_#EAC885_34.94%,_#FFF2DB_50.31%,_#A5884D_96.89%)] px-5 py-10 max-md:flex-col-reverse md:min-h-[600px] md:justify-between md:px-10 md:py-10 lg:px-[78px]">
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

        <div className="rounded-[40px] border border-[#747E86] bg-[#747E86]/[0.05] px-5 py-10 md:py-20 lg:px-[60px]">
          <div className="relative flex min-h-[400px] items-center justify-center gap-5 rounded-[20px] bg-[linear-gradient(293deg,_#A5884D_2.02%,_#EAC885_34.94%,_#FFF2DB_50.31%,_#A5884D_96.89%)] px-5 py-10 max-md:flex-col-reverse md:min-h-[600px] md:justify-between md:px-10 md:py-10 lg:px-[78px]">
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
                className="text--enter mb-6 overflow-hidden whitespace-nowrap font-['Inspiration'] text-[clamp(18px,9vw,44px)] font-normal tracking-wider md:text-[36px] lg:text-[64px]"
              >
                <span data-splitting>
                  <img
                    src="/assets/images/members/ky-en.svg"
                    className="w-[24vw] max-w-[266px] max-md:w-[42vw]"
                    alt=""
                  />
                </span>
              </p>
              <p
                data-scroll
                className="ani-fade-up mb-6 text-[clamp(18px,4.5vw,26px)] md:text-[24px]"
              >
                <img src="/assets/images/members/ky.svg" alt="" />
              </p>
              <div
                data-scroll
                className="text-[12px] leading-[1.4] md:text-[14px]"
              >
                {currentLocale === 'jp' ? (
                  <img src="/assets/images/members/ky-text.svg" alt="" />
                ) : (
                  <img src="/assets/images/members/ky-text-en.svg" alt="" />
                )}
              </div>
            </div>
            <div className="lg:max-w-[478px]">
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

        <div className="rounded-[40px] border border-[#747E86] bg-[#747E86]/[0.05] px-5 py-10 md:py-20 lg:px-[60px]">
          <div className="relative flex min-h-[400px] items-center justify-center gap-5 rounded-[20px] bg-[linear-gradient(293deg,_#A5884D_2.02%,_#EAC885_34.94%,_#FFF2DB_50.31%,_#A5884D_96.89%)] px-5 py-10 max-md:flex-col-reverse md:min-h-[600px] md:justify-between md:px-10 md:py-10 lg:px-[78px]">
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
                className="ani-fade-up mb-6 text-[clamp(18px,4.5vw,26px)] md:text-[24px]"
              >
                金川 豊
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

        <div className="rounded-[40px] border border-[#747E86] bg-[#747E86]/[0.05] px-5 py-10 md:py-20 lg:px-[60px]">
          <div className="relative flex min-h-[400px] justify-center gap-5 rounded-[20px] bg-[linear-gradient(293deg,_#A5884D_2.02%,_#EAC885_34.94%,_#FFF2DB_50.31%,_#A5884D_96.89%)] px-5 py-10 max-md:flex-col-reverse max-md:items-center md:min-h-[600px] md:justify-between md:px-10 md:py-10 lg:px-[78px]">
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
                className="text--enter mb-6 overflow-hidden whitespace-nowrap font-['Inspiration'] text-[clamp(18px,9vw,44px)] font-normal tracking-wider md:text-[36px] lg:text-[64px]"
              >
                <span data-splitting>
                  <img
                    src="/assets/images/members/ls-en.svg"
                    className="w-[24vw] max-w-[210px] max-md:w-[42vw]"
                    alt=""
                  />
                </span>
              </p>
              <p
                data-scroll
                className="ani-fade-up mb-6 text-[clamp(18px,4.5vw,26px)] md:text-[24px]"
              >
                <img src="/assets/images/members/ls.svg" alt="" />
              </p>
              <div
                data-scroll
                className="text-[12px] leading-[1.4] md:text-[14px]"
              >
                {currentLocale === 'jp' ? (
                  <img src="/assets/images/members/ls-text.svg" alt="" />
                ) : (
                  <img src="/assets/images/members/ls-text-en.svg" alt="" />
                )}
              </div>
            </div>
            <div className="lg:max-w-[480px]">
              <div data-scroll className="ani-fade-up">
                <img
                  className="w-full max-w-[480px] rounded-[10px] [box-shadow:0px_4px_70px_0px_rgba(0,_0,_0,_0.25)]"
                  src="/assets/images/members/leosakai.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[40px] border border-[#747E86] bg-[#747E86]/[0.05] px-5 py-10 md:py-20 lg:px-[60px]">
          <div className="relative flex min-h-[400px] justify-center gap-5 rounded-[20px] bg-[linear-gradient(293deg,_#A5884D_2.02%,_#EAC885_34.94%,_#FFF2DB_50.31%,_#A5884D_96.89%)] px-5 py-10 max-md:flex-col-reverse max-md:items-center md:min-h-[600px] md:justify-between md:px-10 md:py-10 lg:px-[78px]">
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
