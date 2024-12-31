import Image from "next/image";
import MainVisual from "./components/MainVisual";
import Fv from "./components/Fv";
import Introduction from "./components/Introduction";
import OpenFave from "./components/OpenFave";
import Features from "./components/Features";
import Special from "./components/Special";
import Getting from "./components/Getting";

export default function Home() {
  return (
    <main className="relative">
        <MainVisual />
        <div className="w-full md:w-[500px] xl:w-[640px] mx-auto min-h-screen bg-white relative z-10 [box-shadow:0px_4px_34px_0px_rgba(0,_0,_0,_0.25)]">
            <Fv />
            <Introduction />
            <OpenFave />
            <Features />
            <Special />
            <Getting />
        </div>
    </main>
  );
}
