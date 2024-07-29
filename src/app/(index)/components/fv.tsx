'use client'

import useScrollAnimations from '@/hooks/useScrollAnimations'

const data = [
  {
    id: '/assets/images/number-01.png',
    title: (
      <>
        いつでもどこでも
        <br />
        オンラインで学べる
      </>
    ),
    text: (
      <>
        スマホ、PC、タブレットに対応。
        <br />
        通勤時間や休憩中にも学習可能
      </>
    ),
  },
  {
    id: '/assets/images/number-02.png',
    title: (
      <>
        わずか12時間で
        <br />
        社員がAIを使いだす
      </>
    ),
    text: (
      <>
        12コマ12時間の集中プログラム。
        <br />
        社員が抵抗なくAIを使える設計
      </>
    ),
  },
  {
    id: '/assets/images/number-03.png',
    title: (
      <>
        旬を逃さない
        <br />
        コンテンツ更新
      </>
    ),
    text: (
      <>
        最新のAI動向を毎月反映。
        <br />
        常に最先端のスキルを習得
      </>
    ),
  },
]

const FV = () => {
  const ref = useScrollAnimations()
  return (
    <section ref={ref} className="relative">
      <div className="h-[57vw] bg-[url('/assets/images/bg-fv.png')] bg-cover bg-center md:h-[29.861vw] md:px-5 dt:h-[430px]">
        <div className="relative mx-auto w-full max-w-[1440px]">
          <div className="max-md:hidden">
            <img
              className="absolute -top-[0.694vw] left-[5vw] w-[15.972vw] md:left-[6.4vw] dt:left-[100px] dt:top-[10px] dt:w-[230px]"
              src="/assets/images/fv-01.png"
              alt=""
            />
            <img
              className="absolute left-[0.389vw] top-[9.028vw] z-10 w-[12.431vw] md:left-[1.389vw] dt:left-[20px] dt:top-[130px] dt:w-[179px]"
              src="/assets/images/fv-02.png"
              alt=""
            />
            <img
              className="absolute left-[3.903vw] top-[19.444vw] w-[12.083vw] md:left-[5.903vw] dt:left-[85px] dt:top-[280px] dt:w-[174px]"
              src="/assets/images/fv-03.png"
              alt=""
            />
            <img
              className="absolute right-[8.069vw] top-[0.833vw] w-[14.722vw] md:right-[9.069vw] dt:right-[135px] dt:top-[12px] dt:w-[212px]"
              src="/assets/images/fv-04.png"
              alt=""
            />
            <img
              className="absolute right-[1.736vw] top-[10.764vw] w-[12.361vw] dt:right-[25px] dt:top-[155px] dt:w-[178px]"
              src="/assets/images/fv-05.png"
              alt=""
            />
            <img
              className="absolute right-[2.861vw] top-[24.653vw] w-[12.361vw] md:right-[4.861vw] dt:right-[70px] dt:top-[355px] dt:w-[178px]"
              src="/assets/images/fv-06.png"
              alt=""
            />
          </div>
          <div className="py-2 md:py-3">
            <div className="flex justify-center">
              <h1>
                <img
                  className="max-dt:w-[48.472vw] max-md:hidden max-md:w-[94vw]"
                  src="/assets/images/fv-main.png"
                  alt=""
                />
                <img
                  className="w-[95vw] md:hidden"
                  src="/assets/images/fv-main-sp.png"
                  alt=""
                />
              </h1>
            </div>
            <div className="flex justify-center">
              <img
                className="max-dt:w-[37.083vw] max-md:w-[70vw]"
                src="/assets/images/fv-text.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="-mt-[8vw] flex justify-center gap-3 px-4 md:hidden">
        <figure>
          <img src="/assets/images/fv-img-sp-01.png" alt="" />
        </figure>
        <figure>
          <img src="/assets/images/fv-img-sp-02.png" alt="" />
        </figure>
        <figure>
          <img src="/assets/images/fv-img-sp-03.png" alt="" />
        </figure>
      </div>
      <div className="mt-[5vw] px-5 md:-mt-[5.903vw] dt:-mt-[85px]">
        <div className="mx-auto flex w-full max-w-[340px] gap-4 max-md:flex-col md:max-w-[59.028vw] md:gap-[1.389vw] dt:max-w-[850px] dt:gap-5">
          {data.map((item, index) => (
            <div
              className="rounded-[17px] border-[3px] border-[#FFA217] bg-[#FFFEF3] p-1.5 max-md:pb-5 md:w-[18.681vw] md:p-[0.972vw] dt:w-[269px] dt:p-[14px]"
              key={index}
            >
              <div className="flex items-center justify-center gap-2">
                <div className="flex size-[48px] items-center justify-center font-bold md:size-[3.264vw] dt:size-[47px]">
                  <img src={item.id} alt="" />
                </div>
                <h4 className="text-[22px] font-black leading-[1.3] md:text-[1.319vw] dt:text-[19px]">
                  {item.title}
                </h4>
              </div>
              <div className="flex items-center justify-center md:py-2">
                <img
                  className="max-md:w-8"
                  src="/assets/images/triagle.png"
                  alt=""
                />
              </div>
              <div className="flex justify-center">
                <p className="text-[16px] md:text-[1.042vw] dt:text-[15px]">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FV
