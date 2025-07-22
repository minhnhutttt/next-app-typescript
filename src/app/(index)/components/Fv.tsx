"use client";

const Fv = () => {
  return (
    <section className="overflow-hidden relative w-full bg-white mx-auto md:w-[640px]">
      <video
        className="w-full"
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
    </section>
  );
};

export default Fv;
