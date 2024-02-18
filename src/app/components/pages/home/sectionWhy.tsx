"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import SectionTitle from "../../common/sectionTitle";
import { ReactNode, useRef, useState } from "react";

type ReasonCardType = {
  number: string;
  title: ReactNode;
  content: ReactNode;
  explanation: ReactNode;
}

function ReasonCard({number, title, content,  explanation} : ReasonCardType) {
  return (
    <div className="bg-white scale-[0.6] w-[300px] h-[600px] max-md:aspect-[380/545] md:h-[700px] md:w-full md:max-w-[400px] rounded-[40px] px-5 md:px-4 pt-5 md:pt-10 flex flex-col items-center justify-start border-8 border-[#3F3F3F]">
      <div className="relative w-full flex justify-center">
        <img className="max-md:h-[80px]" src={number} alt="" />
        <div className="absolute flex items-center justify-center inset-0 md:text-[20px] text-[16px] font-bold text-center">
            {title}
        </div>
      </div>
      <div className="md:border-4 border-2 md:text-[16px] text-[13px] border-[#22ABF3] rounded-[32px] mt-4 px-3 py-4 min-h-[255px] relative after:absolute after:aspect-[19/20] after:bg-[url('/images/bubble.png')] after:bg-cover after:left-1/2 after:-translate-x-1/2 after:top-full after:w-[19px]">
        {content}
      </div>
      <div className="flex justify-center mt-6"><p className="md:text-[16px] text-[13px] font-bold border-b border-black pb-1">ワンポイント解説</p></div>
      <p className="md:text-[16px] text-[13px] mt-2">{explanation}</p>
    </div>
  )
}

