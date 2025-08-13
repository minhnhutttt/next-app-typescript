'use client'
import UnderlineText from '@/components/underlineText'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
gsap.config({
  nullTargetWarn: false,
})
const Item = ({ title, text }: { title: string; text: string }) => (
  <div className=" fade-up mb-2.5 flex w-full gap-1 md:w-1/2">
    <div className="fot-bold text-[17px] md:text-[14px]">❌</div>
    <div className="flex-1">
      <p className="text-[17px] font-bold md:text-[14px]">{title}</p>
      <p className="text-[12px] font-medium">{text}</p>
    </div>
  </div>
)

const Supports = () => {
  const supportRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const container = document.getElementById('rippleContainer')
    if (!container) return

    const hexagons = container.querySelectorAll('.hexagon')
    const hexagonElements = Array.from(hexagons)

    const ripple = (target: HTMLElement) => {
      if (container.classList.contains('show-ripple')) {
        return
      }
      const targetRect = target.getBoundingClientRect()
      const data = hexagonElements
        .map((element: any) => {
          const rect = element.getBoundingClientRect()
          const centerX = rect.x + rect.width / 2
          const centerY = rect.y + rect.height / 2
          const distance = Math.round(
            Math.sqrt(
              Math.pow(rect.x - targetRect.x, 2) +
                Math.pow(rect.y - targetRect.y, 2)
            )
          )
          return { element, rect, centerX, centerY, distance }
        })
        .sort((a, b) => (a.distance > b.distance ? 1 : -1))

      const [max] = data.slice(-1)
      data.forEach((item) =>
        item.element.style.setProperty(
          '--ripple-factor',
          `${(item.distance * 100) / max.distance}`
        )
      )
      container.classList.toggle('show-ripple')
      const cleanUp = () => {
        requestAnimationFrame(() => {
          container.classList.remove('show-ripple')
          data.forEach((item) =>
            item.element.style.removeProperty('--ripple-factor')
          )
          max.element.removeEventListener('animationend', cleanUp)
        })
      }
      max.element.addEventListener('animationend', cleanUp)
    }
    ScrollTrigger.create({
      trigger: supportRef.current,
      start: 'top top',
      once: true,
      onEnter: () => {
        ripple(hexagonElements[0] as HTMLElement)
      },
    })
    hexagons.forEach((hexagon) => {
      hexagon.addEventListener('click', () => {
        ripple(hexagon as HTMLElement)
      })
    })

    setTimeout(() => {
      ripple(hexagonElements[0] as HTMLElement)
      setTimeout(() => {
        setTimeout(() => {
          ripple(hexagonElements[0] as HTMLElement)
        }, 600)
      }, 900)
    }, 300)

    return () => {
      hexagons.forEach((hexagon) =>
        hexagon.removeEventListener('click', () => {
          ripple(hexagon as HTMLElement)
        })
      )
    }
  }, [])

  return (
    <section
      ref={supportRef}
      className="relative border-b border-[#838383] px-5 pb-[80px] pt-[100px] md:pb-[140px] md:pt-[170px]"
    >
      <div className="mx-auto w-full max-w-[793px]">
        <div className="flex justify-center max-lg:px-5">
          <div>
            <h3 className="fade-up relative text-[22px] font-black leading-[1.3] tracking-[-0.018em] md:text-[42px]">
              多業界対応。もちろん<UnderlineText>あなたの業界も</UnderlineText>
            </h3>
            <p className="fade-up mt-2 text-[16px] font-bold md:text-[23px]">
              クオリティアップに業界特化が必要なのは人間だけ。
            </p>
          </div>
        </div>
        <div className="fade-up mt-10 flex flex-col md:mt-12">
          <div
            className="rippleContainer relative z-10 flex justify-center max-md:mb-[30%] max-md:mt-[10%]"
            id="rippleContainer"
          >
            <div className="hexagon absolute left-[44%] top-[-10%] z-30 flex h-[5vw] items-center justify-center rounded-[15px] border border-[#E66161] bg-white px-[1.395vw] text-[3.4vw] font-black text-[#DF3939]/[0.8] md:left-[48%] md:top-[-1%] md:h-[3.721vw] md:text-[2.209vw] min-[860px]:h-8 min-[860px]:px-3 min-[860px]:text-[19px]">
              不動産仲介業
            </div>
            <div className="hexagon absolute left-[20%] top-[-2%] z-30 flex h-[5vw] items-center justify-center rounded-[15px] border border-[#FF6C1D] bg-white px-[1.395vw] text-[3.4vw] font-black text-[#FF6C1D]/[0.8] md:left-[34%] md:top-[4%] md:h-[3.721vw] md:text-[2.209vw] min-[860px]:h-8 min-[860px]:px-3 min-[860px]:text-[19px]">
              美容院・理髪店
            </div>
            <div className="hexagon absolute left-[57%] top-[-2%] z-30 flex h-[5vw] items-center justify-center rounded-[15px] border border-[#DC9004] bg-white px-[1.395vw] text-[3.4vw] font-black text-[#DC9004]/[0.8] md:left-[55%] md:top-[4%] md:h-[3.721vw] md:text-[2.209vw] min-[860px]:h-8 min-[860px]:px-3 min-[860px]:text-[19px]">
              歯科医院
            </div>
            <div className="hexagon absolute left-[37%] top-[5%] z-30 flex h-[5vw] items-center justify-center rounded-[15px] border border-[#DC9004] bg-white px-[1.395vw] text-[3.4vw] font-black text-[#DC9004]/[0.8] md:top-[9%]  md:h-[3.721vw] md:text-[2.209vw] min-[860px]:h-8 min-[860px]:px-3 min-[860px]:text-[19px]">
              整骨院・接骨院
            </div>
            <div className="hexagon absolute left-[20%] top-[10%] z-30 flex h-[5vw] items-center justify-center rounded-[15px] border border-[#9AA000] bg-white px-[1.395vw] text-[3.4vw] font-black text-[#9AA000]/[0.8] md:left-[26%] md:top-[11%] md:h-[3.721vw] md:text-[2.209vw] min-[860px]:h-8 min-[860px]:px-3 min-[860px]:text-[19px]">
              学習塾
            </div>
            <div className="hexagon absolute left-[38%] top-[12%] z-30 flex h-[5vw] items-center justify-center rounded-[15px] border border-[#289D34] bg-white px-[1.395vw] text-[3.4vw] font-black text-[#289D34]/[0.8] md:left-[42%] md:top-[14%] md:h-[3.721vw] md:text-[2.209vw] min-[860px]:h-8 min-[860px]:px-3 min-[860px]:text-[19px]">
              飲食店
            </div>
            <div className="hexagon absolute left-[56%] top-[12%] z-30 flex h-[5vw] items-center justify-center rounded-[15px] border border-[#FF6C1D] bg-white px-[1.395vw] text-[3.4vw] font-black text-[#FF6C1D]/[0.8] md:left-[53%] md:top-[14%] md:h-[3.721vw] md:text-[2.209vw] min-[860px]:h-8 min-[860px]:px-3 min-[860px]:text-[19px]">
              エステサロン
            </div>
            <div className="hexagon absolute left-[5%] top-[18%] z-30 flex h-[5vw] items-center justify-center rounded-[15px] border border-[#269E78] bg-white px-[1.395vw] text-[3.4vw] font-black text-[#269E78]/[0.8] md:left-[20%] md:top-[19%] md:h-[3.721vw] md:text-[2.209vw] min-[860px]:h-8 min-[860px]:px-3 min-[860px]:text-[19px]">
              法律事務所
            </div>
            <div className="hexagon absolute left-[30%] top-[19%] z-30 flex h-[5vw] items-center justify-center rounded-[15px] border border-[#269E78] bg-white px-[1.395vw] text-[3.4vw] font-black text-[#269E78]/[0.8] md:left-[36%]  md:top-[20%] md:h-[3.721vw] md:text-[2.209vw] min-[860px]:h-8 min-[860px]:px-3 min-[860px]:text-[19px]">
              税理士事務所
            </div>
            <div className="hexagon absolute left-[60%] top-[19%] z-30 flex h-[5vw] items-center justify-center rounded-[15px] border border-[#0C749D] bg-white px-[1.395vw] text-[3.4vw] font-black text-[#0C749D]/[0.8] md:left-[54%] md:top-[20%] md:h-[3.721vw] md:text-[2.209vw] min-[860px]:h-8 min-[860px]:px-3 min-[860px]:text-[19px]">
              自動車販売店
            </div>
            <div className="hexagon absolute left-[25%] top-[25.5%] z-30 flex h-[5vw] items-center justify-center rounded-[15px] border border-[#0C309D] bg-white px-[1.395vw] text-[3.4vw] font-black text-[#1B41B3]/[0.7] md:left-[36%] md:h-[3.721vw] md:text-[2.209vw] min-[860px]:h-8 min-[860px]:px-3 min-[860px]:text-[19px]">
              家電量販店
            </div>
            <div className="hexagon absolute left-[52%] top-[25.5%] z-30 flex h-[5vw] items-center justify-center rounded-[15px] border border-[#0C309D] bg-white px-[1.395vw] text-[3.4vw] font-black text-[#1B41B3]/[0.7] md:h-[3.721vw] md:text-[2.209vw] min-[860px]:h-8 min-[860px]:px-3 min-[860px]:text-[19px]">
              ホテル・旅館
            </div>
            <div className="hexagon absolute left-[0%] top-[32%] z-30 flex h-[5vw] items-center justify-center rounded-[15px] border border-[#8E6CEB] bg-white px-[1.395vw] text-[3.4vw] font-black text-[#8E6CEB] md:left-[9%] md:top-[31%] md:h-[3.721vw] md:text-[2.209vw] min-[860px]:h-8 min-[860px]:px-3 min-[860px]:text-[19px]">
              フィットネスクラブ
            </div>
            <div className="hexagon absolute left-[38%] top-[32%] z-30 flex h-[5vw] items-center justify-center rounded-[15px] border border-[#0DA40F] bg-white px-[1.395vw] text-[3.4vw] font-black text-[#0DA40F]/[0.8] md:left-[35%] md:top-[31%] md:h-[3.721vw] md:text-[2.209vw] min-[860px]:h-8 min-[860px]:px-3 min-[860px]:text-[19px]">
              工務店
            </div>
            <div className="hexagon absolute left-[54%] top-[32%] z-30 flex h-[5vw] items-center justify-center rounded-[15px] border border-[#DC9004] bg-white px-[1.395vw] text-[3.2vw] font-black text-[#DC9004]/[0.8] md:left-[47%] md:top-[31%] md:h-[3.721vw] md:text-[2.209vw] min-[860px]:h-8 min-[860px]:px-3 min-[860px]:text-[19px]">
              内科・小児科クリニック
            </div>
            <div className="hexagon absolute left-[60%] top-[46%] z-30 flex h-[5vw] items-center justify-center rounded-[15px] border border-[#686B6C] bg-white px-[1.395vw] text-[3.4vw] font-black text-[#686B6C]/[0.8] md:left-[76%] md:top-[34%] md:h-[3.721vw] md:text-[2.209vw] min-[860px]:h-8 min-[860px]:px-3 min-[860px]:text-[19px]">
              ペットショップ
            </div>
            <div className="hexagon absolute left-[1%] top-[39%] z-30 flex h-[5vw] items-center justify-center rounded-[15px] border border-[#694DF2] bg-white px-[1.395vw] text-[3.4vw] font-black text-[#4E32DB]/[0.8] md:left-[14%] md:top-[35.8%] md:h-[3.721vw] md:text-[2.209vw] min-[860px]:h-8 min-[860px]:px-3 min-[860px]:text-[19px]">
              結婚式場
            </div>
            <div className="hexagon absolute left-[20%] top-[39%] z-30 flex h-[5vw] items-center justify-center rounded-[15px] border border-[#4E32DB] bg-white px-[1.395vw] text-[3.4vw] font-black text-[#694DF2]/[0.8] md:left-[28%] md:top-[35.8%] md:h-[3.721vw] md:text-[2.209vw] min-[860px]:h-8 min-[860px]:px-3 min-[860px]:text-[19px]">
              葬儀社
            </div>
            <div className="hexagon absolute left-[36%] top-[39%] z-30 flex h-[5vw] items-center justify-center rounded-[15px] border border-[#9AA000] bg-white px-[1.395vw] text-[3.4vw] font-black text-[#9AA000]/[0.8] md:left-[40%] md:top-[35.8%] md:h-[3.721vw] md:text-[2.209vw] min-[860px]:h-8 min-[860px]:px-3 min-[860px]:text-[19px]">
              塾・予備校
            </div>
            <div className="hexagon absolute left-[60%] top-[39%] z-30 flex h-[5vw] items-center justify-center rounded-[15px] border border-[#0C749D] bg-white px-[1.395vw] text-[3.4vw] font-black text-[#0C749D]/[0.8] md:left-[56%] md:top-[35.8%] md:h-[3.721vw] md:text-[2.209vw] min-[860px]:h-8 min-[860px]:px-3 min-[860px]:text-[19px]">
              中古車販売店
            </div>
            <div className="hexagon absolute left-[10%] top-[46%] z-30 flex h-[5vw] items-center justify-center rounded-[15px] border border-[#0C309D] bg-white px-[1.395vw] text-[3.4vw] font-black text-[#1B41B3]/[0.8] md:left-[34%] md:top-[40.7%] md:h-[3.721vw] md:text-[2.209vw] min-[860px]:h-8 min-[860px]:px-3 min-[860px]:text-[19px]">
              家具・インテリアショップ
            </div>
            <div className="hexagon absolute left-[6%] top-[53%] z-30 flex h-[5vw] items-center justify-center rounded-[15px] border border-[#0C309D] bg-white px-[1.395vw] text-[3.4vw] font-black text-[#1B41B3]/[0.8] md:top-[43%]  md:h-[3.721vw] md:text-[2.209vw] min-[860px]:h-8 min-[860px]:px-3 min-[860px]:text-[19px]">
              アパレルショップ
            </div>
            <div className="hexagon absolute left-[40%] top-[55%] z-30 flex h-[5vw] items-center justify-center rounded-[15px] border border-[#0DA40F] bg-white px-[1.395vw] text-[3.4vw] font-black text-[#0DA40F]/[0.8] md:left-[46%]  md:top-[46%] md:h-[3.721vw] md:text-[2.209vw] min-[860px]:h-8 min-[860px]:px-3 min-[860px]:text-[19px]">
              リフォーム会社
            </div>
            <div className="hexagon absolute left-[70%] top-[53%] z-30 flex h-[5vw] items-center justify-center rounded-[15px] border border-[#DF2C35] bg-white px-[1.395vw] text-[3.4vw] font-black text-[#BA1E3D]/[0.9] md:left-[67%] md:top-[44%] md:h-[3.721vw] md:text-[2.209vw] min-[860px]:h-8 min-[860px]:px-3 min-[860px]:text-[19px]">
              写真スタジオ
            </div>
            <div className="hexagon absolute left-[1%] top-[62%] z-30 flex h-[5vw] items-center justify-center rounded-[15px] border border-[#952269] bg-white px-[1.395vw] text-[3.4vw] font-black text-[#952269]/[0.8] md:left-[21%] md:top-[51.5%] md:h-[3.721vw] md:text-[2.209vw] min-[860px]:h-8 min-[860px]:px-3 min-[860px]:text-[19px]">
              旅行代理店
            </div>
            <div className="hexagon absolute left-[24%] top-[62%] z-30 flex h-[5vw] items-center justify-center rounded-[15px] border border-[#AB5D6C] bg-white px-[1.395vw] text-[3.4vw] font-black text-[#AB5D6C]/[0.9] md:left-[37%] md:top-[51.5%] md:h-[3.721vw] md:text-[2.209vw] min-[860px]:h-8 min-[860px]:px-3 min-[860px]:text-[19px]">
              引越し業者
            </div>
            <div className="hexagon absolute left-[47%] top-[62%] z-30 flex h-[5vw] items-center justify-center rounded-[15px] border border-[#A71633] bg-white px-[1.395vw] text-[3.4vw] font-black text-[#A71633]/[0.8] md:left-[53%] md:top-[51.5%] md:h-[3.721vw] md:text-[2.209vw] min-[860px]:h-8 min-[860px]:px-3 min-[860px]:text-[19px]">
              保険代理店
            </div>
            <div className="hexagon absolute left-[70%] top-[62%] z-30 flex h-[5vw] items-center justify-center rounded-[15px] border border-[#E66161] bg-white px-[1.395vw] text-[3.2vw] font-black text-[#DF3939]/[0.8] md:left-[70%] md:top-[51.5%] md:h-[3.721vw] md:text-[2.209vw] min-[860px]:h-8 min-[860px]:px-3 min-[860px]:text-[19px]">
              不動産管理会社
            </div>
            <div className="hexagon absolute left-[0%] top-[69%] z-30 flex h-[5vw] items-center justify-center rounded-[15px] border border-[#FF6C1D] bg-white px-[1.395vw] text-[3.4vw] font-black text-[#FF6C1D]/[0.8] md:left-[5%] md:top-[57%] md:h-[3.721vw] md:text-[2.209vw] min-[860px]:h-8 min-[860px]:px-3 min-[860px]:text-[19px]">
              ネイルサロン
            </div>
            <div className="hexagon absolute left-[27%] top-[69%] z-30 flex h-[5vw] items-center justify-center rounded-[15px] border border-[#FF6C1D] bg-white px-[1.395vw] text-[3.4vw] font-black text-[#FF6C1D]/[0.8] md:left-[23%] md:top-[57%]  md:h-[3.721vw] md:text-[2.209vw] min-[860px]:h-8 min-[860px]:px-3 min-[860px]:text-[19px]">
              マッサージ店
            </div>
            <div className="hexagon absolute left-[54%] top-[69%] z-30 flex h-[5vw] items-center justify-center rounded-[15px] border border-[#D853F0] bg-white px-[1.395vw] text-[3.4vw] font-black text-[#CA70DB] md:left-[41%] md:top-[57%] md:h-[3.721vw] md:text-[2.209vw] min-[860px]:h-8 min-[860px]:px-3 min-[860px]:text-[19px]">
              ヨガスタジオ
            </div>
            <div className="hexagon absolute left-[81%] top-[69%] z-30 flex h-[5vw] items-center justify-center rounded-[15px] border border-[#D853F0] bg-white px-[1.395vw] text-[3.4vw] font-black text-[#CA70DB] md:left-[59%] md:top-[57%] md:h-[3.721vw] md:text-[2.209vw] min-[860px]:h-8 min-[860px]:px-3 min-[860px]:text-[19px]">
              ゴルフ場
            </div>
            <div className="hexagon absolute left-[72%] top-[76%] z-30 flex h-[5vw] items-center justify-center rounded-[15px] border border-[#D853F0] bg-white px-[1.395vw] text-[3.4vw] font-black text-[#CA70DB] md:top-[59.5%]  md:h-[3.721vw] md:text-[2.209vw] min-[860px]:h-8 min-[860px]:px-3 min-[860px]:text-[19px]">
              スキー場
            </div>
            <div className="hexagon absolute left-[12%] top-[77%] z-30 flex h-[5vw] items-center justify-center rounded-[15px] border border-[#9AA000] bg-white px-[1.395vw] text-[3.4vw] font-black text-[#9AA000]/[0.8] md:left-[20%] md:top-[62%] md:h-[3.721vw] md:text-[2.209vw] min-[860px]:h-8 min-[860px]:px-3 min-[860px]:text-[19px]">
              英会話教室
            </div>
            <div className="hexagon absolute left-[36%] top-[77%] z-30 flex h-[5vw] items-center justify-center rounded-[15px] border border-[#0C749D] bg-white px-[1.395vw] text-[3.4vw] font-black text-[#0C749D]/[0.8] md:top-[62%]  md:h-[3.721vw] md:text-[2.209vw] min-[860px]:h-8 min-[860px]:px-3 min-[860px]:text-[19px]">
              自動車整備工場
            </div>
            <div className="hexagon absolute left-[26%] top-[84%] z-30 flex h-[5vw] items-center justify-center rounded-[15px] border border-[#DC9004] bg-white px-[1.395vw] text-[3.4vw] font-black text-[#DC9004]/[0.8] md:left-[30%] md:top-[67%] md:h-[3.721vw] md:text-[2.209vw] min-[860px]:h-8 min-[860px]:px-3 min-[860px]:text-[19px]">
              薬局
            </div>
            <div className="hexagon absolute left-[39%] top-[84%] z-30 flex h-[5vw] items-center justify-center rounded-[15px] border border-[#DC9004] bg-white px-[1.395vw] text-[3.4vw] font-black text-[#DC9004]/[0.8] md:top-[67%]  md:h-[3.721vw] md:text-[2.209vw] min-[860px]:h-8 min-[860px]:px-3 min-[860px]:text-[19px]">
              眼科
            </div>
            <div className="hexagon absolute left-[52%] top-[84%] z-30 flex h-[5vw] items-center justify-center rounded-[15px] border border-[#DC9004] bg-white px-[1.395vw] text-[3.4vw] font-black text-[#DC9004]/[0.8] md:left-[48%] md:top-[67%] md:h-[3.721vw] md:text-[2.209vw] min-[860px]:h-8 min-[860px]:px-3 min-[860px]:text-[19px]">
              皮膚科
            </div>
            <div className="hexagon absolute left-[34%] top-[92%] z-30 flex h-[5vw] items-center justify-center rounded-[15px] border border-[#0C309D] bg-white px-[1.395vw] text-[3.4vw] font-black text-[#1B41B3]/[0.7] md:left-[41%] md:top-[72%] md:h-[3.721vw] md:text-[2.209vw] min-[860px]:h-8 min-[860px]:px-3 min-[860px]:text-[19px]">
              花屋
            </div>
            <div className="hexagon absolute left-[47%] top-[92%] z-30 flex h-[5vw] items-center justify-center rounded-[15px] border border-[#0C309D] bg-white px-[1.395vw] text-[3.4vw] font-black text-[#1B41B3]/[0.7] md:left-[50%] md:top-[72%] md:h-[3.721vw] md:text-[2.209vw] min-[860px]:h-8 min-[860px]:px-3 min-[860px]:text-[19px]">
              楽器店
            </div>
            <div className="hexagon absolute left-[63%] top-[92%] z-30 flex h-[5vw] items-center justify-center rounded-[15px] border border-[#0C309D] bg-white px-[1.395vw] text-[3.4vw] font-black text-[#1B41B3]/[0.7] md:left-[61%] md:top-[72%] md:h-[3.721vw] md:text-[2.209vw] min-[860px]:h-8 min-[860px]:px-3 min-[860px]:text-[19px]">
              スポーツ用品店
            </div>
            <div className="hexagon absolute left-[12%] top-[100%] z-30 flex h-[5vw] items-center justify-center rounded-[15px] border border-[#9AA000] bg-white px-[1.395vw] text-[3.4vw] font-black text-[#9AA000]/[0.8] md:left-[26%] md:top-[77%] md:h-[3.721vw] md:text-[2.209vw] min-[860px]:h-8 min-[860px]:px-3 min-[860px]:text-[19px]">
              パソコン教室
            </div>
            <div className="hexagon absolute left-[40%] top-[100%] z-30 flex h-[5vw] items-center justify-center rounded-[15px] border border-[#DC9004] bg-white px-[1.395vw] text-[3.4vw] font-black text-[#DC9004]/[0.8] md:left-[45%] md:top-[77%] md:h-[3.721vw] md:text-[2.209vw] min-[860px]:h-8 min-[860px]:px-3 min-[860px]:text-[19px]">
              介護サービス
            </div>
            <div className="hexagon absolute left-[68%] top-[100%] z-30 flex h-[5vw] items-center justify-center rounded-[15px] border border-[#DF2C35] bg-white px-[1.395vw] text-[3.4vw] font-black text-[#BA1E3D]/[0.9] md:left-[64%] md:top-[77%] md:h-[3.721vw] md:text-[2.209vw] min-[860px]:h-8 min-[860px]:px-3 min-[860px]:text-[19px]">
              貸衣装店
            </div>
            <div className="hexagon absolute left-[38%] top-[107%] z-30 flex h-[5vw] items-center justify-center rounded-[15px] border border-[#686B6C] bg-white px-[1.395vw] text-[3.4vw] font-black text-[#686B6C]/[0.8] md:top-[83%]  md:h-[3.721vw] md:text-[2.209vw] min-[860px]:h-8 min-[860px]:px-3 min-[860px]:text-[19px]">
              ペットサロン
            </div>
            <div className="hexagon absolute left-[30%] top-[116%] z-30 flex h-[5vw] items-center justify-center rounded-[15px] border border-[#0C309D] bg-white px-[1.395vw] text-[3.4vw] font-black text-[#1B41B3]/[0.8] md:top-[89%]  md:h-[3.721vw] md:text-[2.209vw] min-[860px]:h-8 min-[860px]:px-3 min-[860px]:text-[19px]">
              靴屋
            </div>
            <div className="hexagon absolute left-[53%] top-[114%] z-30 flex h-[5vw] items-center justify-center rounded-[15px] border border-[#DF2C35] bg-white px-[1.395vw] text-[3.4vw] font-black text-[#BA1E3D]/[0.9] md:top-[88%]  md:h-[3.721vw] md:text-[2.209vw] min-[860px]:h-8 min-[860px]:px-3 min-[860px]:text-[19px]">
              クリーニング店
            </div>
            <div className="hexagon absolute left-[27%] top-[122%] z-30 flex h-[5vw] items-center justify-center rounded-[15px] border border-[#0C309D] bg-white px-[1.395vw] text-[3.4vw] font-black text-[#1B41B3]/[0.8] md:left-[36%] md:top-[94%] md:h-[3.721vw] md:text-[2.209vw] min-[860px]:h-8 min-[860px]:px-3 min-[860px]:text-[19px]">
              時計・宝飾店
            </div>
            <div className="hexagon absolute left-[55%] top-[122%] z-30 flex h-[5vw] items-center justify-center rounded-[15px] border border-[#0C309D] bg-white px-[1.395vw] text-[3.4vw] font-black text-[#1B41B3]/[0.8] md:top-[94%]  md:h-[3.721vw] md:text-[2.209vw] min-[860px]:h-8 min-[860px]:px-3 min-[860px]:text-[19px]">
              文房具店
            </div>
            <div className="hexagon absolute left-[48%] top-[129%] z-30 flex h-[5vw] items-center justify-center rounded-[15px] border border-[#0C749D] bg-white px-[1.395vw] text-[3.4vw] font-black text-[#0C749D]/[0.8] md:top-[100%]  md:h-[3.721vw] md:text-[2.209vw] min-[860px]:h-8 min-[860px]:px-3 min-[860px]:text-[19px]">
              カーディーラー
            </div>
            <figure className="fade-up max-[860px]:w-[92.209vw]">
              <img src="/assets/images/globular.png" alt="" />
            </figure>
          </div>
        </div>
        <div className="mt-16 md:mt-24">
          <p className="text-center text-[17px] font-bold md:text-[23px]">
            ※当然ですが念のため。禁止カテゴリー
          </p>
          <div className="mx-auto mt-5 flex w-full max-w-[350px] flex-wrap md:mt-8 md:max-w-[550px]">
            <Item
              title="違法なモノやサービス"
              text="麻薬、盗品、偽造品、無許可の薬"
            />
            <Item
              title="ギャンブルと依存性の高いもの"
              text="違法カジノ、非公認ギャンブル、危険ドラッグ"
            />
            <Item
              title="大人向けの過激なコンテンツ"
              text="ポルノ、風俗店、アダルトグッズ"
            />
            <Item
              title="危険な製品やサービス"
              text="銃器、爆発物、違法な車両改造"
            />
            <Item title="詐欺や悪質商法" text="霊感商法、ネズミ講、誇大広告" />
            <Item
              title="他人の権利を侵害するもの"
              text="個人情報売買、著作権侵害品、盗撮器具"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Supports
