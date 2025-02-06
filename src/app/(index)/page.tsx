import FAQ from "./components/faq/Faq";
import Fv from "./components/Fv";
import Introduction from "./components/Introduction";
import Mission from "./components/Mission";
import OurWork from "./components/OurWork";
import Talk from "./components/Talk";
export default function Home() {
  return (
    <main className="relative">
      <Fv />
      <Introduction />
      <OurWork />
      <FAQ />
      <Talk />
    </main>
  );
}
