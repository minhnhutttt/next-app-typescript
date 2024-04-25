"use client";
import { useState } from "react";
import Line from "@/app/components/line";
export interface HandleStepProps {
  handleStep: () => void;
}
export default function FormCard({ handleStep }: HandleStepProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [tabActive, setTabActive] = useState<number>(1);

  const handleTabChange = (tabNumber: number) => {
    setTabActive(tabNumber);
  };

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState('');

  const handleUpload = (file: File) => {
    console.log('File uploaded:', file);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file: any = event.target.files?.[0];
    setSelectedFile(file);
    if (file) {
      setFileName(file.name);
    } else {
      setFileName('');
    }
  };

  const handleClick = () => {
    if (selectedFile) {
      handleUpload(selectedFile);
      setSelectedFile(null); // Clear selection after upload
    }
  };

  return (
    <div className="px-5 md:mb-[100px] mb-12 font-noto" id="top">
      <div className="w-full max-w-[1080px] mx-auto">
        <div className="bg-white md:pt-[40px] md:pb-[72px] pt-[30px] pb-10  px-5">
          <div className="w-full max-w-[610px] mx-auto bg-[#7FFF00]/[0.1] border-2 border-[#7FFF00] rounded-[10px] pt-5 md:pb-10 pb-7 md:pt-7">
            <h3 className="text-center md:text-[28px] text-[18px] font-black">
              プラン名
            </h3>
            <div className="flex md:text-[18px] text-[14px] font-bold justify-center items-center mt-6 md:mt-8 gap-4">
              <span className="flex items-center justify-center rounded-full border-[3px] border-[#7FFF00] p-1 ">
                <span className="bg-[#7FFF00] aspect-square w-[12px] md:w-[22px] rounded-full"></span>
              </span>
              200枚無料プレゼント
            </div>
            <p className="text-center md:text-[16px] text-[13px] mt-8">
              200枚以上必要な方、その他お問い合わせは
              <br />
              <button
                type="button"
                className="font-bold inline-block border-b-[3px] border-[#01B202] text-[#01B202]"
                onClick={() => setModalOpen(true)}
              >
                サポートLINE
              </button>
              までご連絡ください。
            </p>
          </div>
          <p className="text-center md:text-[28px] text-[18px] font-black tracking-widest mt-12">
          [STEP1] <br />
            メディアと名刺受取りアドレスのご提出
          </p>
          <p className="text-center md:text-[20px] text-[16px]">
            <span className="md:text-[26px] text-[20px] font-bold relative top-1.5 text-[#ED002B]">
              *
            </span>
            マークは必須項目です。
          </p>

          <div className="w-full max-w-[900px] mx-auto md:mt-[35px] mt-6">
            <p className="md:text-[20px] text-[16px] font-bold">
              NFT画像アップロード
              <span className="md:text-[26px] text-[20px] relative top-1.5 text-[#ED002B]">
                *
              </span>
            </p>
            <div className="md:text-[14px] text-[12px]">
              <p className="flex">
                <span>・</span>
                アップロードできる画像は、jpg(jpeg)、pngに限ります。
              </p>
              <p className="flex">
                <span>・</span>添付ファイルは、10MBを超えた場合
                受信できません、サイズを調整してください。
              </p>
            </div>
            <div className="py-2.5 flex gap-2.5 max-md:flex-wrap max-md:justify-end">
            <div className="flex-1">
              <p className="w-full md:h-[70px] h-[60px] border border-[#E4E4E4] md:text-[18px] font-bold px-4 md:px-[30px] flex items-center py-4 text-[#999]">{fileName ? fileName : '画像をアップロードしてください。'}</p>
            </div>
            <label htmlFor="file-upload" className="md:h-[70px] h-[60px] flex items-center justify-center bg-[#E2E2E2] md:flex-[0_0_173px] flex-[0_0_120px] md:text-[16px] text-[13px] font-bold font-dm rounded-[10px] cursor-pointer cursor-pointer">
              <input
                id="file-upload"
                type="file"
                className="hidden"
                onChange={handleChange}
              />
              
              <p
                >
                  ファイルを選択
                </p>
              </label>
              </div>
            <div className="flex mt-5 md:mt-7 max-md:flex-wrap max-md:mb-3">
              <div className="flex">
                <p className="font-bold md:text-[20px] text-[16px]">
                  NFT名刺受取用DIVER Bizアドレス
                </p>
                <span className="md:text-[26px] text-[20px] font-bold relative -top-1 text-[#ED002B]">
                  *
                </span>
              </div>
              <p className="md:text-[16px] text-[13px] font-bold md:ml-2">
                ※「
                <a href="#procedure" className="underline">
                  アドレス入力の手順
                </a>
                」をご確認ください。
              </p>
            </div>
            <input
              type="text"
              className="flex-1 w-full md:h-[70px] h-[60px] bg-[#EFF2F6] md:text-[18px] font-bold px-4 md:px-[30px] py-4"
              placeholder="例：0x1ffur8je32rjfi9wufoflk6969e0olsjeG"
            />
            <div className="flex justify-center md:mt-10 mt-6">
              <button
                type="button"
                onClick={handleStep}
                className="flex items-center justify-center mx-auto md:w-[300px] w-[200px] h-[44px] md:h-[70px] rounded-[50px] bg-[#101010] md:text-[20px] text-[15px] font-black text-[#7FFF00] outline-1 outline outline-[#7FFF00] md:outline-offset-[-5px] outline-offset-[-3px] tracking-widest [box-shadow:0px_0px_30px_0px_rgba(127,_255,_0,_0.30)] gap-2"
              >
                <span>STEP2へ進む</span>
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
            <div className="mt-9 md:mt-[70px] scroll-m-5" id="procedure">
              <div className="flex items-center justify-center md:hidden">
                <div className="flex relative bg-[#fff] [box-shadow:0px_4px_34px_0px_rgba(0,_0,_0,_0.10)] p-3 rounded-[99px]">
                  <input
                    type="radio"
                    id="radio-1"
                    name="tabs"
                    defaultChecked={tabActive === 1}
                    onChange={() => handleTabChange(1)}
                    className="hidden"
                  />
                  <label
                    className="z-10 flex items-center justify-center [font-size:_clamp(13px,3vw,20px)] h-[54px] w-[38vw] font-medium rounded-[99px] cursor-pointer [transition:color_0.15s_ease-in]"
                    htmlFor="radio-1"
                  >
                    アドレスの入力手順
                  </label>
                  <input
                    type="radio"
                    id="radio-2"
                    name="tabs"
                    defaultChecked={tabActive === 2}
                    onChange={() => handleTabChange(2)}
                    className="hidden"
                  />
                  <label
                    className="z-10 flex items-center justify-center [font-size:_clamp(13px,3vw,20px)] h-[54px] w-[38vw] font-medium rounded-[99px] cursor-pointer [transition:color_0.15s_ease-in]"
                    htmlFor="radio-2"
                  >
                    DIVER Walletを利用
                  </label>
                  <span className="glider absolute flex h-[54px] w-[38vw] bg-[#e6eef9] rounded-[99px] [transition:0.25s_ease-out]"></span>
                </div>
              </div>
              <div className="flex max-md:mt-8 md:divide-x divide-black">
                <div
                  className={`w-full md:w-1/2 md:pr-5 ${tabActive === 1 ? "max-md:block" : "max-md:hidden"}`}
                >
                  <div className="flex items-center gap-5 md:justify-between px-5 pb-6 md:pb-10 flex-col justify-center border-b border-black">
                    <p className="min-h-[60px] md:min-h-[72px] flex items-center font-black md:text-[24px] text-[20px] text-black mb-5 md:mb-8 pl-2 md:pl-4 md:border-l-[5px] border-l-[3px] border-[#7FFF00]">
                      アドレスの入力は以下の手順で完了させてください
                    </p>
                    <p className="md:text-[18px] text-[16px] font-bold max-w-[350px] flex-1">
                      ① アプリ「DIVER Biz」のダウンロードしてください。
                    </p>
                    <div className="">
                      <figure className="flex justify-center py-5">
                        <img src="/images/logo-diver-biz.png" alt="" />
                      </figure>
                      <div className="flex max-md:flex-col gap-4 md:gap-7">
                        <a
                          href="http://"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                        >
                          <img src="/images/appstore.png" alt="" />
                        </a>
                        <a
                          href="http://"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                        >
                          <img src="/images/google-play.png" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center px-3 md:px-5 pt-4 pb-6 md:pt-10 md:pb-5 flex-col border-b border-black gap-5 md:gap-8">
                    <p className="md:text-[18px] text-[16px] font-bold max-w-[350px] flex-1">
                      ② 初期設定を完了させてください。
                    </p>
                    <div className="">
                      <figure className="flex justify-center">
                        <img
                          className="max-md:w-[160px]"
                          src="/images/guide-01.png"
                          alt=""
                        />
                      </figure>
                    </div>
                  </div>
                  <div className="flex items-center px-3 md:px-5 pt-4 pb-6 md:pt-10 md:pb-5 flex-col border-b border-black gap-5 md:gap-8">
                    <p className="md:text-[18px] text-[16px] font-bold max-w-[350px] flex-1">
                      ③
                      アプリを開き下のメニュー「受け取る」のコピーボタンをタップしアドレスをコピーしてください。
                    </p>
                    <div className="">
                      <figure className="flex justify-center">
                        <img
                          className="max-md:w-[160px]"
                          src="/images/guide-02.png"
                          alt=""
                        />
                      </figure>
                    </div>
                  </div>
                  <div className="flex flex-col lg:items-center px-3 md:px-5 pt-8 pb-5 md:pt-12 md:pb-7 max-md:flex-col border-b border-black gap-5 md:gap-8">
                    <p className="md:text-[18px] text-[16px] font-bold max-w-[350px] flex-1">
                      ④
                      上記「NFT名刺受取用ウォレットアドレス」の入力欄に③でコピーしたアドレスを貼り付けてください。
                    </p>
                    <div className="max-lg:flex max-lg:justify-end">
                      <figure className="flex justify-center">
                        <img src="/images/guide-03.png" alt="" />
                      </figure>
                    </div>
                  </div>
                </div>
                <div
                  className={`w-full md:w-1/2 md:pl-5 ${tabActive === 2 ? "max-md:block" : "max-md:hidden"}`}
                >
                  <div className="flex items-center px-3 md:px-5 pb-5 md:pb-7 flex-col border-b border-black gap-5 md:gap-8">
                    <div className="max-w-[350px] flex-1">
                      <p className="min-h-[60px] md:min-h-[72px] flex items-center font-black md:text-[24px] text-[20px] text-black mb-5 md:mb-8 pl-2 md:pl-4 md:border-l-[5px] border-l-[3px] border-[#7FFF00]">
                        DIVER Walletアドレスを
                        <br className="md:hidden" />
                        利用する方法
                      </p>
                      <p className="md:text-[18px] text-[16px] font-bold">
                        ①アプリ「DIVER Biz」にDIVER
                        Walletのアドレスをインポートしてください
                        <span className="md:text-[16px] text-[13px]">
                          ※復元フレーズ（12個の英単語）が必要です。
                        </span>
                      </p>
                    </div>
                    <div className="">
                      <figure className="flex justify-center">
                        <img
                          className="max-md:w-[160px]"
                          src="/images/guide-04.png"
                          alt=""
                        />
                      </figure>
                    </div>
                  </div>
                  <div className="flex items-center px-3 md:px-5 pt-8 pb-5 md:pt-12 md:pb-7 flex-col border-b border-black gap-5 md:gap-8">
                    <p className="md:text-[18px] text-[16px] font-bold max-w-[350px] flex-1">
                      ②
                      アプリを開き下のメニュー「受け取る」のコピーボタンをタップしアドレスをコピーしてください。
                    </p>
                    <div className="">
                      <figure className="flex justify-center">
                        <img
                          className="max-md:w-[160px]"
                          src="/images/guide-05.png"
                          alt=""
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center md:mt-[50px] mt-8">
              <a
                className="flex items-center justify-center mx-auto md:w-[300px] w-[200px] h-[44px] md:h-[70px] rounded-[50px] bg-[#101010] md:text-[20px] text-[15px] font-black text-[#7FFF00] outline-1 outline outline-[#7FFF00] md:outline-offset-[-5px] outline-offset-[-3px] [box-shadow:0px_0px_30px_0px_rgba(127,_255,_0,_0.30)] gap-2"
                href="#"
              >
                <span>上へ戻る</span>
                <svg
                  className="max-md:w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <path
                    d="M15 25.1998C9.36005 25.1998 4.80005 20.6398 4.80005 14.9998C4.80005 9.3598 9.36005 4.7998 15 4.7998C20.64 4.7998 25.2 9.3598 25.2 14.9998C25.2 20.6398 20.64 25.1998 15 25.1998ZM15 5.9998C10.02 5.9998 6.00005 10.0198 6.00005 14.9998C6.00005 19.9798 10.02 23.9998 15 23.9998C19.98 23.9998 24 19.9798 24 14.9998C24 10.0198 19.98 5.9998 15 5.9998Z"
                    fill="#7FFF00"
                  />
                  <path
                    d="M19.9802 16.0204L15.0002 11.0404L10.0202 16.0204L9.18018 15.1804L15.0002 9.36035L20.8202 15.1804L19.9802 16.0204Z"
                    fill="#7FFF00"
                  />
                  <path
                    d="M14.3999 10.2002H15.5999L15.5999 20.4002H14.3999L14.3999 10.2002Z"
                    fill="#7FFF00"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`duration-500 flex items-center justify-center flex-col p-10 fixed inset-0 overflow-auto z-50 ${!modalOpen ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"}`}
      >
        <div
          className="fixed inset-0 bg-black/50"
          onClick={() => setModalOpen(false)}
        ></div>
        <div className="relative z-10 rounded-[30px] overflow-hidden">
          <Line />
        </div>
      </div>
    </div>
  );
}
