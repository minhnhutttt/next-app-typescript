"use client"
import PageHead from "@/components/pages/PageHead";
import PageWrapper from "@/components/container/PageWrapper";
import Vision from "../components/Vision";
import BrandIcon from "../components/BrandIcon";
import Speaking from "@/components/pages/Speaking";
import Impact, { ImpactDataType } from "@/components/pages/Impact";
import Testimonials from "@/components/pages/Testimonials";
import Details from "@/components/pages/Detail";
import Ignite from "@/components/pages/Ignite";
import Letter from "@/components/pages/Letter";

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
        <PageHead head="Brand/Brand/Brand/" title="Keynote">
          The most powerful brands of the future won't
just sell products, they’ll shape culture and lead with
meaning. This keynote unpacks what it takes to build a
brand that stays relevant and radically human in a
fast-changing world.
        </PageHead>
        <Vision
          title="A clear, compelling vision serves as a catalyst for
                    innovation, strategic alignment, and a culture of
                    ownership within an organization."
          text='"Vision is the highest form of leadership." - Sunny Bonnell'
          list={[
            {
              id: '01',
              title: 'About the talk',
              text: 'In times of rapid change and rising complexity, clarity of vision becomes a leader’s greatest advantage. This keynote explores what it takes to lead with vision, unpacking the mindset, behaviors, and principles that ignite alignment, energize teams, and set the course for lasting impact.'
            },
            {
              id: '02',
              title: 'About the talk',
              text: 'In times of rapid change and rising complexity, clarity of vision becomes a leader’s greatest advantage. This keynote explores what it takes to lead with vision, unpacking the mindset, behaviors, and principles that ignite alignment, energize teams, and set the course for lasting impact.'
            }
          ]}
          link={(<a href="/contact" className="u-link is-full">Book Sunny to speak</a>)}
        />
        <BrandIcon />
        <Speaking
          video="/assets/images/01167253-2a0ecde7.mp4"
          left="Sunny Bonnell"
          center="Speaker reel (1:00)"
          right={(
            <a href="" className="u-link is-full md:text-[1.2vw] text-[4vw] font-medium inline-block">Book Sunny to speak</a>
          )}
        />
        <Impact
          text="Expect immersive, thoughtful, and deeply relevant insights."
          data={data}
          link={(<a href="/speaking" className="u-link is-full">Book Sunny to speak</a>)}
        />
        <Testimonials />
        <Details />
        <Ignite />
        <Letter
          title="Speaking"
          text="Sunny Bonnell delivers unforgettable talks that do more than inspire—they equip, challenge, and transform, showing leaders how to wield vision as a force and build companies great people want to be part of."
          link={(
            <a href="#" className="u-link is-full">
              See Sunny’s signature talks
            </a>
          )}
        />
      </main>
    </PageWrapper>
  );
}
