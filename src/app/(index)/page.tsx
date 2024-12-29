import Image from "next/image";
import MainVisual from "./components/MainVisual";
import Fv from "./components/fv";

export default function Home() {
  return (
    <main>
        <MainVisual />
        <div className="w-[640px] mx-auto min-h-screen bg-white relative z-10 [box-shadow:0px_4px_34px_0px_rgba(0,_0,_0,_0.25)]">
            <Fv />
        </div>
    </main>
  );
}
