import { ReactNode } from "react";
import SectionWrap from "../common/sectionWrap";


type FeaturePropsType = {
    id: string;
    image: string;
    title: string;
    text: string;
    note: string;
};
function Feature({
    id,
    image,
    title,
    text,
    note
    }: FeaturePropsType) {
    return (
        <div className="relative border-2 border-[#FDD300] [box-shadow:0px_4px_30px_0px_rgba(0,_0,_0,_0.10)] rounded-[20px] px-4 md:px-5 pt-4 md:pt-5 pb-5 md:pb-7">
            <div className="absolute md:w-[60px] w-[50px] h-[55px] md:h-[66px] bg-[url('/images/feature-label.png')] bg-cover top-0 left-4 flex flex-col items-center justify-center pb-2">
                <p className="font-medium text-[8px] leading-none">FEATURE</p>
                <p className="font-black md:text-[38px] text-[20px] leading-none">{id}</p>
            </div>
            <figure>
                <img className="rounded-[10px]" src={image} alt={title} />
            </figure>
            <h5 className="font-bold md:text-[20px] text-[16px] md:mt-6 mt-4 min-h-[60px] flex items-center">{title}</h5>
            <p className="font-medium md:text-[18px] text-[14px] mt-2">{text}</p>
            <p className="bg-[#FFF0A6] rounded-[10px] border border-dashed min-h-[78px] border-[#FDD300] font-medium md:text-[18px] text-[14px] mt-3 p-3">{note}</p>
        </div>
    );
}

export default function SectionFeatures() {
    return (
        <SectionWrap anchor="features" number="2" title="５FEATURES" content={<>容量スッキリ開放感<br />次世代ストレージって何？</>}>
            <div className="md:pt-24 pt-8 px-5 md:pb-[64px] pb-10">
                <div className="grid w-full max-w-[380px] md:max-w-[820px] mx-auto md:grid-cols-2 md:gap-y-14 gap-y-8 gap-x-12">
                    <Feature
                        id="1"
                        image="/images/img-feature-01.png"
                        title="家族で使える！100年買い切り型で人生で必要なストレージを確保！"
                        text="自分、家族の大切な思い出をまるごと全部残せます。"
                        note="ずっと使ってサブスク不要の人生を歩もう🎵"
                    />
                    <Feature
                        id="2"
                        image="/images/img-feature-02.png"
                        title="必要な容量だけ買えて、追加もできる！"
                        text="容量が足りなくなったら簡単に追加購入できます。"
                        note="デジタルライフの生きづらさをスッキリ解決🎵"
                    />
                    <Feature
                        id="3"
                        image="/images/img-feature-03.png"
                        title="大切なデータの保管場所としての機能を完備！"
                        text="大切なデータを削除する必要はありません。"
                        note="心ゆくまでまるごと保管🎵
                        "
                    />
                    <Feature
                        id="4"
                        image="/images/img-feature-04.png"
                        title="世界のどこでも利用可能！"
                        text="アクセス拒否されないから、いつでもどこでもデータ保存。"
                        note="旅の節目で安心バックアップ🎵
                        "
                    />
                    <Feature
                        id="5"
                        image="/images/img-feature-05.png"
                        title="最短即日利用可能！"
                        text="申し込み後は購入〜初期設定完了まで最短即日で対応。"
                        note="すぐに使って容量問題から解放されてください🎵"
                    />
                </div>
            </div>
        </SectionWrap>
    );
  }