'use client'

import { ReactNode } from "react"

const dataRoadmap = [
    {
        phase: "Phase 1",
        title: "Foundation",
        list: [
            "Capacity purchase system implementation",
            "Agent reward program launch",
            "Initial incentive mechanisms",
            "STRG token issuance and capacity sales",
        ]
    },
    {
        phase: "Phase 2",
        title: "Platform Enhancement",
        list: [
            "Staking mechanism introduction",
            "Premium features rollout",
            "Enterprise solutions development",
            "Enhanced agent system (Bronze, Silver, Gold tiers)",
        ]
    },
    {
        phase: "Phase 3",
        title: "Ecosystem Expansion",
        list: [
            "Distributed storage network",
            "AI integration and data utilization",
            "DAO voting system activation",
            "Data economy development",
        ]
    },
    {
        phase: "Phase 4",
        title: "Global Scale",
        list: [
            "International expansion",
            "Multi-chain compatibility",
            "Complete DAO governance transition",
            "Advanced data analytics and AI features",
        ]
    },
]

const RoadmapItem = ({phase, title, list} : {phase: string, title: string, list: string[]}) => (
    <div className="fade-up group md:w-[23.44vw] xl:w-[300px] flex-1 flex flex-col relative md:odd:justify-end md:even:justify-start">
        <div className="flex flex-col md:items-center w-full h-full md:justify-between md:group-even:flex-col-reverse md:group-odd:pt-[20vw] xl:group-odd:pt-[calc(50cqh-190px)] md:group-even:pb-[20vw] xl:group-even:pb-[calc(50cqh-190px)]">
            <div className="flex flex-row-reverse md:flex-col md:items-center justify-end md:justify-center md:group-even:flex-col-reverse max-md:gap-10">
                <div className="md:text-[2.19vw] xl:text-[28px] text-[20px] text-[#688BF5] font-medium md:my-[2.03vw] xl:my-[26px] my-5">{phase}</div>
                <div><img className="md:group-even:rotate-180 max-md:-rotate-90 max-xl:w-[2.5vw] max-md:w-4" src="/assets/images/line.png" alt="" /></div>
            </div>
            <div className="md:my-[1.56vw] xl:my-5">
                <p className="text-center md:text-[1.88vw] xl:text-[24px] text-[18px] font-semibold mb-[0.78vw] xl:mb-2.5">{title}</p>
                <ul className="md:text-[1.3vw] xl:text-[14px] text-[12px] font-light list-disc pl-5">
                    {list.map((item, index) => (
                        <li className="break-keep" key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
)

export default function Roadmap() {
  return (
    <section className="relative pt-16 md:pt-[100px] px-5 bg-[url(/assets/images/bg-roadmap.png)] bg-cover pb-32 md:pb-[230px]">
      <div className="w-full max-w-[1440px] mx-auto">
        <h2 className="fade-up text-center md:text-[64px] text-[32px] font-medium text-[#C8D6FF] xl:leading-loose py-5 px-2.5 tracking-widest">Utility Design & Roadmap</h2>
        <div className="relative md:mt-[60px] mt-10 max-md:max-w-[380px] max-md:mx-auto max-md:w-full max-md:px-6">
            <div className="absolute md:w-full w-px h-full md:h-px inset-y-0 md:inset-x-0 bg-[#688BF5] max-md:left-[4px] md:top-1/2"></div>
            <div className="flex w-full max-w-[1300px] mx-auto gap-10 md:gap-[2.34vw] xl:gap-[50px] relative @container max-md:flex-col">
                {dataRoadmap.map((item, index) => (
                    <RoadmapItem key={index} phase={item.phase} title={item.title} list={item.list} />
                ))}
            </div>
        </div>
      </div>
    </section>
  )
}