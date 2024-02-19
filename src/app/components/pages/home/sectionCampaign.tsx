"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import SectionTitle from "../../common/sectionTitle";

export default function SectionCampaign() {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <section className="pt-[30px] relative">
      <SectionTitle
        type={
          <span className="[font-size:_clamp(60px,13.333vw,100px)] md:text-[6.944vw] xl:text-[100px] md:leading-[1.3]">
            Campaign
          </span>
        }
        title={
          <>
            次世代名刺でビジネスを
            <br />
            飛躍させよう
          </>
        }
      >
        <div className="lg:px-[56px] px-8 w-full pt-[80px] lg:pt-[120px] md:pb-[130px] pb-[10vw]">
          <div className="flex max-lg:flex-col justify-center items-center w-full md:max-w-[682px] max-w-[400px] mx-auto gap-4">
            <div className="relative">
              <div className="flex md:ml-10">
                <div className="xl:w-[392px] w-[320px] h-[82px] xl:h-[100px] flex items-center justify-center">
                  <img src="/images/image-campaign-sub.png" alt="" />
                </div>
              </div>
              <h5 className="xl:text-[40px] lg:text-[32px] text-[28px] font-bold xl:-mt-5 tracking-widest">
                全てのビジネスマン
                <br />
                に未来を実装！
              </h5>
            </div>
            <figure className="lg:ml-[-60px] max-lg:w-full max-lg:flex max-lg:justify-end max-md:mt-0 max-lg:mt-[-70px]">
              <img
                className="max-lg:max-w-[18vw] max-md:max-w-[200px]"
                src="/images/image-campaign.png"
                alt=""
              />
            </figure>
          </div>
        </div>
      </SectionTitle>
      <div
        ref={animateRefs}
        className="opacity-0 w-full max-w-[400px] md:max-w-[960px] mx-auto md:mt-10 mt-16 px-5"
      >
        <div className="text-center flex items-center justify-center md:text-[120px] text-[60px] font-bold leading-tight gap-2">
          <span className="bg-[#22ABF3] px-2">無</span>
          <span className="bg-[#F3227A] px-2"> 料</span>
          <span className="md:text-[100px] text-[50px]">で</span>
        </div>
        <div className="text-center md:text-[100px] text-[45px] font-bold leading-none tracking-widest">
          <span className="md:text-[155px] text-[64px] font-black">200</span>
          枚つくる
        </div>
        <p className="text-center md:text-[20px] text-[14px] font-bold mt-2 tracking-widest">
          ※名刺情報のフォーム入力が必要です
        </p>
        <div className="flex justify-center max-md:flex-col md:gap-[38px] gap-5 mt-10 md:mt-[95px]">
          <a
            href="/"
            className="w-full h-[60px] md:w-[371px] md:h-[75px] flex items-center justify-center border-[3px] border-black bg-[#F4EA00] rounded-[44px] md:text-[24px] text-[16px] font-bold gap-2.5 tracking-[0.3em]"
          >
            <span>名刺作成こちら</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="17"
              viewBox="0 0 12 17"
              fill="none"
            >
              <path
                d="M10.8764 7.64517C11.4295 8.04431 11.4295 8.8678 10.8764 9.26694L1.58521 15.9723C0.923843 16.4496 1.87809e-07 15.977 2.2346e-07 15.1614L8.0966e-07 1.75071C8.45312e-07 0.9351 0.923842 0.462525 1.58521 0.939824L10.8764 7.64517Z"
                fill="black"
              />
            </svg>
          </a>
          <a
            href="/"
            className="w-full h-[60px] md:w-[345px] md:h-[75px] flex items-center justify-center border-[3px] border-[#22ABF3] bg-white text-[#22ABF3] rounded-[44px] md:text-[22px] text-[16px] font-bold gap-2.5"
          >
            <span>作成・受取り方法を見る</span>
          </a>
        </div>
        <div className="flex justify-center my-8">
          <img
            className="max-md:w-[80px]"
            src="/images/image-arrow.png"
            alt=""
          />
        </div>
        <div className="flex max-md:flex-col md:gap-[60px] gap-8">
          <div className="md:w-1/2 md:border-[6px] border-[3px] border-[#22ABF3] bg-white p-8 rounded-[30px]">
            <p className="md:text-[36px] text-[24px] font-bold py-5 md:py-10 border-b border-[#22ABF3]">
              200枚以上必要な方へ
            </p>
            <p className="md:text-[18px] text-[14px] font-medium py-4 md:py-7">
              公式LINEにてサポート対応中です！お友だち登録後、お気軽にメッセージをお送りください。その他ご質問やご相談も受け付けております！
            </p>
          </div>
          <div className="md:w-1/2 bg-[#00B900] flex flex-col items-center py-5 justify-center rounded-[20px]">
            <div className="flex justify-center">
              <p className="text-white font-dela md:text-[32px] text-[24px] border-b border-white md:pb-3 pb-1.5">
                次世代サポート
              </p>
            </div>
            <figure className="pt-3 md:pt-5">
              <img src="/images/girl.png" alt="" />
            </figure>
            <p className="text-white md:text-[18px] text-[16px] py-4">
              わからないことはLINEで
              <br />
              何でもお問い合わせください。
            </p>
            <div className="w-full flex justify-center h-[64px]">
              <a
                href="https://lin.ee/6PgmBNE"
                target="_blank"
                className="w-full max-w-[262px] h-[60px] gap-2 relative rounded-[10px] md:text-[18px] text-[14px] text-[#00B900] font-black bg-white flex items-center justify-center hover:border-b border-b-[4px] hover:mt-[3px] border-[#005800] duration-200"
              >
                <figure>
                  <img
                    className="max-md:w-6"
                    src="/images/ic-line.png"
                    alt=""
                  />
                </figure>
                <span>お問い合わせ</span>
                <svg
                  className="absolute right-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="16"
                  viewBox="0 0 13 16"
                  fill="none"
                >
                  <path
                    d="M11.4847 6.29703C12.753 7.07811 12.753 8.92189 11.4847 9.70297L3.23626 14.7827C1.90374 15.6033 0.187499 14.6447 0.187499 13.0797L0.1875 2.92026C0.1875 1.35533 1.90374 0.396673 3.23626 1.21729L11.4847 6.29703Z"
                    fill="#00B900"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
