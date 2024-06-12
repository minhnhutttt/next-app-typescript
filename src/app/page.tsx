import FV from "./components/fv";
import Memories from "./components/memories";
import Moshimo from "./components/moshimo";
import Produce from "./components/produce";

export default function Home() {
  return (
    <main>
      <FV />
      <Produce />
      <Memories />
      <Moshimo />
    </main>
  );
}
