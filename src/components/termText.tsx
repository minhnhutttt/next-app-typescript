import { ReactNode } from "react";

export default function TermText({children}: {children: ReactNode}) {
  return (
    <p className="md:text-[20px] text-[17px] leading-loose my-4">{children}</p>
  );
}
