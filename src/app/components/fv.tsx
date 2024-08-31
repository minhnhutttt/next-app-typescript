"use client";

const FV = () => {
  return (
    <section className="relative">
        <div className="relative md:bg-[url(/assets/images/fv.png)] bg-[url(/assets/images/fv-sp.png)] h-[600px] md:h-[67.778vw] dt:h-[976px] bg-cover bg-top [clip-path:polygon(0_0,_100%_0,_100%_calc(100%-11.5vw),_0%_100%)]">
        <div className="w-full max-w-[1440px] mx-auto relative h-full">
        <h3 className="dt:w-[568px] w-[35.139vw]">
          <img className="w-full max-dt:hidden" src="/assets/images/fv-img-dt.png" alt="" />
          <img className="w-full dt:hidden" src="/assets/images/fv-img.png" alt="" />
        </h3>
        <h1 className="absolute top-10 md:top-[30px] left-[22.917vw] pr-5">
          <img src="/assets/images/fv-text.png" alt="" />
        </h1>
        <div className="absolute left-1/2 -translate-x-1/2 md:bottom-[210px] bottom-[110px] md:w-[48.958vw] dt:w-[705px] w-[90%] md:h-[15.556vw] dt:h-[224px] mx-auto [clip-path:polygon(0%_0%,_100%_0,_100%_80%,_95%_100%,_0%_100%)] overflow-hidden">
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
        <div className="absolute bottom-[0px] flex justify-center inset-x-0 pb-[1vw] dt:pb-[2vw]">
            <img className="max-dt:w-[86.667vw] transform origin-bottom-left" src="/assets/images/delivery-man.png" alt="" />
        </div>
      </div>
      </div>
      <div className="w-full max-w-[1440px] mx-auto absolute inset-0">
        <div className="absolute dt:top-[290px] dt:left-[225px] top-[17.708vw] left-[11.111vw]">
          <img className="max-dt:w-[23.125vw] w-[310px]" src="/assets/images/fv-line.png" alt="" />
        </div>
      </div>
      <div className="relative">
        <div className="flex justify-center">
          <h3><img src="/assets/images/title-urgent-case-arises.png" alt="緊急案件発生！隙間時間で近所企業救え！ " /></h3>
        </div>
      </div>
    </section>
  );
};

export default FV;
