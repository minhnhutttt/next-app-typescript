"use client";

import FormBlock from "@/components/form/formBlock";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import { useState } from "react";
import "react-day-picker/style.css";
import Button from "@/components/button";
import FormLabel from "@/components/form/formLabel";
import { Slider } from "@material-tailwind/react";
import FormSlider from "@/components/form/formSlider";

export default function Partner() {
  const [birthday, setBirthday] = useState<Date>();
  const [planneDate, setPlanneDate] = useState<Date>();

  const [isSaving, setIsSaving] = useState<boolean>(false);

  const handleSliderChange = (value: number) => {
    console.log("Current Slider Value:", value);
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
            <form action="" className="w-full flex flex-col h-full">
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
                  <FormLabel number="1" label="相手の人数" />
                  <div className="bg-[#EBFCFE] border border-[#2687E2]/[0.5] py-2 px-1.5 rounded-lg space-y-10">
                    <div>
                      <p className="text-center text-[15px] font-semibold">
                        (任意) 男性の人数を選んでください
                      </p>
                      <div className="">
                        <FormSlider
                          min={0}
                          max={100}
                          step={1}
                          initialValue={50}
                          onChange={handleSliderChange}
                        />
                      </div>
                    </div>
                    <div>
                      <p className="text-center text-[15px] font-semibold">
                        女性の人数を選んでください
                      </p>
                      <div>
                        <FormSlider
                          min={0}
                          max={100}
                          step={1}
                          initialValue={50}
                          onChange={handleSliderChange}
                        />
                      </div>
                    </div>
                    <div>
                      <p className="text-center text-[15px] font-semibold">
                        (任意) 子供の人数を選んでください
                      </p>
                      <div>
                        <FormSlider
                          min={0}
                          max={100}
                          step={1}
                          initialValue={50}
                          onChange={handleSliderChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="py-5">
                  <FormBlock
                    id="age"
                    number="2"
                    label="相手の年代"
                    inputText="(任意) 相手の年代を選んでください"
                  >
                    <input
                      id="age"
                      className="w-full focus:outline-none bg-transparent font-bold h-6  focus:bg-none"
                    />
                  </FormBlock>
                </div>
                <div className="py-5">
                  <FormBlock
                    id="work"
                    number="3"
                    label="相手の職種"
                    inputText="(必須) 相手の職業を選んでください"
                  >
                    <select name="work" id="work" className="w-full focus:outline-none bg-transparent font-bold h-6  focus:bg-none">
                          <option value="学生">学生</option>
                          <option value="浪人生">浪人生</option>
                          <option value="社会人">社会人</option>
                          <option value="定年後">定年後</option>
                          <option value="答えたくない">答えたくない</option>
                        </select>
                  </FormBlock>
                </div>
                <div className="py-5">
                  <FormBlock
                    id="hobbies"
                    number="4"
                    label="相手の趣味・興味"
                    inputText="(任意) 相手の趣味 (任意入力最大100文字)"
                  >
                    <input
                      id="hobbies"
                      className="w-full focus:outline-none bg-transparent font-bold h-6 focus:bg-none"
                    />
                  </FormBlock>
                </div>
                <div className="py-5">
                  <FormLabel number="5" label="プラン計画予定日" />
                  <Popover placement="bottom">
                    <PopoverHandler>
                      <label
                        htmlFor="planneDate"
                        className="relative h-[60px] w-full block text-[13px] transition rounded-md duration-300 ease border border-[#FF513E] shadow-sm overflow-hidden px-3 pt-1.5 bg-[#FCFAE7]"
                      >
                        <span className="block mb-1">
                        (必須) プランがほしい日付けを選んでください
                        </span>
                        <input
                          className="w-full focus:outline-none bg-transparent font-bold h-6  focus:bg-none"
                          value={
                            planneDate
                              ? format(planneDate, "yyyy/MM/dd")
                              : format(new Date(), "yyyy/MM/dd")
                          }
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
                        onSelect={setPlanneDate}
                        captionLayout="dropdown"
                        endMonth={new Date(2030, 12)}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="py-5">
                  <FormBlock
                    required
                    id="budget"
                    number="6"
                    label="プランの予算の上限金額"
                    inputText="(必須) 1日の上限予算を決めてください 例：10,000円"
                  >
                    <input
                      id="budget"
                      className="w-full focus:outline-none bg-transparent font-bold h-6  focus:bg-none"
                    />
                  </FormBlock>
                </div>
                <div className="py-5">
                  <FormBlock
                    required
                    id="food1"
                    number="7"
                    label="相手の好きなジャンルの食事①"
                    inputText="(必須) 相手が一番好きな食事のジャンルを選んでください"
                  >
                    <input
                      id="food1"
                      className="w-full focus:outline-none bg-transparent font-bold h-6  focus:bg-none"
                    />
                  </FormBlock>
                </div>
                <div className="py-5">
                  <FormBlock
                    id="food2"
                    number="8"
                    label="相手の好きなジャンルの食事②"
                    inputText="(任意) 相手が2番目に好きな食事のジャンルを選んでください"
                  >
                    <input
                      id="food2"
                      className="w-full focus:outline-none bg-transparent font-bold h-6  focus:bg-none"
                    />
                  </FormBlock>
                </div>
                <div className="py-5">
                  <FormBlock
                    id="areas"
                    number="9"
                    label="相手が特に行きたいエリア"
                    inputText="渋谷区、東京23区、大阪、(任意入力最大100文字)"
                  >
                    <input
                      id="areas"
                      className="w-full focus:outline-none bg-transparent font-bold h-6  focus:bg-none"
                    />
                  </FormBlock>
                </div>
                <div className="py-5">
                  <FormBlock
                    id="atmosphere"
                    number="10"
                    label="相手の希望するアクティビティの雰囲気"
                    inputText="相手が過ごしたい休日プランの雰囲気を選択してください"
                  >
                    <input
                      id="atmosphere"
                      className="w-full focus:outline-none bg-transparent font-bold h-6  focus:bg-none"
                    />
                  </FormBlock>
                </div>
                <div className="py-5">
                  <FormBlock
                    id="transportation"
                    number="11"
                    label="相手の移動手段"
                    inputText="相手のメインの移動手段を選んでください"
                  >
                    <input
                      id="transportation"
                      className="w-full focus:outline-none bg-transparent font-bold h-6  focus:bg-none"
                    />
                  </FormBlock>
                </div>
                <div className="py-5">
                  <FormBlock
                    id="avoid"
                    number="12"
                    label="相手が避けたいこと"
                    inputText="人混みが苦手、特定の食材が苦手、歩きすぎは避けたいなど(任意入力最大1000文字)"
                    textarea
                  >
                    <textarea
                      id="avoid"
                      className="w-full focus:outline-none bg-transparent font-bold h-9"
                    ></textarea>
                  </FormBlock>
                </div>
              </div>
              <div className="">
                <div className="flex justify-between gap-5 my-[clamp(10px,4.444vmin,40px)] w-full max-w-[390px] mx-auto">
                <button
                    type="reset"
                    className="text-[15px] py-2.5 px-4 border border-[#75A5BE] rounded-xl bg-[#BEF4EE]"
                  >
                    保存したデータを読み込む
                  </button>
                  <button
                    type="reset"
                    className="text-[15px] py-2.5 px-4 border border-[#75A5BE] rounded-xl bg-[#BEF4EE]"
                  >
                    入力を削除する
                  </button>
                </div>
                <div className="flex justify-center gap-5 ">
                  <Button href="/" kind="link">
                    相手との <br />
                    プランを
                    <br />
                    お願いする
                  </Button>
                  <Button href="/" kind="link">
                    プランを <br />
                    お願いする
                  </Button>
                  <Button
                    kind="button"
                    onClick={() => setIsSaving((prev) => !prev)}
                  >
                    情報を <br />
                    保存する
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div
          className={`absolute inset-0 flex items-center justify-center bg-[url('/assets/images/bg.png')] bg-cover bg-right-bottom bg-no-repeat z-20 ${
            isSaving
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="w-full max-w-[375px] border border-[#B4B4B4] py-9 px-5 flex flex-col items-center justify-center bg-white relative">
            <p className="text-[18px] font-semibold">登録済み一覧</p>
            <div className="flex flex-col gap-11 mt-20">
              <button
                type="button"
                className="h-[61px] w-[243px] flex items-center justify-center border border-[#FF513E] bg-[#FFFCDD] rounded-sm text-[20px] font-semibold"
              >
                新規
              </button>
              <button
                type="button"
                onClick={() => setIsSaving((prev) => !prev)}
                className="h-[61px] w-[243px] flex items-center justify-center border border-[#2687E2] bg-[#EBFCFE] rounded-sm text-[20px] font-semibold"
              >
                戻る
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
