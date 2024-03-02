import Feature from "./components/pages/home/feature";
import FV from "./components/pages/home/fv";
import Introduction from "./components/pages/home/introduction";
import Use from "./components/pages/home/use";

export default function Home() {
  return (
    <main>
      <FV />
      <Introduction />
      <Feature />
      <Use />
    </main>
  );
}
