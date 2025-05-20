
import Diagnosis from "./components/Diagnosis";
import Features from "./components/Features";
import Fv from "./components/Fv";
import Introduction from "./components/Introduction";
import Kiro from "./components/Kiro";
import Profile from "./components/Profile";
export default function Home() {
  return (
    <main className="relative">
      <Fv />
      <div className="bg-[url(/assets/images/bg-1.png)] bg-[size:100%_auto] bg-no-repeat">
        <Introduction />
        <Diagnosis />
      </div>
      <div className="bg-[url(/assets/images/bg-2.png)] bg-[size:100%_auto] bg-no-repeat bg-right-bottom">
        <Profile />
      </div>
      <div className="bg-[url(/assets/images/bg-1.png)] bg-[size:100%_auto] bg-no-repeat bg-right-bottom">
        <Features />
      </div>
      <Kiro />
      
    </main>
  );
}
