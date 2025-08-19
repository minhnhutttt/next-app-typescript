export default function Fv() {
  return (
    <section className="relative text-white">
      <div className="relative z-10 bg-[url(/assets/images/fv.png)] bg-cover px-4 pt-30 max-md:pb-10 md:h-[990px]">
        <div className="relative z-10 mx-auto w-full max-w-[440px] md:max-w-[1260px]">
          <div className="aspect-[430/250] w-[320px] md:ml-3 md:w-[430px]">
            <video
              className="relative h-full w-full object-cover"
              data-lazy-video=""
              data-lazy=""
              data-autoplay="true"
              preload="none"
              loop
              muted
              autoPlay
              src="/assets/videos/fv.mp4"
              playsInline
              data-loaded="true"
            ></video>
          </div>
          <div className="relative mt-10 md:mt-14">
            <h1 className="font-hind text-[30px] leading-[1.35] font-bold tracking-tight md:text-[8.7vw] xl:text-[112px]">
              <span className="inline-block">
                <img className="max-xl:w-[20vw] max-md:w-20" src="/assets/images/ai.svg" alt="AI" />
              </span>
              <span className="text-[24px] md:text-[8.2vw] xl:text-[105px]">が</span>
              全自動で運用する <br />
              <p>次世代の広告手法を</p>
              <p className="flex items-center max-md:flex-wrap md:gap-[5vw] xl:gap-16">
                <span>すべての事業者へ</span>
                <span className="text-[17px] leading-normal max-md:w-full md:text-[1.56vw] xl:text-[20px]">
                  手間ゼロの完全自動化。
                  <br />
                  成約報告でさらに加速する
                  <br />
                  最適化サイクル
                </span>
              </p>
            </h1>
          </div>
        </div>
      </div>
      <div className="absolute right-10 -bottom-24 md:right-24 md:-bottom-42">
        <img className="max-md:w-24" src="/assets/images/arrow.png" alt="" />
      </div>
    </section>
  );
}
