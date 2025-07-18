"use client"
import About from "./components/About";
import Fv from "./components/Fv";
import Signature from "./components/Signature";
import Press from "./components/Press";
import Author from "./components/Author";
import PageWrapper from "@/components/container/PageWrapper";
import Speaking from "@/components/pages/Speaking";
import Brands from "@/components/pages/Brands";

export default function Home() {
  return (
    <PageWrapper>
      <main className="bg-white relative">
        <Fv />
        <About />
        <Brands
          left="(02)"
          center="Trusted advisor for industry leading brands"
          right={(
            <a href="" className="u-link is-full md:text-[1.2vw] text-[4vw] font-medium inline-block">Contact</a>
          )}
        />
        <Signature />
        <Speaking
          video="/assets/images/01167253-2a0ecde7.mp4"
          left="(Keynote Speaking)"
          center="Sunny Bonnell inspires leaders to rethink what it means to lead—offering clear, actionable frameworks that turn bold vision into the driving force behind culture, brand, and growth."
          right={(
            <a href="" className="u-link is-full md:text-[1.2vw] text-[4vw] font-medium inline-block">Book Sunny to speak</a>
          )}
        />
        <Press />
        <Author />
      </main>
    </PageWrapper>
  );
}
