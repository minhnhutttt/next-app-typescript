'use client'

export default function Fv() {
  return (
    <section className="relative z-10 min-h-[550px] md:min-h-[800px] flex justify-center pt-[150px] md:pt-[170px]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url(/assets/images/fv-bg.png)] bg-cover bg-center z-10"></div>
        <video
          className="w-full h-full max-xl:object-cover relative opacity-40"
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
      <div className="w-full max-w-[500px] md:max-w-[1440px] md:px-[60px] px-5 relative z-20">
        <h1 className="fade-up md:text-[80px] text-[28px] font-bold text-[#C8D6FF] text-shadow-[0_4px_100px_#000] leading-[1.3]">
          A Practical Storage Token <br />
          Value Increases<br />
          As Usage Grows
        </h1>
        <p className="fade-up w-full max-w-[390px] md:text-[18px] text-[15px] leading-loose font-extralight md:mt-10 mt-6">
          DIVER Storage Coin Innovation: Challenging the structural issues of cloud services - high costs, centralization, and insufficient rewards
        </p>
        <div className="fade-up flex justify-center items-center md:mt-12 mt-8">
          <a href="/" className="flex items-center justify-center w-[260px] md:w-[300px] h-16 md:h-20 md:text-[18px] text-[15px] font-medium rounded-full relative bg-transparent overflow-hidden tracking-wider">
            <span className="absolute inset-0 z-0 backdrop-filter backdrop-blur-[0px] [filter:url(#lg-dist)] isolate"></span>
            <span className="absolute inset-0 z-[1] bg-[#00021C]/[0.2]"></span>
            <span className="absolute inset-0 z-[2] [border-radius:inherit] overflow-hidden [box-shadow:inset_1px_1px_0_rgba(255,_255,_255,_0.75),_inset_0_0_5px_rgba(255,_255,_255,_0.75)]"></span>
            <span className="relative z-10">WHITEPAPER</span>
          </a>
        </div>
      </div>
    </section>
  )
}