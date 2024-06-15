"use client";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const data = [
  {
    number: "1",
    title: "現実の供養所「KARIMATA供養所」初期費用通常60,000円(税抜)",
    arrow: true,
    text: <span className="text-gradient-01">2万円オフ クーポンご進呈</span>,
  },
  {
    number: "2",
    title: "現実の供養所「KARIMATA供養所」来訪時の空き家民泊利用,000円(税抜)",
    arrow: true,
    text: (
      <span className="text-[#1B0220]">
        3泊まで半額クーポンご進呈(10,000円相当)
      </span>
    ),
  },
  {
    number: "3",
    title: "メタバース供養所初期費用通常250,000円(税抜)",
    arrow: true,
    text: <span className="!text-[#1B0220]">10万円オフクーポンご進呈</span>,
  },
  {
    number: "4",
    title: "愛するペットの2Dアバター制作費用通常50,000円(税抜)",
    arrow: true,
    text: <span className="text-[#1B0220]">2万円オフクーポンご進呈</span>,
  },
  {
    number: "5",
    title: "メタバース内に配置可能な2Dアイテム",
    arrow: false,
    text: (
      <span className="text-gradient-01">
        1アイテムプレゼント
        <br />
        ※5つのアイテムからお選びいただけます。(2万円相当)
      </span>
    ),
  },
  {
    number: "6",
    title: "メタバース内専用個別スペース",
    arrow: false,
    text: (
      <span className="text-gradient-01">
        プレミアムカスタマイズ権(3万円相当)
      </span>
    ),
  },
  {
    number: "7",
    title: "メタバース内の共通ペット霊園「おもいでの庭」",
    arrow: false,
    text: (
      <span className="text-gradient-01">
        優先アクセス権(2万円相当) <br />
        ※3Dアバター保有者の方のみ適用
      </span>
    ),
  },
  {
    number: "8",
    title: "AI僧侶による毎月の個別法要",
    arrow: false,
    text: (
      <span className="text-gradient-01">
        無料参加権(24万円相当) <br />
        ※先着申し込み10名様特典
      </span>
    ),
  },
  {
    number: "9",
    title: "事前相談(対面/Web)通常5,000円",
    arrow: true,
    text: (
      <span className="text-gradient-01">
        無料クーポンご進呈 <br />
        ※先着申し込み50名様
      </span>
    ),
  },
  {
    number: "10",
    title: "事前相談(対面/Web)通常5,000円",
    arrow: true,
    text: (
      <span className="text-gradient-01">
        30％オフクーポンご進呈 <br />
        ※一緒のお墓で供養できるようになりました！
      </span>
    ),
  },
  {
    number: "11",
    title: "没後1年以上経過しているペット",
    arrow: false,
    text: (
      <span className="text-gradient-01">
        ご供養お申し込みOK特典 <br />
        ※昔飼っていたペットを供養したいという要望に対応できるようになりました！
        <br />
        (写真が1枚以上必要です)
      </span>
    ),
  },
  {
    number: "12",
    title: "ペットロスの悩み相談",
    arrow: false,
    text: (
      <span className="text-gradient-01">
        専用ご相談窓口利用可能 <br />
        ※ペットロスの悲しみを吐き出せる場所です。ひとりで溜め込まないでください。
        <br />
        (プライスレス)
      </span>
    ),
  },
  {
    number: "13",
    title: "ペットの気になるアレコレ相談",
    arrow: false,
    text: (
      <span className="text-gradient-01">
        専用ご相談窓口利用可能
        <br />
        ※生前から没後まで、普段の悩みから緊急時の対応までなんでもご相談ください！
        <br />
        (プライスレス)
      </span>
    ),
  },
  {
    number: "14",
    title: "ペットの終活応援特典",
    arrow: false,
    text: (
      <span className="text-gradient-01">
        生前から枠を確保OK！
        <br />
        ※年間でかかる費用は実際にサービスを利用するまでずっと無料なので安心！
        <br />
        (プライスレス)
      </span>
    ),
  },
  {
    number: "15",
    title: "ギフト用お申し込み特典",
    arrow: false,
    text: (
      <span className="text-gradient-01">
        専用ご相談窓口利用可能
        <br />
        ※ペットロスの悲しみを吐き出せる場所です。ひとりで溜め込まないでください。
        <br />
        (プライスレス)
      </span>
    ),
  },
  {
    number: "16",
    title: "永代供養特典",
    arrow: false,
    text: (
      <span className="text-gradient-01">
        希望者OK！
        <br />
        (プライスレス)
      </span>
    ),
  },
  {
    number: "17",
    title: "海外在住ペットオーナー様特典",
    arrow: false,
    text: (
      <span className="text-gradient-01">
        海外からのお申し込みOK！
        <br />
        ※海外のペットオーナー様の声にお応えして対応できるようになりました！
        <br />
        (プライスレス)
      </span>
    ),
  },
  {
    number: "18",
    title: (
      <>
        エキゾチックペット特典<span className="text-[#FF2E00]">*</span>
      </>
    ),
    arrow: false,
    text: (
      <span className="text-gradient-01 md:text-[16px] text-[13px] !leading-[1.2]">
        犬猫以外のエキゾチックペット受付OK <br />
        ※多くのペットオーナー様の声にお応えして対応できるようになりました！記載のないペットちゃんもご相談ください！
        <br />
        （プライスレス）
      </span>
    ),
  },
];
const Experience = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="overflow-hidden md:pt-[160px] pt-[100px]">
      <div className="fade-up text-center md:text-[48px] text-[28px] font-medium">
        メモリアルモニターだけの、
        <br className="md:hidden" />
        特別な体験
      </div>
      <span className="fade-up block gradient-04 h-1.5 md:h-2.5"></span>
      <p className="fade-up text-center md:text-[16px] text-[13px] pt-8 px-4">
        メモリアルモニターとして参加いただくあなた様には、以下の特典をご用意しております。
      </p>
      <div className="fade-up md:w-[577px] mx-auto mt-10 md:mt-16">
        <div className="w-[344px] h-[108px] bg-[url('/assets/images/bubble.png')] bg-cover mx-auto">
          <p className="font-bold md:text-[18px] text-[16px] text-center pt-[15px] px-6">
            最大32万円相当＋プライスレスな <br />
            今回限定特典パッケージです！
          </p>
        </div>
        <div className="flex items-center justify-center gap-3">
          <p className="text-gradient-01 font-medium md:text-[36px] text-[20px]">
            『メタでペット供養』 <br />
            メモリアルモニター
          </p>
          <div className="md:size-[170px] size-[120px] flex items-center text-center flex-col gradient-04 rounded-full leading-none">
            <span className="md:text-[109px] text-[70px] font-black">18</span>
            <span className="md:text-[37px] text-[25px] font-medium">
              大特典
            </span>
          </div>
        </div>
      </div>
      <div className="bg-[url('/assets/images/bg-experience.png')] bg-[length:100%_auto]  px-5 md:pt-[110px] pt-14 md:pb-[103px] pb-16">
        <div className="flex flex-wrap w-full justify-center max-w-[1324px] mx-auto gap-x-[32px] gap-y-[84px] md:mb-24 mb-16">
          {data.map((item, index) => (
            <div
              className="fade-up w-[420px] md:h-[250px] h-[220px] border-[4px] border-[#1B0220] rounded-[30px] relative px-5 md:pt-14 pt-10 bg-white/80"
              key={index}
            >
              <div className="md:size-[113px] size-[90px] gradient-04 rounded-full flex items-center justify-center flex-col leading-none text-center absolute left-1/2 -translate-x-1/2 top-[-60px]">
                <span className="md:text-[24px] text-[18px] font-medium">
                  特典
                </span>
                <span className="md:text-[76px] text-[50px] font-black">
                  {item.number}
                </span>
              </div>
              <p className="md:text-[18px] text-[14px] font-medium text-center pb-2.5">
                {item.title}
              </p>
              {item.arrow && (
                <div className="flex justify-center items-center pb-2.5">
                  <img src="/assets/images/arrow-down.svg" alt="" />
                </div>
              )}
              <div className="relative">
                <span className="gradient-03 absolute inset-0 opacity-10"></span>
                <span className="block h-[3px] gradient-03"></span>
                <p className="p-2.5 flex text-center justify-center md:text-[18px] text-[14px] font-bold leading-[1.4]">
                  {item.text}
                </p>
                <span className="block h-[3px] gradient-03"></span>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full md:max-w-[771px] max-w-[400px] mx-auto">
          <div className="fade-up bg-white/70 xl:py-10 py-5 xl:px-[50px] px-6 rounded-[20px]">
            <p className="md:text-[16px] text-[13px] font-bold border-b border-[#1B0220]">
              *エキゾチックペットご参考
            </p>
            <p className="md:text-[15px] text-[12px] font-medium mt-2.5 tracking-widest leading-[1.8]">
              犬猫以外の哺乳類（ハムスター、モルモット、ウサギ、フェレット、ハリネズミ、モモンガ、チンチラ、ミーアキャット、リス、デグー）魚類（金魚、熱帯魚）昆虫（カブトムシ、クワガタ）爬虫類（亀、ヘビ、トカゲ、イグアナ、カメレオン）鳥類（インコ、オウム、文鳥）、ザリガニ...etc
            </p>
          </div>
          <div className="fade-up flex gap-1.5 md:mt-8 mt-6">
            <figure>
              <img src="/assets/images/img-other-01.png" alt="" />
            </figure>
            <figure>
              <img src="/assets/images/img-other-02.png" alt="" />
            </figure>
            <figure>
              <img src="/assets/images/img-other-03.png" alt="" />
            </figure>
            <figure>
              <img src="/assets/images/img-other-04.png" alt="" />
            </figure>
            <figure>
              <img src="/assets/images/img-other-05.png" alt="" />
            </figure>
          </div>
        </div>
        <div className="fade-up w-full md:max-w-[929px] max-w-[440px] mx-auto md:p-[7px] p-1 gradient-03 md:mt-[70px] mt-9 rounded-[10px]">
          <div className="bg-white md:p-6 p-5 md:text-[15px] text-[12px] font-medium tracking-widest space-y-4 leading-[1.4]">
            <div className="flex md:gap-5 gap-3">
              <span className="md:size-[15px] size-[10px] rounded-full bg-[#1B0220] mt-1"></span>
              <span className="flex-1">
                メモリアルモニターの募集は、お申し込み状況を鑑み【事前の予告なく】終了することがあります。
              </span>
            </div>
            <div className="flex md:gap-5 gap-3">
              <span className="md:size-[15px] size-[10px] rounded-full bg-[#1B0220] mt-1"></span>
              <span className="flex-1">
                募集人数は【限定50名】のみとなります。(先着順)
              </span>
            </div>
            <div className="flex md:gap-5 gap-3">
              <span className="md:size-[15px] size-[10px] rounded-full bg-[#1B0220] mt-1"></span>
              <span className="flex-1">
                メタバースを通じた新たな供養体験の開発にあたり、メモリアルモニターとしてご協力をお願いいたします。
                ※機能の先行利用・フィードバック、ユーザーインタビュー、SNS投稿など
              </span>
            </div>
            <div className="flex md:gap-5 gap-3">
              <span className="md:size-[15px] size-[10px] rounded-full bg-[#1B0220] mt-1"></span>
              <span className="flex-1">
                モニターとしてのご協力を敬遠したい方はエントリープランまたはスタンダードプランにてお申し込みください
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
