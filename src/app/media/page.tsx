"use client"
import PageHead from "@/components/PageHead";
import Introduction from "./components/Introduction";
import Collections from "./components/Collections";
import Outlets from "./components/Outlets";
import Testimonials from "./components/Testimonials";

export default function Media() {
  return (
    <main className="bg-white relative">
        <PageHead head="Press & Media/Press & Media/Press & Media/" title="Press">
            Known for her bold perspective, Sunny is a go-to voice for media seeking sharp insights on leadership, culture, and brand.
        </PageHead>
        <Introduction />
        <Collections />
        <Outlets />
        <Testimonials />
    </main>
  );
}
