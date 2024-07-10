import Image from "next/image";
import FV from "./(index)/components/fv";
import Introduction from "./(index)/components/introduction";

export default function Home() {
  return (
    <main>
      <div className="bg-[url('/assets/images/bg.png')] bg-cover">
        <FV />
        <Introduction />
      </div>
    </main>
  );
}
