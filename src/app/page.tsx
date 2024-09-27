import Deals from "./(index)/components/deals";
import FV from "./(index)/components/fv";
import Introduction from "./(index)/components/introduction";
import Enjoy from "./(index)/components/enjoy";
import Use from "./(index)/components/use";
import FAQ from "./(index)/components/faq/faq";

export default function Home() {
  return (
    <main>
      <div className="relative overflow-hidden">
        <div className="confetti">
        <span></span><span></span><span></span>  <span></span><span></span><span></span>  <span></span><span></span><span></span>  <span></span><span></span>
        </div>

        <FV />
        <Introduction />
      </div>
      <Enjoy />
      <Deals />
      <Use />
      <FAQ />
    </main>
  );
}
