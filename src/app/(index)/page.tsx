import Use from "./components/use";
import User from "./components/user";
import Waku from "./components/waku";
import Howto from "./components/howto";
import FAQ from "./components/faq/faq";
import FV from "./components/fv";

export default function Home() {
  return (
    <main>
      <FV />
      <Use />
      <User />
      <Waku />
      <Howto />
      <FAQ />
    </main>
  );
}
