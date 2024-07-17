"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";
import Marque from "@/components/marque";

const Evolution = () => {
  const ref = useScrollAnimations();

  return (
    <section ref={ref}>
        <Marque />
        <div className="bg-[url('/assets/images/bg-evolution.png')] md:bg-center max-dt:bg-[length:100%_auto] md:h-[63.75vw] dt:h-[918px] bg-no-repeat flex items-center justify-center md:-mt-[130px] -mt-[60px] relative">
            <span className="absolute inset-0 mix-blend-color-dodge bg-[url('/assets/images/bg-evolution-line.png')] max-dt:bg-[length:100%_auto] md:bg-center bg-no-repeat"></span>
            <div className="w-full max-w-[1340px] mx-auto relative flex items-center justify-center h-full max-md:pb-[200px]">
                <div className="size-[832px] bg-[#C5EEFF]/[0.2] filter blur-[150px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
                <div className="w-[320px] md:w-[39.236vw] dt:w-[565px] h-[364px] md:h-[44.583vw] dt:h-[642px] bg-[url('/assets/images/bg-evolution-main.png')] bg-[length:100%_100%] flex items-center pt-[10vw] dt:pt-36 flex-col [filter:drop-shadow(0px_0px_70px_rgba(0,_3,_68,_0.40))] px-8">
                    <h3 className="u-text-gradient text-[30px] md:text-[3.333vw] dt:text-[48px] font-black text-center mb-4">
                    NFT<span className="dt:text-[38px] text-[22px] md:text-[2.639vw]">は</span> <br />
                    もっと<span className="dt:text-[38px] text-[22px] md:text-[2.639vw]">進化する！</span>
                    </h3>
                    <p className="w-full max-w-[453px] text-white dt:text-[20px] md:text-[1.389vw] text-[14px]">
                    NFTはアートのイメージが強いですが、これからもっと進化します！<br />
                    <br />
                    近い将来、お店で購入するトレーディングカードのように、中身は所有者だけが確認できるようになります。
                    </p>
                </div>
                <div className="absolute right-5 md:right-0 bottom-0 md:bottom-[4.861vw] dt:bottom-[70px]">
                    <div className="flex justify-center -mb-[1.111vw] dt:-mb-4 relative">
                        <p className="w-full md:max-w-[19.097vw] dt:max-w-[275px] max-w-[170px] dt:text-[18px] md:text-[1.25vw] text-[11px] text-white">
                        希少性とセキュリティ、開封時の<br />ワクワク感が強化されるんだね！
                        </p>
                    </div>
                    <figure className="max-md:w-[200px] max-dt:w-[27.569vw]">
                        <img src="/assets/images/img-evolution.png" alt="" />
                    </figure>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Evolution;
