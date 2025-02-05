import FAQ from "./components/faq/Faq";
import Fv from "./components/Fv";
import Introduction from "./components/Introduction";
import Mission from "./components/Mission";
import Work from "./components/Work";
export default function Home() {
  return (
    <main className="relative">
      <Fv />
      <Mission />
      <Introduction />
      <FAQ />
      <Work />
    </main>
  );
}
