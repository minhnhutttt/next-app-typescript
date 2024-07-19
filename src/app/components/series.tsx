"use client";

import Button from "@/components/button";

const Series = () => {
  return (
    <section id="series" className="relative px-5 bg-white md:rounded-t-[100px] rounded-t-[50px] md:pb-[114px] pb-[60px]">
        <div className="w-full md:max-w-[1360px] max-w-[440px] mx-auto md:pt-[80px] pt-[50px]">
            <h3 className="text-center md:text-[48px] text-[32px] font-black">次世代シリーズ</h3>
            <div className="flex flex-wrap justify-center gap-x-10 md:gap-y-[144px] gap-y-[44px] mt-16 md:mt-[132px]">
                <div data-scroll className="ani-fade-up w-[660px] rounded-[30px] border-[7px] border-[#00BF6F] bg-[#F0FFF9] px-5 md:px-[30px]">
                    <h4 data-scroll className="ani-scale !delay-300 flex items-center justify-center md:-mt-14 -mt-8">
                        <img className="max-md:h-[56px]" src="/assets/images/series-ttl-01.png" alt="次世代マップ" />
                    </h4>
                    <p className="text-center md:text-[22px] text-[16px] font-extrabold border-b-2 border-dashed border-[#0DCD7C] p-2 mt-4 md:mt-6">ゲームみたいな現実世界を<br className="md:hidden" />楽しみ尽くせ！</p>
                    <p className="md:text-[18px] text-[15px] py-4 md:pt-7 md:h-[191px]">
                        全く新しいゲームのようなおトク体験！<br />次世代マップで決められた期間内に定められた場所にいかないともらえないNFTや、実物の商品と交換できるNFTをゲットしよう！<br />NFTの受け取り方は DIVER WalletをインストールしてQRコードを読み取るだけ！
                    </p>
                    <div className="flex justify-center py-7 md:py-10">
                        <Button href="https://map.new-generation.app/" rect="bg-[#00BF6F]">次世代マップを見る</Button>
                    </div>
                </div>
                <div data-scroll className="ani-fade-up w-[660px] rounded-[30px] border-[7px] border-[#E70012] bg-[#FFF7F7] px-5 md:px-[30px]">
                    <h4 data-scroll className="ani-scale !delay-300 flex items-center justify-center md:-mt-14 -mt-8">
                        <img className="max-md:h-[56px]" src="/assets/images/series-ttl-02.png" alt="次世代タグ" />
                    </h4>
                    <p className="text-center md:text-[22px] text-[16px] font-extrabold border-b-2 border-dashed border-[#E70012] p-2 mt-4 md:mt-6">ピッ！でもらえるNFT！</p>
                    <p className="md:text-[18px] text-[15px] py-4 md:pt-7 md:h-[191px]">
                    次世代タグとは「NFC(近距離無線通信)チップ」が入ったシールです。<br />例えば電子決済のように、スマートフォンを支払い機に近づけることで決済ができる技術がNFCです。次世代タグにピッ！とするだけで、簡単にNFTを受け取ることができます。<br /><br />渡すNFTも、アプリを使って簡単に設定することが可能です。
                    </p>
                    <div className="flex justify-center py-7 md:py-10">
                        <Button href="https://tag.new-generation.app/" rect="bg-[#E70012]">次世代タグを見る</Button>
                    </div>
                </div>
                <div data-scroll className="ani-fade-up w-[660px] rounded-[30px] border-[7px] border-[#FF7F02] bg-[#FFFCF1] px-5 md:px-[30px]">
                    <h4 data-scroll className="ani-scale !delay-300 flex items-center justify-center md:-mt-14 -mt-8">
                        <img className="max-md:h-[56px]" src="/assets/images/series-ttl-03.png" alt="次世代鑑定団" />
                    </h4>
                    <p className="text-center md:text-[22px] text-[16px] font-extrabold border-b-2 border-dashed border-[#FF7F02] p-2 mt-4 md:mt-6">これ以上の安心ある！？<br className="md:hidden" />発行元を完全証明！</p>
                    <p className="md:text-[18px] text-[15px] py-4 md:pt-7 md:h-[191px]">
                    次世代鑑定団とは、NFT の「ニセモノ」に関するトラブルを解決すべく作られた鑑定団です！<br />
                    <br />
                    次世代鑑定団が、安心・安全をご提供し、あなたのNFTライフを全力で応援します！
                    </p>
                    <div className="flex justify-center py-7 md:py-10">
                        <Button href="https://kanteidan.new-generation.app/" rect="bg-[#FF7F02]">次世代鑑定団を見る</Button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Series;
