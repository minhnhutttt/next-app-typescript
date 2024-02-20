"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import SectionTitle from "../../common/sectionTitle";

export default function SectionInformation() {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <section className="pt-[30px] relative pb-[100px] md:pb-[160px]">
      <SectionTitle
        reverse
        type={
          <span className="[font-size:_clamp(60px,13.333vw,100px)] md:text-[6.944vw] xl:text-[100px] tracking-[-0.08em] md:leading-[1.3]">
            Information
          </span>
        }
        title={<>次世代名刺作成には何が必要？</>}
      >
        <div className="flex max-lg:flex-col items-center max-lg:gap-4 w-full max-w-[728px] mx-auto pt-10 max-md:pb-8 lg:pt-[72px] md:pb-[70px] px-5">
          <figure>
            <img
              className="max-md:max-w-[140px] max-xl:max-w-[170px]"
              src="/images/image-information.png"
              alt=""
            />
          </figure>
          <div className="flex-1">
            <h5 className="md:text-[40px] text-[28px] font-bold">
              フォーム入力内容を
              <br />
              一覧でチェック
            </h5>
          </div>
        </div>
      </SectionTitle>
      <div
        ref={animateRefs}
        className="opacity-0 w-full max-w-[1035px] mx-auto flex max-md:flex-col items-center justify-center mt-8 px-5 lg:gap-[90px] gap-10"
      >
        <div className="flex flex-col items-center">
          <figure>
            <img
              className="max-md:max-w-[260px]"
              src="/images/image-phone-qr.png"
              alt=""
            />
          </figure>
          <p className="md:text-[16px] text-[12px] font-bold">
            ※任意の情報はすべて入力されることを推奨しています。
            <br />
            というテキストの下です。
          </p>
        </div>
        <div className="flex-1">
          <p className="md:text-[24px] text-[18px] font-bold border-b border-black py-2.5">
            デジタル素材（画像）
          </p>
          <div className="px-2 5">
            <p className="pt-3 md:pb-11 pb-6 md:text-[18px] text-[15px]">
              NFT名刺の顔とも言える場所に設定する画像素材です。一般的な名刺の場合、ロゴなどが使用されます。
              <br />
              <span className="md:text-[16px] text-[13px]">
                ※画像は500x500px以上(容量10Mまで)のjpg、pngが登録可能です。
              </span>
            </p>
          </div>
          <p className="md:text-[24px] text-[18px] font-bold border-b border-black py-2.5">
            名刺情報
          </p>
          <div className="py-3  md:text-[18px] text-[15px] px-2.5">
            ● 必須情報
            <br />
            名前、NFT名刺受取用ウォレットアドレス
            <br />
            <span className="md:text-[17px] text-[14px]">
              ※DIVER Biz（ダイバービズ：次世代名刺のアプリ）の名刺受取アドレス
            </span>
            <br />
            <br />
            ● 任意情報
            <br />
            名前のふりがな、会社名、部署・役職、郵便番号、住所、電話番号、携帯番号、メールアドレス、営業時間、ウェブサイトリンク、SNSリンク、事業内容/業務内容、その他
            <br />
            <span className="md:text-[16px] text-[13px]">
              ※任意の情報はすべて入力されることを推奨しています。
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
