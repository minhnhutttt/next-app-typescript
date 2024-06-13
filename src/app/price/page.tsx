import Feature from "@/components/feature";
import Monitor from "./components/monitor";
import Purpose from "./components/purpose";
import Experience from "./components/experience";
import Simulation from "./components/simulation";
import Plan from "./components/plan";
import Goen from "./components/goen";

export default function Price() {
  return (
    <main>
        <Feature image="/assets/images/price-feature.png">料 金</Feature>
        <Monitor />
        <Purpose />
        <Experience />
        <Simulation />
        <Plan />
        <Goen />
    </main>
  );
}
