"use client"
import useScrollAnimations from "@/hooks/useScrollAnimations";

const data = [
  {
    id: "1",
    title: "老化防止",
    body: "柿の葉茶には、抗酸化物質やポリフェノールが豊富に含まれています。これらの成分は、老化や慢性疾患のリスクを軽減することが期待できます。",
    image: "/assets/images/img-effects-01.png",
  },
  {
    id: "2",
    title: "健康維持",
    body: "柿の葉にはビタミンCやカリウム、カルシウムなどの栄養素が含まれています。これらの栄養素は、健康維持に役立つ重要な要素です。",
    image: "/assets/images/img-effects-02.png",
  },
  {
    id: "3",
    title: "デトックス効果",
    body: "柿の葉には、下痢や消化不良の症状を緩和し、体内の余分な塩分や老廃物を排出しやすい体内環境を維持する事が期待できます。",
    image: "/assets/images/img-effects-03.png",
  },
];
export default function FV() {
  const ref = useScrollAnimations();

  return (
    <section ref={ref}>
      <div className="relative">
        <div className="w-full">
          <img
            className="w-full max-md:hidden"
            src="/assets/images/mv.png"
            alt=""
          />
          <img
            className="w-full md:hidden"
            src="/assets/images/mv_sp.png"
            alt=""
          />
        </div>
        <div>
          <div className="absolute top-0 md:left-0 left-[-8vw] w-[37vw] md:w-[19.2%]">
            <img src="/assets/images/deco-hisigata.png" alt="" />
          </div>
          <a
            href="/"
            className="absolute top-[13.5vw] md:top-[10.3%] left-[12vw] md:left-[22.4%] w-[21.067vw] md:w-[13.7%]"
          >
            <img className="fade-up" src="/assets/images/fv-label.png" alt="" />
          </a>
          <div className="absolute top-[9vw] md:top-[17%] right-[6vw] md:right-[19.6%] w-[13.733vw] md:w-[6.8667%]">
            <img className="fade-up"
              src="/assets/images/mv-text.png"
              alt="身体に良い一福の柿の葉茶 懐かしくて"
            />
          </div>
          <div className="absolute md:top-[0%] top-[113vw] right-[7.5%] md:w-[18.6%] w-[21.6vw]">
            <img className="fade-up" src="/assets/images/deco-leaf.png" alt="" />
          </div>
          <div className="absolute md:top-[61.5%] top-[98vw] left-[21vw] md:left-[48%] md:-translate-x-1/2 w-[69.733vw] md:w-[35.6334%]">
            <img className="fade-up"
              src="/assets/images/mv-title.png"
              alt="知る人ぞ知る、自然の希少な「健康茶」"
            />
          </div>
        </div>
      </div>

      <div className="md:mt-[-19.8%] mt-[-8.5%] mb-16 md:mb-[7.5%] relative px-7">
        <div className="flex items-center justify-center">
          <h2 className="fade-up text-[18px] md:text-[29px] font-mincho font-semibold  bg-white border border-black md:px-10 p-3.5 md:py-7 leading-[1.13]">
          一福の「柿の葉茶」には
            <br className="md:hidden" />
            こんな効果が期待できます
          </h2>
        </div>
        <div className="flex w-full md:max-w-[1240px] max-w-[440px] mx-auto justify-between gap-16 md:gap-5 md:mt-7 mt-10 max-md:items-center max-md:flex-col">
          {data.map((item, index) => (
            <div className="fade-up max-w-[350px] flex-1" key={index}>
              <figure className="flex justify-center items-center">
                <img
                  className="max-md:max-w-[233px]"
                  src={item.image}
                  alt={item.title}
                />
              </figure>
              <h5 className="md:text-[36px] max-md:text-center text-[23px] font-semibold mt-6 font-mincho">
                {item.title}
              </h5>
              <p className="md:text-[20px] text-[17px] font-light mt-2 md:mt-5">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
