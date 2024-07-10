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
      <div className="h-[65vw] md:h-[29.861vw] dt:h-[430px] bg-[url('/assets/images/bg-fv.png')] bg-cover bg-center md:px-5">
        <div className="w-full max-w-[1440px] mx-auto relative">
          <img className="absolute w-[15.972vw] dt:w-[230px] left-[7.722vw] md:left-[9.722vw] dt:left-[140px] -top-[0.694vw] dt:-top-[10px]" src="/assets/images/fv-01.png" alt="" />
          <img className="absolute w-[12.431vw] dt:w-[179px] left-[0.389vw] md:left-[1.389vw] dt:left-[20px] top-[9.028vw] dt:top-[130px]" src="/assets/images/fv-02.png" alt="" />
          <img className="absolute w-[12.083vw] dt:w-[174px] left-[3.903vw] md:left-[5.903vw] dt:left-[85px] top-[21.528vw] dt:top-[305px]" src="/assets/images/fv-03.png" alt="" />
          <img className="absolute w-[14.722vw] dt:w-[212px] right-[8.069vw] md:right-[10.069vw] dt:right-[145px] top-[0.833vw] dt:top-[12px]" src="/assets/images/fv-04.png" alt="" />
          <img className="absolute w-[12.361vw] dt:w-[178px] right-[1.736vw] dt:right-[25px] top-[10.764vw] dt:top-[155px]" src="/assets/images/fv-05.png" alt="" />
          <img className="absolute w-[12.361vw] dt:w-[178px] right-[2.861vw] md:right-[4.861vw] dt:right-[70px] top-[24.653vw] dt:top-[355px]" src="/assets/images/fv-06.png" alt="" />
          <div className="md:py-2 py-6">
            <p className="text-center text-white font-inter text-[3.5vw] md:text-[1.389vw] dt:text-[20px]">限られたリソースを<br className="md:hidden" />最大限に活かしたい事業者様へ</p>
            <div className="flex justify-center max-md:py-2">
              <h1><img className='max-md:w-[67vw] max-dt:w-[52.847vw]' src="/assets/images/fv-main.png" alt="" /></h1>
            </div>
            <p className="text-center font-sans text-white dt:text-[23px] md:text-[1.597vw] text-[3.8vw] font-bold md:-mt-[0.833vw] dt:-mt-3">
            ＼ AI e-ラーニングで人材不足を解消 ／ <br />
            1人が 3人分の生産性 を実現できる時代に
            </p>
          </div>
        </div>
      </div>
      <div className="px-5 dt:-mt-[110px] -mt-[7.639vw]">
        <div className="w-full dt:max-w-[850px] max-w-[300px] md:max-w-[59.028vw] mx-auto flex max-md:flex-col gap-[1.389vw] dt:gap-5">
          {data.map((item,index) => (
            <div className="dt:w-[269px] md:w-[18.681vw] rounded-[17px] border-[3px] border-[#FFA217] p-3 md:p-[0.972vw] dt:p-[14px] bg-[#FFFEF3]" key={index}>
              <div className="flex justify-center items-center gap-2">
                <div className="flex items-center justify-center size-[36px] md:size-[3.264vw] dt:size-[47px]">
                  <img src={item.id} alt="" />
                </div>
                <h4 className="dt:text-[19px] md:text-[1.319vw] text-[16px] font-black leading-[1.3]">{item.title}</h4>
              </div>
              <div className="flex justify-center items-center py-2">
                <img className='max-md:w-4' src="/assets/images/triagle.png" alt="" />
              </div>
              <div className="flex justify-center">
                <p className="dt:text-[15px] md:text-[1.042vw] text-[13px] font-sans">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FV
