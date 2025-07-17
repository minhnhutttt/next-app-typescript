"use client"
import PageHead from "@/components/pages/PageHead";
import PageWrapper from "@/components/container/PageWrapper";
import Speaking from "@/components/pages/Speaking";
import Message from "./components/Message";
import Brands from "@/components/pages/Brands";
import Letter from "@/components/pages/Letter";

export default function AboutPage() {
  return (
    <PageWrapper>
      <main className="bg-white relative">
        <PageHead head="About/About/About/" title="About">
          Sunny Bonnell is a bestselling author, a
          Thinkers50 Radar, and an international motivational
          speaker. Admired for her sharp intellect, she helps
          teams rethink how they inspire innovation, shape
          culture, and scale ideas that matter.
        </PageHead>
        <Speaking
          video="/assets/images/01167253-2a0ecde7.mp4"
          left="(Speaker Reel)"
          center="Through her keynotes and work with Fortune 1000s and
            high-growth startups, Sunny's work explores the anatomy of
            visionary leadership and decodes the psychology of belief
            inside organizations to drive culture, brand, and innovation
            forward."
          right={(
            <a href="" className="slide-up u-link is-full md:text-[1.2vw] text-[4vw] font-medium inline-block">Book Sunny to speak</a>
          )}
        />
        <Message />
        <Brands
          left="(02)"
          center="Delivering keynotes to world leading brands"
          right={(
            <a href="" className="slide-up u-link is-full md:text-[1.2vw] text-[4vw] font-medium inline-block">Contact Sunny</a>
          )}
        />
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
