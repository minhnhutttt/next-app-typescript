"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";
export default function Explore() {

    const signatureRef = useRef<HTMLElement>(null);
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

            containers.addEventListener('mouseenter', handleMouseEnter);
            containers.addEventListener('mouseleave', handleMouseLeave);
            containers.addEventListener('mousemove', handleMouseMove);

            return () => {
                containers.removeEventListener('mouseenter', handleMouseEnter);
                containers.removeEventListener('mouseleave', handleMouseLeave);
                containers.removeEventListener('mousemove', handleMouseMove);
            };
        });
    }, []);
    return (
        <section ref={signatureRef} className="horizontal-section hidden md:block relative pointer-events-auto z-[3] md:py-[10vw] md:-mt-[10vw] opacity-0 hover:opacity-100">
            <div className="flex justify-between gap-[2vw] px-[2vw]">
                <a href="/" className="js-target-position w-[30vw] pointer-events-auto overflow-hidden relative">
                    <div className="pt-[106.5%]"></div>
                    <div className="absolute inset-0 overflow-hidden js-explore z-10">
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
    );
}