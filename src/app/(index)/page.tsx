import Cases from "./components/Cases";
import Fv from "./components/Fv";
import Introduction from "./components/Introduction";

export default function Home() {
  return (
    <main className="relative">
      <Fv />
      <Cases />
      <Introduction />
    </main>
  );
}
