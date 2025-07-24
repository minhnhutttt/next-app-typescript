"use client";
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ReactElement } from 'react';

gsap.registerPlugin(ScrollTrigger);

interface DataItem {
    id: string;
    title: string | ReactElement;
    image: string;
    link?: string;
    modal?: boolean;
    videoUrl?: string;
}

const data: DataItem[] = [
    {
        id: '01',
        title: 'OPEN FAVEとは？',
        image: '/assets/images/of-lab-01.png',
        link: 'https://openfave.com',
    },
    {
        id: '02',
        title: 'OPEN FAVEの楽しみ方',
        image: '/assets/images/of-lab-02.png',
        modal: true,
        videoUrl: '/assets/videos/fv.mp4',
    },
    {
        id: '03',
        title: 'FAVERを探す',
        image: '/assets/images/of-lab-03.png',
        link: 'https://www.open-fave.com/search',
    },
    {
        id: '04',
        title: 'DWEを手にれる',
        image: '/assets/images/of-lab-04.png',
        link: 'https://www.open-fave.com/scs',
    },
    {
        id: '05',
        title: (<>DIVERウォレット<br />の設定方法</>),
        image: '/assets/images/of-lab-05.png',
        link: 'https://zexamarket.jp/lp/app/',
    },
    {
        id: '06',
        title: (<>あなたのコインを<br />発行しよう</>),
        image: '/assets/images/of-lab-06.png',
        link: 'https://reg.open-fave.com/',
    },
];

const OfLab: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentVideo, setCurrentVideo] = useState<string>('');
    const videoRef = useRef<HTMLVideoElement>(null);

    const openModal = (videoUrl: string) => {
        setCurrentVideo(videoUrl);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentVideo('');
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    const handleModalClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    const handleItemClick = (item: DataItem, e: React.MouseEvent) => {
        if (item.modal && item.videoUrl) {
            e.preventDefault();
            openModal(item.videoUrl);
        }
    };

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

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isModalOpen]);

    return (
        <>
            <section ref={sectionRef} className="overflow-hidden sm:mt-[75px] mt-[55px] px-[15px] sm:pb-[330px] pb-[240px]">
                <div className="flex justify-center items-center">
                    <img src="/assets/images/of-lab-title.svg" alt="オブラボ" />
                </div>
                <div className="mt-[30px]">
                    {data.map((item: DataItem) => (
                        <a 
                            href={item.modal ? '#' : item.link} 
                            target={item.modal ? undefined : "_blank"} 
                            rel={item.modal ? undefined : "noopener noreferrer"} 
                            className="js-lab block py-[15px] cursor-pointer" 
                            key={item.id}
                            onClick={(e) => handleItemClick(item, e)}
                        >
                            <div className="relative sm:rounded-[80px] rounded-[40px] overflow-hidden">
                                <div className=""><img src={item.image} alt="" /></div>
                                <div className="js-overlay absolute inset-0 bg-[#1A0136]/[0.7] flex items-end sm:p-10 p-6 transition-opacity duration-500">
                                    <p className="sm:text-[48px] text-[24px] text-[#FC5291] font-bold">{item.title}</p>
                                </div>
                                <div className="absolute inset-0 flex items-end sm:p-10 p-6 transition-opacity duration-500">
                                    <p className="sm:text-[48px] text-[24px] text-[#FC5291] font-bold">{item.title}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </section>

            {isModalOpen && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
                    onClick={handleModalClick}
                >
                    <div className="relative w-full max-w-4xl mx-4 bg-black rounded-lg overflow-hidden">
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        
                        <video
                            ref={videoRef}
                            src={currentVideo}
                            controls
                            autoPlay
                            className="w-full h-auto max-h-[80vh]"
                        >
                            Trình duyệt của bạn không hỗ trợ video.
                        </video>
                    </div>
                </div>
            )}
        </>
    );
};

export default OfLab;