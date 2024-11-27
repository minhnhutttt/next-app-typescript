'use client'
import { useModal } from '@/context/ModalContext'
import Button from '@/components/button'
import useScrollAnimations from '@/hooks/useScrollAnimations'

const Metaverse = () => {
  const ref = useScrollAnimations()
  const { openModal } = useModal()
  return (
    <section ref={ref} className="overflow-hidden pb-14 md:pb-[88px]">
      <h4 className="fade-up flex justify-center px-4 pb-4 text-center font-serif text-[28px] font-black text-[#0B1096] md:text-[39px]">
        ＼ このページから ／<br className="md:hidden" />
        お申し込みの方限定
      </h4>
      <div className="fade-up relative flex h-[100px] items-center justify-center border-t-2 border-[#0B1096] bg-[#0B1096] bg-[url('/assets/images/bg-title-06.png')] bg-[length:auto_100%] bg-[center_left_-100px] bg-no-repeat max-md:flex-col max-md:px-5 max-md:py-10 md:h-[197px] md:bg-cover md:bg-center dt:justify-center">
        <p className="w-full text-center font-serif text-[clamp(14px,3.8vw,20px)] font-black text-white md:max-w-[51.389vw] md:text-[2.708vw] dt:max-w-[740px] dt:text-[39px]">
          メタバース空間で使える <br />
          お線香アイテムが一生涯無料
        </p>
        <span className="bottom-4 right-4 max-md:mt-5 max-md:hidden max-md:w-full md:absolute dt:right-28">
          <img
            className="ml-auto w-[50vw] md:w-[25.069vw] dt:w-[361px]"
            src="/assets/images/sign-title-01.png"
            alt=""
          />
        </span>
      </div>
      <div className="mt-9 bg-[url('/assets/images/price/bg-metaverse.png')] bg-[length:100%_auto] bg-top bg-no-repeat px-5 py-16 md:py-[100px]">
        <div className="fade-up mb-20 flex flex-col items-center md:mb-[150px]">
          <figure className="show">
            <img src="/assets/images/price/metaverse-text_01.png" alt="" />
          </figure>
          <figure className="show">
            <img src="/assets/images/price/metaverse-text_02.png" alt="" />
          </figure>
          <figure className="show">
            <img src="/assets/images/price/metaverse-text_03.png" alt="" />
          </figure>
          <figure className="show">
            <img src="/assets/images/price/metaverse-text_04.png" alt="" />
          </figure>
          <figure className="show">
            <img src="/assets/images/price/metaverse-text_05.png" alt="" />
          </figure>
          <figure className="show">
            <img src="/assets/images/price/metaverse-text_06.png" alt="" />
          </figure>
          <figure className="show">
            <img src="/assets/images/price/metaverse-text_07.png" alt="" />
          </figure>
        </div>
        <div className="show flex justify-center">
          <Button
            onclick={openModal}
            rect="group md:w-[700px] md:h-[118px] w-[320px] h-20 font-sns text-white font-bold md:text-[32px] text-[20px] flex items-center justify-center md:rounded-[60px] rounded-[40px] bg-[#F12929]"
          >
            <span className="group-hover:text-black">
              お線香特典付きで申し込む
            </span>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Metaverse
