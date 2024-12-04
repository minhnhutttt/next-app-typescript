"use client";
import Service from "./components/service";
import Reason from "./components/reason";
import useDarkMode from "@/hooks/useDarkMode";
import Project from "./components/project";
import FV from "./components/fv";

export default function Home() {
  const triggerRef = useDarkMode();
  return (
    <main className="text-white dark:text-black">
      <div className="bg-black dark:bg-[#FFF7F0] duration-150">
        <div className="md:px-[2em] px-[1em]">
          <FV />
        </div>
        <div ref={triggerRef}>
            <Service />
            <Reason />
          <Project />
        </div>
      </div>
    </main>
  );
}
