
import Fv from "./components/Fv";
import Howto from "./components/Howto";
import Introduction from "./components/Introduction";
import Strength from "./components/Strength";
export default function Home() {
  return (
    <main className="relative">
      <Fv />
      <Introduction />
      <Strength />
      <Howto />
    </main>
  );
}
