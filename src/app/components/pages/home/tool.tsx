"use client"
import SectionContainer from "../../common/sectionContainer";

const ToolData = [
    {
        id: "01",
        imgae: '/images/img-tool-01.png',
        title: 'Front End',
        content: <div className="grid grid-cols-2">
            <span>
                ・React <br />
                ・HTML<br />
                ・CSS<br />
                ・JavaScript
            </span>
            <span>
                ・React <br />
                ・HTML<br />
                ・CSS<br />
                ・JavaScript
            </span>
        </div>
    },
    {
        id: "02",
        imgae: '/images/img-tool-02.png',
        title: 'Back End',
        content: <span>
            ・JavaScript <br />
            ・PHP<br />
            ・AWS
        </span>
    },
    {
        id: "03",
        imgae: '/images/img-tool-03.png',
        title: 'Marketing',
        content: <span>
            ・Google Analytics <br />
            ・Google Serch Console
        </span>
    },
    {
        id: "04",
        imgae: '/images/img-tool-04.png',
        title: 'Project Management',
        content: <span>
            ・Asana <br />
            ・Google Workspace
        </span>
    },
    {
        id: "05",
        imgae: '/images/img-tool-05.png',
        title: 'Design',
        content: <span>
            ・Figma <br />
            ・Photoshop <br />
            ・Illustrator
        </span>
    },
    {
        id: "06",
        imgae: '/images/img-tool-06.png',
        title: 'Video',
        content: <span>
            ・Aftereffects <br />
            ・PremirePro<br />
            ・DaVinch Resolve<br />
            ・Blender
        </span>
    },
    {
        id: "07",
        imgae: '/images/img-tool-07.png',
        title: 'AI',
        content: <span>
            ・Chat GPT <br />
            ・HeyGen
        </span>
    },
]

export default function Tool() {
    return (
        <div className="max-md:pl-0 px-5">
            <div className="flex relative w-full max-w-[1440px] mx-auto">
                <div className="w-1/3 md:w-[39.86%]">
                    <div className="sticky top-0 left-0 flex justify-between max-md:flex-col-reverse min-h-screen">
                        <figure className="flex items-end">
                            <img className="max-md:w-[40px]" src="/images/tool-stack.png" alt="Tool Stack" />
                        </figure>
                        <div className="flex items-center font-mincho font-semibold md:text-[28px] text-[16px] text-[#3B3B3B] max-md:py-10 md:px-8 text-center max-md:justify-center">
                            我々の<br className="md:hidden" />Tool Stack
                        </div>
                    </div>
                </div>
                <div className="flex-1 pt-6 md:pt-11">
                    <div className="border-l border-black flex items-start relative w-full">
                        <div className="flex items-end sticky top-0 left-0 min-h-screen py-10 px-1.5 md:px-2.5">
                            <img className="max-md:w-4" src="/images/scroll-down-arrow.png" alt="" />
                        </div>
                        <div className="flex-1 py-10 md:py-[75px] md:pl-10 max-w-[715px] max-xl:pb-10 max-xl:space-y-10">
                        {ToolData.map((item, index) => (
                            <div className="flex even:justify-end w-full xl:even:-top-[36px] relative" key={index}>
                                <div
                                    className="text-[#6D6D6D]"
                                >
                                    <figure>
                                        <img className="border border-white" src={item.imgae} alt={item.title} />
                                    </figure>
                                    <h5 className="md:text-[21px] text-[17px] font-black py-3 md:py-3.5 border-b border-[#828282]">{item.title}</h5>
                                    <div className="md:text-[17px] text-[13px] leading-[1.5] pt-2 text-black">{item.content}</div>
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
