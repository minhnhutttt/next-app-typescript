"use client"
import useScrollAnimations from "@/hooks/useScrollAnimations";

const data = [
    {
        "id": "1",
        "title": "抗菌化作用",
        "body": "柿の葉茶には豊富なカリウムが含まれており、高血圧や骨粗しょう症を予防するのに最適です。ポリフェノールやカテキンといった抗酸化物質が豊富に含まれており、老化防止に寄与する可能性が高いです。",
        "image": "/assets/images/img-benefits-01.png"
      },
      {
        "id": "2",
        "title": "ノンカフェイン",
        "body": "カフェインはカルシウムの吸収を妨げることがあります。柿の葉茶はノンカフェインであり、妊婦や子供でも安心して飲むことができます。日頃の水分補給で健康維持に寄与できることは大きなメリットです。",
        "image": "/assets/images/img-benefits-02.png"
      },
      {
        "id": "3",
        "title": "免疫力向上",
        "body": "カテキン・タンニンなどの成分により、血糖値の抑制や糖尿病の予防・管理に期待できます。他にもポリフェノール・ビタミンC・β-カロテンなど、免疫機能をサポートする成分が豊富なため、柿の葉茶は健康的な生活に寄与できると言えます。",
        "image": "/assets/images/img-benefits-03.png"
      }
]

  export default function Benefits() {
    const ref = useScrollAnimations();

    return (
        <div ref={ref} className="px-4 pt-10 md:pt-[120px] pb-16">
      <div className="w-full max-w-[1150px] mx-auto">
        <div className="fade-up flex items-center justify-center border-b border-black pb-6">
          <h2 className="font-bold font-mincho text-[4.8vw] md:text-[36px] text-black leading-tight">
            柿の葉茶の <br className="md:hidden" />
            <span className="text-[#ED3636]">「あまり</span>
            <span className="text-[7.2vw] md:text-[54px] text-[#ED3636]">
              知
            </span>
            <span className="text-[#ED3636]">られていない</span>
            <span className="text-[7.2vw] md:text-[54px] text-[#ED3636]">
              効用
            </span>
            <span className="text-[#ED3636]">」</span>
            とは？
          </h2>
        </div>
        <div className="md:mt-20 mt-6 md:space-y-[84px] space-y-[60px] max-md:max-w-[440px] mx-auto">
          {data.map((item, index) => (
            <div className="fade-up flex items-center md:gap-[60px] gap-[30px] max-md:flex-col md:[&:nth-child(2)]:flex-row-reverse md:[&:nth-child(2)]:pl-[100px]" key={index}>
            <figure className="flex justify-center items-center">
              <img
                className="max-md:max-w-[233px]"
                src={item.image}
                alt={item.title}
              />
            </figure>
            <div className="flex-1">
              <div className="max-w-[630px]">
                <h5 className="md:text-[36px] max-md:text-center text-[23px] font-bold font-mincho">
                  {item.title}
                </h5>
                <p className="md:text-[20px] text-[17px] font-light mt-2 md:mt-8">
                  {item.body}
                </p>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
    );
  }
  