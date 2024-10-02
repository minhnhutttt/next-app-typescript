import Image from "next/image";
import FV from "./components/fv";
import BackgroundGradient from "@/components/backgroundGradient";
import Product from "./components/product";

export default function Home() {
  return (
    <main>
      <BackgroundGradient>
      <div className="bg-[url('/assets/images/fv-bg.png')] bg-[length:100%_auto] bg-no-repeat bg-top">
        <FV />
        <Product />
      </div>
      

      </BackgroundGradient>
    </main>
  );
}
