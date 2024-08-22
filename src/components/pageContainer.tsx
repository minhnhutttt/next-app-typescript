"use client";
import { ReactNode } from "react";

export default function PageContainer({ children }: {children: ReactNode}) {
  return (
    <div className="bg-[url('/assets/images/bg-page.png')] bg-cover">
        {children}
    </div>
  );
}
