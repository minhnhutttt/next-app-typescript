import Image from "next/image";
import FV from "./components/fv";
import Introduction from "./components/introduction";
import Work from "./components/work";
import Flow from "./components/flow";
import Merit from "./components/merit";
import Howto from "./components/howto";
import FAQ from "./components/faq/faq";
import Line from "./components/line";

export default function Home() {
  return (
    <main>
      <FV />
      <Introduction />
      <Work />
      <Flow />
      <Merit />
      <Howto />
      <FAQ />
      <Line />
    </main>
  );
}
