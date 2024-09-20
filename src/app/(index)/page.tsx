import FV from "./components/fv";
import Technology from "./components/technology";
import Feature from "./components/feature";
import Research from "./components/research";
import Technical from "./components/technical";
import Ethical from "./components/ethical";
import Directions from "./components/directions";

export default function Home() {
  return (
    <main>
      <FV />
      <Technology />
      <Feature />
      <Research />
      <Technical />
      <Ethical />
      <Directions />
    </main>
  );
}
