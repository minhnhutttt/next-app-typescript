"use client";

import Article from "@/components/article";

const Introduction = () => {
  return (
    <section className="relative mt-[-24vw] md:mt-[-7vw] dt:-mt-[108px]">
        <div className="bg-[url('/assets/images/bg-01.png')] max-dt:bg-right-top bg-cover md:bg-[length:100%_100%] max-md:pb-[36vw] md:h-[94.306vw] dt:h-[1358px] px-5 relative">
            <div className="flex justify-center max-md:flex-col max-md:items-center">
                <figure className="md:mt-[-5.556vw] mt-[-14vw] dt:mt-[-80px] relative z-10">
                    <img className="max-md:w-[60vw] max-dt:w-[27.708vw]" src="/assets/images/introduction-img.png" alt="" />
                </figure>
                <div className="md:flex-1 mt-[0.694vw] dt:mt-[10px] max-md:w-full md:max-w-[62.986vw] max-w-[100vw] dt:max-w-[907px] md:bg-[url('/assets/images/introduction-frame.png')] bg-[url('/assets/images/introduction-frame-sp.png')] bg-cover md:aspect-[907/429] aspect-[1053/853] bg-no-repeat md:ml-[-8.333vw] dt:ml-[-120px] flex justify-center md:justify-end px-[2vw] md:px-[2.778vw] dt:px-10 relative max-md:mt-[-10vw]">
                    <div className="flex justify-center md:justify-end pt-[24vw] md:pt-[4.167vw] dt:pt-[60px] w-full md:max-w-[48.611vw] max-w-[100vw] dt:max-w-[700px]">
                        <div className="flex-1">
                            <h4 className="text-center font-gothic font-extrabold text-[4vw] md:text-[1.944vw] dt:text-[28px] leading-tight">
                            大好きなお店の限定NFTクーポンを <br />
                            無料でゲット！
                            </h4>
                            <p className="text-center md:text-[1.319vw] text-[3vw] dt:text-[19px] leading-relaxed mt-[2vw] md:mt-5">
                                いますぐ公式LINEにDIVER Walletアドレスを送って <br />
                                近くのお店ですぐ使える特別割引クーポンをゲットしよう！<br />
                                今なら年間パスポートNFTを無料で受け取れるチャンス！
                            </p>
                            <div className="flex justify-center mt-[2.431vw] dt:mt-7">
                                <a href="/" className="w-[36vw] md:w-[22.222vw] dt:w-[320px] h-[10vw] md:h-[5.556vw] dt:h-20 bg-[#2CBE00] flex items-center justify-center rounded-[2.917vw] dt:rounded-[42px] md:text-[2.083vw] text-[3.6vw] dt:text-[30px] text-white font-bold">公式LINEへ</a>
                            </div>
                        </div>
                        <figure className="max-md:absolute max-md:top-[5vw] max-md:right-[10vw]">
                            <img className="max-dt:w-[12.431vw]" src="/assets/images/introduction-man.png" alt="" />
                        </figure>
                    </div>
                </div>
            </div>
            <div className="absolute md:top-[17.361vw] dt:top-[250px] md:left-[5.556vw] dt:left-[80px]">
                <img className="max-md:w-[30vw] max-dt:w-[17.639vw]" src="/assets/images/hand.png" alt="" />
            </div>
            <div className="flex max-md:flex-col-reverse items-center md:items-start w-full md:max-w-[80.556vw] max-w-[90vw] dt:max-w-[1160px] mx-auto mt-9">
                <div className="flex-1 flex justify-end">
                    <Article title="Campaign Questとは？" text={<>近くの場所にお得がいっぱい！<br />地図上に表示された今だけのキャンペーン情報を見逃すな！</>}>
                    Campaign Questは、地図上でお得なキャンペーンサービスを提供しているショップと、あなたを簡単に繋げるプラットフォームです。<br />
                            あなたが今いる場所の近くで開催中のキャンペーン情報を手軽にチェックできます。<br />
                            今すぐキャンペーン詳細を確認し、ワンタップでNFTクーポンをゲットしよう！
                    </Article>
                </div>
                <figure className="md:ml-[-8.611vw] dt:ml-[-124px] mt-[-2.778vw] dt:mt-[-40px]">
                    <img className="max-md:w-[70vw] max-dt:w-[39.722vw]" src="/assets/images/img-01.png" alt="" />
                </figure>
            </div>
            <div className="absolute dt:bottom-[245px] bottom-[17.014vw] left-[4.861vw]">
                <img className="w-[38.889vw]" src="/assets/images/enjoy.svg" alt="" />
            </div>
        </div>
        <div className="bg-[#FFF0F0]">
            <div className="w-full max-w-[89.583vw] dt:max-w-[1290px] mx-auto -mt-[14.931vw] dt:-mt-[215px] relative pb-[96px]">
                <div className="flex gap-4">
                    <figure className="max-dt:w-[40.972vw]">
                        <img src="/assets/images/gps-img.png" alt="" />
                    </figure>
                    <div className="flex-1 pt-[80px]">
                        <Article title="GPSで簡単にお店探し！" text={<>歩いて行ける範囲にはお得がいっぱい！</>}>
                        高精度の位置情報機能を活用して、まるで宝探しのようにお得なお店を見つけよう！<br />あなたが地図の中心です！
                        </Article>
                    </div>
                    <div className="flex justify-center absolute bottom-0 left-[34.028vw] dt:left-[490px]">
                        <figure className="max-dt:w-[34.861vw]">
                            <img src="/assets/images/gps-img2.png" alt="" />
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Introduction;
