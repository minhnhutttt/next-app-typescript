import Brain from "./components/brain";
import FV from "./components/fv";
import Introduction from "./components/introduction";
import Vision from "./components/vision";

export default function Home() {
  return (
    <main>
        <FV />
        <Introduction />
        <Vision />
        <Brain />
    </main>
  );
}
