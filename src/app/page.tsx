import Image from "next/image";
import FV from "./components/pages/home/fv";
import AllInOne from "./components/pages/home/allInOne";
import Points from "./components/pages/home/points/points";
import Features from "./components/pages/home/features";
import Price from "./components/pages/home/price";

export default function Home() {
  return (
    <main className="">
      <FV />
      <AllInOne />
      <Points />
      <Features />
      <Price />
    </main>
  );
}
