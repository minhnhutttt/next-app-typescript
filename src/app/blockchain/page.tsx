"use client"
import BarCode from "@/components/barcode";
import LogoDots from "@/components/logo-dots";
import Modal from "@/components/modal";
import TitleBlockChain from "@/components/titles/title-block-chain";
import { useState } from "react";

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <main>
      <div className="relative">
        <div className="flex">
            <div className="flex-1 pb-[324px] pt-6 px-4">
                <div className="px-3 pb-2 border-b border-black/30 dark:border-white/30">
                    <h3 className="md:text-[21px] text-[19px] font-semibold leading-snug dark:text-white">
                        イーロン・マスクが中国を訪問しても、テスラにとっての <br />
                        根本的な課題は解決しない
                    </h3>
                    <p className="font-helvetica md:text-[15px] text-[14px] md:mt-2.5 dark:text-white">2024.4.18</p>
                </div>
                <div className="px-3">
                    <div className="flex py-2.5">
                        <div className="h-6 flex items-center bg-[#F97373] px-2.5 text-white text-[13px]">仮想通貨</div>
                    </div>
                    <div className="flex justify-end py-4">
                        <TitleBlockChain rect="md:h-[15px] h-[12px]" />
                    </div>
                    <div className="bg-white dark:bg-white/40 dark:text-white md:text-[17px] text-[15px] p-4 md:p-6 leading-[1.8]">
                    <button className="font-bold underline xl:hidden" onClick={openModal}>イーロン・マスク</button><span className="font-bold underline max-xl:hidden">イーロン・マスク</span>が4月28日に中国を訪問し、李強首相と会談した。その成果にはバイドゥ（百度）との提携拡大などが含まれるとされているが、中国メーカーの技術の進展が著しいなかテスラが厳しい競争を強いられることには変わりないだろう。
                    </div>
                    <div className="px-3 dark:text-white font-light">
                        <div className="md:text-[17px] text-[15px] md:pt-10 pt-7 leading-[1.9]">
                            イーロン・マスクは、4月28日（米国時間）に中国を“サプライズ訪問”したことが多くの好意的な見出しを獲得したことに喜ぶことだろう。一方で、その訪中がインドのナレンドラ・モディ首相にとっても同じように「意外」であったことは間違いない。モディ首相は、かねて予定されていた訪問において、マスクを盛大に歓迎する予定だったのである。<br />
                            <br />
                            このインド訪問についてマスクは、「非常に重要なテスラ関連の責務」を理由に、直前になってキャンセルした。実際のところ、ここ数週間は米国の規制当局からの逆風や利益の半減、そして値下げの展開と、テスラにとって波乱に満ちたものになっている。そうした状況下で、マスクは中国の李強首相のために時間を割いたのだ。公然と訪問が中止されたことを、モディ首相はすぐには忘れないことだろう。<br />
                            <br />
                            マスクにとっては、やむを得ない選択だったのかもしれない。中国がテスラを必要とする以上に、テスラには中国が必要なのだ。<br />
                            <br />
                            中国はテスラにとって、米国に次いで2番目に大きな市場である。ところが不吉なことに、今年の第1四半期に中国国内の電気自動車（EV）市場が15％以上も拡大したなかで、中国におけるテスラの売上高は4％減少したのだ。どんな企業であれ、最高経営責任者（CEO）がビジネスジェットに飛び乗り、太平洋を横断して中国の首相と緊急会議しようとするには十分な打撃である。<br />
                            <br />
                            世界的に見ると、テスラは1月以降で企業価値の3分の1近くを失っている。そして今月初旬には、世界全体でのテスラの第1四半期の納車台数が、ほぼ4年ぶりに減少した。テスラの投資家たちは、完全な自動運転機能を搭載したクルマの市場投入が再三にわたり遅れていることに、例によって不満を抱き続けている。
                        </div>
                        <div className="flex gap-6 mt-4 max-lg:flex-col">
                            <div className="">
                                <figure><img src="/assets/images/img.png" alt="" /></figure>
                                <p className="text-[12px] mt-3">イーロンと中国は仲悪いのだろうか？</p>
                            </div>
                            <p className="md:text-[17px] text-[15px] flex-1 leading-[1.9]">
                            テスラが一時しのぎで提供しているテクノロジーのひとつに、「フルセルフドライビング ケイパビリティ（FSD）」が挙げられる（現在は8,000ドル、日本では87万1,000円となっている追加機能）。しかし、同じくまぎらわしい名称である運転支援機能「オートパイロット」のように、FSDもドライバーの注意を必要とすることには変わりない。さらに、今後その<span className="underline">危険性が証明される可能性</span>もある。
                            </p>
                        </div>
                        <div className="md:mt-10 mt-6">
                            <p className="md:text-[20px] text-[16px] font-bold">バイドゥとの連携が意味すること</p>
                            <p className="md:text-[17px] text-[15px] md:mt-6 mt-4 leading-[1.9]">
                            マスクと李強首相との28日の会合で明らかになったと考えられている取引のなかには、公道でのデータ収集のためにウェブ検索大手であるバイドゥ（百度）の地図ライセンスの使用をテスラに許可するパートナーシップが含まれている。<br />
                            このパートナーシップは「重要な分岐点となった瞬間」であると、ウェドブッシュ証券のシニアアナリストのダン・アイヴスはブルームバーグテレビジョンのインタビューで指摘している。
                            </p>
                        </div>
                        <div className="flex justify-end mt-12">
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                            <img src="/assets/images/download.png" alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-xl:hidden w-[295px] bg-[#F1E4F6] dark:bg-[#996894]/[0.68] border-l border-[#A06778] dark:border-white flex flex-col justify-between">
                <div className="px-3 pt-6">
                    <figure className="pb-7">
                        <img className="dark:hidden" src="/assets/images/annotation.png" alt="" />
                        <img className="dark:block hidden" src="/assets/images/annotation-dark.png" alt="" />
                    </figure>
                    <div className="w-[272px] mx-auto dark:text-white bg-white/70 dark:bg-white/30 border border-[#A06778]/[0.7] dark:border-[#996894]/[0.7] p-2.5">
                        <p className="md:text-[13px] text-[15px] border-b border-[#E01652] dark:border-white pb-1 font-semibold">イーロンマスク</p>
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
                        <LogoDots color="fill-[#D19FE3]" darkColor="dark:fill-[#E39FCC]" />
                    </div>
                </div>
            </div>
            
            <div className="h-[324px] flex justify-end items-end p-3 absolute bottom-0 right-0">
                <BarCode  color="fill-[#B27CC5]" darkColor="dark:fill-[#E39FCC]"  />
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
            <div className="w-[300px] md:w-[500px] mx-auto dark:text-white bg-white dark:bg-[#666666] border border-[#A06778]/[0.7] dark:border-[#996894]/[0.7] p-2.5">
                        <p className="md:text-[17px] text-[15px] font-semibold border-b border-[#E01652] dark:border-white pb-1">イーロンマスク</p>
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
