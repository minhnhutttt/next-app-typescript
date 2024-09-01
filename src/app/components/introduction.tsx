"use client";

const Introduction = () => {
  return (
    <section className="relative">
      <div className="dt:h-[930px] relative -mt-[11.5vw] pt-[11.5vw] bg-[url('/assets/images/bg-02.png')] bg-cover [clip-path:polygon(0_0,_100%_11.5vw,_100%_calc(100%-11.5vw),_0_100%)] px-5">
        <div className="w-full max-w-[1160px] mx-auto">
          <h3 className="flex justify-center items-center">
            <img
              src="/assets/images/title-01.png"
              alt="DELIVERY Man Mapとは？"
            />
          </h3>
          <div className="flex px-6 py-10">
            <div className="w-[630px] bg-white/60 pt-[32px] pb-5 px-[25px]">
              <div className="bg-[url('/assets/images/content-box.png')] w-[560px] h-[183px] bg-bottom p-2 mx-auto">
                <div className="text-[21px] font-extrabold bg-white flex items-center justify-center p-3 size-full">
                  企業からのオファーを待て！
                  <br />
                  地図上に表示された <br />
                  あなたのNFTに届く配達依頼をクリアして
                  <br />
                  報酬をゲットせよ！
                </div>
              </div>
              <div className="p-5">
                <p className="text-[19px] font-medium leading-[1.7]">
                Delivery Man Mapは、マップの閲覧を許可された信頼ある企業や店舗からあなたの元へ配達のオファーが届きます！<br />
                あなたは働ける日時やスキルを記載したNFTを <br />
                Delivery Man Mapに掲載し、ただ待つだけ。<br />
                あなたを必要としている企業からのオファーを見逃すな！
                </p>
              </div>
            </div>
            <figure>
              <img src="/assets/images/conent-01-img.png" alt="" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
