"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import FormBlock from "@/components/form/formBlock";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";
import { z } from "zod";
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

const formSchema = z.object({
  work: z.string().min(1, '必須項目です。'),
  budget: z.string().min(1, '必須項目です。'),
  food1: z.string().min(1, '必須項目です。'),
  planneDate: z.string().min(1, '必須項目です。'),
});

export default function Personal() {
  const router = useRouter();

  const [birthday, setBirthday] = useState<Date>();
  const [planneDate, setPlanneDate] = useState<Date>();
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [errors, setErrors] = useState<Record<string, string>>({}); 
  
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

    const validationResult = formSchema.safeParse({
      work: formData.work,
      budget: formData.budget,
      food1: formData.food1,
      planneDate: formData.planneDate,
    });

    if (!validationResult.success) {
      const newErrors: Record<string, string> = {};
      validationResult.error.errors.forEach((err) => {
        newErrors[err.path[0] as string] = err.message;
      });
      setErrors(newErrors);
      return;
    }

    setErrors({});
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
                        <span className="block mb-1">(任意) あなたの誕生日を選んでください
                        </span>
                        <input
                          className="w-full focus:outline-none bg-transparent font-bold h-6  focus:bg-none"
                          value={birthday ? format(birthday, "yyyy/MM/dd") : ''}
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
                        <select defaultValue="" name="work" id="work" className="w-full focus:outline-none bg-transparent font-bold h-6 focus:bg-none" onChange={(e) => handleChange("work", e.target.value)}>
                          <option disabled hidden value=""></option>
                          <option value="学生">学生</option>
                          <option value="浪人生">浪人生</option>
                          <option value="社会人">社会人</option>
                          <option value="定年後">定年後</option>
                          <option value="答えたくない">答えたくない</option>
                        </select>
                  </FormBlock>
                  {errors.work && <p className="text-red-600 pt-2 font-bold">{errors.work}</p>}

                </div>
                <div className="py-5">
                  <FormBlock id="personality" number="3" label="あなたのパーソナリティー" inputText="(任意) あなたのパーソナリティーを選んでください"
                  >
                    <select defaultValue="" name="personality" id="personality" className="w-full focus:outline-none bg-transparent font-bold h-6  focus:bg-none" onChange={(e) => handleChange("personality", e.target.value)}>
                    <option disabled hidden value=""></option>
                          <option value="わからない">わからない</option>
                          <option value="ESTP">起業家(ESTP)</option>
                          <option value="ESFP">エンターテイナー(ESFP)</option>
                          <option value="ISTP">巨匠(ISTP)</option>
                          <option value="ISFP">冒険家(ISFP)</option>
                          <option value="ESTJ">幹部(ESTJ)</option>
                          <option value="ESFJ">領事(ESFJ)</option>
                          <option value="ISTJ">管理者(ISTJ)</option>
                          <option value="ISFJ">擁護者(ISFJ)</option>
                          <option value="ENTJ">指揮官(ENTJ)</option>
                          <option value="ENTP">討論者(ENTP)</option>
                          <option value="INTJ">建築家(INTJ)</option>
                          <option value="INTP">論理学者(INTP)</option>
                          <option value="ENFJ">主人公(ENFJ)</option>
                          <option value="ENFP">運動家(ENFP)</option>
                          <option value="INFJ">提唱者(INFJ)</option>
                          <option value="INFP">仲介者(INFP)</option>
                        </select>
                  </FormBlock>
                </div>
                <div className="py-5">
                  <FormBlock id="hobbies" number="4" label="あなたの趣味・興味" inputText="(任意) あなたの趣味・興味があること (任意入力最大100文字)"
                  >
                    <input id="hobbies" onChange={(e) => handleChange("hobbies", e.target.value)} className="w-full focus:outline-none bg-transparent font-bold h-6  focus:bg-none" />
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
                          value={planneDate ? format(planneDate, "yyyy/MM/dd") : ""}
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
                  {errors.planneDate && <p className="text-red-600 pt-2 font-bold">{errors.planneDate}</p>}
                </div>
                <div className="py-5">
                  <FormBlock required id="budget" number="6" label="プランの予算の上限金額" inputText="(必須) 合計の上限予算を決めてください"
                  >
                    <input id="budget" onChange={(e) => handleChange("budget", e.target.value)} className="w-full focus:outline-none bg-transparent font-bold h-6  focus:bg-none" />
                  </FormBlock>
                  {errors.budget && <p className="text-red-600 pt-2 font-bold">{errors.budget}</p>}

                </div>
                <div className="py-5">
                <FormBlock required id="food1" number="7" label="あなたの好きなジャンルの食事①" inputText="(必須) あなたが一番好きな食事のジャンルを選んでください"
                  >
                    <select defaultValue="" name="food1" id="food1" className="w-full focus:outline-none bg-transparent font-bold h-6  focus:bg-none" onChange={(e) => handleChange("food1", e.target.value)}>
                    <option disabled hidden value=""></option>
                          <option value="お肉メイン">お肉メイン</option>
                          <option value="魚メイン">魚メイン</option>
                          <option value="野菜メイン">野菜メイン</option>
                          <option value="ジャンクフード">ジャンクフード</option>
                          <option value="和食">和食</option>
                          <option value="洋食">洋食</option>
                          <option value="中華">中華</option>
                          <option value="エスニック料理">エスニック料理</option>
                          <option value="イタリアン">イタリアン</option>
                          <option value="フレンチ">フレンチ</option>
                          <option value="韓国料理">韓国料理</option>
                          <option value="アメリカン料理">アメリカン料理</option>
                          <option value="地中海料理">地中海料理</option>
                          <option value="カフェ・軽食">カフェ・軽食</option>
                          <option value="ベジタリアン・ヴィーガン料理">ベジタリアン・ヴィーガン料理</option>
                        </select>
                  </FormBlock>
                  {errors.food1 && <p className="text-red-600 pt-2 font-bold">{errors.food1}</p>}

                </div>
                <div className="py-5">
                <FormBlock id="food2" number="8" label="あなたの好きなジャンルの食事②" inputText="(任意) あなたが2番目に好きな食事のジャンルを選んでください"
                  >
                    <select defaultValue="" name="food2" id="food2" className="w-full focus:outline-none bg-transparent font-bold h-6  focus:bg-none" onChange={(e) => handleChange("food2", e.target.value)}>
                    <option disabled hidden value=""></option>
                          <option value="お肉メイン">お肉メイン</option>
                          <option value="魚メイン">魚メイン</option>
                          <option value="野菜メイン">野菜メイン</option>
                          <option value="ジャンクフード">ジャンクフード</option>
                          <option value="和食">和食</option>
                          <option value="洋食">洋食</option>
                          <option value="中華">中華</option>
                          <option value="エスニック料理">エスニック料理</option>
                          <option value="イタリアン">イタリアン</option>
                          <option value="フレンチ">フレンチ</option>
                          <option value="韓国料理">韓国料理</option>
                          <option value="アメリカン料理">アメリカン料理</option>
                          <option value="地中海料理">地中海料理</option>
                          <option value="カフェ・軽食">カフェ・軽食</option>
                          <option value="ベジタリアン・ヴィーガン料理">ベジタリアン・ヴィーガン料理</option>
                        </select>
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
                    <select defaultValue="" name="atmosphere" id="atmosphere" className="w-full focus:outline-none bg-transparent font-bold h-6  focus:bg-none" onChange={(e) => handleChange("atmosphere", e.target.value)}>
                    <option disabled hidden value=""></option>
                          <option value="リラックスしたい">リラックスしたい</option>
                          <option value="アクティブに動きたい">アクティブに動きたい</option>
                          <option value="観光したい">観光したい</option>
                          <option value="静かに過ごしたい">静かに過ごしたい</option>
                          <option value="穴場スポットを巡りたい">穴場スポットを巡りたい</option>
                          <option value="新しい体験をしたい">新しい体験をしたい</option>
                          <option value="自然を楽しみたい">自然を楽しみたい</option>
                          <option value="美術館や博物館を巡りたい">美術館や博物館を巡りたい</option>
                          <option value="ショッピングを楽しみたい">ショッピングを楽しみたい</option>
                          <option value="グルメ巡りをしたい">グルメ巡りをしたい</option>
                        </select>
                  </FormBlock>
                </div>
                <div className="py-5">
                  <FormBlock id="transportation" number="11" label="あなたの移動手段" inputText="あなたのメインの移動手段を選んでください"
                  >
                    <select defaultValue="" name="transportation" id="transportation" className="w-full focus:outline-none bg-transparent font-bold h-6  focus:bg-none" onChange={(e) => handleChange("transportation", e.target.value)}>
                    <option disabled hidden value=""></option>
                          <option value="公共交通機関">公共交通機関</option>
                          <option value="自家用車">自家用車</option>
                          <option value="バイク">バイク</option>
                          <option value="タクシー">タクシー</option>
                          <option value="自転車">自転車</option>
                          <option value="電動キックボード">電動キックボード</option>
                          <option value="徒歩">徒歩</option>
                        </select>
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
