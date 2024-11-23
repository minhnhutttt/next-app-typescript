import Donation from "./components/donation";
import Ecosystem from "./components/ecosystem";
import FV from "./components/fv";
import Project from "./components/project";
import Voc from "./components/voc";

export default function Home() {
  return (
    <main>
      <div className="bg-[url('/assets/images/bg-01.png')] bg-cover">
      <FV />
      <Project />
      </div>
      <Voc />
      <Ecosystem />
      <Donation />
    </main>
  );
}
