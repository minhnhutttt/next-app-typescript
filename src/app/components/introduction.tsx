"use client";
import TitleDeco01 from "@/components/titleDeco/titleDeco01";
import TitleDeco02 from "@/components/titleDeco/titleDeco02";
import TitleDeco03 from "@/components/titleDeco/titleDeco03";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const Introduction = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="relative pb-14 md:pb-[80px]">
      <div className="fade-up absolute md:top-[340px] top-[240px] md:right-10 right-2 z-10">
        <img className="max-dt:w-[3.125vw]" src="/assets/images/dm-vertical.png" alt="" />
      </div>
      <div className="relative bg-white [clip-path:polygon(0_0,_100%_11.5vw,_100%_calc(100%-11.5vw),_0_100%)]">
        <div className="md:h-[65.278vw] h-[105vw] relative -mt-[11.5vw] pt-[11.5vw] md:bg-[url('/assets/images/bg-022.png')] bg-[url('/assets/images/bg-022-sp.png')] bg-cover bg-bottom [clip-path:polygon(0_0,_100%_11.5vw,_100%_calc(100%-11.5vw),_0_100%)] px-5">
          <div className="w-full md:max-w-[80.556vw] max-w-[90vw] dt:max-w-[1160px] mx-auto relative">
            <h3 className="fade-up flex justify-center items-center relative">
              <img className="md:hidden"
                src="/assets/images/title-01-sp.png"
                alt="DELIVERY Man Mapとは？"
              />
              <img className="max-md:hidden"
                src="/assets/images/title-01.png"
                alt="DELIVERY Man Mapとは？"
              />
              <TitleDeco01 />
            </h3>
            <div className="flex gap-[20vw] md:px-6 md:py-10 py-5">
              <div className="fade-up w-[65vw] md:w-[43.75vw] dt:w-[630px] bg-white/60 pt-[2.222vw] dt:pt-[32px] md:pb-5 px-[1.736vw] dt:px-[25px]">
                <div className="bg-[url('/assets/images/co-top-left.png'),_url('/assets/images/co-top-right.png'),_url('/assets/images/co-bottom-left.png'),_url('/assets/images/co-bottom-right.png')] bg-[position:top_left,_top_right,_bottom_left,_bottom_right] bg-no-repeat w-[60vw] md:w-[38.889vw] dt:w-[560px]  p-[0.556vw] dt:p-2 mx-auto md:bg-[length:38px_38px] bg-[length:20px_20px]">
                  <div className="text-[2.6vw] md:text-[1.458vw] dt:text-[21px] font-extrabold bg-white flex items-center justify-center py-2 md:py-5 px-3 size-full">
                    企業からのオファーを待て！
                    <br />
                    地図上に表示された <br />
                    あなたのNFTに届く配達依頼をクリアして
                    <br />
                    報酬をゲットせよ！
                  </div>
                </div>
                <div className="p-[1.389vw] dt:p-5">
                  <p className="text-[2.8vw] md:text-[1.319vw] dt:text-[19px] font-medium leading-[1.7]">
                  Delivery Man Mapは、マップの閲覧を許可された信頼ある企業や店舗からあなたの元へ配達のオファーが届きます！<br />
                  あなたは働ける日時やスキルを記載したNFTを <br />
                  Delivery Man Mapに掲載し、ただ待つだけ。<br />
                  あなたを必要としている企業からのオファーを見逃すな！
                  </p>
                </div>
              </div>
              <figure className="top-1/2 md:top-[10%] dt:top-[30%] absolute md:right-[5%] dt:right-0 right-0">
                <img className="max-dt:w-[21.458vw]" src="/assets/images/conent-01-img.png" alt="" />
                <span className="absolute top-[1.667vw] dt:top-[24px] right-[1.111vw] dt:right-[16px] w-[21.667vw] dt:w-[312px]">
                  <img className="rotate-flash" src="/assets/images/circle-01.png" alt="" />
                </span>
                <span className="absolute top-[2.083vw] dt:top-[30px] right-0 max-dt:w-[8.75vw]">
                  <img className="animate-[fadeIn_1s_infinite]" src="/assets/images/mail.png" alt="" />
                </span>
              </figure>
            </div>
          </div>
        </div>
        <div className="md:h-[65.278vw] h-[105vw] relative -mt-[calc(11.5vw-8px)] pt-[11.5vw] md:bg-[url('/assets/images/bg-03.png')] bg-[url('/assets/images/bg-03-sp.png')] bg-cover bg-bottom [clip-path:polygon(0_11.5vw,_100%_0,_100%_100%,_0_calc(100%-11.5vw))] px-5 bg-[#172124]">
          <div className="w-full md:max-w-[80.556vw] max-md:max-w-[90vw] dt:max-w-[1200px] mx-auto relative pt-[40px]">
            <div className="w-full max-w-[1160px] mx-auto">
            <h3 className="flex justify-center items-center relative">
              <img className="md:hidden"
                src="/assets/images/title-02-sp.png"
                alt="GPSでオファー待ち！"
              />
              <img className="max-md:hidden"
                src="/assets/images/title-02.png"
                alt="GPSでオファー待ち！"
              />
              <TitleDeco02 />
            </h3>
            </div>
            <div className="flex justify-end gap-[20vw] md:px-6 md:py-10 py-5">
            <div className="fade-up w-[65vw] md:w-[43.75vw] dt:w-[630px] bg-white/60 pt-[2.222vw] dt:pt-[32px] md:pb-5 px-[1.736vw] dt:px-[25px]">
                <div className="bg-[url('/assets/images/co-top-left.png'),_url('/assets/images/co-top-right.png'),_url('/assets/images/co-bottom-left.png'),_url('/assets/images/co-bottom-right.png')] bg-[position:top_left,_top_right,_bottom_left,_bottom_right] bg-no-repeat w-[60vw] md:w-[38.889vw] dt:w-[560px]  p-[0.556vw] dt:p-2 mx-auto md:bg-[length:38px_38px] bg-[length:20px_20px]">
                  <div className="text-[2.6vw] md:text-[1.458vw] dt:text-[21px] font-extrabold bg-white flex items-center justify-center py-2 md:py-5 px-3 size-full md:min-h-[105px] min-h-[40px]">
                  企業よ、私はここにいる！
                  </div>
                </div>
                <div className="p-[1.389vw] dt:p-5">
                  <p className="text-[2.8vw] md:text-[1.319vw] dt:text-[19px] font-medium leading-[1.7]">
                  高精度の位置情報機能を使って、まるで宝探しのように企業や店舗はあなたを見つけ出します！<br />あなたの価値を最大限に活かせる仕事がここにあります！
                  </p>
                </div>
              </div>
              <figure className="fade-up md:top-[13vw] top-[42.5vw] absolute left-[-7vw] md:left-[4vw]">
                <img className="max-dt:w-[28.194vw]" src="/assets/images/conent-02-img.png" alt="" />
                <span className="absolute top-[4.375vw] dt:top-[63px] left-[1.875vw] dt:left-[27px] w-[22.222vw] dt:w-[320px]">
                  <img className="rotate-flash" src="/assets/images/circle-02.png" alt="" />
                </span>
              </figure>
            </div>
          </div>
        </div>
        <div className="md:h-[65.278vw] h-[105vw] relative -mt-[calc(11.5vw-8px)] pt-[11.5vw] md:bg-[url('/assets/images/bg-04.png')] bg-[url('/assets/images/bg-04-sp.png')] bg-cover bg-bottom [clip-path:polygon(0_0,_100%_11.5vw,_100%_calc(100%-11.5vw),_0_100%)] px-5">
          <div className="w-full md:max-w-[80.556vw] max-w-[90vw] dt:max-w-[1160px] mx-auto relative">
            <h3 className="fade-up flex justify-center items-center relative">
              <img className="md:hidden"
                src="/assets/images/title-03-sp.png"
                alt="NFTで自分を証明！"
              />
              <img className="max-md:hidden"
                src="/assets/images/title-03.png"
                alt="NFTで自分を証明！"
              />
              <TitleDeco03 />
            </h3>
            <div className="flex gap-[20vw] md:px-6 md:py-10 py-5">
              <div className="fade-up w-[65vw] md:w-[43.75vw] dt:w-[630px] bg-white/[0.78] pt-[2.222vw] dt:pt-[32px] md:pb-5 px-[1.736vw] dt:px-[25px]">
                <div className="bg-[url('/assets/images/co-top-left.png'),_url('/assets/images/co-top-right.png'),_url('/assets/images/co-bottom-left.png'),_url('/assets/images/co-bottom-right.png')] bg-[position:top_left,_top_right,_bottom_left,_bottom_right] bg-no-repeat w-[60vw] md:w-[38.889vw] dt:w-[560px]  p-[0.556vw] dt:p-2 mx-auto md:bg-[length:38px_38px] bg-[length:20px_20px]">
                  <div className="text-[2.6vw] md:text-[1.458vw] dt:text-[21px] font-extrabold bg-white flex items-center justify-center py-2 md:py-5 px-3 size-full">
                  企業よ、これが私だ！<br />
                  NFTが「あなたが、あなたである事」を、<br />
                  証明してくれます。
                  </div>
                </div>
                <div className="p-[1.389vw] dt:p-5">
                  <p className="text-[2.8vw] md:text-[1.319vw] dt:text-[19px] font-medium leading-[1.7]">
                    NFTには基本情報に加えて、配達に使う愛車など <br />
                    自分をよりよく理解してもらうための情報も掲載できます！
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-scroll className="fade-up absolute bottom-0 inset-x-0 flex justify-center items-center">
        <div className="w-[92.708vw] dt:w-[1335px] relative">
        <figure className="w-full">
          <img className="" src="/assets/images/conent-03-img.png" alt="" />
        </figure>
        <p className="absolute max-dt:w-[21.181vw] top-[0.833vw] dt:top-[12px] right-[15.139vw] dt:right-[218px]">
        <img className="rotate-flash" src="/assets/images/circle-03.png" alt="" />
        </p>
        <p data-splitting className="splitting absolute font-gothic text-[1.389vw] dt:text-[20px] font-extrabold right-[6.944vw] dt:right-[100px] top-[26.042vw] dt:top-[375px]">
          NFTは、<br />
          〇〇様と本人認識をしました！
        </p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
