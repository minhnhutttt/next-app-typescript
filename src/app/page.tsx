import Issue from "./components/Issue";
import UseCase from "./components/UseCase";
import FV from "./components/fv";
import Introduction from "./components/introduction";
import Problem from "./components/problem";
import Solution from "./components/solution";

export default function Home() {
  return (
    <main>
      <FV />
      <Introduction />
      <Problem />
      <Solution />
      <Issue />
      <UseCase />
    </main>
  );
}
