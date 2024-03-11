import Image from "next/image";
import FV from "./components/pages/home/fv";
import Procedure from "./components/pages/home/procedure";
import Certificate from "./components/pages/home/certificate";

export default function Home() {
  return (
    <main>
      <FV />
      <Procedure />
      <Certificate />
    </main>
  );
}
