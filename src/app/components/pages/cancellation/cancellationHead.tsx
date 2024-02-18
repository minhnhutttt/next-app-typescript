"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
export default function CancellationHead() {
  const animateRefs = useScrollAnimation("zoom");
  return (
    <div className="">
        <div className="w-full max-w-[1106px] mx-auto">
            <h3 className="text-center md:text-[42px] text-[28px] font-bold">ご解約を希望される方へ</h3>
            <div className="flex items-center max-md:flex-col gap-6 md:gap-9 md:mt-[70px] mt-10">
                <figure>
                    <img className="max-md:max-w-[320px]" src="/images/image-cancel.png" alt="" />
                </figure>
                <div className="md:text-[18px] text-[14px] font-medium">
                    次世代名刺をご愛顧いただき、誠にありがとうございます。<br />
                    <br />
                    すでにご作成済みの次世代名刺は、ご解約後も利用可能です。<br />
                    ぜひご活用ください。<br />
                    <br />
                    次世代名刺は今後も、お客さまに満足いただけるサービス向上を目指します。
                    <br />ご解約の理由など、ご意見・ご感想がありましたら、どうぞアンケートにお答えください。<br />
                    <br />
                    ※アンケート送信後、決済停止画面へ遷移いたします。
                </div>
            </div>
        </div>
    </div>
  );
}
