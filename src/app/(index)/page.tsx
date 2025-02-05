import FAQ from "./components/faq/Faq";
import Fv from "./components/Fv";
import Introduction from "./components/Introduction";
import Mission from "./components/Mission";
import OurWork from "./components/OurWork";
import Work from "./components/Work";
export default function Home() {
  return (
    <main className="relative">
      <Fv />
      <Introduction />
      <OurWork />
      {/* <FAQ />
      <Work /> */}
    </main>
  );
}
