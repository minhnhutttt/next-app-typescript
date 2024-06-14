import Case from "./components/case";
import Functionality from "./components/functionality";
import FV from "./components/fv";
import Introduction from "./components/introduction";
import Service from "./components/service";

export default function Home() {
  return (
    <main>
      <FV />
      <Introduction />
      <Functionality />
      <Service />
      <Case />
    </main>
  );
}
