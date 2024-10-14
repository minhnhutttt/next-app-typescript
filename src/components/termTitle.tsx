import { ReactNode } from "react";

export default function TermTitle({children}: {children: ReactNode}) {
  return (
    <h3 className="md:text-[32px] text-[21px] mt-12 mb-2.5">{children}</h3>
  );
}
