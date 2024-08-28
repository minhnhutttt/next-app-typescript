"use client";

const FV = () => {
  return (
    <section className="relative overflow-hidden">
        <div className="absolute inset-0">
                <video autoPlay muted loop playsInline preload="auto" className="w-full h-full object-cover object-center">
                <source src="/assets/videos/fv.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
        <div className="w-full max-w-[1440px] mx-auto md:pt-[143px] pt-[22vw] pb-12 md:pb-[124px] md:px-10 px-5">
            <h1 data-scroll className="ani-fade-up"><img src="/assets/images/fv-text.png" alt="タイパ最強！空いた時間で稼ぎまくれ！" /></h1>
        </div>
        <div className="absolute inset-x-0 -bottom-0.5 flex z-10">
            <img className="w-full" src="/assets/images/fv-line.png" alt="" />
        </div>
    </section>
  );
};

export default FV;
