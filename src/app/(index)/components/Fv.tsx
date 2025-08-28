export default function Fv() {
  return (
    <section className="relative z-10 md:h-[880px]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url(/assets/images/bg-fv.png)] bg-cover bg-bottom"></div>
        <video
          className="relative z-10 h-full w-full object-cover opacity-40"
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
      <div className="relative z-20 h-full">
        <div className="relative mx-auto flex h-full w-full max-w-[1440px] max-md:flex-col md:pl-5">
          <div className="relative z-10 pt-25 md:w-[50%] md:pt-[120px] xl:w-[717px]">
            <h1 className="flex items-center justify-center">
              <img src="/assets/images/fv-text.svg" alt="" />
            </h1>
            <div className="-mt-5 flex justify-center [filter:drop-shadow(0_0_250px_rgba(46,_220,_255,_0.29))]">
              <img src="/assets/images/fv-phones.png" alt="" />
            </div>
          </div>

          <div className="inset-0 flex items-end justify-end md:absolute md:pt-15">
            <span className="md:max-xl:w-[70%]">
              <img src="/assets/images/chara-box.png" alt="" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
