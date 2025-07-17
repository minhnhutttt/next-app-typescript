"use client"
import PageHead from "@/components/pages/PageHead";
import PageWrapper from "@/components/container/PageWrapper";
import Contact from "./components/Contact";

export default function ContactPage() {
  return (
    <PageWrapper>
      <main className="bg-white relative">
        <PageHead head="Contact/Contact/Contact/" title="Contact">
          Sunny Bonnell redefines leadership for a new
          era of brand and culture. Reach out below to contact
          her for speaking or press opportunities.
        </PageHead>
        <Contact />
      </main>
    </PageWrapper>
  );
}
