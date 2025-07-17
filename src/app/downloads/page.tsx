"use client"
import PageHead from "@/components/PageHead";
import PageWrapper from "@/layout/PageWrapper";
import Downloads from "./components/Downloads";

export default function DownloadsPage() {
  return (
    <PageWrapper>
      <main className="bg-white relative">
          <PageHead head="Downloads/Downloads/Downloads/" title="Downloads">
              Download the official Sunny Bonnell press kit approved media assets for speaking, media, and promotional use.
          </PageHead>
          <Downloads />
      </main>
    </PageWrapper>
  );
}
