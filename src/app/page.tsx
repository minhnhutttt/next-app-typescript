import Feature from "./components/feature";
import FV from "./components/fv";
import Line from "./components/line";
import Profile from "./components/profile";
import Sake from "./components/sake";
import Vision from "./components/vision";

export default function Home() {
  return (
    <main>
      <FV />
      <Vision />
      <Sake />
      <Feature />
      <Profile />
      <Line />
    </main>
  );
}
