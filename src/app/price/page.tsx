import Feature from "@/components/feature";
import Monitor from "./components/monitor";
import Purpose from "./components/purpose";
import Experience from "./components/experience";
import Simulation from "./components/simulation";
import Plan from "./components/plan";
import Goen from "./components/goen";
import Message from "./components/message";

export default function Price() {
  return (
    <main>
        <Feature image="/assets/images/price-feature.png">料 金</Feature>
        <Monitor />
        <Purpose />
        <Experience />
        <Simulation />
        <Plan />
        <div className=" bg-[url('/assets/images/bg-goen.png')] bg-[length:100%_auto] bg-no-repeat bg-[center_top_100px]">
          <Goen />
          <Message />
        </div>
    </main>
  );
}
