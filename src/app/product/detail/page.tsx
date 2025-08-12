"use client"
import useScrollAnimations from "@/hooks/useScrollAnimations";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Options } from '@splidejs/splide';
import React, { useEffect, useRef, useState } from 'react';
import '@splidejs/react-splide/css';
import { ButtonItem } from "@/components/common/ButtonItem";
import { Button } from "@/components/common/Button";
import { useAuth } from "@/context/AuthContext";

interface Slide {
    src: string;
    alt: string;
}

const slides: Slide[] = [
    { src: "/assets/images/products/product-01.png", alt: "Slide 1" },
    { src: "/assets/images/products/product-01.png", alt: "Slide 2" },
    { src: "/assets/images/products/product-01.png", alt: "Slide 3" },
    { src: "/assets/images/products/product-01.png", alt: "Slide 4" },
    { src: "/assets/images/products/product-01.png", alt: "Slide 5" },
    { src: "/assets/images/products/product-01.png", alt: "Slide 6" },
    { src: "/assets/images/products/product-01.png", alt: "Slide 7" },
];

export default function Detail() {

    const ref = useScrollAnimations()

    const { isLoggedIn } = useAuth();

    const mainRef = useRef<any>(null);
    const thumbsRef = useRef<any>(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (mainRef.current?.splide && thumbsRef.current?.splide) {
            mainRef.current.splide.sync(thumbsRef.current.splide);
        }
    }, []);

    const mainOptions: Options = {
        type: "loop",
        perPage: 1,
        gap: "1rem",
        pagination: false,
        height: "20rem",
        arrows: false
    };

    const thumbsOptions: Options = {
        type: "slide",
        rewind: true,
        gap: "1rem",
        pagination: false,
        fixedWidth: 110,
        fixedHeight: 70,
        cover: true,
        focus: "center",
        isNavigation: true,
        arrows: false
    };

    useEffect(() => {
        const splide = thumbsRef.current?.splide;

        if (!splide) return;

        const updateProgress = () => {
            const total = splide.length;
            const index = splide.index + 1;
            const ratio = index / total;
            setProgress(ratio * 100);
        };

        splide.on("mounted move", updateProgress);
        updateProgress();

        return () => {
            splide.off("mounted move", updateProgress);
        };
    }, []);

    return (
        <main ref={ref}>
            <section className="md:my-[180px] my-20 px-5">
                <div className="w-full md:max-w-[1220px] max-w-[500px] mx-auto ">
                    <div className="flex gap-11 lg:gap-[100px] max-lg:flex-col max-lg:items-center max-md:px-4">
                        <div className="md:w-[500px] w-[355px]">
                            <Splide
                                options={mainOptions}
                                aria-label="Main Slider"
                                ref={mainRef}>
                                {slides.map((slide) => (
                                    <SplideSlide key={slide.src} className="!w-[355px] md:!w-[500px] md:!h-[500px] !aspect-square rounded-[20px]">
                                        <img src={slide.src} alt={slide.alt} className="w-full h-full object-cover" />
                                    </SplideSlide>
                                ))}
                            </Splide>

                            <Splide
                                options={thumbsOptions}
                                aria-label="Thumbnail Slider"
                                ref={thumbsRef}
                                className="mt-4">
                                {slides.map((slide) => (
                                    <SplideSlide key={slide.src} className="rounded-[10px]" >
                                        <img src={slide.src} alt={slide.alt} />
                                    </SplideSlide>
                                ))}
                            </Splide>
                            <div className="px-5 mt-3 md:mt-4">
                                <div className="w-full bg-[#F2F2F2] h-[5px] mb-2 relative overflow-hidden rounded max-w-[1000px] mx-auto">
                                    <div
                                        className="bg-[#3E7976] h-full transition-all duration-300"
                                        style={{ width: `${progress}%` }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 max-md:text-center">
                            <p className="md:text-[40px] text-[24px] font-bold mb-6 md:mb-8">商品名</p>
                            <p className="md:text-[24px] text-[18px] mb-6 md:mb-8">会社名</p>
                            <div className="flex max-md:flex-col flex-wrap gap-4 md:gap-5 max-md:items-center">
                                {["お菓子", "東京都", "醤油"].map((item, index) => (
                                    <button className="max-md:max-w-[172px] max-md:w-full flex items-center justify-center h-[50px] rounded-full bg-[#367F7B] shadow-[0_4px_0_0_#417370] md:text-[24px] text-[18px] font-bold text-white px-7" key={index}>{item}</button>
                                ))}
                            </div>
                            <div className="flex py-8 md:py-[88px] w-full gap-5 max-xl:flex-wrap max-md:justify-center">
                                <div className="max-md:flex max-md:justify-center max-md:items-center">
                                    <p className="md:text-[24px] text-[18px]">希望小売価格・上代</p>
                                    <p className="font-bold text-[24px]">〇〇円</p>
                                </div>
                                {!isLoggedIn &&
                                <div className="max-md:flex max-md:justify-center">
                                    <button className="fade-up px-6 w-full flex items-center justify-center rounded-full bg-[#367F7B] shadow-[0_4px_0_0_#417370] md:text-[24px] font-bold text-white hover:!opacity-70 duration-300 text-[18px] h-[56px]">ログインして価格を見る</button>
                                </div>
                                }
                            </div>
                            <div className="max-md:flex max-md:justify-center">
                                <Button sm type={0}>この商品の問い合わせをする</Button>
                            </div>
                            <p className="md:text-[24px] text-[18px] text-left md:pt-[88px] pt-11">
                                紹介文が入ります。紹介文が入ります。紹介文が入ります。紹介文が入ります。紹介文が入ります。紹介文が入ります。紹介文が入ります。紹介文が入ります。紹介文が入ります。紹介文が入ります。紹介文が入ります。紹介文が入ります。紹介文が入ります。紹介文が入ります。紹介文が入ります。紹介文が入ります。紹介文が入ります。紹介文が入ります。紹介文が入ります。紹介文が入ります。紹介文が入ります。紹介文が入ります。紹介文が入ります。紹介文が入ります。
                            </p>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex items-center max-md:flex-col md:py-[88px] py-11">
                            <div className="relative"><img className="max-md:w-[120px]" src="/assets/images/girl-2.png" alt="" /></div>
                            <div className="flex-1 border-4 border-[#CCC] md:rounded-[60px] rounded-[30px] py-20 max-md:pb-[52px] md:ml-[-98px] px-10 md:px-[110px] lg:px-[167px] max-md:mt-[-60px]">
                                <div className="w-full max-w-[783px] mx-auto">
                                    <p className="md:text-[40px] text-[24px] font-bold">
                                        AIコンシェルジュの<br />イチ押しポイント！
                                    </p>
                                    <div className="md:text-[24px] text-[18px] mt-7 md:mt-10">
                                        紹介文が入ります。紹介文が入ります。紹介文が入ります。紹介文が入ります。紹介文が入ります。紹介文が入ります。紹介文が入ります。紹介文が入ります。紹介文が入ります。紹介文が入ります。紹介文が入ります。紹介文が入ります。紹介文が入ります。紹介文が入ります。紹介文が入ります。紹介文が入ります。紹介文が入ります。紹介文が入ります。紹介文が入ります。紹介文が入ります。紹介文が入ります。紹介文が入ります。紹介文が入ります。紹介文が入ります。
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <Button sm type={0}>この商品の問い合わせをする</Button>
                        </div>
                    </div>
                    <div className="md:mt-[180px] mt-20">
                        <div className="flex justify-center md:gap-6 gap-4 max-md:flex-col items-center">
                            <div className="w-[283px] h-20 md:h-[100px] border border-[#EEC822] flex items-center justify-center rounded-[10px] md:text-[24px] text-[18px] font-bold text-center p-1 gap-1">
                                <span><img src="/assets/images/ic-hand.svg" alt="" /></span>
                                <span>試食BAR アサクサ<br />リアルレビュー</span>
                            </div>
                            <p className="md:text-[40px] text-[24px] font-bold">試食した方の感想</p>
                        </div>
                        <div className="w-full max-w-[1150px] mx-auto">
                            <div className="flex items-center gap-4 md:gap-20 md:mt-[72px] mt-8">
                                <div className="flex flex-col items-center justify-center gap-2 md:gap-2.5">
                                    <p><img className="max-md:max-w-[52px]" src="/assets/images/user-icon-01.png" alt="" /></p>
                                    <p className="md:text-[24px] text-[16px]">30代　男性</p>
                                </div>
                                <div className="flex-1 md:border-4 border-2 border-[#ccc] px-5 py-5 md:py-[52px] md:rounded-[60px] rounded-[30px] relative flex items-center justify-center md:before:aspect-[53/68] before:aspect-[15/17] md:before:bg-[url(/assets/images/sppech-bubble.png)] before:bg-[url(/assets/images/sppech-bubble-sp.png)] before:absolute before:right-full before:w-[15px] md:before:w-[53px]">
                                    <div className="w-full max-w-[728px] mx-auto">
                                        <div className="flex items-center max-md:gap-y-1 gap-4 md:gap-9 flex-wrap">
                                            <p className="md:text-[32px] text-[18px] font-bold">味：<span className="text-[#3E7976]">4<span className="md:text-[24px] text-[16px]">/5</span></span></p>
                                            <p className="md:text-[32px] text-[18px] font-bold">価格：<span className="text-[#3E7976]">やや高い</span></p>
                                            <p className="md:text-[32px] text-[18px] font-bold">総合点：<span className="text-[#3E7976]">8<span className="md:text-[24px] text-[16px]">/10</span></span></p>
                                        </div>
                                        <p className="md:text-[24px] text-[18px] mt-2 md:mt-8">テキストテキストテキストテキストテキストテキストテキストテキ</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 md:gap-20 md:mt-[72px] mt-8">
                                <div className="flex flex-col items-center justify-center gap-2 md:gap-2.5">
                                    <p><img className="max-md:max-w-[52px]" src="/assets/images/user-icon-02.png" alt="" /></p>
                                    <p className="md:text-[24px] text-[16px]">30代　女性</p>
                                </div>
                                <div className="flex-1 md:border-4 border-2 border-[#ccc] px-5 py-5 md:py-[52px] md:rounded-[60px] rounded-[30px] relative flex items-center justify-center md:before:aspect-[53/68] before:aspect-[15/17] md:before:bg-[url(/assets/images/sppech-bubble.png)] before:bg-[url(/assets/images/sppech-bubble-sp.png)] before:absolute before:right-full before:w-[15px] md:before:w-[53px]">
                                    <div className="w-full max-w-[728px] mx-auto">
                                        <div className="flex items-center max-md:gap-y-1 gap-4 md:gap-9 flex-wrap">
                                            <p className="md:text-[32px] text-[18px] font-bold">味：<span className="text-[#3E7976]">4<span className="md:text-[24px] text-[16px]">/5</span></span></p>
                                            <p className="md:text-[32px] text-[18px] font-bold">価格：<span className="text-[#3E7976]">ちょうどいい</span></p>
                                            <p className="md:text-[32px] text-[18px] font-bold">総合点：<span className="text-[#3E7976]">8<span className="md:text-[24px] text-[16px]">/10</span></span></p>
                                        </div>
                                        <p className="md:text-[24px] text-[18px] mt-2 md:mt-8">テキストテキストテキストテキストテキストテキストテキストテキ</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center md:mt-[103px] mt-12">
                                <Button sm type={0}>この商品の問い合わせをする</Button>
                            </div>
                        </div>
                    </div>
                    <div className="md:mt-[180px] mt-20">
                        <div className="flex justify-center md:gap-6 gap-4 max-md:flex-col items-center">
                            <p className="md:text-[40px] text-[24px] font-bold">バイヤーのアンケート結果</p>
                        </div>
                        <div className="w-full max-w-[1150px] mx-auto">
                            <div className="flex items-center gap-4 md:gap-20 md:mt-[72px] mt-8">
                                <div className="flex flex-col items-center justify-center gap-2 md:gap-2.5">
                                    <p><img className="max-md:max-w-[52px]" src="/assets/images/user-icon-03.png" alt="" /></p>
                                </div>
                                <div className="flex-1 md:border-4 border-2 border-[#ccc] px-5 py-5 md:py-[52px] md:rounded-[60px] rounded-[30px] relative flex items-center justify-center md:before:aspect-[53/68] before:aspect-[15/17] md:before:bg-[url(/assets/images/sppech-bubble.png)] before:bg-[url(/assets/images/sppech-bubble-sp.png)] before:absolute before:right-full before:w-[15px] md:before:w-[53px]">
                                    <div className="w-full max-w-[728px] mx-auto">
                                        <p className="md:text-[24px] text-[18px]">テキストテキストテキストテキストテキストテキストテキストテキ</p>
                                        <p className="md:text-[24px] text-[16px] md:mt-8 mt-2.5 text-right">2025/08/07</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 md:gap-20 md:mt-[72px] mt-8">
                                <div className="flex flex-col items-center justify-center gap-2 md:gap-2.5">
                                    <p><img className="max-md:max-w-[52px]" src="/assets/images/user-icon-03.png" alt="" /></p>
                                </div>
                                <div className="flex-1 md:border-4 border-2 border-[#ccc] px-5 py-5 md:py-[52px] md:rounded-[60px] rounded-[30px] relative flex items-center justify-center md:before:aspect-[53/68] before:aspect-[15/17] md:before:bg-[url(/assets/images/sppech-bubble.png)] before:bg-[url(/assets/images/sppech-bubble-sp.png)] before:absolute before:right-full before:w-[15px] md:before:w-[53px]">
                                    <div className="w-full max-w-[728px] mx-auto">
                                        <p className="md:text-[24px] text-[18px]">テキストテキストテキストテキストテキストテキストテキストテキ</p>
                                        <p className="md:text-[24px] text-[16px] md:mt-8 mt-2.5 text-right">2025/08/07</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-center md:mt-[103px] mt-12">
                                <Button sm type={0}>この商品の問い合わせをする</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
