import FV from "./components/fv";
import Features from "./components/features";
import Gas from "./components/gas";

export default function Home() {
  return (
    <main className="h-[3000px]">
      <FV />
      <Features />
      <Gas />
    </main>
  );
}
