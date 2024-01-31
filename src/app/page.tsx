import Image from "next/image";
import FV from "./components/pages/home/fv";
import AllInOne from "./components/pages/home/allInOne";
import Points from "./components/pages/home/points/points";
import Features from "./components/pages/home/features";
import Price from "./components/pages/home/price";
import Comparison from "./components/pages/home/comparison";
import Steps from "./components/pages/home/steps/steps";
import FAQ from "./components/pages/home/faq/faq";
import Contact from "./components/pages/home/contact";

export default function Home() {
  return (
    <main className="">
      <FV />
      <AllInOne />
      <Points />
      <Features />
      <Price />
      <Comparison />
      <Steps />
      <FAQ />
      <Contact />
    </main>
  );
}
