import Image from "next/image";
import FV from "./components/pages/home/fv";
import Procedure from "./components/pages/home/procedure";

export default function Home() {
  return (
    <main>
      <FV />
      <Procedure />
    </main>
  );
}
