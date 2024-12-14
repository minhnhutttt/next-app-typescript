import FV from "./components/fv";
import Highways from "./components/highways";
import Introduction from "./components/introduction";
import Technical from "./components/technical";

export default function Home() {
  return (
    <main>
      <FV />
      <Introduction />
      <Highways />
      <Technical />
    </main>
  );
}
