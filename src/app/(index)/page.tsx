import Features from "./components/Features";
import Fv from "./components/Fv";
import Introduction from "./components/Introduction";
import What from "./components/What";
export default function Home() {
  return (
    <main className="relative">
      <Fv />
      <Introduction />
      <What />
      <Features />
    </main>
  );
}
