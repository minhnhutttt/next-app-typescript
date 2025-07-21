import Account from "./components/Account";
import Contact from "./components/Contact";
import Download from "./components/Download";
import Fv from "./components/Fv";
import Introduction from "./components/Introduction";
import OfLab from "./components/OfLab";
import Sns from "./components/Sns";

export default function Home() {
  return (
    <main className="relative">
      <Fv />
      <Introduction />
      <Account />
      <Sns />
      <OfLab />
      <Download />
      <Contact />
    </main>
  );
}
