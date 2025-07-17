"use client"
import PageHead from "@/components/PageHead";
import PageWrapper from "@/layout/PageWrapper";
import SunnyBook from "./components/SunnyBook";

export default function Bookspage() {
  return (
    <PageWrapper>
      <main className="bg-white relative">
          <PageHead head="Books/Books/Books/" title="Books">
              From rebellious thinking to big ideas, Sunny Bonnell’s books offer a fresh take on leadership, culture, and innovation.
          </PageHead>
          <SunnyBook />
      </main>
    </PageWrapper>
  );
}
