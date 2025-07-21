"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ReactElement } from 'react';

gsap.registerPlugin(ScrollTrigger);
interface DataItem {
    id: string;
    title: string | ReactElement;
    image: string;
}
const data: DataItem[] = [
    {
        id: '01',
        title: 'OPEN FAVEとは？',
        image: '/assets/images/of-lab-01.png'
    },
    {
        id: '02',
        title: 'OPEN FAVEの楽しみ方',
        image: '/assets/images/of-lab-02.png'
    },
    {
        id: '03',
        title: 'FAVERを探す',
        image: '/assets/images/of-lab-03.png'
    },
    {
        id: '04',
        title: 'DWEを手にれる',
        image: '/assets/images/of-lab-04.png'
    },
    {
        id: '05',
        title: (<>DIVERウォレット<br />の設定方法</>),
        image: '/assets/images/of-lab-05.png'
    },
    {
        id: '06',
        title: (<>あなたのコインを<br />発行しよう</>),
        image: '/assets/images/of-lab-06.png'
    },
]
const OfLab: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    useEffect(() => {
        const ctx = gsap.context(() => {
            const labs = gsap.utils.toArray<HTMLElement>('.js-lab');

            labs.forEach((lab: HTMLElement, index: number) => {
                const item = lab as HTMLElement;
                const overlay = item.querySelector('.js-overlay');

                ScrollTrigger.create({
                    trigger: item,
                    start: "center center+=120",
                    end: "center center-=120",
                    onEnter: () => {
                        gsap.to(overlay, {
                            opacity: 0,
                            duration: 0.3,
                            ease: "power2.out"
                        });
                    },
                    onLeave: () => {
                        gsap.to(overlay, {
                            opacity: 1,
                            duration: 0.3,
                            ease: "power2.out"
                        });
                    },
                    onEnterBack: () => {
                        gsap.to(overlay, {
                            opacity: 0,
                            duration: 0.3,
                            ease: "power2.out"
                        });
                    },
                    onLeaveBack: () => {
                        gsap.to(overlay, {
                            opacity: 1,
                            duration: 0.3,
                            ease: "power2.out"
                        });
                    },
                });
            });
        }, sectionRef);
        return () => {
            ctx.revert();
        };
    }, []);
    return (
        <section ref={sectionRef} className="overflow-hidden sm:mt-[75px] mt-[55px] px-[15px] sm:pb-[330px] pb-[240px]">
            <div className="flex justify-center items-center">
                <img src="/assets/images/of-lab-title.svg" alt="オブラボ" />
            </div>
            <div className="mt-[30px]">
                {data.map((item: DataItem) => (
                    <div className="js-lab py-[15px]" key={item.id}>
                    <div className="relative sm:rounded-[80px] rounded-[40px] overflow-hidden">
                        <div className=""><img src={item.image} alt="" /></div>
                        <div className="js-overlay absolute inset-0 bg-[#1A0136]/[0.7] flex items-end sm:p-10 p-6 transition-opacity duration-500">
                            <p className="sm:text-[48px] text-[24px] text-[#FC5291] font-bold">{item.title}</p>
                        </div>
                    </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
export default OfLab;