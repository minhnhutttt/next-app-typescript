export default function Fv() {
  return (
    <section className="relative z-10 flex min-h-[550px] justify-center pt-[150px] md:min-h-[800px] md:pt-[170px]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 z-10 bg-[url(/assets/images/fv-bg.png)] bg-cover bg-center"></div>
        <video
          className="relative h-full w-full opacity-40 max-xl:object-cover"
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
    </section>
  );
}
