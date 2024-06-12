import Feature from "@/components/feature";
import Monitor from "./components/monitor";
import Purpose from "./components/purpose";
import Experience from "./components/experience";

export default function Price() {
  return (
    <main>
        <Feature image="/assets/images/price-feature.png">料 金</Feature>
        <Monitor />
        <Purpose />
        <Experience />
    </main>
  );
}
