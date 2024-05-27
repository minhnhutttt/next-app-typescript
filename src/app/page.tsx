import Issue from "./components/issue";
import FV from "./components/fv";
import Introduction from "./components/introduction";
import Problem from "./components/problem";
import Solution from "./components/solution";
import UseCase from "./components/useCase";
import Plan from "./components/plan";
import Receive from "./components/receive";

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
    </main>
  );
}
