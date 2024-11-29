"use client";

const Impact = () => {
  return (
    <section className="relative h-screen bg-cover overflow-hidden bg-center">
        <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-bottom "
        >
          <source src="/assets/videos/impact.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <span className="ani-mix-blend absolute h-full left-0 md:w-[28%] w-[36%] bg-[#BF2A2A] mix-blend-overlay"></span>
        <div className="w-full max-w-[1400px] mx-auto pt-[clamp(10px,5vmin,50px)] md:pt-[clamp(20px,7.778vmin,70px)] px-5 max-md:flex max-md:justify-center max-md:flex-col h-full relative">
            <h3 className="ani-text text-[clamp(16px,10.667vmin,28px)] md:text-[clamp(28px,10.667vmin,96px)] font-medium tracking-wide text-white">Benefits and Impact of <br />Sake Token</h3>
            <div className="ani-content flex justify-start max-md:pt-[clamp(10px,3vmin,30px)]">
                <div className="relative p-[clamp(1px,1.333vmin,12px)]">
                <div className="w-full md:w-[665px] bg-[#AB8635]/[0.2] border border-white p-[clamp(5px,3.333vmin,30px)]">
                <div className="absolute frame-white inset-0"></div>
                <div className="space-y-[clamp(5px,2.222vmin,20px)] relative text-white">
                    <div className="">
                        <p className="md:text-[clamp(5px,2.222vmin,20px)] font-bold md:leading-loose">Support for the Sake Industry</p>
                        <p className="text-[13px] md:text-[14px] font-medium">
                        Sake Token provides a new economic model to increase sales for brewers and retailers, driving overall industry growth.
                        </p>
                    </div>
                    <div className="">
                        <p className="md:text-[clamp(5px,2.222vmin,20px)] font-bold md:leading-loose">Regional Economic Development</p>
                        <p className="text-[13px] md:text-[14px] font-medium">
                        It benefits local breweries and retailers, acting as a bridge for regional businesses to expand into urban and international markets.
                        </p>
                    </div>
                    <div className="">
                        <p className="md:text-[clamp(5px,2.222vmin,20px)] font-bold md:leading-loose">Expanded Consumer Choices</p>
                        <p className="text-[13px] md:text-[14px] font-medium">
                        Consumers can explore various sake brands across Japan, utilizing universal tokens for seamless rewards across multiple stores.
                        </p>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Impact;
