"use client";

const Tracouhunter = () => {
  return (
    <section className="relative md:py-[60px] py-[40px] bg-[url('/assets/images/bg-tracou.png')] bg-cover">
        <div className="w-full md:max-w-[1440px] max-w-[440px] mx-auto">
            <div className="relative">
                <div data-scroll className="ani-fade-up absolute inset-0 flex justify-center items-center mix-blend-overlay">
                    <img src="/assets/images/tracouhunter-text.png" alt="" />
                </div>
                <div data-scroll className="ani-fade-up !delay-300 flex justify-center relative">
                    <h5><img className="[filter:drop-shadow(0px_0px_92.8px_0px_rgba(15,_127,_207,_0.40))]" src="/assets/images/tracouhunter-logo.png" alt="" /></h5>
                </div>
            </div>
            <div className="flex md:items-end mt-5 max-md:flex-col-reverse">
                <div data-scroll className="ani-fade-up flex-1 md:pb-[7.292vw] dt:pb-[105px] px-5 max-md:pt-10">
                    <h5 className="flex justify-center">
                        <img className="max-md:w-[220px] [filter:drop-shadow(0px_4px_104px_#000083)]" src="/assets/images/tracouhunter-title.png" alt="戦国NFT" />
                    </h5>
                    <p className="text-center font-bold font-serif md:text-[20px] text-[16px] text-white md:mt-6 mt-4">
                    戦国NFTがあなたの街に所狭しと出現中！<br />
                    無料でNFTを獲得できます！
                    </p>
                    <div className="flex justify-center md:mt-14 mt-9">
                        <a href="https://tracouhunter.com/" target="_blank" rel="noopener noreferrer" className="">
                        <img className="max-md:w-[300px]" src="/assets/images/tracouhunter-link.png" alt="Tracou Hunter" /></a>
                    </div>
                </div>
                <figure data-scroll className="ani-fade-up max-md:w-full max-dt:w-[63.403vw]">
                    <img src="/assets/images/img-tracouhunter.png" alt="" />
                </figure>
            </div>
        </div>
    </section>
  );
};

export default Tracouhunter;
