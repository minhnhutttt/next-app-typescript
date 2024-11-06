"use client";
import Title from "@/components/title";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const list = [
  {
    img: "/assets/images/use-img1.png",
    title: "地元のカフェ・レストラン",
    content: (
      <>
        「今日のランチはどこにしよう？」そんな時におすすめしたいのが、OPEN
        Mapで見つけた地元の人気カフェ。
        <br />
        特典付きのクーポンが使えるのでちょっとお得に美味しいランチを楽しめます。新しいお気に入りのカフェを見つけてみては？
      </>
    ),
  },
  {
    img: "/assets/images/use-img2.png",
    title: "薬局・ドラッグストア",
    content: (
      <>
        急に必要になった薬や日用品、どこで買えばいいか迷ったらOPEN
        Mapでチェック！
        <br />
        近くの薬局で、ポイントアップのキャンペーンが開催中。
        <br />
        日常のお買い物がもっとお得になりますよ。
      </>
    ),
  },
  {
    img: "/assets/images/use-img3.png",
    title: "アミューズメントパーク",
    content: (
      <>
        家族や友達と過ごす週末、どこに行こうか迷ったら、近くのアミューズメントパークで楽しんでみては？
        <br />
        OPEN
        Mapを使えば、特別割引のNFTも手に入るので、遊びながらお得に過ごせます。
      </>
    ),
  },
  {
    img: "/assets/images/use-img4.png",
    title: "ポップアップストア",
    content: (
      <>
        街を歩いていたらOPEN Mapに期間限定のポップアップストアが表示されました！
        普段は手に入らないアイテムやお得なキャンペーンが目白押し！
        <br />
        今だけの特別なショッピング体験をぜひお見逃しなく！
      </>
    ),
  },
  {
    img: "/assets/images/use-img5.png",
    title: "美容院・理容室",
    content: (
      <>
        髪を切りたいなと思ったら、OPEN Mapで近くの美容院を探してみてください！
        初回限定クーポン付きの美容院がすぐに見つかり、気軽に予約もできちゃいます。
        新しい自分に生まれ変わるチャンスかも？
      </>
    ),
  },
  {
    img: "/assets/images/use-img6.png",
    title: "ネイルサロン・エステサロン",
    content: (
      <>
        季節の変わり目に合わせて、ネイルやエステを楽しんでみては？
        <br />
        OPEN Mapで開けば、今ならお得なクーポンが付いているサロンもありますよ。
        リフレッシュして、新しい季節を迎えよう！
      </>
    ),
  },
  {
    img: "/assets/images/use-img7.png",
    title: "フィットネス・ヨガスタジオ",
    content: (
      <>
        健康を意識し始めたら、まずはフィットネスジムやヨガスタジオをOPEN
        Mapで探してみよう！
        <br />
        初回体験クーポン付きのスタジオが見つかれば、お試しで気軽に運動をスタートできます！
      </>
    ),
  },
  {
    img: "/assets/images/use-img8.png",
    title: "クリーニング店",
    content: (
      <>
        衣替えの季節、クリーニングが必要な衣類をどうしよう？
        <br />
        そんな時はOPEN Mapで近くのクリーニング店をチェック。
        <br />
        今だけ割引キャンペーンを実施している店舗も簡単に見つかります！
      </>
    ),
  },
  {
    img: "/assets/images/use-img9.png",
    title: "リサイクルショップ",
    content: (
      <>
        家に眠っている不用品、どうにかしたい！
        <br />
        OPEN
        Mapを開けば買取価格アップのキャンペーン中のお店も見つかって、お得に断捨離できるチャンスです！
      </>
    ),
  },
  {
    img: "/assets/images/use-img10.png",
    title: "自動車整備工場",
    content: (
      <>
        「車の点検が必要だけど、どこに持っていけばいいか迷った時にはOPEN
        Mapが便利！
        <br />
        オイル交換工賃無料等のサービスがある整備工場を簡単に見つけて、すぐに予約してみましょう。
      </>
    ),
  },
  {
    img: "/assets/images/use-img11.png",
    title: "スタンプラリー",
    content: (
      <>
        地元をもっと楽しむために、OPEN Mapでスタンプラリーに参加しよう！
        <br />
        名所を巡りながらスタンプを集めて、限定NFTも手に入れることができます。
        家族や友人と一緒に、楽しい冒険を楽しみましょう！
      </>
    ),
  },
  {
    img: "/assets/images/use-img12.png",
    title: "求人情報",
    content: (
      <>
        近所で人気のお店が、スタッフを募集しています！
        <br />
        お客様との会話を楽しみながら、居心地の良い空間を一緒に作っていきませんか？
      </>
    ),
  },
];

