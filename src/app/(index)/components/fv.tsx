'use client'

import useScrollAnimations from '@/hooks/useScrollAnimations'

const data = [
  {
    id: '/assets/images/number-01.png',
    title: (<>いつでもどこでも<br />オンラインで学べる</>),
    text: (<>スマホ、PC、タブレットに対応。<br />通勤時間や休憩中にも学習可能</>)
  },
  {
    id: '/assets/images/number-02.png',
    title: (<>わずか12時間で<br />社員がAIを使いだす</>),
    text: (<>12コマ12時間の集中プログラム。<br />社員が抵抗なくAIをを使える設計</>)
  },
  {
    id: '/assets/images/number-03.png',
    title: (<>旬を逃さない<br />コンテンツ更新</>),
    text: (<>最新のAI動向を毎月反映。<br />常に最先端のスキルを習得</>)
  },
]

const FV = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="relative">
      <div className="h-[57vw] md:h-[29.861vw] dt:h-[430px] bg-[url('/assets/images/bg-fv.png')] bg-cover bg-center md:px-5">
        <div className="w-full max-w-[1440px] mx-auto relative">
          <div className="max-md:hidden">
            <img className="absolute w-[15.972vw] dt:w-[230px] left-[5vw] md:left-[6.4vw] dt:left-[100px] -top-[0.694vw] dt:-top-[10px]" src="/assets/images/fv-01.png" alt="" />
            <img className="absolute w-[12.431vw] dt:w-[179px] left-[0.389vw] md:left-[1.389vw] dt:left-[20px] top-[9.028vw] dt:top-[130px] z-10" src="/assets/images/fv-02.png" alt="" />
            <img className="absolute w-[12.083vw] dt:w-[174px] left-[3.903vw] md:left-[5.903vw] dt:left-[85px] top-[19.444vw] dt:top-[280px]" src="/assets/images/fv-03.png" alt="" />
            <img className="absolute w-[14.722vw] dt:w-[212px] right-[8.069vw] md:right-[9.069vw] dt:right-[135px] top-[0.833vw] dt:top-[12px]" src="/assets/images/fv-04.png" alt="" />
            <img className="absolute w-[12.361vw] dt:w-[178px] right-[1.736vw] dt:right-[25px] top-[10.764vw] dt:top-[155px]" src="/assets/images/fv-05.png" alt="" />
            <img className="absolute w-[12.361vw] dt:w-[178px] right-[2.861vw] md:right-[4.861vw] dt:right-[70px] top-[24.653vw] dt:top-[355px]" src="/assets/images/fv-06.png" alt="" />
          </div>
          <div className="md:py-3 py-2">
            <div className="flex justify-center">
              <h1>
                <img className='max-md:w-[94vw] max-dt:w-[48.472vw] max-md:hidden' src="/assets/images/fv-main.png" alt="" />
                <img className='w-[95vw] md:hidden' src="/assets/images/fv-main-sp.png" alt="" />
              </h1>
            </div>
            <div className="flex justify-center">
              <img className="max-md:w-[70vw] max-dt:w-[37.083vw]" src="/assets/images/fv-text.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-3 px-4 -mt-[8vw] md:hidden">
        <figure><img src="/assets/images/fv-img-sp-01.png" alt="" /></figure>
        <figure><img src="/assets/images/fv-img-sp-02.png" alt="" /></figure>
        <figure><img src="/assets/images/fv-img-sp-03.png" alt="" /></figure>
      </div>
      <div className="px-5 dt:-mt-[85px] md:-mt-[5.903vw] mt-[5vw]">
        <div className="w-full dt:max-w-[850px] max-w-[340px] md:max-w-[59.028vw] mx-auto flex max-md:flex-col gap-4 md:gap-[1.389vw] dt:gap-5">
          {data.map((item,index) => (
            <div className="dt:w-[269px] md:w-[18.681vw] rounded-[17px] border-[3px] border-[#FFA217] p-1.5 max-md:pb-5 md:p-[0.972vw] dt:p-[14px] bg-[#FFFEF3]" key={index}>
              <div className="flex justify-center items-center gap-2">
                <div className="flex items-center justify-center size-[48px] md:size-[3.264vw] dt:size-[47px] font-bold">
                  <img src={item.id} alt="" />
                </div>
                <h4 className="dt:text-[19px] md:text-[1.319vw] text-[22px] font-black leading-[1.3]">{item.title}</h4>
              </div>
              <div className="flex justify-center items-center md:py-2">
                <img className='max-md:w-8' src="/assets/images/triagle.png" alt="" />
              </div>
              <div className="flex justify-center">
                <p className="dt:text-[15px] md:text-[1.042vw] text-[16px]">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FV
