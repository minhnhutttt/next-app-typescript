"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.config({
  nullTargetWarn: false,
});

const Signature = () => {
    const ref = useScrollAnimations();
    const signatureRef = useRef<HTMLElement>(null);
    const signatureContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
    const ctx = gsap.context(() => {
        gsap.set('.js-explore', {
            opacity: 0
        })
        
        const tl = gsap
            .timeline({
                scrollTrigger: {
                    trigger: signatureRef.current,
                    start: "top center",
                    end: "bottom bottom",
                    scrub: 1,
                    invalidateOnRefresh: true,
                    onUpdate: (self) => {
                        if (self.progress >= 1 && self.direction > 0) {
                            gsap.to('.js-explore', {
                                opacity: 1,
                                delay: 0.4,
                                duration: 0.3
                            })
                        } else if (self.progress < 1 || self.direction < 0) {
                            gsap.to('.js-explore', {
                                opacity: 0,
                                delay: 0.4,
                                duration: 0.3
                            })
                        }
                    }
                },
            })
            .to(".js-card-inner-01", {
                scale: 0.666667,
                x: 0,
                top: '100vh',
                left: "-32.633vw",
            })
            .to(".js-card-inner-02", {
                scale: 0.666667,
                top: '100vh',
                left: "0",
            }, '<')
            .to(".js-card-inner-03", {
                scale: 0.666667,
                x: 0,
                top: '100vh',
                left: "32.633vw",
            }, '<');

        ScrollTrigger.refresh();
    });

    return () => ctx.revert();
}, []);

    useEffect(() => {
        const exploreCursors = document.querySelectorAll('.js-explore-cursor');
        const exploreContainers = document.querySelectorAll('.js-explore');
        const containers = document.querySelector('.horizontal-section');
        
        exploreCursors.forEach((cursor, index) => {
            const container = exploreContainers[index];
            if (!container || !containers) return;
            const tl = gsap.timeline();
            gsap.set(cursor, {
                xPercent: -50,
                yPercent: -50,
                opacity: 0
            });

            const handleMouseEnter = (e: any) => {
                const rect = container.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                gsap.to(cursor, {
                    opacity: 1,
                    x: x,
                    y: y,
                    duration: 0,
                    delay: 0.2,
                    ease: "none"
                });
            };

            const handleMouseLeave = () => {
                gsap.to(cursor, {
                    duration: 0.3,
                    ease: "power2.out"
                });
            };

            const handleMouseMove = (e: any) => {
                const rect = container.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                gsap.to(cursor, {
                    x: x,
                    y: y,
                    duration: 1,
                    ease: "power2.out"
                })
            };

            // Thêm event listeners
            containers.addEventListener('mouseenter', handleMouseEnter);
            containers.addEventListener('mouseleave', handleMouseLeave);
            containers.addEventListener('mousemove', handleMouseMove);

            // Cleanup function
            return () => {
                containers.removeEventListener('mouseenter', handleMouseEnter);
                containers.removeEventListener('mouseleave', handleMouseLeave);
                containers.removeEventListener('mousemove', handleMouseMove);
            };
        });
    }, []);

    return (
        <section ref={ref} className="bg-white relative">
            <div ref={signatureContainerRef} className="explore w-full relative flex flex-col">
                <div className="relative w-full px-[2vw] ">
                    <div className="relative w-full md:h-screen py-[4rem] md:py-0 flex flex-col justify-center md:sticky top-0">
                        <div className="grid w-full uppercase md:text-[14vw] text-[14vw] font-bold leading-[0.85] tracking-tight">
                            <div className="overflow-hidden">
                                <p className="fade-up">Sunny's</p>
                            </div>
                            <div className="overflow-hidden text-right">
                                <p className="fade-up">Signature</p>
                            </div>
                            <div className="overflow-hidden">
                                <p className="fade-up">Keynote</p>
                            </div>
                            <div className="overflow-hidden text-right">
                                <p className="fade-up">Talks(3)</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center flex-col w-full">
                        <div className="trigger-01 card mb-[5vw] md:mb-0 js-card md:h-screen w-full md:sticky md:top-0 pointer-events-none flex justify-center items-start">
                            <div className="relative w-full md:max-w-[45vw]">
                                <div className="pt-[106.5%]"></div>
                                <div className="js-card-inner-01 bg-[#fff] origin-top h-full max-md:!scale-100 max-md:!left-0 max-md:!top-0 left-[0] overflow-hidden absolute top-[0] w-full border flex items-center justify-center rounded-[0.4rem] border-grey hover:bg-[#f4f4f4] transition-colors duration-300 z-[3]">
                                    <a href="/" className="absolute top-0 left-0 size-full z-2 opacity-0 pointer-events-auto">Visionary Leadership</a>
                                    <span className="absolute top-0 left-0 px-[5vw] md:px-[2vw] font-bold pt-[5vw] md:pt-[2vw] text-[10vw] md:text-[6vw] leading-none js-split">
                                        <div className="overflow-hidden">
                                            <p className="fade-up">1</p>
                                        </div>
                                    </span>
                                    <div className="absolute bottom-0 left-0 px-[3vw] pb-[3vw] md:pb-[6vw] w-full">
                                        <h3 className="md:my-[3vw] my-[4vw] text-[13vw] md:text-[6vw] leading-none font-bold">
                                            <div className="overflow-hidden"><p className="fade-up">Visionary </p></div>
                                            <div className="overflow-hidden"><p className="fade-up">Leadership </p></div>
                                        </h3>
                                        <div className="overflow-hidden md:text-[2vw] text-[5vw] font-medium">
                                            <p className="fade-up">How to rally people around your ideas</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="trigger-02 card mb-[5vw] md:mb-0 js-card md:h-screen w-full md:sticky md:top-0 pointer-events-none flex justify-center items-start">
                            <div className="relative w-full md:max-w-[45vw]">
                                <div className="pt-[106.5%]"></div>
                                <div className="js-card-inner-02 bg-[#fff] origin-top h-full max-md:!scale-100 max-md:!left-0 max-md:!top-0 left-[0] overflow-hidden absolute top-[0] w-full border flex items-center justify-center rounded-[0.4rem] border-grey hover:bg-[#f4f4f4] transition-colors duration-300 z-[3]">
                                    <a href="/" className="absolute top-0 left-0 size-full z-2 opacity-0 pointer-events-auto">Visionary Leadership</a>
                                    <span className="absolute top-0 left-0 px-[5vw] md:px-[2vw] font-bold pt-[5vw] md:pt-[2vw] text-[10vw] md:text-[6vw] leading-none js-split">
                                        <div className="overflow-hidden">
                                            <p className="fade-up">2</p>
                                        </div>
                                    </span>
                                    <div className="absolute bottom-0 left-0 px-[3vw] pb-[3vw] md:pb-[6vw] w-full">
                                        <h3 className="md:my-[3vw] my-[4vw] text-[13vw] md:text-[6vw] leading-none font-bold">
                                            <div className="overflow-hidden"><p className="fade-up">Visionary </p></div>
                                            <div className="overflow-hidden"><p className="fade-up">Leadership </p></div>
                                        </h3>
                                        <div className="overflow-hidden md:text-[2vw] text-[5vw] font-medium">
                                            <p className="fade-up">How to rally people around your ideas</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="trigger-03 card mb-[5vw] md:mb-0 js-card md:h-screen w-full md:sticky md:top-0 pointer-events-none flex justify-center items-start">
                            <div className="relative w-full md:max-w-[45vw]">
                                <div className="pt-[106.5%]"></div>
                                <div className="js-card-inner-03 bg-[#fff] origin-top h-full max-md:!scale-100 max-md:!left-0 max-md:!top-0 left-[0] overflow-hidden absolute top-[0] w-full border flex items-center justify-center rounded-[0.4rem] border-grey hover:bg-[#f4f4f4] transition-colors duration-300 z-[3]">
                                    <a href="/" className="absolute top-0 left-0 size-full z-2 opacity-0 pointer-events-auto">Visionary Leadership</a>
                                    <span className="absolute top-0 left-0 px-[5vw] md:px-[2vw] font-bold pt-[5vw] md:pt-[2vw] text-[10vw] md:text-[6vw] leading-none js-split">
                                        <div className="overflow-hidden">
                                            <p className="fade-up">3</p>
                                        </div>
                                    </span>
                                    <div className="absolute bottom-0 left-0 px-[3vw] pb-[3vw] md:pb-[6vw] w-full">
                                        <h3 className="md:my-[3vw] my-[4vw] text-[13vw] md:text-[6vw] leading-none font-bold">
                                            <div className="overflow-hidden"><p className="fade-up">Visionary </p></div>
                                            <div className="overflow-hidden"><p className="fade-up">Leadership </p></div>
                                        </h3>
                                        <div className="overflow-hidden md:text-[2vw] text-[5vw] font-medium">
                                            <p className="fade-up">How to rally people around your ideas</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section ref={signatureRef} className="horizontal-section hidden md:block relative pointer-events-auto z-3 md:py-[10vw] md:-mt-[10vw] opacity-0 hover:opacity-100">
                    <div className="flex justify-between gap-[2vw] px-[2vw]">
                        <a href="/" className="js-target-position w-[30vw] pointer-events-auto overflow-hidden relative">
                            <div className="pt-[106.5%]"></div>
                            <div className="absolute inset-0 overflow-hidden js-explore">
                                <div className="hidden md:block z-2 top-0 left-0 absolute w-[13vw] text-[1vw] pointer-events-none js-explore-trigger">
                                    <div className="bg-white p-[0.5rem] size-full border rounded-[0.4rem] border-grey will-change-transform js-explore-cursor opacity-0">
                                        <div className="flex flex-col w-full bg-grey rounded-[0.4rem] relative mb-[0.5rem] overflow-hidden">
                                            <div className="pt-[58%]"></div>
                                            <video
                                                className="absolute top-0 left-0 w-full h-full object-cover"
                                                data-lazy-video=""
                                                data-lazy=""
                                                data-autoplay="true"
                                                preload="none"
                                                loop
                                                muted
                                                autoPlay
                                                src="/assets/images/186784f4.mp4"
                                                playsInline
                                                data-loaded="true"
                                            ></video>
                                            <div className="px-5">Explore</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="/" className="js-target-position w-[30vw] pointer-events-auto overflow-hidden relative">
                            <div className="pt-[106.5%]"></div>
                            <div className="absolute inset-0 overflow-hidden js-explore">
                                <div className="hidden md:block z-2 top-0 left-0 absolute w-[13vw] text-[1vw] pointer-events-none js-explore-trigger">
                                    <div className="bg-white p-[0.5rem] size-full border rounded-[0.4rem] border-grey will-change-transform js-explore-cursor opacity-0">
                                        <div className="flex flex-col w-full bg-grey rounded-[0.4rem] relative mb-[0.5rem] overflow-hidden">
                                            <div className="pt-[58%]"></div>
                                            <video
                                                className="absolute top-0 left-0 w-full h-full object-cover"
                                                data-lazy-video=""
                                                data-lazy=""
                                                data-autoplay="true"
                                                preload="none"
                                                loop
                                                muted
                                                autoPlay
                                                src="/assets/images/186784f4.mp4"
                                                playsInline
                                                data-loaded="true"
                                            ></video>
                                            <div className="px-5">Explore</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="/" className="js-target-position w-[30vw] pointer-events-auto overflow-hidden relative">
                            <div className="pt-[106.5%]"></div>
                            <div className="absolute inset-0 overflow-hidden js-explore">
                                <div className="hidden md:block z-2 top-0 left-0 absolute w-[13vw] text-[1vw] pointer-events-none js-explore-trigger">
                                    <div className="bg-white p-[0.5rem] size-full border rounded-[0.4rem] border-grey will-change-transform js-explore-cursor opacity-0">
                                        <div className="flex flex-col w-full bg-grey rounded-[0.4rem] relative mb-[0.5rem] overflow-hidden">
                                            <div className="pt-[58%]"></div>
                                            <video
                                                className="absolute top-0 left-0 w-full h-full object-cover"
                                                data-lazy-video=""
                                                data-lazy=""
                                                data-autoplay="true"
                                                preload="none"
                                                loop
                                                muted
                                                autoPlay
                                                src="/assets/images/186784f4.mp4"
                                                playsInline
                                                data-loaded="true"
                                            ></video>
                                            <div className="px-5">Explore</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default Signature;