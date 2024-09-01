"use client";

const FV = () => {
  return (
    <section className="relative">
        <div data-scroll  className="relative md:bg-[url(/assets/images/fv.png)] bg-[url(/assets/images/fv-sp.png)] h-[600px] md:h-[67.778vw] dt:h-[976px] bg-cover bg-top [clip-path:polygon(0_0,_100%_0,_100%_calc(100%-11.5vw),_0%_100%)]">
        <div className="w-full max-w-[1440px] mx-auto relative h-full z-50">
        <h3 className="ani-fade-up dt:w-[506px] max-dt:w-[35.139vw] relative z-50">
          <img className="w-full max-[1440px]:hidden" src="/assets/images/fv-img-dt.png" alt="" />
          <img className="w-full min-[1441px]:hidden" src="/assets/images/fv-img.png" alt="" />
        </h3>
        <h1 className="ani-fade-up absolute top-10 md:top-[30px] left-[22.917vw] pr-5">
          <img src="/assets/images/fv-text.png" alt="" />
        </h1>
        <div className="ani-fade-up absolute left-1/2 -translate-x-1/2 md:bottom-[210px] bottom-[110px] md:w-[48.958vw] dt:w-[705px] w-[90%] md:h-[15.556vw] dt:h-[224px] mx-auto [clip-path:polygon(0%_0%,_100%_0,_100%_80%,_95%_100%,_0%_100%)] overflow-hidden z-50">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,_#FFF_50%,_#1E072B_371.87%)] opacity-65"></div>
          <div className="w-full h-full md:px-5 px-3 relative">
            <div className="flex justify-between h-10 md:h-[50px] items-center border-b border-[#2E177E]">
              <h5 className="text-[17px] md:text-[1.528vw] dt:text-[22px] font-bold ">DELIVERY Man Mapとは！</h5>
              <figure className="max-md:w-20">
                <img src="/assets/images/deco-01.png" alt="" />
              </figure>
            </div>
            <p className="md:text-[1.319vw] dt:text-[19px] text-[14px] font-inter p-2">
            企業や店舗と配達パートナーを繋ぐマッチングサービスです。地図アプリ上で、配達パートナーの詳細情報を可視化し、最適な配達依頼のマッチングを実現します。NFTを活用した安全で簡単なマッチングシステムにより、企業や店舗には確実な配達を、配達パートナーは効率的な収入獲得を可能にするサービスです。
            </p>
          </div>
        </div>
        <div className="ani-fade-up absolute bottom-0 flex justify-center inset-x-0 pb-[1vw] min-[1441px]:pb-[2vw]">
            <img className="max-dt:w-[86.667vw] transform origin-bottom-left" src="/assets/images/delivery-man.png" alt="" />
        </div>
      </div>
      </div>
      <div data-scroll className="w-full max-w-[1440px] mx-auto absolute inset-0 z-0 max-md:hidden">
        <div className="absolute dt:top-[255px] dt:left-[160px] top-[17.708vw] left-[11.111vw]">
          <img className="ani-fade-up  max-dt:w-[23.125vw] w-[333px]" src="/assets/images/fv-line.png" alt="" />
        </div>
      </div>
      <div id="delivery"  className="h-[72.569vw] dt:h-[1045px] relative [clip-path:polygon(0_calc(11.5vw),_100%_0%,_100%_100%,_0%_calc(100%-11.5vw))] pt-[14.5vw] -mt-[14.5vw] bg-[url('/assets/images/bg-case.png')] bg-right-bottom bg-no-repeat max-dt:bg-[length:100%_90%]">
        <div className="relative w-full md:max-w-[93.056vw] max-w-[98vw] dt:max-w-[1340px] mx-auto">
          <div className="w-full md:max-w-[72.222vw] max-w-[100%] dt:max-w-[1040px] mx-auto relative">
            <div data-scroll className="ani-fade-up absolute dt:top-[-40px] top-[-2.778vw] left-0">
              <img className="max-dt:w-[18.403vw] max-md:w-[24.403vw]" src="/assets/images/img-case-01.png" alt="" />
            </div>
            <div className="relative">
              <div data-scroll  className="ani-fade-up flex justify-center px-4 relative">
                <h3><img className="max-md:w-[49.222vw] max-dt:w-[37.222vw]" src="/assets/images/title-urgent-case-arises.png" alt="緊急案件発生！隙間時間で近所企業救え！ " /></h3>
              </div>
              <div data-scroll  className="ani-fade-up flex justify-center py-[3.333vw] dt:py-12">
                <p className="md:text-[2.083vw] text-[3.2vw] dt:text-[30px] font-extrabold">
                  Delivery Man Mapで <br />
                  人材不足の物流業界の<br />
                  救世主となり<br />
                  報酬と感謝をゲットしよう！
                </p>
              </div>
            </div>
          </div>
          
          <div data-scroll className="ani-fade-up absolute md:top-[9.722vw] max-md:top-[16vw] dt:top-[140px] right-0">
              <img className="max-dt:w-[36.042vw] max-md:w-[31.042vw]" src="/assets/images/img-case.png" alt="" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default FV;
