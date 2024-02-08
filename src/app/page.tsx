"use client"
import FV from "./components/pages/home/fv";
import GetStarted from "./components/pages/home/getStarted";
import Service from "./components/pages/home/service";
import WorkFlow from "./components/pages/home/workFlow";

export default function Home() {
  return (
    <main>
      <FV />
      <GetStarted />
      <Service />
      <WorkFlow />
    </main>
  );
}
