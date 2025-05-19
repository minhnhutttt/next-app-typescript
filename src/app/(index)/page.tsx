
import Diagnosis from "./components/Diagnosis";
import Fv from "./components/Fv";
import Introduction from "./components/Introduction";
import Profile from "./components/Profile";
export default function Home() {
  return (
    <main className="relative">
      <Fv />
      <div className="bg-[url(/assets/images/bg-1.png)] bg-cover bg-no-repeat">
        <Introduction />
        <Diagnosis />
        <Profile />
      </div>
    </main>
  );
}
