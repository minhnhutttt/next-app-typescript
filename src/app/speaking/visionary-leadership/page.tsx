"use client"
import PageHead from "@/components/pages/PageHead";
import PageWrapper from "@/components/container/PageWrapper";
import Vision from "./components/Vision";
import Companies from "@/components/pages/Companies";
import BrandIcon from "./components/BrandIcon";
import Speaking from "@/components/pages/Speaking";
import Impact, { ImpactDataType } from "@/components/pages/Impact";
import Testimonials from "@/components/pages/Testimonials";

const data: ImpactDataType[] = [
    {
        id: '01',
        title: 'Inspiring & entertaining',
        text: 'Dynamic storytelling, cultural insight, and rare charisma that ignite minds and move hearts.'
    },
    {
        id: '02',
        title: 'Practical & actionable',
        text: 'Real-world tools, strategic frameworks, and bold ideas leaders can apply immediately, pulled from 20 years as a founder and CEO.'
    },
    {
        id: '03',
        title: 'Transformative & memorable',
        text: 'Not just a keynote—an experience. Sunny leaves audiences thinking differently about leadership, vision, and what’s possible.'
    },
]


export default function VisionaryLeadershipPage() {
  return (
    <PageWrapper>
      <main className="bg-white relative">
        <PageHead head="Visionary Leadership/" title="Keynote">
          Visionary leadership shapes direction,
          inspires action, and brings clarity to complexity. This
          keynote explores the core traits of visionary leaders
          and how to define a compelling vision that aligns
          people to do big things.
        </PageHead>
        <Vision />
        <Companies text="Sunny has delivered talks for world-leading companies" />
        <BrandIcon />
        <Speaking
          video="/assets/images/01167253-2a0ecde7.mp4"
          left="Sunny Bonnell"
          center="Speaker reel (1:00)"
          right={(
            <a href="" className="slide-up u-link is-full md:text-[1.2vw] text-[4vw] font-medium inline-block">Book Sunny to speak</a>
          )}
        />
        <Impact
            text="Expect immersive, thoughtful, and deeply relevant insights."
            data={data}
            link={(<a href="/speaking" className="u-link is-full">Book Sunny to speak</a>)}
          />
          <Testimonials />
      </main>
    </PageWrapper>
  );
}
