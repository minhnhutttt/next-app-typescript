
import FAQ from "./components/faq/Faq";
import Fv from "./components/Fv";
import Howto from "./components/Howto";
import Introduction from "./components/Introduction";
import Oem from "./components/Oem";
import Seen from "./components/Seen";
import Strength from "./components/Strength";
export default function Home() {
  return (
    <main className="relative">
      <Fv />
      <Introduction />
      <Strength />
      <Howto />
      <Seen />
      <Oem />
      <FAQ />
    </main>
  );
}
