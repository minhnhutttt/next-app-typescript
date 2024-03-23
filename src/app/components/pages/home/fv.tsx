export default function FV() {
    return (
        <section className="relative bg-black overflow-hidden pt-20">
            <video
                src="/videos/dxb-top.mp4"
                autoPlay
                muted
                loop
                playsInline
                controls={false}
                className="w-full h-full inset-0 object-cover absolute"
            ></video>
            <div className="inset-x-0 flex-col flex justify-center relative z-20">
                <div className="md:h-[620px] h-[70vw] font-helvetica flex justify-center w-full px-5 bg-black/55">
                    <div className="relative w-full lg:max-w-[1026px] max-w-[700px]">
                        <div className="md:text-[90px] lg:text-[135px] text-[11vw] font-bold absolute top-1/2 -translate-y-1/2 w-full text-transparent text-center"><span className=" animate-[blurFadeInOut_3s_ease-in_backwards] ![animation-delay:0s]">Digital</span></div>
                        <div className="md:text-[90px] lg:text-[135px] text-[11vw] font-bold absolute top-1/2 -translate-y-1/2 w-full text-transparent text-center"><span className="animate-[blurFadeInOut_3s_ease-in_backwards] ![animation-delay:3s]">Transformation</span></div>
                        <div className="md:text-[90px] lg:text-[135px] text-[11vw] font-bold absolute top-1/2 -translate-y-1/2 w-full text-transparent text-center"><span className="animate-[blurFadeInOut_3s_ease-in_backwards] ![animation-delay:6s]">Business Plus</span></div>
                        <h2 className="absolute top-8 md:top-[85px] w-full text-transparent leading-[0.9] text-left">
                            <span className="w-full text-center opacity-[0.48] md:text-[90px] lg:text-[135px] text-[11vw] font-bold [text-shadow:0px_0px_1px_rgba(255,_255,_255,_0.89)] animate-[blurFadeIn_3s_ease-in_9s_backwards] ![animation-delay:9s]">Digital</span> <br />
                            <span className="w-full text-center opacity-[0.48] md:text-[90px] lg:text-[135px] text-[11vw] font-bold [text-shadow:0px_0px_1px_rgba(255,_255,_255,_0.89)] animate-[blurFadeIn_3s_ease-in_9s_backwards] ![animation-delay:10s]">Transformation,</span><br />
                            <span className="w-full text-center opacity-[0.48] md:text-[90px] lg:text-[135px] text-[11vw] font-bold [text-shadow:0px_0px_1px_rgba(255,_255,_255,_0.89)] animate-[blurFadeIn_3s_ease-in_9s_backwards] ![animation-delay:11s]">Business Plus</span>
                        </h2>
                        <div className="absolute inset-x-0 bottom-[8vw] md:bottom-[70px] ">
                        <p className="text-center font-semibold text-[4vw] md:text-[24px] animate-[fadeInRotate_1s_linear_14s_backwards] origin-center scale-100 rotate-0 text-white font-['Inter']">DXで荒ぶる市場に、圧倒的成功をもたらす</p>
                        </div>
                    </div>
                </div>
                <div className="border-y border-white flex justify-center">
                    <div className="w-full max-w-[1026px] px-8 md:px-3 py-5 md:h-[101px]">
                        <p className="md:text-[36px] text-[6vw] font-bold text-white font-helvetica">Our mission</p>
                    </div>
                </div>
                <div className="h-[154px] flex justify-center items-center flex-col bg-black/55">
                    <p className="text-center md:text-[16px] text-[13px] font-bold text-[#F6F6F6] font-helvetica mb-2">
                        Scroll Down <br />
                        Right Column
                    </p>
                    <figure>
                        <img src="/images/arrow-down.png" alt="" />
                    </figure>
                </div>
            </div>
        </section>
    );
}
