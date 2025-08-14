"use client"
import { Term } from "@/components/common/Term";
import useScrollAnimations from "@/hooks/useScrollAnimations";

export default function About() {

    const ref = useScrollAnimations()

    return (
        <main >
            <section className="md:my-[180px] my-20 px-5 md:text-[24px] text-[18px] text-center">
                <div className="w-full max-w-[1320px] mx-auto md:space-y-20 space-y-10">
                    <div className="relative">
                        <div className="flex justify-center items-center"><img className="max-md:w-[40px]" src="/assets/images/sunshine.png" alt="" /></div>
                        <p className="font-bold md:text-[40px] text-[24[x] text-center">フードバイヤーズハブとは</p>
                    </div>
                    <p>
                        私たちは、全国各地で食品づくりを頑張る皆様と、<br />
                        まだ見ぬ商品を探すバイヤー様とを繋ぐ<br />
                        「ハブ（中心）」となるサービスを提供いたします。<br />
                        <br />
                        一皿の料理が、一日を特別にするように。<br />
                        一つの商品が、ビジネスを大きく動かすことがあります。<br />
                        <br />
                        そんな「奇跡の出会い」が、日本の食の世界にもっと増えれば、<br />
                        業界全体がさらに豊かになると信じています。
                    </p>
                    <div className="md:space-y-10 space-y-6">
                        <p className="md:text-[32px] text-[20px] font-bold">AIが可能にする「偶然の出会い」という必然</p>
                        <p>
                            フードバイヤーズハブでは、独自のAIコンシェルジュが <br />
                            バイヤー様のニーズを先読みし、新たな商品を提案します。<br />
                            それはまるで、旅先でふと立ち寄ったお店で、<br />
                            一生モノの品に出会うような体験。<br />
                            私たちは、そんな「偶然の出会い」を、テクノロジーで必然にします。
                        </p>
                    </div>
                    <div className="md:space-y-10 space-y-6">
                        <p className="md:text-[32px] text-[20px] font-bold">作り手と買い手の「距離」をゼロに</p>
                        <p>
                            魅力的な商品を見つけても、問い合わせの<br />
                            ハードルが高ければ、ビジネスチャンスは生まれません。<br />
                            当サービスは、バイヤー様が「これだ！」と思った瞬間に、<br />
                            すぐメーカーと繋がれるスムーズな体験を追求しています。<br />
                            <br />
                            メーカー様にとっては、自社の商品の魅力に気づいた、<br />
                            熱量の高いバイヤーからの連絡をダイレクトに受け取れる絶好の機会です。<br />
                            <br />
                            作り手の情熱が、買い手のビジネスを加速させる。<br />
                            買い手の発見が、作り手の未来を照らす。<br />
                            <br />
                            フードバイヤーズハブは、単なるマッチングサイトではありません。<br />
                            日本の食文化の新しい未来を、皆様と共に創るプラットフォームです。
                        </p>
                    </div>
                </div>
                <div className="w-full max-w-[1120px] mx-auto md:border-4 border-2 md:rounded-[20px] rounded-[10px] border-[#CCCCCC] md:my-[180px] my-20 px-5 py-10 md:py-[70px]">
                    <div className="w-full max-w-[920px] mx-auto flex md:gap-20 gap-10 max-md:flex-col text-left">
                        <span><img className="md:rounded-[20px] rounded-[10px]" src="/assets/images/about.png" alt="" /></span>
                        <div className="flex-1">
                            <p className="font-bold">私たちは「試食BAR アサクサ」を運営しています</p>
                            <p className="md:mt-10 mt-6">
                                日本屈指の外国人が集う観光地「浅草」
                                にて試食BARアサクサの店舗を構えています。<br />
                                全国各地の特産物・名産品などを『試食』
                                という形でお召し上がりいただくことで
                                新たな発見の機会をお客様に提供しています。<br />
                                試食によるリアルな声をメーカー様にお伝え
                                するだけでなく、これから仕入れるバイヤー様の
                                参考にもなる、リアルな声を収集しています。
                            </p>
                            <p className="md:mt-16 mt-10">試食BAR アサクサ</p>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-[1120px] mx-auto text-left md:space-y-20 space-y-10">
                    <div>
                        <p className="">
                            ▼バイヤーの皆様へ<br />
                            <span className="font-bold">AIコンシェルジュが、<br className="md:hidden" />あなたの仕入れを革新します</span>
                        </p>
                        <p className="md:mt-8 mt-6">
                            「いつも同じような商品ばかり…」<br />
                            「新しい売りの商品をどう探せば？」<br />
                            そんな悩みに、当サイトのAIコンシェルジュがお応えします。<br />
                            閲覧履歴や興味関心から、「まだ見ぬ逸品」との出会いを創出いたします。<br />
                            気になる商品を見つけたら、ワンクリックでメーカーへお問い合わせで<br />
                            スピーディな仕入れ体験を実現いたします。
                        </p>
                    </div>
                    <div>
                        <p className="">
                            ▼メーカーの皆様へ<br />
                            <span className="font-bold">貴社のこだわりを、<br className="md:hidden" />全国のバイヤー様へ届けます</span>
                        </p>
                        <p className="md:mt-8 mt-6">
                            素晴らしい商品を作っていても、<br />
                            販路の開拓には多大なコストと労力がかかります。<br />
                            当サイトでは新しい出会いを求める全国の意欲的なバイヤー様に、<br />
                            貴社の商品をアピールできます。<br />
                            AIによる最適なマッチングで、商品の価値を理解してくれる<br />
                            相手からの問い合わせが、新たなビジネスの扉を開きます。
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
