import FV from "./components/fv";
import Introduction from "./components/introduction";

export default function Home() {
  return (
    <main>
      <FV />
      <div className="bg-[url('/assets/images/bg.png')] bg-cover">
      <Introduction />
      </div>
    </main>
  );
}
