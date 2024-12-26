"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import FormBlock from "@/components/form/formBlock";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import Button from "@/components/button";
import FormLabel from "@/components/form/formLabel";

interface FormData {
  birthday: string;
  work: string;
  personality: string;
  hobbies: string;
  planneDate: string;
  budget: string;
  food1: string;
  food2: string;
  areas: string;
  atmosphere: string;
  transportation: string;
  avoid: string;
}

export default function Personal() {
  const router = useRouter();

  const [birthday, setBirthday] = useState<Date>();
  const [planneDate, setPlanneDate] = useState<Date>();
  const [isSaving, setIsSaving] = useState<boolean>(false);

  const [formData, setFormData] = useState<FormData>({
    birthday: "",
    work: "",
    personality: "",
    hobbies: "",
    planneDate: "",
    budget: "",
    food1: "",
    food2: "",
    areas: "",
    atmosphere: "",
    transportation: "",
    avoid: "",
  });


  const handleChange = (key: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const convertedFormData: Record<string, string> = Object.fromEntries(
      Object.entries(formData).map(([key, value]) => [key, String(value)])
    );

    const query = new URLSearchParams(convertedFormData).toString();
    router.push(`/result?${query}`);
  };
  return (
    <main>
      <div className="p-5 bg-[url('/assets/images/bg.png')] bg-cover bg-right-bottom bg-no-repeat h-screen relative">
        <div className="font-['Hiragino_Mincho_ProN'] flex flex-col h-full">
          <div className="flex justify-center">
            <h1 className="relative text-center text-[18px] md:text-[clamp(5px,3.889vmin,35px)] font-semibold max-md:pl-14">
              <span>
                12個の質問にお答えください <br className="max-md:hidden" />
                AIコンシェルジュが最適のプランをご提案します
              </span>
            </h1>
          </div>
          <div className="w-full max-w-[460px] mx-auto mt-[clamp(10px,4.444vmin,40px)] flex-1 flex flex-col overflow-hidden">
            <form action="" onSubmit={handleSubmit} className="w-full flex flex-col h-full">
              <div className="overflow-auto max-w-[390px] mx-auto divide-y divide-[#ACACAC] flex-1">
                <div className="py-5 relative">
                  <div className="absolute right-2 space-y-2">
                    <div className="flex items-center justify-end text-[12px] gap-2">
                      <p>必須入力</p>
                      <p className="size-[26px] bg-[#FFFCDD] border border-[#9A9A9A] rounded-lg"></p>
                    </div>
                    <div className="flex items-center justify-end text-[12px] gap-2">
                      <p>任意入力</p>
                      <p className="size-[26px] bg-[#EBFCFE] border border-[#9A9A9A] rounded-lg"></p>
                    </div>
                  </div>
                  <FormLabel number="1" label="あなたの誕生日" />
                  <Popover placement="bottom">
                    <PopoverHandler>
                      <label htmlFor="birthday" className="relative h-[60px] w-full block text-[13px] transition rounded-md duration-300 ease  border border-[#2687E2] shadow-sm overflow-hidden px-3 pt-1.5 bg-[#EBFCFE]">
                        <span className="block mb-1">(任意) あなたの誕生日を選んでください</span>
                        <input
                          className="w-full focus:outline-none bg-transparent font-bold h-6  focus:bg-none"
                          value={birthday ? format(birthday, "yyyy/MM/dd") : format(new Date(), "yyyy/MM/dd")}
                          readOnly
                        />
                        <span className="absolute right-2.5 top-2.5 cursor-pointer">
                          <img src="/assets/images/ic-calendar.svg" alt="" />
                        </span>
                      </label>
                    </PopoverHandler>
                    <PopoverContent>
                      <DayPicker
                      id="birthday"
                        mode="single"
                        selected={birthday}
                        onSelect={(date) => {
                          setBirthday(date);
                          handleChange(
                            "birthday",
                            date ? format(date, "yyyy/MM/dd") : ""
                          );
                        }}
                        captionLayout="dropdown"
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="py-5">
                  <FormBlock required id="work" number="2" label="あなたの職種" inputText="(必須) あなたの職業を選んでください">
                        <select name="work" id="work" className="w-full focus:outline-none bg-transparent font-bold h-6  focus:bg-none" onChange={(e) => handleChange("work", e.target.value)}>
                          <option value="学生">学生</option>
                          <option value="浪人生">浪人生</option>
                          <option value="社会人">社会人</option>
                          <option value="定年後">定年後</option>
                          <option value="答えたくない">答えたくない</option>
                        </select>
                  </FormBlock>
                </div>
                <div className="py-5">
                  <FormBlock id="personality" number="3" label="あなたのパーソナリティー" inputText="(任意) あなたのパーソナリティーを選んでください"
                  >
                    <input id="personality"  onChange={(e) => handleChange("personality", e.target.value)} className="w-full focus:outline-none bg-transparent font-bold h-6  focus:bg-none" />
                  </FormBlock>
                </div>
                <div className="py-5">
                  <FormBlock id="hobbies" number="4" label="あなたの趣味・興味" inputText="(任意) あなたの趣味・興味があること (任意最大100文字)"
                  >
                    <input id="hobbies"  onChange={(e) => handleChange("hobbies", e.target.value)} className="w-full focus:outline-none bg-transparent font-bold h-6  focus:bg-none" />
                  </FormBlock>
                </div>
                <div className="py-5">
                  <FormLabel number="5" label="プラン計画予定日" />
                  <Popover placement="bottom">
                    <PopoverHandler>
                      <label htmlFor="planneDate" className="relative h-[60px] w-full block text-[13px] transition rounded-md duration-300 ease border border-[#FF513E] shadow-sm overflow-hidden px-3 pt-1.5 bg-[#FCFAE7]">
                        <span className="block mb-1">(必須) プランがほしい日付けを選んでください</span>
                        <input
                          className="w-full focus:outline-none bg-transparent font-bold h-6  focus:bg-none"
                          value={planneDate ? format(planneDate, "yyyy/MM/dd") : format(new Date(), "yyyy/MM/dd")}
                          readOnly
                        />
                        <span className="absolute right-2.5 top-2.5 cursor-pointer">
                          <img src="/assets/images/ic-calendar.svg" alt="" />
                        </span>
                      </label>
                    </PopoverHandler>
                    <PopoverContent>
                      <DayPicker
                      id="planneDate"
                        mode="single"
                        selected={planneDate}
                        onSelect={(date) => {
                          setPlanneDate(date);
                          handleChange(
                            "planneDate",
                            date ? format(date, "yyyy/MM/dd") : ""
                          );
                        }}
                        captionLayout="dropdown"
                        endMonth={new Date(2030, 12)}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="py-5">
                  <FormBlock required id="budget" number="6" label="プランの予算の上限金額" inputText="(必須) 1日の上限予算を決めてください 例：10,000円"
                  >
                    <input id="budget" onChange={(e) => handleChange("budget", e.target.value)} className="w-full focus:outline-none bg-transparent font-bold h-6  focus:bg-none" />
                  </FormBlock>
                </div>
                <div className="py-5">
                <FormBlock required id="food1" number="7" label="あなたの好きなジャンルの食事①" inputText="(必須) あなたが一番好きな食事のジャンルを選んでください"
                  >
                    <input id="food1" onChange={(e) => handleChange("food1", e.target.value)} className="w-full focus:outline-none bg-transparent font-bold h-6  focus:bg-none" />
                  </FormBlock>
                </div>
                <div className="py-5">
                <FormBlock id="food2" number="8" label="あなたの好きなジャンルの食事②" inputText="(任意) あなたが2番目に好きな食事のジャンルを選んでください"
                  >
                    <input id="food2" onChange={(e) => handleChange("food2", e.target.value)} className="w-full focus:outline-none bg-transparent font-bold h-6  focus:bg-none" />
                  </FormBlock>
                </div>
                <div className="py-5">
                <FormBlock id="areas" number="9" label="あなたが特に行きたいエリア" inputText="渋谷区、東京23区、大阪、(任意入力最大100文字)"
                  >
                    <input id="areas" onChange={(e) => handleChange("areas", e.target.value)} className="w-full focus:outline-none bg-transparent font-bold h-6  focus:bg-none" />
                  </FormBlock>
                </div>
                <div className="py-5">
                <FormBlock id="atmosphere" number="10" label="あなたの希望するアクティビティの雰囲気" inputText="あなたが過ごしたい休日プランの雰囲気を選択してください"
                  >
                    <input id="atmosphere" onChange={(e) => handleChange("atmosphere", e.target.value)} className="w-full focus:outline-none bg-transparent font-bold h-6  focus:bg-none" />
                  </FormBlock>
                </div>
                <div className="py-5">
                  <FormBlock id="transportation" number="11" label="あなたの移動手段" inputText="あなたのメインの移動手段を選んでください"
                  >
                    <input id="transportation" onChange={(e) => handleChange("transportation", e.target.value)} className="w-full focus:outline-none bg-transparent font-bold h-6  focus:bg-none" />
                  </FormBlock>
                </div>
                <div className="py-5">
                <FormBlock id="avoid" number="12" label="あなたが避けたいこと" inputText="人混みが苦手、特定の食材が苦手、歩きすぎは避けたいなど(任意入力最大1000文字)"
                  textarea>
                    <textarea id="avoid"  onChange={(e) => handleChange("avoid", e.target.value)} className="w-full focus:outline-none bg-transparent font-bold h-9"></textarea>
                  </FormBlock>
                </div>
              </div>
              <div className="">
                <div className="flex justify-end my-[clamp(10px,4.444vmin,40px)]">
                  <button type="reset" className="text-[15px] py-2.5 px-4 border border-[#75A5BE] rounded-xl bg-[#BEF4EE]">入力を削除する</button>
                </div>
                <div className="flex justify-center gap-5 ">
                  <Button href="/partner" kind="link">
                    相手との <br />
                    プランを<br />
                    お願いする
                  </Button>
                  <Button type="submit" kind="button" >
                  プランを <br />
                  お願いする
                  </Button>
                  <Button kind="button" onClick={() => setIsSaving((prev) => !prev)}>
                  情報を <br />
                  保存する
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className={`fixed inset-0 flex items-center justify-center bg-[url('/assets/images/bg.png')] bg-cover bg-right-bottom bg-no-repeat ${isSaving ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <div className="w-full max-w-[375px] border border-[#B4B4B4] py-9 px-5 flex flex-col items-center justify-center bg-white relative">
            <p className="text-[18px] font-semibold">登録済み一覧</p>
            <div className="flex flex-col gap-11 mt-20">
              <button type="button" className="h-[61px] w-[243px] flex items-center justify-center border border-[#FF513E] bg-[#FFFCDD] rounded-sm text-[20px] font-semibold">新規</button>
              <button type="button"  onClick={() => setIsSaving((prev) => !prev)} className="h-[61px] w-[243px] flex items-center justify-center border border-[#2687E2] bg-[#EBFCFE] rounded-sm text-[20px] font-semibold">戻る</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
