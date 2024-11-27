"use client";
import dynamic from "next/dynamic";

const ShowImge = dynamic(() => import('./showImage'), { ssr: false });

export default function Showcase() {
  return (
    <main>
      <ShowImge />
    </main>
  );
}
