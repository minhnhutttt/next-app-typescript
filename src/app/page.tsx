import Evolution from "./components/evolution";
import FV from "./components/fv";
import Introduction from "./components/introduction";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <FV />
      <div className="bg-[url('/assets/images/bg.png')] bg-cover overflow-hidden">
      <Introduction />
      <Evolution />
      </div>
    </main>
  );
}
