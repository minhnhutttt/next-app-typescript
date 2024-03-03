"use client";
import SectionTitle from "../../common/sectionTitle";
import Card from "./components/card";

export default function Guide() {
  return (
    <section className="bg-[#F7F7F7] px-5 pt-10 pb-14 md:pt-16 md:pb-20">
        <div className="w-full max-w-[420px] md:max-w-[1320px] mx-auto">
            <SectionTitle subTitle="こんなに便利">
            RWAタグの利用シーン
            </SectionTitle>
            <div className="grid md:grid-cols-3 justify-center gap-5 lg:gap-[30px] mt-6">
                <Card title="イベントチケットに" image="/images/guide-01.jpg">
                会場入場の際にスキャンすることでNFTを獲得することができます。さらに、イベントの魅力を高める限定デジタルコンテンツや特典を提供することも可能です。
                </Card>
                <Card title="キープボトルに" image="/images/guide-02.jpg">
                お店もお客様もどのボトルか完全に把握でき、適切に管理・提供することができます。友人にNFTを転送して、キープボトルをプレゼントすることも可能です。
                </Card>
                <Card title="車両の管理に" image="/images/guide-03.jpg">
                車両の所有権の証明、メンテナンス履歴の追跡、そして盗難防止に役立つ情報をブロックチェーンに記録することで、自動車の信頼性とセキュリティを高め、売買時の透明性を提供できます。
                </Card>
            </div>
        </div>
    </section>
  );
}
