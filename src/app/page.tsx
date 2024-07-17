import Evolution from "./components/evolution";
import FV from "./components/fv";
import Generation from "./components/generation";
import Introduction from "./components/introduction";
import Reasons from "./components/reasons";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <FV />
      <div className="bg-[url('/assets/images/bg.png')] bg-cover overflow-hidden">
      <Introduction />
      <Evolution />
      <Reasons />
      <Generation />
      </div>
    </main>
  );
}
