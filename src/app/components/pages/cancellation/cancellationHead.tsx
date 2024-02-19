"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
export default function CancellationHead() {
  const animateRefs = useScrollAnimation("zoom");
  return (
    <div className="md:mt-[170px] mt-[120px] px-5 md:mb-[88px] mb-11">
      <div className="w-full md:max-w-[1106px] max-w-[480px] mx-auto">
        <h3
          ref={animateRefs}
          className="opacity-0 text-center md:text-[42px] text-[24px] font-bold"
        >
          ご解約を希望される方へ
        </h3>
        <div
          ref={animateRefs}
          className="opacity-0 flex items-center max-md:flex-col gap-6 md:gap-9 md:mt-[70px] mt-10"
        >
          <figure className="max-md:w-auto max-lg:w-[50%]">
            <img
              className="max-md:max-w-[320px] max-md:w-full"
              src="/images/image-cancel.png"
              alt=""
            />
          </figure>
          <div className="md:text-[18px] text-[14px] font-medium flex-1 leading-snug tracking-widest">
            次世代名刺をご愛顧いただき、誠にありがとうございます。
            <br />
            <br />
            すでにご作成済みの次世代名刺は、ご解約後も利用可能です。
            <br />
            ぜひご活用ください。
            <br />
            <br />
            次世代名刺は今後も、お客さまに満足いただけるサービス向上を目指します。
            <br />
            ご解約の理由など、ご意見・ご感想がありましたら、どうぞアンケートにお答えください。
            <br />
            <br />
            ※アンケート送信後、決済停止画面へ遷移いたします。
          </div>
        </div>
      </div>
    </div>
  );
}
