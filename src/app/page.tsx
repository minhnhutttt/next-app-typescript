import FV from "./components/fv";
import Introduction from "./components/introduction";
import Problem from "./components/problem";
import Solution from "./components/solution";
import Plan from "./components/plan";
import Receive from "./components/receive";
import FAQ from "./components/faq/faq";
import Issue from "./components/issue";
import UseCase from "./components/useCase";
export default function Home() {
  return (
    <main>
      <FV />
      <Introduction />
      <Problem />
      <Solution />
      <Issue />
      <UseCase />
      <Plan />
      <Receive />
      <FAQ />
    </main>
  );
}
