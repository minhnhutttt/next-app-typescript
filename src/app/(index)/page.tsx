import Image from "next/image";
import FV from "./components/fv";
import Technology from "./components/technology";
import Feature from "./components/feature";
import Research from "./components/research";

export default function Home() {
  return (
    <main>
      <FV />
      <Technology />
      <Feature />
      <Research />
    </main>
  );
}
