import Feature from "./components/Feature";
import FV from "./components/Fv";
import Introduction from "./components/Introduction";
import Result from "./components/Result";
import Seo from "./components/Seo";
import Setup from "./components/Setup";
import Usecase from "./components/Usecase";

export default function Home() {
  return (
    <main>
        <FV />
        <Introduction />
        <div className=" bg-[url(/assets/images/background.png)] bg-top bg-[size:100%_auto]">
          <Feature />
          <Result />
          <Seo />
          <Setup />
          <Usecase />
        </div>
    </main>
  );
}
