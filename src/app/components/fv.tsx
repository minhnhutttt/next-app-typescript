"use client";

import { useCallback, useEffect, useState } from "react";

const FV = () => {
  const [NavOpen, setNavOpen] = useState(false)

  const close = useCallback(() => {
    setNavOpen(false)
  }, [])
  return (
    <section className="flex">
      <div className="w-1/2 h-screen bg-[#F77F7F]/[0.6]"></div>
      <div className="w-1/2 h-screen bg-white"></div>
    </section>
  );
};

export default FV;
