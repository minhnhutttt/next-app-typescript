import Emergency from "./components/emergency";
import FV from "./components/fv";
import List from "./components/list";
import Work from "./components/work";

export default function Home() {
  return (
    <main>
      <FV />
      <Emergency />
      <div className="bg-[linear-gradient(180deg,_#BC1022_0%,_#FA3D51_100%)]">
        <List />
        <Work />
      </div>
    </main>
  );
}
