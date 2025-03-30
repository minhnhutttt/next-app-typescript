"use client";

import MembersContent from "./components/MembersContent";


export default function About() {
  return (
    <main className="mt-[150px] overflow-hidden">
      <section>
        <h1 className="md:text-[64px] font-bold text-[32px] text-center md:py-[60px] py-8 leading-[1.8]">
        BOARD MEMBERS
        </h1>
        <MembersContent />
      </section>
    </main>
  );
}
