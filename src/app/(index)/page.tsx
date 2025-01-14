import Conclusion from "./components/Conclusion";
import Fv from "./components/Fv";
import Introduction from "./components/Introduction";
import Market from "./components/Market";
import Roadmap from "./components/Roadmap";
import Settlement from "./components/Settlement";
import Team from "./components/Team";
import Token from "./components/Token";
import WhatIs from "./components/WhatIs";

export default function Home() {
  return (
    <main className="relative">
      <Fv />
      <Introduction />
      <WhatIs />
      <Market />
      <div className="bg-[url(/assets/images/token-bg.png)] bg-[size:100%_100%] relative z-10">
      <Token />
      <Settlement />
      </div>
      <Roadmap />
      <Team />
      <Conclusion />
    </main>
  );
}
