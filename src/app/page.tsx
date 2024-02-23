import FV from "./components/pages/home/fv";
import Introduction from "./components/pages/home/introduction";
import NFTLink from "./components/pages/home/nftLink";
import NFTSlider from "./components/pages/home/nftSlider";

export default function Home() {
  return (
    <main>
      <FV />
      <NFTLink />
      <Introduction />
      <NFTSlider />
    </main>
  );
}
