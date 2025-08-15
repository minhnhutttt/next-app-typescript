"use client";

import { Suspense } from "react";
import InquiryClient from "./components/InquiryClient";

export default function Page() {
  return (
    <Suspense fallback={<div className="py-10 text-center">Loading…</div>}>
      <InquiryClient />
    </Suspense>
  );
}
