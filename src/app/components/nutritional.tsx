import Title from "@/components/title";

  export default function Nutritional() {
    return (
        <div className="px-4 pt-[90px] md:pt-[175px] pb-[100px] md:pb-[205px] relative bg-[url('/assets/images/deco-01.png')] bg-no-repeat max-md:bg-[length:33%_auto] bg-left-top">
        <div className="w-full max-w-[1150px] mx-auto">
          <div className="flex items-center justify-center border-b border-black pb-5">
            <h2 className="font-bold font-mincho text-[4.8vw] md:text-[42px] text-black leading-tight max-md:tracking-[-0.08em]">
              <span className="text-[7.2vw] md:text-[54px] text-[#ED3636]">
                自然のサプリメント
              </span>
              と呼ばれる <br />
              柿の葉茶の<span className="text-[#ED3636]">「驚くべき</span>
              <span className="text-[7.2vw] md:text-[54px] text-[#ED3636]">
                栄養成分
              </span>
              <span className="text-[#ED3636]">」</span>とは？
            </h2>
          </div>
          <div className="mt-12 md:mt-[108px] max-md:max-w-[440px] mx-auto">
            <div className="flex items-center justify-center mb-6 md:mb-[92px]">
              <img src="/assets/images/img-chart.png" alt="" />
            </div>
            <h3 className="text-center font-mincho text-[19px] md:text-[36px] font-bold">
              様々な健康成分を満足に摂りたいなら
              <br />
              緑茶よりも柿の葉茶が一番！
            </h3>
            <p className="text-[17px] md:text-[20px] font-light max-w-[980px] mx-auto w-full mt-9 leading-relaxed  max-md:px-4 max-md:leading-snug">
              一般的に緑茶は健康的であり、どこでも入手できる事から幅広い年代層に親しまれていますが、一方で「苦みが強い」「カフェインで寝にくくなる」などの理由で、若者は特に緑茶が苦手だという人も多いと思われます。しかし柿の葉茶はノンカフェインで独自の甘味もあり、どの年代層も美味しく飲むことができる為、毎日の健康サポートとしてはとても理想的です。
              <br />
              <br />
              グラフにあるように、含まれている重要な栄養素の値がそれぞれ10倍以上もする事から、あなたの生活の一部になる事ができればきっと健康的な未来をより一層明るくしてくれます。
            </p>
          </div>
        </div>
      </div>
    );
  }
  