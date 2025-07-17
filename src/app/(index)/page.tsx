import About from "./components/About";
import Brands from "./components/Brands";
import Fv from "./components/Fv";
import Signature from "./components/Signature";
import Press from "./components/Press";
import Author from "./components/Author";
import PageWrapper from "@/layout/PageWrapper";
import Speaking from "@/components/Speaking";

export default function Home() {

  return (
    <PageWrapper>
      <main className="bg-white relative">
        <Fv />
        <About />
        <Brands />
        <Signature />
        <Speaking
          video="/assets/images/01167253-2a0ecde7.mp4"
          left="(Keynote Speaking)"
          center="Sunny Bonnell inspires leaders to rethink what it means to lead—offering clear, actionable frameworks that turn bold vision into the driving force behind culture, brand, and growth."
          right={(
            <a href="" className="slide-up u-link is-full md:text-[1.2vw] text-[4vw] font-medium inline-block">Book Sunny to speak</a>
          )}
        />
        <Press />
        <Author />
      </main>
    </PageWrapper>
  );
}
