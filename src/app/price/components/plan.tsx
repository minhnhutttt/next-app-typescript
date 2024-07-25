'use client'
import Button from '@/components/button'
import useScrollAnimations from '@/hooks/useScrollAnimations'
import { ReactNode } from 'react'
import { useModal } from '@/context/ModalContext'

interface ItemPropsType {
  children: ReactNode
}

const Item = ({ children }: ItemPropsType) => {
  return (
    <p className="flex gap-1.5">
      <span className="mt-1">
        <img src="/assets/images/price/ic-check-sub.png" alt="" />
      </span>
      <span className="flex-1">{children}</span>
    </p>
  )
}
const Plan = () => {
  const ref = useScrollAnimations()
  const { openModal } = useModal()
  return (
    <section
      ref={ref}
      className="overflow-hidden pb-20 pt-[100px] md:pb-[150px] md:pt-[145px]"
    >
      <div className="bg-[url('/assets/images/bg-memories.png')] bg-[length:100%_auto] bg-top bg-no-repeat">
        <div className="fade-up relative flex h-[130px] items-center justify-center bg-[url('/assets/images/bg-title-05.png'),linear-gradient(90deg,_#FF5A78_0%,_#7E1373_100%)] bg-[length:auto_100%] bg-[position:center_left_-70px,center] bg-no-repeat max-md:flex-col max-md:justify-center  max-md:px-5 max-md:py-10 md:h-[197px] md:bg-cover md:bg-left-bottom">
          <p className="w-full text-center font-serif text-[clamp(14px,3.8vw,20px)] font-black text-white md:max-w-[51.389vw] md:text-[2.708vw] dt:max-w-[740px] dt:text-[39px]">
            プランのご案内
          </p>
          <span className="bottom-4 right-4 max-md:mt-5 max-md:hidden max-md:w-full md:absolute dt:right-28">
            <img
              className="ml-auto w-[50vw] md:w-[25.069vw] dt:w-[361px]"
              src="/assets/images/sign-title-01.png"
              alt=""
            />
          </span>
        </div>
      </div>
      <div className="pt-14 font-zen md:pt-[60px]">
        <div className="mx-auto flex w-full max-w-[700px] flex-wrap items-start justify-center gap-10 px-6 dt:max-w-[1440px]">
          <div className="fade-up w-full overflow-hidden rounded-t-[40px] border-2 border-[#20232F] dt:mt-[193px] dt:w-[419px]">
            <div className="flex flex-wrap border-b-2 border-[#20232F] bg-[#E5C9FF] pb-7 pt-[43px]">
              <div className="mx-auto w-[346px]">
                <div className="bg-white/40 p-2 leading-[1.4]">
                  <p className="font-noto text-center text-[12px] font-semibold md:text-[15px]">
                    Entry plan
                  </p>
                  <p className="text-center text-[17px] font-bold md:text-[22px]">
                    エントリープラン
                  </p>
                </div>
                <p className="mt-3 text-center text-[13px] md:text-[16px]">
                  メタバース供養の基本セットのみ
                </p>
              </div>
            </div>
            <div className="bg-white px-6 pb-6 pt-4 md:px-9 md:pb-10 md:pt-6">
              <p className="border-b border-[#001C80] text-center text-[18px] font-bold md:text-[24px]">
                <span><span className="text-[30px] md:text-[58px]">90,000</span>
                円(税抜)</span>
                <span className="block text-center md:text-[16px] text-[14px] font-normal text-black">※税込99,000円となります。</span>
              </p>
              <div className="my-6 space-y-7 text-[13px] md:my-8 md:space-y-9 md:text-[16px]">
                <Item>メタバース内のお墓(4種類から選べるようになりました)</Item>
                <Item>2Dペットアバター制作(1枚以上の写真データが必要です)</Item>
                <Item>
                AI僧侶による法要(年に2回実施、以降は2万円/回)
                </Item>
              </div>
              <div className="flex justify-center">
                <Button
                  onclick={openModal}
                  rect="w-[280px] h-[60px] bg-black overflow-hidden border hover:border-black border-white flex items-center justify-center md:text-[16px] text-[14px] text-white font-bold rounded-[60px]"
                >
                  エントリープランに申し込む
                </Button>
              </div>
            </div>
          </div>
          <div className="fade-up relative w-full overflow-hidden rounded-t-[40px] border-[10px] border-[#F59F3A] [box-shadow:0px_4px_60px_0px_rgba(0,_0,_0,_0.10)] dt:w-[459px]">
            <figure className="absolute left-0 top-0">
              <img
                className="max-md:w-[120px]"
                src="/assets/images/price/ribbon.png"
                alt=""
              />
            </figure>
            <div className="flex flex-wrap bg-[linear-gradient(122deg,_#F59F3A_10.27%,_#EA3800_100.14%)] pb-7 pt-[50px] ">
              <div className="mx-auto w-[346px]">
                <div className="bg-white/40 p-2 leading-[1.4]">
                  <p className="font-noto text-center text-[12px] font-semibold md:text-[15px]">
                    Memorial Monitor Plan
                  </p>
                  <p className="text-center text-[17px] font-bold md:text-[22px]">
                    メモリアルモニタープラン
                  </p>
                </div>
                <p className="mt-3 text-center text-[13px] text-white md:text-[16px]">
                  18大特典付きの最も人気のプラン
                </p>
              </div>
            </div>
            <div className="bg-white px-6 pb-8 pt-4 md:px-[45px] md:pb-12 md:pt-6">
              <p className="border-b border-[#001C80] text-center text-[18px] font-bold text-[#F59F3A] md:text-[24px]">
                <span><span className="text-[30px] md:text-[58px]">180,000</span>
                円(税抜)</span>
                <span className="block text-center md:text-[16px] text-[14px] font-normal text-black">※税込198,000円となります。</span>
              </p>
              <div className="my-6 space-y-7 text-[13px] md:my-8 md:space-y-[21px] md:text-[16px]">
                <Item>メタバース内のお墓(4種類から選べるようになりました)</Item>
                <Item>2Dペットアバター制作(1枚以上の写真データが必要です)</Item>
                <Item>
                  AI僧侶による法要(年に2回実施、以降は2万円/回)
                </Item>
                <Item>AI僧侶による毎月の個別法要(初年度無料で毎月実施いたします)</Item>
                <Item>
                  ペットとの個別空間構築(ペットオーナー様ごとのプライベートな供養場所)
                </Item>
                <Item>
                  個別空間へのペットアバターの配置(2D/3Dで制作したアバターを配置できます)
                </Item>
                <Item>
                  個別空間でのペットアバターの息遣いや簡単な動きを表現(動くペットとの再会を果たせます)
                </Item>
                <Item>
                  個別空間へのアイテムの配置(特典適用でアイテムを一つプレゼント)
                </Item>
                <Item>
                  個別空間の背景を任意に変更(おもいでの場所を背景にできます)
                </Item>
                <Item>
                  new!
                  AIによるペットアバターの鳴き声再現(鳴き声データが必要です)
                </Item>
                <Item>
                  new!
                  AIによるペットアバターとの会話(性格などを学習させればペットと話せるようになりました)
                </Item>
              </div>
              <div className="flex justify-center bg-white">
                <div className="relative h-[62px] w-[258px] overflow-hidden rounded-[32px] [box-shadow:0px_0px_40px_0px_rgba(100,_0,_136,_0.20)] md:w-[345px]">
                  <Button
                    onclick={openModal}
                    rect="md:w-[347px] w-[260px] h-[64px] bg-[#FF1B1B] rounded-[32px] flex items-center justify-center md:text-[16px] text-[13px] text-white font-bold relative group !absolute top-[-1px] left-[-1px]"
                  >
                    <span className="group-hover:text-black">
                      メモリアルモニタープランに応募する
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="fade-up w-full overflow-hidden rounded-t-[40px] border-2 border-[#20232F] dt:mt-[193px] dt:w-[419px]">
            <div className="flex flex-wrap border-b-2 border-[#20232F] bg-[#8EC5FC] pb-7 pt-[43px]">
              <div className="mx-auto w-[346px]">
                <div className="bg-white/40 p-2 leading-[1.4]">
                  <p className="font-noto text-center text-[12px] font-semibold md:text-[15px]">
                    Standard plan
                  </p>
                  <p className="text-center text-[17px] font-bold md:text-[22px]">
                    スタンダードプラン
                  </p>
                </div>
                <p className="mt-3 text-center text-[13px] md:text-[16px]">
                  モニターは遠慮したい方のための定価プラン
                </p>
              </div>
            </div>
            <div className="bg-white px-6 pb-6 pt-4 md:px-9 md:pb-10 md:pt-6">
              <p className="border-b border-[#001C80] text-center text-[18px] font-bold md:text-[24px]">
                <span><span className="text-[30px] md:text-[58px]">300,000</span>
                円(税抜)</span>
                <span className="block text-center md:text-[16px] text-[14px] font-normal text-black">※税込330,000円となります。</span>
              </p>
              <div className="my-6 space-y-5 text-[13px] md:my-8 md:space-y-[21px] md:text-[16px]">
                <Item>メタバース内のお墓(4種類から選べるようになりました)</Item>
                <Item>2Dペットアバター制作(1枚以上の写真データが必要です)</Item>
                <Item>
                  AI僧侶による法要(指定日に一度のみ、2回目以降は2万円/回)
                </Item>
                <Item>
                  ペットとの個別空間構築(ペットオーナー様ごとのプライベートな供養場所)
                </Item>
                <Item>
                  個別空間へのペットアバターの配置(2D/3Dで制作したアバターを配置できます)
                </Item>
                <Item>
                  個別空間でのペットアバターの息遣いや簡単な動きを表現(動くペットとの再会を果たせます)
                </Item>
                <Item>
                  個別空間へのアイテムの配置(特典適用でアイテムを一つプレゼント)
                </Item>
                <Item>
                  個別空間の背景を任意に変更(おもいでの場所を背景にできます)
                </Item>
                <Item>
                  new!
                  AIによるペットアバターの鳴き声再現(鳴き声データが必要です)
                </Item>
                <Item>
                  new!
                  AIによるペットアバターとの会話(性格などを学習させればペットと話せるようになりました)
                </Item>
              </div>
              <div className="flex justify-center">
                <Button
                  onclick={openModal}
                  rect="w-[280px] h-[60px] bg-black overflow-hidden border hover:border-black border-white flex items-center justify-center md:text-[16px] text-[14px] text-white font-bold rounded-[60px]"
                >
                  スタンダードプランに申し込む
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fade-up px-5">
        <div className="relative mx-auto mt-12 w-full max-w-[440px] md:mt-[40px] md:max-w-[880px]">
          <span className="absolute left-0 top-0">
            <img
              className="max-md:max-w-[100px]"
              src="/assets/images/price/frame.png"
              alt=""
            />
          </span>
          <div className="px-7 py-6 leading-[2] lg:px-[64px] lg:py-[53px]">
            <p className="text-[14px] font-bold md:text-[18px]">
              現実の供養所のオプションをご希望の方は、お申し込み完了後スタッフにお伝えください。
            </p>
            <p className="text-[13px] font-medium md:text-[16px]">
              ※初期費用60,000円が別途必要です。メモリアルモニター特典の2万円オフクーポンが利用可能です。
              <br />
              ※棚級により年会費が別途50,000円〜30,000円必要です。
              <br />
              ※現実の供養所は株式会社んみゃーちにより運営されています。
            </p>
          </div>
          <span className="absolute bottom-0 right-0">
            <img
              className="rotate-180 max-md:max-w-[100px]"
              src="/assets/images/price/frame.png"
              alt=""
            />
          </span>
        </div>
      </div>
    </section>
  )
}

export default Plan
