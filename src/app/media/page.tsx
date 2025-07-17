"use client"
import PageHead from "@/components/pages/PageHead";
import Introduction from "./components/Introduction";
import Collections from "./components/Collections";
import Outlets from "./components/Outlets";
import Testimonials from "../../components/pages/Testimonials";
import PageWrapper from "@/components/container/PageWrapper";
import Letter from "@/components/pages/Letter";

export default function MediaPage() {

  return (
    <PageWrapper>
      <main className="bg-white relative">
        <PageHead head="Press & Media/Press & Media/Press & Media/" title="Press">
          Known for her bold perspective, Sunny is a go-to voice for media seeking sharp insights on leadership, culture, and brand.
        </PageHead>
        <Introduction />
        <Collections />
        <Outlets />
        <Testimonials />
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
