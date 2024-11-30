'use client'

import Button from '@/components/button'
import useScrollAnimations from '@/hooks/useScrollAnimations'

const howtos = [
  {
    img: '/assets/images/app.png',
    content: (
      <>
        <div className="mt-7 flex flex-col items-center justify-center gap-6">
          <a href="#" target="_blank" className="">
            <img src="/assets/images/btn-appstore.png" alt="" />
          </a>
          <a href="#" target="_blank" className="">
            <img src="/assets/images/btn-google.png" alt="" />
          </a>
        </div>
      </>
    ),
    bgColor: '#88D1F5',
    title: (
      <>
        MERCURY VAULTを
        <br />
        ダウンロード
      </>
    ),
  },
  {
    img: '/assets/images/phone.png',
    bgColor: '#228FCE',
    title: (
      <>
        位置情報で
        <br />
        マップにアクセス
      </>
    ),
  },
  {
    img: '/assets/images/ticket.png',
    bgColor: '#18539E',
    title: (
      <>
        NFTを集めて
        <br />
        特典をゲット！
      </>
    ),
  },
]

const Howto = () => {
  const ref = useScrollAnimations()

  return (
    <section ref={ref} className="bg-[#B6E1F2] px-5 pt-[100px]">
      <h2 className="text-center text-[22px] font-bold md:text-[48px]">
        <span className="box relative border-b-[5px] border-[#000]">
          簡単3ステップで今すぐ始めよう!!
        </span>
      </h2>

      <ul className="mx-auto flex w-full max-w-[1160px] justify-between gap-[40px] pt-[50px] max-[767px]:flex-wrap md:pt-[120px]">
        {howtos.map((howto, index) => (
          <li
            style={{ borderColor: howto.bgColor }}
            className="fade-up relative w-full rounded-t-[50%] border-[5px] bg-[#fff] px-[44px] pt-[40px] md:w-1/3 md:rounded-t-full"
            key={index}
          >
            <figure className="absolute left-1/2 top-[-34px] -translate-x-1/2">
              <img src="/assets/images/pin.svg" alt="" />
            </figure>
            <span
              style={{ backgroundColor: howto.bgColor }}
              className="mx-auto block w-full max-w-[80px] rounded-full pb-[3px] pt-[2px] text-center text-[14px] font-bold text-[#fff] md:text-[18px]"
            >
              STEP {index + 1}
            </span>
            <h3 className="mt-[10px] text-center text-[18px] font-bold leading-[1.2] md:text-[28px]">
              {howto.title}
            </h3>
            <figure
              className="mt-[20px] max-h-[300px] overflow-hidden"
              key={index}
            >
              <img className="mx-auto" src={howto.img} alt="" />
            </figure>
            {howto.content}
          </li>
        ))}
      </ul>

      <div className="fade-up relative mx-auto max-w-[460px] pb-[40px] pt-[90px] md:mt-14 md:max-w-[555px] md:pb-[83px] md:pt-[70px]">
        <figure className="absolute left-[0] top-[0] z-10 w-full rotate-[-10deg] max-md:max-w-[200px] md:w-auto">
          <img
            className="korokoro w-full"
            src="/assets/images/bubble.png"
            alt=""
          />
        </figure>
        <Button>META Earthへ</Button>
      </div>
    </section>
  )
}

export default Howto
