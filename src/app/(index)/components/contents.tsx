"use client";

const Contents = () => {
  return (
    <section className="relative h-screen bg-[url(/assets/images/content-bg.png)] bg-cover overflow-hidden bg-center">
        <span className="ani-mix-blend absolute h-full left-0 md:w-[28%] w-[36%] bg-[#BF2A2A] mix-blend-overlay"></span>
        <div className="w-full max-w-[1400px] mx-auto pt-[clamp(10px,5vmin,50px)] md:pt-[clamp(20px,7.778vmin,70px)] px-5 max-md:flex max-md:justify-center max-md:flex-col h-full relative">
            <h3 className="ani-text text-[clamp(16px,10.667vmin,28px)] md:text-[clamp(28px,10.667vmin,96px)] font-medium tracking-wide text-white">Technical Structure of <br />Sake Token</h3>
            <div className="ani-content flex justify-start max-md:pt-[clamp(10px,3vmin,30px)]">
                <div className="relative p-[clamp(1px,1.333vmin,12px)]">
                <div className="w-full md:w-[665px] bg-[#552323]/[0.4] border border-white p-[clamp(5px,3.333vmin,30px)]">
                <div className="absolute frame-white inset-0"></div>
                <div className="space-y-[clamp(5px,2.222vmin,20px)] relative text-white">
                    <div className="">
                        <p className="md:text-[clamp(5px,2.222vmin,20px)] font-bold md:leading-loose">Revitalization of the Sake Industry</p>
                        <p className="text-[13px] md:text-[14px] font-medium">
                        Sake Token connects brewers, wholesalers, retailers, and consumers on a unified platform to revitalize the industry. By using Sake Token as a universal point system, it encourages consumers to visit more breweries and retailers, contributing to regional economic development.
                        </p>
                    </div>
                    <div className="">
                        <p className="md:text-[clamp(5px,2.222vmin,20px)] font-bold md:leading-loose">Revitalization of the Sake Industry</p>
                        <p className="text-[13px] md:text-[14px] font-medium">
                        Sake Token connects brewers, wholesalers, retailers, and consumers on a unified platform to revitalize the industry. By using Sake Token as a universal point system, it encourages consumers to visit more breweries and retailers, contributing to regional economic development.
                        </p>
                    </div>
                    <div className="">
                        <p className="md:text-[clamp(5px,2.222vmin,20px)] font-bold md:leading-loose">Revitalization of the Sake Industry</p>
                        <p className="text-[13px] md:text-[14px] font-medium">
                        Sake Token connects brewers, wholesalers, retailers, and consumers on a unified platform to revitalize the industry. By using Sake Token as a universal point system, it encourages consumers to visit more breweries and retailers, contributing to regional economic development.
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

export default Contents;
