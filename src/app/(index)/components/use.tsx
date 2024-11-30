'use client'

import ImageHover from '@/components/imageHover'
import useScrollAnimations from '@/hooks/useScrollAnimations'

const list = [
  {
    img: '/assets/images/use-img1.png',
    title: '地元のカフェ・レストラン',
    content: (
      <>
        「今日のランチはどこにしよう？」そんな時におすすめしたいのが、META
        Earthで見つけた地元の人気カフェ。
        <br />
        特典付きのクーポンが使えるのでちょっとお得に美味しいランチを楽しめます。新しいお気に入りのカフェを見つけてみては？
      </>
    ),
  },
  {
    img: '/assets/images/use-img2.png',
    title: '薬局・ドラッグストア',
    content: (
      <>
        急に必要になった薬や日用品、どこで買えばいいか迷ったらMETA
        Earthでチェック！
        <br />
        近くの薬局で、ポイントアップのキャンペーンが開催中。
        <br />
        日常のお買い物がもっとお得になりますよ。
      </>
    ),
  },
  {
    img: '/assets/images/use-img3.png',
    title: 'アミューズメントパーク',
    content: (
      <>
        家族や友達と過ごす週末、どこに行こうか迷ったら、近くのアミューズメントパークで楽しんでみては？
        <br />
        META
        Earthを使えば、特別割引のNFTも手に入るので、遊びながらお得に過ごせます。
      </>
    ),
  },
  {
    img: '/assets/images/use-img4.png',
    title: 'ポップアップストア',
    content: (
      <>
        街を歩いていたらMETA
        Earthに期間限定のポップアップストアが表示されました！
        普段は手に入らないアイテムやお得なキャンペーンが目白押し！
        <br />
        今だけの特別なショッピング体験をぜひお見逃しなく！
      </>
    ),
  },
  {
    img: '/assets/images/use-img5.png',
    title: '美容院・理容室',
    content: (
      <>
        髪を切りたいなと思ったら、META Earthで近くの美容院を探してみてください！
        初回限定クーポン付きの美容院がすぐに見つかり、気軽に予約もできちゃいます。
        新しい自分に生まれ変わるチャンスかも？
      </>
    ),
  },
  {
    img: '/assets/images/use-img6.png',
    title: 'ネイルサロン・エステサロン',
    content: (
      <>
        季節の変わり目に合わせて、ネイルやエステを楽しんでみては？
        <br />
        META Earthで開けば、今ならお得なクーポンが付いているサロンもありますよ。
        リフレッシュして、新しい季節を迎えよう！
      </>
    ),
  },
  {
    img: '/assets/images/use-img7.png',
    title: 'フィットネス・ヨガスタジオ',
    content: (
      <>
        健康を意識し始めたら、まずはフィットネスジムやヨガスタジオをMETA
        Earthで探してみよう！
        <br />
        初回体験クーポン付きのスタジオが見つかれば、お試しで気軽に運動をスタートできます！
      </>
    ),
  },
  {
    img: '/assets/images/use-img8.png',
    title: 'クリーニング店',
    content: (
      <>
        衣替えの季節、クリーニングが必要な衣類をどうしよう？
        <br />
        そんな時はMETA Earthで近くのクリーニング店をチェック。
        <br />
        今だけ割引キャンペーンを実施している店舗も簡単に見つかります！
      </>
    ),
  },
  {
    img: '/assets/images/use-img9.png',
    title: 'リサイクルショップ',
    content: (
      <>
        家に眠っている不用品、どうにかしたい！
        <br />
        META
        Earthを開けば買取価格アップのキャンペーン中のお店も見つかって、お得に断捨離できるチャンスです！
      </>
    ),
  },
  {
    img: '/assets/images/use-img10.png',
    title: '自動車整備工場',
    content: (
      <>
        「車の点検が必要だけど、どこに持っていけばいいか迷った時にはMETA
        Earthが便利！
        <br />
        オイル交換工賃無料等のサービスがある整備工場を簡単に見つけて、すぐに予約してみましょう。
      </>
    ),
  },
  {
    img: '/assets/images/use-img11.png',
    title: 'スタンプラリー',
    content: (
      <>
        地元をもっと楽しむために、META Earthでスタンプラリーに参加しよう！
        <br />
        名所を巡りながらスタンプを集めて、限定NFTも手に入れることができます。
        家族や友人と一緒に、楽しい冒険を楽しみましょう！
      </>
    ),
  },
  {
    img: '/assets/images/use-img12.png',
    title: '求人情報',
    content: (
      <>
        近所で人気のお店が、スタッフを募集しています！
        <br />
        お客様との会話を楽しみながら、居心地の良い空間を一緒に作っていきませんか？
      </>
    ),
  },
]

