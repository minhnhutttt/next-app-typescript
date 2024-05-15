import Logo from "./components/logo";
import Sliders from "./components/sliders";
import Introduction from "./components/introduction";

export default function Home() {
  return (
    <main className="bg-[url('/assets/images/bg.png')] bg-[lenght:100%_auto] bg-no-repeat bg-top bg-black">
      <Logo />
      <Sliders />
      <Introduction />
    </main>
  );
}
