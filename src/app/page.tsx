import Image from "next/image";
import FV from "./components/fv";
import Introduction from "./components/introduction";
import Present from "./components/present";
import Movie from "./components/movie";
import Comparison from "./components/comparison";

export default function Home() {
  return (
    <main>
      <FV />
      <Introduction />
      <Present />
      <Movie />
      <Comparison />
    </main>
  );
}
