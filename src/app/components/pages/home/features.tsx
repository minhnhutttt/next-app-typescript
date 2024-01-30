export default function Features() {
    return (
      <div className="bg-[#D9D9D9] px-5">
        <div className="w-full md:max-w-[1240px] max-w-[480px] mx-auto pt-10">
            <h4 className="xl:text-[80px] text-[5.556vw] text-center text-[#112F78] font-semibold leading-snug">
              メンエスバズーカは <br />
              嬉しい機能が満載
            </h4>
            <div className="flex md:mt-12 mt-10 gap-8 justify-center md:gap-[54px] max-md:flex-wrap">
              <div className="w-[calc(50%-20px)] md:w-1/3 relative">
                <figure>
                  <img src="/images/img-target.png" alt="" />
                </figure>
                <div className="absolute inset-0 flex items-end justify-center xl:mb-20 mb-[5.556vw]">
                  <p className="xl:text-[64px] md:text-[4.444vw] text-[5vw] text-white font-bold text-center leading-tight">
                    広告 <br />
                    SEO対策
                  </p>
                </div>
              </div>
              <div className="w-[calc(50%-20px)] md:w-1/3 relative">
                <figure>
                  <img src="/images/img-target.png" alt="" />
                </figure>
                <div className="absolute inset-0 flex items-end justify-center xl:mb-20 mb-[5.556vw]">
                  <p className="xl:text-[64px] md:text-[4.444vw] text-[5vw] text-white font-bold text-center leading-tight">
                    豊富な<br />
                    デザイン
                  </p>
                </div>
              </div>
              <div className="w-[calc(50%-20px)] md:w-1/3 relative">
                <figure>
                  <img src="/images/img-target.png" alt="" />
                </figure>
                <div className="absolute inset-0 flex items-end justify-center xl:mb-20 mb-[5.556vw]">
                  <p className="xl:text-[64px] md:text-[4.444vw] text-[5vw] text-white font-bold text-center leading-tight">
                    即納品<br />
                    可能
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-end -mt-[5.556vw] xl:-mt-20 -mr-5 relative">
              <img className="max-md:w-[70vw] max-xl:w-[63.750vw]" src="/images/img-gun.png" alt="" />
            </div>
        </div>
      </div>
    );
  }
  