const Use = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="px-4 md:pb-[120px] pb-20 mt-[50px] bg-[url('/assets/images/bg-use.png')] bg-cover bg-top overflow-hidden">
      <div className="flex flex-col items-baseline max-w-[916px] mx-auto md:pb-[70px] mb-32 relative pt-[90px] max-md:max-w-[400px] max-md:mx-auto">
        <figure className="absolute md:left-[-100px] left-0 md:bottom-[-35px] bottom-[-90px] max-md:w-[130px]">
          <img src="/assets/images/boy.png" alt="" />
        </figure>
        
        <figure className="absolute md:right-[-106px] right-0 top-0 md:top-[10px] max-md:w-[120px]">
          <img src="/assets/images/girl.png" alt="" />
        </figure>
        <div className="inline-flex md:text-[64px] text-[28px] font-bold items-end relative gradient-background bg-no-repeat bg-[size:0_100%] bg-[linear-gradient(to_top,_#F2E206_30%,_transparent_30%)]">
        <span className="relative gradient-background bg-no-repeat bg-[size:0_100%] bg-[linear-gradient(to_top,_#FAC103_30%,_transparent_30%)]"></span>
          <div className="flex items-end">
          <figure className="max-md:w-1/2 md:mr-4">
            <img src="/assets/images/logo-use.png" alt="" />
          </figure>
          <small className="md:text-[48px] text-[24px]">で</small>探して
          </div>
        </div>
        <p className="mx-auto inline-flex items-end font-bold md:text-[64px] text-[32px] relative gradient-background bg-no-repeat bg-[size:0_100%] bg-[linear-gradient(to_top,_#F2E206_30%,_transparent_30%)] mt-3">身近
          <small className="md:text-[48px] text-[24px]">な</small>
          魅力<small className="md:text-[48px] text-[24px]">を</small>最大限に
        </p><br/>
        <p className="ml-auto md:text-[96px] text-[48px] font-bold relative gradient-background bg-no-repeat bg-[size:0_100%] bg-[linear-gradient(to_top,_#F2E206_30%,_transparent_30%)] leading-none">
        発見しよう！
        </p>
      </div>
      <div className="flex max-w-[1364px] flex-wrap justify-center mx-auto w-full md:gap-x-[5.556vw] dt:gap-x-20 max-md:gap-5 md:gap-y-3">
        {list.map((use, index) => (
          <div
            key={index}
            className={`max-md:w-full max-dt:w-[27.778vw] max-w-[400px] bg-[#FFFFFF] rounded-[80px] md:mb-[100px] mb-[20px] relative ${
              index % 3 === 1 ? "md:-top-[95px]" : ""
            }`}
          >
            <figure>
              <img src={use.img} alt="" />
            </figure>
            <div className="max-w-[340px] w-full mx-auto md:py-[24px] pt-[15px] pb-[25px] px-5">
              <h3 className="font-bold text-[18px] md:text-[24px] md:mb-[12px] mb-[10px] text-center">
                {use.title}
              </h3>
              <p className="text-[14px] md:text-[16px] leading-[1.3]">{use.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Use;
