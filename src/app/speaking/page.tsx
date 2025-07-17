"use client"
import PageHead from "@/components/pages/PageHead";
import Signature from "./components/Signature";
import VideoReel from "./components/VideoReel";
import Impact from "./components/Impact";
import Book from "./components/Book";
import Companies from "./components/Companies";
import PageWrapper from "@/components/container/PageWrapper";

export default function SpeakingPage() {
  return (
    <PageWrapper>
      <main className="bg-white relative">
          <PageHead head="Speaking/Speaking/Speaking/" title="Speaking">
              A trusted voice on leadership and brand, Sunny delivers inspiring keynotes that reveal how leading with vision transforms culture and drives innovation.
          </PageHead>
          <Signature />
          <VideoReel />
          <Impact />
          <Book />
          <Companies />
      </main>
    </PageWrapper>
  );
}
