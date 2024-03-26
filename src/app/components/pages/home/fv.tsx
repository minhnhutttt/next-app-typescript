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
                        <h2 className="absolute top-8 md:top-[85px] w-full leading-[0.9] text-left text-white animate-[xbounce_0.5s_ease-in_backwards]">
                            <span className="w-full text-center opacity-[0.48] md:text-[90px] lg:text-[135px] text-[11.5vw] font-bold">Digital</span> <br />
                            <span className="w-full text-center opacity-[0.48] md:text-[90px] lg:text-[135px] text-[11.5vw] font-bold">Transformation,</span> <br />
                            <span className="w-full text-center opacity-[0.48] md:text-[90px] lg:text-[135px] text-[11.5vw] font-bold">Business Plus</span>
                        </h2>
                        <div className="absolute inset-x-0 bottom-[8vw] md:bottom-[70px]">
                        <div className="text-white text-center animate-[xFade_0.5s_ease-in_1s_backwards]">
                            <span className="relative w-full text-center font-semibold text-[4.3vw] md:text-[24px] ">DXで荒ぶる市場に、圧倒的成功をもたらす</span>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="border-y border-white flex justify-center">
                    <div className="w-full max-w-[1026px] px-4 md:px-3 py-5 md:h-[101px] flex justify-between relative">
                        <p className="md:text-[36px] text-[4.3vw] font-bold text-white font-helvetica">Our mission</p>
                        <div className="md:text-[60px] text-[6.5vw] font-helvetica font-bold text-white leading-none">
                            <p className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"><span className="inline-block [transform:rotateX(90deg)] relative origin-bottom animate-[xRotate_4.5s_ease-in_1.5s_infinite]">販売促進</span></p>
                            <p className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"><span className="inline-block [transform:rotateX(90deg)] relative origin-bottom animate-[xRotate_4.5s_ease-in_3s_infinite]">集客</span></p>
                            <p className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"><span className="inline-block [transform:rotateX(90deg)] relative origin-bottom animate-[xRotate_4.5s_ease-in_4.5s_infinite]">売上の向上</span></p>
                        </div>
                        <div className=""></div>
                    </div>
                </div>
                <a href="#principle" className="h-[154px] flex justify-center items-center flex-col bg-black/55 duration-300 hover:opacity-70">
                    <p className="text-center md:text-[16px] text-[16px] font-bold text-[#F6F6F6] font-helvetica mb-2">
                        Scroll Down <br />
                        Right Column
                    </p>
                    <figure>
                        <img src="/images/arrow-down.png" alt="" />
                    </figure>
                </a>
            </div>
        </section>
    );
}
