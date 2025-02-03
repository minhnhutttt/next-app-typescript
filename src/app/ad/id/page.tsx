"use client"
import useScrollAnimations from "@/hooks/useScrollAnimations";
import BarCode from "@/components/barcode";
import LogoDots from "@/components/logo-dots";
import Modal from "@/components/modal";
import TitleAD from "@/components/titles/title-ad";
import { useState } from "react";

export default function AdSingle() {
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
                    広告代理店の見極め方〜失敗の責任を負いたくなければ「大手」に群がれ！成功したければ規模に目を向けるな！〜
                    </h3>
                    <p className="font-helvetica md:text-[15px] text-[14px] md:mt-2.5 dark:text-white">2024.4.18</p>
                </div>
                <div className="px-3">
                    <div className="flex py-2.5">
                        <div className="h-6 flex items-center bg-[#F97373] px-2.5 text-white text-[13px]">仮想通貨</div>
                    </div>
                    <div className="flex justify-end py-4">
                        <TitleAD rect="md:h-[15px] h-[12px]" />
                    </div>
                    <div className="bg-white dark:bg-white/40 dark:text-white md:text-[17px] text-[15px] p-4 md:p-6 leading-[1.8]">
                    <button className="font-bold underline xl:hidden" onClick={openModal}>イーロン・マスク</button><span className="font-bold underline max-xl:hidden">イーロン・マスク</span>が4月28日に中国を訪問し、李強首相と会談した。その成果にはバイドゥ（百度）との提携拡大などが含まれるとされているが、中国メーカーの技術の進展が著しいなかテスラが厳しい競争を強いられることには変わりないだろう。
                    </div>
                    <div className="px-3 dark:text-white font-light">
                        <div className="md:text-[19px] text-[15px] md:pt-10 pt-7 leading-[1.9]">
                        <span className="hightlight">大手企業のメリットとはたった1つ</span>です。<br />
                        <br />
                        「大手である」ということ。<br /><br />

                        「何を言ってるんだコイツは？」<br />

                        と思われたかもしれません。<br /><br />

                        わかりやすい言葉を使うのであれば、<br />

                        <span className="hightlight">「権威性」だけがメリット</span>ということです。<br /><br />

                        私は以前、とある広告案件のコンペに参加したことがあります。<br /><br />

                        大手から零細までさまざまな広告代理店が参加する大規模なコンペです。<br /><br />

                        正直、「大手」広告代理店のエリートが話すプレゼンがどのような内容か楽しみにしていました。<br /><br />

                        しかし、内容は広告運用の「本質」とはかけ離れたものでした。<br /><br />

                        彼らのアピールポイントは、<br />

                        <strong>“いかに自分たちが大きな代理店であるか”</strong><br />

                        その他大手以外の代理店も、<br />

                        相対的に自分たちの「大きさと実績」を伝えていました。<br /><br />

                        中身がすっからかんの自慢大会同然。<br /><br />

                        まだ、素人たちが歌うのど自慢大会の方が楽しいくらいです。<br /><br />

                        広告のように流動的なビジネスでは、<br />

                        実績よりももっとシンプルに<br />

                        時代に合わせて、<br />
                        どのようにマーケティングをとらえて、<br />
                        それを真面目にやるか<br />

                        この発想こそが重要です。<br /><br />

                        大企業がたくさんの案件を受ければ、<br />

                        その中から失敗を隠して成功談のみを実績とすることが出来るからです。<br /><br />

                        さらに、<br />

                        その成功談が本当かどうかを確認するすべもありません。<br /><br />

                        ここで、ひとつ断言させてください。<br /><br />

                        <span className="hightlight">“広告運用の成否に会社の規模は関係ありません”</span><br />

                        重要なのは、<br />

                        （大きさも含めて）その会社が何者か<br />

                        ではなく、<br />

                        その会社がどんな広告運用をしてくれるか<br />

                        ということです。<br /><br />


                        男子なら皆知っている、<br />

                        「エアジョーダン」誕生の秘話を少しお話ししましょう。<br /><br />

                        エアジョーダンが誕生するまでNIKEはまだ。<br /><br />

                        企業としては弱小の部類でした。<br /><br />

                        バスケ界に新星マイケル・ジョーダンがNBAに進出　するころ、<br />

                        各スニーカーメーカーはこぞって彼のスポンサーになりたがりました。<br /><br />

                        NIKEも名乗りをあげた一社でしたが、<br />

                        ブランド力も財力もありません。<br /><br />

                        そもそもマイケル・ジョーダンはNIKEをそこまで好きではなかったので、<br />

                        社内では当然諦めムードでした。<br /><br />

                        しかし、<br />

                        たった一人のNIKEの社員が、<br />

                        それを覆したのです！<br /><br />

                        アディダスやコンバースといった名だたるメーカーが、<br />

                        彼にプレゼンした内容は一様にして次のようなものでした。<br /><br />

                        <strong>&quot;我が社の靴は言うまでもなく高品質で、<br />

                        歴代の名だたる選手が履いている。<br /><br />

                        君のような将来有望な選手には相応しい！&quot;</strong><br />

                        一方、NIKEのとある社員は次のようなことを言いました。<br /><br />

                        <strong>&quot;靴はただの靴だ。<br /><br />

                        誰かが履いた時に意味が生まれる。<br /><br />

                        その靴にみんな憧れるようになる。<br /><br />

                        だからあなたが主役（アイコン）になる新しい靴を作ろう&quot;</strong><br />

                        そして結果として、<br />

                        <span className="hightlight">ジョーダンは、<br />

                        自社の権威を売りにした企業を一蹴し、<br />

                        自分の権威性を引き出してくれる企業を選んだのです。</span><br /><br />

                        さらにNIKEはマイケル・ジョーダンのわがままを聞き、<br />

                        NBAの規定をやぶることになるデザインをつくりました（当然他社はそのような提案はせず）。<br /><br />

                        結果として罰金は払いましたが、<br />

                        その金額が霞むくらいの莫大な利益、<br />

                        そして存在感を生み出すまでになったのは<br />

                        言うまでもありません。<br /><br />



                        大手はいつも危ない橋を渡らず、<br />

                        楽な武器を使い、<br />

                        最小限のパワーで最大の利益を生むための<br />

                        小手先ばかりのテクニックを使いがちです。<br /><br />

                        それは決して悪いことではありません。<br /><br />

                        <span className="hightlight">ただ、本当に顧客のために仕事をしているのかを見極める必要があります。</span><br /><br />

                        一度、冷静に考えてみてください。<br /><br />

                        <strong>大手だけがすごいのであれば、<br />

                        なぜ、それ以外の会社は事業としてやっていけているのか？<br />

                        大手代理店を辞めたトップマーケターが、<br />

                        零細ベンチャーを起業したらどうなるのだろうか？</strong><br />

                        規模だけが重要なのであれば、<br />

                        こういった会社はうまくいかないはずでしょう。<br /><br />

                        でも実際は、大手以外の中堅・零細代理店でもビジネスが成立している。<br /><br />

                        なぜなのか？<br />

                        その答えは「Google」にあります。<br /><br />

                        もしくは、Googleも含めた「GAFAM」のような存在がカギを握っています。<br /><br />

                        彼らの前では、<br />

                        広告代理店の規模が大きかろうが小さかろうが、<br />

                        まったく意味をなしません。<br /><br />

                        どの広告代理店に依頼をしても、行き着く先はGoogleだからです。<br /><br />

                        もし、あなたが大手至上主義であるならば、<br />

                        Google広告のAIが提案する答えをを鵜呑みにしまくればいいのです。<br /><br />

                        Googleこそが「世界の最大手」ですから。<br /><br />

                        さて、ここまで読めば、<br />

                        あなたが真に押さえるべきポイントが見えてきたでしょう。<br /><br />

                        <span className="hightlight">広告運用で重要なのは、<br />

                        代理店がどのような広告運用をし、どのようにGoogleに依頼をするか。<br /><br />

                        会社の規模はまったく関係ありません。</span><br /><br />

                        とはいえ、<br />

                        大手広告代理店も悪いことばかりではありません。<br /><br />

                        そう、「権威性」があるから。<br /><br />

                        長いものには巻かれろ、<br />
                        勝てば官軍、<br />
                        強きを助け弱きをくじく・・・<br /><br />

                        歴史やルールはそうやって作られてきたのですから、<br />

                        圧倒的な権威には皆、頭が上がりません。<br /><br />

                        だからもし、<br />

                        あなたが、どうしても、<br />

                        「失敗の責任」<br />

                        を負いたくなければ、<br />

                        ぜひ電通や博報堂を選んでください。<br /><br />

                        仮に失敗しても、<br />

                        「絶対的な権威に依頼してもうまくいかなかったんだから仕方がない」<br />

                        と上司は納得してくれるはず。<br /><br />
                        <ul className="list-disc list-inside">
                        <li>自分が失敗の責任を負いたくない</li>
                        <li>上司に稟議を通す材料や決裁者を納得させる材料がほしい</li>
                        <li>“大手に頼んだのに”上手くいかなかったんだという言い訳の材料がほしい</li>
                        </ul>
                        <br />

                        <span className="hightlight">思考を停止して保身に走るでのあれば、<br />

                        大手広告代理店に依頼することはベストな選択だと言えます。</span><br /><br />

                        大手に依頼することが完全に「悪」なのではありません。<br /><br />

                        あなたの役割や目的に応じて、大手広告代理店を活用すれば良いのです。<br /><br />

                        そして、我々はこのような皮肉さえも正しく理解できる方とだけ仕事をしています。<br /><br />

                        <span className="hightlight">上司への建前や自身の保身のためではなく、<br />

                        「ビジネスとしての成果」<br />

                        を本気で追い求める方であれば、<br />

                        我々は喜んで力をお貸しします。</span><br /><br />
        
                        </div>
                        
                        <div className="flex justify-end mt-12">
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                            <img src="/assets/images/download.png" alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-xl:hidden w-[295px] bg-[#DBE8F0] dark:bg-[#6189B7]/[0.68] border-l border-[#3EA0FB] dark:border-white flex flex-col justify-between">
                <div className="fade-up px-3 pt-6">
                    <figure className="pb-7">
                        <img className="dark:hidden" src="/assets/images/annotation.png" alt="" />
                        <img className="dark:block hidden" src="/assets/images/annotation-dark.png" alt="" />
                    </figure>
                    <div className="w-[272px] mx-auto dark:text-white bg-white/70 dark:bg-white/30 border border-[#6395DF]/[0.7] dark:border-[#507F8E]/[0.7] p-2.5">
                        <p className="md:text-[13px] text-[15px] border-b border-[#0366C1] dark:border-white pb-1 font-semibold">イーロンマスク</p>
                        <p className="md:text-[12px] text-[14px] py-2.5">
                        新たな決済サービスを作り出したほか、電気自動車、宇宙開発、太陽光発電などのビジネスで成功を収め、当時没落していたそれらの業界を再興させた。「影の米大統領」の異名を持つピーター・ティールやYouTube創業者のチャド・ハーリーなどと共にペイパルマフィアの一人としても語られる。
                        </p>
                        <div className="flex justify-end">
                            <a href="/" className="text-white/80 text-[16px] px-3 h-6 flex justify-center items-center bg-[#FF5660] rounded-[12px]">
                            more
                            </a>
                        </div>
                    </div>
                    <div className="flex justify-end mt-[680px]">
                        <LogoDots color="fill-[#188FFD]" darkColor="dark:fill-[#8EBBFF]" />
                    </div>
                </div>
            </div>
            
            <div className="h-[324px] flex justify-end items-end p-3 absolute bottom-0 right-0">
                <BarCode color="fill-[#188FFD]" darkColor="dark:fill-[#8EBBFF]" />
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
            <div className="w-[300px] md:w-[500px] mx-auto dark:text-white bg-white dark:bg-[#666666] border border-[#6395DF]/[0.7] dark:border-[#507F8E]/[0.7] p-2.5">
                        <p className="md:text-[17px] text-[15px] font-semibold border-b border-[#0366C1] dark:border-white pb-1">イーロンマスク</p>
                        <p className="md:text-[16px] text-[14px] py-2.5">
                        新たな決済サービスを作り出したほか、電気自動車、宇宙開発、太陽光発電などのビジネスで成功を収め、当時没落していたそれらの業界を再興させた。「影の米大統領」の異名を持つピーター・ティールやYouTube創業者のチャド・ハーリーなどと共にペイパルマフィアの一人としても語られる。
                        </p>
                        <div className="flex justify-end">
                            <a href="/" className="text-white/80 text-[16px] px-3 h-6 flex justify-center items-center bg-[#FF5660] rounded-[12px]">
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
