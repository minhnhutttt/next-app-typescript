"use client"
import PageHead from "@/components/PageHead";
import PageWrapper from "@/layout/PageWrapper";
import SunnyBook from "./components/SunnyBook";
import Speaking from "@/components/Speaking";

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
      </main>
    </PageWrapper>
  );
}
