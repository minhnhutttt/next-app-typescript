"use client";
import useScrollAnimations from "@/hooks/useScrollAnimations";
import FormInput from "./formInput";
import FormArea from "./formArea";
export default function FormContent() {
  return (
    <div className="px-5 md:mb-[160px] mb-16 font-noto" id="top">
      <div
        className="w-full max-w-[1080px] mx-auto"
      >
        <div className="bg-white md:pt-[60px] md:pb-[100px] pt-[30px] pb-10 px-5">
          <p className="text-center md:text-[28px] text-[18px] font-black tracking-widest ">
            名刺情報の入力
          </p>
          <p className="text-center md:text-[20px] text-[16px]">
            <span className="md:text-[26px] text-[20px] font-bold relative top-1.5 text-[#ED002B]">
              *
            </span>
            マークは必須項目です。
          </p>
          <div className="w-full max-w-[900px] mx-auto md:mt-[66px] space-y-[37px]">
            <FormInput
              type="text"
              label="ご担当者様名"
              required
              name=""
              placeholder="例：山田　太郎"
            />
            <FormInput
              type="text"
              label="ふりがな"
              name=""
              placeholder="例：やまだ　たろう"
            />
            <FormInput
              type="text"
              label="会社・組織名"
              name=""
              placeholder="例：株式会社○○○○○○"
            />
            <FormInput
              type="text"
              label="部署・役職"
              name=""
              placeholder="例：代表取締役"
            />
            <FormInput
              type="text"
              label="郵便番号"
              sm
              name=""
              placeholder="123-4567"
            />
            <FormInput
              type="text"
              label="住所"
              name=""
              placeholder="新宿区品川１丁目２−３"
            />
            <FormInput
              type="text"
              label="電話番号"
              name=""
              placeholder="例：03-1234-5678"
            />
            <FormInput
              type="text"
              label="携帯番号"
              name=""
              placeholder="例：090-1234-5678"
            />
            <FormInput
              type="text"
              label="メールアドレス"
              name=""
              placeholder="例：abc@sample.com"
            />
            <FormInput
              type="text"
              label="営業時間"
              name=""
              placeholder="マンション名101"
            />
            <FormInput
              type="text"
              label="ウェブサイト"
              name=""
              placeholder="マンション名101"
            />
            <FormInput
              type="text"
              label="SNS"
              name=""
              placeholder="マンション名101"
            />
            <FormArea
              label="事業内容/業務内容"
              name=""
              placeholder="事業内容やご自身が担当する業務内容など、相手に伝えたいことを自由にご記入ください。"
            />
            <FormArea
              label="その他"
              name=""
              placeholder="会社概要や、追加情報などがあればご記入ください。"
            />
          </div>
        </div>
        <div className="flex justify-center md:mt-[70px] mt-10">
          <button
            type="button"
                className="flex items-center justify-center mx-auto md:w-[300px] w-[200px] h-[44px] md:h-[70px] rounded-[50px] bg-[#101010] md:text-[20px] text-[15px] font-black text-[#7FFF00] outline-1 outline outline-[#7FFF00] md:outline-offset-[-5px] outline-offset-[-3px] tracking-widest [box-shadow:0px_0px_30px_0px_rgba(127,_255,_0,_0.30)] gap-2"
              >
                <span>入力内容確認</span>
                <svg
                  className="max-md:w-5"
                  width="38"
                  height="11"
                  viewBox="0 0 38 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.51044 9.31887H36.2358M28.5104 1.01018L36.4896 8.98977"
                    stroke="#7FFF00"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
        </div>
      </div>
    </div>
  );
}
