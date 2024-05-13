"use client"
import useScrollAnimations from "@/hooks/useScrollAnimations";
import Title from "@/components/title";

const data = [
    {
        title: "① 収穫",
        image: "/assets/images/img-step-01.png",
        body: "選別した葉を摘み、流水で綺麗に洗浄する"
    },
    {
        title: "② 乾燥",
        image: "/assets/images/img-step-02.png",
        body: "状態を見ながら、1～3分蒸す"
    },
    {
        title: "③ 完成",
        image: "/assets/images/img-step-03.png",
        body: "しっかりと感想させ、丁寧に揉みこみ完成"
    }
]

  export default function Work() {
    const ref = useScrollAnimations();
    return (
        <div ref={ref} className="md:mb-[215px] mb-[80px]">
      <div className="relative mb-10 md:mb-16">
        <div className="md:h-[376px] h-[188px] bg-[url('/assets/images/img-works.png')] bg-cover bg-center"></div>
        <div className="md:absolute left-0 right-0 top-[65px] max-md:mt-11">
          <div className="w-full md:max-w-[1220px] max-w-[440px] mx-auto max-md:flex max-md:justify-center">
            <Title>人が育む一福の柿の葉茶</Title>
          </div>
        </div>
      </div>
      <div className="relative">
        <figure className="fade-up max-md:hidden absolute w-[33.53%] left-0 bottom-0">
          <img src="/assets/images/deco-02.png" alt="" />
        </figure>
        <div className="w-full max-w-[440px] md:max-w-[1190px] mx-auto relative px-5">
          <div className="fade-up flex items-center justify-center border-b border-black pb-5 max-md:hidden">
            <h2 className="font-bold font-mincho text-[4.8vw] md:text-[42px] text-black leading-tight max-md:tracking-[-0.08em]">
              <span className="text-[7.2vw] md:text-[54px] text-[#ED3636]">
                94歳
              </span>
              <span className="text-[#ED3636]">が育む</span>
              <span className="text-[7.2vw] md:text-[54px]">
                「柿の葉茶」
              </span>
              <br />
              <span className="text-[5.2vw] md:text-[42px]">自ら</span>
              <span className="text-[4vw] md:text-[32px]">の</span>
              <span className="text-[5.2vw] md:text-[42px]">身体</span>
              <span className="text-[4vw] md:text-[32px]">で</span>
              <span className="text-[5.2vw] md:text-[42px]">実感</span>
              <span className="text-[4vw] md:text-[32px]">する</span>
              <span className="text-[7.2vw] md:text-[54px] text-[#ED3636]">
                素晴
              </span>
              <span className="text-[5.2vw] md:text-[42px] text-[#ED3636]">
                らしさ
              </span>
              <span className="text-[5.2vw] md:text-[42px]">とは？</span>
            </h2>
          </div>
          <div className="fade-up flex justify-center mt-9 md:mt-16">
            <p className="md:text-[20px] text-[17px] font-light max-w-[960px] leading-relaxed  px-4">
            一福「柿の葉茶」の生産者は「加藤とし」さんです。
              南房総に住居を構える加藤としさんは今年94歳、驚くほどの健康体を維持しています。
              <br />
              <br />
              としさんが昔から手作りで愛飲するのは「柿の葉茶」です。
            </p>
          </div>
          <div className="fade-up flex items-center md:mt-[70px] mt-8 gap-12 px-4 md:px-8 max-md:flex-col">
            <div className="max-md:px-2">
              <figure className="">
                <img src="/assets/images/img-avatar.png" alt="" />
              </figure>
              <p className="md:text-[22px] text-[18px] font-light text-center mt-5">
              加藤としさん　94歳
              </p>
            </div>
            <div className="flex-1">
              <p className="md:text-[20px] text-[17px] font-light leading-relaxed">
                柿の葉茶（かきのはちゃ）は、日本の伝統的な茶の一種で、柿の葉を乾燥させて作られるお茶です。
                <br />
                <br />
                主な原料は柿の木の葉であり、新鮮な葉を摘み取り乾燥させて製品化します。
                陰干しや日陰で天日干しを行って葉を乾燥させますが、このプロセスにより、柿の葉が茶として使われる際の風味や特性が引き立ちます。
                <br />
                <br />
                独特な甘みも感じられ、穏やかで和やかな味わいが特徴的です。
                柿の葉茶は、その特有の風味や健康効果、文化的な要素から古来より存在します。
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-5 md:mt-[190px] mt-11">
        <div className="w-full max-w-[440px] md:max-w-[1220px] mx-auto relative">
          <div className="fade-up md:hidden text-[18px] text-center font-mincho font-bold border-b border-black pb-4 mb-2">
            一福の「柿の葉茶」の作り方
          </div>
          <div className="flex max-md:flex-col max-md:items-center gap-5 max-md:px-2">
            {data.map((item, index) => (
                <div className="fade-up" key={index}>
                <figure>
                  <img
                    className="max-md:max-w-[332px] w-full md:rounded-[65px] rounded-[35px]"
                    src={item.image}
                    alt={item.title}
                  />
                </figure>
                <div className="md:mt-6 mt-2.5">
                  <p className="md:text-[28px] text-[18px] font-semibold">
                    <span>{item.title}</span>
                  </p>
                  <p className="md:text-[20px] text-[13px] font-semibold md:mt-5 mt-2">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="fade-up flex justify-center md:mt-20 mt-10">
            <p className="md:text-[20px] text-[17px] font-light max-w-[960px] leading-relaxed max-md:px-4">
              完成までの全ての工程を人の手で丁寧に製造し、だからこそ自然の恵みをそのまま生かした茶葉を提供できるよう心掛けております。
            </p>
          </div>
        </div>
      </div>
    </div>
    );
  }
  