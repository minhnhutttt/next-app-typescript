import FV from "./(index)/components/fv";
import Howto from "./(index)/components/howto";
import Introduction from "./(index)/components/introduction";

export default function Home() {
  return (
    <main>
      <FV />
      <Introduction />
      <Howto />
    </main>
  );
}
