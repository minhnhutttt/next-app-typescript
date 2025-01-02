import Afterword from "./components/afterword";
import Application from "./components/application";
import Current from "./components/current";
import Fv from "./components/fv";
import Solutions from "./components/solutions";
import Token from "./components/token";
import Vision from "./components/vision";


export default function Home() {
  return (
    <main>
      <Fv />
      <Vision />
      <Current />
      <Application />
      <Token />
      <Solutions />
      <Afterword />
    </main>
  );
}
