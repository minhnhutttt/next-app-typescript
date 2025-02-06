"use client";
import useScrollAnimations from "@/hooks/useScrollAnimations";
import BarCode from "@/components/barcode";
import LogoDots from "@/components/logo-dots";
import Modal from "@/components/modal";
import TitleBlockChain from "@/components/titles/title-block-chain";
import { useState } from "react";

export default function BlockchainSingle() {
  const ref = useScrollAnimations();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <main>
      <div ref={ref} className="relative">
        <div className="flex">
          <div className="fade-up flex-1 pb-[324px] pt-6 px-4">
            <div className="px-3 pb-2 border-b border-black/30 dark:border-white/30">
              <h3 className="md:text-[21px] text-[19px] font-semibold leading-snug dark:text-white">
                ビットコインに価値がないと言うのなら、人類は皆まともに歩けないと言っているようなものにすぎない
              </h3>
              <p className="font-helvetica md:text-[15px] text-[14px] md:mt-2.5 dark:text-white">
                2024.4.18
              </p>
            </div>
            <div className="px-3">
              <div className="flex py-2.5">
                <div className="h-6 flex items-center bg-[#F97373] px-2.5 text-white text-[13px]">
                  仮想通貨
                </div>
              </div>
              <div className="flex justify-end py-4">
                <TitleBlockChain rect="md:h-[15px] h-[12px]" />
              </div>
              <div className="px-3 dark:text-white font-light">
                <div className="md:text-[19px] text-[15px] md:pt-10 pt-7 leading-[1.9]">
                  <strong>「赤ちゃんはよちよち歩きで不安定だから、将来はちゃんと歩けないだろう」</strong><br />
                  こんなことを言う人はいないでしょう。<br /><br />
                  <strong>「ビットコインは送金速度が遅いし不安定な通貨だから、将来も実務的に使えないだろう」</strong><br />
                  こんなことを言う人は山ほどいます。<br /><br />
                  <span className="hightlight">いまだ、ビットコインに対して懐疑的に見る人が今なお一定数いるようですが、非常に愚かです。</span><br />
                  ビットコインの送金や決済には、たしかに時間がかかります。<br /><br />
                  自動販売機での支払いにビットコインを使った結果、<br />
                  ジュースが出てくるまでに10分かかるとしたら、悠長に待つバカはさすがにいないでしょう。<br /><br />
                  現時点において、「利便性」を最優先に考えるなら、ビットコインは間違いなく不便。<br />
                  しかし、このことを理由に「ビットコインは無価値（無意味）だ」と非難するのだとしたら、<br />
                  それもまたバカと言っていいでしょう。<br /><br />
                  まったくもってビットコインの本質を捉えていない、極めて的はずれな主張です。<br /><br />
                  ビットコイン不要論者たちの主張はこうです。<br /><br />
                    <ul className="list-disc list-inside">
                    <li>ビットコインは遅い（実務に使えない）</li>
                    <li>ビットコインはボラティリティが大きい（取引通貨として不安定過ぎる）</li>
                    <li>ビットコインには裏付け資産がない（そんなものをどうやって信用しろと！？）</li>
                  </ul>
                  <br />
                  言いたいことはわかります。<br />
                  しかし、これらの主張はいずれもビットコインの本質に迫るものではありません。<br /><br />
                  <span className="hightlight">では、ビットコインの本質とは何か。<br />
                  そ資産としては「価値の保存」 決済手段としては「確実性」<br />
                  この2点が高度なレベルで実現していることにあります。</span><br /><br />
                  いずれもわかりにくい概念であるため、かみ砕いて説明しましょう。<br /><br />
                  ビットコインは、その希少性や安全性から「デジタルゴールド」と呼ばれています。<br /><br />
                  実物の金（ゴールド）、例えば金塊や金の延べ棒をイメージしてみてください。<br /><br />
                  金塊や金の延べ棒は、果たして日常の買い物に使えるでしょうか？<br /><br />
                  企業間の取引に使うことがあるでしょうか？<br /><br />
                  現代を生きる私たちは、金の塊で決済を行うことはありません。<br /><br />
                  私たちが金を保有する理由は、自身の資産を「安定した状態」で保管することにあります。<br /><br />
                  つまり「保管」や「保存」こそが金のメジャーな使い道であり、これはビットコインも同様。<br /><br />
                  すなわち、 <br />
                  <span className="hightlight">ビットコインの本質は、<br />
                  「価値を安定的に保存できるデジタル資産」 という点にあります。</span><br /><br />
                  ところが、世界にはビットコインを決済に用いている国や地域が日々増えています。<br /><br />
                  ビットコインの本質が「価値の保存」にあるとすれば、<br />
                  これを決済手段として用いるのは筋が悪いように見えるかもしれません。<br /><br />
                  しかし、ここで論点になるのがビットコインの本質の2つめ、<br />
                  決済における「確実性」の問題です。<br /><br />
                  そもそも、日本人の多くがビットコインの本質を理解できないのは、<br />
                  日本の法定通貨である円が”ある程度の信用力”をいまだ保持しているからです。<br /><br />
                  私たちは 「円で決済ができない」 「円で日常の買い物ができない」<br />
                  などということは、夢にも思わないでしょう。<br /><br />
                  ゆえに、ほとんどの日本人が<br />
                  「ビットコインなど私たちには必要ない」<br />
                  という発想に行きつくのも、無理のないことなのかもしれません。<br /><br />
                  一方、世界にはまったく事情が異なる国があります。<br /><br />
                  たとえば、トルコの通貨「リラ」は、<br />
                  過去10年で「1リラ＝約50円」から「1リラ＝5円未満」に急落しています。<br /><br />
                  これはトルコ人にとって、自国通貨の価値が10分の1以下に弱まったことを意味します。<br /><br />
                  アルゼンチンの「ペソ」に至っては<br />
                  、10年前の「1ペソ＝約12円」から「1ペソ＝0.2円未満」になっており、<br />
                  通貨の価値はもはや100分の1。<br /><br />
                  現在のアルゼンチンは想像を絶するインフレに見舞われています。<br /><br />
                  このように、 自国通貨の価値が不安定化し、<br />
                  決済に「確実に」使える保証がなくなってしまった国は何を求めるようになったか。<br /><br />
                  ビットコインです。<br />
                  <span className="hightlight">ビットコインは、決済手段として「確実に」機能します。<br />
                  特定の国の政府（通貨発行体）に依存することなく、価値を保つことができます。<br />
                  ゆえに、世界中どこでも通貨として利用できる「確実性」が、ビットコインにはあります。</span><br /><br />
                  このように「価値の保存」と「決済における確実性」を実現できるビットコインにとって、<br />
                  <br />
                  <ol className="list-inside list-decimal">
                  <li>ビットコインは遅い </li>
                  <li>ビットコインはボラティリティが大きい</li>
                  <li>ビットコインには裏付け資産がない</li>
                  </ol>
                  <br />
                  このような批判は、本質を外した主張に過ぎないのです。<br /><br />
                  さらに補足をすると、 上記の批判はビットコインの弱みどころか、<br />
                  むしろ強みを強調する論点にさえなります。<br /><br />
                  実際は、次の3つが真実です。<br />
                  <br />
                  <ol className="list-inside list-decimal">
                    <li>ビットコインは速い</li>
                    <li>ビットコインの<span className="hightlight">ボラティリティ</span>は小さい</li>
                    <li>ビットコインの価値を裏付けられる資産がそもそも存在しない</li>
                  </ol>
                  <br />
                  これが、ビットコインの真実です。 <br /><br />
                  <div className="border border-black dark:border-white p-5">
                  <strong>《1.ビットコインは速い》</strong><br />
                  「ビットコインが遅い」という批判は、「あなたが持つ日本円を今すぐベトナムの銀行に送金できるのか」という問いで論破できます。<br />
                  日本国内の取引に限れば、既存の金融システムの方がたしかにスピーディかもしれません。<br />
                  しかし、国際送金となれば話はまったく違ってきます。<br />
                  日本円を現地通貨に両替し、2つの国をまたいで送金するには数日かかる場合もあります。<br />
                  一方、ビットコインは、世界中どこの国へ送ろうとも、誰が送ろうとも、おおむね数十分で着金します。どちらが「速い」のかは明らかです。
                  </div><br />
                  <div className="border border-black dark:border-white p-5">
                  《2.ビットコインのボラティリティは小さい》<br />
                  「ビットコインはボラティリティが大きい」という説も、誕生からわずか10数年しか経っていないビットコインの歴史を踏まえれば、浅はかな考えです。<br />
                  ビットコインは2024年1月にようやく米国でETFが承認されたばかり。<br />
                  つまり、まだまだ適正な評価がされていないのです。<br />
                  今後、ビットコインの価値がより認められるようになれば価格はさらに安定します。<br />
                  そもそも、他の暗号資産に比べればすでにボラティリティは圧倒的に小さいとさえ言えます。<br />
                  最後に「裏付け資産がない」との批判については、そもそもビットコインの価値を裏付けられる資産がないんです。</div><br />
                  <div className="border border-black dark:border-white p-5">
                  《3.ビットコインの価値を裏付けられる資産がそもそも存在しない》<br />
                  「ビットコインの価値の裏付け」という役割が、無限に発行可能な「円」や「ドル」に務まるでしょうか？<br />
                  発行上限がない（＝いくらでも価値が下がる可能性がある）通貨でビットコインの価値を裏付けようものなら、逆にビットコインの価値が「下げられて」しまいます。<br />
                  採掘量が少なく、ゆえに希少性が高いとされるゴールドでさえも、実際は「人類が採掘できる量」が限られているだけであり、「埋蔵量」自体は人類の想像を遥かに超える量が存在するかもしれません。<br />
                  「存在する量が有限である」ということ自体が、他の資産では裏付けられないビットコイン固有の価値なのです。</div><br />
                  これでもなお、ビットコインに懐疑的な人に問いたいです。<br /><br />
                  <strong>ユーロもドルも下がっているこの時代に、<br />
                  そもそも未来の価値を裏付けのある確かな通貨はあるのでしょうか？</strong><br /><br />
                  投資商品としての批判をする人もいますが、<br />
                  株式投資は安全で暗号資産は危険という考えもよくわかりません。<br /><br />
                  2024年3月時点の時価総額は次のようになっています。<br /><br />
                  世界の株式市場：約111兆ドル ゴールド（金）：約14兆ドル<br />
                  暗号資産全体：約2.8兆ドル<br />
                  出典：<a href="https://toyokeizai.net/articles/-/742954?display=b" target="_blank" className="underline">東洋経済|株価､金､ビットコインが驚くほど高騰する事情</a><br />
                  また、<strong>金相場の歴史を辿ってみると50年ほど前は現在の暗号資産と同等の時価総額だったと考えられます</strong>（<a href="https://kinkaimasu.jp/gold/column/50_years_of_gold_market_history/" target="_blank" className="underline">リファスタ|金相場の50年史</a>より）。<br />
                  さらに<strong>100年前まで辿れば、</strong>
                  <strong>そもそもの株式市場は金よりも時価総額は低いものでした。</strong><br /><br />
                  暗号資産同様物理的に存在しない株式はたった1世紀でものすごい価値に膨れ上がっています。<br /><br />
                  これらを考えてみても、<br />
                  暗号資産に信用がないとはもはや言い切れないでしょう。<br /><br />
                  もう少し私の持論をお伝えすると、<br />
                  ビットコインはもはや暗号資産ですらないと思っています。<br /><br />
                  価格が「上がった・下がった」と常に気にかけるような投資対象でもありません。<br /><br />
                  ビットコインはすでに、 実物のゴールドと同等です。 つまり、<br />
                  分散暗号化によって有限性と検証性、匿名性が確保されています。<br /><br />
                  ビットコインの価格が下がっている（もしくは上がっている）のではなく、<br />
                  “他の通貨”がビットコインに対して上下しているのです。<br /><br />
                  そう考えると、実はビットコインの裏付け資産は「世界中の紙幣」だとも言えます。<br /><br />
                  どこかの国が紙幣を刷れば刷るほど、<br />
                  相対的にビットコインに対する紙幣の価値は下落します。<br /><br />
                  また、通貨のシェアに着目した場合も、<br />
                  ビットコインの優位性は揺るぎません。<br /><br />
                  「世界中でビットコイン（暗号資産）が使われるようになるのはいつですか？」<br />
                  この問いに対する回答は、 「もうすでに使われています」<br />
                  そして、逆に私はこう尋ねたい。<br /><br />
                  「では、基軸通貨とされるドルが世界中で使われるのはいつですか？（実際は“世界中”で利用するのは不可能）」<br />
                  つまり、ビットコインが利用できる国の数はすでにドルよりも多く、<br />
                  今後は「ビットコインはいつ世界中で使われるようになるのか？」ではなく、<br />
                  「ビットコインが世界の通貨シェアを取るのはいつか？」<br />
                  という論点に移り変わっていくべきだと考えています。<br /><br />
                  そして、ここからが重要なポイントです。<br /><br />
                  世のビットコイン不要論者は、<br />
                  ビットコインの「表面的な不便さ」だけを理由にビットコインの存在価値（および、暗号資産の存在価値）を不当に下げようとします。<br /><br />
                  「ビットコインなんて役に立たないよ！そんなものより、もっと速くて便利なサービスを作ったから、ぜひこれを使ってうちにお金を支払ってよ！」と言い、<br />
                  自社の商品やサービスを売り込もうとします。<br /><br />
                  それは、自分たちだけに都合のよい詭弁です。ごまかしの理論に過ぎません。<br /><br />
                  すでに述べた通り、米国ではビットコインETFが承認されています。<br /><br />
                  エルサルバドルや中央アフリカ共和国は、<br />
                  自国の法定通貨としてビットコインを採用しています。<br /><br />
                  通貨としてのビットコインの価値は、<br />
                  不要論者の主張に反して確実に高まっているのです。<br /><br />
                  私は、ビットコインを含め、<br />
                  それぞれの暗号資産の「本質的な価値」を正しく理解しています。<br /><br />
                  ビットコイン、暗号資産、伝統的な金融、そして、これらを活用した事業作り。<br /><br />
                  そのすべてを熟知しているからこそ、<br />
                  あなたのビジネスに最適な暗号資産を選択し、<br />
                  それをベースとしたサービスを生み出すことができます。<br /><br />
                  ここまで記事を読んで暗号資産の本質的な価値が理解できた方は、<br />
                  暗号資産のビジネス活用について今すぐ我々に連絡をください。<br />
                </div>
                <div className="flex justify-start mt-12">
                  <a href="http://" target="_blank" rel="noopener noreferrer" className="text-[24px] font-bold  text-[black] bg-[#F8D0B2] px-12 py-2 rounded-full duration-150 hover:opacity-75 border border-[#C6C6C6]">
                    CONTACT
                  </a>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="max-xl:hidden w-[295px] bg-[#F1E4F6] dark:bg-[#996894]/[0.68] border-l border-[#A06778] dark:border-white flex flex-col justify-between">
            <div className="fade-up px-3 pt-6 sticky top-0">
              <figure className="pb-7">
                <img
                  className="dark:hidden"
                  src="/assets/images/annotation.png"
                  alt=""
                />
                <img
                  className="dark:block hidden"
                  src="/assets/images/annotation-dark.png"
                  alt=""
                />
              </figure>
              <div className="w-[272px] mx-auto dark:text-white bg-white/70 dark:bg-white/30 border border-[#A06778]/[0.7] dark:border-[#996894]/[0.7] p-2.5">
                <p className="md:text-[13px] text-[15px] border-b border-[#E01652] dark:border-white pb-1 font-semibold">
                  イーロンマスク
                </p>
                <p className="md:text-[12px] text-[14px] py-2.5">
                  新たな決済サービスを作り出したほか、電気自動車、宇宙開発、太陽光発電などのビジネスで成功を収め、当時没落していたそれらの業界を再興させた。「影の米大統領」の異名を持つピーター・ティールやYouTube創業者のチャド・ハーリーなどと共にペイパルマフィアの一人としても語られる。
                </p>
                <div className="flex justify-end">
                  <a
                    href="/"
                    className="text-white/80 text-[16px] px-3 h-6 flex justify-center items-center bg-[#FF5660] rounded-[12px]"
                  >
                    more
                  </a>
                </div>
              </div>
              <div className="w-[272px] mx-auto dark:text-white bg-white/70 dark:bg-white/30 border border-[#A06778]/[0.7] dark:border-[#996894]/[0.7] p-2.5">
                <p className="md:text-[13px] text-[15px] border-b border-[#E01652] dark:border-white pb-1 font-semibold">
                ボラティリティ
                </p>
                <p className="md:text-[12px] text-[14px] py-2.5">
                価格や数値の変動性を示す指標。主に金融市場で使用され、値動きの激しさを表現する。
                </p>
              </div>
              <div className="flex justify-end mt-[680px]">
                <LogoDots
                  color="fill-[#D19FE3]"
                  darkColor="dark:fill-[#E39FCC]"
                />
              </div>
            </div>
          </div>

          <div className="h-[324px] flex justify-end items-end p-3 absolute bottom-0 right-0">
            <BarCode color="fill-[#B27CC5]" darkColor="dark:fill-[#E39FCC]" />
          </div>
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            <div className="w-[300px] md:w-[500px] mx-auto dark:text-white bg-white dark:bg-[#666666] border border-[#A06778]/[0.7] dark:border-[#996894]/[0.7] p-2.5">
              <p className="md:text-[17px] text-[15px] font-semibold border-b border-[#E01652] dark:border-white pb-1">
                イーロンマスク
              </p>
              <p className="md:text-[16px] text-[14px] py-2.5">
                新たな決済サービスを作り出したほか、電気自動車、宇宙開発、太陽光発電などのビジネスで成功を収め、当時没落していたそれらの業界を再興させた。「影の米大統領」の異名を持つピーター・ティールやYouTube創業者のチャド・ハーリーなどと共にペイパルマフィアの一人としても語られる。
              </p>
              <div className="flex justify-end">
                <a
                  href="/"
                  className="text-white/80 text-[16px] px-3 h-6 flex justify-center items-center bg-[#FF5660] rounded-[12px]"
                >
                  more
                </a>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </main>
  );
}
