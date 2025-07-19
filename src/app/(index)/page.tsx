import Account from "./components/Account";
import Fv from "./components/Fv";
import Introduction from "./components/Introduction";
export default function Home() {
  return (
    <main className="relative">
      <Fv />
      <Introduction />
      <Account />
    </main>
  );
}
