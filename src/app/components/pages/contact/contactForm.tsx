"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import FormInput from "../../form/formInput";
import FormArea from "../../form/formArea";
export default function ContactForm() {
  const animateRefs = useScrollAnimation("zoom");
  return (
    <div className="px-5 md:mb-[160px] mb-16 font-noto" id="top">
        <div ref={animateRefs} className="opacity-0 w-full max-w-[1080px] mx-auto">
            <div className="bg-white md:pt-[60px] md:pb-[100px] pt-[30px] pb-10 px-5">
                <p className="text-center md:text-[28px] text-[18px] font-black tracking-widest ">名刺情報の入力</p>
                <p className="text-center md:text-[20px] text-[16px]"><span className="md:text-[26px] text-[20px] font-bold relative top-1.5 text-[#ED002B]">*</span>マークは必須項目です。</p>
                <div className="w-full max-w-[900px] mx-auto md:mt-[66px] space-y-[37px]">
                    <FormInput
                        type="text"
                        label="名前"
                        required
                        name=""
                        value=""
                        placeholder="例：山田　太郎"
                    />
                    <FormInput
                        type="text"
                        label="ふりがな"
                        name=""
                        value=""
                        placeholder="例：やまだ　たろう"
                    />
                    <FormInput
                        type="text"
                        label="会社名"
                        name=""
                        value=""
                        placeholder="例：株式会社○○○○○○"
                    />
                    <FormInput
                        type="text"
                        label="部署・役職"
                        name=""
                        value=""
                        placeholder="例：代表取締役"
                    />
                    <FormInput
                        type="text"
                        label="郵便番号"
                        sm
                        name=""
                        value=""
                        placeholder="123-4567"
                    />
                    <FormInput
                        type="text"
                        label="住所"
                        name=""
                        value=""
                        placeholder="新宿区品川１丁目２−３"
                    />
                    <FormInput
                        type="text"
                        label="電話番号"
                        name=""
                        value=""
                        placeholder="例：03-1234-5678"
                    />
                    <FormInput
                        type="text"
                        label="携帯番号"
                        name=""
                        value=""
                        placeholder="例：090-1234-5678"
                    />
                    <FormInput
                        type="text"
                        label="メールアドレス"
                        name=""
                        value=""
                        placeholder="例：abc@sample.com"
                    />
                    <FormInput
                        type="text"
                        label="営業時間"
                        name=""
                        value=""
                        placeholder="マンション名101"
                    />
                    <FormInput
                        type="text"
                        label="ウェブサイト"
                        name=""
                        value=""
                        placeholder="マンション名101"
                    />
                    <FormInput
                        type="text"
                        label="SNS"
                        name=""
                        value=""
                        placeholder="マンション名101"
                    />
                    <FormArea
                        label="事業内容/業務内容"
                        name=""
                        value=""
                        placeholder="事業内容やご自身が担当する業務内容など、相手に伝えたいことを自由にご記入ください。"
                    />
                    <FormArea
                        label="その他"
                        name=""
                        value=""
                        placeholder="会社概要や、追加情報などがあればご記入ください。"
                    />
                </div>
            </div>
            <div className="flex justify-center md:mt-[70px] mt-10">
            <button type="button" className="bg-[#000748] w-[240px] h-[60px] md:w-[300px] md:h-[70px] border-[3px] border-white rounded-[44px] font-bold md:px-16 leading-none px-10 md:py-4 py-3 flex items-center justify-center gap-1.5 md:gap-2.5 text-white md:text-[20px] text-[16px]">
                        <span>入力内容確認</span>
                    </button>
            </div>
        </div>
    </div>
  );
}
