"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const Howto = () => {
  const ref = useScrollAnimations();
  return (
    <section
    id="howto"
      ref={ref}
      className="relative overflow-hidden bg-[#FA3D51] md:pt-[210px] pt-[160px]"
    >
      <div className="w-full max-w-[1360px] mx-auto">
        <div className="bg-white md:pb-20 pb-14 px-5">
          <div className="h-px"></div>
          <div data-scroll className="ani-fade-up w-full max-w-[1020px] md:h-[352px] h-[240px] mx-auto p-2 md:p-[20px] relative rounded-[50px] overflow-hidden md:-mt-[176px] -mt-[120px]">
            <span className="absolute md:animate-[rotate_30s_linear_infinite] animate-[rotate_20s_linear_infinite] w-[300vmax] -top-1/2 -left-1/2 aspect-square md:bg-[repeating-linear-gradient(_60deg,_#F30000,_#F30000_20px,_#000_20px,_#000_40px_)] bg-[repeating-linear-gradient(_60deg,_#F30000,_#F30000_15px,_#000_15px,_#000_30px_)]"></span>
            <div className="w-full h-full bg-black rounded-[50px] relative text-white font-extrabold flex items-center justify-center flex-col">
              <p className="md:text-[64px] text-[24px] text-center">新ミッション発生中！</p>
              <p className="md:text-[42px] text-[20px] text-center">
                あなたの隙間時間で<br className="md:hidden" />近隣企業を救え
              </p>
            </div>
          </div>
          <h5 data-scroll className="ani-fade-up md:text-[32px] text-[24px] font-extrabold text-center pt-6 md:pt-8">
            バイトクエストの使い方
          </h5>

          <div className="w-full md:max-w-[900px] max-w-[410px] mx-auto flex flex-wrap justify-center md:gap-20 gap-16 mt-10">
            <div data-scroll className="ani-fade-up w-full md:w-[410px] pb-6 border-[5px] border-[#191919] rounded-[45px] bg-white">
              <div className="flex justify-center md:-mt-[38px] -mt-[30px]">
                <div className="md:size-[76px] size-[60px] bg-white rounded-full flex items-center justify-center border-[5px] border-black md:text-[48px] text-[30px] font-extrabold leading-none">
                  1
                </div>
              </div>
              <div className="px-6">
                <img src="/assets/images/howto-01.png" alt="" />
              </div>
              <div className="px-[15px] pt-10">
                <h5 className="md:text-[22px] text-[18px] text-center font-extrabold">
                  バイトクエスト専用アプリを
                  <br />
                  ダウンロード
                </h5>
                <p className="text-center font-medium md:text-[18px] text-[16px]">
                  <span className="relative">
                    <span className="slide-gradient absolute top-0 left-0 right-0 bottom-0 bg-[linear-gradient(to_top,_#FFF574_30%,_transparent_30%)]"></span>
                    <span className="relative">
                      電話番号やメールアドレスの登録不要
                    </span>
                  </span>
                </p>
                <div className="w-full flex justify-center items-center gap-5 mt-5">
                  <a href="https://apps.apple.com/jp/app/diver-wallet/id6444421722" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/images/btn-appstore-02.png" alt="" /></a>
                  <a href="https://play.google.com/store/apps/details?id=com.hyerdesign.diver.wallet&hl=ln" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/images/btn-googleplay-02.png" alt="" /></a>
              </div>
              </div>
            </div>
            <div data-scroll className="ani-fade-up w-full md:w-[410px] pb-6 border-[5px] border-[#191919] rounded-[45px] bg-white">
              <div className="flex justify-center md:-mt-[38px] -mt-[30px]">
                <div className="md:size-[76px] size-[60px] bg-white rounded-full flex items-center justify-center border-[5px] border-black md:text-[48px] text-[30px] font-extrabold leading-none">
                  2
                </div>
              </div>
              <div className="px-6">
                <img src="/assets/images/howto-02.png" alt="" />
              </div>
              <div className="px-[15px] pt-10">
                <h5 className="md:text-[22px] text-[18px] text-center font-extrabold">
                ワーカー登録<br />公式LINEへ情報を送る
                </h5>
                <div className="w-full flex justify-center items-center gap-5 max-md:flex-col mt-5">
                  <a href="https://lin.ee/fMZCQsF" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/images/btn-line.png" alt="" /></a>
              </div>
              </div>
            </div>
            <div data-scroll className="ani-fade-up w-full md:w-[410px] pb-6 border-[5px] border-[#191919] rounded-[45px] bg-white">
              <div className="flex justify-center md:-mt-[38px] -mt-[30px]">
                <div className="md:size-[76px] size-[60px] bg-white rounded-full flex items-center justify-center border-[5px] border-black md:text-[48px] text-[30px] font-extrabold leading-none">
                  3
                </div>
              </div>
              <div className="px-6">
                <img src="/assets/images/howto-03.png" alt="" />
              </div>
              <div className="px-[15px] pt-10">
                <h5 className="md:text-[22px] text-[18px] text-center font-extrabold">
                NFTを作成し、位置<br />情報を設定しよう！
                </h5>
              </div>
            </div>
            <div data-scroll className="ani-fade-up w-full md:w-[410px] pb-6 border-[5px] border-[#191919] rounded-[45px] bg-white">
              <div className="flex justify-center md:-mt-[38px] -mt-[30px]">
                <div className="md:size-[76px] size-[60px] bg-white rounded-full flex items-center justify-center border-[5px] border-black md:text-[48px] text-[30px] font-extrabold leading-none">
                  4
                </div>
              </div>
              <div className="px-6">
                <img src="/assets/images/howto-04.png" alt="" />
              </div>
              <div className="px-[15px] pt-10">
                <h5 className="md:text-[22px] text-[18px] text-center font-extrabold">
                DIVER Knockをインストール<br />してオファーを待とう！
                </h5>
                <div className="w-full flex justify-center items-center gap-5 mt-5">
                  <a href="https://apps.apple.com/jp/app/diver-knock/id6450264436" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/images/btn-appstore-02.png" alt="" /></a>
                  <a href="https://play.google.com/store/apps/details?id=com.bigant.diver.limited.talk.flutter_project&hl=en_US" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/images/btn-googleplay-02.png" alt="" /></a>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Howto;