export default function SectionWhy() {
  const animateRefs = useScrollAnimation("fadeUp");
  const [currdeg, setCurrdeg] = useState(0);

  const rotate = (direction: string) => {
    if (direction === 'n') {
      setCurrdeg(currdeg - 45);
    } else if (direction === 'p') {
      setCurrdeg(currdeg + 45);
    }
  };

  return (
    <section className="pt-[30px] relative pb-[50px] md:pb-[180px]">
      <SectionTitle reverse type={<span className="[font-size:_clamp(80px,17.2vw,120px)] md:text-[12.5vw] xl:text-[180px]">Why</span>} title="次世代名刺がなぜ人気に？">
        <div className="px-[56px] w-full pt-[40px] lg:pt-[100px] max-md:pb-[10vw]">
            <div className="flex max-lg:flex-col justify-center max-lg:items-center w-full max-w-[682px] mx-auto gap-4">
            <figure>
                <img className="max-md:max-w-[200px]" src="/images/image-why.png" alt="" />
            </figure>
            <div className="relative flex-1">
                <div className="flex justify-end">
                    <div className="xl:w-[370px] w-[300px] h-[65px] xl:h-[80px] flex items-center justify-center">
                        <img src="/images/image-why-sub.png" alt="" />
                    </div>
                </div>
                <h5 className="xl:text-[40px] md:text-[30px] text-[24px] font-bold xl:-mt-3 tracking-widest">
                    次世代名刺が人気化した理由８選
                </h5>
            </div>
            </div>
        </div>
      </SectionTitle>
      <div ref={animateRefs} className="opacity-0 relative overflow-hidden md:-mt-6">
        <div className="overflow-hidden relative">
          <div className="w-full max-w-[1324px] mx-auto px-5 mt-6 md:mt-12">
            <div className="relative w-[300px] h-[600px] md:w-[400px] md:h-[705px] mx-auto [perspective:1000px]">
              <button className="h-full w-[10vw] md:w-[200px] z-10 absolute top-1/2 -translate-y-1/2 flex justify-center items-center right-[-12%] md:right-[-260px]" onClick={() => rotate('n')}>
                <svg className="-rotate-90" xmlns="http://www.w3.org/2000/svg" width="53" height="28" viewBox="0 0 53 28" fill="none">
                  <path d="M49.6667 3.3335L26.5 24.6668L3.33331 3.3335" stroke="#22ABF3" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="h-full w-[10vw] md:w-[200px] z-10 absolute top-1/2 -translate-y-1/2 flex justify-center items-center left-[-12%] md:left-[-260px]" onClick={() => rotate('p')}>
                <svg className="rotate-90" xmlns="http://www.w3.org/2000/svg" width="53" height="28" viewBox="0 0 53 28" fill="none">
                  <path d="M49.6667 3.3335L26.5 24.6668L3.33331 3.3335" stroke="#22ABF3" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className="h-full w-full absolute [transform-style:preserve-3d] [transition:transform_1s]" style={{ transform: `rotateY(${currdeg}deg)` }}>
                <div className="absolute w-full [transform:rotateY(0deg)_translateZ(240px)] md:[transform:rotateY(0deg)_translateZ(400px)]">
                  <ReasonCard
                      number="/images/number-01.png"
                      title="名刺管理アプリの誤登録からの脱却"
                      content="名刺管理アプリを使っているんですけど、紙の名刺を取り込もうとした時に撮影で完結するのはいいとして精度が粗いんですよね。情報の誤登録が怖くていちいちチェックしたりするのが面倒でした。次世代名刺なら受け取った情報に誤りがないので、常に正しい情報にアクセスできます。安心感が違いますね。"
                      explanation="名刺管理アプリは便利だけど、精度が荒いのは問題だよね。間違えて登録されたらビジネスチャンスも失いかねないし、常に正しい情報にアクセスできることは本当に価値があることなんだ。"
                  />
                </div>
                <div className="absolute w-full [transform:rotateY(45deg)_translateZ(240px)] md:[transform:rotateY(45deg)_translateZ(400px)]">
                  <ReasonCard
                      number="/images/number-02.png"
                      title="基本情報をワンタッチ起動"
                      content="名刺ってロゴや文字情報が基本じゃないですか。QRコードをプリントしたりすれば用途の幅は広がるけど、わざわざ読み込んだり、電話番号やメールアドレスを打ち込んだりする手間を相手に強いることになるのが嫌で。次世代名刺なら電話やメール、サイトのリンクもワンタッチでアクセスできて、相手の負担を物理的に減らせるのがいいですね。住所のワンタッチでマップが起動する機能も便利でよく使ってます。"
                      explanation="ワンタッチで起動できるのは、メタ情報というNFTを説明する情報欄に記載した名刺の情報にリンクを設定してあるからなんだ。相手が楽になるのは良いよねえ〜。"
                  />
                </div>
                <div className="absolute w-full [transform:rotateY(90deg)_translateZ(240px)] md:[transform:rotateY(90deg)_translateZ(400px)]">
                  <ReasonCard
                      number="/images/number-03.png"
                      title="着信時に名前が自動表示"
                      content="相手から次世代名刺を受け取ると、後日相手から着信があった際に次世代名刺アプリと連携して着信相手の名刺情報を表示してくれるんですよ。電話帳の登録とかアプリの設定とか、何もしなくても自動で表示されたので最初はびっくりしましたが（笑）地味ですけど便利ですよね。"
                      explanation="知らない番号からの着信って出たがらない人が増えているみたいだね。次世代名刺なら交換相手からの電話を逃さないから安心。不在時の折り返しもスムーズだね。"
                  />
                </div>
                <div className="absolute w-full [transform:rotateY(135deg)_translateZ(240px)] md:[transform:rotateY(135deg)_translateZ(400px)]">
                  <ReasonCard
                      number="/images/number-04.png"
                      title="充実した検索機能"
                      content="名刺ってどんどん貯まるものですよね。なのでデジタル名刺の場合、検索機能が充実していることが重要だと思っていて。次世代名刺なら、キーワード検索だけじゃなく、タグ付け機能があるので、タグで名刺をグルーピングしたりして欲しい情報に楽にたどり着けるよう工夫してます。"
                      explanation="欲しい情報への一発アクセスは、効率性を求めるビジネスマンにはとても重要なことなんだ。探す時間は何も生み出さない。みんなもタグ機能を使いこなそう。"
                  />
                </div>
                <div className="absolute w-full [transform:rotateY(180deg)_translateZ(240px)] md:[transform:rotateY(180deg)_translateZ(400px)]">
                  <ReasonCard
                      number="/images/number-05.png"
                      title={<>アーティストやデザイナーの<br />ブランディングに</>}
                      content="自分の作品をどう売り込むかって、自分みたいなアーティストにとっては死活問題だったりもするんですよね。でも、次世代名刺ならNFTに設定する画像を自分の作品サンプルのように使うことができると気付いたんです。それで気合い入れて作るようにして。実際に相手が興味を持ってくれた時は嬉しかったですよ。デザイン関係の方も同じように使えると思います。"
                      explanation="実際の作品を見てもらえないと売上につながらないよね。次世代感のある使い方でスバラシイ！名刺情報に販売サイトやポートフォリオのリンクを設定しておくのもおすすめ。"
                  />
                </div>
                <div className="absolute w-full [transform:rotateY(225deg)_translateZ(240px)] md:[transform:rotateY(225deg)_translateZ(400px)]">
                  <ReasonCard
                      number="/images/number-06.png"
                      title={<>トレンドに関心の高い<br />相手との談笑ネタに</>}
                      content="普段経営者の諸先輩方とお話しさせていただく機会が多いだけに、思いついた話のネタは常にストックしているのですが、次世代名刺の場合、その真新しさやビデオ名刺のような機能がそのまま話のネタになるんですよね。相手が知らないと自動的に教える側に回れるので、コイツは役に立ちそうだと思ってもらえるのか可愛がってもらうことが増えました（笑）次世代名刺さまさまですよ。"
                      explanation="経営者の人たちってトレンドに敏感だものね。自分が知らない世界を見せてくれる相手は貴重だから大事にするって聞いたことがあるよ。これで商談前の信頼関係構築はバッチリ！"
                  />
                </div>
                <div className="absolute w-full [transform:rotateY(270deg)_translateZ(240px)] md:[transform:rotateY(270deg)_translateZ(400px)]">
                  <ReasonCard
                      number="/images/number-07.png"
                      title={<>なりすましを防止する機能が強化</>}
                      content="次世代名刺で発行されるNFT名刺は送信できる回数が1回だけで、受け取った相手が誰かに転送できない仕様なんです。紙の名刺のように自分の名刺が知らない人に渡ってしまうことがなく、渡した相手から動くことがないので安心感があります！なんていう機能だったか忘れちゃったけど、この機能は重宝しますね（笑）"
                      explanation="この転送制御機能のことを、「1TT」と言うよ！次世代名刺はこの1TTが標準規格として採用されているんだ。名刺の一人歩きを完全に防止できる点が魅力だね。"
                  />
                </div>
                <div className="absolute w-full [transform:rotateY(315deg)_translateZ(240px)] md:[transform:rotateY(315deg)_translateZ(400px)]">
                  <ReasonCard
                      number="/images/number-08.png"
                      title={<>SDGsの標榜が飾りにならない</>}
                      content="紙名刺って実は年間で何百万本もの木が消費されるらしいんですよね。それを知ってから、SDGsを標榜しているのに木の消費から目を背けている矛盾に気持ちが悪くなって（笑）思い切って次世代名刺の利用を始めたのですが、全面的に乗り換えるには時間も必要で。結局まだ紙名刺も併用しています。でも、少しでも持続可能な世界に貢献できることで矛盾が解消されて気持ち的にはスッキリできましたよ。"
                      explanation="SDGsが飾りにならないためには具体的なアクションが大事。持続可能な未来はひとりひとりの意識がアクションに結びついた時に初めて実現に向けて動き出すんだ。地球人として努力しよう！"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}