const Use = () => {
  const ref = useScrollAnimations()

  return (
    <section
      ref={ref}
      className="mt-[50px] overflow-hidden bg-[url('/assets/images/bg-use.png')] bg-cover bg-top px-4 pb-20 md:pb-[120px]"
    >
      <div className="relative mx-auto mb-32 flex max-w-[916px] flex-col items-baseline pt-[90px] max-md:mx-auto max-md:max-w-[400px] md:pb-[70px]">
        <figure className="absolute -left-4 bottom-[-105px] max-md:w-[130px] md:bottom-[-35px] md:left-[-100px]">
          <img src="/assets/images/boy.png" alt="" />
          <img
            className="absolute inset-0 animate-[tikatika_1s_step-end_infinite]"
            src="/assets/images/boy-light.png"
            alt=""
          />
        </figure>

        <figure className="absolute right-0 top-0 max-md:w-[120px] md:right-[-106px] md:top-[10px]">
          <img src="/assets/images/girl.png" alt="" />
          <img
            className="absolute inset-0 animate-[tikatika_1s_step-end_infinite]"
            src="/assets/images/girl-light.png"
            alt=""
          />
        </figure>
        <div className="gradient-background relative inline-flex items-end bg-[linear-gradient(to_top,_#F2E206_30%,_transparent_30%)] bg-[size:0_100%] bg-no-repeat text-[28px] font-bold md:text-[64px]">
          <span className="gradient-background relative bg-[linear-gradient(to_top,_#FAC103_30%,_transparent_30%)] bg-[size:0_100%] bg-no-repeat"></span>
          <div className="flex items-end">
            <figure className="max-md:w-1/2 md:mr-4">
              <img src="/assets/images/logo-use.png" alt="" />
            </figure>
            <small className="text-[24px] md:text-[48px]">で</small>探して
          </div>
        </div>
        <p className="gradient-background relative mx-auto mt-3 inline-flex items-end bg-[linear-gradient(to_top,_#F2E206_30%,_transparent_30%)] bg-[size:0_100%] bg-no-repeat text-[32px] font-bold md:text-[64px]">
          身近
          <small className="text-[24px] md:text-[48px]">な</small>
          魅力<small className="text-[24px] md:text-[48px]">を</small>最大限に
        </p>
        <br />
        <p className="gradient-background relative ml-auto bg-[linear-gradient(to_top,_#F2E206_30%,_transparent_30%)] bg-[size:0_100%] bg-no-repeat text-[48px] font-bold leading-none md:text-[96px]">
          発見しよう！
        </p>
      </div>
      <div className="mx-auto flex w-full max-w-[1364px] flex-wrap justify-center max-md:gap-5 md:gap-x-[5.556vw] md:gap-y-3 dt:gap-x-20">
        {list.map((use, index) => (
          <ImageHover key={index}>
            <div
              className={`fade-up relative mb-[20px] max-w-[400px] rounded-[80px] bg-[#FFFFFF] max-dt:w-[27.778vw] max-md:w-full md:mb-[100px] ${
                index % 3 === 1 ? 'md:-top-[95px]' : ''
              }`}
            >
              <figure>
                <img src={use.img} alt="" />
              </figure>
              <div className="mx-auto w-full max-w-[340px] px-5 pb-[25px] pt-[15px] md:py-[24px]">
                <h3 className="mb-[10px] text-center text-[18px] font-bold md:mb-[12px] md:text-[24px]">
                  {use.title}
                </h3>
                <p className="text-[14px] leading-[1.3] md:text-[16px]">
                  {use.content}
                </p>
              </div>
            </div>
          </ImageHover>
        ))}
      </div>
    </section>
  )
}

export default Use
