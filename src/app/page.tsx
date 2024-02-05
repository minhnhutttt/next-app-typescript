import FV from "./components/pages/home/fv";
import Introduction from "./components/pages/home/introduction";
import Experience from "./components/pages/home/experience";
import Coupon from "./components/pages/home/coupon";
import Items from "./components/pages/home/items";
import Guide from "./components/pages/home/guide";

export default function Home() {
  return (
    <main>
      <FV />
      <Introduction />
      <Experience />
      <Coupon />
      <Items />
      <Guide />
    </main>
  );
}
