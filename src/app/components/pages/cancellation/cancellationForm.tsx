"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import FormCheckbox from "../../form/formCheckbox";
export default function CancellationForm() {
  const animateRefs = useScrollAnimation("zoom");
  return (
    <div className="px-5 md:mb-[100px] mb-12">
        <div className="w-full max-w-[1000px] mx-auto">
            <div className="bg-white pt-20 pb-10 md:pb-[22px] md:pt-[157px] px-5 rounded-[40px]">
                <div className="w-full max-w-[800px] mx-auto">
                    <div ref={animateRefs} className="opacity-0 border-b border-black pb-5">
                        <div className="flex justify-center">
                            <p className="max-w-[630px] text-center text-[16px] md:text-[18px] font-medium tracking-wide"><span className="text-[18px] md:text-[20px] font-bold">Q1.</span> ご解約の理由・きっかけをお聞かせください。(複数選択が可能です。)</p>
                        </div>
                        <div className="flex justify-center md:mt-7 mt-5">
                            <div className="space-y-0.5">
                            <FormCheckbox label="お金の問題（予算削減など）" name="issue-1" />
                            <FormCheckbox label="あまり使っていなかった" name="issue-2" />
                            <FormCheckbox label="別のサービスを使うことにした" name="issue-3" />
                            <FormCheckbox label="欲しい機能がなかった" name="issue-4" />
                            <FormCheckbox label="操作が難しかった" name="issue-5" />
                            <FormCheckbox label="ビジネスのニーズが変わった" name="issue-6" />
                            <FormCheckbox label="サービスの品質に不満があった" name="issue-7" />
                            <FormCheckbox label="サポートに不満があった" name="issue-8" />
                            <FormCheckbox label="他のサービスを試したい" name="issue-9" />
                            <FormCheckbox label="その他（自由記述）" name="issue-10" />
                            </div>
                        </div>
                    </div>
                    <div ref={animateRefs} className="opacity-0 border-b border-black pb-5 pt-10 md:pt-16">
                        <div className="flex justify-center">
                            <p className="max-w-[630px] text-center text-[16px] md:text-[18px] font-medium tracking-wide"><span className="text-[18px] md:text-[20px] font-bold">Q2.</span>  どうしたら解約せずにご利用を継続いただけたでしょうか？</p>
                        </div>
                        <div className="flex justify-center md:mt-7 mt-5">
                            <div className="space-y-0.5">
                                <FormCheckbox label="サービス料金がもっと手頃であれば" name="time-1" />
                                <FormCheckbox label="より多くの機能やオプションがあれば" name="time-2" />
                                <FormCheckbox label="サービスの使いやすさが向上していれば" name="time-3" />
                                <FormCheckbox label="より良いカスタマーサポートがあれば" name="time-4" />
                                <FormCheckbox label="より頻繁なアップデートや新機能の追加があれば" name="time-5" />
                                <FormCheckbox label="より良い品質や性能があれば" name="time-6" />
                                <FormCheckbox label="利用方法やメリットについてのより詳しい説明があれば" name="time-7" />
                                <FormCheckbox label="他のユーザーとの交流やコミュニティ機能があれば" name="time-8" />
                                <FormCheckbox label="より柔軟なプランやカスタマイズオプションがあれば" name="time-9" />
                                <FormCheckbox label="特になし" name="time-10" />
                            </div>
                        </div>
                    </div>
                    <div ref={animateRefs} className="opacity-0 border-b border-black pb-5 pt-10 md:pt-16">
                        <div className="flex justify-center">
                            <p className="max-w-[630px] text-[16px] md:text-[18px] font-medium tracking-wide"><span className="text-[18px] md:text-[20px] font-bold">Q3. </span>  次世代名刺へのメッセージがもしありましたら、ご記入ください。<br />
                                私たちは今後もお客さまへの一層のサービス向上に取り組んでまいります。<br />
                            (500文字以内)</p>
                        </div>
                        <div className="flex justify-center md:mt-7 mt-5">
                            <div className="w-full max-w-[662px] mx-auto rounded-[10px]">
                                <textarea name="" className="w-full bg-[#F3F3F3] md:h-[210px] h-[140px] p-5"></textarea>
                            </div>
                        </div>
                    </div>
                    <div ref={animateRefs} className="opacity-0 md:py-12 py-8">
                        <p className="text-center md:text-[16px] text-[13px] mb-6 md:mb-9">※アンケート送信後、決済停止画面へ遷移いたします。</p>
                        <button type="button" className="w-[240px] h-[63px] mx-auto border-[3px] border-black flex items-center justify-center rounded-[44px] bg-[#000748] text-white md:text-[20px] text-[16px] font-bold">送信する</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
