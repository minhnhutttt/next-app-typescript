import Fv from "./components/Fv";
import Introduction from "./components/Introduction";
import OpenFave from "./components/OpenFave";
import Getting from "./components/Getting";
import FAQ from "./components/faq/faq";
export default function Home() {
  return (
    <main className="relative">
      <Fv />
      <Introduction />
      <OpenFave />
            <Getting />
            <FAQ />
    </main>
  );
}
