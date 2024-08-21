import Emergency from "./components/emergency";
import FV from "./components/fv";
import Howto from "./components/howto";
import List from "./components/list";
import Merit from "./components/merit";
import Work from "./components/work";

export default function Home() {
  return (
    <main>
      <FV />
      <Emergency />
      <div className="bg-[url('/assets/images/bg-merit.png')]">
        <div className="bg-[url('/assets/images/bg-01.png')] bg-cover bg-bottom">
          <List />
          <Work />
        </div>
        <Merit />
      </div>
      <Howto />

    </main>
  );
}
