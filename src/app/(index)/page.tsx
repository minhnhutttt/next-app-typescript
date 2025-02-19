import Fv from "./components/Fv";
import Sections from "./components/Sections";
export default function Home() {
  return (
    <main className="relative bg-[url(/assets/images/bg-gradient.png)] bg-[size:100%_auto] bg-no-repeat">
      <Fv />
      <Sections />
    </main>
  );
}
