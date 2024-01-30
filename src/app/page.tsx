import Image from "next/image";
import FV from "./components/pages/home/fv";
import AllInOne from "./components/pages/home/allInOne";
import Points from "./components/pages/home/points/points";

export default function Home() {
  return (
    <main className="">
      <FV />
      <AllInOne />
      <Points />
    </main>
  );
}
