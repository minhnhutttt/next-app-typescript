"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const Sections = () => {
  const ref = useScrollAnimations();

  return (
    <section ref={ref} className="relative pt-14 md:pt-[215px] overflow-hidden">
      <div className="w-full mx-auto">
        <h3 data-scroll className="ani-slide-bottom text-center text-[7vw] md:text-[30px] font-bold mb-[90px]">ROGYXが3つの選ばれる理由</h3>
        <div className="space-y-[190px]">
        <div className="xl:pr-[173px] md:pr-16 pr-3">
          <div className="md:pr-6 pr-5 md:pb-6 pb-5 relative">
          <span data-scroll className="ani-slide-left no-timing md:rounded-br-[90px] rounded-br-[50px] bg-[url(/assets/images/item-bg-01.png)] bg-cover bg-no-repeat absolute inset-0"></span>
            <div className="md:rounded-br-[90px] rounded-br-[50px] border-r border-b border-white relative">
              <div className="flex max-md:flex-col-reverse md:px-5 max-md:pb-3">
                <div className="flex-1 flex flex-col md:items-center mt-2 md:mt-[60px] max-md:px-7">
                  <p data-scroll className="ani-slide-left md:text-center text-[5.128vw] md:text-[24px] xl:text-[2vw] font-bold text-white flex"><span>1️.</span><span>インタラクティブ表現の<br className="md:hidden" />プロフェッショナル</span></p>
                  <div data-scroll className="ani-slide-bottom md:mt-10 mt-2 lg:mt-20">
                    <ul className="list-disc text-[4vw] md:text-[18px] xl:text-[1.5vw] md:pl-6 pl-5">
                      <li>
                      アニメーション×Webの融合<br />（GSAP、Three.jsを活用）
                      </li>
                      <li>モダンなUI/UX設計でユーザー体験を最適化</li>
                    </ul>
                  </div>
                </div>
                <div className="max-md:right-[-24px] md:mr-[-84px] md:mt-[-36px] mt-[-50px] max-md:w-[calc(100%+12px)] max-xl:w-2/5 max-lg:w-1/2 relative">
                  <img data-scroll className="ani-slide-right w-full max-w-none" src="/assets/images/item-img-01.png" alt="" />
                  <p data-scroll className="ani-slide-top md:hidden absolute bottom-0 pl-1.5"><img src="/assets/images/item-text-01-sp.svg" alt="Interactive" /></p>
                </div>
              </div>
              <div data-scroll className="ani-slide-top flex justify-end pr-20 pt-16 max-md:hidden">
                <p><img className="opacity-[0.72]" src="/assets/images/item-text-01.svg" alt="Interactive" /></p>
              </div>
            </div>
          </div>
        </div>

        <div className="xl:pl-[173px] md:pl-16 pl-3">
          <div className="md:pl-6 pl-5 md:pb-6 pb-5 relative">
          <span data-scroll className="ani-slide-right no-timing md:rounded-bl-[90px] rounded-bl-[50px] bg-[url(/assets/images/item-bg-02.png)] bg-cover bg-no-repeat absolute inset-0"></span>
            <div className="md:rounded-bl-[90px] rounded-bl-[50px] border-l border-b border-white relative">
              <div className="flex max-md:flex-col md:px-5 max-md:pb-3">
              <div className="max-md:left-[-32px] md:ml-[-84px] md:mt-[-36px] mt-[-50px] max-md:w-[calc(100%+12px)] max-xl:w-2/5 max-lg:w-1/2 relative">
                  <img data-scroll className="ani-slide-left w-full max-w-none" src="/assets/images/item-img-02.png" alt="" />
                  <p data-scroll className="ani-slide-top md:hidden absolute bottom-0 right-10 pr-1.5"><img src="/assets/images/item-text-02-sp.svg" alt="Speed&Quality" /></p>
                </div>
                <div className="flex-1 flex flex-col md:items-center mt-2 md:mt-[60px] max-md:px-7">
                  <p data-scroll className="ani-slide-right md:text-center text-[5.128vw] md:text-[24px] xl:text-[2vw] font-bold text-white flex"><span>2.</span><span>スピードとクオリティを両立</span></p>
                  <div data-scroll className="ani-slide-bottom md:mt-10 mt-2 lg:mt-20">
                    <ul className="list-disc text-[4vw] md:text-[18px] xl:text-[1.5vw] md:pl-6 pl-5">
                      <li>
                      アニメーション×Webの融合（GSAP、<br />Three.jsを活用）
                      </li>
                      <li>
                      モダンなUI/UX設計でユーザー体験を <br />
                      最適化
                      </li>
                    </ul>
                  </div>
                </div>
                
              </div>
              <div data-scroll className="ani-slide-top flex justify-end pr-20 pt-16 max-md:hidden">
                <p className="-mb-5 opacity-[0.72]"><img src="/assets/images/item-text-02.svg" alt="Speed&Quality" /></p>
              </div>
            </div>
          </div>
        </div>

        <div className="xl:pr-[173px] md:pr-16 pr-3">
          <div className="md:pr-6 pr-5 md:pb-6 pb-5 relative">
          <span data-scroll className="ani-slide-left no-timing md:rounded-br-[90px] rounded-br-[50px] bg-[url(/assets/images/item-bg-01.png)] bg-cover bg-no-repeat absolute inset-0"></span>
            <div className="md:rounded-br-[90px] rounded-br-[50px] border-r border-b border-white relative">
              <div className="flex max-md:flex-col-reverse md:px-5 max-md:pb-3">
                <div className="flex-1 flex flex-col md:items-center mt-2 md:mt-[60px] max-md:px-7">
                  <p data-scroll className="ani-slide-left md:text-center text-[5.128vw] md:text-[24px] xl:text-[2vw] font-bold text-white flex"><span>3.</span><span>マーケティング × システム開発の融合</span></p>
                  <div data-scroll className="ani-slide-bottom md:mt-10 mt-2 lg:mt-20">
                    <ul className="list-disc text-[4vw] md:text-[18px] xl:text-[1.5vw] md:pl-6 pl-5">
                      <li>
                      アニメーション×Webの融合 <br />（GSAP、Three.jsを活用）
                      </li>
                      <li>モダンなUI/UX設計でユーザー体験を最適化</li>
                    </ul>
                  </div>
                </div>
                <div className="max-md:right-[-24px] md:mr-[-84px] md:mt-[-36px] mt-[-50px] max-md:w-[calc(100%+12px)] max-xl:w-2/5 max-lg:w-1/2 relative">
                  <img data-scroll className="ani-slide-right w-full max-w-none" src="/assets/images/item-img-03.png" alt="" />
                  <p data-scroll className="ani-slide-top md:hidden absolute bottom-0 pl-1.5"><img src="/assets/images/item-text-03-sp.svg" alt="Interactive" /></p>
                </div>
              </div>
              <div data-scroll className="ani-slide-top flex justify-end pr-20 pt-16 max-md:hidden px-4">
                <p><img src="/assets/images/item-text-03.svg" alt="Interactive" /></p>
              </div>
            </div>
          </div>
        </div>

        <div className="xl:pl-[173px] md:pl-16 pl-3">
          <div className="md:pl-6 pl-5 md:pb-6 pb-5 relative">
          <span data-scroll className="ani-slide-right no-timing md:rounded-bl-[90px] rounded-bl-[50px] bg-[url(/assets/images/item-bg-02.png)] bg-cover bg-no-repeat absolute inset-0"></span>
            <div className="md:rounded-bl-[90px] rounded-bl-[50px] border-l border-b border-white relative">
              <div className="flex max-md:flex-col md:px-5 max-md:pb-3">
              <div className="max-md:left-[-32px] md:ml-[-84px] md:mt-[-36px] mt-[-50px] max-md:w-[calc(100%+12px)] max-xl:w-2/5 max-lg:w-1/2 relative">
                  <img data-scroll className="ani-slide-left w-full max-w-none" src="/assets/images/item-img-04.png" alt="" />
                  <p data-scroll className="ani-slide-top md:hidden absolute bottom-0 right-10 pr-1.5"><img src="/assets/images/item-text-04-sp.svg" alt="Speed&Quality" /></p>
                </div>
                <div className="flex-1 flex flex-col md:items-center mt-2 md:mt-[60px] max-md:px-7">
                  <p data-scroll className="ani-slide-right md:text-center text-[5.128vw] md:text-[24px] xl:text-[2vw] font-bold text-white flex"><span>4.</span><span>最新技術を積極的に採用</span></p>
                  <div data-scroll className="ani-slide-bottom md:mt-10 mt-2 lg:mt-20">
                    <ul className="list-disc text-[4vw] md:text-[18px] xl:text-[1.5vw] md:pl-6 pl-5">
                      <li>
                      Next.js / Three.js / WebGL などを駆使
                      </li>
                      <li>
                      最新技術の導入スピードが業界トップクラス
                      </li>
                    </ul>
                  </div>
                </div>
                
              </div>
              <div data-scroll className="ani-slide-top flex justify-end pr-20 pt-16 max-md:hidden">
                <p className="-mb-5"><img src="/assets/images/item-text-04.svg" alt="Speed&Quality" /></p>
              </div>
            </div>
          </div>
        </div>

        </div>
      </div>
    </section>
  );
};

export default Sections;
