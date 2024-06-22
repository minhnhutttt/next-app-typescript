import FV from "./components/fv";
import Stack from "./components/stack";
import Service from "./components/service";
import Digital from "./components/digital";
import Partnership from "./components/partnership";

export default function Home() {
  return (
    <main>
      <FV />
      <Stack />
      <Service />
      <Digital />
      <Partnership />
    </main>
  );
}
