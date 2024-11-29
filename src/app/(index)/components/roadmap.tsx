"use client";

const Roadmap = () => {
  return (
    <section className="relative h-screen bg-[url(/assets/images/roadmap-bg.png)] bg-cover overflow-hidden bg-center">
      <div className=" w-full max-w-[1400px] mx-auto  px-5 flex justify-center flex-col h-full text-white">
        <div className="ani-text">
        <h3 className="md:text-[clamp(28px,10.667vmin,96px)] text-[clamp(16px,10.667vmin,28px)] font-medium tracking-wide text-center">
          Market Expansion and Roadmap
        </h3>
        <p className="text-center text-[clamp(14px,2.222vmin,20px)]">
          Strengthen partnerships with breweries and retailers across Japan
          while promoting Sake Token to consumers for widespread adoption.
        </p>
        </div>
        <div className="ani-content">
        <div className=" flex justify-center max-md:pt-[clamp(10px,3vmin,30px)] my-[clamp(15px,4.444vmin,40px)]">
          <div className="w-full max-w-[clamp(260px,128.889vmin,1160px)] mx-auto flex justify-between max-md:flex-col items-center gap-5">
            <div className="md:w-[clamp(260px,53.333vmin,480px)] w-[clamp(260px,90vmin,480px)] md:aspect-[480/483] aspect-[700/340] md:bg-[url('/assets/images/frame-roadmap.png')] bg-[url('/assets/images/frame-roadmap-sp.png')] bg-cover flex justify-center items-center">
              <div className="w-[clamp(240px,38.889vmin,350px)]">
                <h5 className="text-center text-[clamp(16px,3.556vmin,32px)] pb-[clamp(5px,2.222vmin,20px)] border-b border-white">
                  Global Expansion
                </h5>
                <p className="md:text-[clamp(13px,2.667vmin,24px)] text-[clamp(13px,2.667vmin,24px)] pt-[clamp(5px,2.222vmin,20px)]">
                  Leverage domestic success to enter international markets,
                  establishing Sake Token as a standard currency for global sake
                  trade.
                </p>
              </div>
            </div>
            <div className="md:w-[clamp(260px,53.333vmin,480px)] w-[clamp(260px,90vmin,480px)] md:aspect-[480/483] aspect-[700/340] md:bg-[url('/assets/images/frame-roadmap.png')] bg-[url('/assets/images/frame-roadmap-sp.png')] bg-cover flex justify-center items-center">
              <div className="w-[clamp(240px,38.889vmin,350px)]">
                <h5 className="text-center text-[clamp(16px,3.556vmin,32px)] pb-[clamp(5px,2.222vmin,20px)] border-b border-white">
                Continuous Development
                </h5>
                <p className="md:text-[clamp(13px,2.667vmin,24px)] text-[clamp(13px,2.667vmin,24px)] pt-[clamp(5px,2.222vmin,20px)]">
                Enhance token functionality, develop new services, and incorporate community feedback for sustained ecosystem growth.
                </p>
              </div>
            </div>
          </div>
        </div>
        <a href="" className="ani-text w-[300px] md:w-[390px] h-[clamp(60px,9.556vmin,86px)] border border-white p-1 flex mx-auto duration-300 hover:opacity-70">
          <span className="size-full border border-white flex items-center justify-center font-bold text-[clamp(13px,3.111vmin,28px)] gap-2">
            <img className="max-md:w-[40px]" src="/assets/images/ic.svg" alt="" />
            WHITEPAPER
          </span>
        </a>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
