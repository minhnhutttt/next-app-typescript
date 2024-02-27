import Experience from "./components/pages/home/experience";
import FV from "./components/pages/home/fv";
import Introduction from "./components/pages/home/introduction";
import Recommend from "./components/pages/home/recommend";
import Uses from "./components/pages/home/uses";

export default function Home() {
  return (
    <main>
      <FV />
      <Introduction />
      <Experience />
      <Uses />
      <Recommend />
    </main>
  );
}
