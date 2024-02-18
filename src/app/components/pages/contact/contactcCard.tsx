"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import type { HandleStepProps } from "./contactPlan";
export default function ContactCard({handleStep}: HandleStepProps) {
  const animateRefs = useScrollAnimation("zoom");
  return (
    <div className="px-5 md:mb-[100px] mb-12 font-noto">
        <div ref={animateRefs} className="opacity-0 w-full max-w-[1080px] mx-auto">
            <div className="bg-white md:pt-[60px] md:pb-[72px] pt-[30px] pb-10  px-5">
                <p className="text-center md:text-[28px] text-[18px] font-black tracking-widest ">メディアと名刺受取りアドレスのご提出</p>
                <p className="text-center md:text-[20px] text-[16px]"><span className="md:text-[26px] text-[20px] font-bold relative top-1.5 text-[#ED002B]">*</span>マークは必須項目です。</p>

                <div className="w-full max-w-[900px] mx-auto md:mt-[115px] mt-20">
                    <p className="md:text-[20px] text-[16px] font-bold">NFT画像アップロード<span className="md:text-[26px] text-[20px] relative top-1.5 text-[#ED002B]"> *</span></p>
                    <div className="md:text-[14px] text-[12px]">
                        <p className="flex"><span>・</span>アップロードできる画像は、jpg(jpeg)、pngに限ります。</p>
                        <p className="flex"><span>・</span>添付ファイルは、10MBを超えた場合 受信できません、サイズを調整してください。</p>
                    </div>
                    <div className="py-2.5 flex gap-2.5 max-md:flex-wrap max-md:justify-end">
                        <input type="text" className="flex-1 md:h-[70px] h-[60px] border border-[#E4E4E4] md:text-[18px] font-bold px-4 md:px-[30px] py-4" placeholder="画像を選択してください。" />
                        <button type="button" className="md:h-[70px] h-[60px] flex items-center justify-center bg-[#E2E2E2] md:flex-[0_0_173px] flex-[0_0_120px] md:text-[16px] text-[13px] font-bold font-dm rounded-[10px]">ファイルを選択</button>
                    </div>
                    <div className="flex mt-5 md:mt-7 max-md:flex-wrap max-md:mb-3">
                        <div className="flex">
                            <p className="font-bold md:text-[20px] text-[16px]">NFT名刺受取用DIVER Bizアドレス</p>
                            <span className="md:text-[26px] text-[20px] font-bold relative -top-1 text-[#ED002B]">*</span>
                        </div>
                        <p className="md:text-[16px] text-[13px] font-bold md:ml-2">※以下の手順をご確認ください。</p>
                    </div>
                    <input type="text" className="flex-1 w-full md:h-[70px] h-[60px] bg-[#EFF2F6] md:text-[18px] font-bold px-4 md:px-[30px] py-4" placeholder="例：0x1ffur8je32rjfi9wufoflk6969e0olsjeG" />
                <div className="flex justify-center md:mt-10 mt-6">
                    <button type="button" onClick={handleStep} className="bg-[#000748] border-[3px] border-white rounded-[44px] font-bold md:px-16 leading-none px-10 md:py-4 py-3 flex items-center justify-center gap-1.5 md:gap-2.5 text-white md:text-[20px] text-[16px]">
                        <span>STEP3へ進む</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                            <path d="M4.79995 14.9998C4.79995 9.3598 9.35995 4.7998 15 4.7998C20.64 4.7998 25.2 9.3598 25.2 14.9998C25.2 20.6398 20.64 25.1998 15 25.1998C9.35995 25.1998 4.79995 20.6398 4.79995 14.9998ZM24 14.9998C24 10.0198 19.98 5.9998 15 5.9998C10.02 5.9998 5.99995 10.0198 5.99995 14.9998C5.99995 19.9798 10.02 23.9998 15 23.9998C19.98 23.9998 24 19.9798 24 14.9998Z" fill="white" stroke="white"/>
                            <path d="M13.9799 19.9802L18.9599 15.0002L13.9799 10.0202L14.8199 9.18018L20.6399 15.0002L14.8199 20.8202L13.9799 19.9802Z" fill="white" stroke="white"/>
                            <path d="M19.8 14.3999L19.8 15.5999L9.60005 15.5999L9.60005 14.3999L19.8 14.3999Z" fill="white" stroke="white"/>
                        </svg>
                    </button>
                </div>
                <div className="mt-[70px]">
                    <p className="md:text-[20px] text-[16px] font-bold"><span className="text-[#22ABF3]">■</span>アドレスの入力は以下の手順で完了させてください。</p>
                    <div className="flex items-center md:justify-between px-5 pt-4 pb-6 md:pt-5 md:pb-10 max-md:flex-wrap justify-center border-b border-black">
                        <p className="md:text-[18px] text-[16px] font-bold max-w-[350px] flex-1">
                            ① アプリ「DIVER Biz」のダウンロードしてください。
                        </p>
                        <div className="">
                            <figure className="flex justify-center py-5">
                                <img src="/images/logo-diver-biz.png" alt="" />
                            </figure>
                            <div className="flex max-md:flex-col gap-4 md:gap-7">
                                <a href="http://" target="_blank" rel="noopener noreferrer" className="block">
                                <img src="/images/appstore.png" alt="" />
                                </a>
                                <a href="http://" target="_blank" rel="noopener noreferrer" className="block">
                                <img src="/images/google-play.png" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center px-5 pt-4 pb-6 md:pt-10 md:pb-5 max-md:flex-wrap border-b border-black md:gap-[82px]">
                        <p className="md:text-[18px] text-[16px] font-bold max-w-[350px] flex-1">
                            ② 初期設定を完了させてください。
                        </p>
                        <div className="">
                            <figure className="flex justify-center">
                                <img src="/images/guide-01.png" alt="" />
                            </figure>
                        </div>
                    </div>
                    <div className="flex items-center px-5 pt-4 pb-6 md:pt-10 md:pb-5 max-md:flex-wrap border-b border-black md:gap-[82px]">
                        <p className="md:text-[18px] text-[16px] font-bold max-w-[350px] flex-1">
                        ③ アプリを開き下のメニュー「受け取る」のコピーボタンをタップしアドレスをコピーしてください。
                        </p>
                        <div className="">
                            <figure className="flex justify-center">
                                <img src="/images/guide-02.png" alt="" />
                            </figure>
                        </div>
                    </div>
                    <div className="flex items-center px-5 pt-8 pb-5 md:pt-12 md:pb-7 max-md:flex-wrap border-b border-black md:gap-[82px]">
                        <p className="md:text-[18px] text-[16px] font-bold max-w-[350px] flex-1">
                        ④ 上記「NFT名刺受取用ウォレットアドレス」の入力欄に③でコピーしたアドレスを貼り付けてください。
                        </p>
                        <div className="">
                            <figure className="flex justify-center">
                                <img src="/images/guide-03.png" alt="" />
                            </figure>
                        </div>
                    </div>
                    <div className="flex items-center px-5 pt-8 pb-5 md:pt-12 md:pb-7 max-md:flex-wrap border-b border-black md:gap-[82px]">
                        <div className="max-w-[350px] flex-1">
                            <p className="font-black md:text-[24px] text-[20px] text-[#22ABF3] mb-3 md:mb-5 md:pl-4 border-l-[5px] border-[#22ABF3]">
                                DIVER Walletのアドレスを利用したい方
                            </p>
                            <p className="md:text-[18px] text-[16px] font-bold">
                                ①アプリ「DIVER Biz」にDIVER Walletのアドレスをインポートしてください
                                <span className="md:text-[16px] text-[13px]">※復元フレーズ（12個の英単語）が必要です。</span>
                            </p>
                        </div>
                        <div className="">
                            <figure className="flex justify-center">
                                <img src="/images/guide-04.png" alt="" />
                            </figure>
                        </div>
                    </div>
                    <div className="flex items-center px-5 pt-8 pb-5 md:pt-12 md:pb-7 max-md:flex-wrap border-b border-black md:gap-[82px]">
                        <p className="md:text-[18px] text-[16px] font-bold max-w-[350px] flex-1">
                        ② アプリを開き下のメニュー「受け取る」のコピーボタンをタップしアドレスをコピーしてください。
                        </p>
                        <div className="">
                            <figure className="flex justify-center">
                                <img src="/images/guide-05.png" alt="" />
                            </figure>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  );
}
