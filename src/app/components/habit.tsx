"use client"
import useScrollAnimations from "@/hooks/useScrollAnimations";

const data = [
    {
      title: "やかんの場合",
      body: "お湯を沸かして沸騰させる⇒火を止めて茶葉を入れる⇒5分～6分蒸らしたら完成",
      image: "/assets/images/img-brew-01.png",
    },
    {
      id: "2",
      title: "急須の場合",
      body: "急須に柿の葉茶を1包入れる⇒熱湯を注ぐ⇒2～3分蒸らしたら完成",
      image: "/assets/images/img-brew-02.png",
    },
    {
      id: "3",
      title: "ティーポットの場合",
      body: "急須に柿の葉茶を1包入れる⇒熱湯を注ぐ⇒2～3分蒸らしたら完成",
      image: "/assets/images/img-brew-03.png",
    },
  ];

  const dataVoice = [
    {
      title: "30代　松本様　スポーツインストラクター",
      body: "仕事柄、どんな時でも身体を動かさなければいけないので、朝一の栄養補給に欠かせません。特に、熱しても壊れないビタミン（プロビタミン）が豊富なのは助かりますね！",
      image: "/assets/images/img-voice-01.png",
    },
    {
      id: "2",
      title: "30代　Ｍ様　エステ講師",
      body: "知人に勧められて最初は美味しくたまに飲む程度でしたが、調べるとこれでもかってくらい栄養が詰まってる事を知り、今では欠かせないものになりました！特に、肌の劣化を防止してくれる成分も豊富なので、生徒にも勧めてます。",
      image: "/assets/images/img-voice-02.png",
    },
    {
      id: "3",
      title: "40代　中山様　飲食店経営",
      body: "最初は癖のある味に慣れなかったけど、今では文字通り「癖」になっており、毎日飲むようになりました。コンビニでお茶を買う事もやめて、毎日淹れてます。苦い味が苦手な人でも独特の甘みがあっておすすめできると思います！",
      image: "/assets/images/img-voice-03.png",
    },
  ];
  export default function Habit() {
    const ref = useScrollAnimations();
    return (
        <div ref={ref} className="bg-[url('/assets/images/bg-habit.png')] bg-[length:100%_100%] md:mt-[210px] bg-[center_top_15rem] px-5 pb-[280px] relative">
          <span className="absolute right-0 bottom-[500px]"><img src="/assets/images/habit-deco.png" alt="" /></span>
        <div className="w-full max-w-[1200px] mx-auto max-md:max-w-[440px] relative">
          <div className="flex items-start max-md:flex-col-reverse">
            <figure className="fade-up relative max-md:w-full max-xl:w-[45%] max-md:mt-10 md:mt-16">
              <img src="/assets/images/img-habit-01.png" alt="" />
              <p className="absolute md:top-[85%] top-[90%] left-1/2 max-md:-translate-x-1/2 md:left-0 bg-white border-black border md:text-[19px] text-[15px] md:rounded-[25px] rounded-[12px] p-4 max-w-[290px] w-full">
                毎日の「お茶習慣」で健康的な生活を送りましょう。
              </p>
            </figure>
            <div className="fade-up flex-1 md:mt-14 md:ml-0">
              <h5 className="max-md:flex max-md:justify-center font-mincho text-[27px] md:text-[46px] font-black">
                <span>
                  お茶を飲む習慣、
                  <br />
                  始めてみませんか？
                </span>
              </h5>
              <p className="text-[17px] md:text-[20px] font-light mt-8 md:mt-10 md:ml-3">
                今までとは違う、新しい健康へのチャレンジ。
                <br />
                緑茶や麦茶より体を整える成分が豊富であり、ノンカフェインの柿の葉茶ならどんな方でも安心して始められます。
              </p>
            </div>
          </div>
          <div className="xl:-mt-[10%] md:mt-14 max-md:mt-24">
            <div className="fade-up flex max-md:ml-0 max-lg:ml-[8%] max-md:justify-center lg:justify-center">
              <div className="relative md:ml-[2%]">
                <figure>
                  <img src="/assets/images/img-habit-02.png" alt="" />
                  <p className="absolute md:top-[68%] top-[90%] left-1/2 max-md:-translate-x-1/2 md:left-[96%] bg-white border-black border md:text-[19px] text-[15px] md:rounded-[25px] rounded-[12px] p-4 max-w-[290px] w-full">
                    妊婦さんや小さなお子様でもノンカフェインだから安心
                  </p>
                </figure>
              </div>
            </div>
            <div className="fade-up flex max-md:justify-center max-md:mt-24 md:mt-16">
              <div className="relative md:ml-[18.5%] md:-mt-[8%]">
                <figure className="">
                  <img src="/assets/images/img-habit-03.png" alt="" />
                  <p className="absolute md:top-[32%] left-1/2 max-md:-translate-x-1/2 top-[90%] md:left-[90%] bg-white text-[15px] md:text-[19px] md:rounded-[25px] border-black border rounded-[12px] p-4 md:p-3 md:pl-10 max-w-[290px] w-full">
                    現代人のストレスフルな <br className="max-md:hidden" />
                    生活にも！
                  </p>
                </figure>
              </div>
            </div>
          </div>
          <div className="fade-up flex justify-center mt-[100px] md:mt-8">
            <div className="w-full max-w-[1138px] md:h-[373px] max-md:rounded-[54px] bg-[length:100%_100%] md:bg-[url('/assets/images/bg-box.png')] max-md:bg-[#7BB658] flex py-9 md:pt-[80px] justify-center px-4 md:px-10">
              <p className="text-[17px] md:text-[23px] font-medium text-white w-full max-w-[792px]">
                プロビタミン、カリウム、タンニン、カテキンなど....挙げればキリがない程の栄養が柿の葉茶には含まれております。「健康こそ財産」と言われる昨今、現代人にとって健康とは「ブーム」ではなく「当然の習慣」になるべきなのかも知れません。例えば、幼少期から当たり前に健康な食生活をおくれるという意味合いにおいても、ノンカフェインで安心なのは健康を支える心強いあなたのパートナーになるはずです。
              </p>
            </div>
          </div>
          <div className="w-full max-w-[1000px] mx-auto mt-[60px] md:mt-[220px]">
            <div className="md:border-8 border-4 border-[#8BD3AC] md:rounded-[98px] rounded-[54px] pb-10 md:pb-[100px] pt-6 md:pt-[36px] bg-[#FBFFE3]">
              <h5 className="fade-up md:text-[45px] text-[24px] font-bold font-mincho text-center">
              心ととのう柿の<br className="md:hidden" />葉茶の淹れ方
              </h5>
              <div className="w-full max-w-[834px] mx-auto md:space-y-[50px] space-y-[40px] mt-5 px-5">
                {data.map((item, index)=> (
                    <div className="fade-up flex items-center max-md:flex-col max-md:gap-4" key={index}>
                    <figure className="w-[120px] md:w-[165px] flex justify-center items-center">
                      <img
                        className="w-full max-md:max-w-[233px]"
                        src={item.image}
                        alt={item.title}
                      />
                    </figure>
                    <div className="md:ml-10 flex-1 bg-white rounded-[19px] border-[#8BD3AC] border py-5 px-4 md:px-8">
                      <h5 className="md:text-[24px] max-md:text-center text-[20px] font-bold">
                        {item.title}
                      </h5>
                      <p className="md:text-[20px] text-[17px] font-light mt-2">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="fade-up px-5 mt-8 md:mt-[52px]">
              <p className="text-[17px] md:text-[23px] font-medium w-full max-w-[852px] mx-auto">
                ※冷やす場合、粗熱が取れたら、
                冷蔵庫で冷やすと香りを逃がさずおいしい柿の葉茶が出来上がります。
                <br />
                ※ホットでもアイスでもおいしくお飲みいただけます
                <br />
                ※香りや渋みの成分を感じたい方⇒100℃に近い熱湯を注ぐのがポイントです。渋みを抑えて旨味成分を最大限に引き出したい方⇒80℃前後のお湯を使用するとまろやかな味になります。柿の葉茶に含まれているタンニンは、お湯の温度が高いほど多く抽出されます。
              </p>
            </div>
          </div>
          <div className="w-full max-w-[1184px] mx-auto bg-white border-[3px] border-[#B1B155] rounded-[54px] md:rounded-[99px] px-5 pt-8 md:pt-[44px] md:pb-[126px] pb-[50px] mt-[50px] md:mt-[160px]">
          <h5 className="fade-up md:text-[42px] text-[25px] text-center font-mincho font-bold border-b border-black md:pb-6 pb-4">
            お客様の声
          </h5>
          <div className="md:mt-[130px] mt-[50px] md:px-5 space-y-[60px] w-full max-w-[1016px] mx-auto">
          {dataVoice.map((item, index)=> (
                    <div className="fade-up flex items-center max-md:flex-col md:[&:nth-child(2)]:flex-row-reverse gap-8" key={index}>
                    <figure className="flex justify-center items-center">
                      <img
                        className="max-md:max-w-[233px]"
                        src={item.image}
                        alt={item.title}
                      />
                    </figure>
                    <div className="flex-1 max-w-[644px] bg-[#FBF5BD] md:rounded-[54px] rounded-[27px] border-[#708713] border p-5 md:p-10 md:min-h-[320px]">
                      <h5 className="md:text-[28px] max-md:text-center text-[18px] font-bold">
                        {item.title}
                      </h5>
                      <p className="md:text-[21px] text-[15px] font-light mt-5 md:mt-8">
                        {item.body}
                      </p>
                    </div>
                  </div>
                ))}
          </div>
        </div>
        <div className="fade-up flex justify-center md:mt-[293px] mt-[120px]">
          <a
            href="#"
            className="flex items-center justify-center w-full md:max-w-[590px] max-w-[290px] md:h-[114px] h-[80px] bg-[#FF0E0E] text-white md:text-[28px] text-[16px] relative"
          >
            <svg
              className="absolute left-[30px] max-md:w-[18px]"
              width="33"
              height="41"
              viewBox="0 0 33 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M33 20.5L0.75 40.8516V0.148403L33 20.5Z" fill="white" />
            </svg>
            心ととのう柿の葉茶を購入する
          </a>
        </div>
        </div>
      </div>
    );
  }
  