'use client'

import useScrollAnimations from '@/hooks/useScrollAnimations'

const About = () => {
  const ref = useScrollAnimations()

  return (
    <section ref={ref} className="mt-8 overflow-hidden md:-mt-5">
      <div className="mx-auto w-full max-w-[1440px]  bg-[url('/assets/images/about-map.png')] bg-center bg-no-repeat pb-[100px] pt-[32px] max-md:bg-contain md:bg-top md:pb-[100px]">
        <div className="space-y-14 md:space-y-20">
          <div className="flex max-md:flex-col md:items-end">
            <figure className="fade-up flex-[0_0_54.167vw] overflow-hidden md:rounded-r-[60px] dt:flex-[0_0_780px]">
              <img src="/assets/images/about-img.png" alt="" />
            </figure>
            <div className="fade-up flex flex-col items-center space-y-2.5 whitespace-nowrap text-[20px] font-bold leading-none max-md:mt-10 md:ml-[-15.278vw] md:items-end md:pb-5 md:pr-10 md:text-[3.333vw] dt:ml-[-220px] dt:text-[48px]">
              <p className="-mb-2.5 flex w-full justify-center">
                <img
                  className="korokoro"
                  src="/assets/images/about-bubble.png"
                  alt=""
                />
              </p>
              <p className="bg-white p-1.5 md:p-2.5">
                地域情報×マップで広がる新しい体験
              </p>
              <p className="bg-white p-1.5 md:p-2.5">
                地域情報誌の親しみやすさと
              </p>
              <p className="bg-white p-1.5 md:p-2.5">NFTの新しい</p>
              <p className="bg-white p-1.5 md:p-2.5">テクノロジーが一つに！</p>
            </div>
          </div>
          <div className="flex max-md:flex-col md:flex-row-reverse md:items-center">
            <figure className="fade-up flex-[0_0_54.167vw] overflow-hidden md:rounded-l-[60px] dt:flex-[0_0_780px]">
              <img src="/assets/images/about-img-2.png" alt="" />
            </figure>
            <div className="fade-up flex flex-col items-center space-y-2.5 px-5 text-[16px] font-bold leading-loose max-md:mt-10 md:items-end md:px-10 md:pb-5 md:text-[1.667vw] dt:text-[24px]">
              <span className="text-[#DF0F47]">
                あなたのすぐそばで使える特典、イベント、ショップ情報がNFTとなり、リアルタイムで更新される地域情報サービスが爆誕！
              </span>
              <br />
              今すぐMETA
              Earthを開いて、これまで気づかなかった地元の魅力や、限定特典を見つけに出かけよう！
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
