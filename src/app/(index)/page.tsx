import Fv from "./components/Fv";
import Introduction from "./components/Introduction";
import Market from "./components/Market";
import Token from "./components/Token";
import WhatIs from "./components/WhatIs";

export default function Home() {
  return (
    <main className="relative">
      <Fv />
      <Introduction />
      <WhatIs />
      <Market />
      <Token />
    </main>
  );
}
