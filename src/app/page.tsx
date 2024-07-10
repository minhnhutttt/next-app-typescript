import Image from "next/image";
import FV from "./(index)/components/fv";
import Introduction from "./(index)/components/introduction";

export default function Home() {
  return (
    <main>
      <div className="bg-[url('/assets/images/bg.png')] max-md:bg-[length:87.083vw_auto] max-dt:bg-[length:47.083vw_auto] bg-no-repeat">
        <FV />
        <Introduction />
      </div>
    </main>
  );
}
