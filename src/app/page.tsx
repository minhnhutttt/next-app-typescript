import Header from "@/components/header";
import FAQ from "./components/faq/faq";
import Fear from "./components/fear";
import FV from "./components/fv";
import Introduction from "./components/introduction";
import Memories from "./components/memories";
import Recover from "./components/recover";
import Story from "./components/story";
import Trust from "./components/trust";

export default function Home() {
  return (
    <main>
      <Header />
      <FV />
      <Fear />
      <Recover />
      <Introduction />
      <Story />
      <Trust />
      <Memories />
      <FAQ />
    </main>
  );
}
