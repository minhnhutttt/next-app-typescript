"use client";

import PageTitle from "@/components/pageTitle";
import useScrollAnimations from "@/hooks/useScrollAnimations";

export default function CommerceLaw() {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="bg-[#2639A6]">
      <PageTitle>特定商取引法に基づく表記</PageTitle>
      <div className="px-5 py-20 md:py-[104px] flex justify-center items-center">
        <p className="text-white md:text-[20px] text-[16px]">
          販売業者 <br />
          株式会社ZEXAVERSE（ゼクサバース）
          <br />
          <br />
          所在地
          <br />
          東京都千代田区麹町3−5−2ビュレックス麹町205
          <br />
          <br />
          連絡先
          <br />
          下記メールよりお問い合わせください
          <br />
          <br />
          公開メールアドレス
          <br />
          info@zexaverse.co.jp
          <br />
          <br />
          ホームページURL
          <br />
          <a
            href="https://zexaverse.co.jp/"
            target="_blank"
            className="underline"
          >
            https://zexaverse.co.jp/
          </a>
          <br />
          <br />
          販売価格
          <br />
          商品詳細ページに記載されている価格になります。
          <br />
          <br />
          商品代金以外の必要料金
          <br />
          なし
          <br />
          <br />
          引き渡し時期
          <br />
          ご指定はできません。
          <br />
          <br />
          お支払方法
          <br />
          銀行振込
          <br />
          <br />
          返品期限
          <br />
          商品の性質上商品の返品・交換は応じられません。
        </p>
      </div>
    </section>
  );
}
