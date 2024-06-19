"use client";
import Case from "./components/case";
import Contact from "./components/contact";
import FAQ from "./components/faq/faq";
import Flow from "./components/flow";
import Functionality from "./components/functionality";
import FV from "./components/fv";
import Introduction from "./components/introduction";
import Other from "./components/other";
import PlansPricing from "./components/plansPricing";
import Service from "./components/service";
import Tracou from "./components/tracou";
import { useEffect, useState } from "react";
import { useFrontChatBoot } from "@/hooks/use-front-chat-boot";

export default function Home() {
  const [chatId] = useState<string>("028badced4314b3a523b1d472081d958");

  const { initialize } = useFrontChatBoot();

  useEffect(() => {
    if (!initialize) {
      return;
    }
    initialize({ chatId });
  });
  return (
    <main>
      <FV />
      <Introduction />
      <Functionality />
      <Service />
      <Case />
      <div className="bg-[url('/assets/images/bg-other.png')] bg-cover">
        <Other />
        <Tracou />
      </div>
      <PlansPricing />
      <Flow />
      <Contact />
      <FAQ />
    </main>
  );
}
