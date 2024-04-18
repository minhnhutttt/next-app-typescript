import Image from "next/image";
import FV from "./components/fv";
import Introduction from "./components/introduction";
import Present from "./components/present";

export default function Home() {
  return (
    <main>
      <FV />
      <Introduction />
      <Present />
    </main>
  );
}
