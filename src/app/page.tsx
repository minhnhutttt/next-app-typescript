import Image from "next/image";
import FV from "./components/fv";
import Introduction from "./components/introduction";

export default function Home() {
  return (
    <main>
      <FV />
      <Introduction />
    </main>
  );
}
