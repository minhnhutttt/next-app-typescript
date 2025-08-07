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
    <div className="group flex-1 flex flex-col relative odd:justify-end even:justify-start">
        <div className="flex flex-col items-center w-full group-even:justify-end justify-end group-even:flex-col-reverse h-1/2">
            <div className="md:text-[28px] text-[20px] text-[#688BF5] font-medium md:my-[26px] my-5">{phase}</div>
            <div><img className="group-even:rotate-180" src="/assets/images/line.png" alt="" /></div>
            <div className="my-5">
                <p className="text-center md:text-[24px] text-[18px] font-semibold mb-2.5">{title}</p>
                <ul className="md:text-[14px] text-[12px] font-light">
                    {list.map((item, index) => (
                        <li key={item}>{item}</li>
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
        <h2 className="fade-up text-center md:text-[64px] text-[32px] font-medium text-[#C8D6FF] md:leading-loose py-5 px-2.5 tracking-widest">Utility Design & Roadmap</h2>
        <div className="relative md:mt-[60px] mt-10">
            <div className="absolute w-full h-px inset-x-0 bg-[#688BF5] top-1/2"></div>
            <div className="flex w-full max-w-[1300px] mx-auto gap-6 lg:gap-[50px] relative h-[675px]">
                {dataRoadmap.map((item, index) => (
                    <RoadmapItem key={index} phase={item.phase} title={item.title} list={item.list} />
                ))}
            </div>
        </div>
      </div>
    </section>
  )
}